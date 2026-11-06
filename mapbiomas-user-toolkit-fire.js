/**
 * @name
 *      Mapbiomas User Toolkit Download
 * 
 *      This is a support tool for mapbiomas data users.
 *  
 * @author
 *    João Siqueira and Wallace Silva
 * 
 * @contact
 *      Tasso Azevedo, Marcos Rosa and João Siqueira
 *      contato@mapbiomas.org
 *c
 * @see
 *      Get the MapBiomas exported data in your "Google Drive/MAPBIOMAS-EXPORT" folder
 *      Code and Tutorial - https://github.com/mapbiomas/user-toolkit
 * 
 * @version
 *    1.0.0 - First release
 *    1.1.0 - Collection 1.0 fire
 *    1.1.1 - Add monthly data
 *    1.2.0 - Collection 1.1 fire
 *    1.3.0 - Collection 2.0 fire
 *    1.4.0 - Collection 3.0 fire
 *    1.4.1 - 2024-07-01
 *          - Redesenhando padrão do nome no export && atualização da função formatName, com replaces mais agressivos
 *          - Adicionando Coleção 2.1 do MapBiomas-Fogo
 *          - Adicionando direct links de area queimada anual simples, em raster e shapefile 
 *    1.4.3 - Dados finais da coleção 1.0 da Indonesia
 *          - Ajustando disclaimer para abarcar mais de uma iniciativa
 *          - Adicionando o disclaimer da Indonesia
 *    1.4.4 - 2024-07-29
 *          - Atualizando direct links. listas: (brazil) add: monthly_burned, accumulated_burned e frequency_burned; remove: monthly_burned_coverage e frequency_burned_coverage)
 *          - Corrigindo subtitulo 
 *    1.4.6 - 2024-10-01
 *          - Atualizando a coleção do monitor do fogo mascarada com os dados da coleção 9 da cobertura e uso
 *          - Atualizando rescortes espaciais para o conjunto de tabelas da coleção 9 do MapBiomas
 *          - Corrigindo bug da função "loadTablesNames", copiando a implementação do toolkit de cobertura e uso da terra
 *    1.4.7 - 2025-06-24
 *          - Atualizando com a coleção 4 do mapbiomas fogo Brasil
 *    1.4.8 - 2025-09-08
 *          - Atualizando com a coleção 4.1 do mapbiomas fogo Brasil
 *          - Adicionando a coleção 1.0 do mapbiomas fuego Paraguay 
 *    1.4.9 - 2025-09-22
 *          - Adicionando a coleção 1.0 do mapbiomas fuego Peru 
 *    1.4.10 -2026-05-14
 *          -Adicionando a coleção 5.0 do mapbiomas fogo Brasil
 *    1.4.11 - Territories from the MapBiomas platform
 *    1.4.12 - Fixes collection 3.1 frequency (fire_recurrence asset), time_after_fire bands,
 *             collection 1.0 frequency periods, peru accumulated coverage and year 2025;
 *             fixes download links (brazil col5 monthly, paraguay accumulated coverage)
 *             link to legend files (QGIS, ArcGIS Pro, SLD, CSV)
 *    1.4.13 - single link to the legend files on GitHub
 *    1.4.14 - Scar size classes drawn with their own colors (range 0-10); official legend files
 *    1.4.15 - Removes a leftover debug print from the console
 *    1.4.16 - Link to the region's download page, in place of the hard-coded download links
 *    1.4.17 - Base map styles and legend come from core/v1, not from a personal account
 *    2.0.0 - Breaking: export names and CSV columns standardized; territory drawn in red
 *    2.0.1 - Removes the legend links that were built at startup and never shown
 *    2.0.2 - Property and feature selects come from core/v1/panel.js
 *    2.0.3 - Export plumbing comes from core/v1/export.js; the Buffer setting is honoured
 *    2.0.4 - Collections come from data/collections-<theme>.js
 *    2.0.5 - Removes the leftover widgets of the States dropdown, which had no select
 *    2.1.0 - Shows the Buffer control, which now applies to the exported raster
 *            if it is ever shown on the panel, where it is commented out
 *            and centred in every toolkit
 *    2.2.0 - Brazil collection 5.1; Argentina, Bolivia, Chile and Colombia collection 1.0;
 *            Indonesia and Peru collection 2.0; fire monitor for Indonesia and Peru
 *    2.3.0 - The disclaimers come from data/disclaimers.js, the same notes the platform
 *            shows: Argentina, Bolivia, Chile and Colombia added, one language per country
 * 
 */

var palettes = require('users/mapbiomas/modules:Palettes.js');
var fire_palettes = require('users/workspaceipam/packages:mapbiomas-toolkit/utils/palettes');
var logos = require('users/workspaceipam/packages:mapbiomas-toolkit/utils/b64');

var Area = require('users/mapbiomas/user-toolkit:core/v1/area.js');
var Naming = require('users/mapbiomas/user-toolkit:core/v1/naming.js');
var Layers = require('users/mapbiomas/user-toolkit:core/v1/layers.js');
var Territory = require('users/mapbiomas/user-toolkit:core/v1/territory.js');

var Territories = require('users/mapbiomas/user-toolkit:data/territories.js');
var Downloads = require('users/mapbiomas/user-toolkit:data/downloads.js');
var Collections = require('users/mapbiomas/user-toolkit:data/collections-fire.js');
var Disclaimers = require('users/mapbiomas/user-toolkit:data/disclaimers.js');
var Panel = require('users/mapbiomas/user-toolkit:core/v1/panel.js');
var Exports = require('users/mapbiomas/user-toolkit:core/v1/export.js');

var App = {

    options: {

        version: '2.3.0',

        logo: {
            uri: 'gs://mapbiomas-public/mapbiomas-logos/mapbiomas-logo-horizontal.b64',
            base64: logos.get('logo_mapbiomas_fire')
        },

        tables: Territories.pick([
            'mapbiomas-argentina',
            'mapbiomas-bolivia',
            'mapbiomas-brazil',
            'mapbiomas-chile',
            'mapbiomas-colombia',
            'mapbiomas-indonesia',
            'mapbiomas-paraguay',
            'mapbiomas-peru'
        ]),

        collections: Collections.pick([
            'mapbiomas-argentina',
            'mapbiomas-bolivia',
            'mapbiomas-brazil',
            'mapbiomas-chile',
            'mapbiomas-colombia',
            'mapbiomas-indonesia',
            'mapbiomas-paraguay',
            'mapbiomas-peru'
        ]),

        // Brazil first: its note is the one shown when the toolkit opens
        disclaimers: Disclaimers.pick('fire', [
            'mapbiomas-brazil',
            'mapbiomas-argentina',
            'mapbiomas-bolivia',
            'mapbiomas-chile',
            'mapbiomas-colombia',
            'mapbiomas-indonesia',
            'mapbiomas-paraguay',
            'mapbiomas-peru'
        ]),

        bandsNames: {
          'annual_burned':'burned_area_',
          'annual_burned_coverage':'burned_coverage_',
          'monthly_burned':'burned_monthly_',
          'monthly_burned_coverage':'burned_coverage_',
          'annual_burned_scar_size_range':'scar_area_ha_',
          'accumulated_burned':'fire_accumulated_',
          'accumulated_burned_coverage':'fire_accumulated_',
          'year_last_fire':'classification_',
          'time_after_fire':'classification_',
          'fire_frequency':'fire_frequency_',
          'fire_frequency_coverage':'fire_frequency_',
          'fire_monitor':'burned_coverage_',
          'severity':'classification_',
          'interval_since_fire':'classification_'
        },

        dataType: 'annual_burned',

        data: {},

        ranges: {
          'annual_burned':{'min':1,'max':1},
          'annual_burned_coverage':{'min':0,'max':69},
          'monthly_burned':{'min':1,'max':12},
          'monthly_burned_coverage':{'min':1,'max':12},
          'annual_burned_scar_size_range':{'min':0,'max':10},
          'accumulated_burned':{'min':1,'max':1},
          'accumulated_burned_coverage':{'min':0,'max':69},
          'year_last_fire':{'min':1985,'max':2023},
          'time_after_fire':{'min':0,'max':40},
          'fire_frequency':{'min':0,'max':41},
          'fire_frequency_coverage':{'min':0,'max':41},
          'fire_monitor':{'min':1,'max':1},
          'severity':{'min':1,'max':6},
          'interval_since_fire':{'min':1,'max':40},

        },

        vector: null,
        activeFeature: null,
        activeName: '',

        mapbiomasRegion: '',

        palette: {
          'annual_burned':['#ff0000'],
          'annual_burned_coverage':palettes.get('classification9'),
          'monthly_burned':fire_palettes.get('mensal'),
          'monthly_burned_coverage':fire_palettes.get('mensal'),
          'annual_burned_scar_size_range':fire_palettes.get('tamanho_n2'),
          'accumulated_burned':['#800000'],
          'accumulated_burned_coverage':palettes.get('classification9'),
          'year_last_fire':fire_palettes.get('ano_do_ultimo_fogo'),
          'time_after_fire':fire_palettes.get('ultimo_fogo'),
          'fire_frequency':fire_palettes.get('frequencia'),
          'fire_frequency_coverage':fire_palettes.get('frequencia'),
          'fire_monitor':['#870508'],
          
        },

        taskid: 1,

        bufferDistance: 0,

        className: {
            1: "Forest",
            2: "Natural Forest",
            3: "Forest Formation",
            4: "Savanna Formation",
            5: "Magrove",
            6: "Áreas Naturales Inundables - Leñosas (Bosque Inundable)",
            9: "Forest Plantation",
            10: "Non Forest Natural Formation",
            11: "Wetland",
            12: "Grassland (Pastizal, Formación Herbácea)",
            13: "Other Non Forest Natural Formation",
            14: "Farming",
            15: "Pasture",
            18: "Agriculture",
            19: "Temporary Crops (Herbaceas - Agricultura)",
            20: "Sugar Cane",
            21: "Mosaic of Agriculture and Pasture",
            22: "Non vegetated area",
            23: "Beach and Dune",
            24: "Urban Infrastructure",
            25: "Other Non Vegetated Area",
            26: "Water",
            27: "Non Observed",
            29: "Rocky outcrop",
            30: "Mining",
            31: "Aquaculture",
            32: "Salt flat",
            33: "River, Lake and Ocean",
            34: "Glacier",
            35: "Oil Palm",
            36: "Perennial Crops",
            37: "Artificial Water Body",
            38: "Water Reservoirs",
            39: "Soy Beans",
            40: "Rice",
            41: "Mosaic of Crops",
            42: "Pastizal abierto", // Only for Chaco
            43: "Pastizal cerrado", // Only for Chaco
            44: "Pastizal disperso", // Only for Chaco
            45: "Leñosas dispersas", // Only for Chaco
            46: 'Coffe',
            47: 'Citrus',
            48: 'Other Perennial Crops',
            49: 'Wooded Sandbank Vegetation',
            50: 'Herbaceous Sandbank Vegetation',
            57: 'Cultivo Simples', // Only for Chaco
            58: 'Cultivo Múltiple', // Only for Chaco
            62: "Cotton",
            63: "Steppe",
            69: "Coral",
            0: "Non Observed",

        },
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

        App.ui.form.labelTitle.setValue('MapBiomas-Fire User Toolkit ' + App.options.version);

    },

    formatName: function (input) {
          // Mapeamento de caracteres com acentos para caracteres simples
          var acentos = {
            'á': 'a', 'ã': 'a', 'â': 'a', 'à': 'a', 'ä': 'a',
            'é': 'e', 'ê': 'e', 'è': 'e', 'ë': 'e',
            'í': 'i', 'î': 'i', 'ì': 'i', 'ï': 'i',
            'ó': 'o', 'õ': 'o', 'ô': 'o', 'ò': 'o', 'ö': 'o',
            'ú': 'u', 'û': 'u', 'ù': 'u', 'ü': 'u',
            'ç': 'c',
            'Á': 'a', 'Ã': 'a', 'Â': 'a', 'À': 'a', 'Ä': 'a',
            'É': 'e', 'Ê': 'e', 'È': 'e', 'Ë': 'e',
            'Í': 'i', 'Î': 'i', 'Ì': 'i', 'Ï': 'i',
            'Ó': 'o', 'Õ': 'o', 'Ô': 'o', 'Ò': 'o', 'Ö': 'o',
            'Ú': 'u', 'Û': 'u', 'Ù': 'u', 'Ü': 'u',
            'Ç': 'c'
          };
          
          // Remove acentos
          var semAcentos = input.split('').map(function(char) {
            return acentos[char] || char;
          }).join('');
          
          // Converte para caixa baixa
          var minuscula = semAcentos.toLowerCase();
          
          // Substitui espaços por underscores
          var comUnderscores = minuscula.replace(/\s+/g, '_');
          
          // Substitui traço por underscores
          var comtraco = comUnderscores.replace(/-/g, '_');
          
          // Remove caracteres especiais
          var resultado = comtraco.replace(/[^a-z0-9_]/g, '');
          
          return resultado;
    },
    
    formatLabelWithLinks: function(text, links, maxChars) {
      maxChars = maxChars || 60;  // ajuste conforme largura desejada
    
      // Painel em wrap horizontal
      var panel = ui.Panel({
        layout: ui.Panel.Layout.flow('horizontal', true),
        style: { margin: '0px' }
      });
    
      // Estilos
      var txtStyle  = { margin: '0px 2px 0px 2px' };
      var linkStyle = {
        margin:          '0px 2px 0px 2px',
        color:           'blue',
        textDecoration:  'underline'
      };
    
      // Regex que captura **link** + pontuação opcional logo após
      var regex = /\*\*(.*?)\*\*([,.;:!?])?/g;
    
      // 1) Função para quebrar textos muito longos em pedaços <= maxChars
      function splitLong(txt) {
        var words = txt.split(' ');
        var lines = [];
        var curr  = '';
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
    
      // 2) Função auxiliar para adicionar uma linha de texto simples
      function addTextLine(str) {
        panel.add(ui.Label(str, txtStyle));
      }
    
      // 3) Função auxiliar para adicionar um link (com pontuação já inclusa)
      function addLink(labelText, url) {
        panel.add(ui.Label({
          value:     labelText,
          targetUrl: url || null,
          style:     url ? linkStyle : txtStyle
        }));
      }
    
      // 4) Função que quebra o texto em link/non-link e adiciona ao painel
      function addPieces(str) {
        var lastIndex = 0;
        var m;
        while ((m = regex.exec(str)) !== null) {
          // 4.1) Texto antes do link
          if (m.index > lastIndex) {
            var before = str.substring(lastIndex, m.index);
            var chunks = splitLong(before);
            for (var j = 0; j < chunks.length; j++) {
              addTextLine(chunks[j]);
            }
          }
          // 4.2) O próprio link + pontuação
          var lblText = m[1] + (m[2] || '');
          var url     = links[m[1]];
          addLink(lblText, url);
    
          lastIndex = regex.lastIndex;
        }
        // 4.3) Resto do texto após o último link
        if (lastIndex < str.length) {
          var after = str.substring(lastIndex);
          var tailChunks = splitLong(after);
          for (var k = 0; k < tailChunks.length; k++) {
            addTextLine(tailChunks[k]);
          }
        }
      }
    
      // Executa
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

            // App.setPalette(regionName);

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
                          
                          var datas = Object.keys(App.options.collections[regionName][collectioName].assets);
                          
    
                          datas.forEach(function(key){

                            var mod_100_exception = [''];
                            var div_100_exception = ['monthly_burned_coverage','fire_frequency_coverage'];
                            
                            if (mod_100_exception.indexOf(key) !== -1){
                              App.options.data[key] = ee.Image(App.options.collections[regionName][collectioName].assets[key]).mod(100).int8();
                              return ; 
                            }

                            if (div_100_exception.indexOf(key) !== -1){
                              App.options.data[key] = ee.Image(App.options.collections[regionName][collectioName].assets[key]).divide(100).int8();
                              return ;
                            }

                            if (key === 'fire_monitor'){
                            // monitor de area queimada sentinel
                            
                              var fireMonitor = ee.ImageCollection(
                                  App.options.collections[regionName]['fire_monitor'].assets.fire_monitor)
                                  .toBands();
  
                              // toBands() names each band <region>-<year>-<month>_<band>, with or
                              // without a zero before the month (brazil-2019-1, peru-2025-07)
                              var oldBands = fireMonitor.bandNames();
                              var year_month = oldBands.map(function (band) {
                                  var parts = ee.String(band).split('_').getString(0).split('-');
                                  var month = ee.Number.parse(parts.getString(2)).toInt().format('%02d');

                                  return parts.getString(1).cat('_').cat(month);
                              });

                              var newBands = year_month.map(function (str) { return ee.String('burned_coverage_').cat(str) });

                              App.options.collections[regionName]['fire_monitor'].periods.fire_monitor = year_month.sort().getInfo();

                              App.options.data.fire_monitor = fireMonitor
                                  .select(oldBands, newBands)
                                  .gt(0).byte();
  
                              return ; 
                            }

                              // a coleção 3.1 publica a frequência como fire_recurrence_YYYY_YYYY, e as
                              // coleções novas publicam ano do último fogo, severidade, intervalo e tempo
                              // após o fogo como <produto>_YYYY, não classification_YYYY
                              App.options.data[key] = ee.Image(App.options.collections[regionName][collectioName].assets[key])
                                  .regexpRename('^fire_recurrence_', 'fire_frequency_')
                                  .regexpRename('^(year_last_fire|time_after_fire|severity_class|interval_since_fire)_', 'classification_');
                            
                          });
                          
                          App.ui.setDataType(datas[0]);

                            var year = App.options.collections[regionName][collectioName].periods[datas[0]].slice(-1)[0];

                            Map.centerObject(App.options.data[Object.keys(App.options.data)[0]].geometry().bounds(), 5);

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

                        // App.ui.loadingBox();
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

                            if (App.ui.form.selectDataType.getValue() !== null){
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
                            
                            if (App.ui.form.selectDataType.getValue() !== null){
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
                .select([App.options.bandsNames[App.options.dataType] + period])
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

            if (checked !== false) {
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
                        .select([App.options.bandsNames[App.options.dataType] + period]);

                    // o buffer escolhido pelo usuário era ignorado aqui
                    var region = Exports.regionOf(
                        App.options.activeFeature, App.options.bufferDistance);

                    data = data.multiply(ee.Image().paint(region).eq(0));

                    Exports.image({
                        'image': data,
                        'name': fileName,
                        'region': region.bounds(),
                        'fileDimensions': 256 * 124
                    });

                    bandIds.push(App.options.bandsNames[App.options.dataType] + period);
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
                        "areaColumn": 'area_km2',
                    });

                    area = ee.FeatureCollection(area).map(
                        function (feature) {
                            
                            var className = ee.String(feature.get('class')).cat(' observations');
                            feature = feature.set('class_name', className).set('band', band);

                            return feature;
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
        
        showDisclaimer: function () {
            var notes = App.options.disclaimers;

            App.ui.form.panelDisclaimer.widgets().reset([]);
        
            var panelDisclaimerText = ui.Panel({
                'widgets': App.disclaimerWidgets(notes[0]),
                'layout': ui.Panel.Layout.flow('vertical'),
                'style': {'stretch': 'both'},
            });
        
            var panelButtonsChoiceCollections = ui.Panel({'layout': ui.Panel.Layout.flow('horizontal', true)});
  
            var button_close = ui.Button({
                // "label": '',
                "onClick": function () {
                    Map.remove(App.ui.form.panelDisclaimer);
                    App.ui.form.buttonDisclaimerShow.setDisabled(false);
                },
                "disabled": false,
                "style": {
                  // 'margin':'0px'
                    // 'stretch': 'horizontal'
                },
                // "imageUrl":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABhElEQVR4nO3WXUvCUBgHcME+zqQuNpUItL0QQVg3o7K7ootCgiToE9RFfTy7UUFlvTiVujl7wQv3jzNFK/fWdoY3HniuNvbb/5xn48lk1muVC6XSBpGLOSLxcqKSizn6rEiooQhbhiS0DSkPNiW0jd38ZmhStuisRKEFVc36wkThOeborIjCc/6wVCinBkuFcizYPD4IB/a22cL27RXwrmP8/Oj7YLt+jUnjBVb1iBG8vwOn2QZGX8DwE+Onh2X0rgb0dfceinslJ3ESW+cncDrdBf4jOU2Kj8H0Wn8A+/6G7RlbHnhUNBHshUMfRUITw3Nce52CtPRRKMoEdre3P1zAf848Fdj+daZDONpbZJzEhb0aKajb2fxA6v7dGxUn/4XNiginp81Q3f1ZLDfcKZxOz72HvoR5KDFKXLuA09UCu5cmnzQasC7P2J6xWRFDO9dQiul9TkbMIoHwqgYBpDb65JuBo8982BOFFjtUaIUOe/PkqpqlW5N4vFV4LjTpemVSXt/VnnbeFSNe/AAAAABJRU5ErkJggg=="
                "imageUrl":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAzElEQVR4nO3WwQqCQBCA4f9YEqx1td7JS+/UzffxEuShbOkVehVD2AVZdLF2WskcGBAH+dhhWAeW+MfIgKNwZmPgHGiEM38H1sApMPUncEF4FD8Nb4HE850CVtJwCtyBCtgMoDegBNaSsAKu5r2LW7StXZyaSKtVB7C4DxWDMVBt6mfTfvucfHuqVeeUQyeNAlcx4NRpdR2j1apnkPoGThRWnun14cHwAXh6Wmrxh7nhxOA29iOuzN2sfhLRYD3VItDEXn2yqZa9JeYVL4hCueRYbYOeAAAAAElFTkSuQmCC"
            });
            panelButtonsChoiceCollections.add(button_close);
        
            notes.forEach(function (note) {
                var button = ui.Button({
                    "label": note.label,
                    "onClick": function () {
                        panelDisclaimerText.widgets().reset(App.disclaimerWidgets(note));
                    },
                    // no stretch: with eight countries the labels got cut; at their own
                    // width the buttons wrap onto a second row
                    "disabled": false
                });
                panelButtonsChoiceCollections.add(button);
            });
        
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
        
            App.ui.form.panelDisclaimer.add(panelButtonsChoiceCollections);
            App.ui.form.panelDisclaimer.add(panelDisclaimerText);
            App.ui.form.panelDisclaimer.add(buttonDisclaimerOk);
        
            Map.add(App.ui.form.panelDisclaimer);
        
            App.ui.form.buttonDisclaimerShow.setDisabled(true);
        },

        form: {

            init: function () {

                var blob = ee.Blob(App.options.logo.uri);

                blob.string().evaluate(
                    function (str) {
                        str = str.replace(/\n/g, '');
                        
                        str = App.options.logo.base64 === null ? str : App.options.logo.base64;
                        
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
                App.ui.form.panel1.add(App.ui.form.panelBuffer);
                App.ui.form.panel1.add(App.ui.form.panelDataType);

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
                    // 'Dark2':Basemaps.getStyle('Dark2'),
                    // 'Aubergine':Basemaps.getStyle('Aubergine'),
                    'Silver':Basemaps.getStyle('Silver'),
                    'Night':Basemaps.getStyle('Night'),
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

            labelSubtitle: ui.Label('Burned Area Maps', {
                // 'fontWeight': 'bold',
                // 'padding': '1px',
                'fontSize': '14px'
            }),

            // arquivos de legenda da coleção mais recente (legend-colors/ no GitHub)
            labelLegendFiles: ui.Label('Legend files (QGIS, ArcGIS Pro, SLD, CSV)', {
                'fontSize': '10px'
            },
                'https://github.com/mapbiomas/user-toolkit/tree/master/legend-colors/fire'
            ),

            labelDownloads: ui.Label('Download full maps', {
                'fontSize': '10px'
            },
                Downloads.DEFAULT_PAGE
            ),

            labelLink: ui.Label('Legend codes:', {
                'fontSize': '10px'
            }
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

            labelNotes: ui.Label('Click the RUN button in the TASK tab at the upper-right corner.', {
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
                    'mapbiomas-argentina',
                    'mapbiomas-bolivia',
                    'mapbiomas-brazil',
                    'mapbiomas-chile',
                    'mapbiomas-colombia',
                    'mapbiomas-indonesia',
                    'mapbiomas-paraguay',
                    'mapbiomas-peru',
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
                    // 'padding': '2px',
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
                    // 'padding': '2px',
                    'stretch': 'horizontal'
                }
            }),

            // Checkbox Brazil
            
            // Checkbox Indonesia
            
            // Checkbox Paraguay (tab5)
            
            // Checkbox Peru (tab6) — vem depois do Peru
            

            
            panel1: ui.Panel({
                style: {
                    'stretch': 'both'
                }
            }),
          // Brasil links
          // Indonesia links
          // Paraguay links
          // Peru links
        },
    }
};

 

App.init();

App.setVersion();

