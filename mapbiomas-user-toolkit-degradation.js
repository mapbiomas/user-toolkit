/**
 * @name
 *      Mapbiomas User Toolkit Downloads
 *
 * @description
 *      This is a support tool for mapbiomas data users.
 *
 * @author
 *    João Siqueira and Wallace Silva
 *
 * @contact
 *      Tasso Azevedo, Marcos Rosa and João Siqueira
 *      contato@mapbiomas.org
 *
 * @version
 *    0.0.0 - Versão de desenvolvimento
 *          - Adicionando modulos de degradação 1.0
 *    0.0.1 - Primeira versão
 *    0.0.2 - Replicando em memoria as camdas da plataforma (Area de classes borda, Area de classes de tamanho de fragmento e Area de classes de distancias dos fragmentos)
 *    0.0.3 - Atualizando camadas de degradação construidas em memoria
 *    0.0.4 - Territories from the MapBiomas platform
 *    0.0.5 - single link to the legend files on GitHub
 *    0.0.6 - Territories come from data/territories.js; removes a debug print
 *    0.0.7 - Link to the region's download page, in place of the hard-coded download links
 *    0.0.8 - Base map styles and legend come from core/v1, not from a personal account
 *    0.1.0 - Breaking: export names and CSV columns standardized; territory drawn in red
 *    0.1.1 - Removes the legend links that were built at startup and never shown
 *    0.1.2 - Property and feature selects come from core/v1/panel.js; the feature list no
 *            longer repeats a name that several polygons share
 *    0.1.3 - Export plumbing comes from core/v1/export.js; the Buffer setting is honoured
 *    0.1.4 - Removes the leftover widgets of the States dropdown, which had no select
 *    0.2.0 - Shows the Buffer control, which now applies to the exported raster
 *    0.2.1 - Collections come from data/collections-degradation.js
 *    0.2.2 - The logo loads from logos/ on GitHub instead of gs://mapbiomas-public,
 *            which stopped answering
 *    0.2.3 - The logo comes from core/v1/logos.js as a data URI: the Code Editor
 *            shows a blank label for an image URL on another site
 *    1.0.0 - Breaking: the published modules replace the beta ones, which were built
 *            from collection 9 work assets: Brazil collection 10.1 (edge area and age,
 *            patch size, morphology, isolation, fire, secondary vegetation, canopy
 *            disturbance and selective logging), in projects/mapbiomas-public.
 *            Classes and colours follow the platform legends, the area CSV names the
 *            classes, and the informational note comes from data/disclaimers.js
 *
 * @see
 *      Get the MapBiomas exported data in your "Google Drive/MAPBIOMAS-EXPORT" folder
 *      Code and Tutorial - https://github.com/mapbiomas/user-toolkit
 */

var fire_palettes = require('users/workspaceipam/packages:mapbiomas-toolkit/utils/palettes');

var Logos = require('users/mapbiomas/user-toolkit:core/v1/logos.js');
var Area = require('users/mapbiomas/user-toolkit:core/v1/area.js');
var Naming = require('users/mapbiomas/user-toolkit:core/v1/naming.js');
var Layers = require('users/mapbiomas/user-toolkit:core/v1/layers.js');
var Territory = require('users/mapbiomas/user-toolkit:core/v1/territory.js');

var Territories = require('users/mapbiomas/user-toolkit:data/territories.js');
var Downloads = require('users/mapbiomas/user-toolkit:data/downloads.js');
var Collections = require('users/mapbiomas/user-toolkit:data/collections-degradation.js');
var Disclaimers = require('users/mapbiomas/user-toolkit:data/disclaimers.js');
var Legends = require('users/mapbiomas/user-toolkit:data/legends.js');
var Panel = require('users/mapbiomas/user-toolkit:core/v1/panel.js');
var Exports = require('users/mapbiomas/user-toolkit:core/v1/export.js');

/**
 * Classes of the MapBiomas Brazil platform's degradation legends:
 * [value, name, colour]. Copied from the platform's legend items, not made up.
 */
var LEGEND = {
    'edge_area': [
        [1, "less than or equal to 30m", '#bc4749'],
        [2, "less than or equal to 60m", '#d68c8d'],
        [3, "less than or equal to 90m", '#fff59d'],
        [4, "less than or equal to 120m", '#dce0af'],
        [5, "less than or equal to 150m", '#a7c957'],
        [6, "less than or equal to 300m", '#6a994e'],
        [7, "less than or equal to 600m", '#386641'],
        [8, "less than or equal to 1000m", '#0d2207']
    ],
    'patch_size': [
        [1, "less than or equal to 5ha", '#8b2a2e'],
        [2, "less than or equal to 10ha", '#af4122'],
        [3, "less than or equal to 25ha", '#d35e0e'],
        [4, "less than or equal to 50ha", '#f0a900'],
        [5, "less than or equal to 100ha", '#f9d800'],
        [6, "less than or equal to 250ha", '#fff176'],
        [7, "less than or equal to 500ha", '#b0d900'],
        [8, "less than or equal to 1000ha", '#86d017'],
        [9, "less than or equal to 5000ha", '#5dc734'],
        [10, "less than or equal to 10000ha", '#39bc68'],
        [11, "All other patches", '#efefef']
    ],
    'isolation': [
        [1, "Fragments ≤ 100 ha — within 5 km of source area", '#2ca02c'],
        [2, "Fragments ≤ 50 ha — within 5 km of source area", '#98df8a'],
        [3, "Fragments ≤ 25 ha — within 5 km of source area", '#c7e9c0'],
        [4, "Fragments ≤ 100 ha — within 10 km of source area", '#ff7f0e'],
        [5, "Fragments ≤ 50 ha — within 10 km of source area", '#ffbb78'],
        [6, "Fragments ≤ 25 ha — within 10 km of source area", '#ffe6cc'],
        [7, "Fragments ≤ 100 ha — within 20 km of source area", '#d62728'],
        [8, "Fragments ≤ 50 ha — within 20 km of source area", '#ff9896'],
        [9, "Fragments ≤ 25 ha — within 20 km of source area", '#fddede'],
        [10, "Source area", '#1f77b4']
    ],
    'landscape_morphology': [
        [1, "Core", '#1a9650'],
        [2, "Edge", '#99d3b4'],
        [3, "Corridor", '#44aab1'],
        [4, "Branch", '#ffc941'],
        [5, "Stepping Stone", '#ffadce'],
        [6, "Perforation", '#a9dae6']
    ],
    'canopy_disturbance_frequency': [
        [1, "1 time", '#440154'],
        [2, "2 times", '#482172'],
        [3, "3 times", '#423d84'],
        [4, "4 times", '#38578c'],
        [5, "5 times", '#2d6f8e'],
        [6, "6 times", '#24858d'],
        [7, "7 times", '#1e9a89'],
        [8, "8 times", '#2ab07e'],
        [9, "9 times", '#51c468'],
        [10, "10 times", '#86d449'],
        [11, "11 times", '#c2df22'],
        [12, "12 times", '#fde724']
    ],
    'logging': [
        [1, "Logging detected", '#e66101']
    ],
    'secondary_vegetation_age': [
        [1, "1 Year", '#f5f6f4'],
        [2, "2 Years", '#f4f6dd'],
        [3, "3 Years", '#f3f6c6'],
        [4, "4 Years", '#f2f6af'],
        [5, "5 Years", '#f1f698'],
        [6, "6 Years", '#f0f681'],
        [7, "7 Years", '#eff66a'],
        [8, "8 Years", '#eef653'],
        [9, "9 Years", '#e7f647'],
        [10, "10 Years", '#daf641'],
        [11, "11 Years", '#cef63c'],
        [12, "12 Years", '#c2f637'],
        [13, "13 Years", '#b5f631'],
        [14, "14 Years", '#a9f62c'],
        [15, "15 Years", '#9df626'],
        [16, "16 Years", '#90f622'],
        [17, "17 Years", '#81f424'],
        [18, "18 Years", '#71f225'],
        [19, "19 Years", '#62f027'],
        [20, "20 Years", '#53ed28'],
        [21, "21 Years", '#44eb2a'],
        [22, "22 Years", '#34e92b'],
        [23, "23 Years", '#25e72d'],
        [24, "24 Years", '#22da2a'],
        [25, "25 Years", '#22c925'],
        [26, "26 Years", '#23b821'],
        [27, "27 Years", '#23a71d'],
        [28, "28 Years", '#239718'],
        [29, "29 Years", '#248614'],
        [30, "30 Years", '#247510'],
        [31, "31 Years", '#22650d'],
        [32, "32 Years", '#1d580d'],
        [33, "33 Years", '#184a0d'],
        [34, "34 Years", '#133c0d'],
        [35, "35 Years", '#0f2e0d'],
        [36, "36 Years", '#0a210d'],
        [37, "37 Years", '#05130d'],
        [38, "38 Years", '#00050d']
    ]
};

/**
 * The legend each classed data type is drawn and named with.
 */
var CLASSED = {
    'edge_area': LEGEND.edge_area,
    'patch_size': LEGEND.patch_size,
    'landscape_morphology': LEGEND.landscape_morphology,
    'isolation_100ha': LEGEND.isolation,
    'isolation_500ha': LEGEND.isolation,
    'isolation_1000ha': LEGEND.isolation,
    'canopy_disturbance_frequency': LEGEND.canopy_disturbance_frequency,
    'logging': LEGEND.logging
};

/**
 * Ages in years, drawn with the platform's secondary vegetation age ramp (1 to
 * 38 years; older pixels take its last colour). Edge age has no legend of its
 * own on the platform. Named "<n> years" in the area CSV, since an age can pass
 * the end of the ramp.
 */
var AGE_RAMP = LEGEND.secondary_vegetation_age;

/**
 * Data types drawn as a count or an age. The fire ones use the fire module's
 * palettes, as the beta did.
 */
var COUNTS = {
    'edge_age': {'palette': AGE_RAMP.map(function (c) { return c[2]; }), 'min': 1, 'max': 38, 'unit': ' years'},
    'secondary_vegetation_age': {'palette': AGE_RAMP.map(function (c) { return c[2]; }), 'min': 1, 'max': 38, 'unit': ' years'},
    'fire_frequency': {'palette': fire_palettes.get('frequencia_2'), 'min': 0, 'max': 40, 'unit': ' times'},
    'time_since_last_fire': {'palette': fire_palettes.get('ano_do_ultimo_fogo_2'), 'min': 0, 'max': 40, 'unit': ' years'}
};

/**
 * Data types holding a land cover class, drawn with the region's coverage legend.
 */
var COVERAGE = ['burned_coverage', 'secondary_vegetation_coverage'];

/**
 * Value v -> class 1 + (number of upper bounds below v), the classes of the
 * platform legend. Keeps the band names and the mask.
 */
var classify = function (image, upperBounds) {
    var classes = image.multiply(0).add(1);

    upperBounds.forEach(function (bound) {
        classes = classes.add(image.gt(bound));
    });

    return classes.int8();
};

/**
 * What each data type shows of its asset. Data types not listed show the asset
 * as it is.
 */
var Decode = {
    // distance to the edge in metres; past 1000 m it isn't edge area
    'edge_area': function (image) {
        return classify(image, [30, 60, 90, 120, 150, 300, 600, 1000])
            .updateMask(image.lte(1000));
    },
    // patch area in hectares
    'patch_size': function (image) {
        return classify(image, [5, 10, 25, 50, 100, 250, 500, 1000, 5000, 10000]);
    },
    // fire frequency, time since the last fire and secondary vegetation age
    // store value * 100 + coverage class
    'fire_frequency': function (image) {
        return image.divide(100).floor().int8();
    },
    'burned_coverage': function (image) {
        // a frequency of 0 is native vegetation that never burned
        return image.mod(100).updateMask(image.gte(100)).int8();
    },
    'time_since_last_fire': function (image) {
        return image.divide(100).floor().int8();
    },
    'secondary_vegetation_age': function (image) {
        return image.divide(100).floor().int8();
    },
    'secondary_vegetation_coverage': function (image) {
        return image.mod(100).int8();
    }
};

var palette = {};
var ranges = {};
var className = {};
var unit = {};

Object.keys(CLASSED).forEach(function (key) {
    var classes = CLASSED[key];
    palette[key] = classes.map(function (c) { return c[2]; });
    ranges[key] = {'min': classes[0][0], 'max': classes[classes.length - 1][0]};
    className[key] = {};
    classes.forEach(function (c) { className[key][String(c[0])] = c[1]; });
});

Object.keys(COUNTS).forEach(function (key) {
    palette[key] = COUNTS[key].palette;
    ranges[key] = {'min': COUNTS[key].min, 'max': COUNTS[key].max};
    unit[key] = COUNTS[key].unit;
});

/**
 *
 */
var App = {

    options: {

        version: '1.0.0',

        logo: {
            image: Logos.degradacao
        },

        tables: Territories.pick([
            'mapbiomas-brazil'
        ]),

        collections: Collections.pick([
            'mapbiomas-brazil'
        ]),

        disclaimers: Disclaimers.pick('degradation', [
            'mapbiomas-brazil'
        ]),

        dataType: 'edge_area',

        data: {},

        palette: palette,

        ranges: ranges,

        // {value: name} of the classed data types; the coverage ones are filled
        // per region by App.setCoverageLegend()
        className: className,

        // suffix of the class value in the area CSV, for the counts
        unit: unit,

        vector: null,
        activeFeature: null,
        activeName: '',

        mapbiomasRegion: '',

        taskid: 1,

        bufferDistance: 0,

    },

    init: function () {

        App.setCoverageLegend('mapbiomas-brazil');

        this.ui.init();

    },

    /**
     * The coverage classes behind burned area and secondary vegetation, from
     * data/legends.js.
     */
    setCoverageLegend: function (region) {

        var coveragePalette = Legends.paletteOf(region);

        COVERAGE.forEach(function (key) {
            App.options.palette[key] = coveragePalette;
            App.options.ranges[key] = {'min': 0, 'max': coveragePalette ? coveragePalette.length - 1 : 0};
            App.options.className[key] = Legends.namesOf(region);
        });

    },

    /**
     * One data type of a collection: the asset (or, for isolation, its member of
     * the isolation ImageCollection), with its bands renamed `<data type>_YYYY`
     * and decoded.
     */
    loadAsset: function (assetId, key) {

        var image = key.indexOf('isolation_') === 0 ?
            ee.Image(ee.ImageCollection(assetId)
                .filter(ee.Filter.stringStartsWith('system:index', key + '_'))
                .first()) :
            ee.Image(assetId);

        // each asset has its own band prefix: edge_, age_, size_, edge_age_...
        image = image.regexpRename('^.*_(\\d{4})$', key + '_$1');

        return Decode[key] ? Decode[key](image) : image;
    },

    bandName: function (period) {
        return App.options.dataType + '_' + period;
    },

    /**
     * Short name of the active territory, for layers and exported files.
     */
    tableShortName: function () {
        return Naming.tableShortName(App.options.tables, App.options.activeName);
    },

    setVersion: function () {

        App.ui.form.labelTitle.setValue('MapBiomas-Degradation User Toolkit ' + App.options.version);

    },

    formatLabelWithLinks: function (text, links, maxChars) {
        maxChars = maxChars || 60;

        var panel = ui.Panel({
            layout: ui.Panel.Layout.flow('horizontal', true),
            style: {margin: '0px'}
        });

        var txtStyle = {margin: '0px 2px 0px 2px'};
        var linkStyle = {
            margin: '0px 2px 0px 2px',
            color: 'blue',
            textDecoration: 'underline'
        };

        // **link** and the punctuation right after it
        var regex = /\*\*(.*?)\*\*([,.;:!?])?/g;

        function splitLong(txt) {
            var words = txt.split(' ');
            var lines = [];
            var curr = '';
            for (var i = 0; i < words.length; i++) {
                var w = words[i];
                if ((curr + ' ' + w).trim().length > maxChars) {
                    lines.push(curr.trim());
                    curr = w;
                } else {
                    curr = (curr + ' ' + w).trim();
                }
            }
            if (curr) lines.push(curr);
            return lines;
        }

        function addTextLine(str) {
            panel.add(ui.Label(str, txtStyle));
        }

        function addLink(labelText, url) {
            panel.add(ui.Label({
                value: labelText,
                targetUrl: url || null,
                style: url ? linkStyle : txtStyle
            }));
        }

        function addPieces(str) {
            var lastIndex = 0;
            var m;
            while ((m = regex.exec(str)) !== null) {
                if (m.index > lastIndex) {
                    var chunks = splitLong(str.substring(lastIndex, m.index));
                    for (var j = 0; j < chunks.length; j++) {
                        addTextLine(chunks[j]);
                    }
                }
                addLink(m[1] + (m[2] || ''), links[m[1]]);
                lastIndex = regex.lastIndex;
            }
            if (lastIndex < str.length) {
                var tailChunks = splitLong(str.substring(lastIndex));
                for (var k = 0; k < tailChunks.length; k++) {
                    addTextLine(tailChunks[k]);
                }
            }
        }

        links = links || {};
        addPieces(text);
        return panel;
    },

    /**
     * The widgets of one note from data/disclaimers.js: a heading in bold, and
     * each paragraph as a label, or through formatLabelWithLinks when it has links.
     */
    disclaimerWidgets: function (note) {
        return note.paragraphs.map(function (paragraph) {
            var links = {};
            var text = paragraph.parts.map(function (part) {
                if (typeof part === 'string') {
                    return part;
                }
                links[part.text] = part.url;
                return '**' + part.text + '**';
            }).join('');

            if (Object.keys(links).length > 0) {
                return App.formatLabelWithLinks(text, links);
            }

            return ui.Label(text, paragraph.heading ?
                {'margin': '8px 0px 4px 0px', 'fontWeight': 'bold'} :
                {'margin': '2px 0px'});
        });
    },

    ui: {

        init: function () {

            this.form.init();

        },

        setMapbiomasRegion: function (regionName) {

            App.ui.form.labelDownloads.setUrl(Downloads.pageOf(regionName));

            App.options.mapbiomasRegion = regionName;

            App.setCoverageLegend(regionName);

            App.ui.loadCollectionList(regionName);
            App.ui.loadTablesNames(regionName);

        },

        setDataType: function (dataType) {

            App.options.dataType = dataType;

        },

        loadCollectionList: function (regionName) {

            App.ui.form.selectCollection.setPlaceholder('loading collections...');

            App.ui.form.selectCollection = ui.Select({
                'items': Object.keys(App.options.collections[regionName]).reverse(),
                'placeholder': 'select collection',
                'onChange': function (collectionName) {
                    ee.Number(1).evaluate(
                        function (a) {

                            var collection = App.options.collections[regionName][collectionName];
                            var keys = Object.keys(collection.assets);

                            App.options.data = {};

                            keys.forEach(function (key) {
                                App.options.data[key] = App.loadAsset(collection.assets[key], key);
                            });

                            App.ui.setDataType(keys[0]);

                            Map.centerObject(App.options.data[keys[0]], 5);

                            App.ui.loadDataType();

                        }
                    );

                },
                'style': {
                    'stretch': 'horizontal'
                }
            });

            App.ui.form.panelCollection.widgets()
                .set(1, App.ui.form.selectCollection);

        },

        loadTablesNames: function (regionName) {

            App.ui.form.selectRegion.setPlaceholder('loading tables names...');

            var allTablesNames = App.options.tables[regionName]
                .concat(Territory.userTables());

            App.ui.form.selectFeatureCollections = ui.Select({
                'items': allTablesNames,
                'placeholder': 'select table',
                'onChange': function (tableName) {
                    if (tableName != 'None') {
                        App.options.activeName = tableName;
                        ee.Number(1).evaluate(
                            function (a) {
                                var collectionName = App.ui.form.selectCollection.getValue();

                                App.ui.loadTable(tableName);

                                // a coleção ainda pode não ter sido escolhida: sem
                                // períodos a lista fica vazia, em vez de dar erro
                                var collection = App.options
                                    .collections[regionName][collectionName];

                                App.ui.makeLayersList(
                                    App.tableShortName(),
                                    App.options.activeFeature,
                                    collection && collection.periods[App.options.dataType]
                                );

                                App.ui.loadPropertiesNames();

                                App.ui.form.selectDataType.setDisabled(false);
                            }
                        );
                    }
                },
                'style': {
                    'stretch': 'horizontal'
                }
            });

            App.ui.form.panelFeatureCollections.widgets()
                .set(1, App.ui.form.selectFeatureCollections);

        },

        loadTable: function (tableName) {

            App.options.table = ee.FeatureCollection(tableName);

            App.options.activeFeature = App.options.table;

            Map.layers().reset([]);

            Territory.highlight(App.options.activeFeature, App.tableShortName());

        },

        loadPropertiesNames: function () {

            Panel.propertyNames(App.ui.form, 'selectProperties',
                App.ui.form.panelProperties, App.options.table,
                function (propertyName) {

                    App.options.propertyName = propertyName;

                    ee.Number(1).evaluate(
                        function (a) {
                            App.ui.loadFeatureNames(propertyName);
                            App.ui.form.selectDataType.setDisabled(false);
                        }
                    );
                });

        },

        loadFeatureNames: function () {

            Panel.featureNames(App.ui.form, 'selectFeature',
                App.ui.form.panelFeature, App.options.table, App.options.propertyName,
                function (featureName) {

                    App.options.activeName = featureName;
                    App.options.featureName = featureName;

                    ee.Number(1).evaluate(
                        function (a) {
                            var regionName = App.ui.form.selectRegion.getValue();
                            var collectionName = App.ui.form.selectCollection.getValue();

                            App.ui.loadFeature(featureName);

                            if (App.ui.form.selectDataType.getValue() !== null) {
                                App.ui.makeLayersList(
                                    featureName,
                                    App.options.activeFeature,
                                    App.options.collections[regionName][collectionName]
                                        .periods[App.options.dataType]);
                            }
                            App.ui.form.selectDataType.setDisabled(false);
                        }
                    );
                });

        },

        loadDataType: function () {

            App.ui.form.selectDataType.setPlaceholder('loading data type list...');

            ee.Number(1).evaluate(
                function (number) {

                    var regionName = App.ui.form.selectRegion.getValue();
                    var collectionName = App.ui.form.selectCollection.getValue();

                    App.ui.form.selectDataType = ui.Select({
                        'items': Object.keys(App.options.collections[regionName][collectionName].periods),
                        'placeholder': 'select data type',
                        'onChange': function (dataType) {

                            App.ui.setDataType(dataType);

                            if (App.ui.form.selectDataType.getValue() !== null) {
                                App.ui.makeLayersList(
                                    App.tableShortName(),
                                    App.options.activeFeature,
                                    App.options.collections[regionName][collectionName]
                                        .periods[App.options.dataType]);
                            }

                        },
                        'style': {
                            'stretch': 'horizontal'
                        }
                    });

                    App.ui.form.panelDataType.widgets()
                        .set(1, App.ui.form.selectDataType);
                }
            );

        },

        loadFeature: function (name) {

            App.options.activeFeature = App.options.table
                .filter(ee.Filter.eq(App.options.propertyName, name));

            Map.layers().reset([]);

            Territory.highlight(App.options.activeFeature, name);

        },

        addImageLayer: function (period, label, region) {

            var image = App.options.data[App.options.dataType]
                .select([App.bandName(period)])
                .multiply(ee.Image().paint(region).eq(0));

            var imageLayer = ui.Map.Layer({
                'eeObject': image,
                'visParams': {
                    'palette': App.options.palette[App.options.dataType],
                    'min': App.options.ranges[App.options.dataType].min,
                    'max': App.options.ranges[App.options.dataType].max,
                    'format': 'png'
                },
                'name': label,
                'shown': true,
                'opacity': 1.0
            });

            Map.layers().insert(
                Map.layers().length() - 1,
                imageLayer
            );

        },

        removeImageLayer: function (label) {
            Layers.removeByName(label);
        },

        manageLayers: function (checked, period, label, region) {

            if (checked) {
                App.ui.addImageLayer(period, label, region);
            } else {
                App.ui.removeImageLayer(label);
            }

        },

        makeLayersList: function (regionName, region, periods) {
            Layers.makeList(App.ui.form.panelLayersList, regionName, region,
                periods, App.ui.manageLayers);
        },

        export2Drive: function () {

            var layers = App.ui.form.panelLayersList.widgets();

            var regionName = App.ui.form.selectRegion.getValue();
            var collectionName = App.ui.form.selectCollection.getValue();
            var dataType = App.options.dataType;

            // Exports.fileName normaliza; aqui vai o rótulo cru
            var featureName = App.ui.form.selectFeature.getValue() || '';

            var bandIds = [];

            for (var i = 0; i < layers.length(); i++) {

                var selected = layers.get(i).getValue();

                if (selected) {

                    var period = App.options.collections[regionName][collectionName]
                        .periods[dataType][i];

                    var fileName = Exports.fileName([
                        regionName, collectionName, dataType, featureName, period]);

                    var data = App.options.data[dataType]
                        .select([App.bandName(period)]);

                    var region = Exports.regionOf(
                        App.options.activeFeature, App.options.bufferDistance);

                    data = data.multiply(ee.Image().paint(region).eq(0));

                    Exports.image({
                        'image': data,
                        'name': fileName,
                        'region': region.bounds(),
                        'fileDimensions': 256 * 124
                    });

                    bandIds.push(App.bandName(period));
                }
            }

            // Export table
            var territory = ee.Image().paint({
                'featureCollection': ee.FeatureCollection(App.options.activeFeature),
                'color': 1
            });

            var geometry = App.options.activeFeature.geometry().bounds();

            var names = App.options.className[dataType];
            var suffix = App.options.unit[dataType] || '';

            var areas = bandIds.map(
                function (band) {

                    var image = App.options.data[dataType].select(band);

                    var area = Area.calculate({
                        "image": image,
                        "territory": territory,
                        "geometry": geometry,
                        "scale": 30,
                        "factor": 1000000,
                        "areaColumn": 'area_km2',
                    });

                    area = ee.FeatureCollection(area).map(
                        function (feature) {

                            var value = ee.Number(feature.get('class')).int().format('%d');

                            var name = names ?
                                ee.Dictionary(names).get(value, value) :
                                value.cat(suffix);

                            return feature.set('class_name', name).set('band', band);
                        }
                    );

                    return area;
                }
            );

            areas = ee.FeatureCollection(areas).flatten();

            var tableName = Exports.fileName([
                regionName, collectionName, dataType, featureName, 'area']);

            Exports.table(areas, tableName);

        },

        showDisclaimer: function () {
            var notes = App.options.disclaimers;

            if (notes.length === 0) {
                return;
            }

            App.ui.form.panelDisclaimer.widgets().reset([]);

            var panelDisclaimerText = ui.Panel({
                'widgets': App.disclaimerWidgets(notes[0]),
                'layout': ui.Panel.Layout.flow('vertical'),
                'style': {'stretch': 'both'},
            });

            var panelButtons = ui.Panel({'layout': ui.Panel.Layout.flow('horizontal', true)});

            // one button per note, only when there is more than one
            if (notes.length > 1) {
                notes.forEach(function (note) {
                    panelButtons.add(ui.Button({
                        "label": note.label,
                        "onClick": function () {
                            panelDisclaimerText.widgets().reset(App.disclaimerWidgets(note));
                        }
                    }));
                });
            }

            var buttonDisclaimerOk = ui.Button({
                "label": "Ok, I get it!",
                "onClick": function () {
                    Map.remove(App.ui.form.panelDisclaimer);
                    App.ui.form.buttonDisclaimerShow.setDisabled(false);
                },
                "disabled": false,
                "style": {
                    'stretch': 'horizontal'
                }
            });

            App.ui.form.panelDisclaimer.add(panelButtons);
            App.ui.form.panelDisclaimer.add(panelDisclaimerText);
            App.ui.form.panelDisclaimer.add(buttonDisclaimerOk);

            Map.add(App.ui.form.panelDisclaimer);

            App.ui.form.buttonDisclaimerShow.setDisabled(true);
        },

        form: {

            init: function () {

                App.ui.form.panelLogo.add(ui.Label({
                    imageUrl: App.options.logo.image
                }));

                App.ui.form.panelMain.add(App.ui.form.panelLogo);
                App.ui.form.panelMain.add(App.ui.form.labelTitle);
                App.ui.form.panelMain.add(App.ui.form.labelSubtitle);
                App.ui.form.panelMain.add(App.ui.form.labelLegendFiles);
                App.ui.form.panelMain.add(App.ui.form.labelDownloads);

                App.ui.form.panelMain.add(App.ui.form.panel1);

                App.ui.form.panelRegion.add(App.ui.form.labelRegion);
                App.ui.form.panelRegion.add(App.ui.form.selectRegion);

                App.ui.form.panelCollection.add(App.ui.form.labelCollection);
                App.ui.form.panelCollection.add(App.ui.form.selectCollection);

                App.ui.form.panelFeatureCollections.add(App.ui.form.labelTables);
                App.ui.form.panelFeatureCollections.add(App.ui.form.selectFeatureCollections);

                App.ui.form.panelProperties.add(App.ui.form.labelProperties);
                App.ui.form.panelProperties.add(App.ui.form.selectProperties);

                App.ui.form.panelFeature.add(App.ui.form.labelFeature);
                App.ui.form.panelFeature.add(App.ui.form.selectFeature);

                App.ui.form.panelDataType.add(App.ui.form.labelDataType);
                App.ui.form.panelDataType.add(App.ui.form.selectDataType);

                App.ui.form.panelBuffer.add(App.ui.form.labelBuffer);
                App.ui.form.panelBuffer.add(App.ui.form.selectBuffer);

                App.ui.form.panel1.add(App.ui.form.panelRegion);
                App.ui.form.panel1.add(App.ui.form.panelCollection);
                App.ui.form.panel1.add(App.ui.form.panelFeatureCollections);
                App.ui.form.panel1.add(App.ui.form.panelProperties);
                App.ui.form.panel1.add(App.ui.form.panelFeature);
                App.ui.form.panel1.add(App.ui.form.panelDataType);
                App.ui.form.panel1.add(App.ui.form.panelBuffer);

                App.ui.form.panel1.add(App.ui.form.labelLayers);
                App.ui.form.panel1.add(App.ui.form.panelLayersList);

                App.ui.form.panel1.add(App.ui.form.buttonExport2Drive);
                App.ui.form.panel1.add(App.ui.form.labelNotes);

                ui.root.add(App.ui.form.panelMain);

                App.ui.showDisclaimer();

                var Basemaps = require('users/mapbiomas/user-toolkit:core/v1/basemaps.js');

                Map.setOptions({
                    'styles': {
                        'Dark': Basemaps.getStyle('Dark'),
                        'Silver': Basemaps.getStyle('Silver'),
                        'Night': Basemaps.getStyle('Night'),
                    }
                });
                Map.setOptions('Silver');

            },

            panelMain: ui.Panel({
                'layout': ui.Panel.Layout.flow('vertical'),
                'style': {
                    'width': '360px',
                    'position': 'bottom-left',
                    'margin': '0px 0px 0px 0px',
                },
            }),

            panelLogo: ui.Panel({
                'layout': ui.Panel.Layout.flow('vertical'),
                'style': {
                    'stretch': 'horizontal',
                    'margin': '10px 0px 5px 15px',
                },
            }),

            panelRegion: ui.Panel({
                'layout': ui.Panel.Layout.flow('vertical'),
                'style': {
                    'stretch': 'horizontal'
                },
            }),

            panelCollection: ui.Panel({
                'layout': ui.Panel.Layout.flow('vertical'),
                'style': {
                    'stretch': 'horizontal'
                },
            }),

            panelFeatureCollections: ui.Panel({
                'layout': ui.Panel.Layout.flow('vertical'),
                'style': {
                    'stretch': 'horizontal'
                },
            }),

            panelProperties: ui.Panel({
                'layout': ui.Panel.Layout.flow('vertical'),
                'style': {
                    'stretch': 'horizontal'
                },
            }),

            panelFeature: ui.Panel({
                'layout': ui.Panel.Layout.flow('vertical'),
                'style': {
                    'stretch': 'horizontal'
                },
            }),

            panelDataType: ui.Panel({
                'layout': ui.Panel.Layout.flow('vertical'),
                'style': {
                    'stretch': 'horizontal'
                },
            }),

            panelBuffer: ui.Panel({
                'layout': ui.Panel.Layout.flow('vertical'),
                'style': {
                    'stretch': 'horizontal'
                },
            }),

            panelLayersList: ui.Panel({
                'layout': ui.Panel.Layout.flow('vertical'),
                'style': {
                    'height': '200px',
                    'stretch': 'vertical',
                    'backgroundColor': '#cccccc',
                },
            }),

            panelDisclaimer: ui.Panel({
                'layout': ui.Panel.Layout.flow('vertical'),
                'style': {
                    'maxWidth': '70%',
                    'maxHeight': '90%',
                },
            }),

            labelRegion: ui.Label('Region', {
                'fontSize': '16px'
            }),

            labelCollection: ui.Label('Collection', {
                'fontSize': '16px'
            }),

            labelTitle: ui.Label('MapBiomas User Toolkit', {
                'fontWeight': 'bold',
                'fontSize': '16px'
            }),

            labelSubtitle: ui.Label('Native vegetation degradation', {
                'fontSize': '14px'
            }),

            // arquivos de legenda (legend-colors/ no GitHub)
            labelLegendFiles: ui.Label('Legend files (QGIS, ArcGIS Pro, SLD, CSV)', {
                'fontSize': '10px'
            },
                'https://github.com/mapbiomas/user-toolkit/tree/master/legend-colors'
            ),

            labelDownloads: ui.Label('Download full maps', {
                'fontSize': '10px'
            },
                Downloads.DEFAULT_PAGE
            ),

            labelTables: ui.Label('Tables:', {
                'fontSize': '16px'
            }),

            labelProperties: ui.Label('Properties:', {
                'fontSize': '16px'
            }),

            labelFeature: ui.Label('Features:', {
                'fontSize': '16px'
            }),

            labelDataType: ui.Label('Data Type:', {
                'fontSize': '16px'
            }),

            labelBuffer: ui.Label('Buffer:', {
                'fontSize': '16px'
            }),

            labelLayers: ui.Label('Layers:', {
                'fontSize': '16px'
            }),

            labelNotes: ui.Label('Click the RUN button in the TASK tab at the upper-right corner.', {
                'fontSize': '16px'
            }),

            selectCollection: ui.Select({
                'items': [],
                'placeholder': 'None',
                'style': {
                    'stretch': 'horizontal'
                },
            }),

            selectRegion: ui.Select({
                'items': [
                    'mapbiomas-brazil',
                ],
                'placeholder': 'None',
                'style': {
                    'stretch': 'horizontal'
                },
                'onChange': function (region) {

                    ee.Number(1).evaluate(
                        function (a) {
                            App.ui.setMapbiomasRegion(region);
                        }
                    );

                },
            }),

            selectFeatureCollections: ui.Select({
                'items': ['None'],
                'placeholder': 'None',
                'style': {
                    'stretch': 'horizontal'
                }
            }),

            selectFeature: ui.Select({
                'items': ['None'],
                'placeholder': 'None',
                'style': {
                    'stretch': 'horizontal'
                }
            }),

            selectProperties: ui.Select({
                'items': ['None'],
                'placeholder': 'None',
                'style': {
                    'stretch': 'horizontal'
                }
            }),

            selectDataType: ui.Select({
                'items': ['None'],
                'placeholder': 'None',
                'style': {
                    'stretch': 'horizontal'
                },
                'disabled': true,
            }),

            selectBuffer: ui.Select({
                'items': [
                    'None',
                    '1km',
                    '2km',
                    '3km',
                    '4km',
                    '5km',
                    '10km',
                ],
                'placeholder': 'None',
                'style': {
                    'stretch': 'horizontal'
                },
                'onChange': function (distance) {
                    var distances = {
                        'None': 0,
                        '1km': 1000,
                        '2km': 2000,
                        '3km': 3000,
                        '4km': 4000,
                        '5km': 5000,
                        '10km': 10000,
                    };

                    App.options.bufferDistance = distances[distance];
                },
            }),

            buttonExport2Drive: ui.Button({
                "label": "Export images to Google Drive",
                "onClick": function () {
                    App.ui.export2Drive();
                },
                "disabled": false,
                "style": {
                    'stretch': 'horizontal'
                }
            }),

            buttonDisclaimerShow: ui.Button({
                "label": "Show disclaimer",
                "onClick": function () {
                    App.ui.showDisclaimer();
                },
                "disabled": false,
                "style": {
                    'stretch': 'horizontal'
                }
            }),

            panel1: ui.Panel({
                style: {
                    'stretch': 'both'
                }
            }),
        },
    }
};

App.init();

App.setVersion();
