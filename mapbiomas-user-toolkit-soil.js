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
 *
 * @see
 *      Get the MapBiomas exported data in your "Google Drive/MAPBIOMAS-EXPORT" folder
 *      Code and Tutorial - https://github.com/mapbiomas-brazil/user-toolkit
 * 
 * @version
 *    1.0.0 - 
 *            First release
 *    1.1.0 - 
 *            Collection 2.0 soil
 *    1.1.1 - 2025-09-20
 *            Collection 2.1 soil
 *    1.1.2 - 2025-12-08
 *            Collection 3.0 soil
 *    1.1.3 - Territories from the MapBiomas platform
 *    1.1.4 - single link to the legend files on GitHub
 *    1.1.5 - Removes leftover debug prints from the console
 *    1.1.6 - Link to the region's download page, in place of the hard-coded download links
 *    1.1.7 - Base map styles and legend come from core/v1, not from a personal account
 *    2.0.0 - Breaking: export names and CSV columns standardized; territory drawn in red
 *    2.0.1 - Removes the legend links that were built at startup and never shown
 *    2.0.2 - Property and feature selects come from core/v1/panel.js
 *    2.0.3 - Export plumbing comes from core/v1/export.js; the Buffer setting is honoured
 *    2.0.4 - Collections come from data/collections-<theme>.js
 *    2.0.5 - Removes the leftover widgets of the States dropdown, which had no select
 *    2.1.0 - Shows the Buffer control, which now applies to the exported raster
 *            if it is ever shown on the panel, where it is commented out
 *            and centred in every toolkit
 * 
 */

// collection 2_1
var carbon_2_1 = ee.Image('projects/mapbiomas-public/assets/brazil/soil/collection2_1/mapbiomas_brazil_collection21_soil_carbon_v2');
carbon_2_1 = carbon_2_1.rename(carbon_2_1.bandNames().map(function(str) {return ee.String(str).replace('carbon', 'prediction')}));
// print('carbon_2_1',carbon_2_1);

var clay_fraction_2_1 = ee.ImageCollection('projects/mapbiomas-public/assets/brazil/soil/collection2_1/mapbiomas_brazil_collection21_soil_clay_fraction_v2').toBands();
clay_fraction_2_1 = clay_fraction_2_1
  .rename(clay_fraction_2_1.bandNames().map(function(str) {return ee.String('clay').cat(ee.String(str).replace('clay_fraction', '', 'g')).replace('_v2_', 'cm', 'g');}));
// print('clay_fraction_2_1',clay_fraction_2_1);

var sand_fraction_2_1 = ee.ImageCollection('projects/mapbiomas-public/assets/brazil/soil/collection2_1/mapbiomas_brazil_collection21_soil_sand_fraction_v2').toBands();
sand_fraction_2_1 = sand_fraction_2_1
  .rename(sand_fraction_2_1.bandNames().map(function(str) {return ee.String('sand').cat(ee.String(str).replace('sand_fraction', '', 'g')).replace('_v2_', 'cm', 'g');}));
// print('sand_fraction_2_1',sand_fraction_2_1);

var silt_fraction_2_1 = ee.ImageCollection('projects/mapbiomas-public/assets/brazil/soil/collection2_1/mapbiomas_brazil_collection21_soil_silt_fraction_v2').toBands();
silt_fraction_2_1 = silt_fraction_2_1
  .rename(silt_fraction_2_1.bandNames().map(function(str) {return ee.String('silt').cat(ee.String(str).replace('silt_fraction', '', 'g')).replace('_v2_', 'cm', 'g');}));
// print('silt_fraction_2_1',silt_fraction_2_1);

var textural_class_2_1 = ee.ImageCollection('projects/mapbiomas-public/assets/brazil/soil/collection2_1/mapbiomas_brazil_collection21_soil_textural_class_v2').toBands();
textural_class_2_1 = textural_class_2_1
    .rename(textural_class_2_1.bandNames().map(function(str) {return ee.String('textural_classes').cat(ee.String(str).replace('textural_class', '', 'g')).replace('_v2_', 'cm', 'g');}));
// print('textural_class_2_1',textural_class_2_1);

var textural_group_2_1 = ee.ImageCollection('projects/mapbiomas-public/assets/brazil/soil/collection2_1/mapbiomas_brazil_collection21_soil_textural_group_v2').toBands();
textural_group_2_1 = textural_group_2_1
    .rename(textural_group_2_1.bandNames().map(function(str) {return ee.String('textural_groups').cat(ee.String(str).replace('textural_group', '', 'g')).replace('_v2_', 'cm', 'g');}));
// print('textural_group_2_1',textural_group_2_1);

var textural_subgroup_2_1 = ee.ImageCollection('projects/mapbiomas-public/assets/brazil/soil/collection2_1/mapbiomas_brazil_collection21_soil_textural_subgroup_v2').toBands();
textural_subgroup_2_1 = textural_subgroup_2_1
    .rename(textural_subgroup_2_1.bandNames().map(function(str) {return ee.String('textural_subgroups').cat(ee.String(str).replace('textural_subgroup', '', 'g')).replace('_v2_', 'cm', 'g');}));
// print('textural_subgroup_2_1',textural_subgroup_2_1);

// collection 3
var carbon_3 = ee.Image('projects/mapbiomas-public/assets/brazil/soil/collection3/mapbiomas_brazil_collection3_soil_carbon_v1');
carbon_3 = carbon_3.rename(carbon_3.bandNames().map(function(str) {return ee.String(str).replace('carbon', 'prediction')}));
// print('carbon_3',carbon_3);

var clay_fraction_3 = ee.ImageCollection('projects/mapbiomas-public/assets/brazil/soil/collection3/mapbiomas_brazil_collection3_soil_clay_fraction_v1').toBands();
clay_fraction_3 = clay_fraction_3
  .rename(clay_fraction_3.bandNames().map(function(str) {return ee.String('clay').cat(ee.String(str).replace('clay_fraction', '', 'g')).replace('_v1_', 'cm', 'g');}));
// print('clay_fraction_3',clay_fraction_3);

var sand_fraction_3 = ee.ImageCollection('projects/mapbiomas-public/assets/brazil/soil/collection3/mapbiomas_brazil_collection3_soil_sand_fraction_v1').toBands();
sand_fraction_3 = sand_fraction_3
  .rename(sand_fraction_3.bandNames().map(function(str) {return ee.String('sand').cat(ee.String(str).replace('sand_fraction', '', 'g')).replace('_v1_', 'cm', 'g');}));
// print('sand_fraction_3',sand_fraction_3);

var silt_fraction_3 = ee.ImageCollection('projects/mapbiomas-public/assets/brazil/soil/collection3/mapbiomas_brazil_collection3_soil_silt_fraction_v1').toBands();
silt_fraction_3 = silt_fraction_3
  .rename(silt_fraction_3.bandNames().map(function(str) {return ee.String('silt').cat(ee.String(str).replace('silt_fraction', '', 'g')).replace('_v1_', 'cm', 'g');}));
// print('silt_fraction_3',silt_fraction_3);

var textural_class_3 = ee.ImageCollection('projects/mapbiomas-public/assets/brazil/soil/collection3/mapbiomas_brazil_collection3_soil_textural_class_v1').toBands();
textural_class_3 = textural_class_3
    .rename(textural_class_3.bandNames().map(function(str) {return ee.String('textural_classes').cat(ee.String(str).replace('textural_class', '', 'g')).replace('_v1_', 'cm', 'g');}));
// print('textural_class_3',textural_class_3);

var textural_group_3 = ee.ImageCollection('projects/mapbiomas-public/assets/brazil/soil/collection3/mapbiomas_brazil_collection3_soil_textural_group_v1').toBands();
textural_group_3 = textural_group_3
    .rename(textural_group_3.bandNames().map(function(str) {return ee.String('textural_groups').cat(ee.String(str).replace('textural_group', '', 'g')).replace('_v1_', 'cm', 'g');}));
// print('textural_group_3',textural_group_3);

var textural_subgroup_3 = ee.ImageCollection('projects/mapbiomas-public/assets/brazil/soil/collection3/mapbiomas_brazil_collection3_soil_textural_subgroup_v1').toBands();
textural_subgroup_3 = textural_subgroup_3
    .rename(textural_subgroup_3.bandNames().map(function(str) {return ee.String('textural_subgroups').cat(ee.String(str).replace('textural_subgroup', '', 'g')).replace('_v1_', 'cm', 'g');}));
// print('textural_subgroup_3',textural_subgroup_3);

var stoniness_3 = ee.ImageCollection('projects/mapbiomas-public/assets/brazil/soil/collection3/mapbiomas_brazil_collection3_soil_stoniness_v1').toBands();
stoniness_3 = stoniness_3
    .rename(stoniness_3.bandNames().map(function(str) {return ee.String(str).replace('_v1_soil_depth_stoniness', 'vol', 'g')}));

// stoniness_deph_50vol
// stoniness_deph_90vol

/**
 * @description
 *    calculate area for mapbiomas map
 * 
 * @author
 *    João Siqueira
 * @adaptation for carbon calculate
 *    Wallace Silva
 * 
 */
var Area = {

    /**
     * Convert a complex obj to feature collection
     * @param obj 
     */
    convert2table: function (obj) {

        obj = ee.Dictionary(obj);

        var classesAndAreas = ee.List(obj.get('groups'));

        var tableRows = classesAndAreas.map(
            function (classAndArea) {
                classAndArea = ee.Dictionary(classAndArea);

                var classId = classAndArea.get('class');
                var area = classAndArea.get('sum');

                var tableColumns = ee.Feature(null)
                    .set('class', classId)
                    .set('Área ha', area);

                return tableColumns;
            }
        );

        return ee.FeatureCollection(ee.List(tableRows));
    },
 
    convert2table_adapt: function (obj) {

        obj = ee.Dictionary(obj);

        var classesAndAreas = ee.List(obj.get('groups'));

        var tableRows = classesAndAreas.map(
            function (classAndArea) {
                classAndArea = ee.Dictionary(classAndArea);

                var classId = classAndArea.getNumber('class');//.mod(100).int();

                // var area = classAndArea.get('sum');
                var gt_cos = classAndArea.getNumber('sum')
                  .divide(1000000000); // transformando toneladas para gigatonelada de carbono

                var tableColumns = ee.Feature(null)
                    .set('class', classId)
                    // .set('index',ee.String(classId).cat(obj.get('territory')))
                    // .set('Área ha', area)
                    .set('Gt COS', gt_cos);

                return tableColumns;
            }
        );

        return ee.FeatureCollection(ee.List(tableRows));
    },
    
 
    /**
     * Calculate amount crossing a cover map (deforestation, mapbiomas)
     * and a region map (states, biomes, municipalites)
desc * descontinuado ~ @param image ~
novo * @param image_class
novo * @param image_quant
     * @param territory 
     * @param geometry
     * @param scale
modf * @param factor
     */
    calculate: function (object) {

        var reducer = ee.Reducer.sum().group(1, 'class').group(1, 'territory');
        var pixelArea = ee.Image.pixelArea().divide(10000);
        var pixelToneladas = object.image_quant
        .multiply(object.factor).multiply(pixelArea);
        
        pixelArea = pixelArea.updateMask(pixelToneladas.gte(-2));
        
        var territotiesData = pixelToneladas.addBands(object.territory).addBands(object.image_class)
            .reduceRegion({
                reducer: reducer,
                geometry: object.geometry,
                scale: object.scale,
                maxPixels: 1e13
            });

        territotiesData = ee.List(territotiesData.get('groups'));
        // print(territotiesData);
        var toneladas = territotiesData.map(Area.convert2table_adapt);

        var territotiesData_areas = pixelArea.addBands(object.territory).addBands(object.image_class)
            .reduceRegion({
                reducer: reducer,
                geometry: object.geometry,
                scale: object.scale,
                maxPixels: 1e13
            });

        territotiesData_areas = ee.List(territotiesData_areas.get('groups'));

        var areas = territotiesData_areas.map(Area.convert2table);

        toneladas = ee.FeatureCollection(toneladas).flatten();
        areas = ee.FeatureCollection(areas).flatten();

        // Definir a propriedade de junção como 'index'
        var  joinKey = 'class';
        var join = ee.Join.inner();
        var filter_join = ee.Filter.equals({
          'leftField':joinKey,
          'rightField':joinKey,
        });
        
        // Função para copiar as propriedades de dois Features juntos
        function getJoin (feature) {
          return  ee.Feature(null)
            .copyProperties(feature.get('primary'))
            .copyProperties(feature.get('secondary'));
        }
        var joinedFeatures = join.apply(toneladas, areas, filter_join).map(getJoin);
        
        // Verificar o resultado
        // print('Joined Features:', joinedFeatures);
        // print('toneladas:', toneladas);
        // print('areas:', areas);
        return joinedFeatures;
    }

};
/**
 * 
 */
 
var palettes = require('users/mapbiomas/modules:Palettes.js');
// var fire_palettes = require('users/workspaceipam/packages:mapbiomas-toolkit/utils/palettes');
var logos = require('users/workspaceipam/packages:mapbiomas-toolkit/utils/b64');

var Naming = require('users/mapbiomas/user-toolkit:core/v1/naming.js');
var Layers = require('users/mapbiomas/user-toolkit:core/v1/layers.js');
var Territory = require('users/mapbiomas/user-toolkit:core/v1/territory.js');

var Territories = require('users/mapbiomas/user-toolkit:data/territories.js');
var Downloads = require('users/mapbiomas/user-toolkit:data/downloads.js');
var Collections = require('users/mapbiomas/user-toolkit:data/collections-soil.js');
var Panel = require('users/mapbiomas/user-toolkit:core/v1/panel.js');
var Exports = require('users/mapbiomas/user-toolkit:core/v1/export.js');

var App = {

    options: {

        version: '2.1.0',

        logo: {
            uri: 'gs://mapbiomas-public/mapbiomas-logos/mapbiomas-logo-horizontal.b64',
            base64: logos.get('logo_mapbiomas_solo')
        },

        tables: Territories.pick([
            'mapbiomas-brazil'
        ]),

        collections: Collections.pick([
            'mapbiomas-brazil'
        ]),

        bandsNames: {
            'soc_t_ha_000_030cm':'prediction_',
            'soc_kg_m2_000_030cm':'prediction_',
            'granulometry_clay_percent':'clay_',
            'granulometry_sand_percent':'sand_',
            'granulometry_silt_percent':'silt_',
            'textural_classes':'textural_classes_',
            'textural_groups':'textural_groups_',
            'textural_subgroups':'textural_subgroups_',
            'stoniness':'soil_depth_stoniness_'
        },

        dataType: 'soc_t_ha_000_030cm',

        data: {
          'soc_t_ha_000_030cm':null,
          'soc_kg_m2_000_030cm':null,
          'granulometry_clay_percent':null,
          'granulometry_sand_percent':null,
          'granulometry_silt_percent':null,
          'textural_classes':null,
          'textural_subgroups':null,
          'textural_groups':null,
          'stoniness':null,
        },

        fileDimensions: {
          'soc_t_ha_000_030cm': 256 * 124,
          'soc_kg_m2_000_030cm': 256 * 124,
          'granulometry_clay_percent': 256 * 124,
          'granulometry_sand_percent': 256 * 124,
          'granulometry_silt_percent': 256 * 124,
          'textural_classes': 256 * 124,
          'textural_subgroups': 256 * 124,
          'textural_groups': 256 * 124,
          'stoniness': 256 * 124,
        },

        ranges: {
          'soc_t_ha_000_030cm': {min:0, max:90},
          'soc_kg_m2_000_030cm': {min:0,  max:9},
          'granulometry_clay_percent': {min:0,  max:100},
          'granulometry_sand_percent': {min:0,  max:100},
          'granulometry_silt_percent': {min:0,  max:100},
          'textural_classes': {min:0, max:13},
          'textural_subgroups': {min:0, max:8},
          'textural_groups': {min:0,  max:5},
          'stoniness': {min:0,  max:100},
        },

        vector: null,
        activeFeature: null,
        activeName: '',

        palette: {
          'soc_t_ha_000_030cm': ['ffffff','ffffe5','fff7bc','fee391','fec44f','fe9929','ec7014','cc4c02','993404','662506'],
          'soc_kg_m2_000_030cm': ['ffffff','ffffe5','fff7bc','fee391','fec44f','fe9929','ec7014','cc4c02','993404','662506'],
          'granulometry_clay_percent': ['#ffffff','DEBBBD','AA8686','956262','9C5050','8C3306','932703','7A1D03','6C1902','5C1402','4E1101'],
          'granulometry_sand_percent': ['#ffffff','ffe5d8','ffccb3','f7a886','ff9680','e08370','d67258','b05841','95413b','6a2a12','522010'],
          'granulometry_silt_percent': ['#ffffff','D1E9C9','A9D0A1','88C997','7DB78E','6A8E74','517A64','406A55','2E5A49','1F4A3C','123029'],
          'textural_classes': ['#ffffff','#a83800','#aa8686','#3481a7','#e9a9a9','#80b1d3','#c994c7','#f4a582','#d7c5a5','#F8D488','#E4B074','#fffe73','#298289','#ABBA7C'],
          'textural_subgroups': ['#ffffff','#a83800','#aa8686','#f4a582','#298289','#d7c5a5','#F8D488','#E4B074','#fffe73'],
          'textural_groups': ['#ffffff','#a83800','#aa8686','#b5d6ae','#fffe73','#d7c5a5'],
          'stoniness': ['#56008f','#7d00a3','#c300a9','#ff2f9a','#ff4f78','#ff6e63','#ff9678','#ffc5a1','#ffdfc6','#fff8eb','#fbf9f6'],
        },

        taskid: 1,

        bufferDistance: 0,

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

        App.ui.form.labelTitle.setValue('MapBiomas-Soil User Toolkit ' + App.options.version);

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
                            
                            Object.keys(App.options.data).forEach(function(key){
                              App.options.data[key] = ee.Image(App.options.collections[regionName][collectioName].assets[key]);
                            });
                            
                            
                            //--------------------------------------------
                            var year = App.options.collections[regionName][collectioName].periods.soc_t_ha_000_030cm.slice(-1)[0];

                            // App.startMap(year);

                            App.ui.loadDataType();
                        }
                    );

                    // App.ui.loadingBox();
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
                    
                    var year = band.slice(-4);
                    var image_observed = App.options.data[App.options.dataType].select(band); // o calculo
                    var image_quant,image_class;
                    
                    if (App.options.dataType.indexOf('cm') === -1){
                      image_quant = App.options.data['soc_t_ha_000_030cm'].slice(-1);
                      image_class = App.options.collections[regionName][collectionName]['coverage_reference'].slice(-1);
                    } else {
                      image_quant = App.options.data['soc_t_ha_000_030cm'].select('.*' + year);
                      var image_coverage = App.options.collections[regionName][collectionName]['coverage_reference'].select('.*' + year);
                      image_class = image_observed.multiply(100).add(image_coverage);
                     
                    }
                  
                    var factors = {
                      'cos_0_30cm_t_ha':1, // mantem t/ha 
                      'cos_0_30cm_kg_m2':10, // kg/m² para t/ha
                    };
                    var area = Area.calculate({
                        "image_class": image_class,
                        "image_quant": image_quant,
                        "territory": territory,
                        "geometry": geometry,
                        // "scale": 30,
                        "scale": 500,
                        // "factor": factors[App.options.dataType], // hectares ou metros
                        "factor": 1
                    });

                    area = ee.FeatureCollection(area).map(
                        function (feature) {
                            var className;

                            className = ee.Dictionary(App.options.className)
                                .get(ee.Number(App.options.dataType.indexOf('soc_t_ha_000_030cm') === -1 ? feature.getNumber('class') : feature.getNumber('class').mod(100).int()));

                            // className = ee.Number(feature.get('class'));

                            return feature//.set('class_name', className)
                              .set('band', band);
                        }
                    );

                    return area;
                }
            );

            areas = ee.FeatureCollection(areas).flatten();

            var tableName = Exports.fileName(
                [regionName, collectionName, App.options.dataType, featureName, 'area']);

            Exports.table(areas, tableName);

        },
        
        showDisclaimer: function () {
            var labelDisclaimer = {"Brasil": [
                  // ----------------------------------------------------------
                  // PORTUGUÊS
                  // ----------------------------------------------------------
                  ui.Label('MAPBIOMAS SOLO - NOTA INFORMATIVA - PORTUGUÊS'),
                  ui.Label(''),
              
                  ui.Label('MapBiomas Solo — Mapas anuais do estoque de carbono orgânico do solo'),
                  ui.Label('Mapas estáticos de granulometria (argila, silte e areia), textura e pedregosidade do solo'),
                  ui.Label(''),
              
                  ui.Label('A Coleção 3 do MapBiomas Solo apresenta mapas anuais do estoque de carbono orgânico do solo na camada de 0–30 cm no Brasil, cobrindo 1985–2024 (versão beta).'),
                  ui.Label('Os cruzamentos com dados anuais de cobertura e uso da terra foram realizados utilizando a Coleção 10 do MapBiomas.'),
                  ui.Label(''),
              
                  ui.Label('Além dos mapas anuais de carbono orgânico, a Coleção 3 disponibiliza um conjunto ampliado de produtos estáticos, incluindo:'),
                  ui.Label('• Mapas de granulometria (areia, silte e argila) com resolução vertical de 10 cm, abrangendo 0–100 cm (dez camadas);'),
                  ui.Label('• Mapas de textura do solo em três níveis (classe, subgrupamento e grupamento textural), para seis intervalos integrados de profundidade (0–10, 0–20, 0–30, 20–40, 30–60 e 60–100 cm);'),
                  ui.Label('• Mapas de pedregosidade do solo, expressa como distância vertical (cm) até dois limites pedológicos funcionais: pedregosidade dominante (50%) e pedregosidade extrema (90%).'),
                  ui.Label(''),
              
                  ui.Label('Todos os produtos foram desenvolvidos com dados de amostras de solo do Repositório Brasileiro de Dados de Solo (SoilData):'),
                  App.formatLabelWithLinks(
                      '**soildata.mapbiomas.org**',
                      {'soildata.mapbiomas.org': 'https://soildata.mapbiomas.org'}
                  ),
                  ui.Label(''),
              
                  ui.Label('Atenção: Os mapas foram desenvolvidos com rigor técnico-científico, após curadoria, padronização e harmonização das amostras, integrando informações ambientais e técnicas avançadas de modelagem espaço-temporal.'),
                  ui.Label('No entanto, podem apresentar limitações devido à baixa densidade espacial e temporal das amostras de solo utilizadas no treinamento dos modelos.'),
                  ui.Label('Para mais detalhes sobre os métodos utilizados, consulte a descrição metodológica e o ATBD em:'),
                  App.formatLabelWithLinks(
                      '**brasil.mapbiomas.org/metodo-mapbiomas-solo/**',
                      {'brasil.mapbiomas.org/metodo-mapbiomas-solo/': 'https://brasil.mapbiomas.org/metodo-mapbiomas-solo/'}
                  ),
                  ui.Label(''),
              
                  ui.Label('Caso deseje contribuir com sugestões, críticas ou ideias, entre em contato conosco pelo e-mail:'),
                  App.formatLabelWithLinks(
                      '**contato@mapbiomas.org**',
                      {'contato@mapbiomas.org': 'mailto:contato@mapbiomas.org'}
                  ),
                  ui.Label(''),
              
                  ui.Label('Os dados do MapBiomas são públicos, abertos e gratuitos sob licença CC-BY. Referencie conforme o formato abaixo:'),
                  ui.Label(''),
              
                  ui.Label('"MapBiomas. Série de Mapas Anuais do Estoque de Carbono Orgânico do Solo do Brasil 0–30 cm (1985–2024) – MapBiomas Solo Coleção 3 (beta), acessado em [data], link:"'),
                  App.formatLabelWithLinks(
                      '**https://doi.org/10.58053/MapBiomas/2LUSVQ**',
                      {'https://doi.org/10.58053/MapBiomas/2LUSVQ': 'https://doi.org/10.58053/MapBiomas/2LUSVQ'}
                  ),
                  ui.Label(''),
              
                  ui.Label('"MapBiomas. Mapas de Granulometria e Textura do Solo do Brasil 0–100 cm – MapBiomas Solo Coleção 3 (beta), acessado em [data], link:"'),
                  App.formatLabelWithLinks(
                      '**https://doi.org/10.58053/MapBiomas/9ORUPF**',
                      {'https://doi.org/10.58053/MapBiomas/9ORUPF': 'https://doi.org/10.58053/MapBiomas/9ORUPF'}
                  ),
                  ui.Label(''),
              
                  ui.Label('"MapBiomas. Mapas de Pedregosidade do Solo do Brasil – MapBiomas Solo Coleção 3 (beta), acessado em [data], link:"'),
                  App.formatLabelWithLinks(
                      '**https://doi.org/10.58053/MapBiomas/1JGPIU**',
                      {'https://doi.org/10.58053/MapBiomas/1JGPIU': 'https://doi.org/10.58053/MapBiomas/1JGPIU'}
                  ),
                  ui.Label(''),
              
                  // ----------------------------------------------------------
                  // INGLÊS
                  // ----------------------------------------------------------
                  ui.Label('MAPBIOMAS SOIL - INFORMATION NOTE - ENGLISH'),
                  ui.Label(''),
              
                  ui.Label('MapBiomas Soil Collection 3 presents annual maps of soil organic carbon stocks in the 0–30 cm layer across Brazil (1985–2024, beta version).'),
                  ui.Label('Cross-analysis with annual land cover and land use data was performed using MapBiomas Collection 10.'),
                  ui.Label(''),
              
                  ui.Label('Collection 3 also provides an expanded set of static products, including:'),
                  ui.Label('• Soil granulometry maps (sand, silt, clay) with 10-cm vertical resolution across 0–100 cm (ten layers);'),
                  ui.Label('• Soil texture maps at three levels (class, subgroup, group) for six integrated depth intervals (0–10, 0–20, 0–30, 20–40, 30–60, 60–100 cm);'),
                  ui.Label('• Soil stoniness maps, expressed as vertical distance (cm) to dominant (50%) and extreme (90%) pedological thresholds.'),
                  ui.Label(''),
              
                  ui.Label('All products were developed using soil sample data from the Brazilian Soil Data Repository (SoilData):'),
                  App.formatLabelWithLinks(
                      '**soildata.mapbiomas.org**',
                      {'soildata.mapbiomas.org': 'https://soildata.mapbiomas.org'}
                  ),
                  ui.Label(''),
              
                  ui.Label('Attention: The maps were produced with technical and scientific rigor, including curation, standardization, harmonization, environmental covariates and advanced spatio-temporal modeling.'),
                  ui.Label('Limitations remain due to the low spatial and temporal density of soil samples used to train the models.'),
                  ui.Label('For methodological details and the ATBD, consult:'),
                  App.formatLabelWithLinks(
                      '**brasil.mapbiomas.org/en/metodo-mapbiomas-solo/**',
                      {'brasil.mapbiomas.org/en/metodo-mapbiomas-solo/': 'https://brasil.mapbiomas.org/en/metodo-mapbiomas-solo/'}
                  ),
                  ui.Label(''),
              
                  ui.Label('For suggestions, criticisms or ideas, contact us at:'),
                  App.formatLabelWithLinks(
                      '**contato@mapbiomas.org**',
                      {'contato@mapbiomas.org': 'mailto:contato@mapbiomas.org'}
                  ),
                  ui.Label(''),
              
                  ui.Label('MapBiomas data is public, open and free (CC-BY). Please reference as follows:'),
                  ui.Label(''),
              
                  ui.Label('"MapBiomas. Annual Series of Maps of Soil Organic Carbon Stock in Brazil 0–30 cm (1985–2024) – MapBiomas Soil Collection 3 (beta), accessed on [date], link:"'),
                  App.formatLabelWithLinks(
                      '**https://doi.org/10.58053/MapBiomas/2LUSVQ**',
                      {'https://doi.org/10.58053/MapBiomas/2LUSVQ': 'https://doi.org/10.58053/MapBiomas/2LUSVQ'}
                  ),
                  ui.Label(''),
              
                  ui.Label('"MapBiomas. Soil Particle Size and Texture Maps for Brazil 0–100 cm – MapBiomas Soil Collection 3 (beta), accessed on [date], link:"'),
                  App.formatLabelWithLinks(
                      '**https://doi.org/10.58053/MapBiomas/9ORUPF**',
                      {'https://doi.org/10.58053/MapBiomas/9ORUPF': 'https://doi.org/10.58053/MapBiomas/9ORUPF'}
                  ),
                  ui.Label(''),
              
                  ui.Label('"MapBiomas. Soil Stoniness Maps for Brazil – MapBiomas Soil Collection 3 (beta), accessed on [date], link:"'),
                  App.formatLabelWithLinks(
                      '**https://doi.org/10.58053/MapBiomas/1JGPIU**',
                      {'https://doi.org/10.58053/MapBiomas/1JGPIU': 'https://doi.org/10.58053/MapBiomas/1JGPIU'}
                  ),
                  ui.Label(''),
              
                  // ----------------------------------------------------------
                  // ESPAÑOL
                  // ----------------------------------------------------------
                  ui.Label('MAPBIOMAS SUELO - NOTA INFORMATIVA - ESPAÑOL'),
                  ui.Label(''),
              
                  ui.Label('La Colección 3 de MapBiomas Suelo presenta mapas anuales del stock de carbono orgánico del suelo en la capa de 0–30 cm en Brasil (1985–2024, versión beta).'),
                  ui.Label('Los cruces con los datos anuales de cobertura y uso de la tierra se realizaron utilizando la Colección 10 de MapBiomas.'),
                  ui.Label(''),
              
                  ui.Label('Además de los mapas anuales, la Colección 3 ofrece un conjunto ampliado de productos estáticos, incluyendo:'),
                  ui.Label('• Mapas de granulometría (arena, limo, arcilla) con resolución vertical de 10 cm entre 0 y 100 cm (diez capas);'),
                  ui.Label('• Mapas de textura del suelo en tres niveles (clase, subagrupamiento, agrupamiento) para seis intervalos integrados de profundidad (0–10, 0–20, 0–30, 20–40, 30–60, 60–100 cm);'),
                  ui.Label('• Mapas de pedregosidad del suelo, expresados como distancia vertical (cm) hasta límites pedológicos dominantes (50%) y extremos (90%).'),
                  ui.Label(''),
              
                  ui.Label('Todos los productos fueron desarrollados con datos del Repositorio Brasileño de Datos de Suelo (SoilData):'),
                  App.formatLabelWithLinks(
                      '**soildata.mapbiomas.org**',
                      {'soildata.mapbiomas.org': 'https://soildata.mapbiomas.org'}
                  ),
                  ui.Label(''),
              
                  ui.Label('Atención: Los mapas se desarrollaron con rigor técnico-científico, incluyendo curaduría, estandarización, armonización y modelado espacio-temporal avanzado.'),
                  ui.Label('Sin embargo, pueden presentar limitaciones debido a la baja densidad espacial y temporal de las muestras de suelo usadas en el entrenamiento.'),
                  ui.Label('Para más detalles sobre los métodos utilizados, consulte:'),
                  App.formatLabelWithLinks(
                      '**brasil.mapbiomas.org/es/metodo-mapbiomas-solo/**',
                      {'brasil.mapbiomas.org/es/metodo-mapbiomas-solo/': 'https://brasil.mapbiomas.org/es/metodo-mapbiomas-solo/'}
                  ),
                  ui.Label(''),
              
                  ui.Label('Si desea contribuir con sugerencias, críticas o ideas, escríbanos a:'),
                  App.formatLabelWithLinks(
                      '**contato@mapbiomas.org**',
                      {'contato@mapbiomas.org': 'mailto:contato@mapbiomas.org'}
                  ),
                  ui.Label(''),
              
                  ui.Label('Los datos de MapBiomas son públicos, abiertos y gratuitos bajo licencia CC-BY. Cite según el formato siguiente:'),
                  ui.Label(''),
              
                  ui.Label('"MapBiomas. Serie de Mapas Anuales del Stock de Carbono Orgánico del Suelo de Brasil 0–30 cm (1985–2024) – MapBiomas Suelo Colección 3 (beta), accedido en [fecha], link:"'),
                  App.formatLabelWithLinks(
                      '**https://doi.org/10.58053/MapBiomas/2LUSVQ**',
                      {'https://doi.org/10.58053/MapBiomas/2LUSVQ': 'https://doi.org/10.58053/MapBiomas/2LUSVQ'}
                  ),
                  ui.Label(''),
              
                  ui.Label('"MapBiomas. Mapas de Granulometría y Textura del Suelo de Brasil 0–100 cm – MapBiomas Suelo Colección 3 (beta), accedido en [fecha], link:"'),
                  App.formatLabelWithLinks(
                      '**https://doi.org/10.58053/MapBiomas/9ORUPF**',
                      {'https://doi.org/10.58053/MapBiomas/9ORUPF': 'https://doi.org/10.58053/MapBiomas/9ORUPF'}
                  ),
                  ui.Label(''),
              
                  ui.Label('"MapBiomas. Mapas de Pedregosidad del Suelo de Brasil – MapBiomas Suelo Colección 3 (beta), accedido en [fecha], link:"'),
                  App.formatLabelWithLinks(
                      '**https://doi.org/10.58053/MapBiomas/1JGPIU**',
                      {'https://doi.org/10.58053/MapBiomas/1JGPIU': 'https://doi.org/10.58053/MapBiomas/1JGPIU'}
                  )
              ]
          

            };
        
            var brasil_painel = ui.Panel({
                'widgets': labelDisclaimer['Brasil'],
                'layout': ui.Panel.Layout.flow('vertical'),
                'style': {},
            });
        
            App.ui.form.panelDisclaimer.widgets().reset([]);
        
            var panelDisclaimerText = ui.Panel({
                'widgets': labelDisclaimer['Brasil'],
                'layout': ui.Panel.Layout.flow('vertical'),
                'style': {'stretch': 'both'},
            });
        
            var panelButtonsChoiceCollections = ui.Panel({'layout': ui.Panel.Layout.flow('horizontal')});
  
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
        
            [
                ['MapBiomas Solo Brasil', 'Brasil'],
                // ['MapBiomas Soil Indonesia', 'Indonesia']
            ].forEach(function(list){
                var button = ui.Button({
                    "label": list[0],
                    "onClick": function () {
                        panelDisclaimerText.widgets().reset(labelDisclaimer[list[1]]);
                    },
                    "disabled": false,
                    "style": {
                        'stretch': 'horizontal'
                    }
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
                App.ui.form.panelMain.add(App.ui.form.labelLegendFiles);
                App.ui.form.panelMain.add(App.ui.form.labelDownloads);
                // App.ui.form.panelMain.add(App.ui.form.labelLink);  // substituído pelo link único para os arquivos de legenda

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

            labelSubtitle: ui.Label('Soil Maps', {
                // 'fontWeight': 'bold',
                // 'padding': '1px',
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
                    'mapbiomas-brazil',
                    // 'mapbiomas-indonesia',
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

            

            panel1: ui.Panel({
                style: {
                    'stretch': 'both'
                }
            }),
          // Indonesia links
          // panel4: ui.Panel(),

        },
    }
};

App.init();

App.setVersion();
