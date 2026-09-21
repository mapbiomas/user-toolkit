/**
 * @name
 *      data/territories.js
 *
 * @description
 *      The official territories the toolkits offer, by region.
 *
 *      Same list in every toolkit, so it lives here once. Each entry is a
 *      `{label, value}` pair: what the user reads, and the FeatureCollection
 *      behind it. Only assets with public read access belong here, since that
 *      is what a toolkit user can open.
 *
 *      Generated from the MapBiomas platform API by the maintenance tools in
 *      the private `mapbiomas-pipeline` repository (`toolkit/build_territories.py`).
 *      Don't edit it by hand.
 *
 * @author
 *      João Siqueira
 *      contato@mapbiomas.org
 *
 * @see
 *      https://github.com/mapbiomas/user-toolkit
 */

var tables = {
    'mapbiomas-brazil': [
        {
            'label': "AMACRO (IBGE, 2026)",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/BRAZIL/WORKSPACE/AMACRO/AMACRO_v3',
        },
        {
            'label': "Amazônia Legal (IBGE, 2024)",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/BRAZIL/WORKSPACE/LEGAL_AMAZON/LEGAL_AMAZON_v3',
        },
        {
            'label': "Atlantic Forest Law 1:1.000.000 (SOS Mata Atlântica, 2015)",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/BRAZIL/WORKSPACE/ATLANTIC_FOREST_LAW/ATLANTIC_FOREST_LAW_v3',
        },
        {
            'label': "Biome (IBGE, 2025)",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/BRAZIL/WORKSPACE/BIOMES/BIOMES_v4',
        },
        {
            'label': "Biosphere Reserve",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/BRAZIL/WORKSPACE/RESERVA_DA_BIOSFERA/RESERVA_DA_BIOSFERA_v3',
        },
        {
            'label': "Biosphere Reserve (RBMA, 2026)",
            'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/brazil/territories/RESERVA_DA_BIOSFERA_RBMA_2026_A597F0B9/a1cce443-608c-4a32-b313-9918e04e11dd',
        },
        {
            'label': "Bolsa Verde Territories (MMA, 2026)",
            'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/brazil/territories/TERRITORIOS_DO_BOLSA_VERDE_MMA_2026_4FCCFE72/ac604980-6a99-4770-a64b-41ab84a10585',
        },
        {
            'label': "Brasil (IBGE, 2025)",
            'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/brazil/territories/BRASIL_IBGE_2025_D71F57FE/cc8a1562-88be-4106-8701-34da9e3a3a40',
        },
        {
            'label': "Census Tracts",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/BRAZIL/WORKSPACE/CENSUS_TRACTS/CENSUS_TRACTS_v1',
        },
        {
            'label': "Coastal and Marine System (IBGE, 2025)",
            'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/brazil/territories/SISTEMA_COSTEIRO_E_MARINHO_IBGE_2025_DB52694B/b545395d-1b7c-4f1a-bec1-0c438526c179',
        },
        {
            'label': "Concessões Florestais (MMA, 2026)",
            'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/brazil/territories/CONCESSOES_FLORESTAIS_MMA_2026_61E001B1/5fd69700-34cf-42a5-a563-d290eaec7839',
        },
        {
            'label': "Conservation Units (CNUC, 2026)",
            'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/brazil/territories/UNIDADES_DE_CONSERVACAO_XNUC_2026_8DCD0C0B/ea04ccaf-0ff1-445a-9a29-a551015b0868',
        },
        {
            'label': "DHN250 - Level 1 - National Hydrographic Division (ANA, 2017)",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/BRAZIL/WORKSPACE/DHN250_LEVEL_1/DHN250_LEVEL_1_v2',
        },
        {
            'label': "DHN250 - Level 2 - National Hydrographic Division (ANA, 2017)",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/BRAZIL/WORKSPACE/DHN250_LEVEL_2/DHN250_LEVEL_2_v3',
        },
        {
            'label': "DHN250 - Level 3 - National Hydrographic Division (ANA, 2017)",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/BRAZIL/WORKSPACE/DHN250_LEVEL_3/DHN250_LEVEL_3_v4',
        },
        {
            'label': "Estados (IBGE, 2025)",
            'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/brazil/territories/ESTADOS_IBGE_2025_F7EAF953/3f95fd9d-4b26-4243-8612-37b9d5b12a55',
        },
        {
            'label': "Federal watershed Committee",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/BRAZIL/WORKSPACE/FEDERAL_COMMITTEE/FEDERAL_COMMITTEE_v1',
        },
        {
            'label': "Florestas Públicas não Destinadas (tipo B) (MMA, 2026)",
            'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/brazil/territories/FLORESTAS_PUBLICAS_NAO_DESTINADAS_TIPO_B_MMA_2026_FA7D29E9/1f8935c8-0c73-42e2-a3d9-ceb8e063da2d',
        },
        {
            'label': "Hydrographic Regions",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/BRAZIL/WORKSPACE/HYDROGRAPHIC_REGIONS/HYDROGRAPHIC_REGIONS_v1',
        },
        {
            'label': "Marine Conservation Unit",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/BRAZIL/WORKSPACE/MARINE_CONSERVATION_UNIT/MARINE_CONSERVATION_UNIT_v2',
        },
        {
            'label': "MATOPIBA (EMBRAPA, 2025)",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/BRAZIL/WORKSPACE/MATOPIBA/MATOPIBA_v3',
        },
        {
            'label': "Metropolitan Areas",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/BRAZIL/WORKSPACE/METROPOLITAN_REGIONS/METROPOLITAN_REGIONS_v2',
        },
        {
            'label': "Municipal Districts",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/BRAZIL/WORKSPACE/MUNICIPAL_DISTRICTS/MUNICIPAL_DISTRICTS_v2',
        },
        {
            'label': "Municipalities .(IBGE, 2025)",
            'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/brazil/territories/MUNICIPIOS_IBGE_2025_637F97E6/0afdffeb-2a5b-4b93-8163-d52f92f555e5',
        },
        {
            'label': "Municipios Prioritários da Amazônia (MMA, 2026)",
            'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/brazil/territories/MUNICIPIOS_PRIORITARIOS_DA_AMAZONIA_MMA_2026_26694C97/a2f415d9-1408-4c4b-9d02-8e6b6455d202',
        },
        {
            'label': "Municípios Costeiros com extensão de 5km na costa (Solved, 2026)",
            'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/brazil/territories/MUNICIPIOS_COSTEIROS_COM_EXTENSAO_DE_5KM_NA_COSTA_SOLVED_2026_F94FBCCB/82cd7d4f-15d0-4961-a6d8-1a699fb77314',
        },
        {
            'label': "Planalto da BAP (ANA, 2021)",
            'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/brazil/territories/PLANALTO_DA_BAP_ANA_2021_D4F5966E/9cfd02e1-f425-41e1-8364-240a8dbf1b68',
        },
        {
            'label': "Priority Area (MMA 2018)",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/BRAZIL/WORKSPACE/AREAS_PRIORITARIAS_DO_MMA_2018/AREAS_PRIORITARIAS_DO_MMA_2018_v2',
        },
        {
            'label': "Quilombos (INCRA, 2026)",
            'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/brazil/territories/QUILOMBOS_INCRA_2026_C57B5884/ff433ee4-7137-4845-aa3d-42f66d2b7823',
        },
        {
            'label': "Regiões (IBGE, 2025)",
            'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/brazil/territories/REGIOES_IBGE_2025_2CDBB85D/97f303cb-f543-400c-9c8f-47cc6b9b3a66',
        },
        {
            'label': "Risk Sectors IBGE",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/BRAZIL/WORKSPACE/RISK_SECTORS_BATER_IBGE/RISK_SECTORS_BATER_IBGE_v2',
        },
        {
            'label': "Rural Census Tracts",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/BRAZIL/WORKSPACE/RURAL_CENSUS_TRACTS/RURAL_CENSUS_TRACTS_v1',
        },
        {
            'label': "Slums and Poor Urban Communities",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/BRAZIL/WORKSPACE/SLUMS_AND_POOR_URBAN_COMMUNITIES/SLUMS_AND_POOR_URBAN_COMMUNITIES_v1',
        },
        {
            'label': "State Units for Planning and Management of Water Resources",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/BRAZIL/WORKSPACE/STATE_UNITS_PLANNING_MANAGEMENT_WATER_RESOURCES/STATE_UNITS_PLANNING_MANAGEMENT_WATER_RESOURCES_v1',
        },
        {
            'label': "State watershed Committee",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/BRAZIL/WORKSPACE/STATE_COMMITTEE/STATE_COMMITTEE_v1',
        },
        {
            'label': "Terras Indígenas (FUNAI, 2026)",
            'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/brazil/territories/TERRAS_INDIGENAS_FUNAI_2026_F7F13F79/8b94c232-c551-4dd1-ac0c-2b40145db021',
        },
        {
            'label': "Urban Census Tracts",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/BRAZIL/WORKSPACE/URBAN_CENSUS_TRACTS/URBAN_CENSUS_TRACTS_v1',
        },
        {
            'label': "Urban Concentrations",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/BRAZIL/WORKSPACE/URBAN_CONCENTRATION/URBAN_CONCENTRATION_v2',
        },
        {
            'label': "Water Resources Management Unit",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/BRAZIL/WORKSPACE/UGRHS/UGRHS_v3',
        },
    ],
    'mapbiomas-amazon': [
        {
            'label': "Biome",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/PAN-AMAZONIA/WORKSPACE/BIOMES_ALL/BIOMES_ALL_v5',
        },
        {
            'label': "Departmental Protected Areas",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/PAN-AMAZONIA/WORKSPACE/PROTECTED_AREAS_DEPTALES/PROTECTED_AREAS_DEPTALES_v2',
        },
        {
            'label': "Indigenous Territories",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/PAN-AMAZONIA/WORKSPACE/INDIGENOUS_TERRITORIES/INDIGENOUS_TERRITORIES_v2',
        },
        {
            'label': "Level 1 Watershed",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/PAN-AMAZONIA/WORKSPACE/CUENCAS_NIVEL_1_ALL/CUENCAS_NIVEL_1_ALL_v3',
        },
        {
            'label': "National Protected Area",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/PAN-AMAZONIA/WORKSPACE/PROTECTED_AREAS_NACIONALES/PROTECTED_AREAS_NACIONALES_v2',
        },
        {
            'label': "RAISG",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/PAN-AMAZONIA/WORKSPACE/LIMITERAISG/LIMITERAISG_v4',
        },
    ],
    'mapbiomas-argentina': [
        {
            'label': "Country",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/ARGENTINA/WORKSPACE/POLITICAL_LEVEL_1/POLITICAL_LEVEL_1_v3',
        },
        {
            'label': "Department",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/ARGENTINA/WORKSPACE/POLITICAL_LEVEL_3/POLITICAL_LEVEL_3_v4',
        },
        {
            'label': "Ecoregions",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/ARGENTINA/WORKSPACE/ECORREGION/ECORREGION_v5',
        },
        {
            'label': "Important Bird Areas",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/ARGENTINA/WORKSPACE/IMPORTANT_BIRD_AREAS/IMPORTANT_BIRD_AREAS_v5',
        },
        {
            'label': "International Protected Areas",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/ARGENTINA/WORKSPACE/INTERNATIONAL_PROTECTED_AREAS/INTERNATIONAL_PROTECTED_AREAS_v5',
        },
        {
            'label': "Key Biodiversity Areas",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/ARGENTINA/WORKSPACE/KEY_BIODIVERSITY_AREAS/KEY_BIODIVERSITY_AREAS_v5',
        },
        {
            'label': "National Protected Areas",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/ARGENTINA/WORKSPACE/PROTECTED_AREAS_NACIONALES/PROTECTED_AREAS_NACIONALES_v5',
        },
        {
            'label': "Province",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/ARGENTINA/WORKSPACE/POLITICAL_LEVEL_2/POLITICAL_LEVEL_2_v3',
        },
        {
            'label': "River Basins (Level 1)",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/ARGENTINA/WORKSPACE/BASIN_LEVEL_1/BASIN_LEVEL_1_v5',
        },
        {
            'label': "Subnational Protected Areas",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/ARGENTINA/WORKSPACE/PROTECTED_AREA_SUBNATIONAL/PROTECTED_AREA_SUBNATIONAL_v5',
        },
    ],
    'mapbiomas-atlantic-forest': [
        {
            'label': "Basin Level 2",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/ATLANTIC-FOREST/WORKSPACE/BASIN_LEVEL_2/BASIN_LEVEL_2_v1',
        },
        {
            'label': "Biome",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/ATLANTIC-FOREST/WORKSPACE/BIOMES/BIOMES_v1',
        },
        {
            'label': "Biosphere Reserve",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/ATLANTIC-FOREST/WORKSPACE/RESERVA_DA_BIOSFERA/RESERVA_DA_BIOSFERA_v1',
        },
        {
            'label': "Indigenous Territory",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/ATLANTIC-FOREST/WORKSPACE/INDIGENOUS_TERRITORIES/INDIGENOUS_TERRITORIES_v1',
        },
        {
            'label': "National Protected Areas",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/ATLANTIC-FOREST/WORKSPACE/NATIONAL_PROTECTED_AREAS/NATIONAL_PROTECTED_AREAS_v1',
        },
        {
            'label': "Political Level 1",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/ATLANTIC-FOREST/WORKSPACE/POLITICAL_LEVEL_1/POLITICAL_LEVEL_1_v1',
        },
        {
            'label': "Political Level 2",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/ATLANTIC-FOREST/WORKSPACE/POLITICAL_LEVEL_2/POLITICAL_LEVEL_2_v1',
        },
        {
            'label': "Political Level 3",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/ATLANTIC-FOREST/WORKSPACE/POLITICAL_LEVEL_3/POLITICAL_LEVEL_3_v1',
        },
    ],
    'mapbiomas-bolivia': [
        {
            'label': "Basin Level 1",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/BOLIVIA/WORKSPACE/CH_LEVEL_1/CH_LEVEL_1_v2',
        },
        {
            'label': "Basin Level 2",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/BOLIVIA/WORKSPACE/CH_LEVEL_2/CH_LEVEL_2_v2',
        },
        {
            'label': "Biome",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/BOLIVIA/WORKSPACE/BIOMES/BIOMES_v1',
        },
        {
            'label': "Country",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/BOLIVIA/WORKSPACE/POLITICAL_LEVEL_1/POLITICAL_LEVEL_1_v1',
        },
        {
            'label': "Department",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/BOLIVIA/WORKSPACE/POLITICAL_LEVEL_2/POLITICAL_LEVEL_2_v2',
        },
        {
            'label': "Ecoregion",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/BOLIVIA/WORKSPACE/ECORREGION/ECORREGION_v1',
        },
        {
            'label': "Indigenous Territory",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/BOLIVIA/WORKSPACE/INDIGENOUS_TERRITORIES/INDIGENOUS_TERRITORIES_v2',
        },
        {
            'label': "Municipality",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/BOLIVIA/WORKSPACE/POLITICAL_LEVEL_3/POLITICAL_LEVEL_3_v2',
        },
        {
            'label': "National Protected Area",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/BOLIVIA/WORKSPACE/PROTECTED_AREAS_NACIONALES/PROTECTED_AREAS_NACIONALES_v2',
        },
        {
            'label': "Ramsar Sites",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/BOLIVIA/WORKSPACE/RAMSAR_SITES/RAMSAR_SITES_v2',
        },
        {
            'label': "Subnational Protected Area",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/BOLIVIA/WORKSPACE/PROTECTED_AREA_SUBNATIONAL/PROTECTED_AREA_SUBNATIONAL_v2',
        },
    ],
    'mapbiomas-chaco': [
        {
            'label': "Biome",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/CHACO/WORKSPACE/BIOMES/BIOMES_v3',
        },
        {
            'label': "Country",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/CHACO/WORKSPACE/POLITICAL_LEVEL_1/POLITICAL_LEVEL_1_v2',
        },
        {
            'label': "Political level 2",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/CHACO/WORKSPACE/POLITICAL_LEVEL_2/POLITICAL_LEVEL_2_v2',
        },
        {
            'label': "Political level 3",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/CHACO/WORKSPACE/POLITICAL_LEVEL_3/POLITICAL_LEVEL_3_v1',
        },
        {
            'label': "Protected Areas",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/CHACO/WORKSPACE/PROTECTED_AREA/PROTECTED_AREA_v1',
        },
        {
            'label': "Ramsar sites",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/CHACO/WORKSPACE/RAMSAR_SITES/RAMSAR_SITES_v1',
        },
    ],
    'mapbiomas-chile': [
        {
            'label': "Basins",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/CHILE/WORKSPACE/BASIN_LEVEL_1/BASIN_LEVEL_1_v2',
        },
        {
            'label': "Commune",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/CHILE/WORKSPACE/POLITICAL_LEVEL_4/POLITICAL_LEVEL_4_v2',
        },
        {
            'label': "Country",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/CHILE/WORKSPACE/POLITICAL_LEVEL_1/POLITICAL_LEVEL_1_v4',
        },
        {
            'label': "Ecoregion",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/CHILE/WORKSPACE/ECORREGION/ECORREGION_v5',
        },
        {
            'label': "Glaciological Macro-zones",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/CHILE/WORKSPACE/GLACIER_MACROZONES/GLACIER_MACROZONES_v9',
        },
        {
            'label': "National Protected Area",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/CHILE/WORKSPACE/NATIONAL_PROTECTED_AREAS/NATIONAL_PROTECTED_AREAS_v3',
        },
        {
            'label': "Province",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/CHILE/WORKSPACE/POLITICAL_LEVEL_3/POLITICAL_LEVEL_3_v6',
        },
        {
            'label': "Region",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/CHILE/WORKSPACE/POLITICAL_LEVEL_2/POLITICAL_LEVEL_2_v6',
        },
        {
            'label': "Sub-basins",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/CHILE/WORKSPACE/BASIN_LEVEL_2/BASIN_LEVEL_2_v6',
        },
    ],
    'mapbiomas-colombia': [
        {
            'label': "Biomes",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/COLOMBIA/WORKSPACE/BIOMES/BIOMES_v1',
        },
        {
            'label': "Country",
            'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/colombia/territories/NIVEL_POLITICO_1_702287F6/a8e40af2-14e4-4286-8ba2-498ebbd6213f',
        },
        {
            'label': "Departmental Protected Areas",
            'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/colombia/territories/AREA_NATURAL_PROTEGIDA_DEPARTAMENTAL_3A57466D/d7d6e181-fa6e-4195-b05a-d0f040b579f6',
        },
        {
            'label': "Indigenous Reserve",
            'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/colombia/territories/RESGUARDO_INDIGENA_20EEC6ED/3b6a3676-3ccc-4890-bc95-48d3d0f65dad',
        },
        {
            'label': "National Protected Areas",
            'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/colombia/territories/AREA_NATURAL_PROTEGIDA_NACIONAL_82D4B280/e122952e-631e-4a22-bc00-dc4a1822ec42',
        },
        {
            'label': "Political Level - 1",
            'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/colombia/territories/NIVEL_POLITICO_1_0C5BADC9/a8e40af2-14e4-4286-8ba2-498ebbd6213f',
        },
    ],
    'mapbiomas-drc': [
        {
            'label': "Biomes",
            'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/democratic-republic-of-congo/territories/BIOMES_4EF31B8F/0506d11e-1522-4f5b-8843-52d1539240e5',
        },
        {
            'label': "Country",
            'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/democratic-republic-of-congo/territories/COUNTRY_2C5ABC07/063b9848-f8cb-404c-9eb9-58916a987b89',
        },
        {
            'label': "Protected Areas",
            'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/democratic-republic-of-congo/territories/PROTECTED_AREAS_B927CC0E/519be2f6-dcf1-47ae-b060-f4a80b822c4e',
        },
        {
            'label': "Provinces",
            'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/democratic-republic-of-congo/territories/PROVINCES_623FAE22/26315f1c-6b67-4f28-916e-f9aa4f91d588',
        },
        {
            'label': "Regions",
            'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/democratic-republic-of-congo/territories/REGIONS_CD19FFD4/99bd1ab9-c381-4454-804d-3d43aea295d4',
        },
    ],
    'mapbiomas-ecuador': [
        {
            'label': "Bosque Protectores (MAE, 2026)",
            'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/ecuador/territories/BOSQUE_PROTECTORES_MAE_2026_B077057C/ee1b57fb-7883-4ddb-b5f1-6869964f0b18',
        },
        {
            'label': "Cantón (CONALI, 2024)",
            'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/ecuador/territories/CANTON_CONALI_2024_C9AC2C60/9b670ed0-5c97-4c6e-8d9b-8825e8bdff41',
        },
        {
            'label': "Corredor de Conectividad (MAE, 2026)",
            'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/ecuador/territories/CORREDOR_DE_CONECTIVIDAD_MAE_2026_95D544CD/aafa307f-9254-4ab3-8e64-b43085c6046a',
        },
        {
            'label': "Demarcación Hidrográfica (MAE, 2026)",
            'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/ecuador/territories/DEMARCACION_HIDROGRAFICA_MAE_2026_0ED02A8A/c3397dc7-a5a8-46a7-91c9-6c08276c60f8',
        },
        {
            'label': "Glaciares (EcoCiencia, 2026)",
            'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/ecuador/territories/GLACIARES_ECOCIENCIA_2026_9955AE63/d6bb6f20-1645-4c38-a1e7-45af02236cf2',
        },
        {
            'label': "Límite del Biocorredor Amazónico (TNC, 2026)",
            'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/ecuador/territories/LIMITE_DEL_BIOCORREDOR_AMAZONICO_TNC_2026_B7C6E76C/5c81818f-55ae-4335-8e17-5c64ce64b72c',
        },
        {
            'label': "Límite RAISG (EcoCiencia, 2026)",
            'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/ecuador/territories/LIMITE_RAISG_ECOCIENCIA_2026_A4F3560D/68995b92-fd7f-4417-a269-773bc15acb7f',
        },
        {
            'label': "OMEC (MAE, 2026)",
            'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/ecuador/territories/OMEC_MAE_2026_0321683C/d8266a90-17b7-4d2a-ab5b-483e9d96107c',
        },
        {
            'label': "Pais (CONALI, 2024)",
            'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/ecuador/territories/PAIS_CONALI_2024_FAF4EE04/871e971c-59d4-4eb7-9af1-c4f1fb7d660b',
        },
        {
            'label': "Parroquia (CONALI, 2024)",
            'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/ecuador/territories/PARROQUIA_CONALI_2024_16528A13/e11f1da6-00f0-48c1-8169-53c0aa261b60',
        },
        {
            'label': "Provincia (CONALI, 2024)",
            'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/ecuador/territories/PROVINCIA_CONALI_2024_E47848F9/6c1e7dab-556d-43b6-a760-28db1153f87a',
        },
        {
            'label': "Región Geográfica (EcoCiencia, 2026)",
            'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/ecuador/territories/REGION_GEOGRAFICA_ECOCIENCIA_2026_DF0CF7B1/f5099b75-65fa-4bb7-b5d4-dc2031e3cb4d',
        },
        {
            'label': "Reserva de la Biosfera (MAE, 2026)",
            'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/ecuador/territories/RESERVA_DE_LA_BIOSFERA_MAE_2026_16D2A0C7/490cabb0-5ce2-454d-b199-3d7c79822d1f',
        },
        {
            'label': "Sistema Nacional de Áreas Protegidas (MAE, 2026)",
            'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/ecuador/territories/SISTEMA_NACIONAL_DE_AREAS_PROTEGIDAS_MAE_2026_234E88B5/833e9c0a-e0c7-453f-adac-617735f6c434',
        },
        {
            'label': "Sitios Ramsar (MAE, 2026)",
            'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/ecuador/territories/SITIOS_RAMSAR_MAE_2026_CAE05452/29b95d96-5a61-499a-9589-4169bf3298e1',
        },
        {
            'label': "Territorios Indígenas (EcoCiencia, 2026)",
            'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/ecuador/territories/TERRITORIOS_INDIGENAS_ECOCIENCIA_2026_8CFAA0EC/647ebbfa-f6cc-4e15-8f36-1fdf30944363',
        },
        {
            'label': "Unidad Hodrográfica 1 (MAE, 2026)",
            'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/ecuador/territories/UNIDAD_HODROGRAFICA_1_MAE_2026_B8FBE324/ebfe31f0-6216-491a-9a93-a73e62be17c4',
        },
        {
            'label': "Unidad Hodrográfica 2 (MAE, 2026)",
            'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/ecuador/territories/UNIDAD_HODROGRAFICA_2_MAE_2026_2BC487D5/5353231c-691c-4e69-86a7-b15f412e1834',
        },
        {
            'label': "Unidad Hodrográfica 3 (MAE, 2026)",
            'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/ecuador/territories/UNIDAD_HODROGRAFICA_3_MAE_2026_AD92BA80/c493a6f2-ee44-4b74-913c-2a06dd7f6ea1',
        },
        {
            'label': "Unidad Hodrográfica 4 (MAE, 2026)",
            'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/ecuador/territories/UNIDAD_HODROGRAFICA_4_MAE_2026_9C10B7CB/e58a34e0-4888-4c52-b24c-3370345e1902',
        },
        {
            'label': "Zona de Recarga Hídrica (MAE, 2026)",
            'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/ecuador/territories/ZONA_DE_RECARGA_HIDRICA_MAE_2026_1BB0281F/7b44a9cd-2ba5-41d1-8a2c-cafc2f3555a4',
        },
        {
            'label': "Zonas de Protección Amazónica (EcoCiencia, 2026)",
            'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/ecuador/territories/ZONAS_DE_PROTECCION_AMAZONICA_ECOCIENCIA_2026_A39314DE/1ef84470-65da-452d-bdd7-41fe1e51911a',
        },
        {
            'label': "Área de Conservacióin y Uso Sostenible (NCI, 2024)",
            'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/ecuador/territories/AREA_DE_CONSERVACIOIN_Y_USO_SOSTENIBLE_NCI_2024_32D02A52/4995c385-72a6-4025-90ab-3f37d817bae3',
        },
        {
            'label': "Área de Conservacióin y Uso Sostenible Privadas (EcoCiencia, 2026)",
            'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/ecuador/territories/AREA_DE_CONSERVACIOIN_Y_USO_SOSTENIBLE_PRIVADAS_ECOCIENCIA_2026_1F76723C/9ae6bdec-5b30-4558-9598-8ad7cbeb1c0b',
        },
        {
            'label': "Área Natural Protegida Provincial (MAE, 2026)",
            'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/ecuador/territories/AREA_NATURAL_PROTEGIDA_PROVINCIAL_MAE_2026_66FF5A2E/faa3cd39-771c-496f-bfe4-8dd0f449decf',
        },
        {
            'label': "Áreas de Protección Hídrica (MAE, 2026)",
            'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/ecuador/territories/AREAS_DE_PROTECCION_HIDRICA_MAE_2026_047EE9CE/2ac301b3-352c-4075-91b0-a374673d2959',
        },
    ],
    'mapbiomas-indonesia': [
        {
            'label': "Country Limit",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/INDONESIA/WORKSPACE/POLITICAL_LEVEL_1/POLITICAL_LEVEL_1_v4',
        },
        {
            'label': "District",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/INDONESIA/WORKSPACE/POLITICAL_LEVEL_4/POLITICAL_LEVEL_4_v2',
        },
        {
            'label': "Forestry Concession",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/INDONESIA/WORKSPACE/FOREST_CONCESSION/FOREST_CONCESSION_v1',
        },
        {
            'label': "Indigenous Forest",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/INDONESIA/WORKSPACE/INDIGENOUS_FOREST/INDIGENOUS_FOREST_v1',
        },
        {
            'label': "Island Group",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/INDONESIA/WORKSPACE/POLITICAL_LEVEL_2/POLITICAL_LEVEL_2_v3',
        },
        {
            'label': "Key Biodiversity Area",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/INDONESIA/WORKSPACE/KEY_BIODIVERSITY_AREA/KEY_BIODIVERSITY_AREA_v1',
        },
        {
            'label': "Mining Concession",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/INDONESIA/WORKSPACE/MINING_CONCESSION/MINING_CONCESSION_v3',
        },
        {
            'label': "Moratorium Area",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/INDONESIA/WORKSPACE/FOREST_MORATORIUM/FOREST_MORATORIUM_v2',
        },
        {
            'label': "National Park",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/INDONESIA/WORKSPACE/NATIONAL_PARK/NATIONAL_PARK_v1',
        },
        {
            'label': "New National Capital",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/INDONESIA/WORKSPACE/NEW_NATIONAL_CAPITAL/NEW_NATIONAL_CAPITAL_v2',
        },
        {
            'label': "Oil Palm Concession",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/INDONESIA/WORKSPACE/OIL_PALM_CONCESSION/OIL_PALM_CONCESSION_v2',
        },
        {
            'label': "Orangutan Habitat",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/INDONESIA/WORKSPACE/ORANGUTAN_HABITAT/ORANGUTAN_HABITAT_v3',
        },
        {
            'label': "Other Conservation Area",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/INDONESIA/WORKSPACE/OTHER_CONSERVATION_AREA/OTHER_CONSERVATION_AREA_v1',
        },
        {
            'label': "Peatland Area",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/INDONESIA/WORKSPACE/PEATLAND_ECOLOGICAL_ZONE/PEATLAND_ECOLOGICAL_ZONE_v2',
        },
        {
            'label': "Province",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/INDONESIA/WORKSPACE/POLITICAL_LEVEL_3/POLITICAL_LEVEL_3_v2',
        },
        {
            'label': "Restoration Area",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/INDONESIA/WORKSPACE/RESTORATION_AREA/RESTORATION_AREA_v1',
        },
        {
            'label': "Rhino Habitat",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/INDONESIA/WORKSPACE/RHINOCEROS_HABITAT/RHINOCEROS_HABITAT_v2',
        },
        {
            'label': "Social Forestry Area",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/INDONESIA/WORKSPACE/SOCIAL_FORESTRY_AREA/SOCIAL_FORESTRY_AREA_v2',
        },
        {
            'label': "Sub-District",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/INDONESIA/WORKSPACE/POLITICAL_LEVEL_5/POLITICAL_LEVEL_5_v3',
        },
        {
            'label': "Sumatran Elephant Habitat",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/INDONESIA/WORKSPACE/SUMATRAN_ELEPHANT_HABITAT/SUMATRAN_ELEPHANT_HABITAT_v1',
        },
        {
            'label': "Sumatran Tiger Habitat",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/INDONESIA/WORKSPACE/SUMATRAN_TIGER_HABITAT/SUMATRAN_TIGER_HABITAT_v3',
        },
        {
            'label': "Village",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/INDONESIA/WORKSPACE/POLITICAL_LEVEL_6/POLITICAL_LEVEL_6_v3',
        },
        {
            'label': "Wallacea",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/INDONESIA/WORKSPACE/WALLACEA/WALLACEA_v2',
        },
        {
            'label': "Watershed",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/INDONESIA/WORKSPACE/WATERSHED/WATERSHED_v1',
        },
    ],
    'mapbiomas-mexico': [
        {
            'label': "Aquifers",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/MEXICO/WORKSPACE/AQUIFERS/AQUIFERS_v1',
        },
        {
            'label': "Country",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/MEXICO/WORKSPACE/POLITICAL_LEVEL_1/POLITICAL_LEVEL_1_v1',
        },
        {
            'label': "Ecorregion",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/MEXICO/WORKSPACE/ECORREGION/ECORREGION_v1',
        },
        {
            'label': "Federal Protected Areas",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/MEXICO/WORKSPACE/PROTECTED_AREA_SUBNATIONAL/PROTECTED_AREA_SUBNATIONAL_v1',
        },
        {
            'label': "Hydrological regions",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/MEXICO/WORKSPACE/HYDROGRAPHIC_REGIONS/HYDROGRAPHIC_REGIONS_v1',
        },
        {
            'label': "Key Biodiversity Areas",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/MEXICO/WORKSPACE/KEY_BIODIVERSITY_AREAS/KEY_BIODIVERSITY_AREAS_v1',
        },
        {
            'label': "Metropolitan regions",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/MEXICO/WORKSPACE/METROPOLITAN_REGIONS/METROPOLITAN_REGIONS_v1',
        },
        {
            'label': "Municipality",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/MEXICO/WORKSPACE/POLITICAL_LEVEL_3/POLITICAL_LEVEL_3_v1',
        },
        {
            'label': "Priority Conservation Sites",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/MEXICO/WORKSPACE/PRIORITY_CONSERVATION_SITES/PRIORITY_CONSERVATION_SITES_v1',
        },
        {
            'label': "RAMSAR sites",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/MEXICO/WORKSPACE/RAMSAR_SITES/RAMSAR_SITES_v1',
        },
        {
            'label': "State",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/MEXICO/WORKSPACE/POLITICAL_LEVEL_2/POLITICAL_LEVEL_2_v1',
        },
        {
            'label': "Watersheds level 1",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/MEXICO/WORKSPACE/BASIN_LEVEL_1/BASIN_LEVEL_1_v1',
        },
        {
            'label': "Watersheds level 2",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/MEXICO/WORKSPACE/BASIN_LEVEL_2/BASIN_LEVEL_2_v1',
        },
    ],
    'mapbiomas-pampa': [
        {
            'label': "Biome",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/PAMPA/WORKSPACE/BIOMES/BIOMES_v1',
        },
        {
            'label': "Country",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/PAMPA/WORKSPACE/POLITICAL_LEVEL_1/POLITICAL_LEVEL_1_v1',
        },
        {
            'label': "Ecorregion",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/PAMPA/WORKSPACE/ECORREGION/ECORREGION_v1',
        },
        {
            'label': "Indigenous Territories",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/PAMPA/WORKSPACE/INDIGENOUS_TERRITORIES/INDIGENOUS_TERRITORIES_v1',
        },
        {
            'label': "Political Level 2",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/PAMPA/WORKSPACE/POLITICAL_LEVEL_2/POLITICAL_LEVEL_2_v1',
        },
        {
            'label': "Political Level 3",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/PAMPA/WORKSPACE/POLITICAL_LEVEL_3/POLITICAL_LEVEL_3_v1',
        },
        {
            'label': "Protected Areas",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/PAMPA/WORKSPACE/PROTECTED_AREAS/PROTECTED_AREAS_v1',
        },
        {
            'label': "Quilombo",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/PAMPA/WORKSPACE/QUILOMBOS/QUILOMBOS_v1',
        },
        {
            'label': "Watershed",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/PAMPA/WORKSPACE/WATERSHED/WATERSHED_v1',
        },
    ],
    'mapbiomas-paraguay': [
        {
            'label': "Ecorregiones Dinerstein (DINERTTEIN, 1995)",
            'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/paraguay/territories/ECORREGIONES_DINERSTEIN_DINERTTEIN_1995_5BDBA83B/1f599108-9da4-4b94-adc4-4f5746d7889a',
        },
        {
            'label': "Ecorregiones Paraguay (SEAM, 2013)",
            'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/paraguay/territories/ECORREGIONES_PARAGUAY_SEAM_2013_576969F6/02c84b77-2754-42fc-a847-8127997ba4b0',
        },
        {
            'label': "Nivel Politico 1 (Servicio Nacional de Catastro, 2024)",
            'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/paraguay/territories/NIVEL_POLITICO_1_SERVICIO_NACIONAL_DE_CATASTRO_2024_1C3C87EF/1b0759e9-76c6-4b3d-9127-db1772da0683',
        },
        {
            'label': "Nivel Politico 2 (Servicio Nacional de Catastro, 2024)",
            'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/paraguay/territories/NIVEL_POLITICO_2_SERVICIO_NACIONAL_DE_CATASTRO_2024_BF678EE7/968a3bcd-e17a-4dc1-9fdc-a95a39c3e770',
        },
        {
            'label': "Nivel Politico 3 (Servicio Nacional de Catastro, 2024)",
            'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/paraguay/territories/NIVEL_POLITICO_3_SERVICIO_NACIONAL_DE_CATASTRO_2024_F0C8BC32/002a36c2-4bba-498a-bbd1-a7945d730651',
        },
        {
            'label': "Reserva de la Biosfera (Ministerio del Ambiente y Desarrollo Sostenible, 2022)",
            'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/paraguay/territories/RESERVA_DE_LA_BIOSFERA_MINISTERIO_DEL_AMBIENTE_Y_DESARROLLO_SOSTENIBLE_2022_FC4291BD/d7f52f57-d24c-4113-9e6e-09903433d45f',
        },
        {
            'label': "Sitios Ramsar (WWF, 2013)",
            'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/paraguay/territories/SITIOS_RAMSAR_WWF_2013_A5FE46D6/3aff578c-ff21-4963-9a69-be4d93b81ab1',
        },
        {
            'label': "Territorios Indígenas (Federación por la Autodeterminación de los Pueblos Indígenas, 2017)",
            'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/paraguay/territories/TERRITORIOS_INDIGENAS_FEDERACION_POR_LA_AUTODETERMINACION_DE_LOS_PUEBLOS_INDIGENAS_2017_812392F7/0e281a13-900f-4d1c-ad64-cf572f14a326',
        },
        {
            'label': "Área Silvestre Protegida (Ministerio del Ambiente y Desarrollo Sostenible, 2022)",
            'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/paraguay/territories/AREA_SILVESTRE_PROTEGIDA_MINISTERIO_DEL_AMBIENTE_Y_DESARROLLO_SOSTENIBLE_2022_7DDE49F3/e16a8ee9-24c4-44c8-88b0-4b6b2dc86d1d',
        },
    ],
    'mapbiomas-peru': [
        {
            'label': "Afforestation and Reforestation Concession",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/PERU/WORKSPACE/AFFORESTATION_AND_REFORESTATION_CONCESSION/AFFORESTATION_AND_REFORESTATION_CONCESSION_v1',
        },
        {
            'label': "Biome",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/PERU/WORKSPACE/BIOMES/BIOMES_v1',
        },
        {
            'label': "Biosphere Reserve",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/PERU/WORKSPACE/RESERVA_DA_BIOSFERA/RESERVA_DA_BIOSFERA_v1',
        },
        {
            'label': "Conservation Concession",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/PERU/WORKSPACE/CONSERVATION_CONCESSION/CONSERVATION_CONCESSION_v1',
        },
        {
            'label': "Country",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/PERU/WORKSPACE/POLITICAL_LEVEL_1/POLITICAL_LEVEL_1_v1',
        },
        {
            'label': "District",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/PERU/WORKSPACE/POLITICAL_LEVEL_4/POLITICAL_LEVEL_4_v1',
        },
        {
            'label': "Ecoregion",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/PERU/WORKSPACE/ECORREGION/ECORREGION_v1',
        },
        {
            'label': "Ecotourism Concession",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/PERU/WORKSPACE/ECOTOURISM_CONCESSION/ECOTOURISM_CONCESSION_v1',
        },
        {
            'label': "Ecozone",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/PERU/WORKSPACE/ECOZONE/ECOZONE_v1',
        },
        {
            'label': "Forest Concession for Timber Production",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/PERU/WORKSPACE/TIMBER_CONCESSION/TIMBER_CONCESSION_v1',
        },
        {
            'label': "Fragile ecosystem",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/PERU/WORKSPACE/FRAGILE_ECOSYSTEM/FRAGILE_ECOSYSTEM_v1',
        },
        {
            'label': "Geographical region",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/PERU/WORKSPACE/REGION_GEOGRAFICA/REGION_GEOGRAFICA_v1',
        },
        {
            'label': "Local Forest",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/PERU/WORKSPACE/LOCAL_FOREST/LOCAL_FOREST_v1',
        },
        {
            'label': "Mountain Ranges",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/PERU/WORKSPACE/MOUNTAIN_RANGES/MOUNTAIN_RANGES_v1',
        },
        {
            'label': "Permanent Production Forest",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/PERU/WORKSPACE/PERMANENT_PRODUCTION_FOREST/PERMANENT_PRODUCTION_FOREST_v1',
        },
        {
            'label': "Private Conservation Area",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/PERU/WORKSPACE/PRIVATE_CONSERVATION_AREAS/PRIVATE_CONSERVATION_AREAS_v1',
        },
        {
            'label': "Province",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/PERU/WORKSPACE/POLITICAL_LEVEL_3/POLITICAL_LEVEL_3_v2',
        },
        {
            'label': "Recognized Peasant Community",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/PERU/WORKSPACE/RECOGNIZED_PEASANT_COMMUNITY/RECOGNIZED_PEASANT_COMMUNITY_v1',
        },
        {
            'label': "Region",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/PERU/WORKSPACE/POLITICAL_LEVEL_2/POLITICAL_LEVEL_2_v1',
        },
        {
            'label': "Regional Conservation Area",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/PERU/WORKSPACE/REGIONAL_CONSERVATION_AREAS/REGIONAL_CONSERVATION_AREAS_v1',
        },
        {
            'label': "Reserva Indígena",
            'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/peru/territories/RESERVA_INDIGENA_6E4F75E5/faf9488e-579f-484b-93d6-25bfdff3b107',
        },
        {
            'label': "Solicitud de titulación",
            'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/peru/territories/SOLICITUD_DE_TITULACION_4ACD554F/675c0402-f60a-4325-9ebb-456fc6783311',
        },
        {
            'label': "Territorial reserve",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/PERU/WORKSPACE/LAND_RESERVE/LAND_RESERVE_v1',
        },
        {
            'label': "Titled Native Community",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/PERU/WORKSPACE/TITLED_NATIVE_COMMUNITY/TITLED_NATIVE_COMMUNITY_v1',
        },
        {
            'label': "Watershed level 1",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/PERU/WORKSPACE/BASIN_LEVEL_1/BASIN_LEVEL_1_v1',
        },
        {
            'label': "Watershed level 2",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/PERU/WORKSPACE/BASIN_LEVEL_2/BASIN_LEVEL_2_v1',
        },
        {
            'label': "Watershed level 3",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/PERU/WORKSPACE/BASIN_LEVEL_3/BASIN_LEVEL_3_v1',
        },
        {
            'label': "Watershed level 4",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/PERU/WORKSPACE/BASIN_LEVEL_4/BASIN_LEVEL_4_v1',
        },
        {
            'label': "Wildlife Management Area Concession",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES-STAGING/PERU/WORKSPACE/WILDLIFE_MANAGEMENT_AREA_CONCESSION/WILDLIFE_MANAGEMENT_AREA_CONCESSION_v1',
        },
        {
            'label': "Zona de amortiguamiento",
            'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/peru/territories/ZONA_DE_AMORTIGUAMIENTO_7FAB1B05/e378dcab-fca7-4bdc-95fd-07ec69cb3d17',
        },
        {
            'label': "Área natural protegida",
            'value': 'projects/mapbiomas-territories/assets/PLATFORM/demo/mapbiomas/peru/territories/AREA_NATURAL_PROTEGIDA_76E84300/a3d27bcf-5e0b-4321-8ce9-91e369030435',
        },
    ],
    'mapbiomas-suriname': [
        {
            'label': "Country",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/SURINAME/WORKSPACE/POLITICAL_LEVEL_1/POLITICAL_LEVEL_1_v7',
        },
        {
            'label': "District",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/SURINAME/WORKSPACE/POLITICAL_LEVEL_2/POLITICAL_LEVEL_2_v2',
        },
        {
            'label': "Ecoregion",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/SURINAME/WORKSPACE/ECORREGION/ECORREGION_v1',
        },
        {
            'label': "Hydrography",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/SURINAME/WORKSPACE/DEMARCACION_HIDROGRAFICA/DEMARCACION_HIDROGRAFICA_v1',
        },
        {
            'label': "Indigenous and Tribal Living Area",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/SURINAME/WORKSPACE/INDIGENOUS_TERRITORIES/INDIGENOUS_TERRITORIES_v1',
        },
        {
            'label': "Protected Areas",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/SURINAME/WORKSPACE/PROTECTED_AREA/PROTECTED_AREA_v2',
        },
        {
            'label': "RAMSAR Sites",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/SURINAME/WORKSPACE/RAMSAR_SITES/RAMSAR_SITES_v7',
        },
        {
            'label': "Resort",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/SURINAME/WORKSPACE/POLITICAL_LEVEL_3/POLITICAL_LEVEL_3_v2',
        },
        {
            'label': "River Basins",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/SURINAME/WORKSPACE/BASIN_LEVEL_1/BASIN_LEVEL_1_v1',
        },
        {
            'label': "UNESCO Heritage Sites",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/SURINAME/WORKSPACE/PROTECTED_AREAS_NACIONALES/PROTECTED_AREAS_NACIONALES_v1',
        },
    ],
    'mapbiomas-uruguay': [
        {
            'label': "Country",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/URUGUAY/WORKSPACE/POLITICAL_LEVEL_1/POLITICAL_LEVEL_1_v4',
        },
        {
            'label': "Department",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/URUGUAY/WORKSPACE/POLITICAL_LEVEL_2/POLITICAL_LEVEL_2_v4',
        },
        {
            'label': "Ecoregion",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/URUGUAY/WORKSPACE/ECORREGION/ECORREGION_v2',
        },
        {
            'label': "Level 1 Watershed",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/URUGUAY/WORKSPACE/BASIN_LEVEL_1/BASIN_LEVEL_1_v1',
        },
        {
            'label': "Level 2 Watershed",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/URUGUAY/WORKSPACE/BASIN_LEVEL_2/BASIN_LEVEL_2_v3',
        },
        {
            'label': "Municipality",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/URUGUAY/WORKSPACE/POLITICAL_LEVEL_3/POLITICAL_LEVEL_3_v2',
        },
    ],
    'mapbiomas-venezuela': [
        {
            'label': "Administrative Regions",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/VENEZUELA/WORKSPACE/ADMINISTRATIVE_REGIONS/ADMINISTRATIVE_REGIONS_v1',
        },
        {
            'label': "Biome",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/VENEZUELA/WORKSPACE/BIOMES/BIOMES_v2',
        },
        {
            'label': "Country",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/VENEZUELA/WORKSPACE/POLITICAL_LEVEL_1/POLITICAL_LEVEL_1_v4',
        },
        {
            'label': "Indigenous Territory",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/VENEZUELA/WORKSPACE/INDIGENOUS_TERRITORIES/INDIGENOUS_TERRITORIES_v2',
        },
        {
            'label': "Municipality",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/VENEZUELA/WORKSPACE/POLITICAL_LEVEL_3/POLITICAL_LEVEL_3_v4',
        },
        {
            'label': "National Protected Areas",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/VENEZUELA/WORKSPACE/PROTECTED_AREA/PROTECTED_AREA_v5',
        },
        {
            'label': "Physiographic Regions",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/VENEZUELA/WORKSPACE/PHYSIOGRAPHIC_REGIONS/PHYSIOGRAPHIC_REGIONS_v2',
        },
        {
            'label': "State",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/VENEZUELA/WORKSPACE/POLITICAL_LEVEL_2/POLITICAL_LEVEL_2_v5',
        },
        {
            'label': "Venezuela and marine areas",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/VENEZUELA/WORKSPACE/VENEZUELA_AND_MARINE_AREAS/VENEZUELA_AND_MARINE_AREAS_v2',
        },
        {
            'label': "Watershed",
            'value': 'projects/mapbiomas-territories/assets/TERRITORIES/VENEZUELA/WORKSPACE/BASIN_LEVEL_1_PNRH/BASIN_LEVEL_1_PNRH_v3',
        },
    ],
};

/**
 * The territories of some regions, in the shape `App.options.tables` expects.
 * A toolkit asks for the regions it covers, so its region list and its table
 * list can't drift apart.
 *
 * @param {Array<string>} regions  e.g. ['mapbiomas-brazil', 'mapbiomas-peru']
 * @returns {Object}
 */
var pick = function (regions) {

    var picked = {};

    regions.forEach(
        function (region) {
            picked[region] = tables[region] || [];
        }
    );

    return picked;
};

exports.tables = tables;
exports.pick = pick;
