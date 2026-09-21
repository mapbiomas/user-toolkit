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
 *    1.1.0 - Brazil Collection 1.0
 *    1.2.0 - Brazil Collection 2.0
 *    1.3.0 - Amazon Collection 1.0
 *    1.4.0 - Bolvia Collection 1.0
 *          - Colombia Collection 1.0
 *          - Ecuador Collection 1.0
 *          - Peru Collection 1.0
 *          - Venezuela Collection 1.0
 *    1.5.0 - Brazil Collection 3.0
 *    1.6.0 - Brazil Collection 5.0 (annual water)
 *          - Territories from the MapBiomas platform
 *    1.6.1 - Link to legend files (QGIS, ArcGIS Pro, SLD, CSV)
 *    1.6.2 - single link to the legend files on GitHub
 * 
 * @see
 *      Get the MapBiomas exported data in your "Google Drive/MAPBIOMAS-EXPORT" folder
 *      Code and Tutorial - https://github.com/mapbiomas-brazil/user-toolkit
 */

var palettes = require('users/mapbiomas/modules:Palettes.js');
var logos = require('users/mapbiomas/modules:Logos.js');
var mapp = require('users/joaovsiqueira1/packages:Mapp.js');

var Area = require('users/mapbiomas/user-toolkit:core/v1/area.js');
var Naming = require('users/mapbiomas/user-toolkit:core/v1/naming.js');


/**
 * 
 */
var App = {

    options: {

        version: '1.6.2',


        logo: {
            // uri: 'gs://mapbiomas-public/mapbiomas-logos/mapbiomas-logo-horizontal.b64',
            uri: 'gs://mapbiomas-public/mapbiomas-logos/mapbiomas-agua-logo.b64',
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
            'mapbiomas-amazon': [
                {
                    'label': 'Biome',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/PAN-AMAZONIA/WORKSPACE/BIOMES_ALL/BIOMES_ALL_v5',
                },
                {
                    'label': 'Departmental Protected Areas',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/PAN-AMAZONIA/WORKSPACE/PROTECTED_AREAS_DEPTALES/PROTECTED_AREAS_DEPTALES_v2',
                },
                {
                    'label': 'Indigenous Territories',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/PAN-AMAZONIA/WORKSPACE/INDIGENOUS_TERRITORIES/INDIGENOUS_TERRITORIES_v2',
                },
                {
                    'label': 'Level 1 Watershed',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/PAN-AMAZONIA/WORKSPACE/CUENCAS_NIVEL_1_ALL/CUENCAS_NIVEL_1_ALL_v3',
                },
                {
                    'label': 'National Protected Area',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/PAN-AMAZONIA/WORKSPACE/PROTECTED_AREAS_NACIONALES/PROTECTED_AREAS_NACIONALES_v2',
                },
                {
                    'label': 'RAISG',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/PAN-AMAZONIA/WORKSPACE/LIMITERAISG/LIMITERAISG_v4',
                },
            ],
            'mapbiomas-chaco': [
                {
                    'label': 'Biome',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/CHACO/WORKSPACE/BIOMES/BIOMES_v3',
                },
                {
                    'label': 'Country',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/CHACO/WORKSPACE/POLITICAL_LEVEL_1/POLITICAL_LEVEL_1_v2',
                },
                {
                    'label': 'Political level 2',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/CHACO/WORKSPACE/POLITICAL_LEVEL_2/POLITICAL_LEVEL_2_v2',
                },
                {
                    'label': 'Political level 3',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/CHACO/WORKSPACE/POLITICAL_LEVEL_3/POLITICAL_LEVEL_3_v1',
                },
                {
                    'label': 'Protected Areas',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/CHACO/WORKSPACE/PROTECTED_AREA/PROTECTED_AREA_v1',
                },
                {
                    'label': 'Ramsar sites',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/CHACO/WORKSPACE/RAMSAR_SITES/RAMSAR_SITES_v1',
                },
            ],
            'mapbiomas-atlantic-forest': [
                {
                    'label': 'Basin Level 2',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/ATLANTIC-FOREST/WORKSPACE/BASIN_LEVEL_2/BASIN_LEVEL_2_v1',
                },
                {
                    'label': 'Biome',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/ATLANTIC-FOREST/WORKSPACE/BIOMES/BIOMES_v1',
                },
                {
                    'label': 'Biosphere Reserve',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/ATLANTIC-FOREST/WORKSPACE/RESERVA_DA_BIOSFERA/RESERVA_DA_BIOSFERA_v1',
                },
                {
                    'label': 'Indigenous Territory',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/ATLANTIC-FOREST/WORKSPACE/INDIGENOUS_TERRITORIES/INDIGENOUS_TERRITORIES_v1',
                },
                {
                    'label': 'National Protected Areas',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/ATLANTIC-FOREST/WORKSPACE/NATIONAL_PROTECTED_AREAS/NATIONAL_PROTECTED_AREAS_v1',
                },
                {
                    'label': 'Political Level 1',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/ATLANTIC-FOREST/WORKSPACE/POLITICAL_LEVEL_1/POLITICAL_LEVEL_1_v1',
                },
                {
                    'label': 'Political Level 2',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/ATLANTIC-FOREST/WORKSPACE/POLITICAL_LEVEL_2/POLITICAL_LEVEL_2_v1',
                },
                {
                    'label': 'Political Level 3',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/ATLANTIC-FOREST/WORKSPACE/POLITICAL_LEVEL_3/POLITICAL_LEVEL_3_v1',
                },
            ],
            'mapbiomas-pampa': [
                {
                    'label': 'Biome',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/PAMPA/WORKSPACE/BIOMES/BIOMES_v1',
                },
                {
                    'label': 'Country',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/PAMPA/WORKSPACE/POLITICAL_LEVEL_1/POLITICAL_LEVEL_1_v1',
                },
                {
                    'label': 'Ecorregion',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/PAMPA/WORKSPACE/ECORREGION/ECORREGION_v1',
                },
                {
                    'label': 'Indigenous Territories',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/PAMPA/WORKSPACE/INDIGENOUS_TERRITORIES/INDIGENOUS_TERRITORIES_v1',
                },
                {
                    'label': 'Political Level 2',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/PAMPA/WORKSPACE/POLITICAL_LEVEL_2/POLITICAL_LEVEL_2_v1',
                },
                {
                    'label': 'Political Level 3',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/PAMPA/WORKSPACE/POLITICAL_LEVEL_3/POLITICAL_LEVEL_3_v1',
                },
                {
                    'label': 'Protected Areas',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/PAMPA/WORKSPACE/PROTECTED_AREAS/PROTECTED_AREAS_v1',
                },
                {
                    'label': 'Quilombo',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/PAMPA/WORKSPACE/QUILOMBOS/QUILOMBOS_v1',
                },
                {
                    'label': 'Watershed',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/PAMPA/WORKSPACE/WATERSHED/WATERSHED_v1',
                },
            ],
            'mapbiomas-indonesia': [
                {
                    'label': 'Country Limit',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/INDONESIA/WORKSPACE/POLITICAL_LEVEL_1/POLITICAL_LEVEL_1_v4',
                },
                {
                    'label': 'District',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/INDONESIA/WORKSPACE/POLITICAL_LEVEL_4/POLITICAL_LEVEL_4_v2',
                },
                {
                    'label': 'Forestry Concession',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/INDONESIA/WORKSPACE/FOREST_CONCESSION/FOREST_CONCESSION_v1',
                },
                {
                    'label': 'Indigenous Forest',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/INDONESIA/WORKSPACE/INDIGENOUS_FOREST/INDIGENOUS_FOREST_v1',
                },
                {
                    'label': 'Island Group',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/INDONESIA/WORKSPACE/POLITICAL_LEVEL_2/POLITICAL_LEVEL_2_v3',
                },
                {
                    'label': 'Key Biodiversity Area',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/INDONESIA/WORKSPACE/KEY_BIODIVERSITY_AREA/KEY_BIODIVERSITY_AREA_v1',
                },
                {
                    'label': 'Mining Concession',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/INDONESIA/WORKSPACE/MINING_CONCESSION/MINING_CONCESSION_v3',
                },
                {
                    'label': 'Moratorium Area',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/INDONESIA/WORKSPACE/FOREST_MORATORIUM/FOREST_MORATORIUM_v2',
                },
                {
                    'label': 'National Park',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/INDONESIA/WORKSPACE/NATIONAL_PARK/NATIONAL_PARK_v1',
                },
                {
                    'label': 'New National Capital',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/INDONESIA/WORKSPACE/NEW_NATIONAL_CAPITAL/NEW_NATIONAL_CAPITAL_v2',
                },
                {
                    'label': 'Oil Palm Concession',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/INDONESIA/WORKSPACE/OIL_PALM_CONCESSION/OIL_PALM_CONCESSION_v2',
                },
                {
                    'label': 'Orangutan Habitat',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/INDONESIA/WORKSPACE/ORANGUTAN_HABITAT/ORANGUTAN_HABITAT_v3',
                },
                {
                    'label': 'Other Conservation Area',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/INDONESIA/WORKSPACE/OTHER_CONSERVATION_AREA/OTHER_CONSERVATION_AREA_v1',
                },
                {
                    'label': 'Peatland Area',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/INDONESIA/WORKSPACE/PEATLAND_ECOLOGICAL_ZONE/PEATLAND_ECOLOGICAL_ZONE_v2',
                },
                {
                    'label': 'Province',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/INDONESIA/WORKSPACE/POLITICAL_LEVEL_3/POLITICAL_LEVEL_3_v2',
                },
                {
                    'label': 'Restoration Area',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/INDONESIA/WORKSPACE/RESTORATION_AREA/RESTORATION_AREA_v1',
                },
                {
                    'label': 'Rhino Habitat',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/INDONESIA/WORKSPACE/RHINOCEROS_HABITAT/RHINOCEROS_HABITAT_v2',
                },
                {
                    'label': 'Social Forestry Area',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/INDONESIA/WORKSPACE/SOCIAL_FORESTRY_AREA/SOCIAL_FORESTRY_AREA_v2',
                },
                {
                    'label': 'Sub-District',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/INDONESIA/WORKSPACE/POLITICAL_LEVEL_5/POLITICAL_LEVEL_5_v3',
                },
                {
                    'label': 'Sumatran Elephant Habitat',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/INDONESIA/WORKSPACE/SUMATRAN_ELEPHANT_HABITAT/SUMATRAN_ELEPHANT_HABITAT_v1',
                },
                {
                    'label': 'Sumatran Tiger Habitat',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/INDONESIA/WORKSPACE/SUMATRAN_TIGER_HABITAT/SUMATRAN_TIGER_HABITAT_v3',
                },
                {
                    'label': 'Village',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/INDONESIA/WORKSPACE/POLITICAL_LEVEL_6/POLITICAL_LEVEL_6_v3',
                },
                {
                    'label': 'Wallacea',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/INDONESIA/WORKSPACE/WALLACEA/WALLACEA_v2',
                },
                {
                    'label': 'Watershed',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/INDONESIA/WORKSPACE/WATERSHED/WATERSHED_v1',
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
            'mapbiomas-venezuela': [
                {
                    'label': 'Administrative Regions',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/VENEZUELA/WORKSPACE/ADMINISTRATIVE_REGIONS/ADMINISTRATIVE_REGIONS_v1',
                },
                {
                    'label': 'Biome',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/VENEZUELA/WORKSPACE/BIOMES/BIOMES_v2',
                },
                {
                    'label': 'Country',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/VENEZUELA/WORKSPACE/POLITICAL_LEVEL_1/POLITICAL_LEVEL_1_v4',
                },
                {
                    'label': 'Indigenous Territory',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/VENEZUELA/WORKSPACE/INDIGENOUS_TERRITORIES/INDIGENOUS_TERRITORIES_v2',
                },
                {
                    'label': 'Municipality',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/VENEZUELA/WORKSPACE/POLITICAL_LEVEL_3/POLITICAL_LEVEL_3_v4',
                },
                {
                    'label': 'National Protected Areas',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/VENEZUELA/WORKSPACE/PROTECTED_AREA/PROTECTED_AREA_v5',
                },
                {
                    'label': 'Physiographic Regions',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/VENEZUELA/WORKSPACE/PHYSIOGRAPHIC_REGIONS/PHYSIOGRAPHIC_REGIONS_v2',
                },
                {
                    'label': 'State',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/VENEZUELA/WORKSPACE/POLITICAL_LEVEL_2/POLITICAL_LEVEL_2_v5',
                },
                {
                    'label': 'Venezuela and marine areas',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/VENEZUELA/WORKSPACE/VENEZUELA_AND_MARINE_AREAS/VENEZUELA_AND_MARINE_AREAS_v2',
                },
                {
                    'label': 'Watershed',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/VENEZUELA/WORKSPACE/BASIN_LEVEL_1_PNRH/BASIN_LEVEL_1_PNRH_v3',
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
            'mapbiomas-ecuador': [
                {
                    'label': 'Bosque Protectores (MAE, 2026)',
                    'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/ecuador/territories/BOSQUE_PROTECTORES_MAE_2026_B077057C/ee1b57fb-7883-4ddb-b5f1-6869964f0b18',
                },
                {
                    'label': 'Cantón (CONALI, 2024)',
                    'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/ecuador/territories/CANTON_CONALI_2024_C9AC2C60/9b670ed0-5c97-4c6e-8d9b-8825e8bdff41',
                },
                {
                    'label': 'Corredor de Conectividad (MAE, 2026)',
                    'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/ecuador/territories/CORREDOR_DE_CONECTIVIDAD_MAE_2026_95D544CD/aafa307f-9254-4ab3-8e64-b43085c6046a',
                },
                {
                    'label': 'Demarcación Hidrográfica (MAE, 2026)',
                    'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/ecuador/territories/DEMARCACION_HIDROGRAFICA_MAE_2026_0ED02A8A/c3397dc7-a5a8-46a7-91c9-6c08276c60f8',
                },
                {
                    'label': 'Glaciares (EcoCiencia, 2026)',
                    'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/ecuador/territories/GLACIARES_ECOCIENCIA_2026_9955AE63/d6bb6f20-1645-4c38-a1e7-45af02236cf2',
                },
                {
                    'label': 'Límite del Biocorredor Amazónico (TNC, 2026)',
                    'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/ecuador/territories/LIMITE_DEL_BIOCORREDOR_AMAZONICO_TNC_2026_B7C6E76C/5c81818f-55ae-4335-8e17-5c64ce64b72c',
                },
                {
                    'label': 'Límite RAISG (EcoCiencia, 2026)',
                    'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/ecuador/territories/LIMITE_RAISG_ECOCIENCIA_2026_A4F3560D/68995b92-fd7f-4417-a269-773bc15acb7f',
                },
                {
                    'label': 'OMEC (MAE, 2026)',
                    'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/ecuador/territories/OMEC_MAE_2026_0321683C/d8266a90-17b7-4d2a-ab5b-483e9d96107c',
                },
                {
                    'label': 'Pais (CONALI, 2024)',
                    'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/ecuador/territories/PAIS_CONALI_2024_FAF4EE04/871e971c-59d4-4eb7-9af1-c4f1fb7d660b',
                },
                {
                    'label': 'Parroquia (CONALI, 2024)',
                    'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/ecuador/territories/PARROQUIA_CONALI_2024_16528A13/e11f1da6-00f0-48c1-8169-53c0aa261b60',
                },
                {
                    'label': 'Provincia (CONALI, 2024)',
                    'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/ecuador/territories/PROVINCIA_CONALI_2024_E47848F9/6c1e7dab-556d-43b6-a760-28db1153f87a',
                },
                {
                    'label': 'Región Geográfica (EcoCiencia, 2026)',
                    'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/ecuador/territories/REGION_GEOGRAFICA_ECOCIENCIA_2026_DF0CF7B1/f5099b75-65fa-4bb7-b5d4-dc2031e3cb4d',
                },
                {
                    'label': 'Reserva de la Biosfera (MAE, 2026)',
                    'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/ecuador/territories/RESERVA_DE_LA_BIOSFERA_MAE_2026_16D2A0C7/490cabb0-5ce2-454d-b199-3d7c79822d1f',
                },
                {
                    'label': 'Sistema Nacional de Áreas Protegidas (MAE, 2026)',
                    'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/ecuador/territories/SISTEMA_NACIONAL_DE_AREAS_PROTEGIDAS_MAE_2026_234E88B5/833e9c0a-e0c7-453f-adac-617735f6c434',
                },
                {
                    'label': 'Sitios Ramsar (MAE, 2026)',
                    'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/ecuador/territories/SITIOS_RAMSAR_MAE_2026_CAE05452/29b95d96-5a61-499a-9589-4169bf3298e1',
                },
                {
                    'label': 'Territorios Indígenas (EcoCiencia, 2026)',
                    'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/ecuador/territories/TERRITORIOS_INDIGENAS_ECOCIENCIA_2026_8CFAA0EC/647ebbfa-f6cc-4e15-8f36-1fdf30944363',
                },
                {
                    'label': 'Unidad Hodrográfica 1 (MAE, 2026)',
                    'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/ecuador/territories/UNIDAD_HODROGRAFICA_1_MAE_2026_B8FBE324/ebfe31f0-6216-491a-9a93-a73e62be17c4',
                },
                {
                    'label': 'Unidad Hodrográfica 2 (MAE, 2026)',
                    'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/ecuador/territories/UNIDAD_HODROGRAFICA_2_MAE_2026_2BC487D5/5353231c-691c-4e69-86a7-b15f412e1834',
                },
                {
                    'label': 'Unidad Hodrográfica 3 (MAE, 2026)',
                    'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/ecuador/territories/UNIDAD_HODROGRAFICA_3_MAE_2026_AD92BA80/c493a6f2-ee44-4b74-913c-2a06dd7f6ea1',
                },
                {
                    'label': 'Unidad Hodrográfica 4 (MAE, 2026)',
                    'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/ecuador/territories/UNIDAD_HODROGRAFICA_4_MAE_2026_9C10B7CB/e58a34e0-4888-4c52-b24c-3370345e1902',
                },
                {
                    'label': 'Zona de Recarga Hídrica (MAE, 2026)',
                    'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/ecuador/territories/ZONA_DE_RECARGA_HIDRICA_MAE_2026_1BB0281F/7b44a9cd-2ba5-41d1-8a2c-cafc2f3555a4',
                },
                {
                    'label': 'Zonas de Protección Amazónica (EcoCiencia, 2026)',
                    'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/ecuador/territories/ZONAS_DE_PROTECCION_AMAZONICA_ECOCIENCIA_2026_A39314DE/1ef84470-65da-452d-bdd7-41fe1e51911a',
                },
                {
                    'label': 'Área de Conservacióin y Uso Sostenible (NCI, 2024)',
                    'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/ecuador/territories/AREA_DE_CONSERVACIOIN_Y_USO_SOSTENIBLE_NCI_2024_32D02A52/4995c385-72a6-4025-90ab-3f37d817bae3',
                },
                {
                    'label': 'Área de Conservacióin y Uso Sostenible Privadas (EcoCiencia, 2026)',
                    'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/ecuador/territories/AREA_DE_CONSERVACIOIN_Y_USO_SOSTENIBLE_PRIVADAS_ECOCIENCIA_2026_1F76723C/9ae6bdec-5b30-4558-9598-8ad7cbeb1c0b',
                },
                {
                    'label': 'Área Natural Protegida Provincial (MAE, 2026)',
                    'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/ecuador/territories/AREA_NATURAL_PROTEGIDA_PROVINCIAL_MAE_2026_66FF5A2E/faa3cd39-771c-496f-bfe4-8dd0f449decf',
                },
                {
                    'label': 'Áreas de Protección Hídrica (MAE, 2026)',
                    'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/ecuador/territories/AREAS_DE_PROTECCION_HIDRICA_MAE_2026_047EE9CE/2ac301b3-352c-4075-91b0-a374673d2959',
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
        },

        collections: {
            'mapbiomas-brazil': {
                'collection-1.0': {
                    'assets': {
                        'annual_water_coverage': 'projects/mapbiomas-public/assets/brazil/lulc/collection6/mapbiomas_water_collection1_annual_water_coverage_v2',
                        'water_frequency': 'projects/mapbiomas-public/assets/brazil/lulc/collection6/mapbiomas_water_collection1_water_frequency_v1',
                    },
                    'periods': {
                        'annual_water_coverage': [
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
                        'water_frequency': [
                            '1985_2020'
                        ],
                    },
                },
                'collection-2.0': {
                    'assets': {
                        'annual_water_coverage': 'projects/mapbiomas-public/assets/brazil/lulc/collection8/mapbiomas_water_collection2_annual_water_coverage_v1',
                        'water_frequency': 'projects/mapbiomas-public/assets/brazil/lulc/collection8/mapbiomas_water_collection2_water_frequency_v1',
                    },
                    'periods': {
                        'annual_water_coverage': [
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
                        'water_frequency': [
                            '1985_2022'
                        ],
                    },
                },
                'collection-3.0': {
                    'assets': {
                        'annual_water_coverage': 'projects/mapbiomas-public/assets/brazil/water/collection3/mapbiomas_water_annual_water_coverage_v1',
                        'water_frequency': 'projects/mapbiomas-public/assets/brazil/water/collection3/mapbiomas_water_frequency_v1',
                    },
                    'periods': {
                        'annual_water_coverage': [
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
                        'water_frequency': [
                            '1985_2023'
                        ],
                    },
                },
                'collection-5.0': {
                    'assets': {
                        'annual_water_coverage': 'projects/mapbiomas-public/assets/brazil/water/collection5/mapbiomas_brazil_collection5_water_annual_v4',
                    },
                    'periods': {
                        'annual_water_coverage': [
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
            'mapbiomas-amazon': {
                'collection-1.0': {
                    'assets': {
                        'annual_water_coverage': 'projects/mapbiomas-raisg/public/collection5/mapbiomas_raisg_panamazonia_collection1_annual_water_coverage_v2',
                        'water_frequency': 'projects/mapbiomas-raisg/public/collection5/mapbiomas_raisg_panamazonia_collection1_water_frequency_v2',
                    },
                    'periods': {
                        'annual_water_coverage': [
                            '2000', '2001', '2002', '2003',
                            '2004', '2005', '2006', '2007',
                            '2008', '2009', '2010', '2011',
                            '2012', '2013', '2014', '2015',
                            '2016', '2017', '2018', '2019',
                            '2020', '2021', '2022'
                        ],
                        'water_frequency': [
                            '2000_2022'
                        ],
                    },
                },
            },
            'mapbiomas-venezuela': {
                'collection-1.0': {
                    'assets': {
                        'annual_water_coverage': 'projects/mapbiomas-public/assets/venezuela/collection1/mapbiomas_venezuela_collection1_water_v1',
                        'water_frequency': 'projects/mapbiomas-public/assets/venezuela/collection1/mapbiomas_venezuela_collection1_water_frequency_v1',
                    },
                    'periods': {
                        'annual_water_coverage': [
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
                        'water_frequency': [
                            '1985_2022'
                        ],
                    },
                },
            },
            'mapbiomas-bolivia': {
                'collection-1.0': {
                    'assets': {
                        'annual_water_coverage': 'projects/mapbiomas-public/assets/bolivia/collection1/mapbiomas_bolivia_collection1_water_v1',
                        'water_frequency': 'projects/mapbiomas-public/assets/bolivia/collection1/mapbiomas_bolivia_collection1_water_frequency_v1',
                    },
                    'periods': {
                        'annual_water_coverage': [
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
                        'water_frequency': [
                            '1985_2022'
                        ],
                    },
                },
            },
            'mapbiomas-peru': {
                'collection-1.0': {
                    'assets': {
                        'annual_water_coverage': 'projects/mapbiomas-public/assets/peru/collection1/mapbiomas_peru_collection1_water_v1',
                        'water_frequency': 'projects/mapbiomas-public/assets/peru/collection1/mapbiomas_peru_collection1_water_frequency_v1',
                    },
                    'periods': {
                        'annual_water_coverage': [
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
                        'water_frequency': [
                            '1985_2022'
                        ],
                    },
                },
            },
            'mapbiomas-colombia': {
                'collection-1.0': {
                    'assets': {
                        'annual_water_coverage': 'projects/mapbiomas-public/assets/colombia/collection1/mapbiomas_colombia_collection1_water_v1',
                        'water_frequency': 'projects/mapbiomas-public/assets/colombia/collection1/mapbiomas_colombia_collection1_water_frequency_v1',
                    },
                    'periods': {
                        'annual_water_coverage': [
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
                        'water_frequency': [
                            '1985_2022'
                        ],
                    },
                },
            },
            'mapbiomas-ecuador': {
                'collection-1.0': {
                    'assets': {
                        'annual_water_coverage': 'projects/mapbiomas-public/assets/ecuador/collection1/mapbiomas_ecuador_collection1_water_v1',
                        'water_frequency': 'projects/mapbiomas-public/assets/ecuador/collection1/mapbiomas_ecuador_collection1_water_frequency_v1',
                    },
                    'periods': {
                        'annual_water_coverage': [
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
                        'water_frequency': [
                            '1985_2022'
                        ],
                    },
                },
            },
        },

        bandsNames: {
            'annual_water_coverage': 'annual_water_coverage_',
            'water_frequency': 'water_frequency_',
            // 'cumulated_water_coverage': 'water_coverage_',
            // 'monthly_water_coverage': 'water_coverage_',
        },

        dataType: 'annual_water_coverage',

        data: {
            'annual_water_coverage': null,
            'water_frequency': null,
            // 'cumulated_water_coverage': null,
            // 'monthly_water_coverage': null,
        },

        fileDimensions: {
            'annual_water_coverage': 256 * 124,
            'water_frequency': 256 * 124,
            // 'cumulated_water_coverage': 256 * 124,
            // 'monthly_water_coverage': 256 * 124,

        },

        ranges: {
            'annual_water_coverage': {
                'min': 0,
                'max': 1
            },
            'water_frequency': {
                'min': 1,
                'max': 36
            },
            // 'cumulated_water_coverage': {
            //     'min': 0,
            //     'max': 1
            // },
            // 'monthly_water_coverage': {
            //     'min': 1,
            //     'max': 12
            // },
        },

        vector: null,
        activeFeature: null,
        activeName: '',

        palette: {
            'annual_water_coverage': [
                '#ffffff',
                '#0101c1'
            ],
            'water_frequency': [
                '#e5e5ff',
                '#ccccff',
                '#b2b2ff',
                '#9999ff',
                '#7f7fff',
                '#6666ff',
                '#4c4cff',
                '#3232ff',
                '#1919ff',
                '#0000ff',
            ],

            // 'monthly_water_coverage': [
            //     '#a900ff',
            //     '#6f02ff',
            //     '#020aff',
            //     '#0675ff',
            //     '#06ffff',
            //     '#ffee00',
            //     '#ff7700',
            //     '#ff0800',
            //     '#c20202',
            //     '#0aa602',
            //     '#0cff00'
            // ],
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
            32: "Salt flat",
            29: "Rocky outcrop",
            13: "Other Non Forest Natural Formation",
            14: "Farming",
            15: "Pasture",
            18: "Agriculture",
            19: "Temporary Crops (Herbaceas - Agricultura)",
            39: "Soy Beans",
            20: "Sugar Cane",
            40: "Rice",
            41: "Mosaic of Crops",

            42: "Pastizal abierto", // Only for Chaco
            43: "Pastizal cerrado", // Only for Chaco
            44: "Pastizal disperso", // Only for Chaco
            45: "Leñosas dispersas", // Only for Chaco

            36: "Perennial Crops",
            21: "Mosaic of Agriculture and Pasture",
            22: "Non vegetated area",
            24: "Urban Infrastructure",
            30: "Mining",
            23: "Beach and Dune",
            25: "Other Non Vegetated Area",
            26: "Water",
            33: "River, Lake and Ocean",
            37: "Artificial Water Body",
            38: "Water Reservoirs",
            31: "Aquaculture",
            27: "Non Observed",
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

        App.ui.form.labelTitle.setValue('MapBiomas User Toolkit ' + App.options.version);

    },

    startMap: function (year) {

        Map.centerObject(App.options.data.annual_water_coverage, 5);

        var imageLayer = ui.Map.Layer({
            'eeObject': App.options.data.annual_water_coverage,
            'visParams': {
                'bands': [App.options.bandsNames.annual_water_coverage + year],
                'palette': App.options.palette.annual_water_coverage,
                'min': App.options.ranges.annual_water_coverage.min,
                'max': App.options.ranges.annual_water_coverage.max,
                'format': 'png'
            },
            'name': year,
            'shown': true,
            'opacity': 1.0
        });

        Map.clear();

        Map.setOptions({
            'styles': {
                'Dark': mapp.getStyle('Dark')
            }
        });

        Map.add(imageLayer);

    },

    formatName: function (name) {
        return Naming.formatName(name);
    },

    ui: {

        init: function () {

            App.ui.form.init();

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

                            var assets = App.options.collections[regionName][collectioName].assets;

                            // a coleção 5 publica as bandas como classification_YYYY e não tem frequência
                            App.options.data.annual_water_coverage = ee.Image(assets.annual_water_coverage)
                                .regexpRename('^classification', 'annual_water_coverage');

                            App.options.data.water_frequency = assets.water_frequency ?
                                ee.Image(assets.water_frequency) : null;

                            var year = App.options.collections[regionName][collectioName].periods.annual_water_coverage.slice(-1)[0];

                            App.startMap(year);

                            App.ui.loadDataType();
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
                var allTablesNames = App.options.tables[regionName].concat(tablesNames);
            }
            catch (e) {
                var allTablesNames = App.options.tables[regionName];
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

            Map.clear();

            Map.setOptions({
                'styles': {
                    'Dark': mapp.getStyle('Dark')
                }
            });

            Map.addLayer(App.options.activeFeature.style({
                color: '#555500',
                width: 1,
                fillColor: '#ffff0011',
            }), {},
                App.tableShortName(),
                true);

        },

        loadTable: function (tableName) {

            App.options.table = ee.FeatureCollection(tableName);

            App.options.activeFeature = App.options.table;

            // Map.centerObject(App.options.activeFeature);

            Map.clear();

            Map.setOptions({
                'styles': {
                    'Dark': mapp.getStyle('Dark')
                }
            });

            Map.addLayer(App.options.activeFeature.style({
                color: '#555500',
                width: 1,
                fillColor: '#ffff0011',
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
                                            App.options.activeName = featureName;

                                            App.ui.makeLayersList(
                                                App.options.activeName,
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

                            App.ui.makeLayersList(
                                App.tableShortName(),
                                App.options.activeFeature,
                                App.options.collections[regionName][collectionName].periods[dataType]);

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
                .filterMetadata(App.options.propertyName, 'equals', name);

            Map.centerObject(App.options.activeFeature);

            Map.clear();

            Map.setOptions({
                'styles': {
                    'Dark': mapp.getStyle('Dark')
                }
            });

            Map.addLayer(App.options.activeFeature.style({
                color: '#555500',
                width: 1,
                fillColor: '#ffff0011',
            }), {},
                name,
                true);

        },

        addImageLayer: function (period, label, region) {

            var image = App.options.data[App.options.dataType]
                .select([App.options.bandsNames[App.options.dataType] + period])
                .clip(region);

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
                    });

                    area = ee.FeatureCollection(area).map(
                        function (feature) {
                            var className;

                            // className = ee.Dictionary(App.options.className)
                            //     .get(ee.Number(feature.get('class')));

                            className = ee.Number(feature.get('class'));

                            return feature.set('class_name', className).set('band', band);
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

        showDisclaimer: function () {

            App.ui.form.panelDisclaimer.widgets().reset([]);
            App.ui.form.panelDisclaimerText.widgets().reset(App.ui.form.labelDisclaimer);
            App.ui.form.panelDisclaimer.add(App.ui.form.panelDisclaimerText);
            App.ui.form.panelDisclaimer.add(App.ui.form.buttonDisclaimerOk);

            Map.add(App.ui.form.panelDisclaimer);

            App.ui.form.buttonDisclaimerShow.setDisabled(true);
        },

        form: {

            init: function () {

                var blob = ee.Blob(App.options.logo.uri);

                blob.string().evaluate(
                    function (str) {
                        str = str.replace(/\n/g, '');
                        App.options.logo.base64 = ui.Label({
                            imageUrl: str,
                            style: {
                                // width: '300px'
                                stretch: 'both'
                            }
                        });
                        App.ui.form.panelLogo.add(App.options.logo.base64);
                    }
                );

                this.panelMain.add(this.panelLogo);
                // this.panelMain.add(this.labelLink);  // substituído pelo link único para os arquivos de legenda
                this.panelMain.add(this.labelLegendFiles);

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

                // this.panelMain.add(this.panelType);
                this.panelMain.add(this.panelRegion);
                this.panelMain.add(this.panelCollection);
                this.panelMain.add(this.panelFeatureCollections);
                this.panelMain.add(this.panelStates);
                this.panelMain.add(this.panelProperties);
                this.panelMain.add(this.panelFeature);
                this.panelMain.add(this.panelDataType);
                this.panelMain.add(this.panelBuffer);

                this.panelMain.add(this.labelLayers);
                this.panelMain.add(this.panelLayersList);

                this.panelMain.add(this.buttonExport2Drive);
                this.panelMain.add(this.labelNotes);
                // this.panelMain.add(this.buttonDisclaimerShow);

                ui.root.add(this.panelMain);

                // App.ui.showDisclaimer();

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
                    'margin': '0px 0px 5px 0px',
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

            labelSubtitle: ui.Label('Fire', {
                // 'fontWeight': 'bold',
                // 'padding': '1px',
                'fontSize': '14px'
            }),

            // arquivos de legenda da coleção mais recente (legend-colors/ no GitHub)
            labelLegendFiles: ui.Label('Legend files (QGIS, ArcGIS Pro, SLD, CSV)', {
                'fontSize': '10px'
            },
                'https://github.com/mapbiomas/user-toolkit/tree/master/legend-colors/water'
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

            labelDisclaimer: [
                ui.Label('ATENÇÃO'),
                ui.Label('Esta é a primeira coleção completa do MapBiomas Água com o mapeamento da superfície de água do Brasil de 1985 a 2020, com dados anuais e mensais para todo o período incluindo: (i) dado no ano e acumulado em um período; (ii) frequência de ocorrência; (iii)  transições(ganhos e perdas) e(iv) classificação da cobertura do tipo de corpo d’água.\
                A descrição do método de mapeamento da superfície de água e da classificação de corpos hídricos está disponível  na seção de metodologias do MapBiomas.\
                Os mapas anuais de superfície de água e as tabelas estatísticas estão disponíveis na área de download do MapBiomas.\
                Para sugestões, críticas e ideias para aprimorar o trabalho, por favor, entre em contato pelo e- mail: contato@mapbiomas.org ou acesse o Fórum MapBiomas.\
                Os dados do MapBiomas são públicos, abertos e gratuitos sob licença Creative Commons CC - CY - SA e mediante a referência da fonte observando o seguinte formato: "Projeto MapBiomas – Mapeamento da Superfície de Água do Brasil Coleção 1, acessado em [DATA] através do link: [LINK]".'),

                ui.Label(''),
                ui.Label('ATTENTION'),
                ui.Label('This is the first complete collection of MapBiomas Water with the mapping of the water surface of Brazil from 1985 to 2020, with annual and monthly data for the whole time interval including (i) data in the year and accumulated in a time interval; (ii) frequency of occurrence; (iii) transitions (gain and loss) and (iv) classification of water body type.\
                The description of the water surface mapping method and the classification of water bodies is available in the methodology section of MapBiomas.\
                Annual water surface maps and statistical tables are available in the MapBiomas download area.\
                For suggestions, feedback, and ideas to improve the work, please contact us by email: contato@mapbiomas.org or visit the MapBiomas Forum.\
                MapBiomas data is public, open, and free under a Creative Commons CC - CY - SA license and by reference to the source, observing the following format: "MapBiomas Project – Mapping of the Water Surface of Brazil Collection 1, accessed in [DATE] through from the link: [LINK]".')
            ],

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
                    'mapbiomas-amazon',
                    // 'mapbiomas-atlantic-forest',
                    'mapbiomas-brazil',
                    'mapbiomas-bolivia',
                    // 'mapbiomas-chaco',
                    'mapbiomas-colombia',
                    'mapbiomas-ecuador',
                    // 'mapbiomas-indonesia',
                    // 'mapbiomas-pampa',
                    // 'mapbiomas-paraguay',
                    'mapbiomas-peru',
                    // 'mapbiomas-uruguay',
                    'mapbiomas-venezuela',
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
                    'annual_water_coverage',
                    'water_frequency'
                    // 'monthly_water_coverage',
                ],
                'placeholder': 'annual_water_coverage',
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

        },
    }
};

App.init();

App.setVersion();