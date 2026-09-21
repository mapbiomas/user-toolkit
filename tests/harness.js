/**
 * Runs a toolkit script in Node with mocked `ee`, `ui`, `Map` and `Export`, walks
 * the panel flow, and records what the user sees and what the export tasks would
 * be. It is the safety net for the refactoring (docs/refactoring-plan.md).
 *
 * The mocks don't compute anything. Every `ee` object is a chainable stand-in,
 * `evaluate`/`getInfo` return plausible values, and the widgets record their
 * items and callbacks so the flow can be driven like a user would.
 */
var fs = require('fs');
var vm = require('vm');

// ------------------------------------------------------------------ ee

var FAKE_PROPERTIES = ['FEATURE_ID', 'NAME', 'system:index'];
var FAKE_FEATURES = ['Feature A', 'Feature B'];
var FAKE_LOGO = 'data:image/png;base64,iVBORw0KGgo=';

function eeObject(path) {
    path = path || [];
    var target = function () {};
    return new Proxy(target, {
        get: function (t, key) {
            if (key === Symbol.toPrimitive) { return function () { return '[ee]'; }; }
            if (key === 'toString') { return function () { return '[ee]'; }; }
            if (key === 'then') { return undefined; }
            if (key === '__path') { return path; }
            if (key === 'getInfo') {
                return function (cb) {
                    var value = fakeValue(path);
                    if (typeof cb === 'function') { cb(value); return undefined; }
                    return value;
                };
            }
            if (key === 'evaluate') {
                return function (cb) { cb(fakeValue(path), undefined); };
            }
            return eeObject(path.concat([String(key)]));
        },
        apply: function () { return eeObject(path.concat(['()'])); },
        construct: function () { return eeObject(path.concat(['new'])); }
    });
}

// guesses a value from the chain of calls that produced the ee object
function fakeValue(path) {
    var p = path.join('.');
    if (/propertyNames/.test(p)) { return FAKE_PROPERTIES.slice(); }
    if (/aggregate_array|distinct/.test(p)) { return FAKE_FEATURES.slice(); }
    if (/\.string/.test(p)) { return FAKE_LOGO; }
    if (/bandNames|keys|toList|getList|iterate|sort/.test(p)) { return []; }
    if (/size|length|Number/.test(p)) { return 1; }
    return 1;
}

// an account that has a MAPBIOMAS folder with one table in it, so the "own
// territory" path is exercised and not just the official tables
var FAKE_ROOTS = ['projects/fake/assets/OTHER', 'projects/fake/assets/MAPBIOMAS'];
var FAKE_USER_TABLES = ['projects/fake/assets/MAPBIOMAS/my_farms'];

function makeEE() {
    var ee = eeObject(['ee']);
    var data = {
        getAssetRoots: function () {
            return FAKE_ROOTS.map(function (id) { return { id: id }; });
        },
        getList: function (params) {
            var id = params && params.id;
            if (id && id.indexOf('/MAPBIOMAS') !== -1) {
                return FAKE_USER_TABLES.map(function (t) { return { id: t }; });
            }
            throw new Error('Asset not found: ' + id);
        },
        listAssets: function () { return { assets: [] }; },
        getAsset: function () { return {}; }
    };
    return new Proxy(ee, {
        get: function (t, key) {
            if (key === 'data') { return data; }
            return t[key];
        }
    });
}

// ------------------------------------------------------------------ ui

// widget item lists can come as JS arrays or as (mocked) ee lists
function asArray(v) {
    if (Array.isArray(v)) { return v.slice(); }
    if (v && v.__path) { var f = fakeValue(v.__path); return Array.isArray(f) ? f : []; }
    return [];
}

function makeUI(log) {
    var widgets = [];

    function styleObject() {
        var s = {};
        return { set: function (k, v) { s[k] = v; }, get: function (k) { return s[k]; } };
    }

    function widgetList(owner) {
        var items = [];
        return {
            add: function (w) { items.push(w); },
            set: function (i, w) { items[i] = w; },
            get: function (i) { return items[i]; },
            insert: function (i, w) { items.splice(i, 0, w); },
            remove: function (w) { var i = items.indexOf(w); if (i >= 0) { items.splice(i, 1); } },
            reset: function (list) { items = (list || []).slice(); },
            length: function () { return items.length; },
            forEach: function (fn) { items.forEach(fn); },
            map: function (fn) { return items.map(fn); },
            _items: function () { return items; },
            _owner: owner
        };
    }

    function widget(type, args) {
        var props = args.length === 1 && args[0] && typeof args[0] === 'object' && !Array.isArray(args[0]) ? args[0] : {};
        var w = {
            _type: type,
            _props: props,
            _args: args,
            _value: props.value,
            _items: asArray(props.items),
            _placeholder: props.placeholder,
            _label: props.label || (typeof args[0] === 'string' ? args[0] : undefined),
            _onChange: props.onChange,
            _onClick: props.onClick,
            _style: styleObject(),
            _children: widgetList(null)
        };
        (props.widgets || []).forEach(function (c) { w._children.add(c); });
        if (type === 'Checkbox' && typeof args[0] === 'string') { w._label = args[0]; w._value = args[1]; w._onChange = args[2]; }
        if (type === 'Button' && typeof args[0] === 'string') { w._label = args[0]; w._onClick = args[1]; }
        if (type === 'Select' && (Array.isArray(args[0]) || (args[0] && args[0].__path))) { w._items = asArray(args[0]); w._placeholder = args[1]; w._value = args[2]; w._onChange = args[3]; }

        var api = {
            add: function (c) { w._children.add(c); return api; },
            remove: function (c) { w._children.remove(c); return api; },
            clear: function () { w._children.reset([]); return api; },
            insert: function (i, c) { w._children.insert(i, c); return api; },
            widgets: function () { return w._children; },
            items: function () {
                return {
                    reset: function (l) { w._items = asArray(l); },
                    add: function (i) { w._items.push(i); },
                    getJsArray: function () { return w._items.slice(); },
                    length: function () { return w._items.length; }
                };
            },
            style: function () { return w._style; },
            setValue: function (v, trigger) {
                w._value = v;
                if (trigger !== false && w._onChange && type !== 'Label') { w._onChange(v, api); }
                return api;
            },
            getValue: function () { return w._value; },
            setPlaceholder: function (p) { w._placeholder = p; return api; },
            getPlaceholder: function () { return w._placeholder; },
            setLabel: function (l) { w._label = l; return api; },
            getLabel: function () { return w._label; },
            setUrl: function () { return api; },
            setImageUrl: function () { return api; },
            setDisabled: function () { return api; },
            setShown: function () { return api; },
            onChange: function (fn) { w._onChange = fn; return api; },
            onClick: function (fn) { w._onClick = fn; return api; },
            setLayout: function () { return api; },
            _w: w
        };
        widgets.push(api);
        return api;
    }

    var ui = {};
    ['Panel', 'Label', 'Select', 'Checkbox', 'Button', 'Textbox', 'Thumbnail', 'Slider', 'DateSlider', 'Chart']
        .forEach(function (type) {
            ui[type] = function () { return widget(type, Array.prototype.slice.call(arguments)); };
        });
    ui.Panel.Layout = { flow: function () { return {}; }, Flow: function () { return {}; }, absolute: function () { return {}; } };
    ui.Map = function () { return widget('Map', []); };
    ui.Map.Layer = function () {
        var args = Array.prototype.slice.call(arguments);
        var props = args[0] && typeof args[0] === 'object' && !args[0].__path ? args[0] : {};
        var name = props.name || args[2];
        log.layers.push(name);
        return { getName: function () { return name; }, setShown: function () {}, setOpacity: function () {}, _name: name };
    };
    ui.root = widget('Root', []);
    ui.root.setLayout = function () {};
    ui.url = { get: function () { return null; }, set: function () {} };
    ui.util = { debounce: function (f) { return f; }, setTimeout: function (f) { f(); } };
    return { ui: ui, widgets: widgets };
}

// ------------------------------------------------------------------ Map / Export

function makeMap(log) {
    var layers = [];
    var map = {
        add: function (l) { layers.push(l); if (l && l._name) { log.mapLayers.push(l._name); } },
        addLayer: function (obj, vis, name) { log.mapLayers.push(name); layers.push({ _name: name }); },
        remove: function (l) { var i = layers.indexOf(l); if (i >= 0) { layers.splice(i, 1); } },
        clear: function () { layers = []; },
        centerObject: function () {},
        setCenter: function () {},
        setOptions: function () {},
        setControlVisibility: function () {},
        style: function () { return { set: function () {} }; },
        layers: function () {
            return {
                reset: function () { layers = []; },
                forEach: function (fn) { layers.forEach(fn); },
                length: function () { return layers.length; },
                get: function (i) { return layers[i]; },
                remove: function (l) { map.remove(l); },
                add: function (l) { map.add(l); },
                insert: function (i, l) { layers.splice(i, 0, l); if (l && l._name) { log.mapLayers.push(l._name); } },
                set: function (i, l) { layers[i] = l; if (l && l._name) { log.mapLayers.push(l._name); } },
                map: function (fn) { return layers.map(fn); }
            };
        },
        widgets: function () { return { reset: function () {}, add: function () {}, forEach: function () {} }; },
        add_: null
    };
    return map;
}

function makeExport(log) {
    function task(kind) {
        return function (params) {
            var p = {};
            Object.keys(params || {}).forEach(function (k) {
                var v = params[k];
                p[k] = (typeof v === 'string' || typeof v === 'number' || typeof v === 'boolean') ? v : '[ee]';
            });
            log.exports.push({ kind: kind, params: p });
        };
    }
    return {
        image: { toDrive: task('image.toDrive'), toAsset: task('image.toAsset'), toCloudStorage: task('image.toCloudStorage') },
        table: { toDrive: task('table.toDrive'), toAsset: task('table.toAsset'), toCloudStorage: task('table.toCloudStorage') }
    };
}

// ------------------------------------------------------------------ require

var path = require('path');

// this repository, as the Code Editor addresses it
var THIS_REPO = 'users/mapbiomas/user-toolkit:';
var ROOT = path.join(__dirname, '..');

// `require('users/mapbiomas/user-toolkit:core/v1/area.js')` loads the real file,
// in the same mocked context. Any other module (Mapp, Legend, Palettes…) lives in
// GEE and stays a stand-in.
function makeRequire(ctx) {
    var cache = {};
    return function (id) {
        if (String(id).indexOf(THIS_REPO) !== 0) { return eeObject(['require']); }
        var rel = String(id).slice(THIS_REPO.length);
        if (!cache[rel]) {
            var exported = {};
            var src = fs.readFileSync(path.join(ROOT, rel), 'utf8');
            vm.runInContext('(function (exports) {\n' + src + '\n})', ctx, { timeout: 20000 })(exported);
            cache[rel] = exported;
        }
        return cache[rel];
    };
}

// ------------------------------------------------------------------ load

function load(file) {
    var log = { layers: [], mapLayers: [], exports: [], prints: 0 };
    var made = makeUI(log);
    var ctx = {
        ee: makeEE(),
        ui: made.ui,
        Map: makeMap(log),
        Export: makeExport(log),
        Chart: made.ui.Chart,
        print: function () { log.prints++; },
        console: console
    };
    vm.createContext(ctx);
    ctx.require = makeRequire(ctx);
    var src = fs.readFileSync(file, 'utf8');
    vm.runInContext(src + '\n;this.__App = (typeof App !== "undefined") ? App : null;', ctx, { timeout: 20000 });
    return { App: ctx.__App, log: log, widgets: made.widgets };
}

module.exports = { load: load, FAKE_PROPERTIES: FAKE_PROPERTIES, FAKE_FEATURES: FAKE_FEATURES };
