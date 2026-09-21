/**
 * Behavior snapshot of every toolkit (Phase 0 of docs/refactoring-plan.md).
 *
 *   node tests/snapshot.js           compare with tests/snapshots/*.json (exit 1 on differences)
 *   node tests/snapshot.js --update  rewrite the snapshots
 *   node tests/snapshot.js lulc      only some toolkits
 *
 * For each region it records the collections, and for each collection the data
 * types. For the latest collection of each region it walks the whole flow with
 * the first official territory table: property → feature → data type → the
 * latest layer → export. It records the layer names and the export tasks.
 */
var fs = require('fs');
var path = require('path');
var harness = require('./harness');

var ROOT = path.join(__dirname, '..');
var SNAPSHOTS = path.join(__dirname, 'snapshots');
var TOOLKITS = ['lulc', 'deforestation-regeneration', 'fire', 'water', 'irrigation',
    'mining', 'pasture', 'soil', 'degradation'];

// the newest Select whose placeholder matches, created after index `since`
function newestSelect(widgets, since, rx) {
    for (var i = widgets.length - 1; i >= since; i--) {
        var w = widgets[i]._w;
        if (w._type === 'Select' && rx.test(String(w._placeholder || ''))) { return widgets[i]; }
    }
    return null;
}

function newest(widgets, since, test) {
    for (var i = widgets.length - 1; i >= since; i--) {
        if (test(widgets[i]._w)) { return widgets[i]; }
    }
    return null;
}

function items(select) {
    return (select && select._w._items || []).map(function (it) {
        return (it && typeof it === 'object') ? (it.label || it.value) : it;
    });
}

function choose(select, value) {
    select._w._value = value;
    if (select._w._onChange) { select._w._onChange(value, select); }
}

function step(result, name, fn) {
    try { return fn(); } catch (e) {
        result.errors.push(name + ': ' + String(e && e.message || e).split('\n')[0]);
        return null;
    }
}

function snapshot(name) {
    var file = path.join(ROOT, 'mapbiomas-user-toolkit-' + name + '.js');
    var run = harness.load(file);
    var App = run.App, widgets = run.widgets, log = run.log;
    var result = { toolkit: name, version: App.options.version, regions: {}, errors: [] };

    var selectRegion = App.ui.form.selectRegion;
    var regions = items(selectRegion);

    regions.forEach(function (region) {
        var r = { collections: {}, flow: null };
        result.regions[region] = r;

        var since = widgets.length;
        step(result, region + ' region', function () { choose(selectRegion, region); });
        var selectCollection = newestSelect(widgets, since, /collection/i) || App.ui.form.selectCollection;
        var collections = items(selectCollection);

        // picking a table before a collection: the panel has to cope, not throw
        var early = newestSelect(widgets, since, /table/i);
        var earlyTable = early && early._w._items.filter(function (t) {
            return t && typeof t === 'object';
        })[0];
        if (earlyTable) {
            step(result, region + ' table before collection', function () {
                choose(early, earlyTable.value);
            });
        }

        collections.forEach(function (coll) {
            var s = widgets.length;
            step(result, region + ' ' + coll, function () { choose(selectCollection, coll); });
            var dataType = newestSelect(widgets, s, /data ?type/i);
            r.collections[coll] = dataType ? items(dataType) : null;
        });

        // full flow on the newest collection (first in the list)
        var latest = collections[0];
        if (latest === undefined) { return; }
        var flow = { collection: latest };
        var s0 = widgets.length;
        step(result, region + ' flow collection', function () { choose(selectCollection, latest); });

        var tables = newestSelect(widgets, since, /table/i);
        flow.tables = tables ? tables._w._items.length : null;
        var official = tables && tables._w._items.filter(function (t) { return t && typeof t === 'object'; })[0];
        if (!official) { r.flow = flow; return; }
        flow.table = official.label;

        var s1 = widgets.length;
        step(result, region + ' table', function () { choose(tables, official.value); });
        var property = newestSelect(widgets, s1, /propert/i);
        if (property) {
            var s2 = widgets.length;
            step(result, region + ' property', function () { choose(property, 'NAME'); });
            var feature = newestSelect(widgets, s2, /feature/i);
            if (feature) {
                step(result, region + ' feature', function () { choose(feature, harness.FAKE_FEATURES[0]); });
            }
        }

        var dataType = newestSelect(widgets, s0, /data ?type/i);
        var types = dataType ? items(dataType) : [];
        if (dataType && types.length) {
            step(result, region + ' data type', function () { choose(dataType, types[0]); });
            flow.dataType = types[0];
        }

        // layers: the last checkbox created is the latest period
        var box = newest(widgets, s1, function (w) { return w._type === 'Checkbox' && w._onChange; });
        if (box) {
            flow.layer = box._w._label;
            log.mapLayers.length = 0;
            step(result, region + ' layer', function () { box._w._value = true; box._w._onChange(true, box); });
            flow.mapLayers = log.mapLayers.filter(function (x) { return x; }).slice(-3);
        }

        var exportButton = newest(widgets, 0, function (w) {
            return w._type === 'Button' && /export/i.test(String(w._label || w._props.label || '')) && w._onClick;
        });
        if (exportButton) {
            log.exports.length = 0;
            step(result, region + ' export', function () { exportButton._w._onClick(exportButton); });
            flow.exports = log.exports.map(function (e) {
                return { kind: e.kind, description: e.params.description, fileNamePrefix: e.params.fileNamePrefix,
                         folder: e.params.folder, scale: e.params.scale, fileFormat: e.params.fileFormat };
            });
        }
        r.flow = flow;
    });

    return result;
}

function main() {
    var args = process.argv.slice(2);
    var update = args.indexOf('--update') !== -1;
    var names = args.filter(function (a) { return a.indexOf('--') !== 0; });
    if (!names.length) { names = TOOLKITS; }
    if (!fs.existsSync(SNAPSHOTS)) { fs.mkdirSync(SNAPSHOTS); }

    var failed = 0;
    names.forEach(function (name) {
        var snap;
        try { snap = snapshot(name); } catch (e) {
            console.log('✗ ' + name + ': não carregou (' + String(e.message).split('\n')[0] + ')');
            failed++;
            return;
        }
        var text = JSON.stringify(snap, null, 1) + '\n';
        var target = path.join(SNAPSHOTS, name + '.json');
        var nRegions = Object.keys(snap.regions).length;
        var nExports = Object.keys(snap.regions).reduce(function (n, r) {
            return n + ((snap.regions[r].flow || {}).exports || []).length;
        }, 0);
        var summary = nRegions + ' regiões, ' + nExports + ' exports, ' + snap.errors.length + ' erros de fluxo';
        if (update || !fs.existsSync(target)) {
            fs.writeFileSync(target, text);
            console.log('✎ ' + name + ': ' + summary);
        } else if (fs.readFileSync(target, 'utf8') !== text) {
            console.log('✗ ' + name + ': difere do snapshot (' + summary + ')');
            failed++;
        } else {
            console.log('✓ ' + name + ': ' + summary);
        }
        snap.errors.slice(0, 5).forEach(function (e) { console.log('    ' + e); });
    });
    process.exit(failed ? 1 : 0);
}

main();
