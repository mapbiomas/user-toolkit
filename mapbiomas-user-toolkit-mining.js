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
 *    1.1.0 - Loads mapbiomas-brazil collection 7.0 mining data
 *    1.2.0 - Loads mapbiomas-brazil collection 8.0 mining data
 *    1.3.0 - Loads mapbiomas-brazil collection 9.0 mining data
 *    1.4.0 - Loads mapbiomas-brazil collection 11.0 mining substances (new legend)
 *          - Territories from the MapBiomas platform
 *    1.4.1 - Link to legend files (QGIS, ArcGIS Pro, SLD, CSV)
 *    1.4.2 - New toolkit logo; single link to the legend files on GitHub
 * 
 * @see
 *      Get the MapBiomas exported data in your "Google Drive/MAPBIOMAS-EXPORT" folder
 *      Code and Tutorial - https://github.com/mapbiomas-brazil/user-toolkit
 */

var palettes = require('users/mapbiomas/modules:Palettes.js');
var logos = require('users/mapbiomas/modules:Logos.js');
var mapp = require('users/joaovsiqueira1/packages:Mapp.js');
var legend = require('users/joaovsiqueira1/packages:Legend.js');

/**
 * @description
 *    calculate area for mapbiomas map
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

        var areas = territotiesData.map(Area.convert2table);

        areas = ee.FeatureCollection(areas).flatten()
            .map(
                function (feature) {
                    return feature.set("unit", object.unit)
                }
            );

        return areas;
    }

};

/**
 * 
 */
var App = {

    options: {

        version: '1.4.2',

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

        tables: {
            'mapbiomas-brazil': [
                {
                    'label': 'AMACRO (IBGE, 2026)',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/BRAZIL/WORKSPACE/AMACRO/AMACRO_v3',
                },
                {
                    'label': 'Amazônia Legal (IBGE, 2024)',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/BRAZIL/WORKSPACE/LEGAL_AMAZON/LEGAL_AMAZON_v3',
                },
                {
                    'label': 'Atlantic Forest Law 1:1.000.000 (SOS Mata Atlântica, 2015)',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/BRAZIL/WORKSPACE/ATLANTIC_FOREST_LAW/ATLANTIC_FOREST_LAW_v3',
                },
                {
                    'label': 'Biome (IBGE, 2025)',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/BRAZIL/WORKSPACE/BIOMES/BIOMES_v4',
                },
                {
                    'label': 'Biosphere Reserve',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/BRAZIL/WORKSPACE/RESERVA_DA_BIOSFERA/RESERVA_DA_BIOSFERA_v3',
                },
                {
                    'label': 'Biosphere Reserve (RBMA, 2026)',
                    'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/brazil/territories/RESERVA_DA_BIOSFERA_RBMA_2026_A597F0B9/a1cce443-608c-4a32-b313-9918e04e11dd',
                },
                {
                    'label': 'Bolsa Verde Territories (MMA, 2026)',
                    'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/brazil/territories/TERRITORIOS_DO_BOLSA_VERDE_MMA_2026_4FCCFE72/ac604980-6a99-4770-a64b-41ab84a10585',
                },
                {
                    'label': 'Brasil (IBGE, 2025)',
                    'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/brazil/territories/BRASIL_IBGE_2025_D71F57FE/cc8a1562-88be-4106-8701-34da9e3a3a40',
                },
                {
                    'label': 'Census Tracts',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/BRAZIL/WORKSPACE/CENSUS_TRACTS/CENSUS_TRACTS_v1',
                },
                {
                    'label': 'Coastal and Marine System (IBGE, 2025)',
                    'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/brazil/territories/SISTEMA_COSTEIRO_E_MARINHO_IBGE_2025_DB52694B/b545395d-1b7c-4f1a-bec1-0c438526c179',
                },
                {
                    'label': 'Concessões Florestais (MMA, 2026)',
                    'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/brazil/territories/CONCESSOES_FLORESTAIS_MMA_2026_61E001B1/5fd69700-34cf-42a5-a563-d290eaec7839',
                },
                {
                    'label': 'Conservation Units (CNUC, 2026)',
                    'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/brazil/territories/UNIDADES_DE_CONSERVACAO_XNUC_2026_8DCD0C0B/ea04ccaf-0ff1-445a-9a29-a551015b0868',
                },
                {
                    'label': 'DHN250 - Level 1 - National Hydrographic Division (ANA, 2017)',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/BRAZIL/WORKSPACE/DHN250_LEVEL_1/DHN250_LEVEL_1_v2',
                },
                {
                    'label': 'DHN250 - Level 2 - National Hydrographic Division (ANA, 2017)',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/BRAZIL/WORKSPACE/DHN250_LEVEL_2/DHN250_LEVEL_2_v3',
                },
                {
                    'label': 'DHN250 - Level 3 - National Hydrographic Division (ANA, 2017)',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/BRAZIL/WORKSPACE/DHN250_LEVEL_3/DHN250_LEVEL_3_v4',
                },
                {
                    'label': 'Estados (IBGE, 2025)',
                    'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/brazil/territories/ESTADOS_IBGE_2025_F7EAF953/3f95fd9d-4b26-4243-8612-37b9d5b12a55',
                },
                {
                    'label': 'Federal watershed Committee',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/BRAZIL/WORKSPACE/FEDERAL_COMMITTEE/FEDERAL_COMMITTEE_v1',
                },
                {
                    'label': 'Florestas Públicas não Destinadas (tipo B) (MMA, 2026)',
                    'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/brazil/territories/FLORESTAS_PUBLICAS_NAO_DESTINADAS_TIPO_B_MMA_2026_FA7D29E9/1f8935c8-0c73-42e2-a3d9-ceb8e063da2d',
                },
                {
                    'label': 'Hydrographic Regions',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/BRAZIL/WORKSPACE/HYDROGRAPHIC_REGIONS/HYDROGRAPHIC_REGIONS_v1',
                },
                {
                    'label': 'Marine Conservation Unit',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/BRAZIL/WORKSPACE/MARINE_CONSERVATION_UNIT/MARINE_CONSERVATION_UNIT_v2',
                },
                {
                    'label': 'MATOPIBA (EMBRAPA, 2025)',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/BRAZIL/WORKSPACE/MATOPIBA/MATOPIBA_v3',
                },
                {
                    'label': 'Metropolitan Areas',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/BRAZIL/WORKSPACE/METROPOLITAN_REGIONS/METROPOLITAN_REGIONS_v2',
                },
                {
                    'label': 'Municipal Districts',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/BRAZIL/WORKSPACE/MUNICIPAL_DISTRICTS/MUNICIPAL_DISTRICTS_v2',
                },
                {
                    'label': 'Municipalities .(IBGE, 2025)',
                    'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/brazil/territories/MUNICIPIOS_IBGE_2025_637F97E6/0afdffeb-2a5b-4b93-8163-d52f92f555e5',
                },
                {
                    'label': 'Municipios Prioritários da Amazônia (MMA, 2026)',
                    'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/brazil/territories/MUNICIPIOS_PRIORITARIOS_DA_AMAZONIA_MMA_2026_26694C97/a2f415d9-1408-4c4b-9d02-8e6b6455d202',
                },
                {
                    'label': 'Municípios Costeiros com extensão de 5km na costa (Solved, 2026)',
                    'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/brazil/territories/MUNICIPIOS_COSTEIROS_COM_EXTENSAO_DE_5KM_NA_COSTA_SOLVED_2026_F94FBCCB/82cd7d4f-15d0-4961-a6d8-1a699fb77314',
                },
                {
                    'label': 'Planalto da BAP (ANA, 2021)',
                    'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/brazil/territories/PLANALTO_DA_BAP_ANA_2021_D4F5966E/9cfd02e1-f425-41e1-8364-240a8dbf1b68',
                },
                {
                    'label': 'Priority Area (MMA 2018)',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/BRAZIL/WORKSPACE/AREAS_PRIORITARIAS_DO_MMA_2018/AREAS_PRIORITARIAS_DO_MMA_2018_v2',
                },
                {
                    'label': 'Quilombos (INCRA, 2026)',
                    'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/brazil/territories/QUILOMBOS_INCRA_2026_C57B5884/ff433ee4-7137-4845-aa3d-42f66d2b7823',
                },
                {
                    'label': 'Regiões (IBGE, 2025)',
                    'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/brazil/territories/REGIOES_IBGE_2025_2CDBB85D/97f303cb-f543-400c-9c8f-47cc6b9b3a66',
                },
                {
                    'label': 'Risk Sectors IBGE',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/BRAZIL/WORKSPACE/RISK_SECTORS_BATER_IBGE/RISK_SECTORS_BATER_IBGE_v2',
                },
                {
                    'label': 'Rural Census Tracts',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/BRAZIL/WORKSPACE/RURAL_CENSUS_TRACTS/RURAL_CENSUS_TRACTS_v1',
                },
                {
                    'label': 'Slums and Poor Urban Communities',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/BRAZIL/WORKSPACE/SLUMS_AND_POOR_URBAN_COMMUNITIES/SLUMS_AND_POOR_URBAN_COMMUNITIES_v1',
                },
                {
                    'label': 'State Units for Planning and Management of Water Resources',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/BRAZIL/WORKSPACE/STATE_UNITS_PLANNING_MANAGEMENT_WATER_RESOURCES/STATE_UNITS_PLANNING_MANAGEMENT_WATER_RESOURCES_v1',
                },
                {
                    'label': 'State watershed Committee',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/BRAZIL/WORKSPACE/STATE_COMMITTEE/STATE_COMMITTEE_v1',
                },
                {
                    'label': 'Terras Indígenas (FUNAI, 2026)',
                    'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/brazil/territories/TERRAS_INDIGENAS_FUNAI_2026_F7F13F79/8b94c232-c551-4dd1-ac0c-2b40145db021',
                },
                {
                    'label': 'Urban Census Tracts',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/BRAZIL/WORKSPACE/URBAN_CENSUS_TRACTS/URBAN_CENSUS_TRACTS_v1',
                },
                {
                    'label': 'Urban Concentrations',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/BRAZIL/WORKSPACE/URBAN_CONCENTRATION/URBAN_CONCENTRATION_v2',
                },
                {
                    'label': 'Water Resources Management Unit',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/BRAZIL/WORKSPACE/UGRHS/UGRHS_v3',
                },
            ],
        },

        collections: {
            'mapbiomas-brazil': {
                'collection-6.0': {
                    'assets': {
                        'mined_substance': 'projects/mapbiomas-public/assets/brazil/lulc/collection6/mapbiomas_collection60_mined_substance_v1',
                    },
                    'periods': {
                        'mined_substance': [
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
                        'mined_substance': 'projects/mapbiomas-public/assets/brazil/lulc/collection7/mapbiomas_collection70_mined_substance_v1',
                    },
                    'periods': {
                        'mined_substance': [
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
                        'mined_substance': 'projects/mapbiomas-public/assets/brazil/lulc/collection8/mapbiomas_collection80_mined_substance_v1',
                    },
                    'periods': {
                        'mined_substance': [
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
                        'mined_substance': 'projects/mapbiomas-public/assets/brazil/lulc/collection9/mapbiomas_collection90_mined_substance_v1',
                    },
                    'periods': {
                        'mined_substance': [
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
                        'mined_substance': 'projects/mapbiomas-public/assets/brazil/lulc/collection11/mapbiomas_brazil_collection11_mining_substances_v1',
                    },
                    'legend': 'c11',
                    'periods': {
                        'mined_substance': [
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

        bandsNames: {
            'mined_substance': 'mined_substance',

        },

        dataType: 'mined_substance',

        data: {
            'mined_substance': null,
        },

        fileDimensions: {
            'mined_substance': 256 * 256,
        },

        ranges: {
            'mined_substance': {
                'min': 101,
                'max': 301
            },
        },

        sldStyle: '\
            <FeatureTypeStyle>\
                <Rule>\
                    <RasterSymbolizer>\
                        <ColorMap type="values">\
                            <ColorMapEntry color="#f4a582" quantity="101" label="" />\
                            <ColorMapEntry color="#f4a582" quantity="102" label="" />\
                            <ColorMapEntry color="#f4a582" quantity="103" label="" />\
                            <ColorMapEntry color="#f4a582" quantity="104" label="" />\
                            <ColorMapEntry color="#f4a582" quantity="105" label="" />\
                            <ColorMapEntry color="#f4a582" quantity="106" label="" />\
                            <ColorMapEntry color="#f4a582" quantity="107" label="" />\
                            <ColorMapEntry color="#f4a582" quantity="108" label="" />\
                            <ColorMapEntry color="#f4a582" quantity="109" label="" />\
                            <ColorMapEntry color="#f4a582" quantity="110" label="" />\
                            <ColorMapEntry color="#f4a582" quantity="111" label="" />\
                            <ColorMapEntry color="#f4a582" quantity="112" label="" />\
                            <ColorMapEntry color="#f4a582" quantity="113" label="" />\
                            <ColorMapEntry color="#f4a582" quantity="114" label="" />\
                            <ColorMapEntry color="#f4a582" quantity="115" label="" />\
                            <ColorMapEntry color="#f4a582" quantity="130" label="" />\
                            <ColorMapEntry color="#92c5de" quantity="116" label="" />\
                            <ColorMapEntry color="#92c5de" quantity="117" label="" />\
                            <ColorMapEntry color="#92c5de" quantity="118" label="" />\
                            <ColorMapEntry color="#92c5de" quantity="119" label="" />\
                            <ColorMapEntry color="#92c5de" quantity="120" label="" />\
                            <ColorMapEntry color="#92c5de" quantity="121" label="" />\
                            <ColorMapEntry color="#92c5de" quantity="122" label="" />\
                            <ColorMapEntry color="#0571b0" quantity="123" label="" />\
                            <ColorMapEntry color="#0571b0" quantity="124" label="" />\
                            <ColorMapEntry color="#0571b0" quantity="125" label="" />\
                            <ColorMapEntry color="#ca0020" quantity="126" label="" />\
                            <ColorMapEntry color="#ca0020" quantity="127" label="" />\
                            <ColorMapEntry color="#ca0020" quantity="128" label="" />\
                            <ColorMapEntry color="#ca0020" quantity="129" label="" />\
                            <ColorMapEntry color="#e66101" quantity="201" label="" />\
                            <ColorMapEntry color="#e66101" quantity="202" label="" />\
                            <ColorMapEntry color="#e66101" quantity="214" label="" />\
                            <ColorMapEntry color="#e66101" quantity="215" label="" />\
                            <ColorMapEntry color="#fdb863" quantity="216" label="" />\
                            <ColorMapEntry color="#fdb863" quantity="217" label="" />\
                            <ColorMapEntry color="#fdb863" quantity="218" label="" />\
                            <ColorMapEntry color="#b2abd2" quantity="223" label="" />\
                            <ColorMapEntry color="#b2abd2" quantity="224" label="" />\
                            <ColorMapEntry color="#b2abd2" quantity="225" label="" />\
                            <ColorMapEntry color="#5e3c99" quantity="226" label="" />\
                            <ColorMapEntry color="#3caea3" quantity="301" label="" />\
                        </ColorMap>\
                    </RasterSymbolizer>\
                </Rule>\
            </FeatureTypeStyle>',

        palette: {
            'mined_substance': [
                '#f4a582', //101
                '#f4a582', //102
                '#f4a582', //103
                '#f4a582', //104
                '#f4a582', //105
                '#f4a582', //106
                '#f4a582', //107
                '#f4a582', //108
                '#f4a582', //109
                '#f4a582', //110
                '#f4a582', //111
                '#f4a582', //112
                '#f4a582', //113
                '#f4a582', //114
                '#f4a582', //115
                '#92c5de', //116
                '#92c5de', //117
                '#92c5de', //118
                '#92c5de', //119
                '#92c5de', //120
                '#92c5de', //121
                '#92c5de', //122
                '#0571b0', //123
                '#0571b0', //124
                '#0571b0', //125
                '#ca0020', //126
                '#ca0020', //127
                '#ca0020', //128
                '#ca0020', //129
                '#f4a582', //130
                '#e66101', //214
                '#e66101', //215
                '#fdb863', //216
                '#fdb863', //217
                '#b2abd2', //223
                '#b2abd2', //224
                '#b2abd2', //225
                '#5e3c99', //226
                '#3caea3', //301

            ],
        },

        vector: null,
        activeFeature: null,
        activeName: '',

        taskid: 1,

        bufferDistance: 0,

        className: {

            'mined_substance': {
                101: '2. Industrial/2.2 Metálicas/Metálicas',
                102: '2. Industrial/2.2 Metálicas/2.2.01 Ferro',
                103: '2. Industrial/2.2 Metálicas/2.2.02 Manganês',
                104: '2. Industrial/2.2 Metálicas/2.2.03 Níquel',
                105: '2. Industrial/2.2 Metálicas/2.2.04 Amianto',
                106: '2. Industrial/2.2 Metálicas/2.2.05 Molibidênio',
                107: '2. Industrial/2.2 Metálicas/2.2.06 Titânio',
                108: '2. Industrial/2.2 Metálicas/2.2.07 Cromo',
                109: '2. Industrial/2.2 Metálicas/2.2.08 Cobre',
                110: '2. Industrial/2.2 Metálicas/2.2.09 Alumínio',
                111: '2. Industrial/2.2 Metálicas/2.2.10 Magnésio',
                112: '2. Industrial/2.2 Metálicas/2.2.11 Bário',
                113: '2. Industrial/2.2 Metálicas/2.2.12 Níobio',
                114: '2. Industrial/2.2 Metálicas/2.2.13 Estanho',
                115: '2. Industrial/2.2 Metálicas/2.2.14 Ouro',
                130: '2. Industrial/2.2 Metálicas/2.2.15 Zinco',
                116: '2. Industrial/2.3 Não Metálicas/Não Metálicas',
                117: '2. Industrial/2.3 Não Metálicas/2.3.01 Minerais Classe 2',
                118: '2. Industrial/2.3 Não Metálicas/2.3.02 Fluor',
                119: '2. Industrial/2.3 Não Metálicas/2.3.03 Fósforo',
                120: '2. Industrial/2.3 Não Metálicas/2.3.04 Gráfita',
                121: '2. Industrial/2.3 Não Metálicas/2.3.05 Silício',
                122: '2. Industrial/2.3 Não Metálicas/2.3.06 Calcário',
                123: '2. Industrial/2.4 Não Identificado/Não Identificado',

                124: '2. Industrial/2.4 Pedras Preciosas & Rochas Ornamentais/Pedras Preciosas',
                125: '2. Industrial/2.4 Pedras Preciosas & Rochas Ornamentais/Rochas Ornamentais',

                126: '2. Industrial/2.1 Energéticas/Energéticas',
                127: '2. Industrial/2.1 Energéticas/2.1.01 Carvão mineral',
                128: '2. Industrial/2.1 Energéticas/2.1.02 Urânio',
                129: '2. Industrial/2.1 Energéticas/2.1.03 Gás natural e petróleo',
                201: '1. Garimpo/1.1 Metálicas/Metálicas',
                202: '1. Garimpo/1.1 Metálicas/1.1.03 Outros',
                214: '1. Garimpo/1.1 Metálicas/1.1.02 Estanho',
                215: '1. Garimpo/1.1 Metálicas/1.1.01 Ouro',
                216: '1. Garimpo/1.2 Não Metálicas/Não Metálicas',
                217: '1. Garimpo/1.2 Não Metálicas/1.2.01 Minerais Classe 2',
                218: '1. Garimpo/1.2 Não Metálicas/1.2.02 Outros',
                223: '1. Garimpo/1.3 Pedras Preciosas & Rochas Ornamentais/Pedras Preciosas & Rochas Ornamentais',
                224: '1. Garimpo/1.3 Pedras Preciosas & Rochas Ornamentais/1.3.01 Pedras preciosas',
                225: '1. Garimpo/1.3 Pedras Preciosas & Rochas Ornamentais/1.3.02 Rochas Ornamentais',
                226: '1. Garimpo/1.4 Não Identificado/Não Identificado',
                301: '3. Outros/Outros/Outros',
            },

        },

        legend: {
            params: [
                {
                    "title": '1. Garimpo',
                    "layers": [
                        ['#e66101', null, '1.1 Metálicas'],
                        ['#fdb863', null, '1.2 Não Metálicas'],
                        ['#b2abd2', null, '1.3 Pedras Preciosas & Rochas Ornamentais'],
                        ['#5e3c99', null, '1.4 Não Identificado'],
                    ],
                    "style": {
                        "backgroundColor": "#ffffff",
                        "color": "#212121"
                    },
                    "orientation": "vertical"
                },
                {
                    "title": '2. Industrial',
                    "layers": [
                        ['#f4a582', null, '2.2 Metálicas'],
                        ['#92c5de', null, '2.3 Não Metálicas'],
                        ['#ca0020', null, '2.1 Energéticas'],
                    ],
                    "style": {
                        "backgroundColor": "#ffffff",
                        "color": "#212121"
                    },
                    "orientation": "vertical"
                },
                {
                    "title": '3. Outros',
                    "layers": [
                        ['#3caea3', null, '3.1 Outros'],
                    ],
                    "style": {
                        "backgroundColor": "#ffffff",
                        "color": "#212121"
                    },
                    "orientation": "vertical"
                },
            ]
        },

        // Coleção 11: novo esquema de códigos (1xxx garimpo, 2xxx industrial).
        // Gerado por tools/build_mining_legend.py; usado quando a coleção tem legend: 'c11'.
        c11: {
            sldStyle: "<RasterSymbolizer><ColorMap type=\"values\" extended=\"false\"><ColorMapEntry color=\"#ff4500\" quantity=\"1109\" label=\"\" /><ColorMapEntry color=\"#ff4500\" quantity=\"1114\" label=\"\" /><ColorMapEntry color=\"#ff4500\" quantity=\"1115\" label=\"\" /><ColorMapEntry color=\"#cd853f\" quantity=\"1117\" label=\"\" /><ColorMapEntry color=\"#8a2be2\" quantity=\"1124\" label=\"\" /><ColorMapEntry color=\"#8a2be2\" quantity=\"1125\" label=\"\" /><ColorMapEntry color=\"#ff4500\" quantity=\"1138\" label=\"\" /><ColorMapEntry color=\"#778899\" quantity=\"1158\" label=\"\" /><ColorMapEntry color=\"#a9a9a9\" quantity=\"1159\" label=\"\" /><ColorMapEntry color=\"#ff4500\" quantity=\"1209\" label=\"\" /><ColorMapEntry color=\"#ff4500\" quantity=\"1214\" label=\"\" /><ColorMapEntry color=\"#ff4500\" quantity=\"1215\" label=\"\" /><ColorMapEntry color=\"#cd853f\" quantity=\"1217\" label=\"\" /><ColorMapEntry color=\"#8a2be2\" quantity=\"1224\" label=\"\" /><ColorMapEntry color=\"#8a2be2\" quantity=\"1225\" label=\"\" /><ColorMapEntry color=\"#ff4500\" quantity=\"1238\" label=\"\" /><ColorMapEntry color=\"#778899\" quantity=\"1258\" label=\"\" /><ColorMapEntry color=\"#a9a9a9\" quantity=\"1259\" label=\"\" /><ColorMapEntry color=\"#ff8c00\" quantity=\"2102\" label=\"\" /><ColorMapEntry color=\"#ff8c00\" quantity=\"2103\" label=\"\" /><ColorMapEntry color=\"#ff8c00\" quantity=\"2104\" label=\"\" /><ColorMapEntry color=\"#daa520\" quantity=\"2105\" label=\"\" /><ColorMapEntry color=\"#ff8c00\" quantity=\"2106\" label=\"\" /><ColorMapEntry color=\"#ff8c00\" quantity=\"2107\" label=\"\" /><ColorMapEntry color=\"#ff8c00\" quantity=\"2108\" label=\"\" /><ColorMapEntry color=\"#ff8c00\" quantity=\"2109\" label=\"\" /><ColorMapEntry color=\"#ff8c00\" quantity=\"2110\" label=\"\" /><ColorMapEntry color=\"#ff8c00\" quantity=\"2111\" label=\"\" /><ColorMapEntry color=\"#ff8c00\" quantity=\"2112\" label=\"\" /><ColorMapEntry color=\"#ff8c00\" quantity=\"2113\" label=\"\" /><ColorMapEntry color=\"#ff8c00\" quantity=\"2114\" label=\"\" /><ColorMapEntry color=\"#ff8c00\" quantity=\"2115\" label=\"\" /><ColorMapEntry color=\"#daa520\" quantity=\"2117\" label=\"\" /><ColorMapEntry color=\"#daa520\" quantity=\"2118\" label=\"\" /><ColorMapEntry color=\"#daa520\" quantity=\"2119\" label=\"\" /><ColorMapEntry color=\"#daa520\" quantity=\"2120\" label=\"\" /><ColorMapEntry color=\"#daa520\" quantity=\"2121\" label=\"\" /><ColorMapEntry color=\"#daa520\" quantity=\"2122\" label=\"\" /><ColorMapEntry color=\"#9932cc\" quantity=\"2124\" label=\"\" /><ColorMapEntry color=\"#9932cc\" quantity=\"2125\" label=\"\" /><ColorMapEntry color=\"#b22222\" quantity=\"2127\" label=\"\" /><ColorMapEntry color=\"#b22222\" quantity=\"2128\" label=\"\" /><ColorMapEntry color=\"#b22222\" quantity=\"2129\" label=\"\" /><ColorMapEntry color=\"#ff8c00\" quantity=\"2130\" label=\"\" /><ColorMapEntry color=\"#ff8c00\" quantity=\"2131\" label=\"\" /><ColorMapEntry color=\"#ff8c00\" quantity=\"2132\" label=\"\" /><ColorMapEntry color=\"#ff8c00\" quantity=\"2133\" label=\"\" /><ColorMapEntry color=\"#ff8c00\" quantity=\"2134\" label=\"\" /><ColorMapEntry color=\"#ff8c00\" quantity=\"2135\" label=\"\" /><ColorMapEntry color=\"#ff8c00\" quantity=\"2136\" label=\"\" /><ColorMapEntry color=\"#ff8c00\" quantity=\"2137\" label=\"\" /><ColorMapEntry color=\"#ff8c00\" quantity=\"2138\" label=\"\" /><ColorMapEntry color=\"#ff8c00\" quantity=\"2139\" label=\"\" /><ColorMapEntry color=\"#ff8c00\" quantity=\"2142\" label=\"\" /><ColorMapEntry color=\"#ff8c00\" quantity=\"2143\" label=\"\" /><ColorMapEntry color=\"#ff8c00\" quantity=\"2144\" label=\"\" /><ColorMapEntry color=\"#ff8c00\" quantity=\"2145\" label=\"\" /><ColorMapEntry color=\"#ff8c00\" quantity=\"2147\" label=\"\" /><ColorMapEntry color=\"#ff8c00\" quantity=\"2148\" label=\"\" /><ColorMapEntry color=\"#ff8c00\" quantity=\"2149\" label=\"\" /><ColorMapEntry color=\"#ff8c00\" quantity=\"2150\" label=\"\" /><ColorMapEntry color=\"#ff8c00\" quantity=\"2151\" label=\"\" /><ColorMapEntry color=\"#ff8c00\" quantity=\"2152\" label=\"\" /><ColorMapEntry color=\"#daa520\" quantity=\"2153\" label=\"\" /><ColorMapEntry color=\"#daa520\" quantity=\"2154\" label=\"\" /><ColorMapEntry color=\"#daa520\" quantity=\"2155\" label=\"\" /><ColorMapEntry color=\"#daa520\" quantity=\"2156\" label=\"\" /><ColorMapEntry color=\"#daa520\" quantity=\"2157\" label=\"\" /><ColorMapEntry color=\"#708090\" quantity=\"2159\" label=\"\" /><ColorMapEntry color=\"#ff8c00\" quantity=\"2202\" label=\"\" /><ColorMapEntry color=\"#ff8c00\" quantity=\"2203\" label=\"\" /><ColorMapEntry color=\"#ff8c00\" quantity=\"2204\" label=\"\" /><ColorMapEntry color=\"#daa520\" quantity=\"2205\" label=\"\" /><ColorMapEntry color=\"#ff8c00\" quantity=\"2206\" label=\"\" /><ColorMapEntry color=\"#ff8c00\" quantity=\"2208\" label=\"\" /><ColorMapEntry color=\"#ff8c00\" quantity=\"2209\" label=\"\" /><ColorMapEntry color=\"#ff8c00\" quantity=\"2210\" label=\"\" /><ColorMapEntry color=\"#ff8c00\" quantity=\"2211\" label=\"\" /><ColorMapEntry color=\"#ff8c00\" quantity=\"2212\" label=\"\" /><ColorMapEntry color=\"#ff8c00\" quantity=\"2213\" label=\"\" /><ColorMapEntry color=\"#ff8c00\" quantity=\"2214\" label=\"\" /><ColorMapEntry color=\"#ff8c00\" quantity=\"2215\" label=\"\" /><ColorMapEntry color=\"#daa520\" quantity=\"2217\" label=\"\" /><ColorMapEntry color=\"#daa520\" quantity=\"2218\" label=\"\" /><ColorMapEntry color=\"#daa520\" quantity=\"2219\" label=\"\" /><ColorMapEntry color=\"#daa520\" quantity=\"2220\" label=\"\" /><ColorMapEntry color=\"#daa520\" quantity=\"2221\" label=\"\" /><ColorMapEntry color=\"#daa520\" quantity=\"2222\" label=\"\" /><ColorMapEntry color=\"#9932cc\" quantity=\"2224\" label=\"\" /><ColorMapEntry color=\"#9932cc\" quantity=\"2225\" label=\"\" /><ColorMapEntry color=\"#b22222\" quantity=\"2227\" label=\"\" /><ColorMapEntry color=\"#b22222\" quantity=\"2228\" label=\"\" /><ColorMapEntry color=\"#b22222\" quantity=\"2229\" label=\"\" /><ColorMapEntry color=\"#ff8c00\" quantity=\"2230\" label=\"\" /><ColorMapEntry color=\"#ff8c00\" quantity=\"2231\" label=\"\" /><ColorMapEntry color=\"#ff8c00\" quantity=\"2232\" label=\"\" /><ColorMapEntry color=\"#ff8c00\" quantity=\"2233\" label=\"\" /><ColorMapEntry color=\"#ff8c00\" quantity=\"2234\" label=\"\" /><ColorMapEntry color=\"#ff8c00\" quantity=\"2235\" label=\"\" /><ColorMapEntry color=\"#ff8c00\" quantity=\"2236\" label=\"\" /><ColorMapEntry color=\"#ff8c00\" quantity=\"2237\" label=\"\" /><ColorMapEntry color=\"#ff8c00\" quantity=\"2238\" label=\"\" /><ColorMapEntry color=\"#ff8c00\" quantity=\"2239\" label=\"\" /><ColorMapEntry color=\"#ff8c00\" quantity=\"2242\" label=\"\" /><ColorMapEntry color=\"#ff8c00\" quantity=\"2243\" label=\"\" /><ColorMapEntry color=\"#ff8c00\" quantity=\"2244\" label=\"\" /><ColorMapEntry color=\"#ff8c00\" quantity=\"2245\" label=\"\" /><ColorMapEntry color=\"#ff8c00\" quantity=\"2246\" label=\"\" /><ColorMapEntry color=\"#ff8c00\" quantity=\"2247\" label=\"\" /><ColorMapEntry color=\"#ff8c00\" quantity=\"2248\" label=\"\" /><ColorMapEntry color=\"#ff8c00\" quantity=\"2249\" label=\"\" /><ColorMapEntry color=\"#ff8c00\" quantity=\"2250\" label=\"\" /><ColorMapEntry color=\"#ff8c00\" quantity=\"2251\" label=\"\" /><ColorMapEntry color=\"#ff8c00\" quantity=\"2252\" label=\"\" /><ColorMapEntry color=\"#daa520\" quantity=\"2253\" label=\"\" /><ColorMapEntry color=\"#daa520\" quantity=\"2254\" label=\"\" /><ColorMapEntry color=\"#daa520\" quantity=\"2255\" label=\"\" /><ColorMapEntry color=\"#daa520\" quantity=\"2256\" label=\"\" /><ColorMapEntry color=\"#daa520\" quantity=\"2257\" label=\"\" /><ColorMapEntry color=\"#708090\" quantity=\"2259\" label=\"\" /></ColorMap></RasterSymbolizer>",
            className: {
                "1109": "Garimpo/Área Garimpada com Solo Exposto/Metálicos/Cobre",
                "1114": "Garimpo/Área Garimpada com Solo Exposto/Metálicos/Estanho",
                "1115": "Garimpo/Área Garimpada com Solo Exposto/Metálicos/Ouro",
                "1138": "Garimpo/Área Garimpada com Solo Exposto/Metálicos/Elementos Terras Raras",
                "1117": "Garimpo/Área Garimpada com Solo Exposto/Não metálicos/Minerais classe 2",
                "1124": "Garimpo/Área Garimpada com Solo Exposto/Pedras preciosas e rochas ornamentais/Pedras Preciosas",
                "1125": "Garimpo/Área Garimpada com Solo Exposto/Pedras preciosas e rochas ornamentais/Rochas Ornamentais",
                "1159": "Garimpo/Área Garimpada com Solo Exposto/Sem Substância/Sem Substância",
                "1158": "Garimpo/Área Garimpada com Solo Exposto/Atípica/Atípica",
                "1209": "Garimpo/Área Garimpada com Revegetação/Metálicos/Cobre",
                "1214": "Garimpo/Área Garimpada com Revegetação/Metálicos/Estanho",
                "1215": "Garimpo/Área Garimpada com Revegetação/Metálicos/Ouro",
                "1238": "Garimpo/Área Garimpada com Revegetação/Metálicos/Elementos Terras Raras",
                "1217": "Garimpo/Área Garimpada com Revegetação/Não metálicos/Minerais classe 2",
                "1224": "Garimpo/Área Garimpada com Revegetação/Pedras preciosas e rochas ornamentais/Pedras Preciosas",
                "1225": "Garimpo/Área Garimpada com Revegetação/Pedras preciosas e rochas ornamentais/Rochas Ornamentais",
                "1259": "Garimpo/Área Garimpada com Revegetação/Sem Substância/Sem Substância",
                "1258": "Garimpo/Área Garimpada com Revegetação/Atípica/Atípica",
                "2127": "Industrial/Mineração Industrial com Solo Exposto/Energéticos/Carvão Mineral",
                "2128": "Industrial/Mineração Industrial com Solo Exposto/Energéticos/Urânio",
                "2129": "Industrial/Mineração Industrial com Solo Exposto/Energéticos/Gás Natural e Petróleo",
                "2102": "Industrial/Mineração Industrial com Solo Exposto/Metálicos/Ferro",
                "2103": "Industrial/Mineração Industrial com Solo Exposto/Metálicos/Manganês",
                "2104": "Industrial/Mineração Industrial com Solo Exposto/Metálicos/Níquel",
                "2106": "Industrial/Mineração Industrial com Solo Exposto/Metálicos/Molibdênio",
                "2107": "Industrial/Mineração Industrial com Solo Exposto/Metálicos/Titânio",
                "2108": "Industrial/Mineração Industrial com Solo Exposto/Metálicos/Cromo",
                "2109": "Industrial/Mineração Industrial com Solo Exposto/Metálicos/Cobre",
                "2110": "Industrial/Mineração Industrial com Solo Exposto/Metálicos/Alumínio",
                "2111": "Industrial/Mineração Industrial com Solo Exposto/Metálicos/Magnésio",
                "2112": "Industrial/Mineração Industrial com Solo Exposto/Metálicos/Bário",
                "2113": "Industrial/Mineração Industrial com Solo Exposto/Metálicos/Ni",
                "2114": "Industrial/Mineração Industrial com Solo Exposto/Metálicos/Estanho",
                "2115": "Industrial/Mineração Industrial com Solo Exposto/Metálicos/Ouro",
                "2130": "Industrial/Mineração Industrial com Solo Exposto/Metálicos/Zinco",
                "2131": "Industrial/Mineração Industrial com Solo Exposto/Metálicos/Antimônio",
                "2132": "Industrial/Mineração Industrial com Solo Exposto/Metálicos/Arsênio",
                "2133": "Industrial/Mineração Industrial com Solo Exposto/Metálicos/Berílio",
                "2134": "Industrial/Mineração Industrial com Solo Exposto/Metálicos/Bismuto",
                "2135": "Industrial/Mineração Industrial com Solo Exposto/Metálicos/Césio",
                "2136": "Industrial/Mineração Industrial com Solo Exposto/Metálicos/Chumbo",
                "2137": "Industrial/Mineração Industrial com Solo Exposto/Metálicos/Cobalto",
                "2138": "Industrial/Mineração Industrial com Solo Exposto/Metálicos/Elementos Terras Raras",
                "2139": "Industrial/Mineração Industrial com Solo Exposto/Metálicos/Estrôncio",
                "2142": "Industrial/Mineração Industrial com Solo Exposto/Metálicos/Lítio",
                "2143": "Industrial/Mineração Industrial com Solo Exposto/Metálicos/Mercúrio",
                "2144": "Industrial/Mineração Industrial com Solo Exposto/Metálicos/Paládio",
                "2145": "Industrial/Mineração Industrial com Solo Exposto/Metálicos/Platina",
                "2147": "Industrial/Mineração Industrial com Solo Exposto/Metálicos/Prata",
                "2148": "Industrial/Mineração Industrial com Solo Exposto/Metálicos/Rubídio",
                "2149": "Industrial/Mineração Industrial com Solo Exposto/Metálicos/Sódio",
                "2150": "Industrial/Mineração Industrial com Solo Exposto/Metálicos/Tungstênio",
                "2151": "Industrial/Mineração Industrial com Solo Exposto/Metálicos/Vanádio",
                "2152": "Industrial/Mineração Industrial com Solo Exposto/Metálicos/Zircônio",
                "2117": "Industrial/Mineração Industrial com Solo Exposto/Não metálicos/Minerais classe 2",
                "2118": "Industrial/Mineração Industrial com Solo Exposto/Não metálicos/Flúor",
                "2119": "Industrial/Mineração Industrial com Solo Exposto/Não metálicos/Fósforo",
                "2120": "Industrial/Mineração Industrial com Solo Exposto/Não metálicos/Grafita",
                "2121": "Industrial/Mineração Industrial com Solo Exposto/Não metálicos/Silício",
                "2122": "Industrial/Mineração Industrial com Solo Exposto/Não metálicos/Calcário",
                "2154": "Industrial/Mineração Industrial com Solo Exposto/Não metálicos/Bromo",
                "2155": "Industrial/Mineração Industrial com Solo Exposto/Não metálicos/Caulim",
                "2156": "Industrial/Mineração Industrial com Solo Exposto/Não metálicos/Enxofre",
                "2157": "Industrial/Mineração Industrial com Solo Exposto/Não metálicos/Fosfato",
                "2105": "Industrial/Mineração Industrial com Solo Exposto/Não metálicos/Amianto",
                "2153": "Industrial/Mineração Industrial com Solo Exposto/Não metálicos/Água",
                "2124": "Industrial/Mineração Industrial com Solo Exposto/Pedras preciosas e rochas ornamentais/Pedras Preciosas",
                "2125": "Industrial/Mineração Industrial com Solo Exposto/Pedras preciosas e rochas ornamentais/Rochas Ornamentais",
                "2159": "Industrial/Mineração Industrial com Solo Exposto/Sem Substância/Sem Substância",
                "2227": "Industrial/Mineração Industrial com Revegetação/Energéticos/Carvão Mineral",
                "2228": "Industrial/Mineração Industrial com Revegetação/Energéticos/Urânio",
                "2229": "Industrial/Mineração Industrial com Revegetação/Energéticos/Gás Natural e Petróleo",
                "2202": "Industrial/Mineração Industrial com Revegetação/Metálicos/Ferro",
                "2203": "Industrial/Mineração Industrial com Revegetação/Metálicos/Manganês",
                "2204": "Industrial/Mineração Industrial com Revegetação/Metálicos/Níquel",
                "2206": "Industrial/Mineração Industrial com Revegetação/Metálicos/Titânio",
                "2208": "Industrial/Mineração Industrial com Revegetação/Metálicos/Cromo",
                "2209": "Industrial/Mineração Industrial com Revegetação/Metálicos/Cobre",
                "2210": "Industrial/Mineração Industrial com Revegetação/Metálicos/Alumínio",
                "2211": "Industrial/Mineração Industrial com Revegetação/Metálicos/Magnésio",
                "2212": "Industrial/Mineração Industrial com Revegetação/Metálicos/Bário",
                "2213": "Industrial/Mineração Industrial com Revegetação/Metálicos/Nióbio",
                "2214": "Industrial/Mineração Industrial com Revegetação/Metálicos/Estanho",
                "2215": "Industrial/Mineração Industrial com Revegetação/Metálicos/Ouro",
                "2230": "Industrial/Mineração Industrial com Revegetação/Metálicos/Zinco",
                "2231": "Industrial/Mineração Industrial com Revegetação/Metálicos/Antimônio",
                "2232": "Industrial/Mineração Industrial com Revegetação/Metálicos/Arsênio",
                "2233": "Industrial/Mineração Industrial com Revegetação/Metálicos/Berílio",
                "2234": "Industrial/Mineração Industrial com Revegetação/Metálicos/Bismuto",
                "2235": "Industrial/Mineração Industrial com Revegetação/Metálicos/Césio",
                "2236": "Industrial/Mineração Industrial com Revegetação/Metálicos/Chumbo",
                "2237": "Industrial/Mineração Industrial com Revegetação/Metálicos/Cobalto",
                "2238": "Industrial/Mineração Industrial com Revegetação/Metálicos/Elementos Terras Raras",
                "2239": "Industrial/Mineração Industrial com Revegetação/Metálicos/Estrôncio",
                "2242": "Industrial/Mineração Industrial com Revegetação/Metálicos/Lítio",
                "2243": "Industrial/Mineração Industrial com Revegetação/Metálicos/Mercúrio",
                "2244": "Industrial/Mineração Industrial com Revegetação/Metálicos/Paládio",
                "2245": "Industrial/Mineração Industrial com Revegetação/Metálicos/Platina",
                "2246": "Industrial/Mineração Industrial com Revegetação/Metálicos/Potássio",
                "2247": "Industrial/Mineração Industrial com Revegetação/Metálicos/Prata",
                "2248": "Industrial/Mineração Industrial com Revegetação/Metálicos/Rubídio",
                "2249": "Industrial/Mineração Industrial com Revegetação/Metálicos/Sódio",
                "2250": "Industrial/Mineração Industrial com Revegetação/Metálicos/Tungstênio",
                "2251": "Industrial/Mineração Industrial com Revegetação/Metálicos/Vanádio",
                "2252": "Industrial/Mineração Industrial com Revegetação/Metálicos/Zircônio",
                "2217": "Industrial/Mineração Industrial com Revegetação/Não metálicos/Minerais classe 2",
                "2218": "Industrial/Mineração Industrial com Revegetação/Não metálicos/Flúor",
                "2219": "Industrial/Mineração Industrial com Revegetação/Não metálicos/Fósforo",
                "2220": "Industrial/Mineração Industrial com Revegetação/Não metálicos/Grafita",
                "2221": "Industrial/Mineração Industrial com Revegetação/Não metálicos/Silício",
                "2222": "Industrial/Mineração Industrial com Revegetação/Não metálicos/Calcário",
                "2254": "Industrial/Mineração Industrial com Revegetação/Não metálicos/Bromo",
                "2255": "Industrial/Mineração Industrial com Revegetação/Não metálicos/Caulim",
                "2256": "Industrial/Mineração Industrial com Revegetação/Não metálicos/Enxofre",
                "2257": "Industrial/Mineração Industrial com Revegetação/Não metálicos/Fosfato",
                "2205": "Industrial/Mineração Industrial com Revegetação/Não metálicos/Amianto",
                "2253": "Industrial/Mineração Industrial com Revegetação/Não metálicos/Água",
                "2224": "Industrial/Mineração Industrial com Revegetação/Pedras preciosas e rochas ornamentais/Pedras Preciosas",
                "2225": "Industrial/Mineração Industrial com Revegetação/Pedras preciosas e rochas ornamentais/Rochas Ornamentais",
                "2259": "Industrial/Mineração Industrial com Revegetação/Sem Substância/Sem Substância"
            },
            legend: [
                {
                    "title": "Garimpo — Área Garimpada com Solo Exposto",
                    "layers": [
                        [
                            "#ff4500",
                            null,
                            "Metálicos"
                        ],
                        [
                            "#cd853f",
                            null,
                            "Não metálicos"
                        ],
                        [
                            "#8a2be2",
                            null,
                            "Pedras preciosas e rochas ornamentais"
                        ],
                        [
                            "#a9a9a9",
                            null,
                            "Sem Substância"
                        ],
                        [
                            "#778899",
                            null,
                            "Atípica"
                        ]
                    ],
                    "style": {
                        "backgroundColor": "#ffffff",
                        "color": "#212121"
                    },
                    "orientation": "vertical"
                },
                {
                    "title": "Garimpo — Área Garimpada com Revegetação",
                    "layers": [
                        [
                            "#ff4500",
                            null,
                            "Metálicos"
                        ],
                        [
                            "#cd853f",
                            null,
                            "Não metálicos"
                        ],
                        [
                            "#8a2be2",
                            null,
                            "Pedras preciosas e rochas ornamentais"
                        ],
                        [
                            "#a9a9a9",
                            null,
                            "Sem Substância"
                        ],
                        [
                            "#778899",
                            null,
                            "Atípica"
                        ]
                    ],
                    "style": {
                        "backgroundColor": "#ffffff",
                        "color": "#212121"
                    },
                    "orientation": "vertical"
                },
                {
                    "title": "Industrial — Mineração Industrial com Solo Exposto",
                    "layers": [
                        [
                            "#b22222",
                            null,
                            "Energéticos"
                        ],
                        [
                            "#ff8c00",
                            null,
                            "Metálicos"
                        ],
                        [
                            "#daa520",
                            null,
                            "Não metálicos"
                        ],
                        [
                            "#9932cc",
                            null,
                            "Pedras preciosas e rochas ornamentais"
                        ],
                        [
                            "#708090",
                            null,
                            "Sem Substância"
                        ]
                    ],
                    "style": {
                        "backgroundColor": "#ffffff",
                        "color": "#212121"
                    },
                    "orientation": "vertical"
                },
                {
                    "title": "Industrial — Mineração Industrial com Revegetação",
                    "layers": [
                        [
                            "#b22222",
                            null,
                            "Energéticos"
                        ],
                        [
                            "#ff8c00",
                            null,
                            "Metálicos"
                        ],
                        [
                            "#daa520",
                            null,
                            "Não metálicos"
                        ],
                        [
                            "#9932cc",
                            null,
                            "Pedras preciosas e rochas ornamentais"
                        ],
                        [
                            "#708090",
                            null,
                            "Sem Substância"
                        ]
                    ],
                    "style": {
                        "backgroundColor": "#ffffff",
                        "color": "#212121"
                    },
                    "orientation": "vertical"
                }
            ]
        },
    },

    init: function () {

        this.ui.init();

    },

    /**
     * Estilo, nomes de classe e legenda da coleção selecionada: a C11 usa o
     * conjunto `c11` (códigos de 4 dígitos), as anteriores os originais.
     */
    styleSet: function () {
        var collection = App.options.collections[App.options.selectedRegion || 'mapbiomas-brazil'][App.options.selectedCollection];
        if (collection && collection.legend === 'c11') {
            return App.options.c11;
        }
        return {
            'sldStyle': App.options.sldStyle,
            'className': App.options.className.mined_substance,
            'legend': App.options.legend.params
        };
    },

    /**
     * Nome curto do território ativo para camadas e arquivos exportados. Os vetores
     * ingeridos pela plataforma terminam num UUID, então usamos o rótulo da tabela.
     */
    tableShortName: function () {
        var path = App.options.activeName;
        var label = null;

        Object.keys(App.options.tables).forEach(function (region) {
            App.options.tables[region].forEach(function (table) {
                if (table.value === path) {
                    label = table.label;
                }
            });
        });

        if (label === null) {
            return path.split('/').slice(-1)[0];
        }

        // o Code Editor não tem String.prototype.normalize (ES5)
        return label.toLowerCase()
            .replace(/[áàâãä]/g, 'a').replace(/[éèêë]/g, 'e').replace(/[íìîï]/g, 'i')
            .replace(/[óòôõö]/g, 'o').replace(/[úùûü]/g, 'u').replace(/ç/g, 'c').replace(/ñ/g, 'n')
            .replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '');
    },

    setVersion: function () {

        App.ui.form.labelTitle.setValue('MapBiomas User Toolkit ' + App.options.version);

    },

    startMap: function (year) {

        Map.centerObject(App.options.data.mined_substance, 5);

        var imageLayer = ui.Map.Layer({
            'eeObject': App.options.data.mined_substance
                .select('mined_substance_' + year)
                .sldStyle(App.styleSet().sldStyle),
            'visParams': {
                // 'bands': ['mined_substance_' + year],
                // 'palette': App.options.palette.mined_substance,
                // 'min': App.options.ranges.mined_substance.min,
                // 'max': App.options.ranges.mined_substance.max,
                'format': 'png'
            },
            'name': 'Mined Substance',
            'shown': true,
            'opacity': 1.0
        });

        App.ui.clear();

        Map.setOptions({
            'styles': {
                'Dark': mapp.getStyle('Dark')
            }
        });

        Map.add(imageLayer);

    },

    formatName: function (name) {

        var formated = name
            .toLowerCase()
            .replace(/á/g, 'a')
            .replace(/à/g, 'a')
            .replace(/â/g, 'a')
            .replace(/ã/g, 'a')
            .replace(/ä/g, 'a')
            .replace(/ª/g, 'a')
            .replace(/é/g, 'e')
            .replace(/ê/g, 'e')
            .replace(/í/g, 'i')
            .replace(/ó/g, 'o')
            .replace(/ô/g, 'o')
            .replace(/õ/g, 'o')
            .replace(/ú/g, 'u')
            .replace(/û/g, 'u')
            .replace(/ũ/g, 'u')
            .replace(/ç/g, 'c')
            .replace(/ñ/g, 'n')
            .replace(/&/g, '')
            .replace(/@/g, '')
            .replace(/ /g, '')
            .replace(/["'()\/]/g, '');

        return formated;
    },

    ui: {

        init: function () {

            this.form.init();

        },

        clear: function () {
            Map.clear();

            Map.setOptions({
                'styles': {
                    'Dark': mapp.getStyle('Dark')
                }
            });
        },

        setMapbiomasRegion: function (regionName) {

            App.ui.loadCollectionList(regionName);
            App.ui.loadTablesNames(regionName);

        },

        setDataType: function (dataType) {

            App.options.dataType = dataType;

        },

        loadLegend: function () {

            App.ui.form.panelLegend.clear();

            App.styleSet().legend.forEach(
                function (params) {
                    App.ui.form.panelLegend.add(legend.getLegend(params));
                }
            );
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

                            App.options.selectedRegion = regionName;
                            App.options.selectedCollection = collectioName;

                            // a C11 publica as bandas como classification_YYYY
                            App.options.data.mined_substance = ee.Image(collection.assets.mined_substance)
                                .regexpRename('^classification', 'mined_substance');

                            App.ui.loadLegend();

                            var year = App.options.collections[regionName][collectioName]
                                .periods.mined_substance.slice(-1)[0];

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
                                    App.tableShortName(),
                                    App.options.activeFeature,
                                    App.options.collections[regionName][collectioName]
                                        .periods[App.options.dataType]
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

        loadPropertiesNames: function () {

            App.ui.form.selectProperties.setPlaceholder('loading tables names...');

            ee.Feature(App.options.table.first())
                .propertyNames()
                .evaluate(
                    function (propertyNames) {

                        // print(propertyNames);

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

        loadFeature: function (name) {

            App.options.activeFeature = App.options.table
                .filterMetadata(App.options.propertyName, 'equals', name);

            Map.centerObject(App.options.activeFeature);

            App.ui.clear();

            Map.addLayer(App.options.activeFeature.style({
                color: 'ff0000',
                width: 1,
                fillColor: 'ff000033',
            }), {},
                name,
                true);

        },

        addImageLayer: function (period, label, region) {


            var image = App.options.data[App.options.dataType]
                .select([App.options.bandsNames[App.options.dataType] + '_' + period])
                .clip(region);

            var imageLayer = ui.Map.Layer({
                'eeObject': image.selfMask().sldStyle(App.styleSet().sldStyle),
                'visParams': {
                    // 'palette': App.options.palette[App.options.dataType],
                    // 'min': App.options.ranges[App.options.dataType].min,
                    // 'max': App.options.ranges[App.options.dataType].max,
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
            // print(regionName, region, periods)
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

        loadingBox: function () {
            App.ui.form.loadingBox = ui.Panel();
            App.ui.form.loadingBox.add(ui.Label('Loading...'));

            Map.add(App.ui.form.loadingBox);
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

                    var fileName = [regionName, collectionName, App.options.dataType, featureName, period].join('-');

                    fileName = fileName.replace(/--/g, '-').replace(/--/g, '-').replace('.', '').replace('_', '-');
                    fileName = App.formatName(fileName);

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
                        "unit": 'kilometers^2'
                    });

                    area = ee.FeatureCollection(area).map(
                        function (feature) {

                            var className = ee.Dictionary(App.styleSet().className)
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

            var tableName = [regionName, collectionName, App.options.dataType, featureName, 'area'].join('-');

            tableName = tableName.replace(/--/g, '-').replace(/--/g, '-').replace('.', '').replace('_', '-');
            tableName = App.formatName(tableName);

            Export.table.toDrive({
                'collection': areas,
                'description': tableName,
                'folder': 'MAPBIOMAS-EXPORT',
                'fileNamePrefix': tableName,
                'fileFormat': 'CSV',
                'selectors': [
                    'class_name',
                    'class',
                    'band',
                    'area',
                    'unit'
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

                App.ui.form.panelMain.add(App.ui.form.panelLogo);

                App.ui.form.panelMain.add(App.ui.form.labelTitle);
                App.ui.form.panelMain.add(App.ui.form.labelSubtitle);
                // App.ui.form.panelMain.add(App.ui.form.labelLink);  // substituído pelo link único para os arquivos de legenda
                App.ui.form.panelMain.add(App.ui.form.labelLegendFiles);

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

                App.ui.loadLegend();

                // this.panelMain.add(this.panelType);
                App.ui.form.panel1.add(App.ui.form.panelRegion);
                App.ui.form.panel1.add(App.ui.form.panelCollection);
                App.ui.form.panel1.add(App.ui.form.panelFeatureCollections);
                App.ui.form.panel1.add(App.ui.form.panelStates);
                App.ui.form.panel1.add(App.ui.form.panelProperties);
                App.ui.form.panel1.add(App.ui.form.panelFeature);
                App.ui.form.panel1.add(App.ui.form.panelDataType);
                App.ui.form.panel1.add(App.ui.form.panelLegend);
                App.ui.form.panel1.add(App.ui.form.panelBuffer);

                App.ui.form.panel1.add(App.ui.form.labelLayers);
                App.ui.form.panel1.add(App.ui.form.panelLayersList);

                App.ui.form.panel1.add(App.ui.form.buttonExport2Drive);
                App.ui.form.panel1.add(App.ui.form.labelNotes);

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

            labelSubtitle: ui.Label('Mining', {
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
                    'mined_substance',
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
                        App.ui.form.panelMain.add(App.ui.form.panel2);
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
                    ui.Label('Brazil'),
                    ui.Panel({
                        widgets: [
                            ui.Label({ value: 'Data will be available soon', targetUrl: '' }),
                            // ui.Label({ value: '1985-2022 (shp)', targetUrl: '' }),
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