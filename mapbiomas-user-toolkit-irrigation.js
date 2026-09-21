/**
 * @name
 *      Mapbiomas User Toolkit Download
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
 *    1.1.0 - Irrigated Agriculture - Collection 6.0
 *    1.2.0 - Irrigated Agriculture - Collection 7.0
 *    1.3.0 - Irrigated Agriculture - Collection 8.0
 *    1.3.1 - Minor issues
 *    1.4.0 - Irrigated Agriculture - Collection 9.0
 *    1.5.0 - Irrigation systems - Collection 11.0
 *          - Territories from the MapBiomas platform
 *    1.5.1 - Collection 11.0 legend (codes 2 and 3 changed); link to legend files
 *    1.5.2 - New toolkit logo; single link to the legend files on GitHub
 *    1.5.3 - Link to the region's download page, in place of the hard-coded download links
 *    1.5.4 - Base map styles and legend come from core/v1, not from a personal account
 *    2.0.0 - Breaking: export names and CSV columns standardized; territory drawn in red
 *    2.0.1 - Property and feature selects come from core/v1/panel.js; the feature list no
 *            longer repeats a name that several polygons share
 *            and centred in every toolkit
 * 
 * @see
 *      Get the MapBiomas exported data in your "Google Drive/MAPBIOMAS-EXPORT" folder
 *      Code and Tutorial - https://github.com/mapbiomas-brazil/user-toolkit
 */

var palettes = require('users/mapbiomas/modules:Palettes.js');
var logos = require('users/mapbiomas/modules:Logos.js');
var Basemaps = require('users/mapbiomas/user-toolkit:core/v1/basemaps.js');
var Legend = require('users/mapbiomas/user-toolkit:core/v1/legend.js');

var Area = require('users/mapbiomas/user-toolkit:core/v1/area.js');
var Naming = require('users/mapbiomas/user-toolkit:core/v1/naming.js');
var Layers = require('users/mapbiomas/user-toolkit:core/v1/layers.js');
var Territory = require('users/mapbiomas/user-toolkit:core/v1/territory.js');

var Territories = require('users/mapbiomas/user-toolkit:data/territories.js');
var Downloads = require('users/mapbiomas/user-toolkit:data/downloads.js');
var Panel = require('users/mapbiomas/user-toolkit:core/v1/panel.js');
var Exports = require('users/mapbiomas/user-toolkit:core/v1/export.js');


/**
 * 
 */
var App = {

    options: {

        version: '2.0.1',

        logo: {
            uri: 'gs://mapbiomas-public/mapbiomas-logos/mapbiomas-toolkit-logo.b64',
            base64: null
        },

        statesNames: {
            'None': 'None',
            'Acre': '12',
            'Alagoas': '27',
            'Amazonas': '13',
            'Amapá': '16',
            'Bahia': '29',
            'Ceará': '23',
            'Distrito Federal': '53',
            'Espírito Santo': '32',
            'Goiás': '52',
            'Maranhão': '21',
            'Minas Gerais': '31',
            'Mato Grosso do Sul': '50',
            'Mato Grosso': '51',
            'Pará': '15',
            'Paraíba': '25',
            'Pernambuco': '26',
            'Piauí': '22',
            'Paraná': '41',
            'Rio de Janeiro': '33',
            'Rio Grande do Norte': '24',
            'Rondônia': '11',
            'Roraima': '14',
            'Rio Grande do Sul': '43',
            'Santa Catarina': '42',
            'Sergipe': '28',
            'São Paulo': '35',
            'Tocantins': '17'
        },

        tables: Territories.pick([
            'mapbiomas-brazil'
        ]),

        collections: {
            'mapbiomas-brazil': {
                'collection-6.0': {
                    'assets': {
                        'irrigated_agriculture': 'projects/mapbiomas-public/assets/brazil/lulc/collection6/mapbiomas_collection60_irrigated_agriculture_v1',
                    },
                    'periods': {
                        'irrigated_agriculture': [
                            '1985', '1986', '1987', '1988',
                            '1989', '1990', '1991', '1992',
                            '1993', '1994', '1995', '1996',
                            '1997', '1998', '1999', '2000',
                            '2001', '2002', '2003', '2004',
                            '2005', '2006', '2007', '2008',
                            '2009', '2010', '2011', '2012',
                            '2013', '2014', '2015', '2016',
                            '2017', '2018', '2019', '2020'
                        ],
                        'agriculture': [
                            '1985', '1986', '1987', '1988',
                            '1989', '1990', '1991', '1992',
                            '1993', '1994', '1995', '1996',
                            '1997', '1998', '1999', '2000',
                            '2001', '2002', '2003', '2004',
                            '2005', '2006', '2007', '2008',
                            '2009', '2010', '2011', '2012',
                            '2013', '2014', '2015', '2016',
                            '2017', '2018', '2019', '2020'
                        ],
                    },
                },
                'collection-7.0': {
                    'assets': {
                        'irrigated_agriculture': 'projects/mapbiomas-public/assets/brazil/lulc/collection7/mapbiomas_collection70_irrigated_agriculture_v3',
                    },
                    'periods': {
                        'irrigated_agriculture': [
                            '1985', '1986', '1987', '1988',
                            '1989', '1990', '1991', '1992',
                            '1993', '1994', '1995', '1996',
                            '1997', '1998', '1999', '2000',
                            '2001', '2002', '2003', '2004',
                            '2005', '2006', '2007', '2008',
                            '2009', '2010', '2011', '2012',
                            '2013', '2014', '2015', '2016',
                            '2017', '2018', '2019', '2020',
                            '2021'
                        ],
                        'agriculture': [
                            '1985', '1986', '1987', '1988',
                            '1989', '1990', '1991', '1992',
                            '1993', '1994', '1995', '1996',
                            '1997', '1998', '1999', '2000',
                            '2001', '2002', '2003', '2004',
                            '2005', '2006', '2007', '2008',
                            '2009', '2010', '2011', '2012',
                            '2013', '2014', '2015', '2016',
                            '2017', '2018', '2019', '2020',
                            '2021'
                        ],
                    },
                },
                'collection-8.0': {
                    'assets': {
                        'irrigated_agriculture': 'projects/mapbiomas-public/assets/brazil/lulc/collection8/mapbiomas_collection80_irrigated_agriculture_v1',
                    },
                    'periods': {
                        'irrigated_agriculture': [
                            '1985', '1986', '1987', '1988',
                            '1989', '1990', '1991', '1992',
                            '1993', '1994', '1995', '1996',
                            '1997', '1998', '1999', '2000',
                            '2001', '2002', '2003', '2004',
                            '2005', '2006', '2007', '2008',
                            '2009', '2010', '2011', '2012',
                            '2013', '2014', '2015', '2016',
                            '2017', '2018', '2019', '2020',
                            '2021', '2022'
                        ],
                        'agriculture': [
                            '1985', '1986', '1987', '1988',
                            '1989', '1990', '1991', '1992',
                            '1993', '1994', '1995', '1996',
                            '1997', '1998', '1999', '2000',
                            '2001', '2002', '2003', '2004',
                            '2005', '2006', '2007', '2008',
                            '2009', '2010', '2011', '2012',
                            '2013', '2014', '2015', '2016',
                            '2017', '2018', '2019', '2020',
                            '2021', '2022'
                        ],
                    },
                },
                'collection-9.0': {
                    'assets': {
                        'irrigated_agriculture': 'projects/mapbiomas-public/assets/brazil/lulc/collection9/mapbiomas_collection90_irrigated_agriculture_v1',
                    },
                    'periods': {
                        'irrigated_agriculture': [
                            '1985', '1986', '1987', '1988',
                            '1989', '1990', '1991', '1992',
                            '1993', '1994', '1995', '1996',
                            '1997', '1998', '1999', '2000',
                            '2001', '2002', '2003', '2004',
                            '2005', '2006', '2007', '2008',
                            '2009', '2010', '2011', '2012',
                            '2013', '2014', '2015', '2016',
                            '2017', '2018', '2019', '2020',
                            '2021', '2022', '2023'
                        ],
                        'agriculture': [
                            '1985', '1986', '1987', '1988',
                            '1989', '1990', '1991', '1992',
                            '1993', '1994', '1995', '1996',
                            '1997', '1998', '1999', '2000',
                            '2001', '2002', '2003', '2004',
                            '2005', '2006', '2007', '2008',
                            '2009', '2010', '2011', '2012',
                            '2013', '2014', '2015', '2016',
                            '2017', '2018', '2019', '2020',
                            '2021', '2022', '2023'
                        ],
                    },
                },
                'collection-11.0': {
                    'assets': {
                        'irrigated_agriculture': 'projects/mapbiomas-public/assets/brazil/lulc/collection11/mapbiomas_brazil_collection11_agriculture_irrigation_systems_v1',
                    },
                    'encoding': 'raw',
                    'legend': 'c11',
                    'periods': {
                        'irrigated_agriculture': [
                            '1985', '1986', '1987', '1988',
                            '1989', '1990', '1991', '1992',
                            '1993', '1994', '1995', '1996',
                            '1997', '1998', '1999', '2000',
                            '2001', '2002', '2003', '2004',
                            '2005', '2006', '2007', '2008',
                            '2009', '2010', '2011', '2012',
                            '2013', '2014', '2015', '2016',
                            '2017', '2018', '2019', '2020',
                            '2021', '2022', '2023', '2024',
                            '2025'
                        ],
                    },
                },
            },
        },

        bandsNames: { //TODO: ajustar o nome das bandas no asset publico
            'irrigated_agriculture': 'irrigated_agriculture',

        },

        dataType: 'irrigated_agriculture',

        data: {
            'irrigated_agriculture': null,
        },

        fileDimensions: {
            'irrigated_agriculture': 256 * 124,
            // 'agriculture': 256 * 124,
        },

        ranges: {
            'irrigated_agriculture': {
                'min': 1,
                'max': 3
            },
            'agriculture': {
                'min': 0,
                'max': 1 //TODO: ajustar os params min e max para visualização
            },

        },

        palette: {
            'irrigated_agriculture': [
                '#F605E9', // 1. Irrigation center pivot
                '#3D0841', // 2. Irrigated rice
                '#8B1DB9', // 3. Other irrigation systems
            ],

            'agriculture': [
                '#ffffff',
                '#f500d0',
            ],

        },

        vector: null,
        activeFeature: null,
        activeName: '',

        taskid: 1,

        bufferDistance: 0,

        className: {

            'irrigated_agriculture': {
                1: 'Irrigation center pivot',
                2: 'Irrigated rice',
                3: 'Other irrigation systems',
            },

        },

        // Coleção 11: 2 passou a ser "outros sistemas" e 3 "inundação" (arroz).
        // Fonte: legenda "Irrigation systems" da plataforma MapBiomas.
        c11: {
            palette: ['#9724cc', '#51e5ff', '#ec368d'],
            className: {
                1: 'Center pivot irrigation',
                2: 'Other irrigation systems',
                3: 'Flooding (irrigated rice)',
            },
            legend: {
                "title": 'Legend',
                "layers": [
                    ['#9724cc', 1, 'Center pivot irrigation',],
                    ['#51e5ff', 2, 'Other irrigation systems',],
                    ['#ec368d', 3, 'Flooding (irrigated rice)',],
                ],
                "style": {
                    "backgroundColor": "#ffffff",
                    "color": "#212121"
                },
                "orientation": "vertical"
            }
        },

        legend: {
            params: {
                "title": 'Legend',
                "layers": [
                    ['#F605E9', 1, 'Irrigation center pivot',],
                    ['#3D0841', 2, 'Irrigated rice',],
                    ['#8B1DB9', 3, 'Other irrigation systems',],
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

        // guarda a legenda original (coleções até a 9.0) para alternar com a da C11
        App.options.legacy = {
            'palette': App.options.palette.irrigated_agriculture,
            'className': App.options.className.irrigated_agriculture,
            'legend': App.options.legend.params
        };

        this.ui.init();

    },

    setLegendSet: function (collection) {

        var set = collection.legend === 'c11' ? App.options.c11 : App.options.legacy;

        App.options.palette.irrigated_agriculture = set.palette;
        App.options.className.irrigated_agriculture = set.className;
        App.options.legend.params = set.legend;

        App.ui.form.panelLegend.clear();
        App.ui.form.panelLegend.add(Legend.getLegend(set.legend));
    },

    /**
     * Short name of the active territory, for layers and exported files.
     */
    tableShortName: function () {
        return Naming.tableShortName(App.options.tables, App.options.activeName);
    },

    setVersion: function () {

        App.ui.form.labelTitle.setValue('MapBiomas User Toolkit ' + App.options.version);

    },

    startMap: function (year) {

        Map.centerObject(App.options.data.irrigated_agriculture, 5);

        var imageLayer = ui.Map.Layer({
            'eeObject': App.options.data.irrigated_agriculture,
            'visParams': {
                'bands': ['irrigated_agriculture_' + year],
                'palette': App.options.palette.irrigated_agriculture,
                'min': App.options.ranges.irrigated_agriculture.min,
                'max': App.options.ranges.irrigated_agriculture.max,
                'format': 'png'
            },
            'name': 'Irrigated Agriculture',
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

                            var collection = App.options.collections[regionName][collectioName];

                            // a C11 publica as bandas como classification_YYYY e já traz a classe (1-3);
                            // as anteriores guardam classe * 100 + cobertura
                            var image = ee.Image(collection.assets.irrigated_agriculture)
                                .regexpRename('^classification', 'irrigated_agriculture');

                            App.options.data.irrigated_agriculture = collection.encoding === 'raw' ?
                                image : image.divide(100).byte();

                            App.setLegendSet(collection);

                            var year = App.options.collections[regionName][collectioName]
                                .periods.irrigated_agriculture.slice(-1)[0];

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
                        App.ui.form.panelStates.remove(App.ui.form.labelStates);
                        App.ui.form.panelStates.remove(App.ui.form.selectStates);
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

        loadTableStates: function (tableName) {

            var state = App.ui.form.selectStates.getValue();

            App.options.table = ee.FeatureCollection(tableName)
                .filterMetadata('UF', 'equals', parseInt(App.options.statesNames[state], 10));

            App.options.activeFeature = App.options.table;

            Map.centerObject(App.options.activeFeature);

            App.ui.clear();

            Map.addLayer(App.options.activeFeature.style({
                color: 'ff0000',
                width: 1,
                fillColor: 'ff000033',
            }), {},
                App.tableShortName(),
                true);

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

                    var region = App.options.activeFeature.geometry();

                    if (App.options.bufferDistance !== 0) {
                        data = data.clip(App.options.activeFeature.geometry().buffer(App.options.bufferDistance));
                        region = region.buffer(App.options.bufferDistance);
                    } else {
                        data = data.clip(App.options.activeFeature.geometry());
                    }

                    region = region.bounds();

                    Export.image.toDrive({
                        image: data,
                        description: fileName,
                        folder: 'MAPBIOMAS-EXPORT',
                        fileNamePrefix: fileName,
                        region: region,
                        scale: 30,
                        maxPixels: 1e13,
                        fileFormat: 'GeoTIFF',
                        fileDimensions: App.options.fileDimensions[App.options.dataType],
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

            Export.table.toDrive({
                'collection': areas,
                'description': tableName,
                'folder': 'MAPBIOMAS-EXPORT',
                'fileNamePrefix': tableName,
                'fileFormat': 'CSV',
                'selectors': [
                    'class',
                    'class_name',
                    'band',
                    'area_km2'
                ]
            });

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
                
                this.panelMain.add(this.panelLogo);
                this.panelMain.add(this.labelTitle);
                this.panelMain.add(this.labelSubtitle);
                this.panelMain.add(this.labelLegendFiles);
                this.panelMain.add(this.labelDownloads);
                // this.panelMain.add(this.labelLink);

                this.panelRegion.add(this.labelRegion);
                this.panelRegion.add(this.selectRegion);

                this.panelCollection.add(this.labelCollection);
                this.panelCollection.add(this.selectCollection);

                this.panelFeatureCollections.add(this.labelTables);
                this.panelFeatureCollections.add(this.selectFeatureCollections);

                this.panelProperties.add(this.labelProperties);
                this.panelProperties.add(this.selectProperties);

                this.panelFeature.add(this.labelFeature);
                this.panelFeature.add(this.selectFeature);

                this.panelDataType.add(this.labelDataType);
                this.panelDataType.add(this.selectDataType);

                this.panelBuffer.add(this.labelBuffer);
                this.panelBuffer.add(this.selectBuffer);

                this.panelLegend.add(Legend.getLegend(App.options.legend.params));

                // this.panelMain.add(this.panelType);
                this.panelMain.add(this.panelRegion);
                this.panelMain.add(this.panelCollection);
                this.panelMain.add(this.panelFeatureCollections);
                this.panelMain.add(this.panelStates);
                this.panelMain.add(this.panelProperties);
                this.panelMain.add(this.panelFeature);
                this.panelMain.add(this.panelDataType);
                this.panelMain.add(this.panelLegend);
                this.panelMain.add(this.panelBuffer);

                this.panelMain.add(this.labelLayers);
                this.panelMain.add(this.panelLayersList);

                this.panelMain.add(this.buttonExport2Drive);
                this.panelMain.add(this.labelNotes);

                ui.root.add(this.panelMain);

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

            panelStates: ui.Panel({
                'layout': ui.Panel.Layout.flow('vertical'),
                'style': {
                    'stretch': 'horizontal'
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

            labelTitle: ui.Label('MapBiomas User Toolkit', {
                'fontWeight': 'bold',
                // 'padding': '1px',
                'fontSize': '16px'
            }),

            labelSubtitle: ui.Label('Agriculture', {
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

            labelStates: ui.Label('States:', {
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
                    'irrigated_agriculture',
                    // 'agriculture',
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

            selectStates: ui.Select({
                'items': [
                    'None', 'Acre', 'Alagoas', 'Amazonas', 'Amapá', 'Bahia',
                    'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão',
                    'Minas Gerais', 'Mato Grosso do Sul', 'Mato Grosso', 'Pará', 'Paraíba',
                    'Pernambuco', 'Piauí', 'Paraná', 'Rio de Janeiro', 'Rio Grande do Norte',
                    'Rondônia', 'Roraima', 'Rio Grande do Sul', 'Santa Catarina', 'Sergipe',
                    'São Paulo', 'Tocantins'
                ],
                'placeholder': 'select state',
                'onChange': function (state) {
                    if (state != 'None') {

                        ee.Number(1).evaluate(
                            function (a) {
                                App.ui.loadTableStates(App.options.activeName);
                                App.ui.makeLayersList(App.tableShortName(), App.options.activeFeature, App.options.periods[App.options.dataType]);
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