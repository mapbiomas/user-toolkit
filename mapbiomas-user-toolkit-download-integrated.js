/**
 * @name
 *      Mapbiomas User Toolkit Download Integrated
 * 
 * @description
 *  
 * @author
 *      João Siqueira
 *      joaovsiqueira1@gmail.com
 *
 * @version
 *      1.1.0
 *
 * @see
 *      Get the MapBiomas exported data in your "Google Drive/MAPBIOMAS-EXPORT" folder
 */
var App = {

    options: {
        version: '1.1.0',

        assets: {
            municipalities: "projects/mapbiomas-workspace/AUXILIAR/municipios-2016",
            states: "projects/mapbiomas-workspace/AUXILIAR/estados-2016",
            integration: 'projects/mapbiomas-workspace/public/collection3/mapbiomas_collection3_integration_v1',
            transitions: 'projects/mapbiomas-workspace/public/collection3/mapbiomas_collection3_transitions_v1',
        },

        years: [
            '1985', '1986', '1987', '1988',
            '1989', '1990', '1991', '1992',
            '1993', '1994', '1995', '1996',
            '1997', '1998', '1999', '2000',
            '2001', '2002', '2003', '2004',
            '2005', '2006', '2007', '2008',
            '2009', '2010', '2011', '2012',
            '2013', '2014', '2015', '2016',
            '2017'
        ],

        integration: null,
        transitions: null,

        states: null,
        municipalities: null,
        activeFeature: null,
        municipalitiesNames: [],

        statesNames: {
            'Acre': 12,
            'Alagoas': 27,
            'Amazonas': 13,
            'Amapá': 16,
            'Bahia': 29,
            'Ceará': 23,
            'Distrito Federal': 53,
            'Espírito Santo': 32,
            'Goiás': 52,
            'Maranhão': 21,
            'Minas Gerais': 31,
            'Mato Grosso do Sul': 50,
            'Mato Grosso': 51,
            'Pará': 15,
            'Paraíba': 25,
            'Pernambuco': 26,
            'Piauí': 22,
            'Paraná': 41,
            'Rio de Janeiro': 33,
            'Rio Grande do Norte': 24,
            'Rondônia': 11,
            'Roraima': 14,
            'Rio Grande do Sul': 43,
            'Santa Catarina': 42,
            'Sergipe': 28,
            'São Paulo': 35,
            'Tocantins': 17
        },

        palette: {
            integration: require('users/mapbiomas/modules:Palettes.js')
                .get('classification2')
        }

    },

    init: function () {

        this.ui.init();
        this.loadTables();
        this.loadImages();
        this.startMap();
    },

    setVersion: function () {

        App.ui.form.labelTitle.setValue('MapBiomas User Toolkit ' + App.options.version);

    },

    loadTables: function () {

        App.options.municipalities = ee.FeatureCollection(App.options.assets.municipalities);
        App.options.states = ee.FeatureCollection(App.options.assets.states);

    },

    loadImages: function () {

        App.options.integration = ee.Image(App.options.assets.integration);
        App.options.transitions = ee.Image(App.options.assets.transitions);

    },

    startMap: function () {

        Map.setCenter(-53.48144, -11.43695, 5);

        var imageLayer = ui.Map.Layer({
            'eeObject': App.options.integration,
            'visParams': {
                'bands': ['classification_2017'],
                'palette': App.options.palette.integration,
                'min': 0,
                'max': 33,
                'format': 'png'
            },
            'name': 'Mapbiomas 2016',
            'shown': true,
            'opacity': 1.0
        });

        Map.add(imageLayer);

    },

    formatName: function (name) {

        var formated = name
            .toLowerCase()
            .replace('á', 'a')
            .replace('à', 'a')
            .replace('â', 'a')
            .replace('ã', 'a')
            .replace('ä', 'a')
            .replace('ª', 'a')
            .replace('é', 'e')
            .replace('ê', 'e')
            .replace('í', 'i')
            .replace('ó', 'o')
            .replace('ô', 'o')
            .replace('õ', 'o')
            .replace('ç', 'c')
            .replace('ñ', 'n')
            .replace('&', '')
            .replace('@', '')
            .replace('/', '')
            .replace('.', '')
            .replace(' ', '');

        return formated;
    },

    ui: {

        init: function () {

            this.form.init();

        },

        loadStatesList: function (state) {

            App.ui.makeLayersList(state, App.options.activeFeature);

        },

        loadMunicipalitiesList: function (state) {

            App.ui.form.selectMunicipalitie.setPlaceholder('loading names...');

            ee.List(App.options.municipalities
                    .filterMetadata('UF', 'equals', state)
                    .reduceColumns(ee.Reducer.toList(), ['NM_MUNICIP'])
                    .get('list'))
                .sort()
                .evaluate(
                    function (municipalities, errorMsg) {

                        App.options.municipalitiesNames = municipalities;

                        App.ui.form.selectMunicipalitie = ui.Select({
                            'items': App.options.municipalitiesNames,
                            'placeholder': 'select municipalitie',
                            'onChange': function (municipalitie) {

                                App.ui.loadMunicipalitie(municipalitie);
                                App.ui.makeLayersList(municipalitie, App.options.activeFeature);

                            },
                            'style': {
                                'stretch': 'horizontal'
                            }
                        });

                        App.ui.form.panelMunicipalities.widgets()
                            .set(1, App.ui.form.selectMunicipalitie);

                    }
                );

        },

        loadState: function (state) {

            App.options.activeFeature = App.options.states
                .filterMetadata('CD_GEOCUF', 'equals', String(state));

            Map.centerObject(App.options.activeFeature);

            Map.clear();

            Map.addLayer(ee.Image().byte().paint(App.options.activeFeature, 1, 3), {
                    'palette': 'ffffff,ff0000',
                    'min': 0,
                    'max': 1
                },
                state + ' boundary',
                true);

        },

        loadMunicipalitie: function (municipalitie) {

            var uf = App.options.statesNames[App.ui.form.selectState.getValue()];

            App.options.activeFeature = App.options.municipalities
                .filterMetadata('NM_MUNICIP', 'equals', municipalitie)
                .filterMetadata('UF', 'equals', uf);

            Map.clear();

            Map.addLayer(ee.Image().byte().paint(App.options.activeFeature, 1, 3), {
                    'palette': 'ffffff,ff0000',
                    'min': 0,
                    'max': 1
                },
                municipalitie + ' boundary',
                true);

            Map.centerObject(App.options.activeFeature);

        },

        addImageLayer: function (year, label, region) {

            var imageLayer = ui.Map.Layer({
                'eeObject': App.options.integration.clip(region),
                'visParams': {
                    'bands': ['classification_' + year],
                    'palette': App.options.palette.integration,
                    'min': 0,
                    'max': 33,
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

            for (var i = 0; i < Map.layers().length(); i++) {

                var layer = Map.layers().get(i);

                if (label === layer.get('name')) {
                    Map.remove(layer);
                }
            }

        },

        manageLayers: function (checked, year, label, region) {

            if (checked) {
                App.ui.addImageLayer(year, label, region);
            } else {
                App.ui.removeImageLayer(label);
            }

        },

        makeLayersList: function (regionName, region) {

            App.ui.form.panelLayersList.clear();

            App.options.years.forEach(

                function (year, index, array) {
                    App.ui.form.panelLayersList.add(
                        ui.Checkbox({
                            "label": regionName + ' ' + year,
                            "value": false,
                            "onChange": function (checked) {

                                App.ui.manageLayers(checked, year, regionName + ' ' + year, region);

                            },
                            "disabled": false,
                            "style": {
                                'padding': '2px',
                                'stretch': 'horizontal',
                                'backgroundColor': '#dddddd',
                                'fontSize': '12px'
                            }
                        })
                    );

                }
            );

        },

        export2Drive: function () {

            var layers = App.ui.form.panelLayersList.widgets();

            for (var i = 0; i < layers.length(); i++) {

                var selected = layers.get(i).getValue();

                if (selected) {

                    var year = App.options.years[i];
                    var municName = App.formatName(App.ui.form.selectMunicipalitie.getValue() || 'state');
                    var stateName = App.formatName(App.ui.form.selectState.getValue());

                    Export.image.toDrive({
                        image: App.options.integration
                            .select(['classification_' + year])
                            .clip(App.options.activeFeature),
                        description: 'mapbiomas-' + stateName + '-' + municName + '-' + year,
                        folder: 'MAPBIOMAS-EXPORT',
                        fileNamePrefix: 'mapbiomas-' + stateName + '-' + municName + '-' + year,
                        region: App.options.activeFeature.geometry().bounds(),
                        scale: 30,
                        maxPixels: 1e13,
                    });
                }
            }
        },

        form: {

            init: function () {

                this.panelMain.add(this.labelTitle);

                this.panelState.add(this.labelState);
                this.panelState.add(this.selectState);

                this.panelMunicipalities.add(this.labelMunicipalitie);
                this.panelMunicipalities.add(this.selectMunicipalitie);

                this.panelMain.add(this.panelState);
                this.panelMain.add(this.panelMunicipalities);

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

            panelState: ui.Panel({
                'layout': ui.Panel.Layout.flow('vertical'),
                'style': {
                    'stretch': 'horizontal'
                },
            }),

            panelMunicipalities: ui.Panel({
                'layout': ui.Panel.Layout.flow('vertical'),
                'style': {
                    'stretch': 'horizontal'
                },
            }),

            panelLayersList: ui.Panel({
                'layout': ui.Panel.Layout.flow('vertical'),
                'style': {
                    'height': '350px',
                    'stretch': 'vertical',
                    'backgroundColor': '#cccccc',
                },
            }),

            labelTitle: ui.Label('MapBiomas User Toolkit', {
                'fontWeight': 'bold',
                'padding': '1px',
                'fontSize': '16px'
            }),

            labelState: ui.Label('State:', {
                'padding': '1px',
                'fontSize': '16px'
            }),
            
            labelNotes: ui.Label('Go to Task tab to run the export task.', {
                'padding': '1px',
                'fontSize': '16px'
            }),

            labelMunicipalitie: ui.Label('Municipalities:', {
                'padding': '1px',
                'fontSize': '16px'
            }),

            labelLayers: ui.Label('Layers:', {
                'padding': '1px',
                'fontSize': '16px'
            }),

            selectState: ui.Select({
                'items': [
                    'Acre', 'Alagoas', 'Amazonas', 'Amapá', 'Bahia',
                    'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão',
                    'Minas Gerais', 'Mato Grosso do Sul', 'Mato Grosso', 'Pará', 'Paraíba',
                    'Pernambuco', 'Piauí', 'Paraná', 'Rio de Janeiro', 'Rio Grande do Norte',
                    'Rondônia', 'Roraima', 'Rio Grande do Sul', 'Santa Catarina', 'Sergipe',
                    'São Paulo', 'Tocantins'
                ],
                'placeholder': 'select state',
                'onChange': function (state) {

                    App.ui.loadState(App.options.statesNames[state]);
                    App.ui.loadStatesList(state);
                    App.ui.loadMunicipalitiesList(App.options.statesNames[state]);

                },
                'style': {
                    'stretch': 'horizontal'
                }
            }),

            selectMunicipalitie: ui.Select({
                'items': [],
                'placeholder': 'None',
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
                    'padding': '2px',
                    'stretch': 'horizontal'
                }
            }),

        },
    }
};

App.init();

App.setVersion();