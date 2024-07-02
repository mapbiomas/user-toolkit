/**
 * @name
 *      Mapbiomas User Toolkit Download
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
 *    1.0.0 - First release
 *    1.1.0 - Collection 1.0 fire
 *    1.1.1 - Add monthly data
 *    1.2.0 - Collection 1.1 fire
 *    1.3.0 - Collection 2.0 fire
 *    1.4.0 - Collection 3.0 fire
 *            Atualizando interface seguindo a interface do toolkit do uso e cobertura
 *            Adicionando logo do fogo
 *            Adicionando discalimer
 *            Monitor do fogo no nivel de collection 
 *    1.4.1 - 2024-07-01
 *          - Lidando com erro no export, devido as dimensões muito altas. Padronizando o parametro Dimensions, no Export.image -> 256 * 124
 *          - Substituindo todos os clips por operações com mascaras
 *          - Redesenhando padrão do nome no export && atualização da função formatName, com replaces mais agressivos
 *          - Alterando o plot da feature para uma unica linha
 *          - Alterando posição da escolha da collection e adaptando o codigo a isso
 *          - Alterando o Map.clear() Map.layers().reset([]) e Removendo labels de loading
 *          - Adicionando outros planos de fundo
 *
 * 
 * @see
 *      Get the MapBiomas exported data in your "Google Drive/MAPBIOMAS-EXPORT" folder
 *      Code and Tutorial - https://github.com/mapbiomas-brazil/user-toolkit
 */

var palettes = require('users/mapbiomas/modules:Palettes.js');
var fire_palettes = require('users/workspaceipam/packages:mapbiomas-toolkit/utils/palettes');
var logos = require('users/workspaceipam/packages:mapbiomas-toolkit/utils/b64');

/**
 * @description
 *    calculate area for mapbiomas fire map
 * 
 * @author
 *    João Siqueira
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
                    .set('area', area);

                return tableColumns;
            }
        );

        return ee.FeatureCollection(ee.List(tableRows));
    },

    /**
     * Calculate area crossing a cover map (deforestation, mapbiomas)
     * and a region map (states, biomes, municipalites)
     * @param image 
     * @param territory 
     * @param geometry
     * @param scale
     * @param factor
     */
    calculate: function (object) {

        var reducer = ee.Reducer.sum().group(1, 'class').group(1, 'territory');
        var pixelArea = ee.Image.pixelArea().divide(object.factor);

        var territotiesData = pixelArea.addBands(object.territory).addBands(object.image)
            .reduceRegion({
                reducer: reducer,
                geometry: object.geometry,
                scale: object.scale,
                maxPixels: 1e13
            });

        territotiesData = ee.List(territotiesData.get('groups'));
        // print(territotiesData);
        var areas = territotiesData.map(Area.convert2table);

        areas = ee.FeatureCollection(areas).flatten();

        return areas;
    }

};

/**
 * 
 */
var App = {

    options: {

        version: '1.4.1',

        logo: {
            uri: 'gs://mapbiomas-public/mapbiomas-logos/mapbiomas-logo-horizontal.b64',
            base64: logos.get('logo_mapbiomas_fogo')
        },

        tables: {
            'mapbiomas-brazil': [
                {
                    'label': 'atlantic_forest_law',
                    'value': 'projects/mapbiomas-workspace/AUXILIAR/ESTATISTICAS/COLECAO8/VERSAO-1/atlantic_forest_law',
                },
                {
                    'label': 'biome',
                    'value': 'projects/mapbiomas-workspace/AUXILIAR/ESTATISTICAS/COLECAO8/VERSAO-1/refined_biome',
                },
                {
                    'label': 'biosphere_reserves',
                    'value': 'projects/mapbiomas-workspace/AUXILIAR/ESTATISTICAS/COLECAO8/VERSAO-1/biosphere_reserves',
                },
                {
                    'label': 'city',
                    'value': 'projects/mapbiomas-workspace/AUXILIAR/ESTATISTICAS/COLECAO8/VERSAO-1/city',
                },
                {
                    'label': 'country',
                    'value': 'projects/mapbiomas-workspace/AUXILIAR/ESTATISTICAS/COLECAO8/VERSAO-1/country',
                },
                {
                    'label': 'federal_conservation_units_integral_protection',
                    'value': 'projects/mapbiomas-workspace/AUXILIAR/ESTATISTICAS/COLECAO8/VERSAO-1/federal_protected_area_integral_protection',
                },
                {
                    'label': 'federal_conservation_units_sustainable_use',
                    'value': 'projects/mapbiomas-workspace/AUXILIAR/ESTATISTICAS/COLECAO8/VERSAO-1/federal_protected_area_sustainable_use',
                },
                {
                    'label': 'indigenous_land',
                    'value': 'projects/mapbiomas-workspace/AUXILIAR/ESTATISTICAS/COLECAO8/VERSAO-1/indigenous_territories',
                },
                {
                    'label': 'legal_amazon',
                    'value': 'projects/mapbiomas-workspace/AUXILIAR/ESTATISTICAS/COLECAO8/VERSAO-1/legal_amazon',
                },
                {
                    'label': 'pnrh_level_1_basin',
                    'value': 'projects/mapbiomas-workspace/AUXILIAR/ESTATISTICAS/COLECAO8/VERSAO-1/pnrh_level_1_basin',
                },
                {
                    'label': 'pnrh_level_2_basin',
                    'value': 'projects/mapbiomas-workspace/AUXILIAR/ESTATISTICAS/COLECAO8/VERSAO-1/pnrh_level_1_basin',
                },
                {
                    'label': 'quilombo',
                    'value': 'projects/mapbiomas-workspace/AUXILIAR/ESTATISTICAS/COLECAO8/VERSAO-1/quilombos',
                },
                {
                    'label': 'semiarid',
                    'value': 'projects/mapbiomas-workspace/AUXILIAR/ESTATISTICAS/COLECAO8/VERSAO-1/semiarid',
                },
                {
                    'label': 'settlement',
                    'value': 'projects/mapbiomas-workspace/AUXILIAR/ESTATISTICAS/COLECAO8/VERSAO-1/settlements',
                },
                {
                    'label': 'state',
                    'value': 'projects/mapbiomas-workspace/AUXILIAR/ESTATISTICAS/COLECAO8/VERSAO-1/state',
                },
                {
                    'label': 'state_protected_area_integral_protection',
                    'value': 'projects/mapbiomas-workspace/AUXILIAR/ESTATISTICAS/COLECAO8/VERSAO-1/state_protected_area_integral_protection',
                },
                {
                    'label': 'state_protected_area_sustainable_use',
                    'value': 'projects/mapbiomas-workspace/AUXILIAR/ESTATISTICAS/COLECAO8/VERSAO-1/state_protected_area_sustainable_use',
                },
            ],
            /*'mapbiomas-indonesia': [
                {
                    'label': 'coastal_line',
                    'value': 'projects/mapbiomas-indonesia/ANCILLARY_DATA/STATISTICS/COLLECTION2/VERSION-2/coastal_line'
                },
                {
                    'label': 'island_group',
                    'value': 'projects/mapbiomas-indonesia/ANCILLARY_DATA/STATISTICS/COLLECTION2/VERSION-2/island_group'
                },
                {
                    'label': 'district',
                    'value': 'projects/mapbiomas-indonesia/ANCILLARY_DATA/STATISTICS/COLLECTION2/VERSION-2/district'
                },
                {
                    'label': 'province',
                    'value': 'projects/mapbiomas-indonesia/ANCILLARY_DATA/STATISTICS/COLLECTION2/VERSION-2/province'
                },
                {
                    'label': 'sub_district',
                    'value': 'projects/mapbiomas-indonesia/ANCILLARY_DATA/STATISTICS/COLLECTION2/VERSION-2/sub_district'
                },
                {
                    'label': 'village',
                    'value': 'projects/mapbiomas-indonesia/ANCILLARY_DATA/STATISTICS/COLLECTION2/VERSION-2/village'
                },
            ],*/
        },

        collections: {
            'mapbiomas-brazil': {
                'collection-1.0': {
                    'assets': {
                        'annual_burned_coverage': 'projects/mapbiomas-workspace/public/collection6/mapbiomas-fire-collection1-annual-burned-coverage-1',
                        'monthly_burned_coverage': 'projects/mapbiomas-workspace/public/collection6/mapbiomas-fire-collection1-monthly-burned-coverage-1',
                        'fire_frequency': 'projects/mapbiomas-workspace/public/collection6/mapbiomas-fire-collection1-fire-frequency-1',
                    },

                    'periods': {
                        'annual_burned_coverage': [
                            '1985', '1986', '1987', '1988', '1989', '1990',
                            '1991', '1992', '1993', '1994', '1995', '1996',
                            '1997', '1998', '1999', '2000', '2001', '2002',
                            '2003', '2004', '2005', '2006', '2007', '2008',
                            '2009', '2010', '2011', '2012', '2013', '2014',
                            '2015', '2016', '2017', '2018', '2019', '2020'
                        ],
                        'monthly_burned_coverage': [
                            '1985', '1986', '1987', '1988', '1989', '1990',
                            '1991', '1992', '1993', '1994', '1995', '1996',
                            '1997', '1998', '1999', '2000', '2001', '2002',
                            '2003', '2004', '2005', '2006', '2007', '2008',
                            '2009', '2010', '2011', '2012', '2013', '2014',
                            '2015', '2016', '2017', '2018', '2019', '2020'
                        ],
                        'fire_frequency': [
                            '1985_1986','1985_1987','1985_1988','1985_1989',
                            '1985_1990','1985_1991','1985_1992','1985_1993',
                            '1985_1994','1985_1995','1985_1996','1985_1997',
                            '1985_1998','1985_1999','1985_2000','1985_2001',
                            '1985_2002','1985_2003','1985_2004','1985_2005',
                            '1985_2006','1985_2007','1985_2008','1985_2009',
                            '1985_2010','1985_2011','1985_2012','1985_2013',
                            '1985_2014','1985_2015','1985_2016','1985_2017',
                            '1985_2018','1985_2019','1985_2023','2020_2020',
                            '2019_2020','2018_2020','2017_2023','2016_2020',
                            '2015_2020','2014_2020','2013_2023','2012_2020',
                            '2011_2020','2010_2020','2009_2023','2008_2020',
                            '2007_2020','2006_2020','2005_2023','2004_2020',
                            '2003_2020','2002_2020','2001_2023','2000_2020',
                            '1999_2020','1998_2020','1997_2023','1996_2020',
                            '1995_2020','1994_2020','1993_2023','1992_2020',
                            '1991_2020','1990_2020','1989_2023','1988_2020',
                            '1987_2020','1986_2020','1990_1995','1995_2000',
                            '2000_2005','2005_2010','2010_2015','1995_2005',
                            '2005_2015','2000_2015'
                        ],
                    },
                },
                'collection-1.1': {
                    'assets': {
                        'annual_burned_coverage': 'projects/mapbiomas-workspace/public/collection7/mapbiomas-fire-collection1-1-annual-burned-coverage-1',
                        'monthly_burned_coverage': 'projects/mapbiomas-workspace/public/collection7/mapbiomas-fire-collection1-1-monthly-burned-coverage-1',
                        'fire_frequency': 'projects/mapbiomas-workspace/public/collection7/mapbiomas-fire-collection1-1-fire-frequency-1',
                    },

                    'periods': {
                        'annual_burned_coverage': [
                            '1985', '1986', '1987', '1988', '1989', '1990',
                            '1991', '1992', '1993', '1994', '1995', '1996',
                            '1997', '1998', '1999', '2000', '2001', '2002',
                            '2003', '2004', '2005', '2006', '2007', '2008',
                            '2009', '2010', '2011', '2012', '2013', '2014',
                            '2015', '2016', '2017', '2018', '2019', '2020',
                            '2021'
                        ],
                        'monthly_burned_coverage': [
                            '1985', '1986', '1987', '1988', '1989', '1990',
                            '1991', '1992', '1993', '1994', '1995', '1996',
                            '1997', '1998', '1999', '2000', '2001', '2002',
                            '2003', '2004', '2005', '2006', '2007', '2008',
                            '2009', '2010', '2011', '2012', '2013', '2014',
                            '2015', '2016', '2017', '2018', '2019', '2020',
                            '2021'
                        ],
                        'fire_frequency': [
                            "1985_1985", "1985_1986", "1985_1987", "1985_1988",
                            "1985_1989", "1985_1990", "1985_1991", "1985_1992",
                            "1985_1993", "1985_1994", "1985_1995", "1985_1996",
                            "1985_1997", "1985_1998", "1985_1999", "1985_2000",
                            "1985_2001", "1985_2002", "1985_2003", "1985_2004",
                            "1985_2005", "1985_2006", "1985_2007", "1985_2008",
                            "1985_2009", "1985_2010", "1985_2011", "1985_2012",
                            "1985_2013", "1985_2014", "1985_2015", "1985_2016",
                            "1985_2017", "1985_2018", "1985_2019", "1985_2021",
                            "2020_2021", "2019_2021", "2018_2021", "2017_2021",
                            "2016_2021", "2015_2021", "2014_2021", "2013_2021",
                            "2012_2021", "2011_2021", "2010_2021", "2009_2021",
                            "2008_2021", "2007_2021", "2006_2021", "2005_2021",
                            "2004_2021", "2003_2021", "2002_2021", "2001_2021",
                            "2000_2021", "1999_2021", "1998_2021", "1997_2021",
                            "1996_2021", "1995_2021", "1994_2021", "1993_2021",
                            "1992_2021", "1991_2021", "1990_2021", "1989_2021",
                            "1988_2021", "1987_2021", "1986_2021", "1990_1995",
                            "1995_2000", "2000_2005", "2005_2010", "2010_2015",
                            "1995_2005", "2005_2015", "2000_2015",
                        ]
                    },
                },
                'collection-2.0': {
                    'assets': {
                        'annual_burned_coverage': 'projects/mapbiomas-workspace/public/collection7_1/mapbiomas-fire-collection2-annual-burned-coverage-1',
                        'monthly_burned_coverage': 'projects/mapbiomas-workspace/public/collection7_1/mapbiomas-fire-collection2-monthly-burned-coverage-1',
                        'fire_frequency': 'projects/mapbiomas-workspace/public/collection7_1/mapbiomas-fire-collection2-fire-frequency-1',
                    },

                    'periods': {
                        'annual_burned_coverage': [
                            '1985', '1986', '1987', '1988', '1989', '1990',
                            '1991', '1992', '1993', '1994', '1995', '1996',
                            '1997', '1998', '1999', '2000', '2001', '2002',
                            '2003', '2004', '2005', '2006', '2007', '2008',
                            '2009', '2010', '2011', '2012', '2013', '2014',
                            '2015', '2016', '2017', '2018', '2019', '2020',
                            '2021', '2022',
                        ],
                        'monthly_burned_coverage': [
                            '1985', '1986', '1987', '1988', '1989', '1990',
                            '1991', '1992', '1993', '1994', '1995', '1996',
                            '1997', '1998', '1999', '2000', '2001', '2002',
                            '2003', '2004', '2005', '2006', '2007', '2008',
                            '2009', '2010', '2011', '2012', '2013', '2014',
                            '2015', '2016', '2017', '2018', '2019', '2020',
                            '2021','2022',
                        ],
                        'fire_frequency': [
                            "1985_1985", "1985_1986", "1985_1987", "1985_1988",
                            "1985_1989", "1985_1990", "1985_1991", "1985_1992",
                            "1985_1993", "1985_1994", "1985_1995", "1985_1996",
                            "1985_1997", "1985_1998", "1985_1999", "1985_2000",
                            "1985_2001", "1985_2002", "1985_2003", "1985_2004",
                            "1985_2005", "1985_2006", "1985_2007", "1985_2008",
                            "1985_2009", "1985_2010", "1985_2011", "1985_2012",
                            "1985_2013", "1985_2014", "1985_2015", "1985_2016",
                            "1985_2017", "1985_2018", "1985_2019", "1985_2020",
                            "1985_2021", "1985_2022", "2022_2022", "2021_2022",
                            "2020_2022", "2019_2022", "2018_2022", "2017_2022",
                            "2016_2022", "2015_2022", "2014_2022", "2013_2022",
                            "2012_2022", "2011_2022", "2010_2022", "2009_2022",
                            "2008_2022", "2007_2022", "2006_2022", "2005_2022",
                            "2004_2022", "2003_2022", "2002_2022", "2001_2022",
                            "2000_2022", "1999_2022", "1998_2022", "1997_2022",
                            "1996_2022", "1995_2022", "1994_2022", "1993_2022",
                            "1992_2022", "1991_2022", "1990_2022", "1989_2022",
                            "1988_2022", "1987_2022", "1986_2022", "1990_1995",
                            "1995_2000", "2000_2005", "2005_2010", "2010_2015",
                            "2015_2020", "1995_2005", "2005_2015", "2000_2015"
                        ],
                    },
                },
                'collection-3.0': {
                    'assets': {

                      'annual_burned': 'projects/mapbiomas-public/assets/brazil/fire/collection3/mapbiomas_fire_collection3_annual_burned_v1',
                  
                      'annual_burned_coverage': 'projects/mapbiomas-public/assets/brazil/fire/collection3/mapbiomas_fire_collection3_annual_burned_coverage_v1',
            
                      'monthly_burned': 'projects/mapbiomas-public/assets/brazil/fire/collection3/mapbiomas_fire_collection3_monthly_burned_v1',
            
                      'annual_burned_scar_size_range': 'projects/mapbiomas-public/assets/brazil/fire/collection3/mapbiomas_fire_collection3_annual_burned_scar_size_range_v1',
            
                      'accumulated_burned': 'projects/mapbiomas-public/assets/brazil/fire/collection3/mapbiomas_fire_collection3_accumulated_burned_v1',
            
                      'accumulated_burned_coverage': 'projects/mapbiomas-public/assets/brazil/fire/collection3/mapbiomas_fire_collection3_accumulated_burned_coverage_v1',
            
                      'fire_frequency': 'projects/mapbiomas-public/assets/brazil/fire/collection3/mapbiomas_fire_collection3_fire_frequency_v1',
            
                      'year_last_fire': 'projects/mapbiomas-public/assets/brazil/fire/collection3/mapbiomas_fire_collection3_year_last_fire_v1',
                      
                    },

                    'periods': {
                      'annual_burned':[
                        '1985', '1986', '1987', '1988', '1989', '1990',
                        '1991', '1992', '1993', '1994', '1995', '1996',
                        '1997', '1998', '1999', '2000', '2001', '2002',
                        '2003', '2004', '2005', '2006', '2007', '2008',
                        '2009', '2010', '2011', '2012', '2013', '2014',
                        '2015', '2016', '2017', '2018', '2019', '2020',
                        '2021','2022',  '2023'
                     ],
                      'annual_burned_coverage':[
                        '1985', '1986', '1987', '1988', '1989', '1990',
                        '1991', '1992', '1993', '1994', '1995', '1996',
                        '1997', '1998', '1999', '2000', '2001', '2002',
                        '2003', '2004', '2005', '2006', '2007', '2008',
                        '2009', '2010', '2011', '2012', '2013', '2014',
                        '2015', '2016', '2017', '2018', '2019', '2020',
                        '2021','2022',  '2023'
                     ],
                      'monthly_burned':[
                        '1985', '1986', '1987', '1988', '1989', '1990',
                        '1991', '1992', '1993', '1994', '1995', '1996',
                        '1997', '1998', '1999', '2000', '2001', '2002',
                        '2003', '2004', '2005', '2006', '2007', '2008',
                        '2009', '2010', '2011', '2012', '2013', '2014',
                        '2015', '2016', '2017', '2018', '2019', '2020',
                        '2021','2022',  '2023'
                     ],
                      'annual_burned_scar_size_range':[
                        '1985', '1986', '1987', '1988', '1989', '1990',
                        '1991', '1992', '1993', '1994', '1995', '1996',
                        '1997', '1998', '1999', '2000', '2001', '2002',
                        '2003', '2004', '2005', '2006', '2007', '2008',
                        '2009', '2010', '2011', '2012', '2013', '2014',
                        '2015', '2016', '2017', '2018', '2019', '2020',
                        '2021','2022',  '2023'
                      ],
                      'accumulated_burned':[ 
                        '1985_1985', '1985_1986', '1985_1987', '1985_1988', '1985_1989', 
                        '1985_1990', '1985_1991', '1985_1992', '1985_1993', '1985_1994', 
                        '1985_1995', '1985_1996', '1985_1997', '1985_1998', '1985_1999',
                        '1985_2000', '1985_2001', '1985_2002', '1985_2003', '1985_2004',
                        '1985_2005', '1985_2006', '1985_2007', '1985_2008', '1985_2009',
                        '1985_2010', '1985_2011', '1985_2012', '1985_2013', '1985_2014',
                        '1985_2015', '1985_2016', '1985_2017', '1985_2018', '1985_2019',
                        '1985_2020', '1985_2021', '1985_2022', '1985_2023', '1986_2023',
                        '1987_2023', '1988_2023', '1989_2023', '1990_1995', '1990_2023',
                        '1991_2023', '1992_2023', '1993_2023', '1994_2023', '1995_2000',
                        '1995_2005', '1995_2023', '1996_2023', '1997_2023', '1998_2023',
                        '1999_2023', '2000_2005', '2000_2015', '2000_2023', '2001_2023',
                        '2002_2023', '2003_2023', '2004_2023', '2005_2010', '2005_2015',
                        '2005_2023', '2006_2023', '2007_2023', '2008_2023', '2009_2023',
                        '2010_2015', '2010_2023', '2011_2023', '2012_2023', '2013_2023',
                        '2014_2023', '2015_2020', '2015_2023', '2016_2023', '2017_2023',
                        '2018_2023', '2019_2023', '2020_2023', '2021_2023', '2022_2023',
                        '2023_2023'
                        ],
                      'accumulated_burned_coverage':[ 
                        '1985_1985', '1985_1986', '1985_1987', '1985_1988', '1985_1989', 
                        '1985_1990', '1985_1991', '1985_1992', '1985_1993', '1985_1994', 
                        '1985_1995', '1985_1996', '1985_1997', '1985_1998', '1985_1999',
                        '1985_2000', '1985_2001', '1985_2002', '1985_2003', '1985_2004',
                        '1985_2005', '1985_2006', '1985_2007', '1985_2008', '1985_2009',
                        '1985_2010', '1985_2011', '1985_2012', '1985_2013', '1985_2014',
                        '1985_2015', '1985_2016', '1985_2017', '1985_2018', '1985_2019',
                        '1985_2020', '1985_2021', '1985_2022', '1985_2023', '1986_2023',
                        '1987_2023', '1988_2023', '1989_2023', '1990_1995', '1990_2023',
                        '1991_2023', '1992_2023', '1993_2023', '1994_2023', '1995_2000',
                        '1995_2005', '1995_2023', '1996_2023', '1997_2023', '1998_2023',
                        '1999_2023', '2000_2005', '2000_2015', '2000_2023', '2001_2023',
                        '2002_2023', '2003_2023', '2004_2023', '2005_2010', '2005_2015',
                        '2005_2023', '2006_2023', '2007_2023', '2008_2023', '2009_2023',
                        '2010_2015', '2010_2023', '2011_2023', '2012_2023', '2013_2023',
                        '2014_2023', '2015_2020', '2015_2023', '2016_2023', '2017_2023',
                        '2018_2023', '2019_2023', '2020_2023', '2021_2023', '2022_2023',
                        '2023_2023'
                       ],
                      'fire_frequency':[ 
                        '1985_1985', '1985_1986', '1985_1987', '1985_1988', '1985_1989', 
                        '1985_1990', '1985_1991', '1985_1992', '1985_1993', '1985_1994', 
                        '1985_1995', '1985_1996', '1985_1997', '1985_1998', '1985_1999',
                        '1985_2000', '1985_2001', '1985_2002', '1985_2003', '1985_2004',
                        '1985_2005', '1985_2006', '1985_2007', '1985_2008', '1985_2009',
                        '1985_2010', '1985_2011', '1985_2012', '1985_2013', '1985_2014',
                        '1985_2015', '1985_2016', '1985_2017', '1985_2018', '1985_2019',
                        '1985_2020', '1985_2021', '1985_2022', '1985_2023', '1986_2023',
                        '1987_2023', '1988_2023', '1989_2023', '1990_1995', '1990_2023',
                        '1991_2023', '1992_2023', '1993_2023', '1994_2023', '1995_2000',
                        '1995_2005', '1995_2023', '1996_2023', '1997_2023', '1998_2023',
                        '1999_2023', '2000_2005', '2000_2015', '2000_2023', '2001_2023',
                        '2002_2023', '2003_2023', '2004_2023', '2005_2010', '2005_2015',
                        '2005_2023', '2006_2023', '2007_2023', '2008_2023', '2009_2023',
                        '2010_2015', '2010_2023', '2011_2023', '2012_2023', '2013_2023',
                        '2014_2023', '2015_2020', '2015_2023', '2016_2023', '2017_2023',
                        '2018_2023', '2019_2023', '2020_2023', '2021_2023', '2022_2023',
                        '2023_2023'
                        ],
                      'year_last_fire':[
                                '1986', '1987', '1988', '1989', '1990',
                        '1991', '1992', '1993', '1994', '1995', '1996',
                        '1997', '1998', '1999', '2000', '2001', '2002',
                        '2003', '2004', '2005', '2006', '2007', '2008',
                        '2009', '2010', '2011', '2012', '2013', '2014',
                        '2015', '2016', '2017', '2018', '2019', '2020',
                        '2021','2022',  '2023'
                        ],

                      'fire_monitor': null,
                    },
                },
                'fire_monitor': {
                    'assets': {
                      'fire_monitor': 'projects/mapbiomas-workspace/FOGO/MONITORAMENTO/collection-fire-monthly-sentinel2-v3',
                    },

                    'periods': {
                      'fire_monitor': null,
                    },
                },
            },
            /*'mapbiomas-indonesia': {},*/
        },

        legendLinks: [
            {
              'name': 'Brazil',
              'url': 'https://brasil.mapbiomas.org/wp-content/uploads/sites/4/2024/06/CODIGO-DE-LEGENDA-FOGO-COLECAO-3.pdf'
            },
        ],

        bandsNames: {
          'annual_burned':'burned_area_',
          'annual_burned_coverage':'burned_coverage_',
          'monthly_burned':'burned_monthly_',
          'annual_burned_scar_size_range':'scar_area_ha_',
          'accumulated_burned':'fire_accumulated_',
          'accumulated_burned_coverage':'fire_accumulated_',
          'year_last_fire':'classification_',
          'fire_frequency':'fire_frequency_',
          'fire_monitor':'burned_coverage_'
        },

        dataType: 'annual_burned',

        data: {},

        ranges: {
          'annual_burned':{'min':1,'max':1},
          'annual_burned_coverage':{'min':0,'max':62},
          'monthly_burned':{'min':1,'max':12},
          'annual_burned_scar_size_range':{'min':1,'max':10},
          'accumulated_burned':{'min':1,'max':1},
          'accumulated_burned_coverage':{'min':0,'max':62},
          'year_last_fire':{'min':1985,'max':2022},
          'fire_frequency':{'min':0,'max':39},
          'fire_monitor':{'min':1,'max':1},

        },

        vector: null,
        activeFeature: null,
        activeName: '',

        mapbiomasRegion: '',

        palette: {
          'annual_burned':['#ff0000'],
          'annual_burned_coverage':palettes.get('classification8'),
          'monthly_burned':fire_palettes.get('mensal'),
          'annual_burned_scar_size_range':fire_palettes.get('tamanho_n2'),
          'accumulated_burned':['#800000'],
          'accumulated_burned_coverage':palettes.get('classification8'),
          'year_last_fire':fire_palettes.get('ano_do_ultimo_fogo'),
          'fire_frequency':fire_palettes.get('frequencia'),
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

    setVersion: function () {

        App.ui.form.labelTitle.setValue('MapBiomas-Degradation User Toolkit ' + App.options.version);

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
    
    formatLabelWithLinks: function(text,links){
      
      var panel = ui.Panel({
          'layout': ui.Panel.Layout.flow('horizontal',true),
          'style': {'margin': '0px'},
      });
      // Função para adicionar texto com links
      function addTextWithLinks(panel, text, linkDict) {
        // Expressão regular para encontrar palavras entre **
        var regex = /\*\*(.*?)\*\*/g;
        var lastIndex = 0;
        var match;
      
        while ((match = regex.exec(text)) !== null) {
          // Adiciona texto antes da palavra com link
          if (match.index > lastIndex) {
            panel.add(ui.Label(text.substring(lastIndex, match.index),{'margin': '0px 2px 0px 2px'}));
          }
      
          // Adiciona a palavra como link
          var linkText = match[1];
          var url = linkDict[linkText];
          if (url) {
            var link = ui.Label({
              value: linkText,
              targetUrl: url,
              style: {color: 'blue', textDecoration: 'underline','margin': '0px'}
            });
            panel.add(link);
          } else {
            // Adiciona como texto normal se não houver URL no dicionário
            panel.add(ui.Label(linkText,{'margin': '0px'}));
          }
      
          lastIndex = regex.lastIndex;
        }
      
        // Adiciona o restante do texto após a última correspondência
        if (lastIndex < text.length) {
          panel.add(ui.Label(text.substring(lastIndex)));
        }
      }
      
      // Texto com palavras para transformar em links
      links = links === undefined ? {} : links;
      
      // Adiciona o texto e links ao painel
      addTextWithLinks(panel, text, links);
      return panel;

    },

    ui: {

        init: function () {

            this.form.init();

        },

        makeLegendLinksList: function () {
            var labelLinks = App.options.legendLinks.map(
                function (initiative) {
                    return ui.Label(initiative.name, {
                        'fontSize': '10px'
                    },
                        initiative.url
                    );
                }
            );

            App.ui.form.panelLink1 = ui.Panel({
                'layout': ui.Panel.Layout.flow('horizontal', true),
                'style': {
                    'stretch': 'horizontal'
                },
                'widgets': labelLinks
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
                          
                          var datas = Object.keys(App.options.collections[regionName][collectioName].assets);
                          
    
                          datas.forEach(function(key){

                            var mod_100_exception = [''];
                            var div_100_exception = [''];
                            
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
  
                              var oldBands = fireMonitor.bandNames();
                              var year_month = oldBands.iterate(function (current, previous) {
                                  var newBand = ee.String(current)
                                      .replace('brazil-', '')
                                      .replace('_FireMonth', '')
                                      .replace('-', '_');
  
                                  newBand = ee.Algorithms.If({
                                      condition: newBand.length().eq(6),
                                      trueCase: newBand.replace('_', '_0'),
                                      falseCase: newBand
                                  });
  
                                  return ee.List(previous).add(newBand);
                              }, []);
  
                              var newBands = ee.List(year_month).map(function (str) { return ee.String('burned_coverage_').cat(str) });
  
                              App.options.collections['mapbiomas-brazil']['fire_monitor'].periods.fire_monitor = ee.List(year_month).sort().getInfo();
  
                              App.options.data.fire_monitor = fireMonitor
                                  .select(oldBands, newBands)
                                  .gt(0).byte();
  
                              return ; 
                            }


                              App.options.data[key] = ee.Image(App.options.collections[regionName][collectioName].assets[key]);
                            
                          });
                          
                          App.ui.setDataType(datas[0]);

                            var year = App.options.collections[regionName][collectioName].periods[datas[0]].slice(-1)[0];

                            Map.centerObject(App.options.data[Object.keys(App.options.data)[0]], 5);

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

            var roots = ee.data.getAssetRoots()
                .map(
                    function (obj) {
                        return obj.id;
                    });

            var allTablesNames;

            /**
             * Skip the error msg if MAPBIOMAS folder is not found
             */
            try {
                var tablesNames = ee.data.getList({
                    'id': roots[0] + '/MAPBIOMAS'
                }).map(
                    function (obj) {
                        return obj.id;
                    });
                allTablesNames = App.options.tables[regionName].concat(tablesNames);
            }
            catch (e) {
                allTablesNames = App.options.tables[regionName];
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
                .reduceColumns(ee.Reducer.toList(), [App.options.propertyName])
                .get('list')
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

            Map.centerObject(App.options.activeFeature);

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

            if (checked) {
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

                    var image = App.options.data[App.options.dataType].select(band);

                    var area = Area.calculate({
                        "image": image,
                        "territory": territory,
                        "geometry": geometry,
                        "scale": 30,
                        "factor": 1000000,
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
          
          App.ui.form.labelDisclaimer = [
                ui.Label('NOTA INFORMATIVA - FOGO'),
                ui.Label(''),
                ui.Label('A Coleção 3 do MapBiomas Fogo apresenta o mapeamento de cicatrizes de fogo no Brasil de 1985 a 2023, com dados anuais e \
                          mensais para todo o período, incluindo: (a) Ocorrência de fogo anual, (b) Ocorrência de fogo mensal, (c) Frequência, (d) \
                          Área queimada acumulada, (e) Tamanho das cicatrizes, e (f) Ano da última ocorrência de fogo. Os dados anuais, acumulados \
                          e de frequência também estão disponíveis com suas respectivas classes de Uso e Cobertura da Coleção 8 do MapBiomas.',{'margin': '0px'}),
                App.formatLabelWithLinks('Para baixar os dados, acesse o **Toolkit** e, para a descrição dos respectivos valores dos dados, acesse o **código da legenda**.',{
                                          'Toolkit':'https://code.earthengine.google.com/?scriptPath=users%2Fmapbiomas%2Fuser-toolkit%3Amapbiomas-user-toolkit-fire.js',
                                          'código da legenda':'https://brasil.mapbiomas.org/wp-content/uploads/sites/4/2024/06/CODIGO-DE-LEGENDA-FOGO-COLECAO-3.pdf',
                                          }),
                ui.Label(''),
                App.formatLabelWithLinks('Para maiores informações sobre o método, acesse a descrição do **método** e o **ATBD**',{
                                            "método": "https://brasil.mapbiomas.org/metodo-mapbiomas-fogo/",
                                            "ATBD": "https://drive.google.com/file/d/1Jj9c4yYF68pGGyUE6WS9_yN5TapOZMqS/view"
                                          }),
                ui.Label(''),
                ui.Label('Para baixar os dados, acesse o Toolkit e, para a descrição dos respectivos valores dos dados, acesse o código da legenda.\
                          Caso tenha sugestões, críticas ou ideias para aprimorar o produto, entre em contato pelo e-mail: contato@mapbiomas.org.',{'margin': '0px'}),
                ui.Label(''),
                App.formatLabelWithLinks('DOI: **https://doi.org/10.58053/MapBiomas/VJIJCL**',{"https://doi.org/10.58053/MapBiomas/VJIJCL": "https://doi.org/10.58053/MapBiomas/VJIJCL"}),
                ui.Label(''),
                ui.Label('DISCLAIMER'),
                ui.Label(''),
                ui.Label('The MapBiomas Fire Collection 3 presents the mapping of fire scars in Brazil from 1985 to 2023, with annual and monthly data for the\
                          entire period, including: (a) Annual fire occurrence, (b) Monthly fire occurrence, (c) Frequency, (d) Accumulated burned area, \
                          (e) Fire scar size, and (f) Year of the last fire occurrence. Annual, accumulated, and frequency data are also available with their \
                          respective Land Use and Cover classes from MapBiomas Collection 8.',{'margin': '0px'}),
                ui.Label(''),
                App.formatLabelWithLinks('To download the data, access the **Toolkit** and for the description of the respective data values, access the **legend code**.',{
                                          'Toolkit':'https://code.earthengine.google.com/?scriptPath=users%2Fmapbiomas%2Fuser-toolkit%3Amapbiomas-user-toolkit-fire.js',
                                          'legend code':'https://brasil.mapbiomas.org/wp-content/uploads/sites/4/2024/06/CODIGO-DE-LEGENDA-FOGO-COLECAO-3.pdf',
                                          },{'margin': '0px'}),
                ui.Label(''),
                App.formatLabelWithLinks('For more information on the methodology, access the **method** description and the **ATBD**.',{
                                            "method": "https://brasil.mapbiomas.org/metodo-mapbiomas-fogo/",
                                            "ATBD": "https://drive.google.com/file/d/1Jj9c4yYF68pGGyUE6WS9_yN5TapOZMqS/view"
                                          },{'margin': '0px'}),
                ui.Label(''),
                ui.Label('If you have suggestions, criticisms, or ideas to improve the product, please contact us at contato@mapbiomas.org.',{'margin': '0px'}),
                ui.Label(''),
                App.formatLabelWithLinks('DOI: **https://doi.org/10.58053/MapBiomas/VJIJCL**',{"https://doi.org/10.58053/MapBiomas/VJIJCL": "https://doi.org/10.58053/MapBiomas/VJIJCL"}),
                ui.Label(''),
                ui.Label('MapBiomas data is public, open, and free under the CC-BY-SA license and by referencing the source in the following format: "MapBiomas Project – Collection [version] of MapBiomas Fire, accessed on [date] through the link: [LINK]".',{'margin': '0px'}),
            ];

            App.ui.form.panelDisclaimer.widgets().reset([]);
            App.ui.form.panelDisclaimerText.widgets().reset(App.ui.form.labelDisclaimer);
            App.ui.form.panelDisclaimer.add(App.ui.form.panelDisclaimerText);
            App.ui.form.panelDisclaimer.add(App.ui.form.buttonDisclaimerOk);

            // Map.add(App.ui.form.panelDisclaimer);

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
                App.ui.form.panelMain.add(App.ui.form.panelLink2);

                App.ui.form.panelMain.add(App.ui.form.tabs);
                App.ui.form.panelMain.add(App.ui.form.panel1);

                App.ui.form.tab1.add(App.ui.form.checkboxTab1);
                App.ui.form.tab2.add(App.ui.form.checkboxTab2); 

                App.ui.form.tabs.add(App.ui.form.tab1);
                App.ui.form.tabs.add(App.ui.form.tab2);

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
                App.ui.form.panel1.add(App.ui.form.panelFeatureCollections);
                App.ui.form.panel1.add(App.ui.form.panelStates);
                App.ui.form.panel1.add(App.ui.form.panelProperties);
                App.ui.form.panel1.add(App.ui.form.panelFeature);
                App.ui.form.panel1.add(App.ui.form.panelCollection);
                App.ui.form.panel1.add(App.ui.form.panelDataType);
                // App.ui.form.panel1.add(App.ui.form.panelBuffer);

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
                    // 'width': '700px',
                    // 'height': '350px',
                },
            }),

            panelDisclaimerText: ui.Panel({
                'layout': ui.Panel.Layout.flow('vertical'),
                'style': {
                    'width': '700px',
                    'height': '300px',
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

            labelSubtitle: ui.Label('Land Use and Land Cover', {
                // 'fontWeight': 'bold',
                // 'padding': '1px',
                'fontSize': '14px'
            }),

            labelLink: ui.Label('Legend codes:', {
                'fontSize': '10px'
            }
            ),

            // labelLink1: ui.Label('Amazon', {
            //     'fontSize': '10px',
            // },
            //     'http://amazonia.mapbiomas.org/codigos-de-la-leyenda'
            // ),

            // labelLink2: ui.Label('Atlantic Forest', {
            //     'fontSize': '10px'
            // },
            //     'http://bosqueatlantico.mapbiomas.org/codigos-de-la-leyenda'
            // ),

            // labelLink3: ui.Label('Bolivia', {
            //     'fontSize': '10px',
            // },
            //     'https://bolivia.mapbiomas.org/codigos-de-la-leyenda/'
            // ),

            // labelLink4: ui.Label('Brazil', {
            //     'fontSize': '10px'
            // },
            //     'https://brasil.mapbiomas.org/codigos-de-legenda/'
            // ),

            // labelLink5: ui.Label('Chaco', {
            //     'fontSize': '10px'
            // },
            //     'http://chaco.mapbiomas.org/codigos-de-la-leyenda-1'
            // ),

            // labelLink6: ui.Label('Colombia', {
            //     'fontSize': '10px',
            // },
            //     'https://colombia.mapbiomas.org/codigos-de-la-leyenda/'
            // ),

            // labelLink7: ui.Label('Ecuador', {
            //     'fontSize': '10px',
            // },
            //     'https://ecuador.mapbiomas.org/codigos-de-la-leyenda/'
            // ),

            // labelLink8: ui.Label('Indonesia', {
            //     'fontSize': '10px',
            // },
            //     'https://mapbiomas.nusantara.earth/legendcode'
            // ),

            // labelLink9: ui.Label('Pampa', {
            //     'fontSize': '10px'
            // },
            //     'https://pampa.mapbiomas.org/codigos-de-la-leyenda/'
            // ),

            // labelLink10: ui.Label('Peru', {
            //     'fontSize': '10px',
            // },
            //     'https://peru.mapbiomas.org/codigos-de-la-leyenda/'
            // ),

            // labelLink11: ui.Label('Venezuela', {
            //     'fontSize': '10px',
            // },
            //     'https://venezuela.mapbiomas.org/codigos-de-la-leyenda/'
            // ),

            // labelLink12: ui.Label('Uruguay', {
            //     'fontSize': '10px',
            // },
            //     'https://uruguay.mapbiomas.org/codigos-de-la-leyenda/'
            // ),

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
            
            buttonDisclaimerOk: ui.Button({
                "label": "Ok, I get it!",
                "onClick": function () {
                    Map.remove(App.ui.form.panelDisclaimer);
                    App.ui.form.buttonDisclaimerShow.setDisabled(false);
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

            checkboxTab1: ui.Checkbox({
                'label': '  Toolkit ',
                'style': {
                    'margin': '5px 0px 5px -16px',
                    'stretch': 'horizontal',
                    'backgroundColor': '#00000000',
                },
                'onChange': function (checked) {
                    if (checked) {
                        App.ui.form.checkboxTab2.setValue(false);
                        App.ui.form.tab1.style().set('border', '1px solid #808080');
                        App.ui.form.tab2.style().set('border', '1px solid #80808033');

                        App.ui.form.panelMain.remove(App.ui.form.panel2);
                        App.ui.form.panelMain.remove(App.ui.form.panel3);
                        App.ui.form.panelMain.remove(App.ui.form.panel4);
                        App.ui.form.panelMain.remove(App.ui.form.panel5);
                        App.ui.form.panelMain.remove(App.ui.form.panel6);
                        App.ui.form.panelMain.remove(App.ui.form.panel7);
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
                    if (checked) {
                        App.ui.form.checkboxTab1.setValue(false);
                        App.ui.form.tab1.style().set('border', '1px solid #80808033');
                        App.ui.form.tab2.style().set('border', '1px solid #808080');

                        App.ui.form.panelMain.remove(App.ui.form.panel1);
                        App.ui.form.panelMain
                          .add(App.ui.form.panel2)
                          .add(App.ui.form.panel3)
                          .add(App.ui.form.panel4)
                          .add(App.ui.form.panel5)
                          .add(App.ui.form.panel6)
                          .add(App.ui.form.panel7);





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

            panel1: ui.Panel({
                style: {
                    'stretch': 'both'
                }
            }),
           panel2: ui.Panel({
              widgets: [
                  ui.Label('Brazil fire col3: annual_burned_coverage'),
                  ui.Panel({
                      widgets: [
                          ui.Label({ value: '1985', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-annual/fire_annual_1985.tif' }),
                          ui.Label({ value: '1986', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-annual/fire_annual_1986.tif' }),
                          ui.Label({ value: '1987', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-annual/fire_annual_1987.tif' }),
                          ui.Label({ value: '1988', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-annual/fire_annual_1988.tif' }),
                          ui.Label({ value: '1989', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-annual/fire_annual_1989.tif' }),
                          ui.Label({ value: '1990', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-annual/fire_annual_1990.tif' }),
                          ui.Label({ value: '1991', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-annual/fire_annual_1991.tif' }),
                          ui.Label({ value: '1992', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-annual/fire_annual_1992.tif' }),
                          ui.Label({ value: '1993', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-annual/fire_annual_1993.tif' }),
                          ui.Label({ value: '1994', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-annual/fire_annual_1994.tif' }),
                          ui.Label({ value: '1995', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-annual/fire_annual_1995.tif' }),
                          ui.Label({ value: '1996', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-annual/fire_annual_1996.tif' }),
                          ui.Label({ value: '1997', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-annual/fire_annual_1997.tif' }),
                          ui.Label({ value: '1998', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-annual/fire_annual_1998.tif' }),
                          ui.Label({ value: '1999', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-annual/fire_annual_1999.tif' }),
                          ui.Label({ value: '2000', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-annual/fire_annual_2000.tif' }),
                          ui.Label({ value: '2001', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-annual/fire_annual_2001.tif' }),
                          ui.Label({ value: '2002', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-annual/fire_annual_2002.tif' }),
                          ui.Label({ value: '2003', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-annual/fire_annual_2003.tif' }),
                          ui.Label({ value: '2004', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-annual/fire_annual_2004.tif' }),
                          ui.Label({ value: '2005', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-annual/fire_annual_2005.tif' }),
                          ui.Label({ value: '2006', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-annual/fire_annual_2006.tif' }),
                          ui.Label({ value: '2007', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-annual/fire_annual_2007.tif' }),
                          ui.Label({ value: '2008', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-annual/fire_annual_2008.tif' }),
                          ui.Label({ value: '2009', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-annual/fire_annual_2009.tif' }),
                          ui.Label({ value: '2010', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-annual/fire_annual_2010.tif' }),
                          ui.Label({ value: '2011', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-annual/fire_annual_2011.tif' }),
                          ui.Label({ value: '2012', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-annual/fire_annual_2012.tif' }),
                          ui.Label({ value: '2013', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-annual/fire_annual_2013.tif' }),
                          ui.Label({ value: '2014', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-annual/fire_annual_2014.tif' }),
                          ui.Label({ value: '2015', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-annual/fire_annual_2015.tif' }),
                          ui.Label({ value: '2016', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-annual/fire_annual_2016.tif' }),
                          ui.Label({ value: '2017', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-annual/fire_annual_2017.tif' }),
                          ui.Label({ value: '2018', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-annual/fire_annual_2018.tif' }),
                          ui.Label({ value: '2019', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-annual/fire_annual_2019.tif' }),
                          ui.Label({ value: '2020', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-annual/fire_annual_2020.tif' }),
                          ui.Label({ value: '2021', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-annual/fire_annual_2021.tif' }),
                          ui.Label({ value: '2022', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-annual/fire_annual_2022.tif' }),
                          ui.Label({ value: '2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-annual/fire_annual_2023.tif' }),
                      ],
                      'layout': ui.Panel.Layout.flow('horizontal', true),
                      style: {
                          'border': '1px grey solid',
                          'margin': '0px 6px 0px 6px'
                      }
                  }),
                ],
                style: {
                    'stretch': 'both'
                }
            }),
            panel3: ui.Panel({
              widgets: [
                  ui.Label('Brazil fire col3: monthly_burned_coverage'),
                  ui.Panel({
                      widgets: [
                          ui.Label({ value: '1985', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-monthly/fire_monthly_1985.tif' }),
                          ui.Label({ value: '1986', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-monthly/fire_monthly_1986.tif' }),
                          ui.Label({ value: '1987', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-monthly/fire_monthly_1987.tif' }),
                          ui.Label({ value: '1988', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-monthly/fire_monthly_1988.tif' }),
                          ui.Label({ value: '1989', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-monthly/fire_monthly_1989.tif' }),
                          ui.Label({ value: '1990', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-monthly/fire_monthly_1990.tif' }),
                          ui.Label({ value: '1991', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-monthly/fire_monthly_1991.tif' }),
                          ui.Label({ value: '1992', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-monthly/fire_monthly_1992.tif' }),
                          ui.Label({ value: '1993', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-monthly/fire_monthly_1993.tif' }),
                          ui.Label({ value: '1994', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-monthly/fire_monthly_1994.tif' }),
                          ui.Label({ value: '1995', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-monthly/fire_monthly_1995.tif' }),
                          ui.Label({ value: '1996', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-monthly/fire_monthly_1996.tif' }),
                          ui.Label({ value: '1997', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-monthly/fire_monthly_1997.tif' }),
                          ui.Label({ value: '1998', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-monthly/fire_monthly_1998.tif' }),
                          ui.Label({ value: '1999', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-monthly/fire_monthly_1999.tif' }),
                          ui.Label({ value: '2000', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-monthly/fire_monthly_2000.tif' }),
                          ui.Label({ value: '2001', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-monthly/fire_monthly_2001.tif' }),
                          ui.Label({ value: '2002', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-monthly/fire_monthly_2002.tif' }),
                          ui.Label({ value: '2003', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-monthly/fire_monthly_2003.tif' }),
                          ui.Label({ value: '2004', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-monthly/fire_monthly_2004.tif' }),
                          ui.Label({ value: '2005', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-monthly/fire_monthly_2005.tif' }),
                          ui.Label({ value: '2006', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-monthly/fire_monthly_2006.tif' }),
                          ui.Label({ value: '2007', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-monthly/fire_monthly_2007.tif' }),
                          ui.Label({ value: '2008', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-monthly/fire_monthly_2008.tif' }),
                          ui.Label({ value: '2009', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-monthly/fire_monthly_2009.tif' }),
                          ui.Label({ value: '2010', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-monthly/fire_monthly_2010.tif' }),
                          ui.Label({ value: '2011', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-monthly/fire_monthly_2011.tif' }),
                          ui.Label({ value: '2012', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-monthly/fire_monthly_2012.tif' }),
                          ui.Label({ value: '2013', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-monthly/fire_monthly_2013.tif' }),
                          ui.Label({ value: '2014', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-monthly/fire_monthly_2014.tif' }),
                          ui.Label({ value: '2015', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-monthly/fire_monthly_2015.tif' }),
                          ui.Label({ value: '2016', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-monthly/fire_monthly_2016.tif' }),
                          ui.Label({ value: '2017', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-monthly/fire_monthly_2017.tif' }),
                          ui.Label({ value: '2018', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-monthly/fire_monthly_2018.tif' }),
                          ui.Label({ value: '2019', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-monthly/fire_monthly_2019.tif' }),
                          ui.Label({ value: '2020', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-monthly/fire_monthly_2020.tif' }),
                          ui.Label({ value: '2021', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-monthly/fire_monthly_2021.tif' }),
                          ui.Label({ value: '2022', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-monthly/fire_monthly_2022.tif' }),
                          ui.Label({ value: '2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-monthly/fire_monthly_2023.tif' }),
                      ],
                      'layout': ui.Panel.Layout.flow('horizontal', true),
                      style: {
                          'border': '1px grey solid',
                          'margin': '0px 6px 0px 6px'
                      }
                  }),
              ],
              style: {
                  'stretch': 'both'
              }
            }),
            panel4: ui.Panel({
            widgets: [
                ui.Label('Brazil fire col3: annual_burned_scar_size_range'),
                ui.Panel({
                    widgets: [
                        ui.Label({ value: '1985', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-size/fire_size_1985.tif' }),
                        ui.Label({ value: '1986', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-size/fire_size_1986.tif' }),
                        ui.Label({ value: '1987', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-size/fire_size_1987.tif' }),
                        ui.Label({ value: '1988', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-size/fire_size_1988.tif' }),
                        ui.Label({ value: '1989', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-size/fire_size_1989.tif' }),
                        ui.Label({ value: '1990', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-size/fire_size_1990.tif' }),
                        ui.Label({ value: '1991', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-size/fire_size_1991.tif' }),
                        ui.Label({ value: '1992', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-size/fire_size_1992.tif' }),
                        ui.Label({ value: '1993', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-size/fire_size_1993.tif' }),
                        ui.Label({ value: '1994', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-size/fire_size_1994.tif' }),
                        ui.Label({ value: '1995', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-size/fire_size_1995.tif' }),
                        ui.Label({ value: '1996', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-size/fire_size_1996.tif' }),
                        ui.Label({ value: '1997', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-size/fire_size_1997.tif' }),
                        ui.Label({ value: '1998', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-size/fire_size_1998.tif' }),
                        ui.Label({ value: '1999', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-size/fire_size_1999.tif' }),
                        ui.Label({ value: '2000', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-size/fire_size_2000.tif' }),
                        ui.Label({ value: '2001', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-size/fire_size_2001.tif' }),
                        ui.Label({ value: '2002', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-size/fire_size_2002.tif' }),
                        ui.Label({ value: '2003', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-size/fire_size_2003.tif' }),
                        ui.Label({ value: '2004', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-size/fire_size_2004.tif' }),
                        ui.Label({ value: '2005', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-size/fire_size_2005.tif' }),
                        ui.Label({ value: '2006', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-size/fire_size_2006.tif' }),
                        ui.Label({ value: '2007', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-size/fire_size_2007.tif' }),
                        ui.Label({ value: '2008', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-size/fire_size_2008.tif' }),
                        ui.Label({ value: '2009', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-size/fire_size_2009.tif' }),
                        ui.Label({ value: '2010', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-size/fire_size_2010.tif' }),
                        ui.Label({ value: '2011', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-size/fire_size_2011.tif' }),
                        ui.Label({ value: '2012', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-size/fire_size_2012.tif' }),
                        ui.Label({ value: '2013', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-size/fire_size_2013.tif' }),
                        ui.Label({ value: '2014', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-size/fire_size_2014.tif' }),
                        ui.Label({ value: '2015', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-size/fire_size_2015.tif' }),
                        ui.Label({ value: '2016', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-size/fire_size_2016.tif' }),
                        ui.Label({ value: '2017', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-size/fire_size_2017.tif' }),
                        ui.Label({ value: '2018', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-size/fire_size_2018.tif' }),
                        ui.Label({ value: '2019', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-size/fire_size_2019.tif' }),
                        ui.Label({ value: '2020', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-size/fire_size_2020.tif' }),
                        ui.Label({ value: '2021', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-size/fire_size_2021.tif' }),
                        ui.Label({ value: '2022', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-size/fire_size_2022.tif' }),
                        ui.Label({ value: '2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-size/fire_size_2023.tif' }),
                    ],
                    'layout': ui.Panel.Layout.flow('horizontal', true),
                    style: {
                        'border': '1px grey solid',
                        'margin': '0px 6px 0px 6px'
                    }
                }),
            ],
            style: {
                'stretch': 'both'
            }
            }),
            panel5: ui.Panel({
            widgets: [
                ui.Label('Brazil fire col3: year_last_fire'),
                ui.Panel({
                    widgets: [
                        ui.Label({ value: '1986', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-last/fire_last_1986.tif' }),
                        ui.Label({ value: '1987', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-last/fire_last_1987.tif' }),
                        ui.Label({ value: '1988', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-last/fire_last_1988.tif' }),
                        ui.Label({ value: '1989', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-last/fire_last_1989.tif' }),
                        ui.Label({ value: '1990', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-last/fire_last_1990.tif' }),
                        ui.Label({ value: '1991', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-last/fire_last_1991.tif' }),
                        ui.Label({ value: '1992', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-last/fire_last_1992.tif' }),
                        ui.Label({ value: '1993', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-last/fire_last_1993.tif' }),
                        ui.Label({ value: '1994', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-last/fire_last_1994.tif' }),
                        ui.Label({ value: '1995', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-last/fire_last_1995.tif' }),
                        ui.Label({ value: '1996', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-last/fire_last_1996.tif' }),
                        ui.Label({ value: '1997', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-last/fire_last_1997.tif' }),
                        ui.Label({ value: '1998', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-last/fire_last_1998.tif' }),
                        ui.Label({ value: '1999', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-last/fire_last_1999.tif' }),
                        ui.Label({ value: '2000', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-last/fire_last_2000.tif' }),
                        ui.Label({ value: '2001', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-last/fire_last_2001.tif' }),
                        ui.Label({ value: '2002', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-last/fire_last_2002.tif' }),
                        ui.Label({ value: '2003', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-last/fire_last_2003.tif' }),
                        ui.Label({ value: '2004', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-last/fire_last_2004.tif' }),
                        ui.Label({ value: '2005', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-last/fire_last_2005.tif' }),
                        ui.Label({ value: '2006', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-last/fire_last_2006.tif' }),
                        ui.Label({ value: '2007', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-last/fire_last_2007.tif' }),
                        ui.Label({ value: '2008', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-last/fire_last_2008.tif' }),
                        ui.Label({ value: '2009', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-last/fire_last_2009.tif' }),
                        ui.Label({ value: '2010', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-last/fire_last_2010.tif' }),
                        ui.Label({ value: '2011', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-last/fire_last_2011.tif' }),
                        ui.Label({ value: '2012', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-last/fire_last_2012.tif' }),
                        ui.Label({ value: '2013', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-last/fire_last_2013.tif' }),
                        ui.Label({ value: '2014', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-last/fire_last_2014.tif' }),
                        ui.Label({ value: '2015', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-last/fire_last_2015.tif' }),
                        ui.Label({ value: '2016', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-last/fire_last_2016.tif' }),
                        ui.Label({ value: '2017', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-last/fire_last_2017.tif' }),
                        ui.Label({ value: '2018', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-last/fire_last_2018.tif' }),
                        ui.Label({ value: '2019', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-last/fire_last_2019.tif' }),
                        ui.Label({ value: '2020', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-last/fire_last_2020.tif' }),
                        ui.Label({ value: '2021', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-last/fire_last_2021.tif' }),
                        ui.Label({ value: '2022', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-last/fire_last_2022.tif' }),
                        ui.Label({ value: '2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-last/fire_last_2023.tif' }),
                    ],
                    'layout': ui.Panel.Layout.flow('horizontal', true),
                    style: {
                        'border': '1px grey solid',
                        'margin': '0px 6px 0px 6px'
                    }
                }),
            ],
            style: {
                'stretch': 'both'
            }
            }),
            panel6: ui.Panel({
            widgets: [
                ui.Label('Brazil fire col3: accumulated_burned_coverage'),
                ui.Panel({
                    widgets: [
                      ui.Label({ value: '1985_1985', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_1985_1985.tif'}),
                      ui.Label({ value: '1985_1986', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_1985_1986.tif'}),
                      ui.Label({ value: '1985_1987', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_1985_1987.tif'}),
                      ui.Label({ value: '1985_1988', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_1985_1988.tif'}),
                      ui.Label({ value: '1985_1989', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_1985_1989.tif'}),
                      ui.Label({ value: '1985_1990', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_1985_1990.tif'}),
                      ui.Label({ value: '1985_1991', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_1985_1991.tif'}),
                      ui.Label({ value: '1985_1992', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_1985_1992.tif'}),
                      ui.Label({ value: '1985_1993', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_1985_1993.tif'}),
                      ui.Label({ value: '1985_1994', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_1985_1994.tif'}),
                      ui.Label({ value: '1985_1995', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_1985_1995.tif'}),
                      ui.Label({ value: '1985_1996', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_1985_1996.tif'}),
                      ui.Label({ value: '1985_1997', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_1985_1997.tif'}),
                      ui.Label({ value: '1985_1998', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_1985_1998.tif'}),
                      ui.Label({ value: '1985_1999', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_1985_1999.tif'}),
                      ui.Label({ value: '1985_2000', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_1985_2000.tif'}),
                      ui.Label({ value: '1985_2001', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_1985_2001.tif'}),
                      ui.Label({ value: '1985_2002', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_1985_2002.tif'}),
                      ui.Label({ value: '1985_2003', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_1985_2003.tif'}),
                      ui.Label({ value: '1985_2004', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_1985_2004.tif'}),
                      ui.Label({ value: '1985_2005', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_1985_2005.tif'}),
                      ui.Label({ value: '1985_2006', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_1985_2006.tif'}),
                      ui.Label({ value: '1985_2007', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_1985_2007.tif'}),
                      ui.Label({ value: '1985_2008', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_1985_2008.tif'}),
                      ui.Label({ value: '1985_2009', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_1985_2009.tif'}),
                      ui.Label({ value: '1985_2010', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_1985_2010.tif'}),
                      ui.Label({ value: '1985_2011', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_1985_2011.tif'}),
                      ui.Label({ value: '1985_2012', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_1985_2012.tif'}),
                      ui.Label({ value: '1985_2013', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_1985_2013.tif'}),
                      ui.Label({ value: '1985_2014', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_1985_2014.tif'}),
                      ui.Label({ value: '1985_2015', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_1985_2015.tif'}),
                      ui.Label({ value: '1985_2016', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_1985_2016.tif'}),
                      ui.Label({ value: '1985_2017', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_1985_2017.tif'}),
                      ui.Label({ value: '1985_2018', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_1985_2018.tif'}),
                      ui.Label({ value: '1985_2019', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_1985_2019.tif'}),
                      ui.Label({ value: '1985_2020', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_1985_2020.tif'}),
                      ui.Label({ value: '1985_2021', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_1985_2021.tif'}),
                      ui.Label({ value: '1985_2022', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_1985_2022.tif'}),
                      ui.Label({ value: '1985_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_1985_2023.tif'}),
                      ui.Label({ value: '1986_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_1986_2023.tif'}),
                      ui.Label({ value: '1987_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_1987_2023.tif'}),
                      ui.Label({ value: '1988_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_1988_2023.tif'}),
                      ui.Label({ value: '1989_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_1989_2023.tif'}),
                      ui.Label({ value: '1990_1995', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_1990_1995.tif'}),
                      ui.Label({ value: '1990_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_1990_2023.tif'}),
                      ui.Label({ value: '1991_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_1991_2023.tif'}),
                      ui.Label({ value: '1992_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_1992_2023.tif'}),
                      ui.Label({ value: '1993_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_1993_2023.tif'}),
                      ui.Label({ value: '1994_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_1994_2023.tif'}),
                      ui.Label({ value: '1995_2000', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_1995_2000.tif'}),
                      ui.Label({ value: '1995_2005', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_1995_2005.tif'}),
                      ui.Label({ value: '1995_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_1995_2023.tif'}),
                      ui.Label({ value: '1996_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_1996_2023.tif'}),
                      ui.Label({ value: '1997_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_1997_2023.tif'}),
                      ui.Label({ value: '1998_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_1998_2023.tif'}),
                      ui.Label({ value: '1999_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_1999_2023.tif'}),
                      ui.Label({ value: '2000_2005', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_2000_2005.tif'}),
                      ui.Label({ value: '2000_2015', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_2000_2015.tif'}),
                      ui.Label({ value: '2000_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_2000_2023.tif'}),
                      ui.Label({ value: '2001_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_2001_2023.tif'}),
                      ui.Label({ value: '2002_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_2002_2023.tif'}),
                      ui.Label({ value: '2003_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_2003_2023.tif'}),
                      ui.Label({ value: '2004_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_2004_2023.tif'}),
                      ui.Label({ value: '2005_2010', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_2005_2010.tif'}),
                      ui.Label({ value: '2005_2015', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_2005_2015.tif'}),
                      ui.Label({ value: '2005_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_2005_2023.tif'}),
                      ui.Label({ value: '2006_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_2006_2023.tif'}),
                      ui.Label({ value: '2007_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_2007_2023.tif'}),
                      ui.Label({ value: '2008_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_2008_2023.tif'}),
                      ui.Label({ value: '2009_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_2009_2023.tif'}),
                      ui.Label({ value: '2010_2015', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_2010_2015.tif'}),
                      ui.Label({ value: '2010_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_2010_2023.tif'}),
                      ui.Label({ value: '2011_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_2011_2023.tif'}),
                      ui.Label({ value: '2012_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_2012_2023.tif'}),
                      ui.Label({ value: '2013_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_2013_2023.tif'}),
                      ui.Label({ value: '2014_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_2014_2023.tif'}),
                      ui.Label({ value: '2015_2020', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_2015_2020.tif'}),
                      ui.Label({ value: '2015_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_2015_2023.tif'}),
                      ui.Label({ value: '2016_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_2016_2023.tif'}),
                      ui.Label({ value: '2017_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_2017_2023.tif'}),
                      ui.Label({ value: '2018_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_2018_2023.tif'}),
                      ui.Label({ value: '2019_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_2019_2023.tif'}),
                      ui.Label({ value: '2020_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_2020_2023.tif'}),
                      ui.Label({ value: '2021_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_2021_2023.tif'}),
                      ui.Label({ value: '2022_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_2022_2023.tif'}),
                      ui.Label({ value: '2023_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-accumulated/fire_accumulated_2023_2023.tif'}),
                    ],
                    'layout': ui.Panel.Layout.flow('horizontal', true),
                    style: {
                        'border': '1px grey solid',
                        'margin': '0px 6px 0px 6px'
                    }
                }),
            ],
            style: {
                'stretch': 'both'
            }
            }),
            panel7: ui.Panel({
            widgets: [
                ui.Label('Brazil fire col3: frequency_burned_coverage'),
                ui.Panel({
                    widgets: [
                        ui.Label({ value: '1985_1985', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_1985_1985.tif' }),
                        ui.Label({ value: '1985_1985', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_1985_1985.tif'}),
                        ui.Label({ value: '1985_1986', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_1985_1986.tif'}),
                        ui.Label({ value: '1985_1987', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_1985_1987.tif'}),
                        ui.Label({ value: '1985_1988', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_1985_1988.tif'}),
                        ui.Label({ value: '1985_1989', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_1985_1989.tif'}),
                        ui.Label({ value: '1985_1990', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_1985_1990.tif'}),
                        ui.Label({ value: '1985_1991', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_1985_1991.tif'}),
                        ui.Label({ value: '1985_1992', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_1985_1992.tif'}),
                        ui.Label({ value: '1985_1993', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_1985_1993.tif'}),
                        ui.Label({ value: '1985_1994', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_1985_1994.tif'}),
                        ui.Label({ value: '1985_1995', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_1985_1995.tif'}),
                        ui.Label({ value: '1985_1996', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_1985_1996.tif'}),
                        ui.Label({ value: '1985_1997', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_1985_1997.tif'}),
                        ui.Label({ value: '1985_1998', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_1985_1998.tif'}),
                        ui.Label({ value: '1985_1999', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_1985_1999.tif'}),
                        ui.Label({ value: '1985_2000', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_1985_2000.tif'}),
                        ui.Label({ value: '1985_2001', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_1985_2001.tif'}),
                        ui.Label({ value: '1985_2002', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_1985_2002.tif'}),
                        ui.Label({ value: '1985_2003', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_1985_2003.tif'}),
                        ui.Label({ value: '1985_2004', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_1985_2004.tif'}),
                        ui.Label({ value: '1985_2005', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_1985_2005.tif'}),
                        ui.Label({ value: '1985_2006', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_1985_2006.tif'}),
                        ui.Label({ value: '1985_2007', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_1985_2007.tif'}),
                        ui.Label({ value: '1985_2008', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_1985_2008.tif'}),
                        ui.Label({ value: '1985_2009', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_1985_2009.tif'}),
                        ui.Label({ value: '1985_2010', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_1985_2010.tif'}),
                        ui.Label({ value: '1985_2011', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_1985_2011.tif'}),
                        ui.Label({ value: '1985_2012', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_1985_2012.tif'}),
                        ui.Label({ value: '1985_2013', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_1985_2013.tif'}),
                        ui.Label({ value: '1985_2014', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_1985_2014.tif'}),
                        ui.Label({ value: '1985_2015', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_1985_2015.tif'}),
                        ui.Label({ value: '1985_2016', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_1985_2016.tif'}),
                        ui.Label({ value: '1985_2017', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_1985_2017.tif'}),
                        ui.Label({ value: '1985_2018', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_1985_2018.tif'}),
                        ui.Label({ value: '1985_2019', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_1985_2019.tif'}),
                        ui.Label({ value: '1985_2020', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_1985_2020.tif'}),
                        ui.Label({ value: '1985_2021', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_1985_2021.tif'}),
                        ui.Label({ value: '1985_2022', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_1985_2022.tif'}),
                        ui.Label({ value: '1985_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_1985_2023.tif'}),
                        ui.Label({ value: '1986_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_1986_2023.tif'}),
                        ui.Label({ value: '1987_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_1987_2023.tif'}),
                        ui.Label({ value: '1988_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_1988_2023.tif'}),
                        ui.Label({ value: '1989_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_1989_2023.tif'}),
                        ui.Label({ value: '1990_1995', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_1990_1995.tif'}),
                        ui.Label({ value: '1990_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_1990_2023.tif'}),
                        ui.Label({ value: '1991_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_1991_2023.tif'}),
                        ui.Label({ value: '1992_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_1992_2023.tif'}),
                        ui.Label({ value: '1993_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_1993_2023.tif'}),
                        ui.Label({ value: '1994_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_1994_2023.tif'}),
                        ui.Label({ value: '1995_2000', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_1995_2000.tif'}),
                        ui.Label({ value: '1995_2005', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_1995_2005.tif'}),
                        ui.Label({ value: '1995_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_1995_2023.tif'}),
                        ui.Label({ value: '1996_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_1996_2023.tif'}),
                        ui.Label({ value: '1997_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_1997_2023.tif'}),
                        ui.Label({ value: '1998_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_1998_2023.tif'}),
                        ui.Label({ value: '1999_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_1999_2023.tif'}),
                        ui.Label({ value: '2000_2005', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_2000_2005.tif'}),
                        ui.Label({ value: '2000_2015', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_2000_2015.tif'}),
                        ui.Label({ value: '2000_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_2000_2023.tif'}),
                        ui.Label({ value: '2001_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_2001_2023.tif'}),
                        ui.Label({ value: '2002_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_2002_2023.tif'}),
                        ui.Label({ value: '2003_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_2003_2023.tif'}),
                        ui.Label({ value: '2004_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_2004_2023.tif'}),
                        ui.Label({ value: '2005_2010', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_2005_2010.tif'}),
                        ui.Label({ value: '2005_2015', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_2005_2015.tif'}),
                        ui.Label({ value: '2005_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_2005_2023.tif'}),
                        ui.Label({ value: '2006_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_2006_2023.tif'}),
                        ui.Label({ value: '2007_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_2007_2023.tif'}),
                        ui.Label({ value: '2008_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_2008_2023.tif'}),
                        ui.Label({ value: '2009_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_2009_2023.tif'}),
                        ui.Label({ value: '2010_2015', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_2010_2015.tif'}),
                        ui.Label({ value: '2010_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_2010_2023.tif'}),
                        ui.Label({ value: '2011_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_2011_2023.tif'}),
                        ui.Label({ value: '2012_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_2012_2023.tif'}),
                        ui.Label({ value: '2013_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_2013_2023.tif'}),
                        ui.Label({ value: '2014_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_2014_2023.tif'}),
                        ui.Label({ value: '2015_2020', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_2015_2020.tif'}),
                        ui.Label({ value: '2015_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_2015_2023.tif'}),
                        ui.Label({ value: '2016_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_2016_2023.tif'}),
                        ui.Label({ value: '2017_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_2017_2023.tif'}),
                        ui.Label({ value: '2018_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_2018_2023.tif'}),
                        ui.Label({ value: '2019_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_2019_2023.tif'}),
                        ui.Label({ value: '2020_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_2020_2023.tif'}),
                        ui.Label({ value: '2021_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_2021_2023.tif'}),
                        ui.Label({ value: '2022_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_2022_2023.tif'}),
                        ui.Label({ value: '2023_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/fire-col3/fire-frequency/fire_frequency_2023_2023.tif'}),
                    ],
                    'layout': ui.Panel.Layout.flow('horizontal', true),
                    style: {
                        'border': '1px grey solid',
                        'margin': '0px 6px 0px 6px'
                    }
                }),
            ],
            style: {
                'stretch': 'both'
            }
            }),


        },
    }
};

App.init();

App.setVersion();
