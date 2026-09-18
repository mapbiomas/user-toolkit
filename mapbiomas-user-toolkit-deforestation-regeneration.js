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
 *    1.0.0 - Data from collection 5.0
 *    1.1.0 - Data from collection 6.0
 *    1.2.0 - Data from collection 7.0
 *    1.3.0 - Data from collection 7.1
 *    1.4.0 - Data from collection 8.0
 *    1.5.0 - Data from collection 9.0
 *    1.6.0 - Data from collection 10.1
 *    1.7.0 - Loads mapbiomas-brazil collection 11.0 and fixes collection 10.1 classes
 *          - Loads peru 4.0, bolivia 3.0, uruguay 3.0, paraguay 3.0 and argentina 2.0
 *          - Class encoding per collection; territories from the MapBiomas platform
 *    1.7.1 - Link to legend files (QGIS, ArcGIS Pro, SLD, CSV)
 *    1.7.2 - New toolkit logo; single link to the legend files on GitHub
 * 
 * @see
 *      Get the MapBiomas exported data in your "Google Drive/MAPBIOMAS-EXPORT" folder
 *      Code and Tutorial - https://github.com/mapbiomas-brazil/user-toolkit
 */

var palettes = require('users/mapbiomas/modules:Palettes.js');
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
                    return feature.set("unit", object.unit);
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

        version: '1.7.2',

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
            'mapbiomas-colombia': [
                {
                    'label': 'Biomes',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/COLOMBIA/WORKSPACE/BIOMES/BIOMES_v1',
                },
                {
                    'label': 'Country',
                    'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/colombia/territories/NIVEL_POLITICO_1_702287F6/a8e40af2-14e4-4286-8ba2-498ebbd6213f',
                },
                {
                    'label': 'Departmental Protected Areas',
                    'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/colombia/territories/AREA_NATURAL_PROTEGIDA_DEPARTAMENTAL_3A57466D/d7d6e181-fa6e-4195-b05a-d0f040b579f6',
                },
                {
                    'label': 'Indigenous Reserve',
                    'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/colombia/territories/RESGUARDO_INDIGENA_20EEC6ED/3b6a3676-3ccc-4890-bc95-48d3d0f65dad',
                },
                {
                    'label': 'National Protected Areas',
                    'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/colombia/territories/AREA_NATURAL_PROTEGIDA_NACIONAL_82D4B280/e122952e-631e-4a22-bc00-dc4a1822ec42',
                },
                {
                    'label': 'Political Level - 1',
                    'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/colombia/territories/NIVEL_POLITICO_1_0C5BADC9/a8e40af2-14e4-4286-8ba2-498ebbd6213f',
                },
            ],
            'mapbiomas-peru': [
                {
                    'label': 'Afforestation and Reforestation Concession',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/PERU/WORKSPACE/AFFORESTATION_AND_REFORESTATION_CONCESSION/AFFORESTATION_AND_REFORESTATION_CONCESSION_v1',
                },
                {
                    'label': 'Biome',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/PERU/WORKSPACE/BIOMES/BIOMES_v1',
                },
                {
                    'label': 'Biosphere Reserve',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/PERU/WORKSPACE/RESERVA_DA_BIOSFERA/RESERVA_DA_BIOSFERA_v1',
                },
                {
                    'label': 'Conservation Concession',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/PERU/WORKSPACE/CONSERVATION_CONCESSION/CONSERVATION_CONCESSION_v1',
                },
                {
                    'label': 'Country',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/PERU/WORKSPACE/POLITICAL_LEVEL_1/POLITICAL_LEVEL_1_v1',
                },
                {
                    'label': 'District',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/PERU/WORKSPACE/POLITICAL_LEVEL_4/POLITICAL_LEVEL_4_v1',
                },
                {
                    'label': 'Ecoregion',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/PERU/WORKSPACE/ECORREGION/ECORREGION_v1',
                },
                {
                    'label': 'Ecotourism Concession',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/PERU/WORKSPACE/ECOTOURISM_CONCESSION/ECOTOURISM_CONCESSION_v1',
                },
                {
                    'label': 'Ecozone',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/PERU/WORKSPACE/ECOZONE/ECOZONE_v1',
                },
                {
                    'label': 'Forest Concession for Timber Production',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/PERU/WORKSPACE/TIMBER_CONCESSION/TIMBER_CONCESSION_v1',
                },
                {
                    'label': 'Fragile ecosystem',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/PERU/WORKSPACE/FRAGILE_ECOSYSTEM/FRAGILE_ECOSYSTEM_v1',
                },
                {
                    'label': 'Geographical region',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/PERU/WORKSPACE/REGION_GEOGRAFICA/REGION_GEOGRAFICA_v1',
                },
                {
                    'label': 'Local Forest',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/PERU/WORKSPACE/LOCAL_FOREST/LOCAL_FOREST_v1',
                },
                {
                    'label': 'Mountain Ranges',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/PERU/WORKSPACE/MOUNTAIN_RANGES/MOUNTAIN_RANGES_v1',
                },
                {
                    'label': 'Permanent Production Forest',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/PERU/WORKSPACE/PERMANENT_PRODUCTION_FOREST/PERMANENT_PRODUCTION_FOREST_v1',
                },
                {
                    'label': 'Private Conservation Area',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/PERU/WORKSPACE/PRIVATE_CONSERVATION_AREAS/PRIVATE_CONSERVATION_AREAS_v1',
                },
                {
                    'label': 'Province',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/PERU/WORKSPACE/POLITICAL_LEVEL_3/POLITICAL_LEVEL_3_v2',
                },
                {
                    'label': 'Recognized Peasant Community',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/PERU/WORKSPACE/RECOGNIZED_PEASANT_COMMUNITY/RECOGNIZED_PEASANT_COMMUNITY_v1',
                },
                {
                    'label': 'Region',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/PERU/WORKSPACE/POLITICAL_LEVEL_2/POLITICAL_LEVEL_2_v1',
                },
                {
                    'label': 'Regional Conservation Area',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/PERU/WORKSPACE/REGIONAL_CONSERVATION_AREAS/REGIONAL_CONSERVATION_AREAS_v1',
                },
                {
                    'label': 'Reserva Indígena',
                    'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/peru/territories/RESERVA_INDIGENA_6E4F75E5/faf9488e-579f-484b-93d6-25bfdff3b107',
                },
                {
                    'label': 'Solicitud de titulación',
                    'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/peru/territories/SOLICITUD_DE_TITULACION_4ACD554F/675c0402-f60a-4325-9ebb-456fc6783311',
                },
                {
                    'label': 'Territorial reserve',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/PERU/WORKSPACE/LAND_RESERVE/LAND_RESERVE_v1',
                },
                {
                    'label': 'Titled Native Community',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/PERU/WORKSPACE/TITLED_NATIVE_COMMUNITY/TITLED_NATIVE_COMMUNITY_v1',
                },
                {
                    'label': 'Watershed level 1',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/PERU/WORKSPACE/BASIN_LEVEL_1/BASIN_LEVEL_1_v1',
                },
                {
                    'label': 'Watershed level 2',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/PERU/WORKSPACE/BASIN_LEVEL_2/BASIN_LEVEL_2_v1',
                },
                {
                    'label': 'Watershed level 3',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/PERU/WORKSPACE/BASIN_LEVEL_3/BASIN_LEVEL_3_v1',
                },
                {
                    'label': 'Watershed level 4',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/PERU/WORKSPACE/BASIN_LEVEL_4/BASIN_LEVEL_4_v1',
                },
                {
                    'label': 'Wildlife Management Area Concession',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/PERU/WORKSPACE/WILDLIFE_MANAGEMENT_AREA_CONCESSION/WILDLIFE_MANAGEMENT_AREA_CONCESSION_v1',
                },
                {
                    'label': 'Zona de amortiguamiento',
                    'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/peru/territories/ZONA_DE_AMORTIGUAMIENTO_7FAB1B05/e378dcab-fca7-4bdc-95fd-07ec69cb3d17',
                },
                {
                    'label': 'Área natural protegida',
                    'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/peru/territories/AREA_NATURAL_PROTEGIDA_76E84300/a3d27bcf-5e0b-4321-8ce9-91e369030435',
                },
            ],
            'mapbiomas-bolivia': [
                {
                    'label': 'Basin Level 1',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/BOLIVIA/WORKSPACE/CH_LEVEL_1/CH_LEVEL_1_v2',
                },
                {
                    'label': 'Basin Level 2',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/BOLIVIA/WORKSPACE/CH_LEVEL_2/CH_LEVEL_2_v2',
                },
                {
                    'label': 'Biome',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/BOLIVIA/WORKSPACE/BIOMES/BIOMES_v1',
                },
                {
                    'label': 'Country',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/BOLIVIA/WORKSPACE/POLITICAL_LEVEL_1/POLITICAL_LEVEL_1_v1',
                },
                {
                    'label': 'Department',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/BOLIVIA/WORKSPACE/POLITICAL_LEVEL_2/POLITICAL_LEVEL_2_v2',
                },
                {
                    'label': 'Ecoregion',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/BOLIVIA/WORKSPACE/ECORREGION/ECORREGION_v1',
                },
                {
                    'label': 'Indigenous Territory',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/BOLIVIA/WORKSPACE/INDIGENOUS_TERRITORIES/INDIGENOUS_TERRITORIES_v2',
                },
                {
                    'label': 'Municipality',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/BOLIVIA/WORKSPACE/POLITICAL_LEVEL_3/POLITICAL_LEVEL_3_v2',
                },
                {
                    'label': 'National Protected Area',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/BOLIVIA/WORKSPACE/PROTECTED_AREAS_NACIONALES/PROTECTED_AREAS_NACIONALES_v2',
                },
                {
                    'label': 'Ramsar Sites',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/BOLIVIA/WORKSPACE/RAMSAR_SITES/RAMSAR_SITES_v2',
                },
                {
                    'label': 'Subnational Protected Area',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/BOLIVIA/WORKSPACE/PROTECTED_AREA_SUBNATIONAL/PROTECTED_AREA_SUBNATIONAL_v2',
                },
            ],
            'mapbiomas-uruguay': [
                {
                    'label': 'Country',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/URUGUAY/WORKSPACE/POLITICAL_LEVEL_1/POLITICAL_LEVEL_1_v4',
                },
                {
                    'label': 'Department',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/URUGUAY/WORKSPACE/POLITICAL_LEVEL_2/POLITICAL_LEVEL_2_v4',
                },
                {
                    'label': 'Ecoregion',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/URUGUAY/WORKSPACE/ECORREGION/ECORREGION_v2',
                },
                {
                    'label': 'Level 1 Watershed',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/URUGUAY/WORKSPACE/BASIN_LEVEL_1/BASIN_LEVEL_1_v1',
                },
                {
                    'label': 'Level 2 Watershed',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/URUGUAY/WORKSPACE/BASIN_LEVEL_2/BASIN_LEVEL_2_v3',
                },
                {
                    'label': 'Municipality',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/URUGUAY/WORKSPACE/POLITICAL_LEVEL_3/POLITICAL_LEVEL_3_v2',
                },
            ],
            'mapbiomas-paraguay': [
                {
                    'label': 'Ecorregiones Dinerstein (DINERTTEIN, 1995)',
                    'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/paraguay/territories/ECORREGIONES_DINERSTEIN_DINERTTEIN_1995_5BDBA83B/1f599108-9da4-4b94-adc4-4f5746d7889a',
                },
                {
                    'label': 'Ecorregiones Paraguay (SEAM, 2013)',
                    'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/paraguay/territories/ECORREGIONES_PARAGUAY_SEAM_2013_576969F6/02c84b77-2754-42fc-a847-8127997ba4b0',
                },
                {
                    'label': 'Nivel Politico 1 (Servicio Nacional de Catastro, 2024)',
                    'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/paraguay/territories/NIVEL_POLITICO_1_SERVICIO_NACIONAL_DE_CATASTRO_2024_1C3C87EF/1b0759e9-76c6-4b3d-9127-db1772da0683',
                },
                {
                    'label': 'Nivel Politico 2 (Servicio Nacional de Catastro, 2024)',
                    'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/paraguay/territories/NIVEL_POLITICO_2_SERVICIO_NACIONAL_DE_CATASTRO_2024_BF678EE7/968a3bcd-e17a-4dc1-9fdc-a95a39c3e770',
                },
                {
                    'label': 'Nivel Politico 3 (Servicio Nacional de Catastro, 2024)',
                    'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/paraguay/territories/NIVEL_POLITICO_3_SERVICIO_NACIONAL_DE_CATASTRO_2024_F0C8BC32/002a36c2-4bba-498a-bbd1-a7945d730651',
                },
                {
                    'label': 'Reserva de la Biosfera (Ministerio del Ambiente y Desarrollo Sostenible, 2022)',
                    'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/paraguay/territories/RESERVA_DE_LA_BIOSFERA_MINISTERIO_DEL_AMBIENTE_Y_DESARROLLO_SOSTENIBLE_2022_FC4291BD/d7f52f57-d24c-4113-9e6e-09903433d45f',
                },
                {
                    'label': 'Sitios Ramsar (WWF, 2013)',
                    'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/paraguay/territories/SITIOS_RAMSAR_WWF_2013_A5FE46D6/3aff578c-ff21-4963-9a69-be4d93b81ab1',
                },
                {
                    'label': 'Territorios Indígenas (Federación por la Autodeterminación de los Pueblos Indígenas, 2017)',
                    'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/paraguay/territories/TERRITORIOS_INDIGENAS_FEDERACION_POR_LA_AUTODETERMINACION_DE_LOS_PUEBLOS_INDIGENAS_2017_812392F7/0e281a13-900f-4d1c-ad64-cf572f14a326',
                },
                {
                    'label': 'Área Silvestre Protegida (Ministerio del Ambiente y Desarrollo Sostenible, 2022)',
                    'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/paraguay/territories/AREA_SILVESTRE_PROTEGIDA_MINISTERIO_DEL_AMBIENTE_Y_DESARROLLO_SOSTENIBLE_2022_7DDE49F3/e16a8ee9-24c4-44c8-88b0-4b6b2dc86d1d',
                },
            ],
            'mapbiomas-argentina': [
                {
                    'label': 'Country',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/ARGENTINA/WORKSPACE/POLITICAL_LEVEL_1/POLITICAL_LEVEL_1_v3',
                },
                {
                    'label': 'Department',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/ARGENTINA/WORKSPACE/POLITICAL_LEVEL_3/POLITICAL_LEVEL_3_v4',
                },
                {
                    'label': 'Ecoregions',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/ARGENTINA/WORKSPACE/ECORREGION/ECORREGION_v5',
                },
                {
                    'label': 'Important Bird Areas',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/ARGENTINA/WORKSPACE/IMPORTANT_BIRD_AREAS/IMPORTANT_BIRD_AREAS_v5',
                },
                {
                    'label': 'International Protected Areas',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/ARGENTINA/WORKSPACE/INTERNATIONAL_PROTECTED_AREAS/INTERNATIONAL_PROTECTED_AREAS_v5',
                },
                {
                    'label': 'Key Biodiversity Areas',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/ARGENTINA/WORKSPACE/KEY_BIODIVERSITY_AREAS/KEY_BIODIVERSITY_AREAS_v5',
                },
                {
                    'label': 'National Protected Areas',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/ARGENTINA/WORKSPACE/PROTECTED_AREAS_NACIONALES/PROTECTED_AREAS_NACIONALES_v5',
                },
                {
                    'label': 'Province',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/ARGENTINA/WORKSPACE/POLITICAL_LEVEL_2/POLITICAL_LEVEL_2_v3',
                },
                {
                    'label': 'River Basins (Level 1)',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/ARGENTINA/WORKSPACE/BASIN_LEVEL_1/BASIN_LEVEL_1_v5',
                },
                {
                    'label': 'Subnational Protected Areas',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/ARGENTINA/WORKSPACE/PROTECTED_AREA_SUBNATIONAL/PROTECTED_AREA_SUBNATIONAL_v5',
                },
            ],
        },

        selectedRegion: null,
        selectedCollection: null,
        selectedDataType: null,

        collections: {
            'mapbiomas-brazil': {
                'collection-5.0': {
                    'assets': {
                        'deforestation_sec_vegetation': 'projects/mapbiomas-public/assets/brazil/lulc/collection5/mapbiomas_collection50_deforestation_regeneration_v1',
                    },
                    'periods': {
                        'deforestation_sec_vegetation': [
                            '1988', '1989', '1990', '1991',
                            '1992', '1993', '1994', '1995',
                            '1996', '1997', '1998', '1999',
                            '2000', '2001', '2002', '2003',
                            '2004', '2005', '2006', '2007',
                            '2008', '2009', '2010', '2011',
                            '2012', '2013', '2014', '2015',
                            '2016', '2017'
                        ],
                        'secondary_vegetation': [
                            '1988', '1989', '1990', '1991',
                            '1992', '1993', '1994', '1995',
                            '1996', '1997', '1998', '1999',
                            '2000', '2001', '2002', '2003',
                            '2004', '2005', '2006', '2007',
                            '2008', '2009', '2010', '2011',
                            '2012', '2013', '2014', '2015',
                            '2016', '2017'
                        ],
                        'secondary_vegetation_age': [
                            '1988', '1989', '1990', '1991',
                            '1992', '1993', '1994', '1995',
                            '1996', '1997', '1998', '1999',
                            '2000', '2001', '2002', '2003',
                            '2004', '2005', '2006', '2007',
                            '2008', '2009', '2010', '2011',
                            '2012', '2013', '2014', '2015',
                            '2016', '2017'
                        ],
                        'deforestation_sv': [
                            '1988', '1989', '1990', '1991',
                            '1992', '1993', '1994', '1995',
                            '1996', '1997', '1998', '1999',
                            '2000', '2001', '2002', '2003',
                            '2004', '2005', '2006', '2007',
                            '2008', '2009', '2010', '2011',
                            '2012', '2013', '2014', '2015',
                            '2016', '2017'
                        ],
                        'deforestation_pv': [
                            'deforestation_pv_year',
                        ],
                    },
                    'encoding': 'x100',
                },
                'collection-6.0': {
                    'assets': {
                        'deforestation_sec_vegetation': 'projects/mapbiomas-public/assets/brazil/lulc/collection6/mapbiomas_collection60_deforestation_regeneration_v1',
                    },
                    'periods': {
                        'deforestation_sec_vegetation': [
                            '1987', '1988', '1989', '1990',
                            '1991', '1992', '1993', '1994',
                            '1995', '1996', '1997', '1998',
                            '1999', '2000', '2001', '2002',
                            '2003', '2004', '2005', '2006',
                            '2007', '2008', '2009', '2010',
                            '2011', '2012', '2013', '2014',
                            '2015', '2016', '2017', '2018',
                            '2019'
                        ],
                        'secondary_vegetation': [
                            '1987', '1988', '1989', '1990',
                            '1991', '1992', '1993', '1994',
                            '1995', '1996', '1997', '1998',
                            '1999', '2000', '2001', '2002',
                            '2003', '2004', '2005', '2006',
                            '2007', '2008', '2009', '2010',
                            '2011', '2012', '2013', '2014',
                            '2015', '2016', '2017', '2018',
                            '2019'
                        ],
                        'secondary_vegetation_age': [
                            '1988', '1989', '1990', '1991',
                            '1992', '1993', '1994', '1995',
                            '1996', '1997', '1998', '1999',
                            '2000', '2001', '2002', '2003',
                            '2004', '2005', '2006', '2007',
                            '2008', '2009', '2010', '2011',
                            '2012', '2013', '2014', '2015',
                            '2016', '2017', '2018', '2019'
                        ],
                        'deforestation_sv': [
                            '1988', '1989', '1990', '1991',
                            '1992', '1993', '1994', '1995',
                            '1996', '1997', '1998', '1999',
                            '2000', '2001', '2002', '2003',
                            '2004', '2005', '2006', '2007',
                            '2008', '2009', '2010', '2011',
                            '2012', '2013', '2014', '2015',
                            '2016', '2017', '2018', '2019'
                        ],
                        'deforestation_pv': [
                            'deforestation_pv_year',
                        ],
                    },
                    'encoding': 'x100',
                },
                'collection-7.0': {
                    'assets': {
                        'deforestation_sec_vegetation': 'projects/mapbiomas-public/assets/brazil/lulc/collection7/mapbiomas_collection70_deforestation_regeneration_v1',
                    },
                    'periods': {
                        'deforestation_sec_vegetation': [
                            '1986', '1987', '1988', '1989',
                            '1990', '1991', '1992', '1993',
                            '1994', '1995', '1996', '1997',
                            '1998', '1999', '2000', '2001',
                            '2002', '2003', '2004', '2005',
                            '2006', '2007', '2008', '2009',
                            '2010', '2011', '2012', '2013',
                            '2014', '2015', '2016', '2017',
                            '2018', '2019', '2020', '2021'
                        ],
                        'secondary_vegetation': [
                            '1986', '1987', '1988', '1989',
                            '1990', '1991', '1992', '1993',
                            '1994', '1995', '1996', '1997',
                            '1998', '1999', '2000', '2001',
                            '2002', '2003', '2004', '2005',
                            '2006', '2007', '2008', '2009',
                            '2010', '2011', '2012', '2013',
                            '2014', '2015', '2016', '2017',
                            '2018', '2019', '2020', '2021'
                        ],
                        'secondary_vegetation_age': [
                            '1988', '1989', '1990', '1991',
                            '1992', '1993', '1994', '1995',
                            '1996', '1997', '1998', '1999',
                            '2000', '2001', '2002', '2003',
                            '2004', '2005', '2006', '2007',
                            '2008', '2009', '2010', '2011',
                            '2012', '2013', '2014', '2015',
                            '2016', '2017', '2018', '2019'
                        ],
                        'deforestation_sv': [
                            '1988', '1989', '1990', '1991',
                            '1992', '1993', '1994', '1995',
                            '1996', '1997', '1998', '1999',
                            '2000', '2001', '2002', '2003',
                            '2004', '2005', '2006', '2007',
                            '2008', '2009', '2010', '2011',
                            '2012', '2013', '2014', '2015',
                            '2016', '2017', '2018', '2019'
                        ],
                        'deforestation_pv': [
                            'deforestation_pv_year',
                        ],
                    },
                    'encoding': 'x100',
                },
                'collection-7.1': {
                    'assets': {
                        'deforestation_sec_vegetation': 'projects/mapbiomas-public/assets/brazil/lulc/collection7_1/mapbiomas_collection71_deforestation_regeneration_v1',
                        'secondary_vegetation_age': 'projects/mapbiomas-public/assets/brazil/lulc/collection7_1/mapbiomas_collection71_secondary_vegetation_age_v1',
                    },
                    'periods': {
                        'deforestation_sec_vegetation': [
                            '1986', '1987', '1988', '1989',
                            '1990', '1991', '1992', '1993',
                            '1994', '1995', '1996', '1997',
                            '1998', '1999', '2000', '2001',
                            '2002', '2003', '2004', '2005',
                            '2006', '2007', '2008', '2009',
                            '2010', '2011', '2012', '2013',
                            '2014', '2015', '2016', '2017',
                            '2018', '2019', '2020', '2021'
                        ],
                        'secondary_vegetation': [
                            '1986', '1987', '1988', '1989',
                            '1990', '1991', '1992', '1993',
                            '1994', '1995', '1996', '1997',
                            '1998', '1999', '2000', '2001',
                            '2002', '2003', '2004', '2005',
                            '2006', '2007', '2008', '2009',
                            '2010', '2011', '2012', '2013',
                            '2014', '2015', '2016', '2017',
                            '2018', '2019', '2020', '2021'
                        ],
                        'secondary_vegetation_age': [
                            '1986', '1987', '1988', '1989',
                            '1990', '1991', '1992', '1993',
                            '1994', '1995', '1996', '1997',
                            '1998', '1999', '2000', '2001',
                            '2002', '2003', '2004', '2005',
                            '2006', '2007', '2008', '2009',
                            '2010', '2011', '2012', '2013',
                            '2014', '2015', '2016', '2017',
                            '2018', '2019', '2020', '2021'
                        ],
                        'deforestation_sv': [
                            '1988', '1989', '1990', '1991',
                            '1992', '1993', '1994', '1995',
                            '1996', '1997', '1998', '1999',
                            '2000', '2001', '2002', '2003',
                            '2004', '2005', '2006', '2007',
                            '2008', '2009', '2010', '2011',
                            '2012', '2013', '2014', '2015',
                            '2016', '2017', '2018', '2019'
                        ],
                        'deforestation_pv': [
                            'deforestation_pv_year',
                        ],
                    },
                    'encoding': 'x100',
                },
                'collection-8.0': {
                    'assets': {
                        'deforestation_sec_vegetation': 'projects/mapbiomas-public/assets/brazil/lulc/collection8/mapbiomas_collection80_deforestation_secondary_vegetation_v1',
                        'secondary_vegetation_age': 'projects/mapbiomas-public/assets/brazil/lulc/collection8/mapbiomas_collection80_secondary_vegetation_age_v1',
                    },
                    'periods': {
                        'deforestation_sec_vegetation': [
                            '1986', '1987', '1988', '1989',
                            '1990', '1991', '1992', '1993',
                            '1994', '1995', '1996', '1997',
                            '1998', '1999', '2000', '2001',
                            '2002', '2003', '2004', '2005',
                            '2006', '2007', '2008', '2009',
                            '2010', '2011', '2012', '2013',
                            '2014', '2015', '2016', '2017',
                            '2018', '2019', '2020', '2021',
                            '2022'
                        ],
                        'secondary_vegetation': [
                            '1986', '1987', '1988', '1989',
                            '1990', '1991', '1992', '1993',
                            '1994', '1995', '1996', '1997',
                            '1998', '1999', '2000', '2001',
                            '2002', '2003', '2004', '2005',
                            '2006', '2007', '2008', '2009',
                            '2010', '2011', '2012', '2013',
                            '2014', '2015', '2016', '2017',
                            '2018', '2019', '2020', '2021',
                            '2022'
                        ],
                        'secondary_vegetation_age': [
                            '1986', '1987', '1988', '1989',
                            '1990', '1991', '1992', '1993',
                            '1994', '1995', '1996', '1997',
                            '1998', '1999', '2000', '2001',
                            '2002', '2003', '2004', '2005',
                            '2006', '2007', '2008', '2009',
                            '2010', '2011', '2012', '2013',
                            '2014', '2015', '2016', '2017',
                            '2018', '2019', '2020', '2021',
                            '2022'
                        ],
                        'deforestation_sv': [
                            '1988', '1989', '1990', '1991',
                            '1992', '1993', '1994', '1995',
                            '1996', '1997', '1998', '1999',
                            '2000', '2001', '2002', '2003',
                            '2004', '2005', '2006', '2007',
                            '2008', '2009', '2010', '2011',
                            '2012', '2013', '2014', '2015',
                            '2016', '2017', '2018', '2019'
                        ],
                        'deforestation_pv': [
                            'deforestation_pv_year',
                        ],
                    },
                    'encoding': 'x100',
                },
                'collection-9.0': {
                    'assets': {
                        'deforestation_sec_vegetation': 'projects/mapbiomas-public/assets/brazil/lulc/collection9/mapbiomas_collection90_deforestation_secondary_vegetation_v1',
                        'secondary_vegetation_age': 'projects/mapbiomas-public/assets/brazil/lulc/collection9/mapbiomas_collection90_secondary_vegetation_age_v1',
                    },
                    'periods': {
                        'deforestation_sec_vegetation': [
                            '1986', '1987', '1988', '1989',
                            '1990', '1991', '1992', '1993',
                            '1994', '1995', '1996', '1997',
                            '1998', '1999', '2000', '2001',
                            '2002', '2003', '2004', '2005',
                            '2006', '2007', '2008', '2009',
                            '2010', '2011', '2012', '2013',
                            '2014', '2015', '2016', '2017',
                            '2018', '2019', '2020', '2021',
                            '2022', '2023'
                        ],
                        'secondary_vegetation': [
                            '1986', '1987', '1988', '1989',
                            '1990', '1991', '1992', '1993',
                            '1994', '1995', '1996', '1997',
                            '1998', '1999', '2000', '2001',
                            '2002', '2003', '2004', '2005',
                            '2006', '2007', '2008', '2009',
                            '2010', '2011', '2012', '2013',
                            '2014', '2015', '2016', '2017',
                            '2018', '2019', '2020', '2021',
                            '2022', '2023'
                        ],
                        'secondary_vegetation_age': [
                            '1986', '1987', '1988', '1989',
                            '1990', '1991', '1992', '1993',
                            '1994', '1995', '1996', '1997',
                            '1998', '1999', '2000', '2001',
                            '2002', '2003', '2004', '2005',
                            '2006', '2007', '2008', '2009',
                            '2010', '2011', '2012', '2013',
                            '2014', '2015', '2016', '2017',
                            '2018', '2019', '2020', '2021',
                            '2022', '2023'
                        ],
                        'deforestation_sv': [
                            '1988', '1989', '1990', '1991',
                            '1992', '1993', '1994', '1995',
                            '1996', '1997', '1998', '1999',
                            '2000', '2001', '2002', '2003',
                            '2004', '2005', '2006', '2007',
                            '2008', '2009', '2010', '2011',
                            '2012', '2013', '2014', '2015',
                            '2016', '2017', '2018', '2019',
                            '2020', '2021', '2022', '2023'
                        ],
                        'deforestation_pv': [
                            'deforestation_pv_year',
                        ],
                    },
                    'encoding': 'x100',
                },
                'collection-10.1': {
                    'assets': {
                        'deforestation_sec_vegetation': 'projects/mapbiomas-public/assets/brazil/lulc/collection10_1/mapbiomas_brazil_collection10_1_deforestation_secondary_vegetation_v3',
                    },
                    'encoding': 'raw',
                    'periods': {
                        'deforestation_sec_vegetation': [
                            '1987', '1988', '1989', '1990',
                            '1991', '1992', '1993', '1994',
                            '1995', '1996', '1997', '1998',
                            '1999', '2000', '2001', '2002',
                            '2003', '2004', '2005', '2006',
                            '2007', '2008', '2009', '2010',
                            '2011', '2012', '2013', '2014',
                            '2015', '2016', '2017', '2018',
                            '2019', '2020', '2021', '2022',
                            '2023', '2024'
                        ],
                        'secondary_vegetation': [
                            '1987', '1988', '1989', '1990',
                            '1991', '1992', '1993', '1994',
                            '1995', '1996', '1997', '1998',
                            '1999', '2000', '2001', '2002',
                            '2003', '2004', '2005', '2006',
                            '2007', '2008', '2009', '2010',
                            '2011', '2012', '2013', '2014',
                            '2015', '2016', '2017', '2018',
                            '2019', '2020', '2021', '2022',
                            '2023', '2024'
                        ],
                        'secondary_vegetation_age': [
                            '1986', '1987', '1988', '1989',
                            '1990', '1991', '1992', '1993',
                            '1994', '1995', '1996', '1997',
                            '1998', '1999', '2000', '2001',
                            '2002', '2003', '2004', '2005',
                            '2006', '2007', '2008', '2009',
                            '2010', '2011', '2012', '2013',
                            '2014', '2015', '2016', '2017',
                            '2018', '2019', '2020', '2021',
                            '2022', '2023'
                        ],
                        'deforestation_sv': [
                            '1988', '1989', '1990', '1991',
                            '1992', '1993', '1994', '1995',
                            '1996', '1997', '1998', '1999',
                            '2000', '2001', '2002', '2003',
                            '2004', '2005', '2006', '2007',
                            '2008', '2009', '2010', '2011',
                            '2012', '2013', '2014', '2015',
                            '2016', '2017', '2018', '2019',
                            '2020', '2021', '2022', '2023'
                        ],
                        'deforestation_pv': [
                            'deforestation_pv_year',
                        ],
                    },
                },
                'collection-11.0': {
                    'assets': {
                        'deforestation_sec_vegetation': 'projects/mapbiomas-public/assets/brazil/lulc/collection11/mapbiomas_brazil_collection11_deforestation_secondary_vegetation_v5',
                    },
                    'encoding': 'raw',
                    'periods': {
                        'deforestation_sec_vegetation': [
                            '1987', '1988', '1989', '1990',
                            '1991', '1992', '1993', '1994',
                            '1995', '1996', '1997', '1998',
                            '1999', '2000', '2001', '2002',
                            '2003', '2004', '2005', '2006',
                            '2007', '2008', '2009', '2010',
                            '2011', '2012', '2013', '2014',
                            '2015', '2016', '2017', '2018',
                            '2019', '2020', '2021', '2022',
                            '2023', '2024', '2025'
                        ],
                        'secondary_vegetation': [
                            '1987', '1988', '1989', '1990',
                            '1991', '1992', '1993', '1994',
                            '1995', '1996', '1997', '1998',
                            '1999', '2000', '2001', '2002',
                            '2003', '2004', '2005', '2006',
                            '2007', '2008', '2009', '2010',
                            '2011', '2012', '2013', '2014',
                            '2015', '2016', '2017', '2018',
                            '2019', '2020', '2021', '2022',
                            '2023', '2024', '2025'
                        ],
                    },
                },
            },
            'mapbiomas-colombia': {
                'collection-2.0': {
                    'assets': {
                        'deforestation_sec_vegetation': 'projects/mapbiomas-public/assets/colombia/collection2/mapbiomas_colombia_collection2_deforestation_secondary_vegetation_v1',
                    },
                    'periods': {
                        'deforestation_sec_vegetation': [
                            '1986', '1987', '1988', '1989',
                            '1990', '1991', '1992', '1993',
                            '1994', '1995', '1996', '1997',
                            '1998', '1999', '2000', '2001',
                            '2002', '2003', '2004', '2005',
                            '2006', '2007', '2008', '2009',
                            '2010', '2011', '2012', '2013',
                            '2014', '2015', '2016', '2017',
                            '2018', '2019', '2020', '2021',
                            '2022', '2023'
                        ],
                        'secondary_vegetation': [
                            '1986', '1987', '1988', '1989',
                            '1990', '1991', '1992', '1993',
                            '1994', '1995', '1996', '1997',
                            '1998', '1999', '2000', '2001',
                            '2002', '2003', '2004', '2005',
                            '2006', '2007', '2008', '2009',
                            '2010', '2011', '2012', '2013',
                            '2014', '2015', '2016', '2017',
                            '2018', '2019', '2020', '2021',
                            '2022', '2023'
                        ],
                        'secondary_vegetation_age': [
                            '1986', '1987', '1988', '1989',
                            '1990', '1991', '1992', '1993',
                            '1994', '1995', '1996', '1997',
                            '1998', '1999', '2000', '2001',
                            '2002', '2003', '2004', '2005',
                            '2006', '2007', '2008', '2009',
                            '2010', '2011', '2012', '2013',
                            '2014', '2015', '2016', '2017',
                            '2018', '2019', '2020', '2021',
                            '2022', '2023'
                        ],
                        'deforestation_sv': [
                            '1988', '1989', '1990', '1991',
                            '1992', '1993', '1994', '1995',
                            '1996', '1997', '1998', '1999',
                            '2000', '2001', '2002', '2003',
                            '2004', '2005', '2006', '2007',
                            '2008', '2009', '2010', '2011',
                            '2012', '2013', '2014', '2015',
                            '2016', '2017', '2018', '2019',
                            '2020', '2021', '2022', '2023'
                        ],
                        'deforestation_pv': [
                            'deforestation_pv_year',
                        ],
                    },
                    'encoding': 'x100',
                },
            },
            'mapbiomas-peru': {
                'collection-2.0': {
                    'assets': {
                        'deforestation_sec_vegetation': 'projects/mapbiomas-public/assets/peru/collection2/mapbiomas_collection2_deforestation_secondary_vegetation_v1',
                    },
                    'periods': {
                        'deforestation_sec_vegetation': [
                            '1986', '1987', '1988', '1989',
                            '1990', '1991', '1992', '1993',
                            '1994', '1995', '1996', '1997',
                            '1998', '1999', '2000', '2001',
                            '2002', '2003', '2004', '2005',
                            '2006', '2007', '2008', '2009',
                            '2010', '2011', '2012', '2013',
                            '2014', '2015', '2016', '2017',
                            '2018', '2019', '2020', '2021',
                            '2022'
                        ],
                        'secondary_vegetation': [
                            '1986', '1987', '1988', '1989',
                            '1990', '1991', '1992', '1993',
                            '1994', '1995', '1996', '1997',
                            '1998', '1999', '2000', '2001',
                            '2002', '2003', '2004', '2005',
                            '2006', '2007', '2008', '2009',
                            '2010', '2011', '2012', '2013',
                            '2014', '2015', '2016', '2017',
                            '2018', '2019', '2020', '2021',
                            '2022'
                        ],
                        'secondary_vegetation_age': [
                            '1986', '1987', '1988', '1989',
                            '1990', '1991', '1992', '1993',
                            '1994', '1995', '1996', '1997',
                            '1998', '1999', '2000', '2001',
                            '2002', '2003', '2004', '2005',
                            '2006', '2007', '2008', '2009',
                            '2010', '2011', '2012', '2013',
                            '2014', '2015', '2016', '2017',
                            '2018', '2019', '2020', '2021',
                            '2022', '2023'
                        ],
                        'deforestation_sv': [
                            '1988', '1989', '1990', '1991',
                            '1992', '1993', '1994', '1995',
                            '1996', '1997', '1998', '1999',
                            '2000', '2001', '2002', '2003',
                            '2004', '2005', '2006', '2007',
                            '2008', '2009', '2010', '2011',
                            '2012', '2013', '2014', '2015',
                            '2016', '2017', '2018', '2019',
                            '2020', '2021', '2022', '2023'
                        ],
                        'deforestation_pv': [
                            'deforestation_pv_year',
                        ],
                    },
                    'encoding': 'x100',
                },
                'collection-3.0': {
                    'assets': {
                        'deforestation_sec_vegetation': 'projects/mapbiomas-public/assets/peru/collection3/mapbiomas_peru_collection3_deforestation_secondary_vegetation_v4',
                        'secondary_vegetation_age': 'projects/mapbiomas-public/assets/peru/collection3/mapbiomas_peru_collection3_secondary_vegetation_age_v3',
                    },
                    'encoding': 'raw',
                    'periods': {
                        'deforestation_sec_vegetation': [
                            '1999', '2000', '2001', '2002',
                            '2003', '2004', '2005', '2006',
                            '2007', '2008', '2009', '2010',
                            '2011', '2012', '2013', '2014',
                            '2015', '2016', '2017', '2018',
                            '2019', '2020', '2021', '2022',
                            '2023', '2024'
                        ],
                        'secondary_vegetation': [
                            '1999', '2000', '2001', '2002',
                            '2003', '2004', '2005', '2006',
                            '2007', '2008', '2009', '2010',
                            '2011', '2012', '2013', '2014',
                            '2015', '2016', '2017', '2018',
                            '2019', '2020', '2021', '2022',
                            '2023', '2024'
                        ],
                        'secondary_vegetation_age': [
                            '1999', '2000', '2001', '2002',
                            '2003', '2004', '2005', '2006',
                            '2007', '2008', '2009', '2010',
                            '2011', '2012', '2013', '2014',
                            '2015', '2016', '2017', '2018',
                            '2019', '2020', '2021', '2022',
                            '2023', '2024'
                        ],
                        'deforestation_sv': [
                            '1988', '1989', '1990', '1991',
                            '1992', '1993', '1994', '1995',
                            '1996', '1997', '1998', '1999',
                            '2000', '2001', '2002', '2003',
                            '2004', '2005', '2006', '2007',
                            '2008', '2009', '2010', '2011',
                            '2012', '2013', '2014', '2015',
                            '2016', '2017', '2018', '2019',
                            '2020', '2021', '2022', '2023'
                        ],
                        'deforestation_pv': [
                            'deforestation_pv_year',
                        ],
                    },
                },
                'collection-4.0': {
                    'assets': {
                        'deforestation_sec_vegetation': 'projects/mapbiomas-public/assets/peru/collection4/mapbiomas_peru_collection4_deforestation_secondary_vegetation_v2',
                    },
                    'encoding': 'raw',
                    'periods': {
                        'deforestation_sec_vegetation': [
                            '1990', '1991', '1992', '1993',
                            '1994', '1995', '1996', '1997',
                            '1998', '1999', '2000', '2001',
                            '2002', '2003', '2004', '2005',
                            '2006', '2007', '2008', '2009',
                            '2010', '2011', '2012', '2013',
                            '2014', '2015', '2016', '2017',
                            '2018', '2019', '2020', '2021',
                            '2022', '2023', '2024', '2025'
                        ],
                        'secondary_vegetation': [
                            '1990', '1991', '1992', '1993',
                            '1994', '1995', '1996', '1997',
                            '1998', '1999', '2000', '2001',
                            '2002', '2003', '2004', '2005',
                            '2006', '2007', '2008', '2009',
                            '2010', '2011', '2012', '2013',
                            '2014', '2015', '2016', '2017',
                            '2018', '2019', '2020', '2021',
                            '2022', '2023', '2024', '2025'
                        ],
                    },
                },
            },
            'mapbiomas-bolivia': {
                'collection-3.0': {
                    'assets': {
                        'deforestation_sec_vegetation': 'projects/mapbiomas-public/assets/bolivia/lulc/collection3/mapbiomas_bolivia_collection3_deforestation_secondary_vegetation_v1',
                        'secondary_vegetation_age': 'projects/mapbiomas-public/assets/bolivia/lulc/collection3/mapbiomas_bolivia_collection3_secondary_vegetation_age_v1',
                    },
                    'encoding': 'raw',
                    'periods': {
                        'deforestation_sec_vegetation': [
                            '1985', '1986', '1987', '1988',
                            '1989', '1990', '1991', '1992',
                            '1993', '1994', '1995', '1996',
                            '1997', '1998', '1999', '2000',
                            '2001', '2002', '2003', '2004',
                            '2005', '2006', '2007', '2008',
                            '2009', '2010', '2011', '2012',
                            '2013', '2014', '2015', '2016',
                            '2017', '2018', '2019', '2020',
                            '2021', '2022', '2023', '2024'
                        ],
                        'secondary_vegetation': [
                            '1985', '1986', '1987', '1988',
                            '1989', '1990', '1991', '1992',
                            '1993', '1994', '1995', '1996',
                            '1997', '1998', '1999', '2000',
                            '2001', '2002', '2003', '2004',
                            '2005', '2006', '2007', '2008',
                            '2009', '2010', '2011', '2012',
                            '2013', '2014', '2015', '2016',
                            '2017', '2018', '2019', '2020',
                            '2021', '2022', '2023', '2024'
                        ],
                        'secondary_vegetation_age': [
                            '1985', '1986', '1987', '1988',
                            '1989', '1990', '1991', '1992',
                            '1993', '1994', '1995', '1996',
                            '1997', '1998', '1999', '2000',
                            '2001', '2002', '2003', '2004',
                            '2005', '2006', '2007', '2008',
                            '2009', '2010', '2011', '2012',
                            '2013', '2014', '2015', '2016',
                            '2017', '2018', '2019', '2020',
                            '2021', '2022', '2023', '2024'
                        ],
                    },
                },
            },
            'mapbiomas-uruguay': {
                'collection-3.0': {
                    'assets': {
                        'deforestation_sec_vegetation': 'projects/mapbiomas-public/assets/uruguay/lulc/collection3/mapbiomas_uruguay_collection3_deforestation_secondary_vegetation_v1',
                        'secondary_vegetation_age': 'projects/mapbiomas-public/assets/uruguay/lulc/collection3/mapbiomas_uruguay_collection3_secondary_vegetation_age_v1',
                    },
                    'encoding': 'raw',
                    'periods': {
                        'deforestation_sec_vegetation': [
                            '1987', '1988', '1989', '1990',
                            '1991', '1992', '1993', '1994',
                            '1995', '1996', '1997', '1998',
                            '1999', '2000', '2001', '2002',
                            '2003', '2004', '2005', '2006',
                            '2007', '2008', '2009', '2010',
                            '2011', '2012', '2013', '2014',
                            '2015', '2016', '2017', '2018',
                            '2019', '2020', '2021', '2022',
                            '2023', '2024'
                        ],
                        'secondary_vegetation': [
                            '1987', '1988', '1989', '1990',
                            '1991', '1992', '1993', '1994',
                            '1995', '1996', '1997', '1998',
                            '1999', '2000', '2001', '2002',
                            '2003', '2004', '2005', '2006',
                            '2007', '2008', '2009', '2010',
                            '2011', '2012', '2013', '2014',
                            '2015', '2016', '2017', '2018',
                            '2019', '2020', '2021', '2022',
                            '2023', '2024'
                        ],
                        'secondary_vegetation_age': [
                            '1985', '1986', '1987', '1988',
                            '1989', '1990', '1991', '1992',
                            '1993', '1994', '1995', '1996',
                            '1997', '1998', '1999', '2000',
                            '2001', '2002', '2003', '2004',
                            '2005', '2006', '2007', '2008',
                            '2009', '2010', '2011', '2012',
                            '2013', '2014', '2015', '2016',
                            '2017', '2018', '2019', '2020',
                            '2021', '2022', '2023', '2024'
                        ],
                    },
                },
            },
            'mapbiomas-paraguay': {
                'collection-3.0': {
                    'assets': {
                        'deforestation_sec_vegetation': 'projects/mapbiomas-public/assets/paraguay/lulc/collection3/mapbiomas_paraguay_collection3_deforestation_secondary_vegetation_v1',
                    },
                    'encoding': 'raw',
                    'periods': {
                        'deforestation_sec_vegetation': [
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
                        'secondary_vegetation': [
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
            'mapbiomas-argentina': {
                'collection-2.0': {
                    'assets': {
                        'deforestation_sec_vegetation': 'projects/mapbiomas-public/assets/argentina/lulc/collection2/mapbiomas_argentina_collection2_deforestation_secondary_vegetation_v1',
                    },
                    'encoding': 'raw',
                    'periods': {
                        'deforestation_sec_vegetation': [
                            '1985', '1986', '1987', '1988',
                            '1989', '1990', '1991', '1992',
                            '1993', '1994', '1995', '1996',
                            '1997', '1998', '1999', '2000',
                            '2001', '2002', '2003', '2004',
                            '2005', '2006', '2007', '2008',
                            '2009', '2010', '2011', '2012',
                            '2013', '2014', '2015', '2016',
                            '2017', '2018', '2019', '2020',
                            '2021', '2022', '2023', '2024'
                        ],
                        'secondary_vegetation': [
                            '1985', '1986', '1987', '1988',
                            '1989', '1990', '1991', '1992',
                            '1993', '1994', '1995', '1996',
                            '1997', '1998', '1999', '2000',
                            '2001', '2002', '2003', '2004',
                            '2005', '2006', '2007', '2008',
                            '2009', '2010', '2011', '2012',
                            '2013', '2014', '2015', '2016',
                            '2017', '2018', '2019', '2020',
                            '2021', '2022', '2023', '2024'
                        ],
                    },
                },
            },
        },

        bandsNames: { //TODO: ajustar o nome das bandas no asset publico
            'deforestation_sec_vegetation': 'classification_',
            'deforestation_pv': '',
            'deforestation_sv': 'deforestation_sv_',
            'secondary_vegetation': 'product_',//'secondary_vegetation_',
            'secondary_vegetation_age': 'secondary_vegetation_age_'
        },

        dataType: 'deforestation_pv',

        data: {
            'deforestation_sec_vegetation': null,
            'deforestation_pv': null,
            'deforestation_sv': null,
            'secondary_vegetation': null,
            'secondary_vegetation_age': null
        },

        fileDimensions: {
            'deforestation_sec_vegetation': 256 * 124,
            'deforestation_pv': 256 * 124,
            'deforestation_sv': 256 * 512,
            'secondary_vegetation': 256 * 512,
            'secondary_vegetation_age': 256 * 512,
        },

        ranges: {
            'deforestation_pv': {
                'min': 1988,
                'max': 2019
            },
            'deforestation_sv': {
                'min': 0,
                'max': 30 //TODO: ajustar os params min e max para visualização
            },
            'secondary_vegetation': {
                'min': 0,
                'max': 1
            },
            'secondary_vegetation_age': {
                'min': 0,
                'max': 30
            },
            'deforestation_sec_vegetation': {
                'min': 0,
                'max': 7
            },
        },

        palette: { //TODO: Criar paleta de cores para visualização
            'deforestation_pv': [
                '#fff5f0',
                '#fee0d2',
                '#fcbba1',
                '#fc9272',
                '#fb6a4a',
                '#ef3b2c',
                '#cb181d',
                '#a50f15',
                '#67000d'
            ],

            'deforestation_sv': [
                '#fff5f0',
                '#fee0d2',
                '#fcbba1',
                '#fc9272',
                '#fb6a4a',
                '#ef3b2c',
                '#cb181d',
                '#a50f15',
                '#67000d'
            ],

            'secondary_vegetation': palettes.get('classification5'),

            'secondary_vegetation_age': [
                '#ffffe5',
                '#f7fcb9',
                '#d9f0a3',
                '#addd8e',
                '#78c679',
                '#41ab5d',
                '#238443',
                '#006837',
                '#004529'
            ],

            'deforestation_sec_vegetation': [
                "#212121", // [0] Outros
                "#fffbc2", // [1] Antrópico
                "#09611f", // [2] Vegetação primária
                "#4ea376", // [3] Vegetação secundária
                "#e31a1c", // [4] Antropismo em vegetação primária
                "#94fc03", // [5] Recuperação para veg secundaria
                "#ffa500", // [6] Antropismo em vegetação secundária
                "#212121", // [7] Não se aplica  
            ],

        },

        vector: null,
        activeFeature: null,
        activeName: '',

        taskid: 1,

        bufferDistance: 0,

        className: {

            'deforestation_sec_vegetation': {
                0: 'Other',
                1: 'Anthropic',
                2: 'Primary Vegetation',
                3: 'Secondary Vegetation',
                4: 'Deforestation in  Primary Vegetation',
                5: 'Secondary Vegetation Regrowth',
                6: 'Deforestation in  Secondary Vegetation',
                7: 'Not applied',
                8: 'Not applied',
            },
            'classification': {
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
                0: "Non Observed",
            }
        },

        legend: {
            params: {
                "title": 'Legend',
                "layers": [
                    ["#fffbc2", 1, 'Anthropic',],
                    ["#09611f", 2, 'Primary Vegetation',],
                    ["#4ea376", 3, 'Secondary Vegetation',],
                    ["#e31a1c", 4, 'Deforestation in  Primary Vegetation',],
                    ["#94fc03", 5, 'Secondary Vegetation Regrowth',],
                    ["#ffa500", 6, 'Deforestation in  Secondary Vegetation',],
                    ["#212121", 7, 'Not applied',],
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

        App.ui.init();

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

        Map.centerObject(App.options.data.deforestation_sec_vegetation, 5);

        var imageLayer = ui.Map.Layer({
            'eeObject': App.decodeDeforestation(App.options.data.deforestation_sec_vegetation),
            'visParams': {
                'bands': ['classification_' + year],
                'palette': App.options.palette.deforestation_sec_vegetation,
                'min': App.options.ranges.deforestation_sec_vegetation.min,
                'max': App.options.ranges.deforestation_sec_vegetation.max,
                'format': 'png'
            },
            'name': 'Deforestation and Regeneration',
            'shown': true,
            'opacity': 1.0
        });

        App.ui.clear();

        Map.add(imageLayer);

    },

    isRawEncoding: function () {
        var collection = App.options.collections[App.options.selectedRegion][App.options.selectedCollection];
        return collection.encoding === 'raw';
    },

    /**
     * Assets antigos ('x100') guardam classe * 100 + cobertura; os novos ('raw') já
     * trazem a classe (0-7). Ver `encoding` em cada coleção.
     */
    decodeDeforestation: function (image) {
        return App.isRawEncoding() ? image : image.divide(100).byte();
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

            App.ui.form.init();

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

        loadCollectionList: function (regionName) {

            App.ui.form.selectCollection.setPlaceholder('loading collections...');

            App.ui.form.selectCollection = ui.Select({
                'items': Object.keys(App.options.collections[regionName]).reverse(),
                'placeholder': 'select collection',
                'onChange': function (collectioName) {
                    ee.Number(1).evaluate(
                        function (a) {
                            // App.options.data.deforestation_pv = ee.Image(
                            //     App.options.collections[regionName][collectioName].assets.deforestation_pv);

                            // App.options.data.deforestation_sv = ee.Image(
                            //     App.options.collections[regionName][collectioName].assets.deforestation_sv);

                            // App.options.data.secondary_vegetation = ee.Image(
                            //     App.options.collections[regionName][collectioName].assets.secondary_vegetation);

                            
                            App.options.data.deforestation_sec_vegetation = ee.Image(
                                App.options.collections[regionName][collectioName].assets.deforestation_sec_vegetation);
                                
                            var ageAsset = App.options.collections[regionName][collectioName].assets.secondary_vegetation_age;
                            App.options.data.secondary_vegetation_age = ageAsset ? ee.Image(ageAsset) : null;

                            //
                            var bandNames = App.options.data.deforestation_sec_vegetation.bandNames()
                                .map(
                                    function (band) {
                                        return ee.String(band).replace('product', 'classification');
                                    }
                                )

                            App.options.data.deforestation_sec_vegetation = App.options.data.deforestation_sec_vegetation.rename(bandNames);

                            //
                            var year = App.options.collections[regionName][collectioName]
                                .periods.secondary_vegetation.slice(-1)[0];

                            App.options.selectedCollection = collectioName
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

            // Map.centerObject(App.options.activeFeature);

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

                                            App.ui.loadDataTypeNames();
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

        loadDataTypeNames: function () {

            App.ui.form.selectDataType.setPlaceholder('loading product names...');

            App.ui.form.selectDataType = ui.Select({
                'items': Object.keys(App.options.collections[App.options.selectedRegion][App.options.selectedCollection].assets),
                'placeholder': 'Select Data Type',
                'onChange': function (dataType) {

                    var regionName = App.ui.form.selectRegion.getValue();
                    var collectionName = App.ui.form.selectCollection.getValue();

                    App.ui.setDataType(dataType);

                    App.ui.makeLayersList(
                        App.tableShortName(),
                        App.options.activeFeature,
                        App.options.collections[regionName][collectionName].periods[dataType]);

                    App.options.selectedDataType = dataType;

                },
                'style': {
                    'stretch': 'horizontal'
                }
            });

            App.ui.form.panelDataType.widgets()
                .set(1, App.ui.form.selectDataType);
        },

        addImageLayer: function (period, label, region) {


            var image = App.options.data[App.options.dataType]
                .select([App.options.bandsNames[App.options.dataType] + period])
                .clip(region);

            if (App.options.selectedDataType == 'deforestation_sec_vegetation') {
                image = App.decodeDeforestation(image);
            }

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

                    var fileName = [regionName, collectionName, featureName, period].join('-');

                    fileName = fileName.replace(/--/g, '-').replace(/--/g, '-').replace('.', '');
                    fileName = App.formatName(fileName);

                    var data = App.options.data[App.options.dataType]
                        .select([App.options.bandsNames[App.options.dataType] + period]);

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
                        "unit": 'kilometers^2'
                    });

                    area = ee.FeatureCollection(area).map(
                        function (feature) {

                            // assets 'x100' guardam classe * 100 + cobertura; os 'raw' só a classe (0-7)
                            var raw = App.isRawEncoding();
                            var defRegClass = raw ? ee.Number(feature.get('class')).int16() :
                                ee.Number(feature.get('class')).divide(100).int16();
                            var lulcClass = raw ? null : ee.Number(feature.get('class')).mod(100).int16();

                            var defRegClassName = ee.Dictionary(App.options.className[App.options.dataType])
                                .get(defRegClass);

                            var lulcClassName = raw ? '' : ee.Dictionary(App.options.className.classification)
                                .get(lulcClass);

                            return feature
                                .set('class_name', defRegClassName)
                                .set('lulc_class_name', lulcClassName)
                                .set('band', band);
                        }
                    );

                    return area;
                }
            );

            areas = ee.FeatureCollection(areas).flatten();
            // print(areas);

            var tableName = [regionName, collectionName, featureName, 'area'].join('-');

            tableName = tableName.replace(/--/g, '-').replace(/--/g, '-').replace('.', '');
            tableName = App.formatName(tableName);

            Export.table.toDrive({
                'collection': areas,
                'description': tableName,
                'folder': 'MAPBIOMAS-EXPORT',
                'fileNamePrefix': tableName,
                'fileFormat': 'CSV'
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

                App.ui.form.panelLegend.add(legend.getLegend(App.options.legend.params));

                // App.ui.form.panelMain.add(App.ui.form.panelType);
                App.ui.form.panelMain.add(App.ui.form.panelRegion);
                App.ui.form.panelMain.add(App.ui.form.panelCollection);
                App.ui.form.panelMain.add(App.ui.form.panelFeatureCollections);
                App.ui.form.panelMain.add(App.ui.form.panelStates);
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

            labelSubtitle: ui.Label('Deforestation and Secondary Vegetation', {
                // 'fontWeight': 'bold',
                // 'padding': '1px',
                'fontSize': '14px'
            }),

            // arquivos de legenda da coleção mais recente (legend-colors/ no GitHub)
            labelLegendFiles: ui.Label('Legend files (QGIS, ArcGIS Pro, SLD, CSV)', {
                'fontSize': '10px'
            },
                'https://github.com/mapbiomas/user-toolkit/tree/master/legend-colors/deforestation'
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
                    'mapbiomas-argentina',
                    // 'mapbiomas-atlantic-forest',
                    'mapbiomas-bolivia',
                    'mapbiomas-brazil',
                    'mapbiomas-colombia',
                    'mapbiomas-paraguay',
                    'mapbiomas-peru',
                    // 'mapbiomas-pampa',
                    'mapbiomas-uruguay',
                ],
                'placeholder': 'None',
                'style': {
                    'stretch': 'horizontal'
                },
                'onChange': function (region) {

                    ee.Number(1).evaluate(
                        function (a) {
                            App.ui.setMapbiomasRegion(region);
                            App.options.selectedRegion = region;
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
                    // 'deforestation_pv',
                    // 'deforestation_sv',
                    // 'secondary_vegetation',
                    // 'secondary_vegetation_age',
                    // 'deforestation_sec_vegetation'
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
