/**
 * @name
 *      Mapbiomas User Toolkit - Pasture
 * 
 * @description
 *      This is a support tool for mapbiomas data users.
 *  
 * @author
 *      João Siqueira
 *      contato@mapbiomas.org
 *
 * @version
 *    1.0.0 - First release
 *    1.1.0 - Pasture Quality - Collection 6.0
 *    1.2.0 - Pasture Quality - Collection 7.0
 *    1.3.0 - Pasture Quality - Collection 8.0
 *    1.4.0 - Pasture Quality - Collection 9.0
 *    1.5.0 - Pasture Vigor - Collection 11.0
 *          - Territories from the MapBiomas platform
 *    1.5.1 - Link to legend files (QGIS, ArcGIS Pro, SLD, CSV)
 *    1.5.2 - New toolkit logo; single link to the legend files on GitHub
 *    1.5.3 - Link to the region's download page, in place of the hard-coded download links
 *    1.5.4 - Base map styles and legend come from core/v1, not from a personal account
 *    2.0.0 - Breaking: export names and CSV columns standardized; territory drawn in red
 *    2.0.1 - Property and feature selects come from core/v1/panel.js; the feature list no
 *    2.0.2 - Export plumbing comes from core/v1/export.js
 *    2.0.3 - Collections come from data/collections-<theme>.js
 *    2.1.0 - Removes the States dropdown: it threw an error when used, and the property
 *            and feature selects do the same filtering on any table
 *            longer repeats a name that several polygons share
 *            and centred in every toolkit
 * 
 * @see
 *      Get the MapBiomas exported data in your "Google Drive/MAPBIOMAS-EXPORT" folder
 *      Code and Tutorial - https://github.com/mapbiomas-brazil/user-toolkit
 */

var Basemaps = require('users/mapbiomas/user-toolkit:core/v1/basemaps.js');
var Legend = require('users/mapbiomas/user-toolkit:core/v1/legend.js');

var Area = require('users/mapbiomas/user-toolkit:core/v1/area.js');
var Naming = require('users/mapbiomas/user-toolkit:core/v1/naming.js');
var Layers = require('users/mapbiomas/user-toolkit:core/v1/layers.js');
var Territory = require('users/mapbiomas/user-toolkit:core/v1/territory.js');

var Territories = require('users/mapbiomas/user-toolkit:data/territories.js');
var Downloads = require('users/mapbiomas/user-toolkit:data/downloads.js');
var Collections = require('users/mapbiomas/user-toolkit:data/collections-pasture.js');
var Panel = require('users/mapbiomas/user-toolkit:core/v1/panel.js');
var Exports = require('users/mapbiomas/user-toolkit:core/v1/export.js');

/**
 * 
 */
var App = {

    options: {

        version: '2.1.0',

        logo: {
            uri: 'gs://mapbiomas-public/mapbiomas-logos/mapbiomas-toolkit-logo.b64',
            base64: null
        },

        tables: Territories.pick([
            'mapbiomas-brazil'
        ]),

        collections: Collections.pick([
            'mapbiomas-brazil'
        ]),

        bandsNames: { //TODO: ajustar o nome das bandas no asset publico
            'pasture_quality': 'pasture_quality',

        },

        dataType: 'pasture_quality',

        data: {
            'pasture_quality': null,
        },

        fileDimensions: {
            'pasture_quality': 256 * 512,
            // 'pasture': 256 * 124,
        },

        ranges: {
            'pasture_quality': {
                'min': 1,
                'max': 3
            },
            'pasture': {
                'min': 0,
                'max': 1 //TODO: ajustar os params min e max para visualização
            },

        },

        palette: {
            'pasture_quality': [
                '#A61C00', // 1. Low
                '#FDAE61', // 2. Medium
                '#2D7BB6', // 3. High
            ],

            'pasture': [
                '#ffffff',
                '#ffd738',
            ],

        },

        vector: null,
        activeFeature: null,
        activeName: '',

        taskid: 1,

        bufferDistance: 0,

        className: {

            'pasture_quality': {
                1: 'Severe degradation',
                2: 'Moderate degradation',
                3: 'Not degraded',
            },

        },

        legend: {
            params: {
                "title": 'Legend',
                "layers": [
                    ['#A61C00', 1, 'Low'],
                    ['#FDAE61', 2, 'Medium'],
                    ['#2D7BB6', 3, 'High'],
                ],
                "style": {
                    "backgroundColor": "#ffffff",
                    "color": "#212121"
                },
                "orientation": "vertical"
            }
        }
    },

    init: function () {

        this.ui.init();

    },

    /**
     * Short name of the active territory, for layers and exported files.
     */
    tableShortName: function () {
        return Naming.tableShortName(App.options.tables, App.options.activeName);
    },

    setVersion: function () {

        App.ui.form.labelTitle.setValue('MapBiomas User Toolkit - Pasture ' + App.options.version);

    },

    startMap: function (year) {

        Map.centerObject(App.options.data.pasture_quality, 5);

        var imageLayer = ui.Map.Layer({
            'eeObject': App.options.data.pasture_quality,
            'visParams': {
                'bands': ['pasture_quality_' + year],
                'palette': App.options.palette.pasture_quality,
                'min': App.options.ranges.pasture_quality.min,
                'max': App.options.ranges.pasture_quality.max,
                'format': 'png'
            },
            'name': 'Pasture',
            'shown': true,
            'opacity': 1.0
        });

        App.ui.clear();

        Map.add(imageLayer);

    },

    formatName: function (name) {
        return Naming.formatName(name);
    },

    ui: {

        init: function () {

            this.form.init();

        },

        clear: function () {
            Map.clear();

            Map.setOptions({
                'styles': {
                    'Dark': Basemaps.getStyle('Dark')
                }
            });
        },

        setMapbiomasRegion: function (regionName) {

            App.ui.form.labelDownloads.setUrl(Downloads.pageOf(regionName));

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
                'onChange': function (collectioName) {
                    ee.Number(1).evaluate(
                        function (a) {

                            // a C11 (vigor) publica as bandas como classification_YYYY
                            App.options.data.pasture_quality = ee.Image(
                                App.options.collections[regionName][collectioName].assets.pasture_quality)
                                .regexpRename('^classification', 'pasture_quality');

                            var year = App.options.collections[regionName][collectioName]
                                .periods.pasture_quality.slice(-1)[0];

                            App.startMap(year);
                        }
                    );

                    App.ui.loadingBox();
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
                                var collectioName = App.ui.form.selectCollection.getValue();

                                App.ui.loadTable(tableName);

                                // a coleção ainda pode não ter sido escolhida: sem
                                // períodos a lista fica vazia, em vez de dar erro
                                var collection = App.options
                                    .collections[regionName][collectioName];

                                App.ui.makeLayersList(
                                    App.tableShortName(),
                                    App.options.activeFeature,
                                    collection && collection.periods[App.options.dataType]
                                );

                                App.ui.loadPropertiesNames();

                                App.ui.form.selectDataType.setDisabled(false);
                            }
                        );

                        App.ui.loadingBox();
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

            App.ui.clear();

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

                    App.options.featureName = featureName;

                    ee.Number(1).evaluate(
                        function (a) {
                            var regionName = App.ui.form.selectRegion.getValue();
                            var collectionName = App.ui.form.selectCollection.getValue();

                            App.ui.loadFeature(featureName);

                            App.ui.makeLayersList(
                                featureName,
                                App.options.activeFeature,
                                App.options.collections[regionName][collectionName]
                                    .periods[App.options.dataType]);
                            App.ui.form.selectDataType.setDisabled(false);
                        }
                    );

                    App.ui.loadingBox();
                });

        },

        loadFeature: function (name) {

            App.options.activeFeature = App.options.table
                .filterMetadata(App.options.propertyName, 'equals', name);

            App.ui.clear();

            Territory.highlight(App.options.activeFeature, name);

        },

        addImageLayer: function (period, label, region) {


            var image = App.options.data[App.options.dataType]
                .select([App.options.bandsNames[App.options.dataType] + '_' + period])
                .clip(region);

            var imageLayer = ui.Map.Layer({
                'eeObject': image.selfMask(),
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

        loadingBox: function () {
            App.ui.form.loadingBox = ui.Panel();
            App.ui.form.loadingBox.add(ui.Label('Loading...'));

            Map.add(App.ui.form.loadingBox);
        },

        export2Drive: function () {

            var layers = App.ui.form.panelLayersList.widgets();

            var regionName = App.ui.form.selectRegion.getValue();
            var collectionName = App.ui.form.selectCollection.getValue();

            // Exports.fileName normaliza; aqui vai o rótulo cru
            var featureName = App.ui.form.selectFeature.getValue() || '';

            var bandIds = [];

            for (var i = 0; i < layers.length(); i++) {

                var selected = layers.get(i).getValue();

                if (selected) {

                    var period = App.options.collections[regionName][collectionName]
                        .periods[App.options.dataType][i];

                    var fileName = Exports.fileName(
                        [regionName, collectionName, App.options.dataType, featureName, period]);

                    var data = App.options.data[App.options.dataType]
                        .select([App.options.bandsNames[App.options.dataType] + '_' + period]);

                    var region = Exports.regionOf(
                        App.options.activeFeature, App.options.bufferDistance);

                    data = data.clip(region);

                    Exports.image({
                        'image': data,
                        'name': fileName,
                        'region': region.bounds(),
                        'fileDimensions': App.options.fileDimensions[App.options.dataType]
                    });

                    bandIds.push(App.options.bandsNames[App.options.dataType] + '_' + period);
                }
            }

            // Export table
            var territory = ee.Image().paint({
                'featureCollection': ee.FeatureCollection(App.options.activeFeature),
                'color': 1
            });

            var geometry = App.options.activeFeature.geometry().bounds();

            var areas = bandIds.map(
                function (band) {

                    var image = App.options.data[App.options.dataType].select(band);

                    var area = Area.calculate({
                        "image": image,
                        "territory": territory,
                        "geometry": geometry,
                        "scale": 30,
                        "factor": 1000000,
                        "areaColumn": 'area_km2'
                    });

                    area = ee.FeatureCollection(area).map(
                        function (feature) {

                            var className = ee.Dictionary(App.options.className[App.options.dataType])
                                .get(ee.Number(feature.get('class')));

                            return feature
                                .set('class_name', className)
                                .set('band', band);
                        }
                    );

                    return area;
                }
            );

            areas = ee.FeatureCollection(areas).flatten();
            // print(areas);

            var tableName = Exports.fileName(
                [regionName, collectionName, App.options.dataType, featureName, 'area']);

            Exports.table(areas, tableName);

        },

        form: {

            init: function () {

                var blob = ee.Blob(App.options.logo.uri);

                blob.string().evaluate(
                    function (str) {
                        str = str.replace(/\n/g, '');
                        App.options.logo.base64 = ui.Label({
                            imageUrl: str,
                        });
                        App.ui.form.panelLogo.add(App.options.logo.base64);
                    }
                );

                App.ui.form.panelMain.add(App.ui.form.panelLogo);
                App.ui.form.panelMain.add(App.ui.form.labelTitle);
                App.ui.form.panelMain.add(App.ui.form.labelSubtitle);
                // App.ui.form.panelMain.add(App.ui.form.labelLink);  // substituído pelo link único para os arquivos de legenda
                App.ui.form.panelMain.add(App.ui.form.labelLegendFiles);
                App.ui.form.panelMain.add(App.ui.form.labelDownloads);

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

                App.ui.form.panelLegend.add(Legend.getLegend(App.options.legend.params));

                // this.panelMain.add(this.panelType);
                App.ui.form.panelMain.add(App.ui.form.panelRegion);
                App.ui.form.panelMain.add(App.ui.form.panelCollection);
                App.ui.form.panelMain.add(App.ui.form.panelFeatureCollections);
                App.ui.form.panelMain.add(App.ui.form.panelProperties);
                App.ui.form.panelMain.add(App.ui.form.panelFeature);
                App.ui.form.panelMain.add(App.ui.form.panelDataType);
                App.ui.form.panelMain.add(App.ui.form.panelLegend);
                App.ui.form.panelMain.add(App.ui.form.panelBuffer);

                App.ui.form.panelMain.add(App.ui.form.labelLayers);
                App.ui.form.panelMain.add(App.ui.form.panelLayersList);

                App.ui.form.panelMain.add(App.ui.form.buttonExport2Drive);
                App.ui.form.panelMain.add(App.ui.form.labelNotes);

                ui.root.add(App.ui.form.panelMain);

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

            panelLegend: ui.Panel({
                'layout': ui.Panel.Layout.flow('vertical'),
                'style': {
                    'stretch': 'vertical',
                    'position': 'bottom-left'
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

            labelRegion: ui.Label('Region', {
                // 'fontWeight': 'bold',
                // 'padding': '1px',
                'fontSize': '16px'
            }),

            labelCollection: ui.Label('Collection', {
                // 'fontWeight': 'bold',
                // 'padding': '1px',
                'fontSize': '16px'
            }),

            labelTitle: ui.Label('MapBiomas User Toolkit - Pasture ', {
                'fontWeight': 'bold',
                // 'padding': '1px',
                'fontSize': '16px'
            }),

            labelSubtitle: ui.Label('Pasture Quality and Vigor', {
                // 'fontWeight': 'bold',
                // 'padding': '1px',
                'fontSize': '14px'
            }),

            // arquivos de legenda da coleção mais recente (legend-colors/ no GitHub)
            labelLegendFiles: ui.Label('Legend files (QGIS, ArcGIS Pro, SLD, CSV)', {
                'fontSize': '10px'
            },
                'https://github.com/mapbiomas/user-toolkit/tree/master/legend-colors/brazil-collection-11'
            ),

            labelDownloads: ui.Label('Download full maps', {
                'fontSize': '10px'
            },
                Downloads.DEFAULT_PAGE
            ),

            labelLink: ui.Label('Legend codes', {
                // 'fontWeight': 'bold',
                // 'padding': '1px',
                'fontSize': '10px'
            },
                'https://mapbiomas.org/codigos-de-legenda?cama_set_language=pt-BR'
            ),

            labelType: ui.Label('Type:', {
                // 'padding': '1px',
                'fontSize': '16px'
            }),

            labelTables: ui.Label('Tables:', {
                // 'padding': '1px',
                'fontSize': '16px'
            }),

            labelProperties: ui.Label('Properties:', {
                // 'padding': '1px',
                'fontSize': '16px'
            }),

            labelFeature: ui.Label('Features:', {
                // 'padding': '1px',
                'fontSize': '16px'
            }),

            labelDataType: ui.Label('Data Type:', {
                // 'padding': '1px',
                'fontSize': '16px'
            }),

            labelBuffer: ui.Label('Buffer:', {
                // 'padding': '1px',
                'fontSize': '16px'
            }),

            labelLayers: ui.Label('Layers:', {
                // 'padding': '1px',
                'fontSize': '16px'
            }),

            labelNotes: ui.Label('Go to TASK tab in the up-rght corner and click RUN', {
                // 'padding': '1px',
                'fontSize': '16px'
            }),

            selectName: ui.Select({
                'items': ['None'],
                'placeholder': 'None',
                'style': {
                    'stretch': 'horizontal'
                }
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
                    // 'mapbiomas-amazon',
                    // 'mapbiomas-atlantic-forest',
                    'mapbiomas-brazil',
                    // 'mapbiomas-chaco',
                    // 'mapbiomas-indonesia',
                    // 'mapbiomas-pampa',
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
                'items': [
                    'pasture_quality',
                    // 'pasture',
                ],
                'placeholder': 'Data type',
                'style': {
                    'stretch': 'horizontal'
                },
                'disabled': true,
                'onChange': function (dataType) {

                    var regionName = App.ui.form.selectRegion.getValue();
                    var collectionName = App.ui.form.selectCollection.getValue();

                    App.ui.setDataType(dataType);

                    App.ui.makeLayersList(
                        App.tableShortName(),
                        App.options.activeFeature,
                        App.options.collections[regionName][collectionName].periods[dataType]);

                },
            }),

            selectBuffer: ui.Select({
                'items': [
                    'None',
                    '1km',
                    '2km',
                    '3km',
                    '4km',
                    '5km',
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
                    // 'padding': '2px',
                    'stretch': 'horizontal'
                }
            }),

        },
    }
};

App.init();

App.setVersion();