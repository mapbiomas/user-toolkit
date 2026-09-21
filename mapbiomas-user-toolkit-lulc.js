/**
 * @name
 *      Mapbiomas User Toolkit Download
 * 
 * @description
 *      This is a support tool for mapbiomas data users.
 *  
 * @author
 *      João Siqueira
 * 
 * @contact
 *      Tasso Azevedo, Marcos Rosa and João Siqueira
 *      contato@mapbiomas.org
 *
 * @version
 *    1.0.0 - Acess and download data using user's vector
 *    1.1.0 - Updated to collection 4.0
 *    1.1.1 - Updated assets
 *    1.1.2 - Fix minor issues
 *    1.1.3 - Update transitions data
 *    1.1.4 - Update transitions data to collection 4.1
 *    1.2.0 - Loads mapbiomas-brazil collection 3.1
 *          - Loads mapbiomas-brazil collection 4.0
 *          - Loads mapbiomas-chaco collection 1.0
 *          - Loads mapbiomas-amazon collection 1.0
 *          - Updated mapbiomas-amazon collection 2.0
 *    1.3.0 - Loads mapbiomas-brazil collection 5.0
 *          - Export a csv file containing areas per classe and year
 *    1.3.1 - Loads mapbiomas-chaco collection 2.0
 *    1.3.2 - Loads mapbiomas-brazil collection 5.0 quality
 *    1.4.0 - Loads mapbiomas-atlantic-forest collection 1.0
 *    1.5.0 - Loads mapbiomas-pampa collection 1.0
 *    1.6.0 - Loads mapbiomas-brazil collection 6.0
 *    1.7.0 - Loads mapbiomas-amazon collection 3.0
 *    1.8.0 - Loads mapbiomas-indonesia collection 1.0
 *    1.9.0 - New tabs and download entire Brazilian maps from storage
 *    1.10.0 - Loads mapbiomas-brazil collection 7.0
 *    1.11.0 - Loads mapbiomas-chaco collection 3.0
 *    1.12.0 - Loads mapbiomas-atlantic-forest collection 2.0
 *    1.13.0 - Loads mapbiomas-amazon collection 4.0
 *    1.14.0 - Loads mapbiomas-pampa collection 2.0
 *    1.15.0 - Loads mapbiomas-peru collection 1.0
 *    1.16.0 - Loads mapbiomas-brazil collection 7.1
 *    1.17.0 - Loads mapbiomas-chaco collection 4.0
 *    1.18.0 - Loads mapbiomas-bolivia collection 1.0
 *    1.19.0 - Loads mapbiomas-brazil collection 8.0
 *    1.20.0 - Loads mapbiomas-indonesia collection 2.0
 *    1.21.0 - Loads mapbiomas-colombia collection 1.0
 *    1.22.0 - Loads mapbiomas-venezuela collection 1.0
 *    1.23.0 - Loads mapbiomas-pampa collection 3.0
 *           - Loads mapbiomas-atlantic-forest collection 3.0
 *           - Loads mapbiomas-amazon collection 5.0
 *           - Loads mapbiomas-uruguay collection 1.0
 *    1.24.0 - Loads mapbiomas-ecuador collection 1.0
 *    1.25.0 - Loads mapbiomas-paraguay collection 1.0
 *    1.26.0 - Loads mapbiomas-peru collection 2.0
 *    1.27.0 - Loads mapbiomas-chile collection 1.0
 *    1.28.0 - Loads mapbiomas-argentina collection 1.0
 *    1.29.0 - Loads mapbiomas-bolivia collection 2.0
 *    1.30.0 - Loads mapbiomas-brasil collection 9.0
 *    1.31.0 - Loads mapbiomas-amazon collection 6.0
 *    1.32.0 - Loads mapbiomas-venezuela collection 2.0
 *    1.33.0 - Loads mapbiomas-ecuador collection 2.0
 *           - Loads mapbiomas-colombia collection 2.0
 *    1.34.0 - Loads mapbiomas-pampa collection 4.0
 *           - Loads mapbiomas-uruguay collection 2.0
 *    1.35.0 - Loads mapbiomas-brasil collection 10.1
 *    1.36.0 - Loads mapbiomas-brazil collection 11.0
 *           - Loads atlantic-forest 4.0, colombia 3.0, venezuela 3.0, ecuador 3.0, peru 4.0,
 *             uruguay 3.0, paraguay 3.0, chile 2.0, argentina 2.0 and 3.0, indonesia 3.0 and 4.1
 *           - Loads mapbiomas-mexico and mapbiomas-drc collection 1.0
 *           - Palettes and class names from the MapBiomas platform legends
 *           - Periods read from the asset bands; territories from the MapBiomas platform
 *    1.36.1 - Link to legend files (QGIS, ArcGIS Pro, SLD, CSV)
 *    1.36.2 - New toolkit logo; single link to the legend files on GitHub
 * 
 * @see
 *      Get the MapBiomas exported data in your "Google Drive/MAPBIOMAS-EXPORT" folder
 *      Code and Tutorial - https://github.com/mapbiomas-brazil/user-toolkit
 */

var palettes = require('users/mapbiomas/modules:Palettes.js');
var logos = require('users/mapbiomas/modules:Logos.js');

var Area = require('users/mapbiomas/user-toolkit:core/v1/area.js');
var Naming = require('users/mapbiomas/user-toolkit:core/v1/naming.js');


/**
 * 
 */
var App = {

    options: {

        version: '1.36.2',

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
            'mapbiomas-chile': [
                {
                    'label': 'Basins',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/CHILE/WORKSPACE/BASIN_LEVEL_1/BASIN_LEVEL_1_v2',
                },
                {
                    'label': 'Commune',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/CHILE/WORKSPACE/POLITICAL_LEVEL_4/POLITICAL_LEVEL_4_v2',
                },
                {
                    'label': 'Country',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/CHILE/WORKSPACE/POLITICAL_LEVEL_1/POLITICAL_LEVEL_1_v4',
                },
                {
                    'label': 'Ecoregion',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/CHILE/WORKSPACE/ECORREGION/ECORREGION_v5',
                },
                {
                    'label': 'Glaciological Macro-zones',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/CHILE/WORKSPACE/GLACIER_MACROZONES/GLACIER_MACROZONES_v9',
                },
                {
                    'label': 'National Protected Area',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/CHILE/WORKSPACE/NATIONAL_PROTECTED_AREAS/NATIONAL_PROTECTED_AREAS_v3',
                },
                {
                    'label': 'Province',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/CHILE/WORKSPACE/POLITICAL_LEVEL_3/POLITICAL_LEVEL_3_v6',
                },
                {
                    'label': 'Region',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/CHILE/WORKSPACE/POLITICAL_LEVEL_2/POLITICAL_LEVEL_2_v6',
                },
                {
                    'label': 'Sub-basins',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/CHILE/WORKSPACE/BASIN_LEVEL_2/BASIN_LEVEL_2_v6',
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
            'mapbiomas-mexico': [
                {
                    'label': 'Aquifers',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/MEXICO/WORKSPACE/AQUIFERS/AQUIFERS_v1',
                },
                {
                    'label': 'Country',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/MEXICO/WORKSPACE/POLITICAL_LEVEL_1/POLITICAL_LEVEL_1_v1',
                },
                {
                    'label': 'Ecorregion',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/MEXICO/WORKSPACE/ECORREGION/ECORREGION_v1',
                },
                {
                    'label': 'Federal Protected Areas',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/MEXICO/WORKSPACE/PROTECTED_AREA_SUBNATIONAL/PROTECTED_AREA_SUBNATIONAL_v1',
                },
                {
                    'label': 'Hydrological regions',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/MEXICO/WORKSPACE/HYDROGRAPHIC_REGIONS/HYDROGRAPHIC_REGIONS_v1',
                },
                {
                    'label': 'Key Biodiversity Areas',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/MEXICO/WORKSPACE/KEY_BIODIVERSITY_AREAS/KEY_BIODIVERSITY_AREAS_v1',
                },
                {
                    'label': 'Metropolitan regions',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/MEXICO/WORKSPACE/METROPOLITAN_REGIONS/METROPOLITAN_REGIONS_v1',
                },
                {
                    'label': 'Municipality',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/MEXICO/WORKSPACE/POLITICAL_LEVEL_3/POLITICAL_LEVEL_3_v1',
                },
                {
                    'label': 'Priority Conservation Sites',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/MEXICO/WORKSPACE/PRIORITY_CONSERVATION_SITES/PRIORITY_CONSERVATION_SITES_v1',
                },
                {
                    'label': 'RAMSAR sites',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/MEXICO/WORKSPACE/RAMSAR_SITES/RAMSAR_SITES_v1',
                },
                {
                    'label': 'State',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/MEXICO/WORKSPACE/POLITICAL_LEVEL_2/POLITICAL_LEVEL_2_v1',
                },
                {
                    'label': 'Watersheds level 1',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/MEXICO/WORKSPACE/BASIN_LEVEL_1/BASIN_LEVEL_1_v1',
                },
                {
                    'label': 'Watersheds level 2',
                    'value': 'projects/mapbiomas-territories/assets/TERRITORIES/MEXICO/WORKSPACE/BASIN_LEVEL_2/BASIN_LEVEL_2_v1',
                },
            ],
            'mapbiomas-drc': [
                {
                    'label': 'Biomes',
                    'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/democratic-republic-of-congo/territories/BIOMES_4EF31B8F/0506d11e-1522-4f5b-8843-52d1539240e5',
                },
                {
                    'label': 'Country',
                    'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/democratic-republic-of-congo/territories/COUNTRY_2C5ABC07/063b9848-f8cb-404c-9eb9-58916a987b89',
                },
                {
                    'label': 'Protected Areas',
                    'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/democratic-republic-of-congo/territories/PROTECTED_AREAS_B927CC0E/519be2f6-dcf1-47ae-b060-f4a80b822c4e',
                },
                {
                    'label': 'Provinces',
                    'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/democratic-republic-of-congo/territories/PROVINCES_623FAE22/26315f1c-6b67-4f28-916e-f9aa4f91d588',
                },
                {
                    'label': 'Regions',
                    'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/democratic-republic-of-congo/territories/REGIONS_CD19FFD4/99bd1ab9-c381-4454-804d-3d43aea295d4',
                },
            ],
        },

        collections: {
            'mapbiomas-brazil': {
                'collection-3.1': {
                    'assets': {
                        'integration': 'projects/mapbiomas-public/assets/brazil/lulc/collection3_1/mapbiomas_collection31_integration_v1',
                        'transitions': 'projects/mapbiomas-public/assets/brazil/lulc/collection3_1/mapbiomas_collection31_transitions_v1',
                    },
                    'periods': {
                        'Coverage': [
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
                        'Transitions': [
                            '1985_1986', '1986_1987', '1987_1988', '1988_1989',
                            '1989_1990', '1990_1991', '1991_1992', '1992_1993',
                            '1993_1994', '1994_1995', '1995_1996', '1996_1997',
                            '1997_1998', '1998_1999', '1999_2000', '2000_2001',
                            '2001_2002', '2002_2003', '2003_2004', '2004_2005',
                            '2005_2006', '2006_2007', '2007_2008', '2008_2009',
                            '2009_2010', '2010_2011', '2011_2012', '2012_2013',
                            '2013_2014', '2014_2015', '2015_2016', '2016_2017',
                            '1985_1990', '1990_1995', '1995_2000', '2000_2005',
                            '2005_2010', '2010_2015', '2015_2017', '1990_2000',
                            '2000_2010', '2010_2017', '1985_2017', '2008_2017',
                            '2012_2017', '1994_2002', '2002_2010', '2010_2016'
                        ],
                    },
                },
                'collection-4.0': {
                    'assets': {
                        'integration': 'projects/mapbiomas-public/assets/brazil/lulc/collection4/mapbiomas_collection40_integration_v1',
                        'transitions': 'projects/mapbiomas-public/assets/brazil/lulc/collection4/mapbiomas_collection40_transitions_v3',
                    },
                    'periods': {
                        'Coverage': [
                            '1985', '1986', '1987', '1988',
                            '1989', '1990', '1991', '1992',
                            '1993', '1994', '1995', '1996',
                            '1997', '1998', '1999', '2000',
                            '2001', '2002', '2003', '2004',
                            '2005', '2006', '2007', '2008',
                            '2009', '2010', '2011', '2012',
                            '2013', '2014', '2015', '2016',
                            '2017', '2018'
                        ],
                        'Transitions': [
                            '1985_1986', '1986_1987', '1987_1988', '1988_1989',
                            '1989_1990', '1990_1991', '1991_1992', '1992_1993',
                            '1993_1994', '1994_1995', '1995_1996', '1996_1997',
                            '1997_1998', '1998_1999', '1999_2000', '2000_2001',
                            '2001_2002', '2002_2003', '2003_2004', '2004_2005',
                            '2005_2006', '2006_2007', '2007_2008', '2008_2009',
                            '2009_2010', '2010_2011', '2011_2012', '2012_2013',
                            '2013_2014', '2014_2015', '2015_2016', '2016_2017',
                            '2017_2018', '1985_1990', '1990_1995', '1995_2000',
                            '2000_2005', '2005_2010', '2010_2015', '2015_2018',
                            '1990_2000', '2000_2010', '2010_2018', '1985_2018',
                            '2008_2017', '2012_2018', '1994_2002', '2002_2010',
                            '2010_2016', '2008_2018', '1986_2015', '2001_2016',
                            '1996_2015'
                        ],
                    },
                },
                'collection-4.1': {
                    'assets': {
                        'integration': 'projects/mapbiomas-public/assets/brazil/lulc/collection4_1/mapbiomas_collection41_integration_v1',
                        'transitions': 'projects/mapbiomas-public/assets/brazil/lulc/collection4_1/mapbiomas_collection41_transitions_v1',
                    },
                    'periods': {
                        'Coverage': [
                            '1985', '1986', '1987', '1988',
                            '1989', '1990', '1991', '1992',
                            '1993', '1994', '1995', '1996',
                            '1997', '1998', '1999', '2000',
                            '2001', '2002', '2003', '2004',
                            '2005', '2006', '2007', '2008',
                            '2009', '2010', '2011', '2012',
                            '2013', '2014', '2015', '2016',
                            '2017', '2018'
                        ],
                        'Transitions': [
                            '1985_1986', '1986_1987', '1987_1988', '1988_1989',
                            '1989_1990', '1990_1991', '1991_1992', '1992_1993',
                            '1993_1994', '1994_1995', '1995_1996', '1996_1997',
                            '1997_1998', '1998_1999', '1999_2000', '2000_2001',
                            '2001_2002', '2002_2003', '2003_2004', '2004_2005',
                            '2005_2006', '2006_2007', '2007_2008', '2008_2009',
                            '2009_2010', '2010_2011', '2011_2012', '2012_2013',
                            '2013_2014', '2014_2015', '2015_2016', '2016_2017',
                            '2017_2018', '1985_1990', '1990_1995', '1995_2000',
                            '2000_2005', '2005_2010', '2010_2015', '2015_2018',
                            '1990_2000', '2000_2010', '2010_2018', '1985_2018',
                            '2008_2017', '2012_2018', '1994_2002', '2002_2010',
                            '2010_2016', '2008_2018', '1986_2015', '2001_2016',
                            '1996_2015'
                        ],
                    },
                },
                'collection-5.0': {
                    'assets': {
                        'integration': 'projects/mapbiomas-public/assets/brazil/lulc/collection5/mapbiomas_collection50_integration_v1',
                        'quality': 'projects/mapbiomas-public/assets/brazil/lulc/collection5/mapbiomas_collection50_quality_v1',
                    },
                    'periods': {
                        'Coverage': [
                            '1985', '1986', '1987', '1988',
                            '1989', '1990', '1991', '1992',
                            '1993', '1994', '1995', '1996',
                            '1997', '1998', '1999', '2000',
                            '2001', '2002', '2003', '2004',
                            '2005', '2006', '2007', '2008',
                            '2009', '2010', '2011', '2012',
                            '2013', '2014', '2015', '2016',
                            '2017', '2018', '2019'
                        ],
                        'Quality': [
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
                'collection-6.0': {
                    'assets': {
                        'integration': 'projects/mapbiomas-public/assets/brazil/lulc/collection6/mapbiomas_collection60_integration_v1',
                        'transitions': 'projects/mapbiomas-public/assets/brazil/lulc/collection6/mapbiomas_collection60_transitions_v1',
                        'quality': 'projects/mapbiomas-public/assets/brazil/lulc/collection5/mapbiomas_collection50_quality_v1',
                    },
                    'periods': {
                        'Coverage': [
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
                        'Transitions': [
                            '1985_1986', '1986_1987', '1987_1988', '1988_1989',
                            '1989_1990', '1990_1991', '1991_1992', '1992_1993',
                            '1993_1994', '1994_1995', '1995_1996', '1996_1997',
                            '1997_1998', '1998_1999', '1999_2000', '2000_2001',
                            '2001_2002', '2002_2003', '2003_2004', '2004_2005',
                            '2005_2006', '2006_2007', '2007_2008', '2008_2009',
                            '2009_2010', '2010_2011', '2011_2012', '2012_2013',
                            '2013_2014', '2014_2015', '2015_2016', '2016_2017',
                            '2017_2018', '2018_2019', '2019_2020', '1985_1990',
                            '1990_1995', '1995_2000', '2000_2005', '2005_2010',
                            '2010_2015', '2015_2020', '1990_2000', '2000_2010',
                            '2010_2020', '1985_2020', '2008_2020', '2012_2020',
                            '1994_2002', '2002_2010', '2010_2016', '1990_2008',
                            '1990_2020', '2000_2020', '2008_2018', '1986_2015',
                            '2001_2016', '1996_2015'
                        ],
                        'Quality': [
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
                        'integration': 'projects/mapbiomas-public/assets/brazil/lulc/collection7/mapbiomas_collection70_integration_v2',
                        'transitions': 'projects/mapbiomas-public/assets/brazil/lulc/collection7/mapbiomas_collection70_transitions_v3',
                    },
                    'periods': {
                        'Coverage': [
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
                        'Transitions': [
                            '1985_1986', '1986_1987', '1987_1988', '1988_1989',
                            '1989_1990', '1990_1991', '1991_1992', '1992_1993',
                            '1993_1994', '1994_1995', '1995_1996', '1996_1997',
                            '1997_1998', '1998_1999', '1999_2000', '2000_2001',
                            '2001_2002', '2002_2003', '2003_2004', '2004_2005',
                            '2005_2006', '2006_2007', '2007_2008', '2008_2009',
                            '2009_2010', '2010_2011', '2011_2012', '2012_2013',
                            '2013_2014', '2014_2015', '2015_2016', '2016_2017',
                            '2017_2018', '2018_2019', '2019_2020', '2020_2021',
                            '1985_1990', '1990_1995', '1995_2000', '2000_2005',
                            '2005_2010', '2010_2015', '2015_2020', '1990_2000',
                            '2000_2010', '2010_2020', '1985_2021', '2008_2021',
                            '2012_2021', '1994_2002', '2002_2010', '2010_2016',
                            '2016_2021', '1993_2008', '1990_2008', '1990_2021',
                            '2000_2021', '2008_2018', '1986_2015', '2001_2016',
                            '1996_2015'
                        ],
                    },
                },
                'collection-7.1': {
                    'assets': {
                        'integration': 'projects/mapbiomas-public/assets/brazil/lulc/collection7_1/mapbiomas_collection71_integration_v1',
                        'transitions': 'projects/mapbiomas-public/assets/brazil/lulc/collection7_1/mapbiomas_collection71_transitions_v1',
                    },
                    'periods': {
                        'Coverage': [
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
                        'Transitions': [
                            '1985_1986', '1986_1987', '1987_1988', '1988_1989',
                            '1989_1990', '1990_1991', '1991_1992', '1992_1993',
                            '1993_1994', '1994_1995', '1995_1996', '1996_1997',
                            '1997_1998', '1998_1999', '1999_2000', '2000_2001',
                            '2001_2002', '2002_2003', '2003_2004', '2004_2005',
                            '2005_2006', '2006_2007', '2007_2008', '2008_2009',
                            '2009_2010', '2010_2011', '2011_2012', '2012_2013',
                            '2013_2014', '2014_2015', '2015_2016', '2016_2017',
                            '2017_2018', '2018_2019', '2019_2020', '2020_2021',
                            '1985_1990', '1990_1995', '1995_2000', '2000_2005',
                            '2005_2010', '2010_2015', '2015_2020', '1990_2000',
                            '2000_2010', '2010_2020', '1985_2021', '2008_2021',
                            '2012_2021', '1994_2002', '2002_2010', '2010_2016',
                            '2016_2021', '2000_2019', '2002_2021', '2018_2021',
                            '1993_2008', '1990_2008', '1990_2021', '2000_2021',
                            '2008_2018', '1986_2015', '2001_2016', '1996_2015'
                        ],
                    },
                },
                'collection-8.0': {
                    'assets': {
                        'integration': 'projects/mapbiomas-public/assets/brazil/lulc/collection8/mapbiomas_collection80_integration_v1',
                        'transitions': 'projects/mapbiomas-public/assets/brazil/lulc/collection8/mapbiomas_collection80_transitions_v1',
                        'quality': 'projects/mapbiomas-public/assets/brazil/lulc/collection6/mapbiomas_collection80_quality_v1',
                    },
                    'periods': {
                        'Coverage': [
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
                        'Transitions': [
                            '1985_1986', '1986_1987', '1987_1988', '1988_1989',
                            '1989_1990', '1990_1991', '1991_1992', '1992_1993',
                            '1993_1994', '1994_1995', '1995_1996', '1996_1997',
                            '1997_1998', '1998_1999', '1999_2000', '2000_2001',
                            '2001_2002', '2002_2003', '2003_2004', '2004_2005',
                            '2005_2006', '2006_2007', '2007_2008', '2008_2009',
                            '2009_2010', '2010_2011', '2011_2012', '2012_2013',
                            '2013_2014', '2014_2015', '2015_2016', '2016_2017',
                            '2017_2018', '2018_2019', '2019_2020', '2020_2021',
                            '2021_2022', '1985_1990', '1990_1995', '1995_2000',
                            '2000_2005', '2005_2010', '2010_2015', '2015_2020',
                            '1990_2000', '2000_2010', '2010_2020', '1985_2022',
                            '2008_2022', '2012_2022', '1994_2002', '2002_2010',
                            '2010_2016', '2016_2022', '2000_2019', '2002_2022',
                            '2018_2022', '1993_2008', '1990_2008', '1990_2022',
                            '2000_2022', '2008_2018', '1986_2015', '2001_2016',
                            '1996_2015', '1992_2002', '2002_2012'
                        ],
                        'Quality': [
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
                        'integration': 'projects/mapbiomas-public/assets/brazil/lulc/collection9/mapbiomas_collection90_integration_v1',
                        'transitions': 'projects/mapbiomas-public/assets/brazil/lulc/collection9/mapbiomas_collection90_transitions_v1',
                        'quality': 'projects/mapbiomas-public/assets/brazil/lulc/collection9/mapbiomas_collection90_quality_v1',
                    },
                    'periods': {
                        'Coverage': [
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
                        'Transitions': [
                            '1985_1986', '1986_1987', '1987_1988', '1988_1989',
                            '1989_1990', '1990_1991', '1991_1992', '1992_1993',
                            '1993_1994', '1994_1995', '1995_1996', '1996_1997',
                            '1997_1998', '1998_1999', '1999_2000', '2000_2001',
                            '2001_2002', '2002_2003', '2003_2004', '2004_2005',
                            '2005_2006', '2006_2007', '2007_2008', '2008_2009',
                            '2009_2010', '2010_2011', '2011_2012', '2012_2013',
                            '2013_2014', '2014_2015', '2015_2016', '2016_2017',
                            '2017_2018', '2018_2019', '2019_2020', '2020_2021',
                            '2021_2022', '2022_2023', '1985_1990', '1990_1995',
                            '1995_2000', '2000_2005', '2005_2010', '2010_2015',
                            '2015_2020', '1990_2000', '2000_2010', '2010_2020',
                            '1985_2023', '2008_2023', '2012_2023', '1994_2002',
                            '2002_2010', '2010_2016', '2016_2023', '2000_2019',
                            '2002_2023', '2018_2023', '1993_2008', '1990_2008',
                            '1990_2023', '2000_2023', '2008_2018', '1986_2015',
                            '2001_2016', '1996_2015', '1992_2002', '2002_2012',
                            '2007_2023'
                        ],
                        'Quality': [
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
                'collection-10.1': {
                    'assets': {
                        'integration': 'projects/mapbiomas-public/assets/brazil/lulc/collection10_1/mapbiomas_brazil_collection10_1_coverage_v1',
                    },
                    'periods': {
                        'Coverage': [
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
                'collection-1-10m-Beta': {
                    'assets': {
                        'integration': 'projects/mapbiomas-public/assets/brazil/lulc/collection_S2_beta/collection_LULC_S2_beta',
                    },
                    'periods': {
                        'Coverage': [
                            '2016', '2017', '2018', '2019',
                            '2020', '2021', '2022'
                        ],
                    },
                },
                'collection-2-10m-Beta': {
                    'assets': {
                        'integration': 'projects/mapbiomas-public/assets/brazil/lulc_10m/collection2/mapbiomas_10m_collection2_integration_v1',
                    },
                    'periods': {
                        'Coverage': [
                            '2016', '2017', '2018', '2019',
                            '2020', '2021', '2022', '2023'
                        ],
                    },
                },
                'collection-11.0': {
                    'assets': {
                        'integration': 'projects/mapbiomas-public/assets/brazil/lulc/collection11/mapbiomas_brazil_collection11_coverage_v3',
                    },
                    'periods': {
                        'Coverage': [
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
                        'integration': 'projects/mapbiomas-raisg/public/collection1/mapbiomas_raisg_panamazonia_collection1_integration_v1',
                        'transitions': 'projects/mapbiomas-raisg/public/collection1/mapbiomas_raisg_panamazonia_collection1_transitions_v1',
                    },
                    'periods': {
                        'Coverage': [
                            '2000', '2001', '2002', '2003',
                            '2004', '2005', '2006', '2007',
                            '2008', '2009', '2010', '2011',
                            '2012', '2013', '2014', '2015',
                            '2016', '2017'
                        ],
                        'Transitions': [
                            '2000_2001', '2001_2002', '2002_2003', '2003_2004',
                            '2004_2005', '2005_2006', '2006_2007', '2007_2008',
                            '2008_2009', '2009_2010', '2010_2011', '2011_2012',
                            '2012_2013', '2013_2014', '2014_2015', '2015_2016',
                            '2016_2017', '2000_2005', '2005_2010', '2010_2015',
                            '2015_2017', '2000_2010', '2010_2017', '2000_2017'
                        ],
                    },
                },
                'collection-2.0': {
                    'assets': {
                        'integration': 'projects/mapbiomas-raisg/public/collection2/mapbiomas_raisg_panamazonia_collection2_integration_v2',
                        'transitions': 'projects/mapbiomas-raisg/public/collection2/mapbiomas_raisg_panamazonia_collection2_transitions_v2',
                    },
                    'periods': {
                        'Coverage': [
                            '1985', '1986', '1987', '1988',
                            '1989', '1990', '1991', '1992',
                            '1993', '1994', '1995', '1996',
                            '1997', '1998', '1999', '2000',
                            '2001', '2002', '2003', '2004',
                            '2005', '2006', '2007', '2008',
                            '2009', '2010', '2011', '2012',
                            '2013', '2014', '2015', '2016',
                            '2017', '2018'
                        ],
                        'Transitions': [
                            '1985_1986', '1986_1987', '1987_1988', '1988_1989',
                            '1989_1990', '1990_1991', '1991_1992', '1992_1993',
                            '1993_1994', '1994_1995', '1995_1996', '1996_1997',
                            '1997_1998', '1998_1999', '1999_2000', '2000_2001',
                            '2001_2002', '2002_2003', '2003_2004', '2004_2005',
                            '2005_2006', '2006_2007', '2007_2008', '2008_2009',
                            '2009_2010', '2010_2011', '2011_2012', '2012_2013',
                            '2013_2014', '2014_2015', '2015_2016', '2016_2017',
                            '2017_2018', '1985_1990', '1990_1995', '1995_2000',
                            '2000_2005', '2005_2010', '2010_2015', '2015_2018',
                            '1990_2000', '2000_2010', '2010_2018', '1985_2018',
                            '2008_2017', '2012_2018', '1994_2002', '2002_2010',
                            '2010_2016', '2008_2018', '1986_2015', '2000_2018'
                        ],
                    },
                },
                'collection-3.0': {
                    'assets': {
                        'integration': 'projects/mapbiomas-raisg/public/collection3/mapbiomas_raisg_panamazonia_collection3_integration_v2',
                        'transitions': 'projects/mapbiomas-raisg/public/collection3/mapbiomas_raisg_panamazonia_collection3_transitions_v2',
                    },
                    'periods': {
                        'Coverage': [
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
                        'Transitions': [
                            '1985_1986', '1986_1987', '1987_1988', '1988_1989',
                            '1989_1990', '1990_1991', '1991_1992', '1992_1993',
                            '1993_1994', '1994_1995', '1995_1996', '1996_1997',
                            '1997_1998', '1998_1999', '1999_2000', '2000_2001',
                            '2001_2002', '2002_2003', '2003_2004', '2004_2005',
                            '2005_2006', '2006_2007', '2007_2008', '2008_2009',
                            '2009_2010', '2010_2011', '2011_2012', '2012_2013',
                            '2013_2014', '2014_2015', '2015_2016', '2016_2017',
                            '2017_2018', '2018_2019', '2019_2020', '1985_1990',
                            '1990_1995', '1995_2000', '2000_2005', '2005_2010',
                            '2010_2015', '2015_2020', '1990_2000', '2000_2010',
                            '2010_2020', '1985_2020', '2008_2017', '1994_2002',
                            '2002_2010', '2010_2016', '1986_2015', '1990_2020',
                            '2000_2020', '2008_2020', '2012_2020'
                        ],
                    },
                },
                'collection-4.0': {
                    'assets': {
                        'integration': 'projects/mapbiomas-raisg/public/collection4/mapbiomas_raisg_panamazonia_collection4_integration_v1',
                        'transitions': 'projects/mapbiomas-raisg/public/collection4/mapbiomas_raisg_panamazonia_collection4_transitions_v1',
                    },
                    'periods': {
                        'Coverage': [
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
                        'Transitions': [
                            '1985_1986', '1986_1987', '1987_1988', '1988_1989',
                            '1989_1990', '1990_1991', '1991_1992', '1992_1993',
                            '1993_1994', '1994_1995', '1995_1996', '1996_1997',
                            '1997_1998', '1998_1999', '1999_2000', '2000_2001',
                            '2001_2002', '2002_2003', '2003_2004', '2004_2005',
                            '2005_2006', '2006_2007', '2007_2008', '2008_2009',
                            '2009_2010', '2010_2011', '2011_2012', '2012_2013',
                            '2013_2014', '2014_2015', '2015_2016', '2016_2017',
                            '2017_2018', '2018_2019', '2019_2020', '2020_2021',
                            '1985_1990', '1990_1995', '1995_2000', '2000_2005',
                            '2005_2010', '2010_2015', '2015_2020', '1990_2000',
                            '2000_2010', '2010_2020', '1985_2021', '2008_2017',
                            '1994_2002', '2002_2010', '2010_2016', '1986_2015',
                            '1990_2021', '2000_2021', '2008_2021', '2010_2021',
                            '2012_2021'
                        ],
                    },
                },
                'collection-5.0': {
                    'assets': {
                        'integration': 'projects/mapbiomas-raisg/public/collection5/mapbiomas_raisg_panamazonia_collection5_integration_v1',
                        'transitions': 'projects/mapbiomas-raisg/public/collection5/mapbiomas_raisg_panamazonia_collection5_transitions_v1',
                    },
                    'periods': {
                        'Coverage': [
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
                        'Transitions': [
                            '1985_1986', '1986_1987', '1987_1988', '1988_1989',
                            '1989_1990', '1990_1991', '1991_1992', '1992_1993',
                            '1993_1994', '1994_1995', '1995_1996', '1996_1997',
                            '1997_1998', '1998_1999', '1999_2000', '2000_2001',
                            '2001_2002', '2002_2003', '2003_2004', '2004_2005',
                            '2005_2006', '2006_2007', '2007_2008', '2008_2009',
                            '2009_2010', '2010_2011', '2011_2012', '2012_2013',
                            '2013_2014', '2014_2015', '2015_2016', '2016_2017',
                            '2017_2018', '2018_2019', '2019_2020', '2020_2021',
                            '2021_2022', '1985_1990', '1990_1995', '1995_2000',
                            '2000_2005', '2005_2010', '2010_2015', '2015_2020',
                            '1990_2000', '2000_2010', '2010_2020', '1985_2022',
                            '2008_2017', '1994_2002', '2002_2010', '2010_2016',
                            '1986_2015', '1990_2022', '2000_2022', '2008_2022',
                            '2010_2022', '2012_2022'
                        ],
                    },
                },
                'collection-6.0': {
                    'assets': {
                        'integration': 'projects/mapbiomas-public/assets/amazon/lulc/collection6/mapbiomas_collection60_integration_v1',
                        'transitions': 'projects/mapbiomas-public/assets/amazon/lulc/collection6/mapbiomas_collection60_transitions_v1',
                    },
                    'periods': {
                        'Coverage': [
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
                        'Transitions': [
                            '1985_1986', '1986_1987', '1987_1988', '1988_1989',
                            '1989_1990', '1990_1991', '1991_1992', '1992_1993',
                            '1993_1994', '1994_1995', '1995_1996', '1996_1997',
                            '1997_1998', '1998_1999', '1999_2000', '2000_2001',
                            '2001_2002', '2002_2003', '2003_2004', '2004_2005',
                            '2005_2006', '2006_2007', '2007_2008', '2008_2009',
                            '2009_2010', '2010_2011', '2011_2012', '2012_2013',
                            '2013_2014', '2014_2015', '2015_2016', '2016_2017',
                            '2017_2018', '2018_2019', '2019_2020', '2020_2021',
                            '2021_2022', '2022_2023', '1985_1990', '1990_1995',
                            '1995_2000', '2000_2005', '2005_2010', '2010_2015',
                            '2015_2020', '1990_2000', '2000_2010', '2010_2020',
                            '1985_2023', '2008_2017', '1994_2002', '2002_2010',
                            '2010_2016', '1986_2015', '1990_2023', '2000_2023',
                            '2008_2023', '2010_2023', '2012_2023'
                        ],
                    },
                },
            },
            'mapbiomas-chaco': {
                'collection-1.0': {
                    'assets': {
                        'integration': 'projects/mapbiomas-chaco/public/collection1/mapbiomas_chaco_collection1_integration_v1',
                        'transitions': 'projects/mapbiomas-chaco/public/collection1/mapbiomas_chaco_collection1_transitions_v1',
                    },
                    'periods': {
                        'Coverage': [
                            '2010', '2011', '2012', '2013',
                            '2014', '2015', '2016', '2017'
                        ],
                        'Transitions': [
                            '2010_2011', '2011_2012', '2012_2013', '2013_2014',
                            '2014_2015', '2015_2016', '2016_2017', '2010_2017',
                            '2013_2017'
                        ],
                    },
                },
                'collection-2.0': {
                    'assets': {
                        'integration': 'projects/mapbiomas-chaco/public/collection2/mapbiomas_chaco_collection2_integration_v1',
                        'transitions': 'projects/mapbiomas-chaco/public/collection2/mapbiomas_chaco_collection2_transitions_v1',
                    },
                    'periods': {
                        'Coverage': [
                            '2000', '2001', '2002', '2003',
                            '2004', '2005', '2006', '2007',
                            '2008', '2009', '2010', '2011',
                            '2012', '2013', '2014', '2015',
                            '2016', '2017', '2018', '2019'
                        ],
                        'Transitions': [
                            '2000_2001', '2001_2002', '2002_2003', '2003_2004',
                            '2004_2005', '2005_2006', '2006_2007', '2007_2008',
                            '2008_2009', '2009_2010', '2010_2011', '2011_2012',
                            '2012_2013', '2013_2014', '2014_2015', '2015_2016',
                            '2016_2017', '2017_2018', '2018_2019', '2000_2005',
                            '2005_2010', '2010_2015', '2015_2019', '2000_2010',
                            '2010_2019', '2000_2019'
                        ],
                    },
                },
                'collection-3.0': {
                    'assets': {
                        'integration': 'projects/mapbiomas-chaco/public/collection3/mapbiomas_chaco_collection3_integration_v2',
                        'transitions': 'projects/mapbiomas-chaco/public/collection3/mapbiomas_chaco_collection3_transitions_v2',
                    },
                    'periods': {
                        'Coverage': [
                            '2000', '2001', '2002', '2003',
                            '2004', '2005', '2006', '2007',
                            '2008', '2009', '2010', '2011',
                            '2012', '2013', '2014', '2015',
                            '2016', '2017', '2018', '2019',
                            '2020', '2021'
                        ],
                        'Transitions': [
                            '2000_2001', '2001_2002', '2002_2003', '2003_2004',
                            '2004_2005', '2005_2006', '2006_2007', '2007_2008',
                            '2008_2009', '2009_2010', '2010_2011', '2011_2012',
                            '2012_2013', '2013_2014', '2014_2015', '2015_2016',
                            '2016_2017', '2017_2018', '2018_2019', '2019_2020',
                            '2020_2021', '2000_2005', '2005_2010', '2010_2015',
                            '2015_2020', '2000_2010', '2010_2020'
                        ],
                    },
                },
                'collection-4.0': {
                    'assets': {
                        'integration': 'projects/mapbiomas-chaco/public/collection4/mapbiomas_chaco_collection4_integration_v1',
                        'transitions': 'projects/mapbiomas-chaco/public/collection4/mapbiomas_chaco_collection4_transitions_v1',
                    },
                    'periods': {
                        'Coverage': [
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
                        'Transitions': [
                            '1985_1986', '1986_1987', '1987_1988', '1988_1989',
                            '1989_1990', '1990_1991', '1991_1992', '1992_1993',
                            '1993_1994', '1994_1995', '1995_1996', '1996_1997',
                            '1997_1998', '1998_1999', '1999_2000', '2000_2001',
                            '2001_2002', '2002_2003', '2003_2004', '2004_2005',
                            '2005_2006', '2006_2007', '2007_2008', '2008_2009',
                            '2009_2010', '2010_2011', '2011_2012', '2012_2013',
                            '2013_2014', '2014_2015', '2015_2016', '2016_2017',
                            '2017_2018', '2018_2019', '2019_2020', '2020_2021',
                            '2021_2022', '1985_1990', '1990_1995', '1995_2000',
                            '2000_2005', '2005_2010', '2010_2015', '2015_2020',
                            '1990_2000', '2000_2010', '2010_2020', '1985_2022',
                            '2000_2022'
                        ],
                    },
                },
                'collection-5.0': {
                    'assets': {
                        'integration': 'projects/mapbiomas-public/assets/chaco/lulc/collection5/mapbiomas_chaco_collection5_integration_v2',
                        'transitions': 'projects/mapbiomas-public/assets/chaco/lulc/collection5/mapbiomas_chaco_collection5_transitions_v2',
                        'quality': 'projects/mapbiomas-public/assets/chaco/lulc/collection5/mapbiomas_chaco_collection5_quality_v1',
                    },
                    'periods': {
                        'Coverage': [
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
                        'Transitions': [
                            '1985_1986', '1986_1987', '1987_1988', '1988_1989',
                            '1989_1990', '1990_1991', '1991_1992', '1992_1993',
                            '1993_1994', '1994_1995', '1995_1996', '1996_1997',
                            '1997_1998', '1998_1999', '1999_2000', '2000_2001',
                            '2001_2002', '2002_2003', '2003_2004', '2004_2005',
                            '2005_2006', '2006_2007', '2007_2008', '2008_2009',
                            '2009_2010', '2010_2011', '2011_2012', '2012_2013',
                            '2013_2014', '2014_2015', '2015_2016', '2016_2017',
                            '2017_2018', '2018_2019', '2019_2020', '2020_2021',
                            '2021_2022', '2022_2023', '1985_1990', '1990_1995',
                            '1995_2000', '2000_2005', '2005_2010', '2010_2015',
                            '2015_2020', '1990_2000', '2000_2010', '2010_2020',
                            '1985_2023', '2000_2023'
                        ],
                        'Quality': [
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
            },
            'mapbiomas-atlantic-forest': {
                'collection-1.0': {
                    'assets': {
                        'integration': 'projects/mapbiomas_af_trinacional/public/collection1/mapbiomas_atlantic_forest_collection1_integration_v1',
                        'transitions': 'projects/mapbiomas_af_trinacional/public/collection1/mapbiomas_atlantic_forest_collection1_transitions_v1',
                        'quality': 'projects/mapbiomas_af_trinacional/public/collection1/mapbiomas_atlantic_forest_collection1_quality_v1',
                    },
                    'periods': {
                        'Coverage': [
                            '2000', '2001', '2002', '2003',
                            '2004', '2005', '2006', '2007',
                            '2008', '2009', '2010', '2011',
                            '2012', '2013', '2014', '2015',
                            '2016', '2017', '2018', '2019'
                        ],
                        'Transitions': [
                            '2000_2001', '2001_2002', '2002_2003', '2003_2004',
                            '2004_2005', '2005_2006', '2006_2007', '2007_2008',
                            '2008_2009', '2009_2010', '2010_2011', '2011_2012',
                            '2012_2013', '2013_2014', '2014_2015', '2015_2016',
                            '2016_2017', '2017_2018', '2018_2019', '2000_2005',
                            '2005_2010', '2010_2015', '2015_2019', '2000_2010',
                            '2010_2019', '2008_2019', '2012_2019', '2002_2010',
                            '2010_2016', '2000_2019'
                        ],
                        'Quality': [
                            '2000', '2001', '2002', '2003',
                            '2004', '2005', '2006', '2007',
                            '2008', '2009', '2010', '2011',
                            '2012', '2013', '2014', '2015',
                            '2016', '2017', '2018', '2019'
                        ],
                    },
                },
                'collection-2.0': {
                    'assets': {
                        'integration': 'projects/mapbiomas_af_trinacional/public/collection2/mapbiomas_atlantic_forest_collection20_integration_v1',
                        'transitions': 'projects/mapbiomas_af_trinacional/public/collection2/mapbiomas_atlantic_forest_collection20_transitions_v1',
                        'quality': 'projects/mapbiomas_af_trinacional/public/collection2/mapbiomas_atlantic_forest_collection20_quality_v1',
                    },
                    'periods': {
                        'Coverage': [
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
                        'Transitions': [
                            '1985_1986', '1986_1987', '1987_1988', '1988_1989',
                            '1989_1990', '1990_1991', '1991_1992', '1992_1993',
                            '1993_1994', '1994_1995', '1995_1996', '1996_1997',
                            '1997_1998', '1998_1999', '1999_2000', '2000_2001',
                            '2001_2002', '2002_2003', '2003_2004', '2004_2005',
                            '2005_2006', '2006_2007', '2007_2008', '2008_2009',
                            '2009_2010', '2010_2011', '2011_2012', '2012_2013',
                            '2013_2014', '2014_2015', '2015_2016', '2016_2017',
                            '2017_2018', '2018_2019', '2019_2020', '2020_2021',
                            '1985_1990', '1990_1995', '1995_2000', '2000_2005',
                            '2005_2010', '2010_2015', '2015_2020', '1990_2000',
                            '2000_2010', '2010_2020', '1985_2021', '2008_2021',
                            '2012_2021', '1994_2002', '2002_2010', '2010_2016',
                            '2016_2021', '1993_2008'
                        ],
                        'Quality': [
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
                'collection-3.0': {
                    'assets': {
                        'integration': 'projects/mapbiomas_af_trinacional/public/collection3/mapbiomas_atlantic_forest_collection30_integration_v1',
                        'transitions': 'projects/mapbiomas_af_trinacional/public/collection3/mapbiomas_atlantic_forest_collection30_transitions_v1',
                        'quality': 'projects/mapbiomas_af_trinacional/public/collection3/mapbiomas_atlantic_forest_collection30_quality_v1',
                    },
                    'periods': {
                        'Coverage': [
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
                        'Transitions': [
                            '1985_1986', '1986_1987', '1987_1988', '1988_1989',
                            '1989_1990', '1990_1991', '1991_1992', '1992_1993',
                            '1993_1994', '1994_1995', '1995_1996', '1996_1997',
                            '1997_1998', '1998_1999', '1999_2000', '2000_2001',
                            '2001_2002', '2002_2003', '2003_2004', '2004_2005',
                            '2005_2006', '2006_2007', '2007_2008', '2008_2009',
                            '2009_2010', '2010_2011', '2011_2012', '2012_2013',
                            '2013_2014', '2014_2015', '2015_2016', '2016_2017',
                            '2017_2018', '2018_2019', '2019_2020', '2020_2021',
                            '2021_2022', '1985_1990', '1990_1995', '1995_2000',
                            '2000_2005', '2005_2010', '2010_2015', '2015_2020',
                            '1990_2000', '2000_2010', '2010_2020', '1985_2022',
                            '2008_2022', '2012_2022', '2002_2010', '2010_2016',
                            '1993_2008'
                        ],
                        'Quality': [
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
                'collection-4.0': {
                    'assets': {
                        'integration': 'projects/mapbiomas-public/assets/atlantic_forest/lulc/collection4/mapbiomas_atlantic_forest_collection4_coverage_v1',
                        'transitions': 'projects/mapbiomas-public/assets/atlantic_forest/lulc/collection4/mapbiomas_atlantic_forest_collection4_transitions_v1',
                        'quality': 'projects/mapbiomas-public/assets/atlantic_forest/lulc/collection4/mapbiomas_atlantic_forest_collection4_quality_v1',
                    },
                    'periods': {
                        'Coverage': [
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
                        'Transitions': [
                            '1985_1986', '1986_1987', '1987_1988', '1988_1989',
                            '1989_1990', '1990_1991', '1991_1992', '1992_1993',
                            '1993_1994', '1994_1995', '1995_1996', '1996_1997',
                            '1997_1998', '1998_1999', '1999_2000', '2000_2001',
                            '2001_2002', '2002_2003', '2003_2004', '2004_2005',
                            '2005_2006', '2006_2007', '2007_2008', '2008_2009',
                            '2009_2010', '2010_2011', '2011_2012', '2012_2013',
                            '2013_2014', '2014_2015', '2015_2016', '2016_2017',
                            '2017_2018', '2018_2019', '2019_2020', '2020_2021',
                            '2021_2022', '2022_2023', '1985_1990', '1990_1995',
                            '1995_2000', '2000_2005', '2005_2010', '2010_2015',
                            '2015_2020', '1990_2000', '2000_2010', '2010_2020',
                            '1985_2023', '2008_2023', '2012_2023', '2002_2010',
                            '2010_2016', '1993_2008'
                        ],
                        'Quality': [
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
            },
            'mapbiomas-pampa': {
                'collection-1.0': {
                    'assets': {
                        'integration': 'projects/MapBiomas_Pampa/public/collection1/mapbiomas_pampa_collection1_integration_v1',
                        'transitions': 'projects/MapBiomas_Pampa/public/collection1/mapbiomas_pampa_collection1_transitions_v1',
                        'quality': 'projects/MapBiomas_Pampa/public/collection1/mapbiomas_pampa_collection1_quality_v1',
                    },
                    'periods': {
                        'Coverage': [
                            '2000', '2001', '2002', '2003',
                            '2004', '2005', '2006', '2007',
                            '2008', '2009', '2010', '2011',
                            '2012', '2013', '2014', '2015',
                            '2016', '2017', '2018', '2019'
                        ],
                        'Transitions': [
                            '2000_2001', '2001_2002', '2002_2003', '2003_2004',
                            '2004_2005', '2005_2006', '2006_2007', '2007_2008',
                            '2008_2009', '2009_2010', '2010_2011', '2011_2012',
                            '2012_2013', '2013_2014', '2014_2015', '2015_2016',
                            '2016_2017', '2017_2018', '2018_2019', '2000_2005',
                            '2005_2010', '2010_2015', '2015_2019', '2000_2010',
                            '2010_2019', '2008_2019', '2012_2019', '2002_2010',
                            '2000_2019'
                        ],
                        'Quality': [
                            '2000', '2001', '2002', '2003',
                            '2004', '2005', '2006', '2007',
                            '2008', '2009', '2010', '2011',
                            '2012', '2013', '2014', '2015',
                            '2016', '2017', '2018', '2019'
                        ],
                    },
                },
                'collection-2.0': {
                    'assets': {
                        'integration': 'projects/MapBiomas_Pampa/public/collection2/mapbiomas_pampa_collection2_integration_v1',
                        'transitions': 'projects/MapBiomas_Pampa/public/collection2/mapbiomas_pampa_collection2_transitions_v1',
                        'quality': 'projects/MapBiomas_Pampa/public/collection2/mapbiomas_pampa_collection2_quality_v1',
                    },
                    'periods': {
                        'Coverage': [
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
                        'Transitions': [
                            '1985_1986', '1986_1987', '1987_1988', '1988_1989',
                            '1989_1990', '1990_1991', '1991_1992', '1992_1993',
                            '1993_1994', '1994_1995', '1995_1996', '1996_1997',
                            '1997_1998', '1998_1999', '1999_2000', '2000_2001',
                            '2001_2002', '2002_2003', '2003_2004', '2004_2005',
                            '2005_2006', '2006_2007', '2007_2008', '2008_2009',
                            '2009_2010', '2010_2011', '2011_2012', '2012_2013',
                            '2013_2014', '2014_2015', '2015_2016', '2016_2017',
                            '2017_2018', '2018_2019', '2019_2020', '2020_2021',
                            '1985_1990', '1990_1995', '1995_2000', '2000_2005',
                            '2005_2010', '2010_2015', '2015_2020', '1990_2000',
                            '2000_2010', '2010_2020', '1985_2021', '2008_2017',
                            '1994_2002', '2002_2010', '2010_2016', '1986_2015',
                            '1990_2021', '2000_2021', '2008_2021', '2010_2021',
                            '2012_2021'
                        ],
                        'Quality': [
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
                'collection-3.0': {
                    'assets': {
                        'integration': 'projects/MapBiomas_Pampa/public/collection3/mapbiomas_pampa_collection3_integration_v1',
                        'transitions': 'projects/MapBiomas_Pampa/public/collection3/mapbiomas_pampa_collection3_transitions_v1',
                        'quality': 'projects/MapBiomas_Pampa/public/collection3/mapbiomas_pampa_collection3_quality_v1',
                    },
                    'periods': {
                        'Coverage': [
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
                        'Transitions': [
                            '1985_1986', '1986_1987', '1987_1988', '1988_1989',
                            '1989_1990', '1990_1991', '1991_1992', '1992_1993',
                            '1993_1994', '1994_1995', '1995_1996', '1996_1997',
                            '1997_1998', '1998_1999', '1999_2000', '2000_2001',
                            '2001_2002', '2002_2003', '2003_2004', '2004_2005',
                            '2005_2006', '2006_2007', '2007_2008', '2008_2009',
                            '2009_2010', '2010_2011', '2011_2012', '2012_2013',
                            '2013_2014', '2014_2015', '2015_2016', '2016_2017',
                            '2017_2018', '2018_2019', '2019_2020', '2020_2021',
                            '2021_2022', '1985_1990', '1990_1995', '1995_2000',
                            '2000_2005', '2005_2010', '2010_2015', '2015_2020',
                            '1990_2000', '2000_2010', '2010_2020', '1985_2022',
                            '2008_2017', '1994_2002', '2002_2010', '2010_2016',
                            '1986_2015', '1990_2022', '2000_2022', '2008_2022',
                            '2010_2022', '2012_2022'
                        ],
                        'Quality': [
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
                'collection-4.0': {
                    'assets': {
                        'integration': 'projects/mapbiomas-public/assets/pampa/collection4/mapbiomas_pampa_collection4_integration_v1',
                        'transitions': 'projects/mapbiomas-public/assets/pampa/collection4/mapbiomas_pampa_collection4_transitions_v1',
                        'quality': 'projects/mapbiomas-public/assets/pampa/collection4/mapbiomas_pampa_collection4_quality_v1',
                    },
                    'periods': {
                        'Coverage': [
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
                        'Transitions': [
                            '1985_1986', '1986_1987', '1987_1988', '1988_1989',
                            '1989_1990', '1990_1991', '1991_1992', '1992_1993',
                            '1993_1994', '1994_1995', '1995_1996', '1996_1997',
                            '1997_1998', '1998_1999', '1999_2000', '2000_2001',
                            '2001_2002', '2002_2003', '2003_2004', '2004_2005',
                            '2005_2006', '2006_2007', '2007_2008', '2008_2009',
                            '2009_2010', '2010_2011', '2011_2012', '2012_2013',
                            '2013_2014', '2014_2015', '2015_2016', '2016_2017',
                            '2017_2018', '2018_2019', '2019_2020', '2020_2021',
                            '2021_2022', '2022_2023', '1985_1990', '1990_1995',
                            '1995_2000', '2000_2005', '2005_2010', '2010_2015',
                            '2015_2020', '1990_2000', '2000_2010', '2010_2020',
                            '1985_2023', '2008_2017', '1994_2002', '2002_2010',
                            '2010_2016', '1986_2015', '1990_2023', '2000_2023',
                            '2008_2023', '2010_2023', '2012_2023'
                        ],
                        'Quality': [
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
            },
            'mapbiomas-indonesia': {
                'collection-1.0': {
                    'assets': {
                        'integration': 'projects/mapbiomas-indonesia/public/collection1/mapbiomas_indonesia_collection1_integration_v1',
                        'transitions': 'projects/mapbiomas-indonesia/public/collection1/mapbiomas_indonesia_collection1_transitions_v2',
                        'quality': 'projects/mapbiomas-indonesia/public/collection1/mapbiomas_indonesia_collection1_quality_v1',
                    },
                    'periods': {
                        'Coverage': [
                            '2000', '2001', '2002', '2003',
                            '2004', '2005', '2006', '2007',
                            '2008', '2009', '2010', '2011',
                            '2012', '2013', '2014', '2015',
                            '2016', '2017', '2018', '2019'
                        ],
                        'Transitions': [
                            '2000_2001', '2001_2002', '2002_2003', '2003_2004',
                            '2004_2005', '2005_2006', '2006_2007', '2007_2008',
                            '2008_2009', '2009_2010', '2010_2011', '2011_2012',
                            '2012_2013', '2013_2014', '2014_2015', '2015_2016',
                            '2016_2017', '2017_2018', '2018_2019', '2000_2005',
                            '2005_2010', '2010_2015', '2015_2019', '2000_2010',
                            '2010_2019', '2000_2019', '2011_2019', '2013_2019',
                            '2014_2019', '2004_2019'
                        ],
                        'Quality': [
                            '2000', '2001', '2002', '2003',
                            '2004', '2005', '2006', '2007',
                            '2008', '2009', '2010', '2011',
                            '2012', '2013', '2014', '2015',
                            '2016', '2017', '2018', '2019'
                        ],
                    },
                },
                'collection-2.0': {
                    'assets': {
                        'integration': 'projects/mapbiomas-indonesia/public/collection2/mapbiomas_indonesia_collection2_integration_v1',
                        'transitions': 'projects/mapbiomas-indonesia/public/collection2/mapbiomas_indonesia_collection2_transitions_v1',
                        'quality': 'projects/mapbiomas-indonesia/public/collection2/mapbiomas_indonesia_collection2_quality_v1',
                    },
                    'periods': {
                        'Coverage': [
                            '2000', '2001', '2002', '2003',
                            '2004', '2005', '2006', '2007',
                            '2008', '2009', '2010', '2011',
                            '2012', '2013', '2014', '2015',
                            '2016', '2017', '2018', '2019',
                            '2020', '2021', '2022'
                        ],
                        'Transitions': [
                            '2000_2001', '2001_2002', '2002_2003', '2003_2004',
                            '2004_2005', '2005_2006', '2006_2007', '2007_2008',
                            '2008_2009', '2009_2010', '2010_2011', '2011_2012',
                            '2012_2013', '2013_2014', '2014_2015', '2015_2016',
                            '2016_2017', '2017_2018', '2018_2019', '2019_2020',
                            '2020_2021', '2021_2022', '2000_2005', '2005_2010',
                            '2010_2015', '2015_2020', '2000_2010', '2010_2020',
                            '2000_2022', '2011_2022', '2013_2022', '2014_2022',
                            '2015_2022', '2004_2022'
                        ],
                        'Quality': [
                            '2000', '2001', '2002', '2003',
                            '2004', '2005', '2006', '2007',
                            '2008', '2009', '2010', '2011',
                            '2012', '2013', '2014', '2015',
                            '2016', '2017', '2018', '2019',
                            '2020', '2021', '2022'
                        ],
                    },
                },
                'collection-3.0': {
                    'assets': {
                        'integration': 'projects/mapbiomas-public/assets/indonesia/lulc/collection3/mapbiomas_indonesia_collection3_integration_v1',
                        'transitions': 'projects/mapbiomas-public/assets/indonesia/lulc/collection3/mapbiomas_indonesia_collection3_transitions_v1',
                        'quality': 'projects/mapbiomas-public/assets/indonesia/lulc/collection3/mapbiomas_indonesia_collection3_quality_v1',
                    },
                    'periods': {
                        'Coverage': [
                            '2000', '2001', '2002', '2003',
                            '2004', '2005', '2006', '2007',
                            '2008', '2009', '2010', '2011',
                            '2012', '2013', '2014', '2015',
                            '2016', '2017', '2018', '2019',
                            '2020', '2021', '2022', '2023',
                            '2024'
                        ],
                        'Transitions': [
                            '2000_2001', '2001_2002', '2002_2003', '2003_2004',
                            '2004_2005', '2005_2006', '2006_2007', '2007_2008',
                            '2008_2009', '2009_2010', '2010_2011', '2011_2012',
                            '2012_2013', '2013_2014', '2014_2015', '2015_2016',
                            '2016_2017', '2017_2018', '2018_2019', '2019_2020',
                            '2020_2021', '2021_2022', '2022_2023', '2023_2024',
                            '2000_2005', '2005_2010', '2010_2015', '2015_2020',
                            '2000_2010', '2010_2020', '2000_2024', '2011_2024',
                            '2013_2024', '2014_2024', '2015_2024', '2004_2024'
                        ],
                        'Quality': [
                            '2000', '2001', '2002', '2003',
                            '2004', '2005', '2006', '2007',
                            '2008', '2009', '2010', '2011',
                            '2012', '2013', '2014', '2015',
                            '2016', '2017', '2018', '2019',
                            '2020', '2021', '2022', '2023',
                            '2024'
                        ],
                    },
                },
                'collection-4.1': {
                    'assets': {
                        'integration': 'projects/mapbiomas-public/assets/indonesia/lulc/collection4_1/mapbiomas_indonesia_collection41_coverage_v1',
                    },
                    'periods': {
                        'Coverage': [
                            '1988', '1989', '1990', '1991',
                            '1992', '1993', '1994', '1995',
                            '1996', '1997', '1998', '1999',
                            '2000', '2001', '2002', '2003',
                            '2004', '2005', '2006', '2007',
                            '2008', '2009', '2010', '2011',
                            '2012', '2013', '2014', '2015',
                            '2016', '2017', '2018', '2019',
                            '2020', '2021', '2022', '2023',
                            '2024'
                        ],
                    },
                },
            },
            'mapbiomas-peru': {
                'collection-1.0': {
                    'assets': {
                        'integration': 'projects/mapbiomas-public/assets/peru/collection1/mapbiomas_peru_collection1_integration_v1',
                        'transitions': 'projects/mapbiomas-public/assets/peru/collection1/mapbiomas_peru_collection1_transitions_v1',
                        'quality': 'projects/mapbiomas-public/assets/peru/collection1/mapbiomas_peru_collection1_quality_v1',
                    },
                    'periods': {
                        'Coverage': [
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
                        'Transitions': [
                            '1985_1986', '1986_1987', '1987_1988', '1988_1989',
                            '1989_1990', '1990_1991', '1991_1992', '1992_1993',
                            '1993_1994', '1994_1995', '1995_1996', '1996_1997',
                            '1997_1998', '1998_1999', '1999_2000', '2000_2001',
                            '2001_2002', '2002_2003', '2003_2004', '2004_2005',
                            '2005_2006', '2006_2007', '2007_2008', '2008_2009',
                            '2009_2010', '2010_2011', '2011_2012', '2012_2013',
                            '2013_2014', '2014_2015', '2015_2016', '2016_2017',
                            '2017_2018', '2018_2019', '2019_2020', '2020_2021',
                            '1985_1990', '1990_1995', '1995_2000', '2000_2005',
                            '2005_2010', '2010_2015', '2015_2020', '1990_2000',
                            '2000_2010', '2010_2020', '1985_2021', '2008_2017',
                            '1994_2002', '2002_2010', '2010_2016', '1986_2015',
                            '1990_2021', '2000_2021', '2008_2021', '2010_2021',
                            '2012_2021'
                        ],
                        'Quality': [
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
                'collection-2.0': {
                    'assets': {
                        'integration': 'projects/mapbiomas-public/assets/peru/collection2/mapbiomas_peru_collection2_integration_v1',
                        'transitions': 'projects/mapbiomas-public/assets/peru/collection2/mapbiomas_peru_collection2_transitions_v1',
                    },
                    'periods': {
                        'Coverage': [
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
                        'Transitions': [
                            '1985_1986', '1986_1987', '1987_1988', '1988_1989',
                            '1989_1990', '1990_1991', '1991_1992', '1992_1993',
                            '1993_1994', '1994_1995', '1995_1996', '1996_1997',
                            '1997_1998', '1998_1999', '1999_2000', '2000_2001',
                            '2001_2002', '2002_2003', '2003_2004', '2004_2005',
                            '2005_2006', '2006_2007', '2007_2008', '2008_2009',
                            '2009_2010', '2010_2011', '2011_2012', '2012_2013',
                            '2013_2014', '2014_2015', '2015_2016', '2016_2017',
                            '2017_2018', '2018_2019', '2019_2020', '2020_2021',
                            '2021_2022', '1985_1990', '1990_1995', '1995_2000',
                            '2000_2005', '2005_2010', '2010_2015', '2015_2020',
                            '1990_2000', '2000_2010', '2010_2020', '1985_2022',
                            '2008_2017', '1994_2002', '2002_2010', '2010_2016',
                            '1986_2015', '1990_2022', '2000_2022', '2008_2022',
                            '2010_2022', '2012_2022'
                        ],
                    },
                },
                'collection-3.0': {
                    'assets': {
                        'integration': 'projects/mapbiomas-public/assets/peru/collection3/mapbiomas_peru_collection3_integration_v1',
                        'transitions': 'projects/mapbiomas-public/assets/peru/collection3/mapbiomas_peru_collection3_transitions_v1',
                        'quality': 'projects/mapbiomas-public/assets/peru/collection3/mapbiomas_peru_collection3_quality_v3',
                    },
                    'periods': {
                        'Coverage': [
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
                        'Transitions': [
                            '1985_1986', '1986_1987', '1987_1988', '1988_1989',
                            '1989_1990', '1990_1991', '1991_1992', '1992_1993',
                            '1993_1994', '1994_1995', '1995_1996', '1996_1997',
                            '1997_1998', '1998_1999', '1999_2000', '2000_2001',
                            '2001_2002', '2002_2003', '2003_2004', '2004_2005',
                            '2005_2006', '2006_2007', '2007_2008', '2008_2009',
                            '2009_2010', '2010_2011', '2011_2012', '2012_2013',
                            '2013_2014', '2014_2015', '2015_2016', '2016_2017',
                            '2017_2018', '2018_2019', '2019_2020', '2020_2021',
                            '2021_2022', '2022_2023', '2023_2024', '2012_2024',
                            '1985_1990', '1990_1995', '1995_2000', '2000_2005',
                            '2005_2010', '2010_2015', '2015_2020', '1990_2000',
                            '2000_2010', '2010_2020', '1985_2024', '2008_2017',
                            '1994_2002', '2002_2010', '2010_2016', '1986_2015',
                            '1990_2024', '2000_2024', '2008_2024', '2010_2024'
                        ],
                        'Quality': [
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
                'collection-4.0': {
                    'assets': {
                        'integration': 'projects/mapbiomas-public/assets/peru/collection4/mapbiomas_peru_collection4_coverage_v1',
                    },
                    'periods': {
                        'Coverage': [
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
            'mapbiomas-bolivia': {
                'collection-1.0': {
                    'assets': {
                        'integration': 'projects/mapbiomas-public/assets/bolivia/collection1/mapbiomas_bolivia_collection1_integration_v1',
                        'transitions': 'projects/mapbiomas-public/assets/bolivia/collection1/mapbiomas_bolivia_collection1_transitions_v1',
                    },
                    'periods': {
                        'Coverage': [
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
                        'Transitions': [
                            '1985_1986', '1986_1987', '1987_1988', '1988_1989',
                            '1989_1990', '1990_1991', '1991_1992', '1992_1993',
                            '1993_1994', '1994_1995', '1995_1996', '1996_1997',
                            '1997_1998', '1998_1999', '1999_2000', '2000_2001',
                            '2001_2002', '2002_2003', '2003_2004', '2004_2005',
                            '2005_2006', '2006_2007', '2007_2008', '2008_2009',
                            '2009_2010', '2010_2011', '2011_2012', '2012_2013',
                            '2013_2014', '2014_2015', '2015_2016', '2016_2017',
                            '2017_2018', '2018_2019', '2019_2020', '2020_2021',
                            '1985_1990', '1990_1995', '1995_2000', '2000_2005',
                            '2005_2010', '2010_2015', '2015_2020', '1990_2000',
                            '2000_2010', '2010_2020', '1985_2021', '2008_2017',
                            '1994_2002', '2002_2010', '2010_2016', '1986_2015',
                            '1990_2021', '2000_2021', '2008_2021', '2010_2021',
                            '2012_2021'
                        ],
                    },
                },
                'collection-2.0': {
                    'assets': {
                        'integration': 'projects/mapbiomas-public/assets/bolivia/collection2/mapbiomas_bolivia_collection2_integration_v1',
                        'transitions': 'projects/mapbiomas-public/assets/bolivia/collection2/mapbiomas_bolivia_collection2_transitions_v1',
                        'quality': 'projects/mapbiomas-public/assets/bolivia/collection2/mapbiomas_collection2_quality_v1',
                    },
                    'periods': {
                        'Coverage': [
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
                        'Transitions': [
                            '1985_1986', '1986_1987', '1987_1988', '1988_1989',
                            '1989_1990', '1990_1991', '1991_1992', '1992_1993',
                            '1993_1994', '1994_1995', '1995_1996', '1996_1997',
                            '1997_1998', '1998_1999', '1999_2000', '2000_2001',
                            '2001_2002', '2002_2003', '2003_2004', '2004_2005',
                            '2005_2006', '2006_2007', '2007_2008', '2008_2009',
                            '2009_2010', '2010_2011', '2011_2012', '2012_2013',
                            '2013_2014', '2014_2015', '2015_2016', '2016_2017',
                            '2017_2018', '2018_2019', '2019_2020', '2020_2021',
                            '2021_2022', '2022_2023', '1985_1990', '1990_1995',
                            '1995_2000', '2000_2005', '2005_2010', '2010_2015',
                            '2015_2020', '1990_2000', '2000_2010', '2010_2020',
                            '1985_2023', '2008_2017', '1994_2002', '2002_2010',
                            '2010_2016', '1986_2015', '1990_2023', '2000_2023',
                            '2008_2023', '2010_2023', '2012_2023'
                        ],
                        'Quality': [
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
                'collection-3.0': {
                    'assets': {
                        'integration': 'projects/mapbiomas-public/assets/bolivia/lulc/collection3/mapbiomas_bolivia_collection3_integration_v1',
                        'transitions': 'projects/mapbiomas-public/assets/bolivia/lulc/collection3/mapbiomas_bolivia_collection3_transitions_v1',
                        'quality': 'projects/mapbiomas-public/assets/bolivia/lulc/collection3/mapbiomas_bolivia_collection3_quality_v1',
                    },
                    'periods': {
                        'Coverage': [
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
                        'Transitions': [
                            '1985_1986', '1986_1987', '1987_1988', '1988_1989',
                            '1989_1990', '1990_1991', '1991_1992', '1992_1993',
                            '1993_1994', '1994_1995', '1995_1996', '1996_1997',
                            '1997_1998', '1998_1999', '1999_2000', '2000_2001',
                            '2001_2002', '2002_2003', '2003_2004', '2004_2005',
                            '2005_2006', '2006_2007', '2007_2008', '2008_2009',
                            '2009_2010', '2010_2011', '2011_2012', '2012_2013',
                            '2013_2014', '2014_2015', '2015_2016', '2016_2017',
                            '2017_2018', '2018_2019', '2019_2020', '2020_2021',
                            '2021_2022', '2022_2023', '2023_2024', '1985_2024',
                            '2008_2017', '1994_2002', '2002_2010', '2010_2016',
                            '1986_2015', '1990_2024', '2000_2024', '2008_2024',
                            '2010_2024', '2012_2024'
                        ],
                        'Quality': [
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
            'mapbiomas-colombia': {
                'collection-1.0': {
                    'assets': {
                        'integration': 'projects/mapbiomas-public/assets/colombia/collection1/mapbiomas_colombia_collection1_integration_v1',
                        'transitions': 'projects/mapbiomas-public/assets/colombia/collection1/mapbiomas_colombia_collection1_transitions_v1',
                        'quality': 'projects/mapbiomas-public/assets/colombia/collection1/mapbiomas_colombia_collection1_quality_v1',
                    },
                    'periods': {
                        'Coverage': [
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
                        'Transitions': [
                            '1985_1986', '1986_1987', '1987_1988', '1988_1989',
                            '1989_1990', '1990_1991', '1991_1992', '1992_1993',
                            '1993_1994', '1994_1995', '1995_1996', '1996_1997',
                            '1997_1998', '1998_1999', '1999_2000', '2000_2001',
                            '2001_2002', '2002_2003', '2003_2004', '2004_2005',
                            '2005_2006', '2006_2007', '2007_2008', '2008_2009',
                            '2009_2010', '2010_2011', '2011_2012', '2012_2013',
                            '2013_2014', '2014_2015', '2015_2016', '2016_2017',
                            '2017_2018', '2018_2019', '2019_2020', '2020_2021',
                            '2021_2022', '1985_1990', '1990_1995', '1995_2000',
                            '2000_2005', '2005_2010', '2010_2015', '2015_2020',
                            '1990_2000', '2000_2010', '2010_2020', '1985_2022'
                        ],
                        'Quality': [
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
                'collection-2.0': {
                    'assets': {
                        'integration': 'projects/mapbiomas-public/assets/colombia/collection2/mapbiomas_colombia_collection2_integration_v1',
                        'transitions': 'projects/mapbiomas-public/assets/colombia/collection2/mapbiomas_colombia_collection2_transitions_v1',
                        'quality': 'projects/mapbiomas-public/assets/colombia/collection2/mapbiomas_colombia_collection2_quality_v1',
                    },
                    'periods': {
                        'Coverage': [
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
                        'Transitions': [
                            '1985_1986', '1986_1987', '1987_1988', '1988_1989',
                            '1989_1990', '1990_1991', '1991_1992', '1992_1993',
                            '1993_1994', '1994_1995', '1995_1996', '1996_1997',
                            '1997_1998', '1998_1999', '1999_2000', '2000_2001',
                            '2001_2002', '2002_2003', '2003_2004', '2004_2005',
                            '2005_2006', '2006_2007', '2007_2008', '2008_2009',
                            '2009_2010', '2010_2011', '2011_2012', '2012_2013',
                            '2013_2014', '2014_2015', '2015_2016', '2016_2017',
                            '2017_2018', '2018_2019', '2019_2020', '2020_2021',
                            '2021_2022', '2022_2023', '1985_1990', '1990_1995',
                            '1995_2000', '2000_2005', '2005_2010', '2010_2015',
                            '2015_2020', '1990_2000', '2000_2010', '2010_2020',
                            '1985_2023', '1991_2001', '2002_2012', '2013_2023',
                            '2006_2011', '2012_2017', '2018_2023', '2019_2023'
                        ],
                        'Quality': [
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
                'collection-3.0': {
                    'assets': {
                        'integration': 'projects/mapbiomas-public/assets/colombia/lulc/collection3/mapbiomas_colombia_collection3_coverage_v2',
                    },
                    'periods': {
                        'Coverage': [
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
            'mapbiomas-venezuela': {
                'collection-1.0': {
                    'assets': {
                        'integration': 'projects/mapbiomas-public/assets/venezuela/collection1/mapbiomas_venezuela_collection1_integration_v1',
                        'transitions': 'projects/mapbiomas-public/assets/venezuela/collection1/mapbiomas_venezuela_collection1_transitions_v1',
                        'quality': 'projects/mapbiomas-public/assets/venezuela/collection1/mapbiomas_venezuela_collection1_quality_v1',
                    },
                    'periods': {
                        'Coverage': [
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
                        'Transitions': [
                            '1985_1986', '1986_1987', '1987_1988', '1988_1989',
                            '1989_1990', '1990_1991', '1991_1992', '1992_1993',
                            '1993_1994', '1994_1995', '1995_1996', '1996_1997',
                            '1997_1998', '1998_1999', '1999_2000', '2000_2001',
                            '2001_2002', '2002_2003', '2003_2004', '2004_2005',
                            '2005_2006', '2006_2007', '2007_2008', '2008_2009',
                            '2009_2010', '2010_2011', '2011_2012', '2012_2013',
                            '2013_2014', '2014_2015', '2015_2016', '2016_2017',
                            '2017_2018', '2018_2019', '2019_2020', '2020_2021',
                            '2021_2022', '1985_1990', '1990_1995', '1995_2000',
                            '2000_2005', '2005_2010', '2010_2015', '2015_2020',
                            '1990_2000', '2000_2010', '2010_2020', '1985_2022'
                        ],
                        'Quality': [
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
                'collection-2.0': {
                    'assets': {
                        'integration': 'projects/mapbiomas-public/assets/venezuela/collection2/mapbiomas_venezuela_collection2_integration_v1',
                        'transitions': 'projects/mapbiomas-public/assets/venezuela/collection2/mapbiomas_venezuela_collection2_transitions_v1',
                        'quality': 'projects/mapbiomas-public/assets/venezuela/collection2/mapbiomas_venezuela_collection2_quality_v1',
                    },
                    'periods': {
                        'Coverage': [
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
                        'Transitions': [
                            '1985_1986', '1986_1987', '1987_1988', '1988_1989',
                            '1989_1990', '1990_1991', '1991_1992', '1992_1993',
                            '1993_1994', '1994_1995', '1995_1996', '1996_1997',
                            '1997_1998', '1998_1999', '1999_2000', '2000_2001',
                            '2001_2002', '2002_2003', '2003_2004', '2004_2005',
                            '2005_2006', '2006_2007', '2007_2008', '2008_2009',
                            '2009_2010', '2010_2011', '2011_2012', '2012_2013',
                            '2013_2014', '2014_2015', '2015_2016', '2016_2017',
                            '2017_2018', '2018_2019', '2019_2020', '2020_2021',
                            '2021_2022', '2022_2023', '1985_1990', '1990_1995',
                            '1995_2000', '2000_2005', '2005_2010', '2010_2015',
                            '2015_2020', '1990_2000', '2000_2010', '2010_2020',
                            '1985_2023', '2000_2023'
                        ],
                        'Quality': [
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
                'collection-3.0': {
                    'assets': {
                        'integration': 'projects/mapbiomas-public/assets/venezuela/lulc/collection3/mapbiomas_venezuela_collection3_coverage_v1',
                    },
                    'periods': {
                        'Coverage': [
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
                'collection-1.0': {
                    'assets': {
                        'integration': 'projects/MapBiomas_Pampa/public/collection3/mapbiomas_uruguay_collection1_integration_v1',
                        'transitions': 'projects/MapBiomas_Pampa/public/collection3/mapbiomas_uruguay_collection1_transitions_v1',
                        'quality': 'projects/MapBiomas_Pampa/public/collection3/mapbiomas_uruguay_collection1_quality_v1',
                    },
                    'periods': {
                        'Coverage': [
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
                        'Transitions': [
                            '1985_1986', '1986_1987', '1987_1988', '1988_1989',
                            '1989_1990', '1990_1991', '1991_1992', '1992_1993',
                            '1993_1994', '1994_1995', '1995_1996', '1996_1997',
                            '1997_1998', '1998_1999', '1999_2000', '2000_2001',
                            '2001_2002', '2002_2003', '2003_2004', '2004_2005',
                            '2005_2006', '2006_2007', '2007_2008', '2008_2009',
                            '2009_2010', '2010_2011', '2011_2012', '2012_2013',
                            '2013_2014', '2014_2015', '2015_2016', '2016_2017',
                            '2017_2018', '2018_2019', '2019_2020', '2020_2021',
                            '2021_2022', '1985_1990', '1990_1995', '1995_2000',
                            '2000_2005', '2005_2010', '2010_2015', '2015_2020',
                            '1990_2000', '2000_2010', '2010_2020', '1985_2022',
                            '2008_2017', '1994_2002', '2002_2010', '2010_2016',
                            '1986_2015', '1990_2022', '2000_2022', '2008_2022',
                            '2010_2022', '2012_2022'
                        ],
                        'Quality': [
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
                'collection-2.0': {
                    'assets': {
                        'integration': 'projects/mapbiomas-public/assets/uruguay/collection2/mapbiomas_uruguay_collection2_integration_v1',
                        'transitions': 'projects/mapbiomas-public/assets/uruguay/collection2/mapbiomas_uruguay_collection2_transitions_v1',
                        'quality': 'projects/mapbiomas-public/assets/uruguay/collection2/mapbiomas_uruguay_collection2_quality_v1',
                    },
                    'periods': {
                        'Coverage': [
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
                        'Transitions': [
                            '1985_1986', '1986_1987', '1987_1988', '1988_1989',
                            '1989_1990', '1990_1991', '1991_1992', '1992_1993',
                            '1993_1994', '1994_1995', '1995_1996', '1996_1997',
                            '1997_1998', '1998_1999', '1999_2000', '2000_2001',
                            '2001_2002', '2002_2003', '2003_2004', '2004_2005',
                            '2005_2006', '2006_2007', '2007_2008', '2008_2009',
                            '2009_2010', '2010_2011', '2011_2012', '2012_2013',
                            '2013_2014', '2014_2015', '2015_2016', '2016_2017',
                            '2017_2018', '2018_2019', '2019_2020', '2020_2021',
                            '2021_2022', '2022_2023', '1985_1990', '1990_1995',
                            '1995_2000', '2000_2005', '2005_2010', '2010_2015',
                            '2015_2020', '1990_2000', '2000_2010', '2010_2020',
                            '2010_2023', '1985_2023'
                        ],
                        'Quality': [
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
                'collection-3.0': {
                    'assets': {
                        'integration': 'projects/mapbiomas-public/assets/uruguay/lulc/collection3/mapbiomas_uruguay_collection3_coverage_v1',
                    },
                    'periods': {
                        'Coverage': [
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
            'mapbiomas-ecuador': {
                'collection-1.0': {
                    'assets': {
                        'integration': 'projects/mapbiomas-public/assets/ecuador/collection1/mapbiomas_ecuador_collection1_integration_v1',
                        'transitions': 'projects/mapbiomas-public/assets/ecuador/collection1/mapbiomas_ecuador_collection1_transitions_v1',
                        'quality': 'projects/mapbiomas-public/assets/ecuador/collection1/mapbiomas_ecuador_collection1_quality_v1',
                    },
                    'periods': {
                        'Coverage': [
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
                        'Transitions': [
                            '1985_1986', '1986_1987', '1987_1988', '1988_1989',
                            '1989_1990', '1990_1991', '1991_1992', '1992_1993',
                            '1993_1994', '1994_1995', '1995_1996', '1996_1997',
                            '1997_1998', '1998_1999', '1999_2000', '2000_2001',
                            '2001_2002', '2002_2003', '2003_2004', '2004_2005',
                            '2005_2006', '2006_2007', '2007_2008', '2008_2009',
                            '2009_2010', '2010_2011', '2011_2012', '2012_2013',
                            '2013_2014', '2014_2015', '2015_2016', '2016_2017',
                            '2017_2018', '2018_2019', '2019_2020', '2020_2021',
                            '2021_2022', '1985_1990', '1990_1995', '1995_2000',
                            '2000_2005', '2005_2010', '2010_2015', '2015_2020',
                            '1990_2000', '2000_2010', '2010_2020', '1985_2022'
                        ],
                        'Quality': [
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
                'collection-2.0': {
                    'assets': {
                        'integration': 'projects/mapbiomas-public/assets/ecuador/collection2/mapbiomas_ecuador_collection2_integration_v1',
                        'transitions': 'projects/mapbiomas-public/assets/ecuador/collection2/mapbiomas_ecuador_collection2_transitions_v1',
                        'quality': 'projects/mapbiomas-public/assets/ecuador/collection2/mapbiomas_ecuador_collection2_quality_v1',
                    },
                    'periods': {
                        'Coverage': [
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
                        'Transitions': [
                            '1985_1986', '1986_1987', '1987_1988', '1988_1989',
                            '1989_1990', '1990_1991', '1991_1992', '1992_1993',
                            '1993_1994', '1994_1995', '1995_1996', '1996_1997',
                            '1997_1998', '1998_1999', '1999_2000', '2000_2001',
                            '2001_2002', '2002_2003', '2003_2004', '2004_2005',
                            '2005_2006', '2006_2007', '2007_2008', '2008_2009',
                            '2009_2010', '2010_2011', '2011_2012', '2012_2013',
                            '2013_2014', '2014_2015', '2015_2016', '2016_2017',
                            '2017_2018', '2018_2019', '2019_2020', '2020_2021',
                            '2021_2022', '2022_2023', '1985_1990', '1990_1995',
                            '1995_2000', '2000_2005', '2005_2010', '2010_2015',
                            '2015_2020', '1990_2000', '2000_2010', '2010_2020',
                            '1985_2023', '1985_2007', '2008_2023', '2000_2023',
                            '2013_2023'
                        ],
                        'Quality': [
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
                'collection-3.0': {
                    'assets': {
                        'integration': 'projects/mapbiomas-public/assets/ecuador/lulc/collection3/mapbiomas_ecuador_collection3_coverage_v3',
                    },
                    'periods': {
                        'Coverage': [
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
                'collection-1.0': {
                    'assets': {
                        'integration': 'projects/mapbiomas-public/assets/paraguay/collection1/mapbiomas_paraguay_collection1_integration_v1',
                        'transitions': 'projects/mapbiomas-public/assets/paraguay/collection1/mapbiomas_paraguay_collection1_transitions_v1',
                    },
                    'periods': {
                        'Coverage': [
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
                        'Transitions': [
                            '1985_1986', '1986_1987', '1987_1988', '1988_1989',
                            '1989_1990', '1990_1991', '1991_1992', '1992_1993',
                            '1993_1994', '1994_1995', '1995_1996', '1996_1997',
                            '1997_1998', '1998_1999', '1999_2000', '2000_2001',
                            '2001_2002', '2002_2003', '2003_2004', '2004_2005',
                            '2005_2006', '2006_2007', '2007_2008', '2008_2009',
                            '2009_2010', '2010_2011', '2011_2012', '2012_2013',
                            '2013_2014', '2014_2015', '2015_2016', '2016_2017',
                            '2017_2018', '2018_2019', '2019_2020', '2020_2021',
                            '2021_2022', '1985_1990', '1990_1995', '1995_2000',
                            '2000_2005', '2005_2010', '2010_2015', '2015_2020',
                            '1990_2000', '2000_2010', '2010_2020', '1985_2022',
                            '1985_2005', '2005_2022'
                        ],
                    },
                },
                'collection-2.0': {
                    'assets': {
                        'integration': 'projects/mapbiomas-public/assets/paraguay/collection2/mapbiomas_paraguay_collection2_integration_v1',
                        'transitions': 'projects/mapbiomas-public/assets/paraguay/collection2/mapbiomas_paraguay_collection2_transitions_v1',
                        'quality': 'projects/mapbiomas-public/assets/paraguay/collection2/mapbiomas_paraguay_collection2_quality_v1',
                    },
                    'periods': {
                        'Coverage': [
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
                        'Transitions': [
                            '1985_1986', '1986_1987', '1987_1988', '1988_1989',
                            '1989_1990', '1990_1991', '1991_1992', '1992_1993',
                            '1993_1994', '1994_1995', '1995_1996', '1996_1997',
                            '1997_1998', '1998_1999', '1999_2000', '2000_2001',
                            '2001_2002', '2002_2003', '2003_2004', '2004_2005',
                            '2005_2006', '2006_2007', '2007_2008', '2008_2009',
                            '2009_2010', '2010_2011', '2011_2012', '2012_2013',
                            '2013_2014', '2014_2015', '2015_2016', '2016_2017',
                            '2017_2018', '2018_2019', '2019_2020', '2020_2021',
                            '2021_2022', '2022_2023', '1985_1990', '1990_1995',
                            '1995_2000', '2000_2005', '2005_2010', '2010_2015',
                            '2015_2020', '1990_2000', '2000_2010', '2010_2020',
                            '1985_2023'
                        ],
                        'Quality': [
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
                'collection-3.0': {
                    'assets': {
                        'integration': 'projects/mapbiomas-public/assets/paraguay/lulc/collection3/mapbiomas_paraguay_collection3_coverage_v1',
                    },
                    'periods': {
                        'Coverage': [
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
            'mapbiomas-chile': {
                'collection-1.0': {
                    'assets': {
                        'integration': 'projects/mapbiomas-public/assets/chile/collection1/mapbiomas_chile_collection1_integration_v1',
                        'transitions': 'projects/mapbiomas-public/assets/chile/collection1/mapbiomas_chile_collection1_transitions_v1',
                    },
                    'periods': {
                        'Coverage': [
                            '2000', '2001', '2002', '2003',
                            '2004', '2005', '2006', '2007',
                            '2008', '2009', '2010', '2011',
                            '2012', '2013', '2014', '2015',
                            '2016', '2017', '2018', '2019',
                            '2020', '2021', '2022'
                        ],
                        'Transitions': [
                            '2000_2001', '2001_2002', '2002_2003', '2003_2004',
                            '2004_2005', '2005_2006', '2006_2007', '2007_2008',
                            '2008_2009', '2009_2010', '2010_2011', '2011_2012',
                            '2012_2013', '2013_2014', '2014_2015', '2015_2016',
                            '2016_2017', '2017_2018', '2018_2019', '2019_2020',
                            '2020_2021', '2021_2022', '2000_2005', '2005_2010',
                            '2010_2015', '2015_2020', '2000_2010', '2010_2020',
                            '2000_2022'
                        ],
                    },
                },
                'collection-2.0': {
                    'assets': {
                        'integration': 'projects/mapbiomas-public/assets/chile/lulc/collection2/mapbiomas_chile_collection2_coverage_v2',
                    },
                    'periods': {
                        'Coverage': [
                            '1999', '2000', '2001', '2002',
                            '2003', '2004', '2005', '2006',
                            '2007', '2008', '2009', '2010',
                            '2011', '2012', '2013', '2014',
                            '2015', '2016', '2017', '2018',
                            '2019', '2020', '2021', '2022',
                            '2023', '2024'
                        ],
                    },
                },
            },
            'mapbiomas-argentina': {
                'collection-1.0': {
                    'assets': {
                        'integration': 'projects/mapbiomas-public/assets/argentina/collection1/mapbiomas_argentina_collection1_integration_v1',
                        'transitions': 'projects/mapbiomas-public/assets/argentina/collection1/mapbiomas_argentina_collection1_transitions_v1',
                    },
                    'periods': {
                        'Coverage': [
                            '1998', '1999', '2000', '2001',
                            '2002', '2003', '2004', '2005',
                            '2006', '2007', '2008', '2009',
                            '2010', '2011', '2012', '2013',
                            '2014', '2015', '2016', '2017',
                            '2018', '2019', '2020', '2021',
                            '2022'
                        ],
                        'Transitions': [
                            '1998_1999', '1999_2000', '2000_2001', '2001_2002',
                            '2002_2003', '2003_2004', '2004_2005', '2005_2006',
                            '2006_2007', '2007_2008', '2008_2009', '2009_2010',
                            '2010_2011', '2011_2012', '2012_2013', '2013_2014',
                            '2014_2015', '2015_2016', '2016_2017', '2017_2018',
                            '2018_2019', '2019_2020', '2020_2021', '2021_2022',
                            '2000_2005', '2005_2010', '2010_2015', '2015_2020',
                            '2000_2010', '2010_2020', '1998_2022', '1998_2005',
                            '1998_2010', '1998_2020'
                        ],
                    },
                },
                'collection-2.0': {
                    'assets': {
                        'integration': 'projects/mapbiomas-public/assets/argentina/lulc/collection2/mapbiomas_argentina_collection2_integration_v3',
                    },
                    'periods': {
                        'Coverage': [
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
                'collection-3.0': {
                    'assets': {
                        'integration': 'projects/mapbiomas-public/assets/argentina/lulc/collection3/mapbiomas_argentina_collection3_coverage_v1',
                    },
                    'periods': {
                        'Coverage': [
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
            'mapbiomas-mexico': {
                'collection-1.0': {
                    'assets': {
                        'integration': 'projects/mapbiomas-public/assets/mexico/lulc/collection1/mapbiomas_mexico_collection1_coverage_v1',
                    },
                    'periods': {
                        'Coverage': [
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
            'mapbiomas-drc': {
                'collection-1.0': {
                    'assets': {
                        'integration': 'projects/mapbiomas-public/assets/drc/lulc/collection1/mapbiomas_drc_collection1_coverage_v1',
                    },
                    'periods': {
                        'Coverage': [
                            '2000', '2001', '2002', '2003',
                            '2004', '2005', '2006', '2007',
                            '2008', '2009', '2010', '2011',
                            '2012', '2013', '2014', '2015',
                            '2016', '2017', '2018', '2019',
                            '2020', '2021', '2022', '2023',
                            '2024', '2025'
                        ],
                    },
                },
            },
        },

        legendLinks: [
            {
                'name': 'Amazon',
                'url': 'https://amazonia.mapbiomas.org/codigos-de-la-leyenda/'
            },
            {
                'name': 'Argentina',
                'url': 'https://argentina.mapbiomas.org/codigos-de-la-leyenda/'
            },
            {
                'name': 'Atlantic Forest',
                'url': 'https://bosqueatlantico.mapbiomas.org/en/legend-codes/'
            },
            {
                'name': 'Bolivia',
                'url': 'https://bolivia.mapbiomas.org/en/codigos-de-la-leyenda/'
            },
            {
                'name': 'Brazil',
                'url': 'https://brasil.mapbiomas.org/en/codigos-de-legenda/'
            },
            {
                'name': 'Colombia',
                'url': 'https://colombia.mapbiomas.org/en/codigos-de-la-leyenda/'
            },
            {
                'name': 'Chaco',
                'url': 'https://chaco.mapbiomas.org/en/legend-codes/'
            },
            {
                'name': 'Chile',
                'url': 'https://chile.mapbiomas.org/codigos-de-la-leyenda/'
            },
            {
                'name': 'Ecuador',
                'url': 'https://ecuador.mapbiomas.org/en/codigos-de-la-leyenda/'
            },
            {
                'name': 'Indonesia',
                'url': 'https://mapbiomas.nusantara.earth/legendcode'
            },
            {
                'name': 'Pampa',
                'url': 'https://pampa.mapbiomas.org/en/legend-codes/'
            },
            {
                'name': 'Paraguay',
                'url': 'https://paraguay.mapbiomas.org/en/codigos-de-la-leyenda/'
            },
            {
                'name': 'Peru',
                'url': 'https://peru.mapbiomas.org/en/codigos-de-la-leyenda/'
            },
            {
                'name': 'Uruguay',
                'url': 'https://uruguay.mapbiomas.org/en/codigos-de-la-leyenda/'
            },
            {
                'name': 'Venezuela',
                'url': 'https://venezuela.mapbiomas.org/en/codigos-de-la-leyenda/'
            },
        ],

        palettes: {
            'mapbiomas-brazil': [
                '#ffffff', '#1f8d49', '#000000', '#1f8d49',
                '#7dc975', '#04381d', '#007785', '#228c70',
                '#000000', '#7a5900', '#d6bc74', '#519799',
                '#d6bc74', '#d89f5c', '#ffefc3', '#edde8e',
                '#000000', '#000000', '#e974ed', '#c27ba0',
                '#db7093', '#ffefc3', '#d4271e', '#ffa07a',
                '#d4271e', '#db4d4f', '#2532e4', '#ffffff',
                '#000000', '#ffaa5f', '#9c0027', '#091077',
                '#fc8114', '#2532e4', '#93dfe6', '#9065d0',
                '#d082de', '#000000', '#000000', '#f5b3c8',
                '#c71585', '#f54ca9', '#a5b35b', '#c2d26b',
                '#cbe286', '#807a40', '#d68fe2', '#9932cc',
                '#e6ccff', '#02d659', '#ad5100', '#5faf92',
                '#f0b4a8', '#000000', '#000000', '#000000',
                '#000000', '#f99fff', '#d84690', '#1f8d49',
                '#5cb85d', '#f5d5d5', '#ff69b4', '#c7e0ab',
                '#000000', '#b9158a', '#a89358', '#c8ffb4',
                '#e97a7a', '#000000', '#be9e00', '#000000',
                '#c1799c', '#6fc179', '#be83f7', '#c12100',
                '#2f7360', '#c49a5a', '#000000', '#67671c',
                '#886827', '#c8c099', '#66b2a3', '#ab8231',
                '#6fa8a3', '#000000', '#000000', '#000000',
                '#329c5a', '#6bd46c', '#000000', '#8b1a1a',
                '#d98a45'
            ],
            'mapbiomas-amazon': [
                '#ffffff', '#1f8d49', '#000000', '#1f8d49',
                '#7dc975', '#04381d', '#026975', '#228c70',
                '#000000', '#7a5900', '#d6bc74', '#519799',
                '#d6bc74', '#d89f5c', '#ffefc3', '#edde8e',
                '#000000', '#000000', '#e974ed', '#c27ba0',
                '#db7093', '#ffefc3', '#d4271e', '#ffa07a',
                '#d4271e', '#db4d4f', '#2532e4', '#ffffff',
                '#000000', '#ffaa5f', '#9c0027', '#091077',
                '#fc8114', '#2532e4', '#93dfe6', '#9065d0',
                '#d082de', '#000000', '#000000', '#f5b3c8',
                '#c71585', '#f54ca9', '#a5b35b', '#c2d26b',
                '#cbe286', '#807a40', '#d68fe2', '#9932cc',
                '#e6ccff', '#02d659', '#ad5100', '#5faf92',
                '#f0b4a8', '#000000', '#000000', '#000000',
                '#000000', '#f99fff', '#d84690', '#1f8d49',
                '#5cb85d', '#f5d5d5', '#ff69b4', '#c7e0ab',
                '#000000', '#b9158a', '#a89358', '#c8ffb4',
                '#e97a7a', '#000000', '#be9e00', '#000000',
                '#c1799c', '#6fc179', '#be83f7', '#c12100',
                '#2f7360', '#c49a5a', '#000000', '#67671c',
                '#886827', '#c8c099', '#66b2a3', '#ab8231',
                '#6fa8a3', '#000000', '#000000', '#000000',
                '#329c5a', '#6bd46c', '#000000', '#8b1a1a',
                '#d98a45'
            ],
            'mapbiomas-chaco': [
                '#ffffff', '#1f8d49', '#000000', '#1f8d49',
                '#7dc975', '#04381d', '#026975', '#228c70',
                '#000000', '#7a5900', '#d6bc74', '#519799',
                '#d6bc74', '#d89f5c', '#ffefc3', '#edde8e',
                '#000000', '#000000', '#e974ed', '#c27ba0',
                '#db7093', '#ffefc3', '#d4271e', '#ffa07a',
                '#d4271e', '#db4d4f', '#2532e4', '#ffffff',
                '#000000', '#ffaa5f', '#9c0027', '#091077',
                '#fc8114', '#2532e4', '#93dfe6', '#9065d0',
                '#d082de', '#000000', '#000000', '#f5b3c8',
                '#c71585', '#f54ca9', '#a5b35b', '#c2d26b',
                '#cbe286', '#807a40', '#d68fe2', '#9932cc',
                '#e6ccff', '#02d659', '#ad5100', '#5faf92',
                '#f0b4a8', '#000000', '#000000', '#000000',
                '#000000', '#f99fff', '#d84690', '#1f8d49',
                '#5cb85d', '#f5d5d5', '#ff69b4', '#c7e0ab',
                '#000000', '#b9158a', '#a89358', '#c8ffb4',
                '#e97a7a', '#000000', '#be9e00', '#000000',
                '#c1799c', '#6fc179', '#be83f7', '#c12100',
                '#2f7360', '#c49a5a', '#000000', '#67671c',
                '#886827', '#c8c099', '#66b2a3', '#ab8231',
                '#6fa8a3', '#000000', '#000000', '#000000',
                '#329c5a', '#6bd46c', '#000000', '#8b1a1a',
                '#d98a45'
            ],
            'mapbiomas-atlantic-forest': [
                '#ffffff', '#1f8d49', '#000000', '#1f8d49',
                '#7dc975', '#04381d', '#007785', '#228c70',
                '#000000', '#7a5900', '#d6bc74', '#519799',
                '#d6bc74', '#d89f5c', '#ffefc3', '#edde8e',
                '#000000', '#000000', '#e974ed', '#c27ba0',
                '#db7093', '#ffefc3', '#d4271e', '#ffa07a',
                '#d4271e', '#db4d4f', '#2532e4', '#ffffff',
                '#000000', '#ffaa5f', '#9c0027', '#091077',
                '#fc8114', '#2532e4', '#93dfe6', '#9065d0',
                '#d082de', '#000000', '#000000', '#f5b3c8',
                '#c71585', '#f54ca9', '#a5b35b', '#c2d26b',
                '#cbe286', '#807a40', '#d68fe2', '#9932cc',
                '#e6ccff', '#02d659', '#ad5100', '#5faf92',
                '#f0b4a8', '#000000', '#000000', '#000000',
                '#000000', '#f99fff', '#d84690', '#1f8d49',
                '#5cb85d', '#f5d5d5', '#ff69b4', '#c7e0ab',
                '#000000', '#b9158a', '#a89358', '#c8ffb4',
                '#e97a7a', '#000000', '#be9e00', '#000000',
                '#c1799c', '#6fc179', '#be83f7', '#c12100',
                '#2f7360', '#c49a5a', '#000000', '#67671c',
                '#886827', '#c8c099', '#66b2a3', '#ab8231',
                '#6fa8a3', '#000000', '#000000', '#000000',
                '#329c5a', '#6bd46c', '#000000', '#8b1a1a',
                '#d98a45'
            ],
            'mapbiomas-pampa': [
                '#ffffff', '#1f8d49', '#000000', '#1f8d49',
                '#7dc975', '#04381d', '#007785', '#228c70',
                '#000000', '#7a6c00', '#d6bc74', '#519799',
                '#d6bc74', '#d89f5c', '#ffefc3', '#edde8e',
                '#000000', '#000000', '#c27ba0', '#c27ba0',
                '#db7093', '#ffefc3', '#d4271e', '#ffa07a',
                '#d4271e', '#db4d4f', '#2532e4', '#ffffff',
                '#000000', '#ffaa5f', '#9c0027', '#091077',
                '#fc8114', '#2532e4', '#93dfe6', '#9065d0',
                '#d082de', '#000000', '#000000', '#f5b3c8',
                '#c71585', '#f54ca9', '#a5b35b', '#c2d26b',
                '#cbe286', '#807a40', '#d68fe2', '#9932cc',
                '#e6ccff', '#02d659', '#ad5100', '#5faf92',
                '#f0b4a8', '#000000', '#000000', '#000000',
                '#000000', '#f99fff', '#d84690', '#1f8d49',
                '#5cb85d', '#f5d5d5', '#ff69b4', '#c7e0ab',
                '#000000', '#b9158a', '#a89358', '#c8ffb4',
                '#e97a7a', '#000000', '#be9e00', '#000000',
                '#c1799c', '#6fc179', '#be83f7', '#c12100',
                '#2f7360', '#c49a5a', '#000000', '#67671c',
                '#886827', '#c8c099', '#66b2a3', '#ab8231',
                '#6fa8a3', '#000000', '#000000', '#000000',
                '#329c5a', '#6bd46c', '#000000', '#8b1a1a',
                '#d98a45'
            ],
            'mapbiomas-indonesia': [
                '#ffffff', '#1f8d49', '#000000', '#1f8d49',
                '#7dc975', '#04381d', '#007785', '#228c70',
                '#000000', '#7a5900', '#d6bc74', '#519799',
                '#d6bc74', '#d89f5c', '#ffefc3', '#edde8e',
                '#000000', '#000000', '#e974ed', '#c27ba0',
                '#db7093', '#ffefc3', '#d4271e', '#ffa07a',
                '#d4271e', '#db4d4f', '#2532e4', '#ffffff',
                '#000000', '#ffaa5f', '#9c0027', '#091077',
                '#fc8114', '#2532e4', '#93dfe6', '#9065d0',
                '#d082de', '#000000', '#000000', '#f5b3c8',
                '#f272c2', '#f54ca9', '#a5b35b', '#c2d26b',
                '#cbe286', '#807a40', '#d68fe2', '#9932cc',
                '#e6ccff', '#02d659', '#ad5100', '#5faf92',
                '#f0b4a8', '#000000', '#000000', '#000000',
                '#000000', '#f99fff', '#d84690', '#1f8d49',
                '#5cb85d', '#f5d5d5', '#ff69b4', '#c7e0ab',
                '#000000', '#b9158a', '#a89358', '#c8ffb4',
                '#e97a7a', '#000000', '#be9e00', '#000000',
                '#c1799c', '#6fc179', '#be83f7', '#c12100',
                '#2f7360', '#c49a5a', '#000000', '#67671c',
                '#886827', '#c8c099', '#66b2a3', '#ab8231',
                '#6fa8a3', '#000000', '#000000', '#000000',
                '#329c5a', '#6bd46c', '#000000', '#8b1a1a',
                '#d98a45'
            ],
            'mapbiomas-peru': [
                '#ffffff', '#1f8d49', '#000000', '#1f8d49',
                '#7dc975', '#04381d', '#026975', '#228c70',
                '#000000', '#7a5900', '#d6bc74', '#519799',
                '#d6bc74', '#d89f5c', '#ffefc3', '#edde8e',
                '#000000', '#000000', '#e974ed', '#c27ba0',
                '#db7093', '#ffefc3', '#d4271e', '#ffa07a',
                '#d4271e', '#db4d4f', '#2532e4', '#ffffff',
                '#000000', '#ffaa5f', '#9c0027', '#091077',
                '#fc8114', '#2532e4', '#93dfe6', '#9065d0',
                '#d082de', '#000000', '#000000', '#f5b3c8',
                '#c71585', '#f54ca9', '#a5b35b', '#c2d26b',
                '#cbe286', '#807a40', '#d68fe2', '#9932cc',
                '#e6ccff', '#02d659', '#ad5100', '#5faf92',
                '#f0b4a8', '#000000', '#000000', '#000000',
                '#000000', '#f99fff', '#d84690', '#1f8d49',
                '#5cb85d', '#f5d5d5', '#ff69b4', '#c7e0ab',
                '#000000', '#b9158a', '#a89358', '#c8ffb4',
                '#e97a7a', '#000000', '#be9e00', '#000000',
                '#c1799c', '#6fc179', '#be83f7', '#c12100',
                '#2f7360', '#c49a5a', '#000000', '#67671c',
                '#886827', '#c8c099', '#26abab', '#ab8231',
                '#6fa8a3', '#000000', '#000000', '#000000',
                '#329c5a', '#6bd46c', '#000000', '#8b1a1a',
                '#d98a45'
            ],
            'mapbiomas-bolivia': [
                '#ffffff', '#1f8d49', '#000000', '#1f8d49',
                '#7dc975', '#04381d', '#026975', '#228c70',
                '#000000', '#7a5900', '#d6bc74', '#519799',
                '#d6bc74', '#d89f5c', '#ffefc3', '#edde8e',
                '#000000', '#000000', '#e974ed', '#c27ba0',
                '#db7093', '#ffefc3', '#d4271e', '#ffa07a',
                '#d4271e', '#db4d4f', '#2532e4', '#ffffff',
                '#000000', '#ffaa5f', '#9c0027', '#091077',
                '#fc8114', '#2532e4', '#93dfe6', '#9065d0',
                '#d082de', '#000000', '#000000', '#f5b3c8',
                '#c71585', '#f54ca9', '#a5b35b', '#c2d26b',
                '#cbe286', '#807a40', '#d68fe2', '#9932cc',
                '#e6ccff', '#02d659', '#ad5100', '#5faf92',
                '#f0b4a8', '#000000', '#000000', '#000000',
                '#000000', '#f99fff', '#d84690', '#1f8d49',
                '#5cb85d', '#f5d5d5', '#ff69b4', '#c7e0ab',
                '#000000', '#b9158a', '#a89358', '#c8ffb4',
                '#e97a7a', '#000000', '#be9e00', '#000000',
                '#c1799c', '#6fc179', '#be83f7', '#c12100',
                '#2f7360', '#c49a5a', '#000000', '#67671c',
                '#886827', '#c8c099', '#66b2a3', '#ab8231',
                '#6fa8a3', '#000000', '#000000', '#000000',
                '#329c5a', '#6bd46c', '#000000', '#8b1a1a',
                '#d98a45'
            ],
            'mapbiomas-colombia': [
                '#ffffff', '#1f8d49', '#000000', '#1f8d49',
                '#7dc975', '#04381d', '#026975', '#228c70',
                '#000000', '#7a5900', '#d6bc74', '#519799',
                '#d6bc74', '#d89f5c', '#ffefc3', '#edde8e',
                '#000000', '#000000', '#e974ed', '#c27ba0',
                '#db7093', '#ffefc3', '#d4271e', '#ffa07a',
                '#d4271e', '#db4d4f', '#2532e4', '#ffffff',
                '#000000', '#ffaa5f', '#9c0027', '#091077',
                '#fc8114', '#2532e4', '#93dfe6', '#9065d0',
                '#d082de', '#000000', '#000000', '#f5b3c8',
                '#c71585', '#f54ca9', '#a5b35b', '#c2d26b',
                '#cbe286', '#807a40', '#d68fe2', '#9932cc',
                '#e6ccff', '#02d659', '#ad5100', '#5faf92',
                '#f0b4a8', '#000000', '#000000', '#000000',
                '#000000', '#f99fff', '#d84690', '#1f8d49',
                '#5cb85d', '#f5d5d5', '#ff69b4', '#c7e0ab',
                '#000000', '#b9158a', '#a89358', '#c8ffb4',
                '#e97a7a', '#000000', '#be9e00', '#000000',
                '#c1799c', '#6fc179', '#be83f7', '#c12100',
                '#2f7360', '#c49a5a', '#000000', '#67671c',
                '#886827', '#dfeb62', '#6fc179', '#ab8231',
                '#6fa8a3', '#000000', '#000000', '#000000',
                '#329c5a', '#6bd46c', '#000000', '#8b1a1a',
                '#d98a45'
            ],
            'mapbiomas-venezuela': [
                '#ffffff', '#1f8d49', '#000000', '#1f8d49',
                '#7dc975', '#04381d', '#026975', '#228c70',
                '#000000', '#7a6c00', '#d6bc74', '#519799',
                '#d6bc74', '#d89f5c', '#ffefc3', '#edde8e',
                '#000000', '#000000', '#e974ed', '#c27ba0',
                '#db7093', '#ffefc3', '#d4271e', '#ffa07a',
                '#d4271e', '#db4d4f', '#2532e4', '#ffffff',
                '#000000', '#ffaa5f', '#9c0027', '#091077',
                '#fc8114', '#2532e4', '#93dfe6', '#9065d0',
                '#d082de', '#000000', '#000000', '#f5b3c8',
                '#c71585', '#f54ca9', '#a5b35b', '#c2d26b',
                '#cbe286', '#807a40', '#d68fe2', '#9932cc',
                '#e6ccff', '#02d659', '#ad5100', '#5faf92',
                '#f0b4a8', '#000000', '#000000', '#000000',
                '#000000', '#f99fff', '#d84690', '#1f8d49',
                '#5cb85d', '#f5d5d5', '#ff69b4', '#c7e0ab',
                '#000000', '#b9158a', '#a89358', '#c8ffb4',
                '#e97a7a', '#000000', '#be9e00', '#000000',
                '#c1799c', '#6fc179', '#be83f7', '#c12100',
                '#2f7360', '#c49a5a', '#000000', '#67671c',
                '#886827', '#dfeb62', '#6fc179', '#ab8231',
                '#6fa8a3', '#000000', '#000000', '#000000',
                '#329c5a', '#6bd46c', '#000000', '#8b1a1a',
                '#d98a45'
            ],
            'mapbiomas-uruguay': [
                '#ffffff', '#1f8d49', '#000000', '#1f8d49',
                '#7dc975', '#04381d', '#007785', '#228c70',
                '#000000', '#7a5900', '#ccc87e', '#519799',
                '#ccc87e', '#ffefc3', '#ffefc3', '#fbf0ab',
                '#000000', '#000000', '#c27ba0', '#c27ba0',
                '#db7093', '#ffefc3', '#d4271e', '#ffa07a',
                '#d4271e', '#db4d4f', '#2532e4', '#ffffff',
                '#000000', '#ffaa5f', '#9c0027', '#091077',
                '#fc8114', '#2532e4', '#93dfe6', '#9065d0',
                '#d082de', '#000000', '#000000', '#f5b3c8',
                '#c71585', '#f54ca9', '#a5b35b', '#c2d26b',
                '#cbe286', '#807a40', '#d68fe2', '#9932cc',
                '#e6ccff', '#02d659', '#ad5100', '#5faf92',
                '#f0b4a8', '#000000', '#000000', '#000000',
                '#000000', '#f99fff', '#d84690', '#1f8d49',
                '#5cb85d', '#f5d5d5', '#ff69b4', '#c7e0ab',
                '#000000', '#b9158a', '#a89358', '#c8ffb4',
                '#e97a7a', '#000000', '#be9e00', '#000000',
                '#c1799c', '#6fc179', '#be83f7', '#c12100',
                '#2f7360', '#c49a5a', '#000000', '#67671c',
                '#886827', '#c8c099', '#66b2a3', '#ab8231',
                '#6fa8a3', '#000000', '#000000', '#000000',
                '#329c5a', '#6bd46c', '#000000', '#8b1a1a',
                '#d98a45'
            ],
            'mapbiomas-ecuador': [
                '#ffffff', '#1f8d49', '#000000', '#1f8d49',
                '#7dc975', '#04381d', '#007785', '#228c70',
                '#000000', '#7a5900', '#d6bc74', '#519799',
                '#d6bc74', '#d89f5c', '#ffefc3', '#edde8e',
                '#000000', '#000000', '#e974ed', '#c27ba0',
                '#db7093', '#ffefc3', '#d4271e', '#ffa07a',
                '#d4271e', '#db4d4f', '#2532e4', '#ffffff',
                '#000000', '#ffaa5f', '#9c0027', '#091077',
                '#fc8114', '#2532e4', '#93dfe6', '#9065d0',
                '#d082de', '#000000', '#000000', '#f5b3c8',
                '#c71585', '#f54ca9', '#a5b35b', '#c2d26b',
                '#cbe286', '#807a40', '#d68fe2', '#9932cc',
                '#e6ccff', '#02d659', '#ad5100', '#5faf92',
                '#f0b4a8', '#000000', '#000000', '#000000',
                '#000000', '#f99fff', '#d84690', '#1f8d49',
                '#5cb85d', '#f5d5d5', '#ff69b4', '#c7e0ab',
                '#000000', '#b9158a', '#a89358', '#c8ffb4',
                '#e97a7a', '#000000', '#be9e00', '#000000',
                '#c1799c', '#6fc179', '#be83f7', '#c12100',
                '#2f7360', '#c49a5a', '#000000', '#67671c',
                '#886827', '#c8c099', '#66b2a3', '#ab8231',
                '#6fa8a3', '#000000', '#000000', '#000000',
                '#329c5a', '#6bd46c', '#000000', '#8b1a1a',
                '#d98a45'
            ],
            'mapbiomas-paraguay': [
                '#ffffff', '#1f8d49', '#000000', '#1f8d49',
                '#7dc975', '#04381d', '#007785', '#228c70',
                '#000000', '#7a6c00', '#d6bc74', '#519799',
                '#d6bc74', '#d89f5c', '#ffefc3', '#edde8e',
                '#000000', '#000000', '#e974ed', '#c27ba0',
                '#db7093', '#ffefc3', '#d4271e', '#ffa07a',
                '#d4271e', '#db4d4f', '#2532e4', '#ffffff',
                '#000000', '#ffaa5f', '#9c0027', '#091077',
                '#fc8114', '#2532e4', '#93dfe6', '#9065d0',
                '#d082de', '#000000', '#000000', '#f5b3c8',
                '#c71585', '#f54ca9', '#a5b35b', '#c2d26b',
                '#cbe286', '#807a40', '#d68fe2', '#9932cc',
                '#e6ccff', '#02d659', '#ad5100', '#5faf92',
                '#f0b4a8', '#000000', '#000000', '#000000',
                '#000000', '#f99fff', '#d84690', '#1f8d49',
                '#5cb85d', '#f5d5d5', '#ff69b4', '#c7e0ab',
                '#000000', '#b9158a', '#a89358', '#c8ffb4',
                '#e97a7a', '#000000', '#be9e00', '#000000',
                '#c1799c', '#6fc179', '#be83f7', '#c12100',
                '#2f7360', '#c49a5a', '#000000', '#67671c',
                '#886827', '#c8c099', '#66b2a3', '#ab8231',
                '#6fa8a3', '#000000', '#000000', '#000000',
                '#329c5a', '#6bd46c', '#000000', '#8b1a1a',
                '#d98a45'
            ],
            'mapbiomas-chile': [
                '#ffffff', '#1f8d49', '#000000', '#1f8d49',
                '#7dc975', '#04381d', '#007785', '#228c70',
                '#000000', '#7a5900', '#d6bc74', '#519799',
                '#d6bc74', '#d89f5c', '#ffefc3', '#edde8e',
                '#000000', '#000000', '#e974ed', '#c27ba0',
                '#db7093', '#ffefc3', '#d4271e', '#ffa07a',
                '#d4271e', '#db4d4f', '#2532e4', '#ffffff',
                '#000000', '#ffaa5f', '#9c0027', '#091077',
                '#fc8114', '#2532e4', '#93dfe6', '#9065d0',
                '#d082de', '#000000', '#000000', '#f5b3c8',
                '#c71585', '#f54ca9', '#a5b35b', '#c2d26b',
                '#cbe286', '#807a40', '#d68fe2', '#9932cc',
                '#e6ccff', '#02d659', '#ad5100', '#5faf92',
                '#f0b4a8', '#000000', '#000000', '#000000',
                '#000000', '#f99fff', '#d84690', '#1f8d49',
                '#5cb85d', '#f5d5d5', '#ff69b4', '#c7e0ab',
                '#000000', '#b9158a', '#a89358', '#c8ffb4',
                '#e97a7a', '#000000', '#be9e00', '#000000',
                '#c1799c', '#6fc179', '#be83f7', '#c12100',
                '#2f7360', '#c49a5a', '#000000', '#67671c',
                '#886827', '#c8c099', '#66b2a3', '#ab8231',
                '#6fa8a3', '#000000', '#000000', '#000000',
                '#329c5a', '#6bd46c', '#000000', '#8b1a1a',
                '#d98a45'
            ],
            'mapbiomas-argentina': [
                '#ffffff', '#1f8d49', '#000000', '#1f8d49',
                '#7dc975', '#04381d', '#026975', '#228c70',
                '#000000', '#7a5900', '#d6bc74', '#519799',
                '#d6bc74', '#d89f5c', '#ffefc3', '#edde8e',
                '#000000', '#000000', '#e974ed', '#c27ba0',
                '#db7093', '#ffefc3', '#d4271e', '#ffa07a',
                '#d4271e', '#db4d4f', '#2532e4', '#ffffff',
                '#000000', '#ffaa5f', '#9c0027', '#091077',
                '#fc8114', '#2532e4', '#93dfe6', '#9065d0',
                '#d082de', '#000000', '#000000', '#f5b3c8',
                '#c71585', '#f54ca9', '#a5b35b', '#c2d26b',
                '#cbe286', '#807a40', '#d68fe2', '#9932cc',
                '#e6ccff', '#02d659', '#ad5100', '#5faf92',
                '#f0b4a8', '#000000', '#000000', '#000000',
                '#000000', '#f99fff', '#d84690', '#1f8d49',
                '#5cb85d', '#f5d5d5', '#ff69b4', '#c7e0ab',
                '#000000', '#b9158a', '#a89358', '#c8ffb4',
                '#e97a7a', '#000000', '#be9e00', '#000000',
                '#c1799c', '#6fc179', '#be83f7', '#c12100',
                '#2f7360', '#86b074', '#000000', '#67671c',
                '#886827', '#c8c099', '#66b2a3', '#ab8231',
                '#6fa8a3', '#000000', '#000000', '#000000',
                '#329c5a', '#6bd46c', '#000000', '#8b1a1a',
                '#d98a45'
            ],
            'mapbiomas-mexico': [
                '#ffffff', '#1f8d49', '#000000', '#1f8d49',
                '#7dc975', '#04381d', '#007785', '#228c70',
                '#000000', '#7a5900', '#d6bc74', '#519799',
                '#d6bc74', '#d89f5c', '#ffefc3', '#edde8e',
                '#000000', '#000000', '#e974ed', '#c27ba0',
                '#db7093', '#ffefc3', '#d4271e', '#ffa07a',
                '#d4271e', '#db4d4f', '#2532e4', '#ffffff',
                '#000000', '#ffaa5f', '#9c0027', '#091077',
                '#fc8114', '#2532e4', '#93dfe6', '#9065d0',
                '#d082de', '#000000', '#000000', '#f5b3c8',
                '#c71585', '#f54ca9', '#a5b35b', '#c2d26b',
                '#cbe286', '#807a40', '#d68fe2', '#9932cc',
                '#e6ccff', '#02d659', '#ad5100', '#5faf92',
                '#f0b4a8', '#000000', '#000000', '#000000',
                '#000000', '#f99fff', '#d84690', '#1f8d49',
                '#5cb85d', '#f5d5d5', '#ff69b4', '#c7e0ab',
                '#000000', '#b9158a', '#a89358', '#c8ffb4',
                '#e97a7a', '#000000', '#be9e00', '#000000',
                '#c1799c', '#6fc179', '#be83f7', '#c12100',
                '#2f7360', '#c49a5a', '#000000', '#67671c',
                '#886827', '#c8c099', '#66b2a3', '#ab8231',
                '#6fa8a3', '#000000', '#000000', '#000000',
                '#329c5a', '#6bd46c', '#000000', '#8b1a1a',
                '#d98a45'
            ],
            'mapbiomas-drc': [
                '#ffffff', '#1f8d49', '#000000', '#1f8d49',
                '#7dc975', '#04381d', '#007785', '#228c70',
                '#000000', '#7a5900', '#d6bc74', '#519799',
                '#d6bc74', '#d89f5c', '#ffefc3', '#edde8e',
                '#000000', '#000000', '#e974ed', '#c27ba0',
                '#db7093', '#ffefc3', '#d4271e', '#ffa07a',
                '#d4271e', '#db4d4f', '#2532e4', '#ffffff',
                '#000000', '#ffaa5f', '#9c0027', '#091077',
                '#fc8114', '#2532e4', '#93dfe6', '#9065d0',
                '#d082de', '#000000', '#000000', '#f5b3c8',
                '#c71585', '#f54ca9', '#a5b35b', '#c2d26b',
                '#cbe286', '#807a40', '#d68fe2', '#9932cc',
                '#e6ccff', '#02d659', '#ad5100', '#5faf92',
                '#f0b4a8', '#000000', '#000000', '#000000',
                '#000000', '#f99fff', '#d84690', '#1f8d49',
                '#5cb85d', '#f5d5d5', '#ff69b4', '#c7e0ab',
                '#000000', '#b9158a', '#a89358', '#c8ffb4',
                '#e97a7a', '#000000', '#be9e00', '#000000',
                '#c1799c', '#6fc179', '#be83f7', '#c12100',
                '#2f7360', '#c49a5a', '#000000', '#67671c',
                '#886827', '#c8c099', '#66b2a3', '#ab8231',
                '#6fa8a3', '#000000', '#000000', '#000000',
                '#329c5a', '#6bd46c', '#000000', '#8b1a1a',
                '#d98a45'
            ],
        },

        bandsNames: {
            'Coverage': 'classification_',
            'Transitions': 'transition(s)?_',
            'Quality': 'quality_'
        },

        dataType: 'Coverage',

        data: {
            'Coverage': null,
            'Transitions': null,
            'Quality': null
        },

        fileDimensions: {
            'Coverage': 256 * 512,
            'Transitions': 256 * 124,
            'Quality': 256 * 512,
        },

        ranges: {
            'Coverage': {
                'min': 0,
                'max': 66
            },
            'Transitions': {
                'min': -2,
                'max': 3
            },
            'Quality': {
                'min': 1,
                'max': 23
            },
        },

        vector: null,
        activeFeature: null,
        activeName: '',

        mapbiomasRegion: '',

        palette: {
            // 'Coverage': palettes.get('classification8'),
            'Coverage': null,
            'Transitions': [
                '#ffa500',
                '#ff0000',
                '#818181',
                '#06ff00',
                '#4169e1',
                '#8a2be2'
            ],
            'Quality': [
                '#d73027',
                '#fef9b6',
                '#1d6a37'
            ]
        },

        taskid: 1,

        bufferDistance: 0,

        transitionsCodes: [{
            name: "1. Floresta",
            noChange: [1, 2, 3, 4, 5, 6, 7, 8],
            upVeg: [],
            downVeg: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 28, 22, 23, 24, 25, 29, 30],
            downWater: [],
            upWater: [26, 33, 31],
            upPlantacao: [9],
            ignored: [27]
        },
        {
            name: "2. Formações Naturais não Florestais",
            noChange: [10, 11, 12, 13],
            upVeg: [],
            downVeg: [14, 15, 16, 17, 18, 19, 20, 21, 28, 22, 23, 24, 25, 29, 30],
            downWater: [],
            upWater: [26, 33, 31],
            upPlantacao: [9],
            ignored: [27, 1, 2, 3, 4, 5, 6, 7, 8]
        },
        {
            name: "3. Uso Agropecuário",
            noChange: [14, 15, 16, 17, 18, 19, 20, 21, 28],
            upVeg: [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 32],
            downVeg: [],
            downWater: [],
            upWater: [26, 31, 33],
            upPlantacao: [9],
            ignored: [27, 22, 23, 24, 25, 29, 30]
        },
        {
            name: "4.Áreas não vegetadas",
            noChange: [22, 23, 24, 25, 29, 30],
            upVeg: [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 32],
            downVeg: [],
            downWater: [],
            upWater: [26, 31, 33],
            upPlantacao: [9],
            ignored: [27, 14, 15, 18, 19, 20, 21, 28],
        },
        {
            name: "5. Corpos Dágua",
            noChange: [26, 31, 33],
            upVeg: [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 32],
            downVeg: [],
            downWater: [14, 15, 16, 17, 18, 19, 20, 21, 28, 22, 23, 24, 25, 29, 30],
            upWater: [],
            upPlantacao: [9],
            ignored: [27]
        },
        {
            name: "Plantacao Florestal",
            noChange: [9],
            upVeg: [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 32],
            downVeg: [],
            downWater: [14, 15, 18, 19, 20, 21, 28, 22, 23, 24, 25, 29, 30],
            upWater: [26, 31, 33],
            upPlantacao: [],
            ignored: [27]
        },
        {
            name: "6. Não observado",
            noChange: [27],
            upVeg: [],
            downVeg: [],
            downWater: [],
            upWater: [],
            upPlantacao: [],
            ignored: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 28, 22, 23, 24, 25, 26, 28, 29, 30, 31, 32, 33]
        }
        ],

        className: {
            '0': 'Non Observed',
            '1': 'Forest',
            '2': 'Natural Forest',
            '3': 'Forest Formation',
            '4': 'Savanna Formation',
            '5': 'Magrove',
            '6': 'Áreas Naturales Inundables - Leñosas (Bosque Inundable)',
            '7': 'Flooded Savanna',
            '9': 'Forest Plantation',
            '10': 'Non Forest Natural Formation',
            '11': 'Wetland',
            '12': 'Grassland (Pastizal, Formación Herbácea)',
            '13': 'Other Non Forest Natural Formation',
            '14': 'Farming',
            '15': 'Pasture',
            '18': 'Agriculture',
            '19': 'Temporary Crops (Herbaceas - Agricultura)',
            '20': 'Sugar Cane',
            '21': 'Mosaic of Agriculture and Pasture',
            '22': 'Non vegetated area',
            '23': 'Beach and Dune',
            '24': 'Urban Infrastructure',
            '25': 'Other Non Vegetated Area',
            '26': 'Water',
            '27': 'Non Observed',
            '29': 'Rocky outcrop',
            '30': 'Mining',
            '31': 'Aquaculture',
            '32': 'Salt flat',
            '33': 'River, Lake and Ocean',
            '34': 'Glacier',
            '35': 'Oil Palm',
            '36': 'Perennial Crops',
            '37': 'Artificial Water Body',
            '38': 'Water Reservoirs',
            '39': 'Soy Beans',
            '40': 'Rice',
            '41': 'Mosaic of Crops',
            '42': 'Pastizal abierto',
            '43': 'Pastizal cerrado',
            '44': 'Pastizal disperso',
            '45': 'Leñosas dispersas',
            '46': 'Coffe',
            '47': 'Citrus',
            '48': 'Other Perennial Crops',
            '49': 'Wooded Sandbank Vegetation',
            '50': 'Herbaceous Sandbank Vegetation',
            '51': 'Lowland Flooded Grassland',
            '52': 'Coastal salt flat surface',
            '57': 'Cultivo Simples',
            '58': 'Cultivo Múltiple',
            '59': 'Primary Forest',
            '60': 'Secondary Forest',
            '61': 'Salares',
            '62': 'Cotton',
            '63': 'Steppe',
            '65': 'Tea',
            '66': 'Closed shrublands',
            '67': 'Dwarf Forest',
            '68': 'Other natural non-vegetated area',
            '70': 'Coastal Lomas (beta)',
            '72': 'Other crops',
            '73': 'Peatlands',
            '74': 'Banana',
            '75': 'Photovoltaic Power Plant (beta)',
            '76': 'Peat Swamp Forest',
            '77': 'Herbaceous-Shrub Mosaic',
            '79': 'Pinus plantation',
            '80': 'Eucalyptus plantation',
            '81': 'Andean grassland and shrubland',
            '82': 'Flooded Andean grassland and shrubland',
            '83': 'Other forestry uses',
            '84': 'Marisma',
            '88': 'Temperate forest',
            '89': 'Tropical dry forest',
            '91': 'Wind Farm',
            '92': 'Rocky surface',
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

        Map.centerObject(App.options.data.Coverage, 5);

        Map.clear();


    },

    formatName: function (name) {
        return Naming.formatName(name);
    },

    remapTransitions: function (image) {
        var oldValues = [];
        var newValues = [];

        App.options.transitionsCodes.forEach(function (c1) {
            c1.noChange.forEach(function (noChange1) {
                c1.noChange.forEach(function (noChange2) {
                    var oldValue = (noChange1 * 100) + noChange2;
                    oldValues.push(oldValue);
                    newValues.push(0);
                });
                c1.upVeg.forEach(function (upVeg2) {
                    var oldValue = (noChange1 * 100) + upVeg2;
                    oldValues.push(oldValue);
                    newValues.push(1);
                });
                c1.downVeg.forEach(function (downVeg2) {
                    var oldValue = (noChange1 * 100) + downVeg2;
                    oldValues.push(oldValue);
                    newValues.push(-1);
                });
                c1.downWater.forEach(function (downWater2) {
                    var oldValue = (noChange1 * 100) + downWater2;
                    oldValues.push(oldValue);
                    newValues.push(-2);
                });
                c1.upWater.forEach(function (upWater2) {
                    var oldValue = (noChange1 * 100) + upWater2;
                    oldValues.push(oldValue);
                    newValues.push(2);
                });
                c1.upPlantacao.forEach(function (upPlantacao2) {
                    var oldValue = (noChange1 * 100) + upPlantacao2;
                    oldValues.push(oldValue);
                    newValues.push(3);
                });
                c1.ignored.forEach(function (ignored2) {
                    var oldValue = (noChange1 * 100) + ignored2;
                    oldValues.push(oldValue);
                    newValues.push(0);
                });
            });
        });

        return image.remap(oldValues, newValues).rename(image.bandNames());
    },

    setPalette: function (region) {

        // paleta embutida (lista indexada pela classe) ou nome de uma paleta do módulo Palettes.js
        var palette = App.options.palettes[region];
        App.options.palette.Coverage = typeof palette === 'string' ? palettes.get(palette) : palette;
        App.options.ranges.Coverage.max = App.options.palette.Coverage.length - 1;

        print(region, App.options.ranges.Coverage.max, App.options.palette.Coverage);
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
            })

        },

        setMapbiomasRegion: function (regionName) {

            App.options.mapbiomasRegion = regionName;

            App.setPalette(regionName);

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

                            App.options.data.Coverage = ee.Image(assets.integration);

                            // transições e qualidade só existem em parte das coleções
                            App.options.data.Transitions = assets.transitions ? ee.Image(assets.transitions) : null;
                            App.options.data.Quality = assets.quality ? ee.Image(assets.quality) : null;

                            var year = App.options.collections[regionName][collectioName].periods.Coverage.slice(-1)[0];

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

            Map.clear();

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

            Map.clear();

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
                                    App.options.activeName = featureName;
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

            // Map.centerObject(App.options.activeFeature);

            Map.clear();

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
                .select([App.options.bandsNames[App.options.dataType] + period])
                .clip(region);

            if (App.options.dataType == 'Transitions') {
                image = App.remapTransitions(image);
            }
            print("teste:", App.options.ranges)
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
                        "areaColumn": 'area_km2',
                    });

                    area = ee.FeatureCollection(area).map(
                        function (feature) {
                            var className;

                            if (App.options.dataType == 'Coverage') {

                                className = ee.Dictionary(App.options.className)
                                    .get(feature.get('class'));

                                feature = feature.set('class_name', className).set('band', band);

                            } else if (App.options.dataType == 'Transitions') {

                                var classNamet0 = ee.Dictionary(App.options.className)
                                    .get(ee.Number(feature.get('class')).divide(100).int());
                                var classNamet1 = ee.Dictionary(App.options.className)
                                    .get(ee.Number(feature.get('class')).mod(100).int());

                                feature = feature.set('from_class', classNamet0).set('to_class', classNamet1).set('band', band);
                            } else {

                                className = ee.String(feature.get('class')).cat(' observations');
                                feature = feature.set('class_name', className).set('band', band);
                            }

                            return feature;
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

                App.ui.makeLegendLinksList();

                App.ui.form.panelMain.add(App.ui.form.panelLogo);
                App.ui.form.panelMain.add(App.ui.form.labelTitle);
                App.ui.form.panelMain.add(App.ui.form.labelSubtitle);
                // App.ui.form.panelMain.add(App.ui.form.labelLink);  // substituído pelo link único para os arquivos de legenda
                // App.ui.form.panelMain.add(App.ui.form.panelLink1);  // substituído pelo link único para os arquivos de legenda
                // App.ui.form.panelMain.add(App.ui.form.panelLink2);  // substituído pelo link único para os arquivos de legenda
                App.ui.form.panelMain.add(App.ui.form.labelLegendFiles);

                // App.ui.form.panelMain.add(App.ui.form.tabs);
                App.ui.form.panelMain.add(App.ui.form.panel1);

                // App.ui.form.tab1.add(App.ui.form.checkboxTab1);
                // Aba 'Direct Link' desabilitada: os links fixos de download (coleções antigas de
                // chaco, ecuador, peru, bolivia e indonesia) apontam para arquivos que não existem mais.
                // Reative só depois de atualizar os links para as coleções atuais.
                // App.ui.form.tab2.add(App.ui.form.checkboxTab2);

                App.ui.form.tabs.add(App.ui.form.tab1);
                App.ui.form.tabs.add(App.ui.form.tab2);

                // App.ui.form.panelLink1.add(App.ui.form.labelLink1);
                // App.ui.form.panelLink1.add(App.ui.form.labelLink2);
                // App.ui.form.panelLink1.add(App.ui.form.labelLink3);
                // App.ui.form.panelLink1.add(App.ui.form.labelLink4);
                // App.ui.form.panelLink1.add(App.ui.form.labelLink5);
                // App.ui.form.panelLink1.add(App.ui.form.labelLink6);
                // App.ui.form.panelLink2.add(App.ui.form.labelLink7); // ecuador
                // App.ui.form.panelLink2.add(App.ui.form.labelLink8);
                // App.ui.form.panelLink2.add(App.ui.form.labelLink9);
                // App.ui.form.panelLink2.add(App.ui.form.labelLink10);
                // App.ui.form.panelLink2.add(App.ui.form.labelLink11);
                // App.ui.form.panelLink2.add(App.ui.form.labelLink12);

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
                App.ui.form.panel1.add(App.ui.form.panelDataType);
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

            // arquivos de legenda da coleção mais recente (legend-colors/ no GitHub)
            labelLegendFiles: ui.Label('Legend files (QGIS, ArcGIS Pro, SLD, CSV)', {
                'fontSize': '10px'
            },
                'https://github.com/mapbiomas/user-toolkit/tree/master/legend-colors/coverage'
            ),

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
                    'mapbiomas-amazon',
                    'mapbiomas-argentina',
                    'mapbiomas-atlantic-forest',
                    'mapbiomas-brazil',
                    'mapbiomas-bolivia',
                    'mapbiomas-chaco',
                    'mapbiomas-chile',
                    'mapbiomas-colombia',
                    'mapbiomas-drc',
                    'mapbiomas-ecuador',
                    'mapbiomas-indonesia',
                    'mapbiomas-mexico',
                    'mapbiomas-pampa',
                    'mapbiomas-paraguay',
                    'mapbiomas-peru',
                    'mapbiomas-uruguay',
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
                'items': ['Coverage', 'Transitions'],
                'placeholder': 'Coverage',
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
                                App.ui.makeLayersList(
                                    App.tableShortName(),
                                    App.options.activeFeature,
                                    App.options.periods[App.options.dataType]
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
                        App.ui.form.panelMain.remove(App.ui.form.panel3);
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
                        App.ui.form.panelMain.add(App.ui.form.panel2); // brazil
                        App.ui.form.panelMain.add(App.ui.form.panel4);
                        App.ui.form.panelMain.add(App.ui.form.panel5);
                        App.ui.form.panelMain.add(App.ui.form.panel13); // bolivia
                        App.ui.form.panelMain.add(App.ui.form.panel6);
                        App.ui.form.panelMain.add(App.ui.form.panel7);
                        App.ui.form.panelMain.add(App.ui.form.panel12); // ecuador
                        App.ui.form.panelMain.add(App.ui.form.panel8);
                        App.ui.form.panelMain.add(App.ui.form.panel3); // pampa
                        App.ui.form.panelMain.add(App.ui.form.panel9);
                        App.ui.form.panelMain.add(App.ui.form.panel10);
                        App.ui.form.panelMain.add(App.ui.form.panel11);
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
                            ui.Label({ value: '1985', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/lclu/coverage/brasil_coverage_1985.tif' }),
                            ui.Label({ value: '1986', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/lclu/coverage/brasil_coverage_1986.tif' }),
                            ui.Label({ value: '1987', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/lclu/coverage/brasil_coverage_1987.tif' }),
                            ui.Label({ value: '1988', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/lclu/coverage/brasil_coverage_1988.tif' }),
                            ui.Label({ value: '1989', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/lclu/coverage/brasil_coverage_1989.tif' }),
                            ui.Label({ value: '1990', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/lclu/coverage/brasil_coverage_1990.tif' }),
                            ui.Label({ value: '1991', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/lclu/coverage/brasil_coverage_1991.tif' }),
                            ui.Label({ value: '1992', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/lclu/coverage/brasil_coverage_1992.tif' }),
                            ui.Label({ value: '1993', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/lclu/coverage/brasil_coverage_1993.tif' }),
                            ui.Label({ value: '1994', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/lclu/coverage/brasil_coverage_1994.tif' }),
                            ui.Label({ value: '1995', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/lclu/coverage/brasil_coverage_1995.tif' }),
                            ui.Label({ value: '1996', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/lclu/coverage/brasil_coverage_1996.tif' }),
                            ui.Label({ value: '1997', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/lclu/coverage/brasil_coverage_1997.tif' }),
                            ui.Label({ value: '1998', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/lclu/coverage/brasil_coverage_1998.tif' }),
                            ui.Label({ value: '1999', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/lclu/coverage/brasil_coverage_1999.tif' }),
                            ui.Label({ value: '2000', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/lclu/coverage/brasil_coverage_2000.tif' }),
                            ui.Label({ value: '2001', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/lclu/coverage/brasil_coverage_2001.tif' }),
                            ui.Label({ value: '2002', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/lclu/coverage/brasil_coverage_2002.tif' }),
                            ui.Label({ value: '2003', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/lclu/coverage/brasil_coverage_2003.tif' }),
                            ui.Label({ value: '2004', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/lclu/coverage/brasil_coverage_2004.tif' }),
                            ui.Label({ value: '2005', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/lclu/coverage/brasil_coverage_2005.tif' }),
                            ui.Label({ value: '2006', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/lclu/coverage/brasil_coverage_2006.tif' }),
                            ui.Label({ value: '2007', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/lclu/coverage/brasil_coverage_2007.tif' }),
                            ui.Label({ value: '2008', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/lclu/coverage/brasil_coverage_2008.tif' }),
                            ui.Label({ value: '2009', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/lclu/coverage/brasil_coverage_2009.tif' }),
                            ui.Label({ value: '2010', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/lclu/coverage/brasil_coverage_2010.tif' }),
                            ui.Label({ value: '2011', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/lclu/coverage/brasil_coverage_2011.tif' }),
                            ui.Label({ value: '2012', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/lclu/coverage/brasil_coverage_2012.tif' }),
                            ui.Label({ value: '2013', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/lclu/coverage/brasil_coverage_2013.tif' }),
                            ui.Label({ value: '2014', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/lclu/coverage/brasil_coverage_2014.tif' }),
                            ui.Label({ value: '2015', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/lclu/coverage/brasil_coverage_2015.tif' }),
                            ui.Label({ value: '2016', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/lclu/coverage/brasil_coverage_2016.tif' }),
                            ui.Label({ value: '2017', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/lclu/coverage/brasil_coverage_2017.tif' }),
                            ui.Label({ value: '2018', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/lclu/coverage/brasil_coverage_2018.tif' }),
                            ui.Label({ value: '2019', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/lclu/coverage/brasil_coverage_2019.tif' }),
                            ui.Label({ value: '2020', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/lclu/coverage/brasil_coverage_2020.tif' }),
                            ui.Label({ value: '2021', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/lclu/coverage/brasil_coverage_2021.tif' }),
                            ui.Label({ value: '2022', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_8/lclu/coverage/brasil_coverage_2022.tif' }),
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
                    ui.Label('Pampa'),
                    ui.Panel({
                        widgets: [
                            ui.Label({ value: '1985', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/pampa/collection_3/coverage/pampa_coverage_1985.tif' }),
                            ui.Label({ value: '1986', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/pampa/collection_3/coverage/pampa_coverage_1986.tif' }),
                            ui.Label({ value: '1987', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/pampa/collection_3/coverage/pampa_coverage_1987.tif' }),
                            ui.Label({ value: '1988', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/pampa/collection_3/coverage/pampa_coverage_1988.tif' }),
                            ui.Label({ value: '1989', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/pampa/collection_3/coverage/pampa_coverage_1989.tif' }),
                            ui.Label({ value: '1990', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/pampa/collection_3/coverage/pampa_coverage_1990.tif' }),
                            ui.Label({ value: '1991', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/pampa/collection_3/coverage/pampa_coverage_1991.tif' }),
                            ui.Label({ value: '1992', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/pampa/collection_3/coverage/pampa_coverage_1992.tif' }),
                            ui.Label({ value: '1993', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/pampa/collection_3/coverage/pampa_coverage_1993.tif' }),
                            ui.Label({ value: '1994', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/pampa/collection_3/coverage/pampa_coverage_1994.tif' }),
                            ui.Label({ value: '1995', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/pampa/collection_3/coverage/pampa_coverage_1995.tif' }),
                            ui.Label({ value: '1996', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/pampa/collection_3/coverage/pampa_coverage_1996.tif' }),
                            ui.Label({ value: '1997', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/pampa/collection_3/coverage/pampa_coverage_1997.tif' }),
                            ui.Label({ value: '1998', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/pampa/collection_3/coverage/pampa_coverage_1998.tif' }),
                            ui.Label({ value: '1999', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/pampa/collection_3/coverage/pampa_coverage_1999.tif' }),
                            ui.Label({ value: '2000', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/pampa/collection_3/coverage/pampa_coverage_2000.tif' }),
                            ui.Label({ value: '2001', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/pampa/collection_3/coverage/pampa_coverage_2001.tif' }),
                            ui.Label({ value: '2002', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/pampa/collection_3/coverage/pampa_coverage_2002.tif' }),
                            ui.Label({ value: '2003', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/pampa/collection_3/coverage/pampa_coverage_2003.tif' }),
                            ui.Label({ value: '2004', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/pampa/collection_3/coverage/pampa_coverage_2004.tif' }),
                            ui.Label({ value: '2005', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/pampa/collection_3/coverage/pampa_coverage_2005.tif' }),
                            ui.Label({ value: '2006', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/pampa/collection_3/coverage/pampa_coverage_2006.tif' }),
                            ui.Label({ value: '2007', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/pampa/collection_3/coverage/pampa_coverage_2007.tif' }),
                            ui.Label({ value: '2008', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/pampa/collection_3/coverage/pampa_coverage_2008.tif' }),
                            ui.Label({ value: '2009', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/pampa/collection_3/coverage/pampa_coverage_2009.tif' }),
                            ui.Label({ value: '2010', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/pampa/collection_3/coverage/pampa_coverage_2010.tif' }),
                            ui.Label({ value: '2011', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/pampa/collection_3/coverage/pampa_coverage_2011.tif' }),
                            ui.Label({ value: '2012', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/pampa/collection_3/coverage/pampa_coverage_2012.tif' }),
                            ui.Label({ value: '2013', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/pampa/collection_3/coverage/pampa_coverage_2013.tif' }),
                            ui.Label({ value: '2014', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/pampa/collection_3/coverage/pampa_coverage_2014.tif' }),
                            ui.Label({ value: '2015', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/pampa/collection_3/coverage/pampa_coverage_2015.tif' }),
                            ui.Label({ value: '2016', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/pampa/collection_3/coverage/pampa_coverage_2016.tif' }),
                            ui.Label({ value: '2017', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/pampa/collection_3/coverage/pampa_coverage_2017.tif' }),
                            ui.Label({ value: '2018', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/pampa/collection_3/coverage/pampa_coverage_2018.tif' }),
                            ui.Label({ value: '2019', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/pampa/collection_3/coverage/pampa_coverage_2019.tif' }),
                            ui.Label({ value: '2020', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/pampa/collection_3/coverage/pampa_coverage_2020.tif' }),
                            ui.Label({ value: '2021', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/pampa/collection_3/coverage/pampa_coverage_2021.tif' }),
                            ui.Label({ value: '2022', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/pampa/collection_3/coverage/pampa_coverage_2022.tif' }),
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
                    ui.Label('Atlantic Forest'),
                    ui.Panel({
                        widgets: [
                            ui.Label({ value: '1985', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bosque_atlantico/collection_3/coverage/bosque_coverage_1985.tif' }),
                            ui.Label({ value: '1986', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bosque_atlantico/collection_3/coverage/bosque_coverage_1986.tif' }),
                            ui.Label({ value: '1987', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bosque_atlantico/collection_3/coverage/bosque_coverage_1987.tif' }),
                            ui.Label({ value: '1988', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bosque_atlantico/collection_3/coverage/bosque_coverage_1988.tif' }),
                            ui.Label({ value: '1989', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bosque_atlantico/collection_3/coverage/bosque_coverage_1989.tif' }),
                            ui.Label({ value: '1990', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bosque_atlantico/collection_3/coverage/bosque_coverage_1990.tif' }),
                            ui.Label({ value: '1991', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bosque_atlantico/collection_3/coverage/bosque_coverage_1991.tif' }),
                            ui.Label({ value: '1992', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bosque_atlantico/collection_3/coverage/bosque_coverage_1992.tif' }),
                            ui.Label({ value: '1993', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bosque_atlantico/collection_3/coverage/bosque_coverage_1993.tif' }),
                            ui.Label({ value: '1994', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bosque_atlantico/collection_3/coverage/bosque_coverage_1994.tif' }),
                            ui.Label({ value: '1995', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bosque_atlantico/collection_3/coverage/bosque_coverage_1995.tif' }),
                            ui.Label({ value: '1996', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bosque_atlantico/collection_3/coverage/bosque_coverage_1996.tif' }),
                            ui.Label({ value: '1997', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bosque_atlantico/collection_3/coverage/bosque_coverage_1997.tif' }),
                            ui.Label({ value: '1998', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bosque_atlantico/collection_3/coverage/bosque_coverage_1998.tif' }),
                            ui.Label({ value: '1999', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bosque_atlantico/collection_3/coverage/bosque_coverage_1999.tif' }),
                            ui.Label({ value: '2000', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bosque_atlantico/collection_3/coverage/bosque_coverage_2000.tif' }),
                            ui.Label({ value: '2001', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bosque_atlantico/collection_3/coverage/bosque_coverage_2001.tif' }),
                            ui.Label({ value: '2002', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bosque_atlantico/collection_3/coverage/bosque_coverage_2002.tif' }),
                            ui.Label({ value: '2003', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bosque_atlantico/collection_3/coverage/bosque_coverage_2003.tif' }),
                            ui.Label({ value: '2004', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bosque_atlantico/collection_3/coverage/bosque_coverage_2004.tif' }),
                            ui.Label({ value: '2005', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bosque_atlantico/collection_3/coverage/bosque_coverage_2005.tif' }),
                            ui.Label({ value: '2006', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bosque_atlantico/collection_3/coverage/bosque_coverage_2006.tif' }),
                            ui.Label({ value: '2007', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bosque_atlantico/collection_3/coverage/bosque_coverage_2007.tif' }),
                            ui.Label({ value: '2008', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bosque_atlantico/collection_3/coverage/bosque_coverage_2008.tif' }),
                            ui.Label({ value: '2009', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bosque_atlantico/collection_3/coverage/bosque_coverage_2009.tif' }),
                            ui.Label({ value: '2010', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bosque_atlantico/collection_3/coverage/bosque_coverage_2010.tif' }),
                            ui.Label({ value: '2011', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bosque_atlantico/collection_3/coverage/bosque_coverage_2011.tif' }),
                            ui.Label({ value: '2012', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bosque_atlantico/collection_3/coverage/bosque_coverage_2012.tif' }),
                            ui.Label({ value: '2013', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bosque_atlantico/collection_3/coverage/bosque_coverage_2013.tif' }),
                            ui.Label({ value: '2014', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bosque_atlantico/collection_3/coverage/bosque_coverage_2014.tif' }),
                            ui.Label({ value: '2015', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bosque_atlantico/collection_3/coverage/bosque_coverage_2015.tif' }),
                            ui.Label({ value: '2016', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bosque_atlantico/collection_3/coverage/bosque_coverage_2016.tif' }),
                            ui.Label({ value: '2017', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bosque_atlantico/collection_3/coverage/bosque_coverage_2017.tif' }),
                            ui.Label({ value: '2018', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bosque_atlantico/collection_3/coverage/bosque_coverage_2018.tif' }),
                            ui.Label({ value: '2019', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bosque_atlantico/collection_3/coverage/bosque_coverage_2019.tif' }),
                            ui.Label({ value: '2020', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bosque_atlantico/collection_3/coverage/bosque_coverage_2020.tif' }),
                            ui.Label({ value: '2021', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bosque_atlantico/collection_3/coverage/bosque_coverage_2021.tif' }),
                            ui.Label({ value: '2022', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bosque_atlantico/collection_3/coverage/bosque_coverage_2022.tif' }),
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
                    ui.Label('Amazon'),
                    ui.Panel({
                        widgets: [
                            ui.Label({ value: '1985', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/amazonia/collection_5/coverage/amazonia_coverage_1985.tif' }),
                            ui.Label({ value: '1986', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/amazonia/collection_5/coverage/amazonia_coverage_1986.tif' }),
                            ui.Label({ value: '1987', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/amazonia/collection_5/coverage/amazonia_coverage_1987.tif' }),
                            ui.Label({ value: '1988', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/amazonia/collection_5/coverage/amazonia_coverage_1988.tif' }),
                            ui.Label({ value: '1989', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/amazonia/collection_5/coverage/amazonia_coverage_1989.tif' }),
                            ui.Label({ value: '1990', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/amazonia/collection_5/coverage/amazonia_coverage_1990.tif' }),
                            ui.Label({ value: '1991', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/amazonia/collection_5/coverage/amazonia_coverage_1991.tif' }),
                            ui.Label({ value: '1992', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/amazonia/collection_5/coverage/amazonia_coverage_1992.tif' }),
                            ui.Label({ value: '1993', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/amazonia/collection_5/coverage/amazonia_coverage_1993.tif' }),
                            ui.Label({ value: '1994', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/amazonia/collection_5/coverage/amazonia_coverage_1994.tif' }),
                            ui.Label({ value: '1995', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/amazonia/collection_5/coverage/amazonia_coverage_1995.tif' }),
                            ui.Label({ value: '1996', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/amazonia/collection_5/coverage/amazonia_coverage_1996.tif' }),
                            ui.Label({ value: '1997', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/amazonia/collection_5/coverage/amazonia_coverage_1997.tif' }),
                            ui.Label({ value: '1998', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/amazonia/collection_5/coverage/amazonia_coverage_1998.tif' }),
                            ui.Label({ value: '1999', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/amazonia/collection_5/coverage/amazonia_coverage_1999.tif' }),
                            ui.Label({ value: '2000', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/amazonia/collection_5/coverage/amazonia_coverage_2000.tif' }),
                            ui.Label({ value: '2001', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/amazonia/collection_5/coverage/amazonia_coverage_2001.tif' }),
                            ui.Label({ value: '2002', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/amazonia/collection_5/coverage/amazonia_coverage_2002.tif' }),
                            ui.Label({ value: '2003', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/amazonia/collection_5/coverage/amazonia_coverage_2003.tif' }),
                            ui.Label({ value: '2004', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/amazonia/collection_5/coverage/amazonia_coverage_2004.tif' }),
                            ui.Label({ value: '2005', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/amazonia/collection_5/coverage/amazonia_coverage_2005.tif' }),
                            ui.Label({ value: '2006', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/amazonia/collection_5/coverage/amazonia_coverage_2006.tif' }),
                            ui.Label({ value: '2007', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/amazonia/collection_5/coverage/amazonia_coverage_2007.tif' }),
                            ui.Label({ value: '2008', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/amazonia/collection_5/coverage/amazonia_coverage_2008.tif' }),
                            ui.Label({ value: '2009', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/amazonia/collection_5/coverage/amazonia_coverage_2009.tif' }),
                            ui.Label({ value: '2010', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/amazonia/collection_5/coverage/amazonia_coverage_2010.tif' }),
                            ui.Label({ value: '2011', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/amazonia/collection_5/coverage/amazonia_coverage_2011.tif' }),
                            ui.Label({ value: '2012', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/amazonia/collection_5/coverage/amazonia_coverage_2012.tif' }),
                            ui.Label({ value: '2013', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/amazonia/collection_5/coverage/amazonia_coverage_2013.tif' }),
                            ui.Label({ value: '2014', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/amazonia/collection_5/coverage/amazonia_coverage_2014.tif' }),
                            ui.Label({ value: '2015', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/amazonia/collection_5/coverage/amazonia_coverage_2015.tif' }),
                            ui.Label({ value: '2016', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/amazonia/collection_5/coverage/amazonia_coverage_2016.tif' }),
                            ui.Label({ value: '2017', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/amazonia/collection_5/coverage/amazonia_coverage_2017.tif' }),
                            ui.Label({ value: '2018', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/amazonia/collection_5/coverage/amazonia_coverage_2018.tif' }),
                            ui.Label({ value: '2019', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/amazonia/collection_5/coverage/amazonia_coverage_2019.tif' }),
                            ui.Label({ value: '2020', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/amazonia/collection_5/coverage/amazonia_coverage_2020.tif' }),
                            ui.Label({ value: '2021', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/amazonia/collection_5/coverage/amazonia_coverage_2021.tif' }),
                            ui.Label({ value: '2022', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/amazonia/collection_5/coverage/amazonia_coverage_2022.tif' }),
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
                    ui.Label('Chaco'),
                    ui.Panel({
                        widgets: [
                            ui.Label({ value: '1985', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/chaco/collection_4/lulc/coverage/chaco_coverage_1985.tif' }),
                            ui.Label({ value: '1986', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/chaco/collection_4/lulc/coverage/chaco_coverage_1986.tif' }),
                            ui.Label({ value: '1987', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/chaco/collection_4/lulc/coverage/chaco_coverage_1987.tif' }),
                            ui.Label({ value: '1988', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/chaco/collection_4/lulc/coverage/chaco_coverage_1988.tif' }),
                            ui.Label({ value: '1989', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/chaco/collection_4/lulc/coverage/chaco_coverage_1989.tif' }),
                            ui.Label({ value: '1990', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/chaco/collection_4/lulc/coverage/chaco_coverage_1990.tif' }),
                            ui.Label({ value: '1991', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/chaco/collection_4/lulc/coverage/chaco_coverage_1991.tif' }),
                            ui.Label({ value: '1992', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/chaco/collection_4/lulc/coverage/chaco_coverage_1992.tif' }),
                            ui.Label({ value: '1993', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/chaco/collection_4/lulc/coverage/chaco_coverage_1993.tif' }),
                            ui.Label({ value: '1994', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/chaco/collection_4/lulc/coverage/chaco_coverage_1994.tif' }),
                            ui.Label({ value: '1995', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/chaco/collection_4/lulc/coverage/chaco_coverage_1995.tif' }),
                            ui.Label({ value: '1996', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/chaco/collection_4/lulc/coverage/chaco_coverage_1996.tif' }),
                            ui.Label({ value: '1997', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/chaco/collection_4/lulc/coverage/chaco_coverage_1997.tif' }),
                            ui.Label({ value: '1998', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/chaco/collection_4/lulc/coverage/chaco_coverage_1998.tif' }),
                            ui.Label({ value: '1999', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/chaco/collection_4/lulc/coverage/chaco_coverage_1999.tif' }),
                            ui.Label({ value: '2000', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/chaco/collection_4/lulc/coverage/chaco_coverage_2000.tif' }),
                            ui.Label({ value: '2001', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/chaco/collection_4/lulc/coverage/chaco_coverage_2001.tif' }),
                            ui.Label({ value: '2002', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/chaco/collection_4/lulc/coverage/chaco_coverage_2002.tif' }),
                            ui.Label({ value: '2003', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/chaco/collection_4/lulc/coverage/chaco_coverage_2003.tif' }),
                            ui.Label({ value: '2004', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/chaco/collection_4/lulc/coverage/chaco_coverage_2004.tif' }),
                            ui.Label({ value: '2005', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/chaco/collection_4/lulc/coverage/chaco_coverage_2005.tif' }),
                            ui.Label({ value: '2006', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/chaco/collection_4/lulc/coverage/chaco_coverage_2006.tif' }),
                            ui.Label({ value: '2007', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/chaco/collection_4/lulc/coverage/chaco_coverage_2007.tif' }),
                            ui.Label({ value: '2008', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/chaco/collection_4/lulc/coverage/chaco_coverage_2008.tif' }),
                            ui.Label({ value: '2009', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/chaco/collection_4/lulc/coverage/chaco_coverage_2009.tif' }),
                            ui.Label({ value: '2010', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/chaco/collection_4/lulc/coverage/chaco_coverage_2010.tif' }),
                            ui.Label({ value: '2011', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/chaco/collection_4/lulc/coverage/chaco_coverage_2011.tif' }),
                            ui.Label({ value: '2012', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/chaco/collection_4/lulc/coverage/chaco_coverage_2012.tif' }),
                            ui.Label({ value: '2013', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/chaco/collection_4/lulc/coverage/chaco_coverage_2013.tif' }),
                            ui.Label({ value: '2014', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/chaco/collection_4/lulc/coverage/chaco_coverage_2014.tif' }),
                            ui.Label({ value: '2015', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/chaco/collection_4/lulc/coverage/chaco_coverage_2015.tif' }),
                            ui.Label({ value: '2016', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/chaco/collection_4/lulc/coverage/chaco_coverage_2016.tif' }),
                            ui.Label({ value: '2017', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/chaco/collection_4/lulc/coverage/chaco_coverage_2017.tif' }),
                            ui.Label({ value: '2018', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/chaco/collection_4/lulc/coverage/chaco_coverage_2018.tif' }),
                            ui.Label({ value: '2019', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/chaco/collection_4/lulc/coverage/chaco_coverage_2019.tif' }),
                            ui.Label({ value: '2020', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/chaco/collection_4/lulc/coverage/chaco_coverage_2020.tif' }),
                            ui.Label({ value: '2021', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/chaco/collection_4/lulc/coverage/chaco_coverage_2021.tif' }),
                            ui.Label({ value: '2022', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/chaco/collection_4/lulc/coverage/chaco_coverage_2022.tif' }),
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
                    ui.Label('Colombia'),
                    ui.Panel({
                        widgets: [
                            ui.Label({ value: '1985', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/colombia/collection_1/coverage/colombia_coverage_1985.tif' }),
                            ui.Label({ value: '1986', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/colombia/collection_1/coverage/colombia_coverage_1986.tif' }),
                            ui.Label({ value: '1987', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/colombia/collection_1/coverage/colombia_coverage_1987.tif' }),
                            ui.Label({ value: '1988', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/colombia/collection_1/coverage/colombia_coverage_1988.tif' }),
                            ui.Label({ value: '1989', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/colombia/collection_1/coverage/colombia_coverage_1989.tif' }),
                            ui.Label({ value: '1990', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/colombia/collection_1/coverage/colombia_coverage_1990.tif' }),
                            ui.Label({ value: '1991', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/colombia/collection_1/coverage/colombia_coverage_1991.tif' }),
                            ui.Label({ value: '1992', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/colombia/collection_1/coverage/colombia_coverage_1992.tif' }),
                            ui.Label({ value: '1993', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/colombia/collection_1/coverage/colombia_coverage_1993.tif' }),
                            ui.Label({ value: '1994', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/colombia/collection_1/coverage/colombia_coverage_1994.tif' }),
                            ui.Label({ value: '1995', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/colombia/collection_1/coverage/colombia_coverage_1995.tif' }),
                            ui.Label({ value: '1996', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/colombia/collection_1/coverage/colombia_coverage_1996.tif' }),
                            ui.Label({ value: '1997', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/colombia/collection_1/coverage/colombia_coverage_1997.tif' }),
                            ui.Label({ value: '1998', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/colombia/collection_1/coverage/colombia_coverage_1998.tif' }),
                            ui.Label({ value: '1999', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/colombia/collection_1/coverage/colombia_coverage_1999.tif' }),
                            ui.Label({ value: '2000', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/colombia/collection_1/coverage/colombia_coverage_2000.tif' }),
                            ui.Label({ value: '2001', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/colombia/collection_1/coverage/colombia_coverage_2001.tif' }),
                            ui.Label({ value: '2002', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/colombia/collection_1/coverage/colombia_coverage_2002.tif' }),
                            ui.Label({ value: '2003', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/colombia/collection_1/coverage/colombia_coverage_2003.tif' }),
                            ui.Label({ value: '2004', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/colombia/collection_1/coverage/colombia_coverage_2004.tif' }),
                            ui.Label({ value: '2005', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/colombia/collection_1/coverage/colombia_coverage_2005.tif' }),
                            ui.Label({ value: '2006', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/colombia/collection_1/coverage/colombia_coverage_2006.tif' }),
                            ui.Label({ value: '2007', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/colombia/collection_1/coverage/colombia_coverage_2007.tif' }),
                            ui.Label({ value: '2008', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/colombia/collection_1/coverage/colombia_coverage_2008.tif' }),
                            ui.Label({ value: '2009', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/colombia/collection_1/coverage/colombia_coverage_2009.tif' }),
                            ui.Label({ value: '2010', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/colombia/collection_1/coverage/colombia_coverage_2010.tif' }),
                            ui.Label({ value: '2011', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/colombia/collection_1/coverage/colombia_coverage_2011.tif' }),
                            ui.Label({ value: '2012', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/colombia/collection_1/coverage/colombia_coverage_2012.tif' }),
                            ui.Label({ value: '2013', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/colombia/collection_1/coverage/colombia_coverage_2013.tif' }),
                            ui.Label({ value: '2014', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/colombia/collection_1/coverage/colombia_coverage_2014.tif' }),
                            ui.Label({ value: '2015', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/colombia/collection_1/coverage/colombia_coverage_2015.tif' }),
                            ui.Label({ value: '2016', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/colombia/collection_1/coverage/colombia_coverage_2016.tif' }),
                            ui.Label({ value: '2017', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/colombia/collection_1/coverage/colombia_coverage_2017.tif' }),
                            ui.Label({ value: '2018', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/colombia/collection_1/coverage/colombia_coverage_2018.tif' }),
                            ui.Label({ value: '2019', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/colombia/collection_1/coverage/colombia_coverage_2019.tif' }),
                            ui.Label({ value: '2020', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/colombia/collection_1/coverage/colombia_coverage_2020.tif' }),
                            ui.Label({ value: '2021', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/colombia/collection_1/coverage/colombia_coverage_2021.tif' }),
                            ui.Label({ value: '2022', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/colombia/collection_1/coverage/colombia_coverage_2022.tif' }),
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

            panel8: ui.Panel({
                widgets: [
                    ui.Label('Indonesia'),
                    ui.Panel({
                        widgets: [
                            ui.Label({ value: '1985', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/coverage/indonesia_coverage_1985.tif' }),
                            ui.Label({ value: '1986', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/coverage/indonesia_coverage_1986.tif' }),
                            ui.Label({ value: '1987', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/coverage/indonesia_coverage_1987.tif' }),
                            ui.Label({ value: '1988', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/coverage/indonesia_coverage_1988.tif' }),
                            ui.Label({ value: '1989', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/coverage/indonesia_coverage_1989.tif' }),
                            ui.Label({ value: '1990', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/coverage/indonesia_coverage_1990.tif' }),
                            ui.Label({ value: '1991', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/coverage/indonesia_coverage_1991.tif' }),
                            ui.Label({ value: '1992', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/coverage/indonesia_coverage_1992.tif' }),
                            ui.Label({ value: '1993', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/coverage/indonesia_coverage_1993.tif' }),
                            ui.Label({ value: '1994', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/coverage/indonesia_coverage_1994.tif' }),
                            ui.Label({ value: '1995', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/coverage/indonesia_coverage_1995.tif' }),
                            ui.Label({ value: '1996', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/coverage/indonesia_coverage_1996.tif' }),
                            ui.Label({ value: '1997', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/coverage/indonesia_coverage_1997.tif' }),
                            ui.Label({ value: '1998', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/coverage/indonesia_coverage_1998.tif' }),
                            ui.Label({ value: '1999', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/coverage/indonesia_coverage_1999.tif' }),
                            ui.Label({ value: '2000', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/coverage/indonesia_coverage_2000.tif' }),
                            ui.Label({ value: '2001', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/coverage/indonesia_coverage_2001.tif' }),
                            ui.Label({ value: '2002', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/coverage/indonesia_coverage_2002.tif' }),
                            ui.Label({ value: '2003', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/coverage/indonesia_coverage_2003.tif' }),
                            ui.Label({ value: '2004', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/coverage/indonesia_coverage_2004.tif' }),
                            ui.Label({ value: '2005', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/coverage/indonesia_coverage_2005.tif' }),
                            ui.Label({ value: '2006', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/coverage/indonesia_coverage_2006.tif' }),
                            ui.Label({ value: '2007', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/coverage/indonesia_coverage_2007.tif' }),
                            ui.Label({ value: '2008', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/coverage/indonesia_coverage_2008.tif' }),
                            ui.Label({ value: '2009', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/coverage/indonesia_coverage_2009.tif' }),
                            ui.Label({ value: '2010', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/coverage/indonesia_coverage_2010.tif' }),
                            ui.Label({ value: '2011', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/coverage/indonesia_coverage_2011.tif' }),
                            ui.Label({ value: '2012', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/coverage/indonesia_coverage_2012.tif' }),
                            ui.Label({ value: '2013', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/coverage/indonesia_coverage_2013.tif' }),
                            ui.Label({ value: '2014', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/coverage/indonesia_coverage_2014.tif' }),
                            ui.Label({ value: '2015', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/coverage/indonesia_coverage_2015.tif' }),
                            ui.Label({ value: '2016', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/coverage/indonesia_coverage_2016.tif' }),
                            ui.Label({ value: '2017', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/coverage/indonesia_coverage_2017.tif' }),
                            ui.Label({ value: '2018', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/coverage/indonesia_coverage_2018.tif' }),
                            ui.Label({ value: '2019', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/coverage/indonesia_coverage_2019.tif' }),
                            ui.Label({ value: '2020', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/coverage/indonesia_coverage_2020.tif' }),
                            ui.Label({ value: '2021', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/coverage/indonesia_coverage_2021.tif' }),
                            ui.Label({ value: '2022', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/coverage/indonesia_coverage_2022.tif' }),
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

            panel9: ui.Panel({
                widgets: [
                    ui.Label('Peru'),
                    ui.Panel({
                        widgets: [
                            ui.Label({ value: '1985', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/peru/collection_1/lulc/coverage/peru_coverage_1985.tif' }),
                            ui.Label({ value: '1986', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/peru/collection_1/lulc/coverage/peru_coverage_1986.tif' }),
                            ui.Label({ value: '1987', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/peru/collection_1/lulc/coverage/peru_coverage_1987.tif' }),
                            ui.Label({ value: '1988', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/peru/collection_1/lulc/coverage/peru_coverage_1988.tif' }),
                            ui.Label({ value: '1989', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/peru/collection_1/lulc/coverage/peru_coverage_1989.tif' }),
                            ui.Label({ value: '1990', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/peru/collection_1/lulc/coverage/peru_coverage_1990.tif' }),
                            ui.Label({ value: '1991', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/peru/collection_1/lulc/coverage/peru_coverage_1991.tif' }),
                            ui.Label({ value: '1992', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/peru/collection_1/lulc/coverage/peru_coverage_1992.tif' }),
                            ui.Label({ value: '1993', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/peru/collection_1/lulc/coverage/peru_coverage_1993.tif' }),
                            ui.Label({ value: '1994', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/peru/collection_1/lulc/coverage/peru_coverage_1994.tif' }),
                            ui.Label({ value: '1995', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/peru/collection_1/lulc/coverage/peru_coverage_1995.tif' }),
                            ui.Label({ value: '1996', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/peru/collection_1/lulc/coverage/peru_coverage_1996.tif' }),
                            ui.Label({ value: '1997', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/peru/collection_1/lulc/coverage/peru_coverage_1997.tif' }),
                            ui.Label({ value: '1998', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/peru/collection_1/lulc/coverage/peru_coverage_1998.tif' }),
                            ui.Label({ value: '1999', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/peru/collection_1/lulc/coverage/peru_coverage_1999.tif' }),
                            ui.Label({ value: '2000', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/peru/collection_1/lulc/coverage/peru_coverage_2000.tif' }),
                            ui.Label({ value: '2001', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/peru/collection_1/lulc/coverage/peru_coverage_2001.tif' }),
                            ui.Label({ value: '2002', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/peru/collection_1/lulc/coverage/peru_coverage_2002.tif' }),
                            ui.Label({ value: '2003', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/peru/collection_1/lulc/coverage/peru_coverage_2003.tif' }),
                            ui.Label({ value: '2004', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/peru/collection_1/lulc/coverage/peru_coverage_2004.tif' }),
                            ui.Label({ value: '2005', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/peru/collection_1/lulc/coverage/peru_coverage_2005.tif' }),
                            ui.Label({ value: '2006', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/peru/collection_1/lulc/coverage/peru_coverage_2006.tif' }),
                            ui.Label({ value: '2007', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/peru/collection_1/lulc/coverage/peru_coverage_2007.tif' }),
                            ui.Label({ value: '2008', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/peru/collection_1/lulc/coverage/peru_coverage_2008.tif' }),
                            ui.Label({ value: '2009', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/peru/collection_1/lulc/coverage/peru_coverage_2009.tif' }),
                            ui.Label({ value: '2010', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/peru/collection_1/lulc/coverage/peru_coverage_2010.tif' }),
                            ui.Label({ value: '2011', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/peru/collection_1/lulc/coverage/peru_coverage_2011.tif' }),
                            ui.Label({ value: '2012', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/peru/collection_1/lulc/coverage/peru_coverage_2012.tif' }),
                            ui.Label({ value: '2013', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/peru/collection_1/lulc/coverage/peru_coverage_2013.tif' }),
                            ui.Label({ value: '2014', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/peru/collection_1/lulc/coverage/peru_coverage_2014.tif' }),
                            ui.Label({ value: '2015', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/peru/collection_1/lulc/coverage/peru_coverage_2015.tif' }),
                            ui.Label({ value: '2016', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/peru/collection_1/lulc/coverage/peru_coverage_2016.tif' }),
                            ui.Label({ value: '2017', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/peru/collection_1/lulc/coverage/peru_coverage_2017.tif' }),
                            ui.Label({ value: '2018', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/peru/collection_1/lulc/coverage/peru_coverage_2018.tif' }),
                            ui.Label({ value: '2019', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/peru/collection_1/lulc/coverage/peru_coverage_2019.tif' }),
                            ui.Label({ value: '2020', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/peru/collection_1/lulc/coverage/peru_coverage_2020.tif' }),
                            ui.Label({ value: '2021', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/peru/collection_1/lulc/coverage/peru_coverage_2021.tif' }),
                            ui.Label({ value: '2022', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/peru/collection_1/lulc/coverage/peru_coverage_2022.tif' }),
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

            panel10: ui.Panel({
                widgets: [
                    ui.Label('Uruguay'),
                    ui.Panel({
                        widgets: [
                            ui.Label({ value: '1985', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/uruguay/collection_1/coverage/uruguay_coverage_1985.tif' }),
                            ui.Label({ value: '1986', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/uruguay/collection_1/coverage/uruguay_coverage_1986.tif' }),
                            ui.Label({ value: '1987', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/uruguay/collection_1/coverage/uruguay_coverage_1987.tif' }),
                            ui.Label({ value: '1988', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/uruguay/collection_1/coverage/uruguay_coverage_1988.tif' }),
                            ui.Label({ value: '1989', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/uruguay/collection_1/coverage/uruguay_coverage_1989.tif' }),
                            ui.Label({ value: '1990', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/uruguay/collection_1/coverage/uruguay_coverage_1990.tif' }),
                            ui.Label({ value: '1991', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/uruguay/collection_1/coverage/uruguay_coverage_1991.tif' }),
                            ui.Label({ value: '1992', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/uruguay/collection_1/coverage/uruguay_coverage_1992.tif' }),
                            ui.Label({ value: '1993', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/uruguay/collection_1/coverage/uruguay_coverage_1993.tif' }),
                            ui.Label({ value: '1994', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/uruguay/collection_1/coverage/uruguay_coverage_1994.tif' }),
                            ui.Label({ value: '1995', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/uruguay/collection_1/coverage/uruguay_coverage_1995.tif' }),
                            ui.Label({ value: '1996', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/uruguay/collection_1/coverage/uruguay_coverage_1996.tif' }),
                            ui.Label({ value: '1997', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/uruguay/collection_1/coverage/uruguay_coverage_1997.tif' }),
                            ui.Label({ value: '1998', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/uruguay/collection_1/coverage/uruguay_coverage_1998.tif' }),
                            ui.Label({ value: '1999', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/uruguay/collection_1/coverage/uruguay_coverage_1999.tif' }),
                            ui.Label({ value: '2000', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/uruguay/collection_1/coverage/uruguay_coverage_2000.tif' }),
                            ui.Label({ value: '2001', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/uruguay/collection_1/coverage/uruguay_coverage_2001.tif' }),
                            ui.Label({ value: '2002', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/uruguay/collection_1/coverage/uruguay_coverage_2002.tif' }),
                            ui.Label({ value: '2003', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/uruguay/collection_1/coverage/uruguay_coverage_2003.tif' }),
                            ui.Label({ value: '2004', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/uruguay/collection_1/coverage/uruguay_coverage_2004.tif' }),
                            ui.Label({ value: '2005', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/uruguay/collection_1/coverage/uruguay_coverage_2005.tif' }),
                            ui.Label({ value: '2006', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/uruguay/collection_1/coverage/uruguay_coverage_2006.tif' }),
                            ui.Label({ value: '2007', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/uruguay/collection_1/coverage/uruguay_coverage_2007.tif' }),
                            ui.Label({ value: '2008', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/uruguay/collection_1/coverage/uruguay_coverage_2008.tif' }),
                            ui.Label({ value: '2009', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/uruguay/collection_1/coverage/uruguay_coverage_2009.tif' }),
                            ui.Label({ value: '2010', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/uruguay/collection_1/coverage/uruguay_coverage_2010.tif' }),
                            ui.Label({ value: '2011', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/uruguay/collection_1/coverage/uruguay_coverage_2011.tif' }),
                            ui.Label({ value: '2012', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/uruguay/collection_1/coverage/uruguay_coverage_2012.tif' }),
                            ui.Label({ value: '2013', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/uruguay/collection_1/coverage/uruguay_coverage_2013.tif' }),
                            ui.Label({ value: '2014', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/uruguay/collection_1/coverage/uruguay_coverage_2014.tif' }),
                            ui.Label({ value: '2015', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/uruguay/collection_1/coverage/uruguay_coverage_2015.tif' }),
                            ui.Label({ value: '2016', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/uruguay/collection_1/coverage/uruguay_coverage_2016.tif' }),
                            ui.Label({ value: '2017', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/uruguay/collection_1/coverage/uruguay_coverage_2017.tif' }),
                            ui.Label({ value: '2018', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/uruguay/collection_1/coverage/uruguay_coverage_2018.tif' }),
                            ui.Label({ value: '2019', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/uruguay/collection_1/coverage/uruguay_coverage_2019.tif' }),
                            ui.Label({ value: '2020', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/uruguay/collection_1/coverage/uruguay_coverage_2020.tif' }),
                            ui.Label({ value: '2021', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/uruguay/collection_1/coverage/uruguay_coverage_2021.tif' }),
                            ui.Label({ value: '2022', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/uruguay/collection_1/coverage/uruguay_coverage_2022.tif' }),
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

            panel11: ui.Panel({
                widgets: [
                    ui.Label('Venezuela'),
                    ui.Panel({
                        widgets: [
                            ui.Label({ value: '1985', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/venezuela/collection_1/coverage/venezuela_coverage_1985.tif' }),
                            ui.Label({ value: '1986', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/venezuela/collection_1/coverage/venezuela_coverage_1986.tif' }),
                            ui.Label({ value: '1987', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/venezuela/collection_1/coverage/venezuela_coverage_1987.tif' }),
                            ui.Label({ value: '1988', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/venezuela/collection_1/coverage/venezuela_coverage_1988.tif' }),
                            ui.Label({ value: '1989', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/venezuela/collection_1/coverage/venezuela_coverage_1989.tif' }),
                            ui.Label({ value: '1990', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/venezuela/collection_1/coverage/venezuela_coverage_1990.tif' }),
                            ui.Label({ value: '1991', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/venezuela/collection_1/coverage/venezuela_coverage_1991.tif' }),
                            ui.Label({ value: '1992', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/venezuela/collection_1/coverage/venezuela_coverage_1992.tif' }),
                            ui.Label({ value: '1993', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/venezuela/collection_1/coverage/venezuela_coverage_1993.tif' }),
                            ui.Label({ value: '1994', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/venezuela/collection_1/coverage/venezuela_coverage_1994.tif' }),
                            ui.Label({ value: '1995', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/venezuela/collection_1/coverage/venezuela_coverage_1995.tif' }),
                            ui.Label({ value: '1996', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/venezuela/collection_1/coverage/venezuela_coverage_1996.tif' }),
                            ui.Label({ value: '1997', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/venezuela/collection_1/coverage/venezuela_coverage_1997.tif' }),
                            ui.Label({ value: '1998', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/venezuela/collection_1/coverage/venezuela_coverage_1998.tif' }),
                            ui.Label({ value: '1999', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/venezuela/collection_1/coverage/venezuela_coverage_1999.tif' }),
                            ui.Label({ value: '2000', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/venezuela/collection_1/coverage/venezuela_coverage_2000.tif' }),
                            ui.Label({ value: '2001', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/venezuela/collection_1/coverage/venezuela_coverage_2001.tif' }),
                            ui.Label({ value: '2002', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/venezuela/collection_1/coverage/venezuela_coverage_2002.tif' }),
                            ui.Label({ value: '2003', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/venezuela/collection_1/coverage/venezuela_coverage_2003.tif' }),
                            ui.Label({ value: '2004', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/venezuela/collection_1/coverage/venezuela_coverage_2004.tif' }),
                            ui.Label({ value: '2005', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/venezuela/collection_1/coverage/venezuela_coverage_2005.tif' }),
                            ui.Label({ value: '2006', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/venezuela/collection_1/coverage/venezuela_coverage_2006.tif' }),
                            ui.Label({ value: '2007', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/venezuela/collection_1/coverage/venezuela_coverage_2007.tif' }),
                            ui.Label({ value: '2008', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/venezuela/collection_1/coverage/venezuela_coverage_2008.tif' }),
                            ui.Label({ value: '2009', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/venezuela/collection_1/coverage/venezuela_coverage_2009.tif' }),
                            ui.Label({ value: '2010', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/venezuela/collection_1/coverage/venezuela_coverage_2010.tif' }),
                            ui.Label({ value: '2011', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/venezuela/collection_1/coverage/venezuela_coverage_2011.tif' }),
                            ui.Label({ value: '2012', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/venezuela/collection_1/coverage/venezuela_coverage_2012.tif' }),
                            ui.Label({ value: '2013', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/venezuela/collection_1/coverage/venezuela_coverage_2013.tif' }),
                            ui.Label({ value: '2014', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/venezuela/collection_1/coverage/venezuela_coverage_2014.tif' }),
                            ui.Label({ value: '2015', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/venezuela/collection_1/coverage/venezuela_coverage_2015.tif' }),
                            ui.Label({ value: '2016', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/venezuela/collection_1/coverage/venezuela_coverage_2016.tif' }),
                            ui.Label({ value: '2017', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/venezuela/collection_1/coverage/venezuela_coverage_2017.tif' }),
                            ui.Label({ value: '2018', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/venezuela/collection_1/coverage/venezuela_coverage_2018.tif' }),
                            ui.Label({ value: '2019', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/venezuela/collection_1/coverage/venezuela_coverage_2019.tif' }),
                            ui.Label({ value: '2020', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/venezuela/collection_1/coverage/venezuela_coverage_2020.tif' }),
                            ui.Label({ value: '2021', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/venezuela/collection_1/coverage/venezuela_coverage_2021.tif' }),
                            ui.Label({ value: '2022', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/venezuela/collection_1/coverage/venezuela_coverage_2022.tif' }),
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

            panel12: ui.Panel({
                widgets: [
                    ui.Label('Ecuador'),
                    ui.Panel({
                        widgets: [
                            ui.Label({ value: 'Coming soon' }),
                            ui.Label({ value: '1985', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/ecuador/collection_1/coverage/ecuador_coverage_1985.tif' }),
                            ui.Label({ value: '1986', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/ecuador/collection_1/coverage/ecuador_coverage_1986.tif' }),
                            ui.Label({ value: '1987', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/ecuador/collection_1/coverage/ecuador_coverage_1987.tif' }),
                            ui.Label({ value: '1988', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/ecuador/collection_1/coverage/ecuador_coverage_1988.tif' }),
                            ui.Label({ value: '1989', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/ecuador/collection_1/coverage/ecuador_coverage_1989.tif' }),
                            ui.Label({ value: '1990', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/ecuador/collection_1/coverage/ecuador_coverage_1990.tif' }),
                            ui.Label({ value: '1991', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/ecuador/collection_1/coverage/ecuador_coverage_1991.tif' }),
                            ui.Label({ value: '1992', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/ecuador/collection_1/coverage/ecuador_coverage_1992.tif' }),
                            ui.Label({ value: '1993', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/ecuador/collection_1/coverage/ecuador_coverage_1993.tif' }),
                            ui.Label({ value: '1994', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/ecuador/collection_1/coverage/ecuador_coverage_1994.tif' }),
                            ui.Label({ value: '1995', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/ecuador/collection_1/coverage/ecuador_coverage_1995.tif' }),
                            ui.Label({ value: '1996', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/ecuador/collection_1/coverage/ecuador_coverage_1996.tif' }),
                            ui.Label({ value: '1997', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/ecuador/collection_1/coverage/ecuador_coverage_1997.tif' }),
                            ui.Label({ value: '1998', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/ecuador/collection_1/coverage/ecuador_coverage_1998.tif' }),
                            ui.Label({ value: '1999', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/ecuador/collection_1/coverage/ecuador_coverage_1999.tif' }),
                            ui.Label({ value: '2000', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/ecuador/collection_1/coverage/ecuador_coverage_2000.tif' }),
                            ui.Label({ value: '2001', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/ecuador/collection_1/coverage/ecuador_coverage_2001.tif' }),
                            ui.Label({ value: '2002', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/ecuador/collection_1/coverage/ecuador_coverage_2002.tif' }),
                            ui.Label({ value: '2003', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/ecuador/collection_1/coverage/ecuador_coverage_2003.tif' }),
                            ui.Label({ value: '2004', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/ecuador/collection_1/coverage/ecuador_coverage_2004.tif' }),
                            ui.Label({ value: '2005', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/ecuador/collection_1/coverage/ecuador_coverage_2005.tif' }),
                            ui.Label({ value: '2006', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/ecuador/collection_1/coverage/ecuador_coverage_2006.tif' }),
                            ui.Label({ value: '2007', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/ecuador/collection_1/coverage/ecuador_coverage_2007.tif' }),
                            ui.Label({ value: '2008', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/ecuador/collection_1/coverage/ecuador_coverage_2008.tif' }),
                            ui.Label({ value: '2009', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/ecuador/collection_1/coverage/ecuador_coverage_2009.tif' }),
                            ui.Label({ value: '2010', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/ecuador/collection_1/coverage/ecuador_coverage_2010.tif' }),
                            ui.Label({ value: '2011', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/ecuador/collection_1/coverage/ecuador_coverage_2011.tif' }),
                            ui.Label({ value: '2012', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/ecuador/collection_1/coverage/ecuador_coverage_2012.tif' }),
                            ui.Label({ value: '2013', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/ecuador/collection_1/coverage/ecuador_coverage_2013.tif' }),
                            ui.Label({ value: '2014', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/ecuador/collection_1/coverage/ecuador_coverage_2014.tif' }),
                            ui.Label({ value: '2015', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/ecuador/collection_1/coverage/ecuador_coverage_2015.tif' }),
                            ui.Label({ value: '2016', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/ecuador/collection_1/coverage/ecuador_coverage_2016.tif' }),
                            ui.Label({ value: '2017', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/ecuador/collection_1/coverage/ecuador_coverage_2017.tif' }),
                            ui.Label({ value: '2018', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/ecuador/collection_1/coverage/ecuador_coverage_2018.tif' }),
                            ui.Label({ value: '2019', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/ecuador/collection_1/coverage/ecuador_coverage_2019.tif' }),
                            ui.Label({ value: '2020', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/ecuador/collection_1/coverage/ecuador_coverage_2020.tif' }),
                            ui.Label({ value: '2021', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/ecuador/collection_1/coverage/ecuador_coverage_2021.tif' }),
                            ui.Label({ value: '2022', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/ecuador/collection_1/coverage/ecuador_coverage_2022.tif' }),
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

            panel13: ui.Panel({
                widgets: [
                    ui.Label('Bolivia'),
                    ui.Panel({
                        widgets: [
                            ui.Label({ value: '1985', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bolivia/collection_1/lulc/coverage/bolivia_coverage_1985.tif' }),
                            ui.Label({ value: '1986', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bolivia/collection_1/lulc/coverage/bolivia_coverage_1986.tif' }),
                            ui.Label({ value: '1987', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bolivia/collection_1/lulc/coverage/bolivia_coverage_1987.tif' }),
                            ui.Label({ value: '1988', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bolivia/collection_1/lulc/coverage/bolivia_coverage_1988.tif' }),
                            ui.Label({ value: '1989', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bolivia/collection_1/lulc/coverage/bolivia_coverage_1989.tif' }),
                            ui.Label({ value: '1990', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bolivia/collection_1/lulc/coverage/bolivia_coverage_1990.tif' }),
                            ui.Label({ value: '1991', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bolivia/collection_1/lulc/coverage/bolivia_coverage_1991.tif' }),
                            ui.Label({ value: '1992', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bolivia/collection_1/lulc/coverage/bolivia_coverage_1992.tif' }),
                            ui.Label({ value: '1993', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bolivia/collection_1/lulc/coverage/bolivia_coverage_1993.tif' }),
                            ui.Label({ value: '1994', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bolivia/collection_1/lulc/coverage/bolivia_coverage_1994.tif' }),
                            ui.Label({ value: '1995', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bolivia/collection_1/lulc/coverage/bolivia_coverage_1995.tif' }),
                            ui.Label({ value: '1996', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bolivia/collection_1/lulc/coverage/bolivia_coverage_1996.tif' }),
                            ui.Label({ value: '1997', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bolivia/collection_1/lulc/coverage/bolivia_coverage_1997.tif' }),
                            ui.Label({ value: '1998', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bolivia/collection_1/lulc/coverage/bolivia_coverage_1998.tif' }),
                            ui.Label({ value: '1999', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bolivia/collection_1/lulc/coverage/bolivia_coverage_1999.tif' }),
                            ui.Label({ value: '2000', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bolivia/collection_1/lulc/coverage/bolivia_coverage_2000.tif' }),
                            ui.Label({ value: '2001', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bolivia/collection_1/lulc/coverage/bolivia_coverage_2001.tif' }),
                            ui.Label({ value: '2002', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bolivia/collection_1/lulc/coverage/bolivia_coverage_2002.tif' }),
                            ui.Label({ value: '2003', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bolivia/collection_1/lulc/coverage/bolivia_coverage_2003.tif' }),
                            ui.Label({ value: '2004', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bolivia/collection_1/lulc/coverage/bolivia_coverage_2004.tif' }),
                            ui.Label({ value: '2005', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bolivia/collection_1/lulc/coverage/bolivia_coverage_2005.tif' }),
                            ui.Label({ value: '2006', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bolivia/collection_1/lulc/coverage/bolivia_coverage_2006.tif' }),
                            ui.Label({ value: '2007', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bolivia/collection_1/lulc/coverage/bolivia_coverage_2007.tif' }),
                            ui.Label({ value: '2008', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bolivia/collection_1/lulc/coverage/bolivia_coverage_2008.tif' }),
                            ui.Label({ value: '2009', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bolivia/collection_1/lulc/coverage/bolivia_coverage_2009.tif' }),
                            ui.Label({ value: '2010', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bolivia/collection_1/lulc/coverage/bolivia_coverage_2010.tif' }),
                            ui.Label({ value: '2011', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bolivia/collection_1/lulc/coverage/bolivia_coverage_2011.tif' }),
                            ui.Label({ value: '2012', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bolivia/collection_1/lulc/coverage/bolivia_coverage_2012.tif' }),
                            ui.Label({ value: '2013', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bolivia/collection_1/lulc/coverage/bolivia_coverage_2013.tif' }),
                            ui.Label({ value: '2014', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bolivia/collection_1/lulc/coverage/bolivia_coverage_2014.tif' }),
                            ui.Label({ value: '2015', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bolivia/collection_1/lulc/coverage/bolivia_coverage_2015.tif' }),
                            ui.Label({ value: '2016', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bolivia/collection_1/lulc/coverage/bolivia_coverage_2016.tif' }),
                            ui.Label({ value: '2017', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bolivia/collection_1/lulc/coverage/bolivia_coverage_2017.tif' }),
                            ui.Label({ value: '2018', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bolivia/collection_1/lulc/coverage/bolivia_coverage_2018.tif' }),
                            ui.Label({ value: '2019', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bolivia/collection_1/lulc/coverage/bolivia_coverage_2019.tif' }),
                            ui.Label({ value: '2020', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bolivia/collection_1/lulc/coverage/bolivia_coverage_2020.tif' }),
                            ui.Label({ value: '2021', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bolivia/collection_1/lulc/coverage/bolivia_coverage_2021.tif' }),
                            // ui.Label({ value: '2022', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/bolivia/collection_1/coverage/bolivia_coverage_2022.tif' }),
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