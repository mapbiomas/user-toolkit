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
print('stoniness_3',stoniness_3);

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

var App = {

    options: {

        version: '1.1.2',

        logo: {
            uri: 'gs://mapbiomas-public/mapbiomas-logos/mapbiomas-logo-horizontal.b64',
            base64: logos.get('logo_mapbiomas_solo')
        },

        tables: {
            'mapbiomas-brazil': [
                {
                    'label': 'Amacro',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-OLD/LULC/BRAZIL/COLLECTION9/WORKSPACE/AMACRO',
                },
                {
                    'label': 'Ministry of the Environment priority areas 2018',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-OLD/LULC/BRAZIL/COLLECTION9/WORKSPACE/AREAS_PRIORITARIAS_DO_MMA_2018',
                },
                {
                    'label': 'Atlantic Forest Law',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-OLD/LULC/BRAZIL/COLLECTION9/WORKSPACE/ATLANTIC_FOREST_LAW',
                },
                {
                    'label': 'Basin Level 1 DNAEE',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-OLD/LULC/BRAZIL/COLLECTION9/WORKSPACE/BASIN_LEVEL_1_DNAEE',
                },
                {
                    'label': 'Basin Level 1 PNRH',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-OLD/LULC/BRAZIL/COLLECTION9/WORKSPACE/BASIN_LEVEL_1_PNRH',
                },
                {
                    'label': 'Basin Level 2 DNAEE',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-OLD/LULC/BRAZIL/COLLECTION9/WORKSPACE/BASIN_LEVEL_2_DNAEE',
                },
                {
                    'label': 'Basin Level 2 PNRH',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-OLD/LULC/BRAZIL/COLLECTION9/WORKSPACE/BASIN_LEVEL_2_PNRH',
                },
                {
                    'label': 'Biomes',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-OLD/LULC/BRAZIL/COLLECTION9/WORKSPACE/BIOMES',
                },
                {
                    'label': 'Coastal Marine Zone',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-OLD/LULC/BRAZIL/COLLECTION9/WORKSPACE/COASTAL_MARINE_ZONE',
                },
                {
                    'label': 'Forest Concessions',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-OLD/LULC/BRAZIL/COLLECTION9/WORKSPACE/CONCESSOES_FLORESTAIS',
                },
                {
                    'label': 'DHN250 Level 1',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-OLD/LULC/BRAZIL/COLLECTION9/WORKSPACE/DHN250_LEVEL_1',
                },
                {
                    'label': 'DHN250 Level 2',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-OLD/LULC/BRAZIL/COLLECTION9/WORKSPACE/DHN250_LEVEL_2',
                },
                {
                    'label': 'DHN250 Level 3',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-OLD/LULC/BRAZIL/COLLECTION9/WORKSPACE/DHN250_LEVEL_3',
                },
                {
                    'label': 'Non-Designated Public Forests',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-OLD/LULC/BRAZIL/COLLECTION9/WORKSPACE/FLORESTAS_PUBLICAS_NAO_DESTINADAS',
                },
                {
                    'label': 'Geoparques',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-OLD/LULC/BRAZIL/COLLECTION9/WORKSPACE/GEOPARQUES',
                },
                {
                    'label': 'Indigenous Territories',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-OLD/LULC/BRAZIL/COLLECTION9/WORKSPACE/INDIGENOUS_TERRITORIES',
                },
                {
                    'label': 'Legal Amazon',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-OLD/LULC/BRAZIL/COLLECTION9/WORKSPACE/LEGAL_AMAZON',
                },
                {
                    'label': 'Matopiba',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-OLD/LULC/BRAZIL/COLLECTION9/WORKSPACE/MATOPIBA',
                },
                {
                    'label': 'Political Level 1',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-OLD/LULC/BRAZIL/COLLECTION9/WORKSPACE/POLITICAL_LEVEL_1',
                },
                {
                    'label': 'Political Level 2',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-OLD/LULC/BRAZIL/COLLECTION9/WORKSPACE/POLITICAL_LEVEL_2',
                },
                {
                    'label': 'Political Level 3',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-OLD/LULC/BRAZIL/COLLECTION9/WORKSPACE/POLITICAL_LEVEL_3',
                },
                {
                    'label': 'Protected Area',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-OLD/LULC/BRAZIL/COLLECTION9/WORKSPACE/PROTECTED_AREA',
                },
                {
                    'label': 'Quilombos',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-OLD/LULC/BRAZIL/COLLECTION9/WORKSPACE/QUILOMBOS',
                },
                {
                    'label': 'Biosphere Reserve',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-OLD/LULC/BRAZIL/COLLECTION9/WORKSPACE/RESERVA_DA_BIOSFERA',
                },
                {
                    'label': 'Semiarid',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-OLD/LULC/BRAZIL/COLLECTION9/WORKSPACE/SEMIARID',
                },
                {
                    'label': 'Settlements',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-OLD/LULC/BRAZIL/COLLECTION9/WORKSPACE/SETTLEMENTS',
                },
                {
                    'label': 'UGRHS',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-OLD/LULC/BRAZIL/COLLECTION9/WORKSPACE/UGRHS',
                }
            ],
            // 'mapbiomas-indonesia': [],
        },

        collections: {
            'mapbiomas-brazil': {
                'collection1-beta': {
                    'assets': {
                        'soc_t_ha_000_030cm': 'projects/mapbiomas-public/assets/brazil/soil/collection1/mapbiomas_soil_collection1_soil_organic_carbon_0_30cm_t_ha_v1',
                        // 'soc_kg_m2_000_030cm': 'projects/mapbiomas-public/assets/brazil/soil/collection1/mapbiomas_soil_collection1_soil_organic_carbon_0_30cm_kg_m2_v1',
                    },
                    'periods': {
                        'soc_t_ha_000_030cm': [
                            '1985', '1986', '1987', '1988', '1989', '1990',
                            '1991', '1992', '1993', '1994', '1995', '1996',
                            '1997', '1998', '1999', '2000', '2001', '2002',
                            '2003', '2004', '2005', '2006', '2007', '2008',
                            '2009', '2010', '2011', '2012', '2013', '2014',
                            '2015', '2016', '2017', '2018', '2019', '2020',
                            '2021',
                        ],
                        'soc_kg_m2_000_030cm': [
                            '1985', '1986', '1987', '1988', '1989', '1990',
                            '1991', '1992', '1993', '1994', '1995', '1996',
                            '1997', '1998', '1999', '2000', '2001', '2002',
                            '2003', '2004', '2005', '2006', '2007', '2008',
                            '2009', '2010', '2011', '2012', '2013', '2014',
                            '2015', '2016', '2017', '2018', '2019', '2020',
                            '2021'
                        ],
                    },
                    'coverage_reference':ee.Image('projects/mapbiomas-public/assets/brazil/lulc/collection7_1/mapbiomas_collection71_integration_v1')
                },
                'collection2-beta': {
                    'assets': {
                        'soc_t_ha_000_030cm':'projects/mapbiomas-public/assets/brazil/soil/collection2/mapbiomas_soil_collection2_soc_t_ha_000_030cm',
                        // 'soc_kg_m2_000_030cm':'projects/mapbiomas-public/assets/brazil/soil/collection2/mapbiomas_soil_collection2_soc_kg_m2_000_030cm',
                        'granulometry_clay_percent':'projects/mapbiomas-public/assets/brazil/soil/collection2/mapbiomas_soil_collection2_granulometry_clay_percentage',
                        'granulometry_sand_percent':'projects/mapbiomas-public/assets/brazil/soil/collection2/mapbiomas_soil_collection2_granulometry_sand_percentage',
                        'granulometry_silt_percent':'projects/mapbiomas-public/assets/brazil/soil/collection2/mapbiomas_soil_collection2_granulometry_silt_percentage',
                        'textural_classes':'projects/mapbiomas-public/assets/brazil/soil/collection2/mapbiomas_soil_collection2_textural_classes',
                        'textural_subgroups':'projects/mapbiomas-public/assets/brazil/soil/collection2/mapbiomas_soil_collection2_textural_subgroups',
                        'textural_groups':'projects/mapbiomas-public/assets/brazil/soil/collection2/mapbiomas_soil_collection2_textural_groups',
                    },
                    'periods': {
                        'soc_t_ha_000_030cm': [
                          '1985','1986','1987','1988','1989','1990','1991','1992','1993','1994',
                          '1995','1996','1997','1998','1999','2000','2001','2002','2003','2004',
                          '2005','2006','2007','2008','2009','2010','2011','2012','2013','2014',
                          '2015','2016','2017','2018','2019','2020','2021','2022','2023',
                        ],
                        'soc_kg_m2_000_030cm':[
                          '1985','1986','1987','1988','1989','1990','1991','1992','1993','1994',
                          '1995','1996','1997','1998','1999','2000','2001','2002','2003','2004',
                          '2005','2006','2007','2008','2009','2010','2011','2012','2013','2014',
                          '2015','2016','2017','2018','2019','2020','2021','2022','2023',
                        ],                        
                        'granulometry_clay_percent': [
                          '000_010cm',
                          '010_020cm',
                          '020_030cm',
                          '000_020cm',
                          '000_030cm',
                        ],
                        'granulometry_sand_percent':[
                          '000_010cm',
                          '010_020cm',
                          '020_030cm',
                          '000_020cm',
                          '000_030cm',
                        ],
                        'granulometry_silt_percent':[
                          '000_010cm',
                          '010_020cm',
                          '020_030cm',
                          '000_020cm',
                          '000_030cm',
                        ],
                        'textural_classes':[
                          '000_010cm',
                          '000_020cm',
                          '000_030cm',
                        ],
                        'textural_subgroups':[
                          '000_010cm',
                          '000_020cm',
                          '000_030cm',
                        ],
                        'textural_groups':[
                          '000_010cm',
                          '000_020cm',
                          '000_030cm',
                        ],
                    },
                    'coverage_reference':ee.Image('projects/mapbiomas-public/assets/brazil/lulc/collection9/mapbiomas_collection90_integration_v1'),
                },
                'collection2_1-beta': {
                    'assets': {
                        'soc_t_ha_000_030cm':carbon_2_1,
                        'granulometry_clay_percent':clay_fraction_2_1,
                        'granulometry_sand_percent':sand_fraction_2_1,
                        'granulometry_silt_percent':silt_fraction_2_1,
                        'textural_classes':textural_class_2_1,
                        'textural_subgroups':textural_subgroup_2_1,
                        'textural_groups':textural_group_2_1,
                    },
                    'periods': {
                        'soc_t_ha_000_030cm': [
                          '1985','1986','1987','1988','1989','1990','1991','1992','1993','1994',
                          '1995','1996','1997','1998','1999','2000','2001','2002','2003','2004',
                          '2005','2006','2007','2008','2009','2010','2011','2012','2013','2014',
                          '2015','2016','2017','2018','2019','2020','2021','2022','2023','2024'
                        ],
                        'granulometry_clay_percent': [
                          '000_010cm',
                          '010_020cm',
                          '020_030cm',
                          '000_020cm',
                          '000_030cm',
                        ],
                        'granulometry_sand_percent':[
                          '000_010cm',
                          '010_020cm',
                          '020_030cm',
                          '000_020cm',
                          '000_030cm',
                        ],
                        'granulometry_silt_percent':[
                          '000_010cm',
                          '010_020cm',
                          '020_030cm',
                          '000_020cm',
                          '000_030cm',
                        ],
                        'textural_classes':[
                          '000_010cm',
                          '000_020cm',
                          '000_030cm',
                        ],
                        'textural_subgroups':[
                          '000_010cm',
                          '000_020cm',
                          '000_030cm',
                        ],
                        'textural_groups':[
                          '000_010cm',
                          '000_020cm',
                          '000_030cm',
                        ],
                    },
                    'coverage_reference':ee.Image('projects/mapbiomas-public/assets/brazil/lulc/collection10/mapbiomas_brazil_collection10_integration_v1').slice(0,-1),
                },
                'collection3-beta': {
                    'assets': {
                        'soc_t_ha_000_030cm':carbon_3,
                        'granulometry_clay_percent':clay_fraction_3,
                        'granulometry_sand_percent':sand_fraction_3,
                        'granulometry_silt_percent':silt_fraction_3,
                        'textural_classes':textural_class_3,
                        'textural_subgroups':textural_subgroup_3,
                        'textural_groups':textural_group_3,
                        'stoniness':stoniness_3,
                    },
                    'periods': {
                        'soc_t_ha_000_030cm': [
                          '1985','1986','1987','1988','1989','1990','1991','1992','1993','1994',
                          '1995','1996','1997','1998','1999','2000','2001','2002','2003','2004',
                          '2005','2006','2007','2008','2009','2010','2011','2012','2013','2014',
                          '2015','2016','2017','2018','2019','2020','2021','2022','2023','2024'
                        ],
                        'granulometry_clay_percent': ['000_010cm', '010_020cm', '020_030cm', '030_040cm', '040_050cm', '050_060cm', '060_070cm', '070_080cm', '080_090cm', '090_100cm'],
                        'granulometry_sand_percent': ['000_010cm', '010_020cm', '020_030cm', '030_040cm', '040_050cm', '050_060cm', '060_070cm', '070_080cm', '080_090cm', '090_100cm'],
                        'granulometry_silt_percent': ['000_010cm', '010_020cm', '020_030cm', '030_040cm', '040_050cm', '050_060cm', '060_070cm', '070_080cm', '080_090cm', '090_100cm'],
                        'textural_classes': ['000_010cm','000_020cm','000_030cm','020_040cm','030_060cm','060_100cm'],
                        'textural_subgroups': ['000_010cm','000_020cm','000_030cm','020_040cm','030_060cm','060_100cm'],
                        'textural_groups': ['000_010cm','000_020cm','000_030cm','020_040cm','030_060cm','060_100cm'],
                        'stoniness': ['50vol','90vol'],
                    },
                    'coverage_reference':ee.Image('projects/mapbiomas-public/assets/brazil/lulc/collection10/mapbiomas_brazil_collection10_integration_v1').slice(0,-1),
                },
            },
        },

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

        makeLegendLinksList: function () {
          
            App.ui.form.panelLink1 = ui.Panel({
              'layout': ui.Panel.Layout.flow('horizontal', true),
              'style': {'stretch': 'horizontal'},
                'widgets': [
                  ui.Label({
                    value:'Brazil',
                    style:{'fontSize': '10px'},
                    targetUrl:'https://brasil.mapbiomas.org/codigos-de-legenda',
                  }),
                  // ui.Label({
                  //   value:'Indonesia',
                  //   style:{'fontSize': '10px'},
                  //   targetUrl:'https://drive.google.com/file/d/1DACRQlH_1k8IxRc75SkKz0d89JB25cEt/view',
                  // }),
                ]
            });
        },

        setMapbiomasRegion: function (regionName) {

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

            var roots = ee.data.getAssetRoots()
                .map(
                    function (obj) {
                        return obj.id;
                    });

            roots = roots.filter(function (caminho) {
                return caminho.indexOf('/MAPBIOMAS') != -1;
            });

            var allTablesNames = [];

            /**
             * Skip the error msg if MAPBIOMAS folder is not found
             */

            try {
                var tablesNames = ee.data.getList({
                    'id': roots[0]
                }).map(
                    function (obj) {
                        return obj.id;
                    });

                allTablesNames = allTablesNames.concat(App.options.tables[regionName]).concat(tablesNames);
            }
            catch (e) {
                allTablesNames = allTablesNames.concat(App.options.tables[regionName]);
            }

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

                                App.ui.makeLayersList(
                                    tableName.split('/').slice(-1)[0],
                                    App.options.activeFeature,
                                    App.options.collections[regionName][collectioName]
                                        .periods[App.options.dataType]
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

            Map.addLayer(ee.Image().paint(App.options.activeFeature,'vazio',1).visualize({palette:'red'}), {},
                tableName.split('/').reverse()[0],
                true);

        },

        loadPropertiesNames: function () {

            App.ui.form.selectProperties.setPlaceholder('loading tables names...');

            ee.Feature(App.options.table.first())
                .propertyNames()
                .evaluate(
                    function (propertyNames) {

                        App.ui.form.selectProperties = ui.Select({
                            'items': propertyNames,
                            'placeholder': 'select property',
                            'onChange': function (propertyName) {
                                if (propertyName != 'None') {
                                    App.options.propertyName = propertyName;

                                    ee.Number(1).evaluate(
                                        function (a) {
                                            App.ui.loadFeatureNames(propertyName);
                                            App.ui.form.selectDataType.setDisabled(false);
                                        }
                                    );

                                }
                            },
                            'style': {
                                'stretch': 'horizontal'
                            }
                        });

                        App.ui.form.panelProperties.widgets()
                            .set(1, App.ui.form.selectProperties);
                    }
                );

        },

        loadFeatureNames: function () {

            App.ui.form.selectFeature.setPlaceholder('loading feature names...');

            App.options.table.sort(App.options.propertyName)
                .aggregate_array(App.options.propertyName)
                .distinct()
                .sort()
                .evaluate(
                    function (featureNameList) {

                        App.ui.form.selectFeature = ui.Select({
                            'items': featureNameList,
                            'placeholder': 'select feature',
                            'onChange': function (featureName) {
                                if (featureName != 'None') {
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

                                }
                            },
                            'style': {
                                'stretch': 'horizontal'
                            }
                        });

                        App.ui.form.panelFeature.widgets()
                            .set(1, App.ui.form.selectFeature);
                    }
                );

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
                                  App.options.activeName.split('/').slice(-1)[0],
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

            Map.centerObject(App.options.activeFeature.geometry().bounds());

            Map.layers().reset([]);

            Map.addLayer(ee.Image().paint(App.options.activeFeature,'vazio',1).visualize({palette:'red'}), {},
                name,
                true);

        },

        addImageLayer: function (period, label, region) {


            var image = App.options.data[App.options.dataType]
                .select([App.options.bandsNames[App.options.dataType] + period])
                .multiply(ee.Image().paint(region).eq(0));
                
                print('App.options.dataType',App.options.dataType);




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

            for (var i = 0; i < Map.layers().length(); i++) {

                var layer = Map.layers().get(i);

                if (label === layer.get('name')) {
                    Map.remove(layer);
                }
            }

        },

        manageLayers: function (checked, period, label, region) {

            if (checked !== false) {
                App.ui.addImageLayer(period, label, region);
            } else {
                App.ui.removeImageLayer(label);
            }

        },

        makeLayersList: function (regionName, region, periods) {
          
            App.ui.form.panelLayersList.clear();

            periods.forEach(

                function (period, index, array) {
                    App.ui.form.panelLayersList.add(
                        ui.Checkbox({
                            "label": regionName + ' ' + period,
                            "value": false,
                            "onChange": function (checked) {

                                App.ui.manageLayers(checked, period, regionName + ' ' + period, region);

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

            var regionName = App.ui.form.selectRegion.getValue();
            var collectionName = App.ui.form.selectCollection.getValue();

            var featureName = App.formatName(App.ui.form.selectFeature.getValue() || '');

            var bandIds = [];

            for (var i = 0; i < layers.length(); i++) {

                var selected = layers.get(i).getValue();

                if (selected) {

                    var period = App.options.collections[regionName][collectionName]
                        .periods[App.options.dataType][i];

                    var fileName = [
                        App.formatName(regionName), 
                        App.formatName(collectionName), 
                        App.formatName(App.options.dataType), 
                        App.formatName(featureName), 
                        App.formatName(period)
                      ].join('-');

                    var data = App.options.data[App.options.dataType]
                        .select([App.options.bandsNames[App.options.dataType] + period]);

                    var region = App.options.activeFeature.geometry();


                    data = data.multiply(ee.Image().paint(App.options.activeFeature.geometry()).eq(0));

                    region = region.bounds();

                    Export.image.toDrive({
                        image: data,
                        description: fileName,
                        folder: 'MAPBIOMAS-EXPORT',
                        fileNamePrefix: fileName,
                        region: region.bounds(),
                        scale: 30,
                        maxPixels: 1e13,
                        fileFormat: 'GeoTIFF',
                        fileDimensions: 256 * 124,
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
            print(areas);

            var tableName = [
              App.formatName(regionName), 
              App.formatName(collectionName), 
              App.formatName(App.options.dataType), 
              App.formatName(featureName), 
              'area'
              ].join('-');

            Export.table.toDrive({
                'collection': areas,
                'description': tableName,
                'folder': 'MAPBIOMAS-EXPORT',
                'fileNamePrefix': tableName,
                'fileFormat': 'CSV'
            });

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

                App.ui.makeLegendLinksList();

                App.ui.form.panelMain.add(App.ui.form.panelLogo);
                App.ui.form.panelMain.add(App.ui.form.labelTitle);
                App.ui.form.panelMain.add(App.ui.form.labelSubtitle);
                App.ui.form.panelMain.add(App.ui.form.labelLink);
                App.ui.form.panelMain.add(App.ui.form.panelLink1);
                // App.ui.form.panelMain.add(App.ui.form.panelLink2);

                App.ui.form.panelMain.add(App.ui.form.tabs);
                App.ui.form.panelMain.add(App.ui.form.panel1);

                App.ui.form.tab1.add(App.ui.form.checkboxTab1);
                App.ui.form.tab2.add(App.ui.form.checkboxTab2);
                
                App.ui.form.tabs.add(App.ui.form.tab1);
                App.ui.form.tabs.add(App.ui.form.tab2);

                App.ui.form.tabs2.add(App.ui.form.tab3);
                App.ui.form.tabs2.add(App.ui.form.tab4);

                App.ui.form.tab3.add(App.ui.form.checkboxTab3);
                // App.ui.form.tab4.add(App.ui.form.checkboxTab4);

                App.ui.form.panel2_head.add(App.ui.form.tabs2);
                
                App.ui.form.panel2.add(App.ui.form.panel2_head);

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
                App.ui.form.panel1.add(App.ui.form.panelStates);
                App.ui.form.panel1.add(App.ui.form.panelProperties);
                App.ui.form.panel1.add(App.ui.form.panelFeature);
                // App.ui.form.panel1.add(App.ui.form.panelBuffer);
                App.ui.form.panel1.add(App.ui.form.panelDataType);

                App.ui.form.panel1.add(App.ui.form.labelLayers);
                App.ui.form.panel1.add(App.ui.form.panelLayersList);

                App.ui.form.panel1.add(App.ui.form.buttonExport2Drive);
                App.ui.form.panel1.add(App.ui.form.labelNotes);
                
                ui.root.add(App.ui.form.panelMain);
                
                App.ui.showDisclaimer();
                
                var Mapp = require('users/joaovsiqueira1/packages:Mapp.js');
        
                Map.setOptions({
                  'styles': {
                    'Dark': Mapp.getStyle('Dark'),
                    // 'Dark2':Mapp.getStyle('Dark2'),
                    // 'Aubergine':Mapp.getStyle('Aubergine'),
                    'Silver':Mapp.getStyle('Silver'),
                    'Night':Mapp.getStyle('Night'),
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

            panelLink1: ui.Panel({
                'layout': ui.Panel.Layout.flow('horizontal'),
                'style': {
                    'stretch': 'horizontal'
                },
            }),

            panelLink2: ui.Panel({
                'layout': ui.Panel.Layout.flow('horizontal'),
                'style': {
                    'stretch': 'horizontal'
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

            // panels and tabs
            tabs: ui.Panel({
                layout: ui.Panel.Layout.flow('horizontal')
            }),
            tabs2: ui.Panel({
                layout: ui.Panel.Layout.flow('horizontal'),
                style:{
                  'margin': '2px 6px 2px 6px',
                  // 'stretch': 'horizontal',
                }
            }),

            checkboxTab1: ui.Checkbox({
                'label': '  Toolkit ',
                'style': {
                    'margin': '5px 0px 5px -16px',
                    'stretch': 'horizontal',
                    'backgroundColor': '#00000000',
                },
                'onChange': function (checked) {
                    if (checked !== false) {
                        App.ui.form.checkboxTab2.setValue(false);
                        App.ui.form.tab1.style().set('border', '1px solid #808080');
                        App.ui.form.tab2.style().set('border', '1px solid #80808033');

                        App.ui.form.panelMain.remove(App.ui.form.panel2);
                        App.ui.form.panelMain.add(App.ui.form.panel1);
                    }
                }
            }),

            checkboxTab2: ui.Checkbox({
                'label': '  Direct Link',
                'style': {
                    'margin': '5px 20px 5px -16px',
                    'stretch': 'horizontal',
                    'backgroundColor': '#00000000',
                },
                'onChange': function (checked) {
                    if (checked !== false) {
                        App.ui.form.checkboxTab1.setValue(false);
                        App.ui.form.tab1.style().set('border', '1px solid #80808033');
                        App.ui.form.tab2.style().set('border', '1px solid #aa8080');

                        App.ui.form.panelMain.remove(App.ui.form.panel1);
                        App.ui.form.panelMain
                          .add(App.ui.form.panel2);
                        
                        App.ui.form.tab4.style().set('border', '1px solid #80808033');
                        App.ui.form.tab3.style().set('border', '1px solid #aa8080');

                          
                        App.ui.form.panel2.remove(App.ui.form.panel4);
                        App.ui.form.panel2.add(App.ui.form.panel3);
                        
                        
                    }

                }
            }),

            checkboxTab3: ui.Checkbox({
                'label': '    Brazil',
                'style': {
                    'margin': '0px 0px 0px -16px',
                    'stretch': 'horizontal',
                    'backgroundColor': '#00000000',
                },
                'onChange': function (checked) {
                    if (checked !== false) {
                        App.ui.form.checkboxTab4.setValue(false);
                        App.ui.form.tab4.style().set('border', '1px solid #80808033');
                        App.ui.form.tab3.style().set('border', '1px solid #aa8080');

                        App.ui.form.panel2.remove(App.ui.form.panel4);
  
                        App.ui.form.panel2
                          .add(App.ui.form.panel3);
                    }

                }
            }),
            checkboxTab4: ui.Checkbox({
                'label': '    Indonesia',
                'style': {
                    'margin': '0px 0px 0px -16px',
                    'stretch': 'horizontal',
                    'backgroundColor': '#00000000',
                },
                'onChange': function (checked) {
                    if (checked !== false) {
                        // App.ui.form.checkboxTab3.setValue(false);
                        // App.ui.form.tab3.style().set('border', '1px solid #80808033');
                        // App.ui.form.tab4.style().set('border', '1px solid #aa8080');

                        // App.ui.form.panel2.remove(App.ui.form.panel3);
                        // App.ui.form.panel2.add(App.ui.form.panel4)
                    }

                }
            }),

            tab1: ui.Panel({
                'style': {
                    'width': '100px',
                    'backgroundColor': '#dddddd00',
                    'stretch': 'horizontal',
                    'border': '1px solid #808080',
                    'margin': '0px 0px 0px 6px'
                },
            }),
            

            tab2: ui.Panel({
                'style': {
                    'width': '100px',
                    'backgroundColor': '#dddddd00',
                    'stretch': 'horizontal',
                    'border': '1px solid #80808033',
                }
            }),
            tab3: ui.Panel({
                'style': {
                    // 'width': '110px',
                    'backgroundColor': '#dddddd',
                    // 'stretch': 'horizontal',
                    'border': '1px solid #80808033',
                }
            }),
            tab4: ui.Panel({
                'style': {
                    // 'width': '110px',
                    'backgroundColor': '#dddddd',
                    // 'stretch': 'horizontal',
                    'border': '1px solid #80808033',
                }
            }),

            panel1: ui.Panel({
                style: {
                    'stretch': 'both'
                }
            }),
            panel2: ui.Panel({
                style: {
                    'stretch': 'both'
                }
            }),
            panel2_head: ui.Panel({
                layout:ui.Panel.Layout.Flow('horizontal'),
                style: {
                    'stretch': 'horizontal'
                }
            }),
          // Brasil links
          panel3: ui.Panel({
            widgets: [
          
              // ----------------------------------------------------------
              // Série de Carbono (40 anos)
              // ----------------------------------------------------------
              ui.Label('Brazil soil col3: carbon (annual series)'),
              ui.Panel({
                widgets: [
          
                  ui.Label({ value: 'carbon_1985', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_carbon_v1/mbsoil03-carbon_1985_v1.tif' }),
                  ui.Label({ value: 'carbon_1986', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_carbon_v1/mbsoil03-carbon_1986_v1.tif' }),
                  ui.Label({ value: 'carbon_1987', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_carbon_v1/mbsoil03-carbon_1987_v1.tif' }),
                  ui.Label({ value: 'carbon_1988', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_carbon_v1/mbsoil03-carbon_1988_v1.tif' }),
                  ui.Label({ value: 'carbon_1989', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_carbon_v1/mbsoil03-carbon_1989_v1.tif' }),
          
                  ui.Label({ value: 'carbon_1990', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_carbon_v1/mbsoil03-carbon_1990_v1.tif' }),
                  ui.Label({ value: 'carbon_1991', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_carbon_v1/mbsoil03-carbon_1991_v1.tif' }),
                  ui.Label({ value: 'carbon_1992', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_carbon_v1/mbsoil03-carbon_1992_v1.tif' }),
                  ui.Label({ value: 'carbon_1993', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_carbon_v1/mbsoil03-carbon_1993_v1.tif' }),
                  ui.Label({ value: 'carbon_1994', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_carbon_v1/mbsoil03-carbon_1994_v1.tif' }),
          
                  ui.Label({ value: 'carbon_1995', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_carbon_v1/mbsoil03-carbon_1995_v1.tif' }),
                  ui.Label({ value: 'carbon_1996', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_carbon_v1/mbsoil03-carbon_1996_v1.tif' }),
                  ui.Label({ value: 'carbon_1997', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_carbon_v1/mbsoil03-carbon_1997_v1.tif' }),
                  ui.Label({ value: 'carbon_1998', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_carbon_v1/mbsoil03-carbon_1998_v1.tif' }),
                  ui.Label({ value: 'carbon_1999', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_carbon_v1/mbsoil03-carbon_1999_v1.tif' }),
          
                  ui.Label({ value: 'carbon_2000', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_carbon_v1/mbsoil03-carbon_2000_v1.tif' }),
                  ui.Label({ value: 'carbon_2001', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_carbon_v1/mbsoil03-carbon_2001_v1.tif' }),
                  ui.Label({ value: 'carbon_2002', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_carbon_v1/mbsoil03-carbon_2002_v1.tif' }),
                  ui.Label({ value: 'carbon_2003', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_carbon_v1/mbsoil03-carbon_2003_v1.tif' }),
                  ui.Label({ value: 'carbon_2004', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_carbon_v1/mbsoil03-carbon_2004_v1.tif' }),
          
                  ui.Label({ value: 'carbon_2005', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_carbon_v1/mbsoil03-carbon_2005_v1.tif' }),
                  ui.Label({ value: 'carbon_2006', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_carbon_v1/mbsoil03-carbon_2006_v1.tif' }),
                  ui.Label({ value: 'carbon_2007', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_carbon_v1/mbsoil03-carbon_2007_v1.tif' }),
                  ui.Label({ value: 'carbon_2008', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_carbon_v1/mbsoil03-carbon_2008_v1.tif' }),
                  ui.Label({ value: 'carbon_2009', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_carbon_v1/mbsoil03-carbon_2009_v1.tif' }),
          
                  ui.Label({ value: 'carbon_2010', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_carbon_v1/mbsoil03-carbon_2010_v1.tif' }),
                  ui.Label({ value: 'carbon_2011', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_carbon_v1/mbsoil03-carbon_2011_v1.tif' }),
                  ui.Label({ value: 'carbon_2012', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_carbon_v1/mbsoil03-carbon_2012_v1.tif' }),
                  ui.Label({ value: 'carbon_2013', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_carbon_v1/mbsoil03-carbon_2013_v1.tif' }),
                  ui.Label({ value: 'carbon_2014', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_carbon_v1/mbsoil03-carbon_2014_v1.tif' }),
          
                  ui.Label({ value: 'carbon_2015', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_carbon_v1/mbsoil03-carbon_2015_v1.tif' }),
                  ui.Label({ value: 'carbon_2016', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_carbon_v1/mbsoil03-carbon_2016_v1.tif' }),
                  ui.Label({ value: 'carbon_2017', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_carbon_v1/mbsoil03-carbon_2017_v1.tif' }),
                  ui.Label({ value: 'carbon_2018', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_carbon_v1/mbsoil03-carbon_2018_v1.tif' }),
                  ui.Label({ value: 'carbon_2019', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_carbon_v1/mbsoil03-carbon_2019_v1.tif' }),
          
                  ui.Label({ value: 'carbon_2020', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_carbon_v1/mbsoil03-carbon_2020_v1.tif' }),
                  ui.Label({ value: 'carbon_2021', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_carbon_v1/mbsoil03-carbon_2021_v1.tif' }),
                  ui.Label({ value: 'carbon_2022', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_carbon_v1/mbsoil03-carbon_2022_v1.tif' }),
                  ui.Label({ value: 'carbon_2023', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_carbon_v1/mbsoil03-carbon_2023_v1.tif' }),
                  ui.Label({ value: 'carbon_2024', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_carbon_v1/mbsoil03-carbon_2024_v1.tif' })
          
                ],
                layout: ui.Panel.Layout.flow('horizontal', true),
                style: { border: '1px grey solid', margin: '0px 6px 0px 6px' }
              }),
          
              // ----------------------------------------------------------
              // Série de Horizontes de Argila (10 camadas de 10 cm)
              // ----------------------------------------------------------
              ui.Label('Brazil soil col3: clay fraction (10 cm horizons)'),
              ui.Panel({
                widgets: [
                  ui.Label({ value: 'clay_000_010cm', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_clay_fraction_v1/mbsoil03-clay_fraction_000_010cm_v1.tif' }),
                  ui.Label({ value: 'clay_010_020cm', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_clay_fraction_v1/mbsoil03-clay_fraction_010_020cm_v1.tif' }),
                  ui.Label({ value: 'clay_020_030cm', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_clay_fraction_v1/mbsoil03-clay_fraction_020_030cm_v1.tif' }),
                  ui.Label({ value: 'clay_030_040cm', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_clay_fraction_v1/mbsoil03-clay_fraction_030_040cm_v1.tif' }),
                  ui.Label({ value: 'clay_040_050cm', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_clay_fraction_v1/mbsoil03-clay_fraction_040_050cm_v1.tif' }),
                  ui.Label({ value: 'clay_050_060cm', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_clay_fraction_v1/mbsoil03-clay_fraction_050_060cm_v1.tif' }),
                  ui.Label({ value: 'clay_060_070cm', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_clay_fraction_v1/mbsoil03-clay_fraction_060_070cm_v1.tif' }),
                  ui.Label({ value: 'clay_070_080cm', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_clay_fraction_v1/mbsoil03-clay_fraction_070_080cm_v1.tif' }),
                  ui.Label({ value: 'clay_080_090cm', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_clay_fraction_v1/mbsoil03-clay_fraction_080_090cm_v1.tif' }),
                  ui.Label({ value: 'clay_090_100cm', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_clay_fraction_v1/mbsoil03-clay_fraction_090_100cm_v1.tif' })
                ],
                layout: ui.Panel.Layout.flow('horizontal', true),
                style: { border: '1px grey solid', margin: '0px 6px 0px 6px' }
              }),
          
              // ----------------------------------------------------------
              // Série de Horizontes de Areia (10 camadas de 10 cm)
              // ----------------------------------------------------------
              ui.Label('Brazil soil col3: sand fraction (10 cm horizons)'),
              ui.Panel({
                widgets: [
                  ui.Label({ value: 'sand_000_010cm', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_sand_fraction_v1/mbsoil03-sand_fraction_000_010cm_v1.tif' }),
                  ui.Label({ value: 'sand_010_020cm', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_sand_fraction_v1/mbsoil03-sand_fraction_010_020cm_v1.tif' }),
                  ui.Label({ value: 'sand_020_030cm', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_sand_fraction_v1/mbsoil03-sand_fraction_020_030cm_v1.tif' }),
                  ui.Label({ value: 'sand_030_040cm', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_sand_fraction_v1/mbsoil03-sand_fraction_030_040cm_v1.tif' }),
                  ui.Label({ value: 'sand_040_050cm', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_sand_fraction_v1/mbsoil03-sand_fraction_040_050cm_v1.tif' }),
                  ui.Label({ value: 'sand_050_060cm', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_sand_fraction_v1/mbsoil03-sand_fraction_050_060cm_v1.tif' }),
                  ui.Label({ value: 'sand_060_070cm', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_sand_fraction_v1/mbsoil03-sand_fraction_060_070cm_v1.tif' }),
                  ui.Label({ value: 'sand_070_080cm', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_sand_fraction_v1/mbsoil03-sand_fraction_070_080cm_v1.tif' }),
                  ui.Label({ value: 'sand_080_090cm', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_sand_fraction_v1/mbsoil03-sand_fraction_080_090cm_v1.tif' }),
                  ui.Label({ value: 'sand_090_100cm', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_sand_fraction_v1/mbsoil03-sand_fraction_090_100cm_v1.tif' })
                ],
                layout: ui.Panel.Layout.flow('horizontal', true),
                style: { border: '1px grey solid', margin: '0px 6px 0px 6px' }
              }),
          
              // ----------------------------------------------------------
              // Série de Horizontes de Silte (10 camadas de 10 cm)
              // ----------------------------------------------------------
              ui.Label('Brazil soil col3: silt fraction (10 cm horizons)'),
              ui.Panel({
                widgets: [
                  ui.Label({ value: 'silt_000_010cm', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_silt_fraction_v1/mbsoil03-silt_fraction_000_010cm_v1.tif' }),
                  ui.Label({ value: 'silt_010_020cm', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_silt_fraction_v1/mbsoil03-silt_fraction_010_020cm_v1.tif' }),
                  ui.Label({ value: 'silt_020_030cm', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_silt_fraction_v1/mbsoil03-silt_fraction_020_030cm_v1.tif' }),
                  ui.Label({ value: 'silt_030_040cm', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_silt_fraction_v1/mbsoil03-silt_fraction_030_040cm_v1.tif' }),
                  ui.Label({ value: 'silt_040_050cm', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_silt_fraction_v1/mbsoil03-silt_fraction_040_050cm_v1.tif' }),
                  ui.Label({ value: 'silt_050_060cm', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_silt_fraction_v1/mbsoil03-silt_fraction_050_060cm_v1.tif' }),
                  ui.Label({ value: 'silt_060_070cm', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_silt_fraction_v1/mbsoil03-silt_fraction_060_070cm_v1.tif' }),
                  ui.Label({ value: 'silt_070_080cm', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_silt_fraction_v1/mbsoil03-silt_fraction_070_080cm_v1.tif' }),
                  ui.Label({ value: 'silt_080_090cm', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_silt_fraction_v1/mbsoil03-silt_fraction_080_090cm_v1.tif' }),
                  ui.Label({ value: 'silt_090_100cm', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_silt_fraction_v1/mbsoil03-silt_fraction_090_100cm_v1.tif' })
                ],
                layout: ui.Panel.Layout.flow('horizontal', true),
                style: { border: '1px grey solid', margin: '0px 6px 0px 6px' }
              }),
          
              // ----------------------------------------------------------
              // Grupo Textural (6 profundidades)
              // ----------------------------------------------------------
              ui.Label('Brazil soil col3: textural group (integrated depths)'),
              ui.Panel({
                widgets: [
                  ui.Label({ value: 'textural_group_000_010cm', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_textural_group_v1/mbsoil03-textural_group_000_010cm_v1.tif' }),
                  ui.Label({ value: 'textural_group_000_020cm', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_textural_group_v1/mbsoil03-textural_group_000_020cm_v1.tif' }),
                  ui.Label({ value: 'textural_group_000_030cm', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_textural_group_v1/mbsoil03-textural_group_000_030cm_v1.tif' }),
                  ui.Label({ value: 'textural_group_020_040cm', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_textural_group_v1/mbsoil03-textural_group_020_040cm_v1.tif' }),
                  ui.Label({ value: 'textural_group_030_060cm', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_textural_group_v1/mbsoil03-textural_group_030_060cm_v1.tif' }),
                  ui.Label({ value: 'textural_group_060_100cm', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_textural_group_v1/mbsoil03-textural_group_060_100cm_v1.tif' })
                ],
                layout: ui.Panel.Layout.flow('horizontal', true),
                style: { border: '1px grey solid', margin: '0px 6px 0px 6px' }
              }),
          
              // ----------------------------------------------------------
              // Subgrupo Textural (6 profundidades)
              // ----------------------------------------------------------
              ui.Label('Brazil soil col3: textural subgroup (integrated depths)'),
              ui.Panel({
                widgets: [
                  ui.Label({ value: 'textural_subgroup_000_010cm', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_textural_subgroup_v1/mbsoil03-textural_subgroup_000_010cm_v1.tif' }),
                  ui.Label({ value: 'textural_subgroup_000_020cm', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_textural_subgroup_v1/mbsoil03-textural_subgroup_000_020cm_v1.tif' }),
                  ui.Label({ value: 'textural_subgroup_000_030cm', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_textural_subgroup_v1/mbsoil03-textural_subgroup_000_030cm_v1.tif' }),
                  ui.Label({ value: 'textural_subgroup_020_040cm', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_textural_subgroup_v1/mbsoil03-textural_subgroup_020_040cm_v1.tif' }),
                  ui.Label({ value: 'textural_subgroup_030_060cm', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_textural_subgroup_v1/mbsoil03-textural_subgroup_030_060cm_v1.tif' }),
                  ui.Label({ value: 'textural_subgroup_060_100cm', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_textural_subgroup_v1/mbsoil03-textural_subgroup_060_100cm_v1.tif' })
                ],
                layout: ui.Panel.Layout.flow('horizontal', true),
                style: { border: '1px grey solid', margin: '0px 6px 0px 6px' }
              }),
          
              // ----------------------------------------------------------
              // Classe Textural (6 profundidades)
              // ----------------------------------------------------------
              ui.Label('Brazil soil col3: textural class (integrated depths)'),
              ui.Panel({
                widgets: [
                  ui.Label({ value: 'textural_class_000_010cm', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_textural_class_v1/mbsoil03-textural_class_000_010cm_v1.tif' }),
                  ui.Label({ value: 'textural_class_000_020cm', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_textural_class_v1/mbsoil03-textural_class_000_020cm_v1.tif' }),
                  ui.Label({ value: 'textural_class_000_030cm', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_textural_class_v1/mbsoil03-textural_class_000_030cm_v1.tif' }),
                  ui.Label({ value: 'textural_class_020_040cm', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_textural_class_v1/mbsoil03-textural_class_020_040cm_v1.tif' }),
                  ui.Label({ value: 'textural_class_030_060cm', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_textural_class_v1/mbsoil03-textural_class_030_060cm_v1.tif' }),
                  ui.Label({ value: 'textural_class_060_100cm', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_textural_class_v1/mbsoil03-textural_class_060_100cm_v1.tif' })
                ],
                layout: ui.Panel.Layout.flow('horizontal', true),
                style: { border: '1px grey solid', margin: '0px 6px 0px 6px' }
              }),
          
              // ----------------------------------------------------------
              // Pedregosidade (mapas estáticos)
              // ----------------------------------------------------------
              ui.Label('Brazil soil col3: stoniness (static classes)'),
              ui.Panel({
                widgets: [
                  ui.Label({value: 'stoniness_50vol',targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_stoniness_v1/mbsoil03-stoniness_50vol_v1.tif'}),
                  ui.Label({value: 'stoniness_90vol',targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/BRASIL/SOLO/COLLECTION3/mbsoil_c03_stoniness_v1/mbsoil03-stoniness_90vol_v1.tif'})
                ],
                layout: ui.Panel.Layout.flow('horizontal', true),
                style: { border: '1px grey solid', margin: '0px 6px 0px 6px' }
              })
          
            ],
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
