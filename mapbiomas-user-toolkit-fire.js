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
 *      Code and Tutorial - https://github.com/mapbiomas-brazil/user-toolkit
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
 * 
 */

var palettes = require('users/mapbiomas/modules:Palettes.js');
var fire_palettes = require('users/workspaceipam/packages:mapbiomas-toolkit/utils/palettes');
var logos = require('users/workspaceipam/packages:mapbiomas-toolkit/utils/b64');

var App = {

    options: {

        version: '1.4.10',

        logo: {
            uri: 'gs://mapbiomas-public/mapbiomas-logos/mapbiomas-logo-horizontal.b64',
            base64: logos.get('logo_mapbiomas_fire')
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
            'mapbiomas-indonesia': [
                {
                    'label': 'Country',
                    'value': 'projects/mapbiomas-indonesia/ANCILLARY_DATA/STATISTICS/COLLECTION1/country'
                },
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
            ],
            'mapbiomas-paraguay': [
                {
                    "value": "projects/mapbiomas-chaco/MAPBIOMAS-PARAGUAY/DATOS-AUXILIARES/ESTADISTICAS/COLECCION1/VERSION-1/nivel_politico_1",
                    "label": "Nível Político 1"
                },
                {
                    "value": "projects/mapbiomas-chaco/MAPBIOMAS-PARAGUAY/DATOS-AUXILIARES/ESTADISTICAS/COLECCION1/VERSION-1/nivel_politico_2",
                    "label": "Nível Político 2"
                },
                {
                    "value": "projects/mapbiomas-chaco/MAPBIOMAS-PARAGUAY/DATOS-AUXILIARES/ESTADISTICAS/COLECCION1/VERSION-1/nivel_politico_3",
                    "label": "Nível Político 3"
                },
                {
                    "value": "projects/mapbiomas-chaco/MAPBIOMAS-PARAGUAY/DATOS-AUXILIARES/ESTADISTICAS/COLECCION1/VERSION-1/regiones",
                    "label": "Regiões"
                },
                {
                    "value": "projects/mapbiomas-chaco/MAPBIOMAS-PARAGUAY/DATOS-AUXILIARES/ESTADISTICAS/COLECCION1/VERSION-1/ecorregiones_dinerstein",
                    "label": "Ecorregiões Dinerstein"
                },
                {
                    "value": "projects/mapbiomas-chaco/MAPBIOMAS-PARAGUAY/DATOS-AUXILIARES/ESTADISTICAS/COLECCION1/VERSION-1/ecorregiones_seam",
                    "label": "Ecorregiões SEAM"
                },
                {
                    "value": "projects/mapbiomas-chaco/MAPBIOMAS-PARAGUAY/DATOS-AUXILIARES/ESTADISTICAS/COLECCION1/VERSION-1/areas_silvestres_protegidas",
                    "label": "Áreas Silvestres Protegidas"
                },
                {
                    "value": "projects/mapbiomas-chaco/MAPBIOMAS-PARAGUAY/DATOS-AUXILIARES/ESTADISTICAS/COLECCION1/VERSION-1/reserva_de_la_biosfera",
                    "label": "Reserva da Biosfera"
                },
                {
                    "value": "projects/mapbiomas-chaco/MAPBIOMAS-PARAGUAY/DATOS-AUXILIARES/ESTADISTICAS/COLECCION1/VERSION-1/sitios_ramsar",
                    "label": "Sitios Ramsar"
                },
                {
                    "value": "projects/mapbiomas-chaco/MAPBIOMAS-PARAGUAY/DATOS-AUXILIARES/ESTADISTICAS/COLECCION1/VERSION-1/comunidades_indigenas",
                    "label": "Comunidades Indígenas"
                }

            ],
            'mapbiomas-peru': [
                {
                    "value": "projects/mapbiomas-raisg/PERU/DATOS_AUXILIARES/ESTADISTICAS/COLECCION1/nivel-politico-1",
                    "label": "nivel-politico-1"
                },
                {
                    "value": "projects/mapbiomas-raisg/PERU/DATOS_AUXILIARES/ESTADISTICAS/COLECCION1/nivel-politico-2",
                    "label": "nivel-politico-2"
                },
                {
                    "value": "projects/mapbiomas-raisg/PERU/DATOS_AUXILIARES/ESTADISTICAS/COLECCION1/nivel-politico-3",
                    "label": "nivel-politico-3"
                },
                {
                    "value": "projects/mapbiomas-raisg/PERU/DATOS_AUXILIARES/ESTADISTICAS/COLECCION1/nivel-politico-4",
                    "label": "nivel-politico-4"
                },
                {
                    "value": "projects/mapbiomas-raisg/PERU/DATOS_AUXILIARES/ESTADISTICAS/COLECCION1/bioma-pais",
                    "label": "bioma-pais"
                },
                {
                    "value": "projects/mapbiomas-raisg/PERU/DATOS_AUXILIARES/ESTADISTICAS/COLECCION1/area-conservacion-privada",
                    "label": "area-conservacion-privada"
                },
                {
                    "value": "projects/mapbiomas-raisg/PERU/DATOS_AUXILIARES/ESTADISTICAS/COLECCION1/area-conservacion-regional",
                    "label": "area-conservacion-regional"
                },
                {
                    "value": "projects/mapbiomas-raisg/PERU/DATOS_AUXILIARES/ESTADISTICAS/COLECCION1/area-natural-protegida",
                    "label": "area-natural-protegida"
                },
                {
                    "value": "projects/mapbiomas-raisg/PERU/DATOS_AUXILIARES/ESTADISTICAS/COLECCION1/comunidad-campesina-reconocida",
                    "label": "comunidad-campesina-reconocida"
                },
                {
                    "value": "projects/mapbiomas-raisg/PERU/DATOS_AUXILIARES/ESTADISTICAS/COLECCION1/comunidad-campesina-titulada",
                    "label": "comunidad-campesina-titulada"
                },
                {
                    "value": "projects/mapbiomas-raisg/PERU/DATOS_AUXILIARES/ESTADISTICAS/COLECCION1/comunidad-nativa-solicitud",
                    "label": "comunidad-nativa-solicitud"
                },
                {
                    "value": "projects/mapbiomas-raisg/PERU/DATOS_AUXILIARES/ESTADISTICAS/COLECCION1/comunidad-nativa-titulada",
                    "label": "comunidad-nativa-titulada"
                },
                {
                    "value": "projects/mapbiomas-raisg/PERU/DATOS_AUXILIARES/ESTADISTICAS/COLECCION1/ecozona",
                    "label": "ecozona"
                },
                {
                    "value": "projects/mapbiomas-raisg/PERU/DATOS_AUXILIARES/ESTADISTICAS/COLECCION1/region-geografica",
                    "label": "region-geografica"
                },
                {
                    "value": "projects/mapbiomas-raisg/PERU/DATOS_AUXILIARES/ESTADISTICAS/COLECCION1/reserva-indigena",
                    "label": "reserva-indigena"
                },
                {
                    "value": "projects/mapbiomas-raisg/PERU/DATOS_AUXILIARES/ESTADISTICAS/COLECCION1/reserva-territorial",
                    "label": "reserva-territorial"
                },
                {
                    "value": "projects/mapbiomas-raisg/PERU/DATOS_AUXILIARES/ESTADISTICAS/COLECCION1/unidad-hidrografica",
                    "label": "unidad-hidrografica"
                }

            ],

        },

        collections: {
            'mapbiomas-brazil': {
                'collection-1.0': {
                    'assets': {
                        'annual_burned_coverage': 'projects/mapbiomas-public/assets/brazil/lulc/collection6/mapbiomas-fire-collection1-annual-burned-coverage-1',
                        'monthly_burned_coverage': 'projects/mapbiomas-public/assets/brazil/lulc/collection6/mapbiomas-fire-collection1-monthly-burned-coverage-1',
                        'fire_frequency_coverage': 'projects/mapbiomas-public/assets/brazil/lulc/collection6/mapbiomas-fire-collection1-fire-frequency-1',
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
                        'fire_frequency_coverage': [
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
                        'annual_burned_coverage': 'projects/mapbiomas-public/assets/brazil/lulc/collection7/mapbiomas-fire-collection1-1-annual-burned-coverage-1',
                        'monthly_burned_coverage': 'projects/mapbiomas-public/assets/brazil/lulc/collection7/mapbiomas-fire-collection1-1-monthly-burned-coverage-1',
                        'fire_frequency_coverage': 'projects/mapbiomas-public/assets/brazil/lulc/collection7/mapbiomas-fire-collection1-1-fire-frequency-1',
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
                        'fire_frequency_coverage': [
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
                        'annual_burned_coverage': 'projects/mapbiomas-public/assets/brazil/lulc/collection7_1/mapbiomas-fire-collection2-annual-burned-coverage-1',
                        'monthly_burned_coverage': 'projects/mapbiomas-public/assets/brazil/lulc/collection7_1/mapbiomas-fire-collection2-monthly-burned-coverage-1',
                        'fire_frequency_coverage': 'projects/mapbiomas-public/assets/brazil/lulc/collection7_1/mapbiomas-fire-collection2-fire-frequency-1',
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
                        'fire_frequency_coverage': [
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
                'collection-2.1': {
                    'assets': {
                        'annual_burned': 'projects/mapbiomas-workspace/FOGO_COL2/SUBPRODUTOS/mapbiomas-fire-collection2-annual-burned-v2',
                        'monthly_burned_coverage': 'projects/mapbiomas-workspace/FOGO_COL2/SUBPRODUTOS/mapbiomas-fire-collection2-monthly-burned-coverage-v2',
                        'annual_burned_coverage':'projects/mapbiomas-workspace/FOGO_COL2/SUBPRODUTOS/mapbiomas-fire-collection2-annual-burned-coverage-v2',
                        'accumulated_burned_coverage': 'projects/mapbiomas-workspace/FOGO_COL2/SUBPRODUTOS/mapbiomas-fire-collection2-accumulated-burned-coverage-v2',
                        'fire_frequency_coverage': 'projects/mapbiomas-workspace/FOGO_COL2/SUBPRODUTOS/mapbiomas-fire-collection2-fire-frequency-coverage-v2',
                    },

                    'periods': {
                        'annual_burned': [
                            '1985', '1986', '1987', '1988', '1989', '1990',
                            '1991', '1992', '1993', '1994', '1995', '1996',
                            '1997', '1998', '1999', '2000', '2001', '2002',
                            '2003', '2004', '2005', '2006', '2007', '2008',
                            '2009', '2010', '2011', '2012', '2013', '2014',
                            '2015', '2016', '2017', '2018', '2019', '2020',
                            '2021', '2022'
                        ],
                        'annual_burned_coverage': [
                            '1985', '1986', '1987', '1988', '1989', '1990',
                            '1991', '1992', '1993', '1994', '1995', '1996',
                            '1997', '1998', '1999', '2000', '2001', '2002',
                            '2003', '2004', '2005', '2006', '2007', '2008',
                            '2009', '2010', '2011', '2012', '2013', '2014',
                            '2015', '2016', '2017', '2018', '2019', '2020',
                            '2021', '2022'
                        ],
                        'monthly_burned_coverage': [
                            '1985', '1986', '1987', '1988', '1989', '1990',
                            '1991', '1992', '1993', '1994', '1995', '1996',
                            '1997', '1998', '1999', '2000', '2001', '2002',
                            '2003', '2004', '2005', '2006', '2007', '2008',
                            '2009', '2010', '2011', '2012', '2013', '2014',
                            '2015', '2016', '2017', '2018', '2019', '2020',
                            '2021','2022'
                        ],
                        'accumulated_burned_coverage': [
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
                        'fire_frequency_coverage': [
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

                    },
                },
                'collection-3.1': {
                    'assets': {

                      'annual_burned': 'projects/mapbiomas-public/assets/brazil/fire/collection3_1/mapbiomas_fire_collection31_annual_burned_v1',
                  
                      'annual_burned_coverage': 'projects/mapbiomas-public/assets/brazil/fire/collection3_1/mapbiomas_fire_collection31_annual_burned_coverage_v1',
            
                      'monthly_burned': 'projects/mapbiomas-public/assets/brazil/fire/collection3_1/mapbiomas_fire_collection31_monthly_burned_v1',
            
                      'annual_burned_scar_size_range': 'projects/mapbiomas-public/assets/brazil/fire/collection3_1/mapbiomas_fire_collection31_annual_burned_scar_size_range_v1',
            
                      'accumulated_burned': 'projects/mapbiomas-public/assets/brazil/fire/collection3_1/mapbiomas_fire_collection31_accumulated_burned_v1',
            
                      'accumulated_burned_coverage': 'projects/mapbiomas-public/assets/brazil/fire/collection3_1/mapbiomas_fire_collection31_accumulated_burned_coverage_v1',
            
                      'fire_frequency': 'projects/mapbiomas-public/assets/brazil/fire/collection3_1/mapbiomas_fire_collection31_fire_frequency_v1',
            
                      'year_last_fire': 'projects/mapbiomas-public/assets/brazil/fire/collection3_1/mapbiomas_fire_collection31_year_last_fire_v1',

                      'time_after_fire': 'projects/mapbiomas-public/assets/brazil/fire/collection3_1/mapbiomas_fire_collection31_time_after_fire_v1',
                      
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
                      'time_after_fire':[
                                '1986', '1987', '1988', '1989', '1990',
                        '1991', '1992', '1993', '1994', '1995', '1996',
                        '1997', '1998', '1999', '2000', '2001', '2002',
                        '2003', '2004', '2005', '2006', '2007', '2008',
                        '2009', '2010', '2011', '2012', '2013', '2014',
                        '2015', '2016', '2017', '2018', '2019', '2020',
                        '2021','2022',  '2023'
                        ],

                    },
                },
                'collection-4.0': {
                    'assets': {

                      'annual_burned': 'projects/mapbiomas-public/assets/brazil/fire/collection4/mapbiomas_fire_collection4_annual_burned_v1',
                  
                      'annual_burned_coverage': 'projects/mapbiomas-public/assets/brazil/fire/collection4/mapbiomas_fire_collection4_annual_burned_coverage_v1',
            
                      'monthly_burned': 'projects/mapbiomas-public/assets/brazil/fire/collection4/mapbiomas_fire_collection4_monthly_burned_v1',
            
                      'annual_burned_scar_size_range': 'projects/mapbiomas-public/assets/brazil/fire/collection4/mapbiomas_fire_collection4_annual_burned_scar_size_range_v1',
            
                      'accumulated_burned': 'projects/mapbiomas-public/assets/brazil/fire/collection4/mapbiomas_fire_collection4_accumulated_burned_v1',
            
                      'accumulated_burned_coverage': 'projects/mapbiomas-public/assets/brazil/fire/collection4/mapbiomas_fire_collection4_accumulated_burned_coverage_v1',
            
                      'fire_frequency': 'projects/mapbiomas-public/assets/brazil/fire/collection4/mapbiomas_fire_collection4_fire_frequency_v1',
            
                      'year_last_fire': 'projects/mapbiomas-public/assets/brazil/fire/collection4/mapbiomas_fire_collection4_year_last_fire_v1',
                      
                    },

                    'periods': {
                      'annual_burned':[
                        '1985', '1986', '1987', '1988', '1989', '1990',
                        '1991', '1992', '1993', '1994', '1995', '1996',
                        '1997', '1998', '1999', '2000', '2001', '2002',
                        '2003', '2004', '2005', '2006', '2007', '2008',
                        '2009', '2010', '2011', '2012', '2013', '2014',
                        '2015', '2016', '2017', '2018', '2019', '2020',
                        '2021','2022',  '2023', '2024'
                     ],
                      'annual_burned_coverage':[
                        '1985', '1986', '1987', '1988', '1989', '1990',
                        '1991', '1992', '1993', '1994', '1995', '1996',
                        '1997', '1998', '1999', '2000', '2001', '2002',
                        '2003', '2004', '2005', '2006', '2007', '2008',
                        '2009', '2010', '2011', '2012', '2013', '2014',
                        '2015', '2016', '2017', '2018', '2019', '2020',
                        '2021','2022',  '2023', '2024'
                     ],
                      'monthly_burned':[
                        '1985', '1986', '1987', '1988', '1989', '1990',
                        '1991', '1992', '1993', '1994', '1995', '1996',
                        '1997', '1998', '1999', '2000', '2001', '2002',
                        '2003', '2004', '2005', '2006', '2007', '2008',
                        '2009', '2010', '2011', '2012', '2013', '2014',
                        '2015', '2016', '2017', '2018', '2019', '2020',
                        '2021','2022',  '2023', '2024'
                     ],
                      'annual_burned_scar_size_range':[
                        '1985', '1986', '1987', '1988', '1989', '1990',
                        '1991', '1992', '1993', '1994', '1995', '1996',
                        '1997', '1998', '1999', '2000', '2001', '2002',
                        '2003', '2004', '2005', '2006', '2007', '2008',
                        '2009', '2010', '2011', '2012', '2013', '2014',
                        '2015', '2016', '2017', '2018', '2019', '2020',
                        '2021','2022',  '2023', '2024'
                      ],
                      'accumulated_burned':[
                        '1985_1985', '1985_1986', '1985_1987', '1985_1988', '1985_1989',
                        '1985_1990', '1985_1991', '1985_1992', '1985_1993', '1985_1994',
                        '1985_1995', '1985_1996', '1985_1997', '1985_1998', '1985_1999',
                        '1985_2000', '1985_2001', '1985_2002', '1985_2003', '1985_2004',
                        '1985_2005', '1985_2006', '1985_2007', '1985_2008', '1985_2009',
                        '1985_2010', '1985_2011', '1985_2012', '1985_2013', '1985_2014',
                        '1985_2015', '1985_2016', '1985_2017', '1985_2018', '1985_2019',
                        '1985_2020', '1985_2021', '1985_2022', '1985_2023', '1985_2024',

                        '2024_2024', '2023_2024', '2022_2024', '2021_2024', '2020_2024',
                        '2019_2024', '2018_2024', '2017_2024', '2016_2024', '2015_2024',
                        '2014_2024', '2013_2024', '2012_2024', '2011_2024', '2010_2024',
                        '2009_2024', '2008_2024', '2007_2024', '2006_2024', '2005_2024',
                        '2004_2024', '2003_2024', '2002_2024', '2001_2024', '2000_2024',
                        '1999_2024', '1998_2024', '1997_2024', '1996_2024', '1995_2024',
                        '1994_2024', '1993_2024', '1992_2024', '1991_2024', '1990_2024',
                        '1989_2024', '1988_2024', '1987_2024', '1986_2024',
                        
                        '1990_1995',
                        '1995_2000', '2000_2005', '2005_2010', '2010_2015', '2015_2020',
                        '1995_2005', '2005_2015', '2000_2015',                        
                        ],
                      'accumulated_burned_coverage':[
                        '1985_1985', '1985_1986', '1985_1987', '1985_1988', '1985_1989',
                        '1985_1990', '1985_1991', '1985_1992', '1985_1993', '1985_1994',
                        '1985_1995', '1985_1996', '1985_1997', '1985_1998', '1985_1999',
                        '1985_2000', '1985_2001', '1985_2002', '1985_2003', '1985_2004',
                        '1985_2005', '1985_2006', '1985_2007', '1985_2008', '1985_2009',
                        '1985_2010', '1985_2011', '1985_2012', '1985_2013', '1985_2014',
                        '1985_2015', '1985_2016', '1985_2017', '1985_2018', '1985_2019',
                        '1985_2020', '1985_2021', '1985_2022', '1985_2023', '1985_2024',

                        '2024_2024', '2023_2024', '2022_2024', '2021_2024', '2020_2024',
                        '2019_2024', '2018_2024', '2017_2024', '2016_2024', '2015_2024',
                        '2014_2024', '2013_2024', '2012_2024', '2011_2024', '2010_2024',
                        '2009_2024', '2008_2024', '2007_2024', '2006_2024', '2005_2024',
                        '2004_2024', '2003_2024', '2002_2024', '2001_2024', '2000_2024',
                        '1999_2024', '1998_2024', '1997_2024', '1996_2024', '1995_2024',
                        '1994_2024', '1993_2024', '1992_2024', '1991_2024', '1990_2024',
                        '1989_2024', '1988_2024', '1987_2024', '1986_2024',
                        
                        '1990_1995',
                        '1995_2000', '2000_2005', '2005_2010', '2010_2015', '2015_2020',
                        '1995_2005', '2005_2015', '2000_2015',                        
                        ],
                      'fire_frequency':[
                        '1985_1985', '1985_1986', '1985_1987', '1985_1988', '1985_1989',
                        '1985_1990', '1985_1991', '1985_1992', '1985_1993', '1985_1994',
                        '1985_1995', '1985_1996', '1985_1997', '1985_1998', '1985_1999',
                        '1985_2000', '1985_2001', '1985_2002', '1985_2003', '1985_2004',
                        '1985_2005', '1985_2006', '1985_2007', '1985_2008', '1985_2009',
                        '1985_2010', '1985_2011', '1985_2012', '1985_2013', '1985_2014',
                        '1985_2015', '1985_2016', '1985_2017', '1985_2018', '1985_2019',
                        '1985_2020', '1985_2021', '1985_2022', '1985_2023', '1985_2024',

                        '2024_2024', '2023_2024', '2022_2024', '2021_2024', '2020_2024',
                        '2019_2024', '2018_2024', '2017_2024', '2016_2024', '2015_2024',
                        '2014_2024', '2013_2024', '2012_2024', '2011_2024', '2010_2024',
                        '2009_2024', '2008_2024', '2007_2024', '2006_2024', '2005_2024',
                        '2004_2024', '2003_2024', '2002_2024', '2001_2024', '2000_2024',
                        '1999_2024', '1998_2024', '1997_2024', '1996_2024', '1995_2024',
                        '1994_2024', '1993_2024', '1992_2024', '1991_2024', '1990_2024',
                        '1989_2024', '1988_2024', '1987_2024', '1986_2024',
                        
                        '1990_1995',
                        '1995_2000', '2000_2005', '2005_2010', '2010_2015', '2015_2020',
                        '1995_2005', '2005_2015', '2000_2015',                        
                        ],
                      'year_last_fire':[
                                '1986', '1987', '1988', '1989', '1990',
                        '1991', '1992', '1993', '1994', '1995', '1996',
                        '1997', '1998', '1999', '2000', '2001', '2002',
                        '2003', '2004', '2005', '2006', '2007', '2008',
                        '2009', '2010', '2011', '2012', '2013', '2014',
                        '2015', '2016', '2017', '2018', '2019', '2020',
                        '2021','2022',  '2023', '2024'
                     ],

                    },
                },
                'collection-4.1': {
                    'assets': {

                      'annual_burned': 'projects/mapbiomas-public/assets/brazil/fire/collection4_1/mapbiomas_fire_collection41_annual_burned_v1',
                      'annual_burned_coverage': 'projects/mapbiomas-public/assets/brazil/fire/collection4_1/mapbiomas_fire_collection41_annual_burned_coverage_v1',
                      'monthly_burned': 'projects/mapbiomas-public/assets/brazil/fire/collection4_1/mapbiomas_fire_collection41_monthly_burned_v1',
                      'annual_burned_scar_size_range': 'projects/mapbiomas-public/assets/brazil/fire/collection4_1/mapbiomas_fire_collection41_annual_burned_scar_size_range_v1',
                      'accumulated_burned': 'projects/mapbiomas-public/assets/brazil/fire/collection4_1/mapbiomas_fire_collection41_accumulated_burned_v1',
                      'accumulated_burned_coverage': 'projects/mapbiomas-public/assets/brazil/fire/collection4_1/mapbiomas_fire_collection41_accumulated_burned_coverage_v1',
                      'fire_frequency': 'projects/mapbiomas-public/assets/brazil/fire/collection4_1/mapbiomas_fire_collection41_fire_frequency_v1',
                      'year_last_fire': 'projects/mapbiomas-public/assets/brazil/fire/collection4_1/mapbiomas_fire_collection41_year_last_fire_v1',
                      
                    },

                    'periods': {
                      'annual_burned':[
                        '1985', '1986', '1987', '1988', '1989', '1990',
                        '1991', '1992', '1993', '1994', '1995', '1996',
                        '1997', '1998', '1999', '2000', '2001', '2002',
                        '2003', '2004', '2005', '2006', '2007', '2008',
                        '2009', '2010', '2011', '2012', '2013', '2014',
                        '2015', '2016', '2017', '2018', '2019', '2020',
                        '2021','2022',  '2023', '2024'
                     ],
                      'annual_burned_coverage':[
                        '1985', '1986', '1987', '1988', '1989', '1990',
                        '1991', '1992', '1993', '1994', '1995', '1996',
                        '1997', '1998', '1999', '2000', '2001', '2002',
                        '2003', '2004', '2005', '2006', '2007', '2008',
                        '2009', '2010', '2011', '2012', '2013', '2014',
                        '2015', '2016', '2017', '2018', '2019', '2020',
                        '2021','2022',  '2023', '2024'
                     ],
                      'monthly_burned':[
                        '1985', '1986', '1987', '1988', '1989', '1990',
                        '1991', '1992', '1993', '1994', '1995', '1996',
                        '1997', '1998', '1999', '2000', '2001', '2002',
                        '2003', '2004', '2005', '2006', '2007', '2008',
                        '2009', '2010', '2011', '2012', '2013', '2014',
                        '2015', '2016', '2017', '2018', '2019', '2020',
                        '2021','2022',  '2023', '2024'
                     ],
                      'annual_burned_scar_size_range':[
                        '1985', '1986', '1987', '1988', '1989', '1990',
                        '1991', '1992', '1993', '1994', '1995', '1996',
                        '1997', '1998', '1999', '2000', '2001', '2002',
                        '2003', '2004', '2005', '2006', '2007', '2008',
                        '2009', '2010', '2011', '2012', '2013', '2014',
                        '2015', '2016', '2017', '2018', '2019', '2020',
                        '2021','2022',  '2023', '2024'
                      ],
                      'accumulated_burned':[
                        '1985_1985', '1985_1986', '1985_1987', '1985_1988', '1985_1989',
                        '1985_1990', '1985_1991', '1985_1992', '1985_1993', '1985_1994',
                        '1985_1995', '1985_1996', '1985_1997', '1985_1998', '1985_1999',
                        '1985_2000', '1985_2001', '1985_2002', '1985_2003', '1985_2004',
                        '1985_2005', '1985_2006', '1985_2007', '1985_2008', '1985_2009',
                        '1985_2010', '1985_2011', '1985_2012', '1985_2013', '1985_2014',
                        '1985_2015', '1985_2016', '1985_2017', '1985_2018', '1985_2019',
                        '1985_2020', '1985_2021', '1985_2022', '1985_2023', '1985_2024',

                        '2024_2024', '2023_2024', '2022_2024', '2021_2024', '2020_2024',
                        '2019_2024', '2018_2024', '2017_2024', '2016_2024', '2015_2024',
                        '2014_2024', '2013_2024', '2012_2024', '2011_2024', '2010_2024',
                        '2009_2024', '2008_2024', '2007_2024', '2006_2024', '2005_2024',
                        '2004_2024', '2003_2024', '2002_2024', '2001_2024', '2000_2024',
                        '1999_2024', '1998_2024', '1997_2024', '1996_2024', '1995_2024',
                        '1994_2024', '1993_2024', '1992_2024', '1991_2024', '1990_2024',
                        '1989_2024', '1988_2024', '1987_2024', '1986_2024',
                        
                        '1990_1995',
                        '1995_2000', '2000_2005', '2005_2010', '2010_2015', '2015_2020',
                        '1995_2005', '2005_2015', '2000_2015',                        
                        ],
                      'accumulated_burned_coverage':[
                        '1985_1985', '1985_1986', '1985_1987', '1985_1988', '1985_1989',
                        '1985_1990', '1985_1991', '1985_1992', '1985_1993', '1985_1994',
                        '1985_1995', '1985_1996', '1985_1997', '1985_1998', '1985_1999',
                        '1985_2000', '1985_2001', '1985_2002', '1985_2003', '1985_2004',
                        '1985_2005', '1985_2006', '1985_2007', '1985_2008', '1985_2009',
                        '1985_2010', '1985_2011', '1985_2012', '1985_2013', '1985_2014',
                        '1985_2015', '1985_2016', '1985_2017', '1985_2018', '1985_2019',
                        '1985_2020', '1985_2021', '1985_2022', '1985_2023', '1985_2024',

                        '2024_2024', '2023_2024', '2022_2024', '2021_2024', '2020_2024',
                        '2019_2024', '2018_2024', '2017_2024', '2016_2024', '2015_2024',
                        '2014_2024', '2013_2024', '2012_2024', '2011_2024', '2010_2024',
                        '2009_2024', '2008_2024', '2007_2024', '2006_2024', '2005_2024',
                        '2004_2024', '2003_2024', '2002_2024', '2001_2024', '2000_2024',
                        '1999_2024', '1998_2024', '1997_2024', '1996_2024', '1995_2024',
                        '1994_2024', '1993_2024', '1992_2024', '1991_2024', '1990_2024',
                        '1989_2024', '1988_2024', '1987_2024', '1986_2024',
                        
                        '1990_1995',
                        '1995_2000', '2000_2005', '2005_2010', '2010_2015', '2015_2020',
                        '1995_2005', '2005_2015', '2000_2015',                        
                        ],
                      'fire_frequency':[
                        '1985_1985', '1985_1986', '1985_1987', '1985_1988', '1985_1989',
                        '1985_1990', '1985_1991', '1985_1992', '1985_1993', '1985_1994',
                        '1985_1995', '1985_1996', '1985_1997', '1985_1998', '1985_1999',
                        '1985_2000', '1985_2001', '1985_2002', '1985_2003', '1985_2004',
                        '1985_2005', '1985_2006', '1985_2007', '1985_2008', '1985_2009',
                        '1985_2010', '1985_2011', '1985_2012', '1985_2013', '1985_2014',
                        '1985_2015', '1985_2016', '1985_2017', '1985_2018', '1985_2019',
                        '1985_2020', '1985_2021', '1985_2022', '1985_2023', '1985_2024',

                        '2024_2024', '2023_2024', '2022_2024', '2021_2024', '2020_2024',
                        '2019_2024', '2018_2024', '2017_2024', '2016_2024', '2015_2024',
                        '2014_2024', '2013_2024', '2012_2024', '2011_2024', '2010_2024',
                        '2009_2024', '2008_2024', '2007_2024', '2006_2024', '2005_2024',
                        '2004_2024', '2003_2024', '2002_2024', '2001_2024', '2000_2024',
                        '1999_2024', '1998_2024', '1997_2024', '1996_2024', '1995_2024',
                        '1994_2024', '1993_2024', '1992_2024', '1991_2024', '1990_2024',
                        '1989_2024', '1988_2024', '1987_2024', '1986_2024',
                        
                        '1990_1995',
                        '1995_2000', '2000_2005', '2005_2010', '2010_2015', '2015_2020',
                        '1995_2005', '2005_2015', '2000_2015',                        
                        ],
                      'year_last_fire':[
                                '1986', '1987', '1988', '1989', '1990',
                        '1991', '1992', '1993', '1994', '1995', '1996',
                        '1997', '1998', '1999', '2000', '2001', '2002',
                        '2003', '2004', '2005', '2006', '2007', '2008',
                        '2009', '2010', '2011', '2012', '2013', '2014',
                        '2015', '2016', '2017', '2018', '2019', '2020',
                        '2021','2022',  '2023', '2024'
                     ],

                    },
                },
                'collection-5': {
                    'assets': {

                      'annual_burned': 'projects/mapbiomas-public/assets/brazil/fire/collection5/mapbiomas_fire_collection5_annual_burned_v1',
                      'annual_burned_coverage': 'projects/mapbiomas-public/assets/brazil/fire/collection5/mapbiomas_fire_collection5_annual_burned_coverage_v1',
                      'monthly_burned': 'projects/mapbiomas-public/assets/brazil/fire/collection5/mapbiomas_fire_collection5_monthly_burned_v1',
                      'annual_burned_scar_size_range': 'projects/mapbiomas-public/assets/brazil/fire/collection5/mapbiomas_fire_collection5_annual_burned_scar_size_range_v1',
                      'accumulated_burned': 'projects/mapbiomas-public/assets/brazil/fire/collection5/mapbiomas_fire_collection5_accumulated_burned_v1',
                      'accumulated_burned_coverage': 'projects/mapbiomas-public/assets/brazil/fire/collection5/mapbiomas_fire_collection5_accumulated_burned_coverage_v1',
                      'fire_frequency': 'projects/mapbiomas-public/assets/brazil/fire/collection5/mapbiomas_fire_collection5_fire_frequency_v1',
                      'year_last_fire': 'projects/mapbiomas-public/assets/brazil/fire/collection5/mapbiomas_fire_collection5_year_last_fire_v1',
                      'severity': 'projects/mapbiomas-public/assets/brazil/fire/collection5/mapbiomas_fire_collection5_severity_class_v1',
                      'interval_since_fire': 'projects/mapbiomas-public/assets/brazil/fire/collection5/mapbiomas_fire_collection5_interval_since_fire_v1',
                      
                    },

                    'periods': {
                      'annual_burned':[
                        '1985', '1986', '1987', '1988', '1989', '1990',
                        '1991', '1992', '1993', '1994', '1995', '1996',
                        '1997', '1998', '1999', '2000', '2001', '2002',
                        '2003', '2004', '2005', '2006', '2007', '2008',
                        '2009', '2010', '2011', '2012', '2013', '2014',
                        '2015', '2016', '2017', '2018', '2019', '2020',
                        '2021','2022',  '2023', '2024', '2025'
                     ],
                      'annual_burned_coverage':[
                        '1985', '1986', '1987', '1988', '1989', '1990',
                        '1991', '1992', '1993', '1994', '1995', '1996',
                        '1997', '1998', '1999', '2000', '2001', '2002',
                        '2003', '2004', '2005', '2006', '2007', '2008',
                        '2009', '2010', '2011', '2012', '2013', '2014',
                        '2015', '2016', '2017', '2018', '2019', '2020',
                        '2021','2022',  '2023', '2024', '2025'
                     ],
                      'monthly_burned':[
                        '1985', '1986', '1987', '1988', '1989', '1990',
                        '1991', '1992', '1993', '1994', '1995', '1996',
                        '1997', '1998', '1999', '2000', '2001', '2002',
                        '2003', '2004', '2005', '2006', '2007', '2008',
                        '2009', '2010', '2011', '2012', '2013', '2014',
                        '2015', '2016', '2017', '2018', '2019', '2020',
                        '2021','2022',  '2023', '2024', '2025'
                     ],
                      'annual_burned_scar_size_range':[
                        '1985', '1986', '1987', '1988', '1989', '1990',
                        '1991', '1992', '1993', '1994', '1995', '1996',
                        '1997', '1998', '1999', '2000', '2001', '2002',
                        '2003', '2004', '2005', '2006', '2007', '2008',
                        '2009', '2010', '2011', '2012', '2013', '2014',
                        '2015', '2016', '2017', '2018', '2019', '2020',
                        '2021','2022',  '2023', '2024', '2025'
                      ],
                      'accumulated_burned':[
                        '1985_1985', '1985_1986', '1985_1987', '1985_1988', '1985_1989',
                        '1985_1990', '1985_1991', '1985_1992', '1985_1993', '1985_1994',
                        '1985_1995', '1985_1996', '1985_1997', '1985_1998', '1985_1999',
                        '1985_2000', '1985_2001', '1985_2002', '1985_2003', '1985_2004',
                        '1985_2005', '1985_2006', '1985_2007', '1985_2008', '1985_2009',
                        '1985_2010', '1985_2011', '1985_2012', '1985_2013', '1985_2014',
                        '1985_2015', '1985_2016', '1985_2017', '1985_2018', '1985_2019',
                        '1985_2020', '1985_2021', '1985_2022', '1985_2023', '1985_2024',
                        '1985_2025',
                      
                        ],
                      'accumulated_burned_coverage':[
                        '1985_1985', '1985_1986', '1985_1987', '1985_1988', '1985_1989',
                        '1985_1990', '1985_1991', '1985_1992', '1985_1993', '1985_1994',
                        '1985_1995', '1985_1996', '1985_1997', '1985_1998', '1985_1999',
                        '1985_2000', '1985_2001', '1985_2002', '1985_2003', '1985_2004',
                        '1985_2005', '1985_2006', '1985_2007', '1985_2008', '1985_2009',
                        '1985_2010', '1985_2011', '1985_2012', '1985_2013', '1985_2014',
                        '1985_2015', '1985_2016', '1985_2017', '1985_2018', '1985_2019',
                        '1985_2020', '1985_2021', '1985_2022', '1985_2023', '1985_2024',
                        '1985_2025',
                       
                        ],
                      'fire_frequency':[
                        '1985_1985', '1985_1986', '1985_1987', '1985_1988', '1985_1989',
                        '1985_1990', '1985_1991', '1985_1992', '1985_1993', '1985_1994',
                        '1985_1995', '1985_1996', '1985_1997', '1985_1998', '1985_1999',
                        '1985_2000', '1985_2001', '1985_2002', '1985_2003', '1985_2004',
                        '1985_2005', '1985_2006', '1985_2007', '1985_2008', '1985_2009',
                        '1985_2010', '1985_2011', '1985_2012', '1985_2013', '1985_2014',
                        '1985_2015', '1985_2016', '1985_2017', '1985_2018', '1985_2019',
                        '1985_2020', '1985_2021', '1985_2022', '1985_2023', '1985_2024',
                        '1985_2025',
                     
                        ],
                      'year_last_fire':[
                                '1986', '1987', '1988', '1989', '1990',
                        '1991', '1992', '1993', '1994', '1995', '1996',
                        '1997', '1998', '1999', '2000', '2001', '2002',
                        '2003', '2004', '2005', '2006', '2007', '2008',
                        '2009', '2010', '2011', '2012', '2013', '2014',
                        '2015', '2016', '2017', '2018', '2019', '2020',
                        '2021','2022',  '2023', '2024', '2025', '2026'
                     ],
                      'severity':[
                        '1985', '1986', '1987', '1988', '1989', '1990',
                        '1991', '1992', '1993', '1994', '1995', '1996',
                        '1997', '1998', '1999', '2000', '2001', '2002',
                        '2003', '2004', '2005', '2006', '2007', '2008',
                        '2009', '2010', '2011', '2012', '2013', '2014',
                        '2015', '2016', '2017', '2018', '2019', '2020',
                        '2021','2022',  '2023', '2024', '2025'
                     ],
                      'interval_since_fire':[
                        '1985', '1986', '1987', '1988', '1989', '1990',
                        '1991', '1992', '1993', '1994', '1995', '1996',
                        '1997', '1998', '1999', '2000', '2001', '2002',
                        '2003', '2004', '2005', '2006', '2007', '2008',
                        '2009', '2010', '2011', '2012', '2013', '2014',
                        '2015', '2016', '2017', '2018', '2019', '2020',
                        '2021','2022',  '2023', '2024', '2025'
                     ],

                    },
                },
                'fire_monitor': {
                    'assets': {
                      'fire_monitor': 'projects/mapbiomas-public/assets/brazil/fire/monitor/mapbiomas_fire_monthly_burned_v1',
                    },
                    'periods': {
                      'fire_monitor': null,
                    },
                },
            },
            'mapbiomas-indonesia': {
                'collection-1.0': {
                    'assets': {
                      'annual_burned':"projects/mapbiomas-public/assets/indonesia/fire/collection1/mapbiomas_fire_collection1_annual_burned_v1",
                      "annual_burned_coverage":"projects/mapbiomas-public/assets/indonesia/fire/collection1/mapbiomas_fire_collection1_annual_burned_coverage_v1",
                      "monthly_burned":"projects/mapbiomas-public/assets/indonesia/fire/collection1/mapbiomas_fire_collection1_monthly_burned_v1",
                      "accumulated_burned_coverage":"projects/mapbiomas-public/assets/indonesia/fire/collection1/mapbiomas_fire_collection1_accumulated_burned_coverage_v1",
                      "accumulated_burned":"projects/mapbiomas-public/assets/indonesia/fire/collection1/mapbiomas_fire_collection1_accumulated_burned_v1",
                      "fire_frequency":"projects/mapbiomas-public/assets/indonesia/fire/collection1/mapbiomas_fire_collection1_fire_frequency_v1",
                    },

                    'periods': {
                      'annual_burned':[
                        '2013', '2014', '2015', '2016', '2017',
                        '2018', '2019', '2020', '2021', '2022',  '2023'
                     ],
                      'annual_burned_coverage':[
                        '2013', '2014', '2015', '2016', '2017',
                        '2018', '2019', '2020', '2021', '2022',  '2023'
                     ],
                      'monthly_burned':[
                        '2013', '2014', '2015', '2016', '2017',
                        '2018', '2019', '2020', '2021', '2022',  '2023'
                     ],
                      'accumulated_burned':[ 
                        "2013_2013","2013_2014","2013_2015","2013_2016","2013_2017",
                        "2013_2018","2013_2019","2013_2020","2013_2021","2013_2022","2013_2023",
                        
                        "2023_2023","2022_2023","2021_2023","2020_2023","2019_2023",
                        "2018_2023","2017_2023","2016_2023","2015_2023","2014_2023",
                        ],
                      'accumulated_burned_coverage':[ 
                        "2013_2013","2013_2014","2013_2015","2013_2016","2013_2017",
                        "2013_2018","2013_2019","2013_2020","2013_2021","2013_2022","2013_2023",
                        
                        "2023_2023","2022_2023","2021_2023","2020_2023","2019_2023",
                        "2018_2023","2017_2023","2016_2023","2015_2023","2014_2023",
                       ],
                      'fire_frequency':[ 
                        "2013_2013","2013_2014","2013_2015","2013_2016","2013_2017",
                        "2013_2018","2013_2019","2013_2020","2013_2021","2013_2022","2013_2023",
                        
                        "2023_2023","2022_2023","2021_2023","2020_2023","2019_2023",
                        "2018_2023","2017_2023","2016_2023","2015_2023","2014_2023",
                        ],
                    },
                },
            },
            'mapbiomas-paraguay':{
              'collection-1.0': {
                    'assets': {
                      'annual_burned': 'projects/mapbiomas-public/assets/paraguay/fire/collection1/mapbiomas_paraguay_fire_collection1_annual_burned_v1',
                      'annual_burned_coverage': 'projects/mapbiomas-public/assets/paraguay/fire/collection1/mapbiomas_paraguay_fire_collection1_annual_burned_coverage_v1',
                      'monthly_burned': 'projects/mapbiomas-public/assets/paraguay/fire/collection1/mapbiomas_paraguay_fire_collection1_monthly_burned_v1',
                      'accumulated_burned': 'projects/mapbiomas-public/assets/paraguay/fire/collection1/mapbiomas_paraguay_fire_collection1_accumulated_burned_v1',
                      'accumulated_burned_coverage': 'projects/mapbiomas-public/assets/paraguay/fire/collection1/mapbiomas_paraguay_fire_collection1_accumulated_burned_coverage_v1',
                      'fire_frequency': 'projects/mapbiomas-public/assets/paraguay/fire/collection1/mapbiomas_paraguay_fire_collection1_frequency_burned_v1',
                    },

                    'periods': {
                      'annual_burned':[
                        '1999', '2000', '2001', '2002',
                        '2003', '2004', '2005', '2006', '2007', '2008',
                        '2009', '2010', '2011', '2012', '2013', '2014',
                        '2015', '2016', '2017', '2018', '2019', '2020',
                        '2021','2022',  '2023', '2024'
                     ],
                      'annual_burned_coverage':[
                        '1999', '2000', '2001', '2002',
                        '2003', '2004', '2005', '2006', '2007', '2008',
                        '2009', '2010', '2011', '2012', '2013', '2014',
                        '2015', '2016', '2017', '2018', '2019', '2020',
                        '2021','2022',  '2023', '2024'
                     ],
                      'monthly_burned':[
                        '1999', '2000', '2001', '2002',
                        '2003', '2004', '2005', '2006', '2007', '2008',
                        '2009', '2010', '2011', '2012', '2013', '2014',
                        '2015', '2016', '2017', '2018', '2019', '2020',
                        '2021','2022',  '2023', '2024'
                     ],
                      'accumulated_burned':[
                        "1999_1999","1999_2000","1999_2001","1999_2002","1999_2003","1999_2004","1999_2005",
                        "1999_2006","1999_2007","1999_2008","1999_2009","1999_2010","1999_2011","1999_2012",
                        "1999_2013","1999_2014","1999_2015","1999_2016","1999_2017","1999_2018","1999_2019",
                        "1999_2020","1999_2021","1999_2022","1999_2023","1999_2024","2000_2024","2001_2024",
                        "2002_2024","2003_2024","2004_2024","2005_2024","2006_2024","2007_2024","2008_2024",
                        "2009_2024","2010_2024","2011_2024","2012_2024","2013_2024","2014_2024","2015_2024",
                        "2016_2024","2017_2024","2018_2024","2019_2024","2020_2024","2021_2024","2022_2024",
                        "2023_2024","2024_2024",
                      ],
                      'accumulated_burned_coverage':[
                        "1999_1999","1999_2000","1999_2001","1999_2002","1999_2003","1999_2004","1999_2005",
                        "1999_2006","1999_2007","1999_2008","1999_2009","1999_2010","1999_2011","1999_2012",
                        "1999_2013","1999_2014","1999_2015","1999_2016","1999_2017","1999_2018","1999_2019",
                        "1999_2020","1999_2021","1999_2022","1999_2023","1999_2024","2000_2024","2001_2024",
                        "2002_2024","2003_2024","2004_2024","2005_2024","2006_2024","2007_2024","2008_2024",
                        "2009_2024","2010_2024","2011_2024","2012_2024","2013_2024","2014_2024","2015_2024",
                        "2016_2024","2017_2024","2018_2024","2019_2024","2020_2024","2021_2024","2022_2024",
                        "2023_2024","2024_2024",
                      ],
                      'fire_frequency':[
                        "1999_1999","1999_2000","1999_2001","1999_2002","1999_2003","1999_2004","1999_2005",
                        "1999_2006","1999_2007","1999_2008","1999_2009","1999_2010","1999_2011","1999_2012",
                        "1999_2013","1999_2014","1999_2015","1999_2016","1999_2017","1999_2018","1999_2019",
                        "1999_2020","1999_2021","1999_2022","1999_2023","1999_2024","2000_2024","2001_2024",
                        "2002_2024","2003_2024","2004_2024","2005_2024","2006_2024","2007_2024","2008_2024",
                        "2009_2024","2010_2024","2011_2024","2012_2024","2013_2024","2014_2024","2015_2024",
                        "2016_2024","2017_2024","2018_2024","2019_2024","2020_2024","2021_2024","2022_2024",
                        "2023_2024","2024_2024",
                      ],
                    },
                },
            },
            'mapbiomas-peru': {
                'collection-1.0': {
                    'assets': {
                      'annual_burned': 'projects/mapbiomas-peru/assets/FIRE/COLLECTION1/FINAL_PRODUCTS/mapbiomas_peru_fire_collection1_annual_burned_v1',
                      'annual_burned_coverage':  'projects/mapbiomas-peru/assets/FIRE/COLLECTION1/FINAL_PRODUCTS/mapbiomas_peru_fire_collection1_annual_burned_coverage_v1',
                      'monthly_burned':  'projects/mapbiomas-peru/assets/FIRE/COLLECTION1/FINAL_PRODUCTS/mapbiomas_peru_fire_collection1_monthly_burned_v1',
                      'annual_burned_scar_size_range': 'projects/mapbiomas-peru/assets/FIRE/COLLECTION1/FINAL_PRODUCTS/mapbiomas_peru_fire_collection1_annual_burned_scar_size_range_v1',
                      'accumulated_burned':  'projects/mapbiomas-peru/assets/FIRE/COLLECTION1/FINAL_PRODUCTS/mapbiomas_peru_fire_collection1_accumulated_burned_v1',
                      'accumulated_burned_coverage': 'projects/mapbiomas-peru/assets/FIRE/COLLECTION1/FINAL_PRODUCTS/mapbiomas_peru_fire_collection1_annual_burned_coverage_v1',
                      'fire_frequency':  'projects/mapbiomas-peru/assets/FIRE/COLLECTION1/FINAL_PRODUCTS/mapbiomas_peru_fire_collection1_frequency_burned_v1',
                      'year_last_fire':  'projects/mapbiomas-peru/assets/FIRE/COLLECTION1/FINAL_PRODUCTS/mapbiomas_peru_fire_collection1_year_last_fire_v1',
                      
                      // 'annual_burned': 'projects/mapbiomas-public/assets/peru/fire/collection1/mapbiomas_peru_fire_collection1_annual_burned_v1',
                      // 'annual_burned_coverage':  'projects/mapbiomas-public/assets/peru/fire/collection1/mapbiomas_peru_fire_collection1_annual_burned_coverage_v1',
                      // 'monthly_burned':  'projects/mapbiomas-public/assets/peru/fire/collection1/mapbiomas_peru_fire_collection1_monthly_burned_v1',
                      // 'annual_burned_scar_size_range': 'projects/mapbiomas-public/assets/peru/fire/collection1/mapbiomas_peru_fire_collection1_annual_burned_scar_size_range_v1',
                      // 'accumulated_burned':  'projects/mapbiomas-public/assets/peru/fire/collection1/mapbiomas_peru_fire_collection1_accumulated_burned_v1',
                      // 'accumulated_burned_coverage': 'projects/mapbiomas-public/assets/peru/fire/collection1/mapbiomas_peru_fire_collection1_annual_burned_coverage_v1',
                      // 'fire_frequency':  'projects/mapbiomas-public/assets/peru/fire/collection1/mapbiomas_peru_fire_collection1_frequency_burned_v1',
                      // 'year_last_fire':  'projects/mapbiomas-public/assets/peru/fire/collection1/mapbiomas_peru_fire_collection1_year_last_fire_v1',
                      
                    },

                    'periods': {
                      'annual_burned':[
                        '2013', '2014',
                        '2015', '2016', '2017', '2018', '2019', '2020',
                        '2021','2022',  '2023', '2024'
                     ],
                      'annual_burned_coverage':[
                        '2013', '2014',
                        '2015', '2016', '2017', '2018', '2019', '2020',
                        '2021','2022',  '2023', '2024'
                     ],
                      'monthly_burned':[
                        '2013', '2014',
                        '2015', '2016', '2017', '2018', '2019', '2020',
                        '2021','2022',  '2023', '2024'
                     ],
                      'annual_burned_scar_size_range':[
                        '2013', '2014',
                        '2015', '2016', '2017', '2018', '2019', '2020',
                        '2021','2022',  '2023', '2024'
                      ],
                      'accumulated_burned':[
                        "2013_2013","2013_2014","2013_2015","2013_2016",
                        "2013_2017","2013_2018","2013_2019","2013_2020",
                        "2013_2021","2013_2022","2013_2023","2013_2024",
                        "2014_2024","2015_2024","2016_2024","2017_2024",
                        "2018_2024","2019_2024","2020_2024","2021_2024",
                        "2022_2024","2023_2024","2024_2024"
                      ],
                      'accumulated_burned_coverage':[
                        "2013_2013","2013_2014","2013_2015","2013_2016",
                        "2013_2017","2013_2018","2013_2019","2013_2020",
                        "2013_2021","2013_2022","2013_2023","2013_2024",
                        "2014_2024","2015_2024","2016_2024","2017_2024",
                        "2018_2024","2019_2024","2020_2024","2021_2024",
                        "2022_2024","2023_2024","2024_2024"                        
                      ],
                      'fire_frequency':[
                        "2013_2013","2013_2014","2013_2015","2013_2016",
                        "2013_2017","2013_2018","2013_2019","2013_2020",
                        "2013_2021","2013_2022","2013_2023","2013_2024",
                        "2014_2024","2015_2024","2016_2024","2017_2024",
                        "2018_2024","2019_2024","2020_2024","2021_2024",
                        "2022_2024","2023_2024","2024_2024"
                      ],
                      'year_last_fire':[
                        '2014',
                        '2015', '2016', '2017', '2018', '2019', '2020',
                        '2021','2022',  '2023', '2024'
                     ],

                    },
                },
            },

        },

        bandsNames: {
          'annual_burned':'burned_area_',
          'annual_burned_coverage':'burned_coverage_',
          'monthly_burned':'burned_monthly_',
          'monthly_burned_coverage':'burned_coverage_',
          'annual_burned_scar_size_range':'scar_area_ha_',
          'accumulated_burned':'fire_accumulated_',
          'accumulated_burned_coverage':'fire_accumulated_',
          'year_last_fire':'classification_',
          'time_after_fire':'cassification_',
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
          'annual_burned_scar_size_range':{'min':1,'max':10},
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
                    targetUrl:'https://brasil.mapbiomas.org/wp-content/uploads/sites/4/2026/07/CODIGO-DE-LEGENDA-FOGO-COLECAO-5.pdf',
                  }),
                  ui.Label({
                    value:'Indonesia',
                    style:{'fontSize': '10px'},
                    targetUrl:'https://drive.google.com/file/d/1DACRQlH_1k8IxRc75SkKz0d89JB25cEt/view',
                  }),
                  ui.Label({
                    value:'Paraguay',
                    style:{'fontSize': '10px'},
                    targetUrl:'https://drive.google.com/file/d/1Ir7pdYf61_x-NRQH-mkodpXvOiiibwSU/view',
                  }),
                  ui.Label({
                    value:'Peru',
                    style:{'fontSize': '10px'},
                    targetUrl:'https://drive.google.com/file/d/16IXvJXiZniJh7AQROJqALnIz-QBdgizf/view',
                  }),
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

                    var image = App.options.data[App.options.dataType].select(band);

                    var area = Area.calculate({
                        "image": image,
                        "territory": territory,
                        "geometry": geometry,
                        "scale": 30,
                        "factor": 10000,
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
            var labelDisclaimer = {
                "Brasil": [
                  // Versão em português
                  ui.Label('DISCLAIMER MapBiomas Fogo Coleção 5'),
                  ui.Label(''),
                  ui.Label(
                    'A Coleção 5 do MapBiomas Fogo apresenta o mapeamento de cicatrizes de fogo no Brasil de 1985 a 2025, com dados anuais e mensais para todo o período, incluindo: (a) Ocorrência de fogo anual, (b) Ocorrência de fogo mensal, (c) Frequência, (d) Área queimada acumulada, (e) Tamanho das cicatrizes, e (f) Ano da última ocorrência de fogo. Os dados anuais, acumulados e de frequência estão também disponíveis por classes de uso e cobertura da terra com base na Coleção 10.1 do MapBiomas.',
                    { 'margin': '0px' }
                  ),
                  ui.Label(''),
                  App.formatLabelWithLinks(
                    'Para maiores informações sobre o método, acesse a **descrição do método**, disponível na plataforma.',
                    {
                      'descrição do método': 'https://brasil.mapbiomas.org/metodo-mapbiomas-fogo/'
                    }
                  ),
                  ui.Label(''),
                  App.formatLabelWithLinks(
                    'O acesso principal aos dados ocorre por meio da **plataforma do MapBiomas Fogo**, com visualização de mapas e download de tabelas e gráficos por território selecionado. A obtenção de mapas completos também pode ser feita pelo **Toolkit**, com links diretos, plugin do QGIS e assets no Google Earth Engine, conforme detalhado na **página de downloads das coleções MapBiomas**.',
                    {
                      'plataforma do MapBiomas Fogo': 'https://plataforma.brasil.mapbiomas.org/fogo',
                      'Toolkit': 'https://code.earthengine.google.com/?scriptPath=users%2Fmapbiomas%2Fuser-toolkit%3Amapbiomas-user-toolkit-fire.js',
                      'página de downloads das coleções MapBiomas': 'https://brasil.mapbiomas.org/colecoes-mapbiomas/'
                    }
                  ),
                  ui.Label(''),
                  App.formatLabelWithLinks(
                    'Para análises agregadas, encontram-se disponíveis **estatísticas dos subprodutos de área queimada**, organizadas por bioma, estado e município.',
                    {
                      'estatísticas dos subprodutos de área queimada': 'https://brasil.mapbiomas.org/estatisticas/'
                    }
                  ),
                  ui.Label(''),
                  App.formatLabelWithLinks(
                    'Para a descrição dos valores de pixel, consulte o **código de legenda**.',
                    {
                      'código de legenda': 'https://brasil.mapbiomas.org/wp-content/uploads/sites/4/2026/05/CODIGO-DE-LEGENDA-FOGO-COLECAO-5.pdf'
                    }
                  ),
                  ui.Label(''),
                  App.formatLabelWithLinks(
                    'Materiais complementares, como destaques e factsheets, estão reunidos na seção de **downloads gerais do MapBiomas**.',
                    {
                      'downloads gerais do MapBiomas': 'https://brasil.mapbiomas.org/downloads/'
                    }
                  ),
                  ui.Label(''),
                  App.formatLabelWithLinks(
                    'Caso tenha sugestões, críticas ou ideias para aprimorar o produto, entre em contato pelo e-mail: **contato@mapbiomas.org**.',
                    {
                      'contato@mapbiomas.org': 'mailto:contato@mapbiomas.org'
                    }
                  ),
                  ui.Label(''),
                  App.formatLabelWithLinks(
                    'DOI: **https://doi.org/10.58053/MapBiomas/8JLX1T**',
                    {
                      'https://doi.org/10.58053/MapBiomas/8JLX1T': 'https://doi.org/10.58053/MapBiomas/8JLX1T'
                    }
                  ),
                  ui.Label(''),
                  ui.Label(
                    'Os dados do MapBiomas são públicos, abertos e gratuitos sob licença CC-BY e mediante a referência da fonte, observando o seguinte formato: “Projeto MapBiomas – Coleção 5 do MapBiomas Fogo, acessado em [data] através do link: [LINK]”.',
                    { 'margin': '0px' }
                  ),
                
                  // Versão em inglês
                  ui.Label(''),
                  ui.Label('DISCLAIMER MapBiomas Fire Collection 5'),
                  ui.Label(''),
                  ui.Label(
                    'MapBiomas Fire Collection 5 presents the mapping of fire scars in Brazil from 1985 to 2025, with annual and monthly data throughout the entire period, including: (a) Annual fire occurrence, (b) Monthly fire occurrence, (c) Fire frequency, (d) Accumulated burned area, (e) Fire scar size, and (f) Year of the last fire occurrence. Annual, accumulated, and frequency data are also available by land use and land cover classes based on MapBiomas Collection 10.1.',
                    { 'margin': '0px' }
                  ),
                  ui.Label(''),
                  App.formatLabelWithLinks(
                    'For more information on the methodology, see the **method description** available on the platform.',
                    {
                      'method description': 'https://brasil.mapbiomas.org/metodo-mapbiomas-fogo/'
                    }
                  ),
                  ui.Label(''),
                  App.formatLabelWithLinks(
                    'Data can be accessed and downloaded through the **Toolkit**, via direct download links, or through assets available on Google Earth Engine. For the description of pixel values, refer to the **legend code**.',
                    {
                      'Toolkit': 'https://code.earthengine.google.com/?scriptPath=users%2Fmapbiomas%2Fuser-toolkit%3Amapbiomas-user-toolkit-fire.js',
                      'legend code': 'https://brasil.mapbiomas.org/wp-content/uploads/sites/4/2026/05/CODIGO-DE-LEGENDA-FOGO-COLECAO-5.pdf'
                    }
                  ),
                  ui.Label(''),
                  App.formatLabelWithLinks(
                    'The main access to the data is through the **MapBiomas Fire platform**, which provides map visualization and downloads of tables and charts by selected territory. Complete maps can also be obtained via the **Toolkit**, with direct download links, QGIS plugin and assets on Google Earth Engine, as detailed on the **MapBiomas collections download page**.',
                    {
                      'MapBiomas Fire platform': 'https://plataforma.brasil.mapbiomas.org/fogo',
                      'Toolkit': 'https://code.earthengine.google.com/?scriptPath=users%2Fmapbiomas%2Fuser-toolkit%3Amapbiomas-user-toolkit-fire.js',
                      'MapBiomas collections download page': 'https://brasil.mapbiomas.org/colecoes-mapbiomas/'
                    }
                  ),
                  ui.Label(''),
                  App.formatLabelWithLinks(
                    'For aggregated analyses, **statistics on burned area sub-products** are available, organized by biome, state, and municipality.',
                    {
                      'statistics on burned area sub-products': 'https://brasil.mapbiomas.org/estatisticas/'
                    }
                  ),
                  ui.Label(''),
                  App.formatLabelWithLinks(
                    'Additional materials, such as highlights and factsheets, are available in the **general downloads section** of MapBiomas.',
                    {
                      'general downloads section': 'https://brasil.mapbiomas.org/downloads/'
                    }
                  ),
                  ui.Label(''),
                  App.formatLabelWithLinks(
                    'If you have suggestions, comments, or ideas to improve the product, please contact us at: **contato@mapbiomas.org**.',
                    {
                      'contato@mapbiomas.org': 'mailto:contato@mapbiomas.org'
                    }
                  ),
                  ui.Label(''),
                  App.formatLabelWithLinks(
                    'DOI: **https://doi.org/10.58053/MapBiomas/XUFVIC**',
                    {
                      'https://doi.org/10.58053/MapBiomas/XUFVIC': 'https://doi.org/10.58053/MapBiomas/XUFVIC'
                    }
                  ),
                  ui.Label(''),
                  ui.Label(
                    'MapBiomas data is public, open, and free under the CC-BY license, provided that the source is cited in the following format: “MapBiomas Project – Collection [version] of MapBiomas Fire, accessed on [date] through the link: [LINK]”.',
                    { 'margin': '0px' }
                  )
                ],
                "Indonesia": [
                    ui.Label('CATATAN INFORMASI - API'),
                    ui.Label(''),
                    ui.Label('MapBiomas Fire Koleksi 1 menyajikan peta kebakaran di Indonesia dari tahun 2013 hingga 2023, berupa data kebakaran secara tahunan ' +
                             'dan bulanan untuk seluruh periode, termasuk: (a) Data kebakaran tahunan, (b) Data kebakaran bulanan, (c) Frekuensi kebakaran, dan ' +
                             '(d) Akumulasi areal terbakar. Data tahunan, akumulasi, dan frekuensi tersedia dengan masing-masing kelas penutupan dan penggunaan ' +
                             'lahan berdasarkan MapBiomas Koleksi 2.', {'margin': '0px'}),
                    ui.Label(''),
                    // App.formatLabelWithLinks('Untuk mengunduh data, akses ke **Toolkit** dan untuk penjelasan tiap nilai data, akses **kode legenda**.', {
                    App.formatLabelWithLinks("Anda dapat mengakses data pada **dashboard** dan mengunduhnya menggunakan **Toolkit**  Untuk penjelasan setiap nilai data, lihat pada **kode legenda**.", {
                        'Toolkit': 'https://code.earthengine.google.com/?scriptPath=users%2Fmapbiomas%2Fuser-toolkit%3Amapbiomas-user-toolkit-fire.js',
                        'kode legenda': 'https://drive.google.com/file/d/1DACRQlH_1k8IxRc75SkKz0d89JB25cEt/view',
                    }),
                    ui.Label(''),
                    App.formatLabelWithLinks('Untuk informasi lebih lanjut tentang metodologi, akses ke penjelasan **metode** dan **ATBD**.', {
                        "metode": "https://brasil.mapbiomas.org/metodo-mapbiomas-fogo/",
                        "ATBD": "https://fire.mapbiomas.id/assets/ATBD-Mapbiomas-fire-koleksi-1.pdf"
                    }),
                    ui.Label(''),
                    ui.Label('Jika anda memiliki saran, kritik, atau ide untuk peningkatan produk, silakan hubungi kami di contato@mapbiomas.org.', {'margin': '0px'}),
                    ui.Label(''),
                    ui.Label('DISCLAIMER'),
                    ui.Label(''),
                    ui.Label('The MapBiomas Fire Collection 1 presents the mapping of fire scars in Indonesia from 2013 to 2023, with annual and monthly data for the ' +
                             'entire period, including: (a) Annual fire occurrence, (b) Monthly fire occurrence, (c) Frequency, (d) Accumulated burned area. Annual, ' +
                             'accumulated, and frequency data are also available with their respective Land Use and Land Cover classes from MapBiomas Collection 2.', 
                             {'margin': '0px'}),
                    ui.Label(''),
                    App.formatLabelWithLinks('For more information on the methodology, access the **method** description and the **ATBD**.', {
                        "method": "https://brasil.mapbiomas.org/metodo-mapbiomas-fogo/",
                        "ATBD": "https://fire.mapbiomas.id/assets/ATBD-Mapbiomas-fire-koleksi-1.pdf"
                    }, {'margin': '0px'}),
                    ui.Label(''),
                    // App.formatLabelWithLinks('To download the data, access the **Toolkit** and for the description of the respective data values, access the **legend code**.', {
                    App.formatLabelWithLinks('You can access the data in the **dashboard** and download it using the **Toolkit** For descriptions of the respective data values, refer to the **legend code**.', {
                        'Toolkit': 'https://code.earthengine.google.com/?scriptPath=users%2Fmapbiomas%2Fuser-toolkit%3Amapbiomas-user-toolkit-fire.js',
                        'legend code': 'https://drive.google.com/file/d/1DACRQlH_1k8IxRc75SkKz0d89JB25cEt/view',
                        'dashboard':'https://fire.mapbiomas.id/id'
                    }, {'margin': '0px'}),
                    ui.Label(''),
                    ui.Label('If you have suggestions, criticisms, or ideas to improve the product, please contact us at contato@mapbiomas.org.', {'margin': '0px'}),
                    ui.Label(''),
                    ui.Label('MapBiomas data is public, open, and free under the CC-BY-SA license and by referencing the source in the following format: "MapBiomas Project – Collection [version] of MapBiomas Fire, accessed on [date] through the link: [LINK]".', {'margin': '0px'}),
                ],
                "Paraguay": [
                    // Versão em espanhol
                    ui.Label('NOTA INFORMATIVA - MapBiomas Fuego Colección 1'),
                    ui.Label(''),
                    ui.Label(
                        'La Colección 1 de MapBiomas Fuego Paraguay presenta el mapeo de cicatrices de fuego en Paraguay para el período de 1999 a 2024. Los datos anuales y mensuales incluyen: (a) área quemada anual, (b) área quemada mensual, (c) frecuencia de fuego y (d) área quemada acumulada.',
                        { 'margin': '0px' }
                    ),
                    ui.Label(''),
                    ui.Label(
                        'Los datos anuales, acumulados y de frecuencia también están disponibles por clases de uso y cobertura del suelo, con base en la Colección 2 de MapBiomas.',
                        { 'margin': '0px' }
                    ),
                    ui.Label(''),
                    App.formatLabelWithLinks(
                        'Para más información sobre la metodología, consulte el **ATBD**.',
                        {
                            'ATBD': 'https://s3.amazonaws.com/mapbiomas-public/ATBD/ATBD_MapBiomas_Fuego_Collection1.pdf'
                        }
                    ),
                    ui.Label(''),
                    ui.Label(
                        'Si tiene sugerencias, críticas e ideas para mejorar el trabajo, contáctenos por correo electrónico: contato@mapbiomas.org.',
                        { 'margin': '0px' }
                    ),
                    ui.Label(''),
                    ui.Label(
                        'Los datos de MapBiomas son públicos, abiertos y gratuitos bajo licencia Creative Commons CC-BY y con referencia a la fuente, observando el siguiente formato: "Proyecto MapBiomas - Colección [VERSIÓN] de MapBiomas Fuego en Paraguay, accedido en [FECHA] a través del enlace: [ENLACE]".',
                        { 'margin': '0px' }
                    ),
                    ui.Label(''),
                
                    // Versão em inglês
                    ui.Label('DISCLAIMER MapBiomas Fire Collection 1'),
                    ui.Label(''),
                    ui.Label(
                        'The MapBiomas Fire Collection 1 - Paraguay presents the mapping of fire scars in Paraguay for the period from 1999 to 2024. The annual and monthly data includes: (a) annual burned area, (b) monthly burned area, (c) fire frequency, and (d) accumulated burned area.',
                        { 'margin': '0px' }
                    ),
                    ui.Label(''),
                    ui.Label(
                        'The annual, accumulated, and frequency data are also available by land use and land cover classes, based on MapBiomas Collection 2.',
                        { 'margin': '0px' }
                    ),
                    ui.Label(''),
                    App.formatLabelWithLinks(
                        'For more information about the methodology, please consult the **ATBD**.',
                        {
                            'ATBD': 'https://s3.amazonaws.com/mapbiomas-public/ATBD/ATBD_MapBiomas_Fuego_Collection1.pdf'
                        }
                    ),
                    ui.Label(''),
                    ui.Label(
                        'If you have suggestions, comments, or ideas to improve this work, please contact us at: contato@mapbiomas.org.',
                        { 'margin': '0px' }
                    ),
                    ui.Label(''),
                    ui.Label(
                        'MapBiomas data are public, open, and free under the Creative Commons CC-BY license and must be referenced as follows: "MapBiomas Project - [VERSION] Collection of MapBiomas Fire in Paraguay, accessed on [DATE] through the link: [LINK]".',
                        { 'margin': '0px' }
                    )
                ],
                "Peru": [
                    // Versão em espanhol
                    ui.Label('NOTA INFORMATIVA - MapBiomas Fuego Colección 1'),
                    ui.Label(''),
                    ui.Label(
                        'La Colección 1 de MapBiomas Fuego Perú presenta el mapeo de cicatrices de fuego en Perú para el período de 2013 a 2024, con datos anuales y mensuales que incluyen: (a) área quemada anual, (b) área quemada mensual, (c) frecuencia de fuego, (d) área quemada acumulada, (e) tamaño de cicatriz de fuego, y (f) año de la última ocurrencia de fuego.',
                        { 'margin': '0px' }
                    ),
                    ui.Label(''),
                    ui.Label(
                        'Los datos anuales, acumulados y de frecuencia también están disponibles por clases de uso y cobertura del suelo, con base en la Colección 3 de MapBiomas.',
                        { 'margin': '0px' }
                    ),
                    ui.Label(''),
                    App.formatLabelWithLinks(
                        'Para más información sobre la metodología, consulte el **ATBD**.',
                        {
                            'ATBD': 'https://peru.mapbiomas.org/metodologia-mapbiomas-fuego/'
                        }
                    ),
                    ui.Label(''),
                    ui.Label(
                        'Si tiene sugerencias, críticas e ideas para mejorar el trabajo, contáctenos por correo electrónico: contato@mapbiomas.org',
                        { 'margin': '0px' }
                    ),
                    ui.Label(''),
                    ui.Label(
                        'Los datos de MapBiomas son públicos, abiertos y gratuitos bajo licencia Creative Commons CC-BY y con referencia a la fuente, observando el siguiente formato: "Proyecto MapBiomas – Colección [VERSIÓN] de MapBiomas Fuego en Perú, accedido en [FECHA] a través del enlace: [ENLACE]".',
                        { 'margin': '0px' }
                    ),
                    ui.Label(''),
                
                    // Versão em inglês
                    ui.Label('INFORMATION NOTE – MapBiomas Fire Collection 1'),
                    ui.Label(''),
                    ui.Label(
                        'The MapBiomas Fire Collection 1 – Peru presents the mapping of fire scars in Peru for the period from 2013 to 2024, with annual and monthly data including: (a) annual burned area, (b) monthly burned area, (c) fire frequency, (d) accumulated burned area, (e) fire scar size, and (f) year of the last fire occurrence.',
                        { 'margin': '0px' }
                    ),
                    ui.Label(''),
                    ui.Label(
                        'The annual, accumulated, and frequency data are also available by land use and land cover classes, based on MapBiomas Collection 3.',
                        { 'margin': '0px' }
                    ),
                    ui.Label(''),
                    App.formatLabelWithLinks(
                        'For more information about the methodology, please consult the **ATBD**.',
                        {
                            'ATBD': 'https://peru.mapbiomas.org/metodologia-mapbiomas-fuego/'
                        }
                    ),
                    ui.Label(''),
                    ui.Label(
                        'If you have suggestions, comments, or ideas to improve this work, please contact us at: contato@mapbiomas.org',
                        { 'margin': '0px' }
                    ),
                    ui.Label(''),
                    ui.Label(
                        'MapBiomas data are public, open, and free under the Creative Commons CC-BY license and must be referenced as follows: "MapBiomas Project – [VERSION] Collection of MapBiomas Fire in Peru, accessed on [DATE] through the link: [LINK]".',
                        { 'margin': '0px' }
                    )
                ],
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
                ['MapBiomas Fogo Brasil', 'Brasil'],
                ['MapBiomas Fire Indonesia', 'Indonesia'],
                ['MapBiomas Fire Paraguay', 'Paraguay'],
                ['MapBiomas Fire Peru', 'Peru'],
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
                App.ui.form.tabs2.add(App.ui.form.tab5);
                App.ui.form.tabs2.add(App.ui.form.tab6);
                
                App.ui.form.tab3.add(App.ui.form.checkboxTab3);
                App.ui.form.tab4.add(App.ui.form.checkboxTab4);
                App.ui.form.tab5.add(App.ui.form.checkboxTab5);
                App.ui.form.tab6.add(App.ui.form.checkboxTab6);

                App.ui.form.panel2_head.add(App.ui.form.tabs2);
                
                App.ui.form.panel2.add(App.ui.form.panel2_head);
                App.ui.form.panel2.add(App.ui.form.panel2_body);

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

            labelSubtitle: ui.Label('Burned Area Maps', {
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
                        App.ui.form.panelMain.add(App.ui.form.panel2);
                        
                        App.ui.form.tab4.style().set('border', '1px solid #80808033');
                        App.ui.form.tab3.style().set('border', '1px solid #aa8080');

                          
                        App.ui.form.panel2_body.clear();
                        App.ui.form.panel2_body.add(App.ui.form.panel3);
                        
                        
                    }

                }
            }),

            // Checkbox Brazil
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
                  App.ui.form.checkboxTab5.setValue(false);
                  App.ui.form.checkboxTab6.setValue(false);
                  App.ui.form.tab4.style().set('border', '1px solid #80808033');
                  App.ui.form.tab5.style().set('border', '1px solid #80808033');
                  App.ui.form.tab6.style().set('border', '1px solid #80808033');
                  App.ui.form.tab3.style().set('border', '1px solid #aa8080');
                  App.ui.form.panel2_body.clear();
                  App.ui.form.panel2_body.add(App.ui.form.panel3);
                }
              }
            }),
            
            // Checkbox Indonesia
            checkboxTab4: ui.Checkbox({
              'label': '    Indonesia',
              'style': {
                'margin': '0px 0px 0px -16px',
                'stretch': 'horizontal',
                'backgroundColor': '#00000000',
              },
              'onChange': function (checked) {
                if (checked !== false) {
                  App.ui.form.checkboxTab3.setValue(false);
                  App.ui.form.checkboxTab5.setValue(false);
                  App.ui.form.checkboxTab6.setValue(false);
                  App.ui.form.tab3.style().set('border', '1px solid #80808033');
                  App.ui.form.tab5.style().set('border', '1px solid #80808033');
                  App.ui.form.tab6.style().set('border', '1px solid #80808033');
                  App.ui.form.tab4.style().set('border', '1px solid #aa8080');
                  App.ui.form.panel2_body.clear();
                  App.ui.form.panel2_body.add(App.ui.form.panel4);
                }
              }
            }),
            
            // Checkbox Paraguay (tab5)
            checkboxTab5: ui.Checkbox({
              'label': '    Paraguay',
              'style': {
                'margin': '0px 0px 0px -16px',
                'stretch': 'horizontal',
                'backgroundColor': '#00000000',
              },
              'onChange': function (checked) {
                if (checked !== false) {
                  App.ui.form.checkboxTab3.setValue(false);
                  App.ui.form.checkboxTab4.setValue(false);
                  App.ui.form.checkboxTab6.setValue(false);
                  App.ui.form.tab3.style().set('border', '1px solid #80808033');
                  App.ui.form.tab4.style().set('border', '1px solid #80808033');
                  App.ui.form.tab6.style().set('border', '1px solid #80808033');
                  App.ui.form.tab5.style().set('border', '1px solid #aa8080');
                  App.ui.form.panel2_body.clear();
                  App.ui.form.panel2_body.add(App.ui.form.panel5); // painel do Paraguay
                }
              }
            }),
            
            // Checkbox Peru (tab6) — vem depois do Peru
            checkboxTab6: ui.Checkbox({
              'label': '    Peru',
              'style': {
                'margin': '0px 0px 0px -16px',
                'stretch': 'horizontal',
                'backgroundColor': '#00000000',
              },
              'onChange': function (checked) {
                if (checked !== false) {
                  App.ui.form.checkboxTab3.setValue(false);
                  App.ui.form.checkboxTab4.setValue(false);
                  App.ui.form.checkboxTab5.setValue(false);
                  App.ui.form.tab3.style().set('border', '1px solid #80808033');
                  App.ui.form.tab4.style().set('border', '1px solid #80808033');
                  App.ui.form.tab5.style().set('border', '1px solid #80808033');
                  App.ui.form.tab6.style().set('border', '1px solid #aa8080');
                  App.ui.form.panel2_body.clear();
                  App.ui.form.panel2_body.add(App.ui.form.panel6); // painel do Peru
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

            tab5: ui.Panel({
                'style': {
                    // 'width': '110px',
                    'backgroundColor': '#dddddd',
                    // 'stretch': 'horizontal',
                    'border': '1px solid #80808033',
                }
            }),
            
            tab6: ui.Panel({
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
            panel2_body: ui.Panel({
                layout:ui.Panel.Layout.Flow('horizontal'),
                style: {
                    'stretch': 'horizontal'
                }
            }),
          // Brasil links
           panel3: ui.Panel({
              widgets: [
                ui.Label('Brazil fire col5: annual_burned'),
                ui.Panel({
                    widgets: [
                        ui.Label({ value: '1985', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_v1/burned_area_1985.tif' }),
                        ui.Label({ value: '1986', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_v1/burned_area_1986.tif' }),
                        ui.Label({ value: '1987', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_v1/burned_area_1987.tif' }),
                        ui.Label({ value: '1988', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_v1/burned_area_1988.tif' }),
                        ui.Label({ value: '1989', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_v1/burned_area_1989.tif' }),
                        ui.Label({ value: '1990', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_v1/burned_area_1990.tif' }),
                        ui.Label({ value: '1991', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_v1/burned_area_1991.tif' }),
                        ui.Label({ value: '1992', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_v1/burned_area_1992.tif' }),
                        ui.Label({ value: '1993', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_v1/burned_area_1993.tif' }),
                        ui.Label({ value: '1994', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_v1/burned_area_1994.tif' }),
                        ui.Label({ value: '1995', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_v1/burned_area_1995.tif' }),
                        ui.Label({ value: '1996', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_v1/burned_area_1996.tif' }),
                        ui.Label({ value: '1997', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_v1/burned_area_1997.tif' }),
                        ui.Label({ value: '1998', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_v1/burned_area_1998.tif' }),
                        ui.Label({ value: '1999', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_v1/burned_area_1999.tif' }),
                        ui.Label({ value: '2000', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_v1/burned_area_2000.tif' }),
                        ui.Label({ value: '2001', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_v1/burned_area_2001.tif' }),
                        ui.Label({ value: '2002', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_v1/burned_area_2002.tif' }),
                        ui.Label({ value: '2003', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_v1/burned_area_2003.tif' }),
                        ui.Label({ value: '2004', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_v1/burned_area_2004.tif' }),
                        ui.Label({ value: '2005', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_v1/burned_area_2005.tif' }),
                        ui.Label({ value: '2006', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_v1/burned_area_2006.tif' }),
                        ui.Label({ value: '2007', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_v1/burned_area_2007.tif' }),
                        ui.Label({ value: '2008', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_v1/burned_area_2008.tif' }),
                        ui.Label({ value: '2009', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_v1/burned_area_2009.tif' }),
                        ui.Label({ value: '2010', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_v1/burned_area_2010.tif' }),
                        ui.Label({ value: '2011', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_v1/burned_area_2011.tif' }),
                        ui.Label({ value: '2012', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_v1/burned_area_2012.tif' }),
                        ui.Label({ value: '2013', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_v1/burned_area_2013.tif' }),
                        ui.Label({ value: '2014', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_v1/burned_area_2014.tif' }),
                        ui.Label({ value: '2015', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_v1/burned_area_2015.tif' }),
                        ui.Label({ value: '2016', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_v1/burned_area_2016.tif' }),
                        ui.Label({ value: '2017', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_v1/burned_area_2017.tif' }),
                        ui.Label({ value: '2018', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_v1/burned_area_2018.tif' }),
                        ui.Label({ value: '2019', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_v1/burned_area_2019.tif' }),
                        ui.Label({ value: '2020', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_v1/burned_area_2020.tif' }),
                        ui.Label({ value: '2021', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_v1/burned_area_2021.tif' }),
                        ui.Label({ value: '2022', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_v1/burned_area_2022.tif' }),
                        ui.Label({ value: '2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_v1/burned_area_2023.tif' }),
                        ui.Label({ value: '2024', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_v1/burned_area_2024.tif' }),
                        ui.Label({ value: '2025', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_v1/burned_area_2025.tif' }),
                        ui.Label({ value: '2025', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_v1/burned_area_2025.tif' }),
                    ],
                    'layout': ui.Panel.Layout.flow('horizontal', true),
                    style: {
                        'border': '1px grey solid',
                        'margin': '0px 6px 0px 6px'
                    }
                }),
                ui.Label('Brazil fire col5: annual_burned (shp)'),
                ui.Panel({
                    widgets: [
                      ui.Label({ value: '1985', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_vectors_v1/mapbiomas_fire_collection5_burned_area_1985.zip' }),
                      ui.Label({ value: '1986', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_vectors_v1/mapbiomas_fire_collection5_burned_area_1986.zip' }),
                      ui.Label({ value: '1987', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_vectors_v1/mapbiomas_fire_collection5_burned_area_1987.zip' }),
                      ui.Label({ value: '1988', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_vectors_v1/mapbiomas_fire_collection5_burned_area_1988.zip' }),
                      ui.Label({ value: '1989', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_vectors_v1/mapbiomas_fire_collection5_burned_area_1989.zip' }),
                      ui.Label({ value: '1990', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_vectors_v1/mapbiomas_fire_collection5_burned_area_1990.zip' }),
                      ui.Label({ value: '1991', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_vectors_v1/mapbiomas_fire_collection5_burned_area_1991.zip' }),
                      ui.Label({ value: '1992', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_vectors_v1/mapbiomas_fire_collection5_burned_area_1992.zip' }),
                      ui.Label({ value: '1993', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_vectors_v1/mapbiomas_fire_collection5_burned_area_1993.zip' }),
                      ui.Label({ value: '1994', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_vectors_v1/mapbiomas_fire_collection5_burned_area_1994.zip' }),
                      ui.Label({ value: '1995', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_vectors_v1/mapbiomas_fire_collection5_burned_area_1995.zip' }),
                      ui.Label({ value: '1996', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_vectors_v1/mapbiomas_fire_collection5_burned_area_1996.zip' }),
                      ui.Label({ value: '1997', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_vectors_v1/mapbiomas_fire_collection5_burned_area_1997.zip' }),
                      ui.Label({ value: '1998', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_vectors_v1/mapbiomas_fire_collection5_burned_area_1998.zip' }),
                      ui.Label({ value: '1999', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_vectors_v1/mapbiomas_fire_collection5_burned_area_1999.zip' }),
                      ui.Label({ value: '2000', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_vectors_v1/mapbiomas_fire_collection5_burned_area_2000.zip' }),
                      ui.Label({ value: '2001', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_vectors_v1/mapbiomas_fire_collection5_burned_area_2001.zip' }),
                      ui.Label({ value: '2002', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_vectors_v1/mapbiomas_fire_collection5_burned_area_2002.zip' }),
                      ui.Label({ value: '2003', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_vectors_v1/mapbiomas_fire_collection5_burned_area_2003.zip' }),
                      ui.Label({ value: '2004', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_vectors_v1/mapbiomas_fire_collection5_burned_area_2004.zip' }),
                      ui.Label({ value: '2005', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_vectors_v1/mapbiomas_fire_collection5_burned_area_2005.zip' }),
                      ui.Label({ value: '2006', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_vectors_v1/mapbiomas_fire_collection5_burned_area_2006.zip' }),
                      ui.Label({ value: '2007', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_vectors_v1/mapbiomas_fire_collection5_burned_area_2007.zip' }),
                      ui.Label({ value: '2008', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_vectors_v1/mapbiomas_fire_collection5_burned_area_2008.zip' }),
                      ui.Label({ value: '2009', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_vectors_v1/mapbiomas_fire_collection5_burned_area_2009.zip' }),
                      ui.Label({ value: '2010', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_vectors_v1/mapbiomas_fire_collection5_burned_area_2010.zip' }),
                      ui.Label({ value: '2011', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_vectors_v1/mapbiomas_fire_collection5_burned_area_2011.zip' }),
                      ui.Label({ value: '2012', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_vectors_v1/mapbiomas_fire_collection5_burned_area_2012.zip' }),
                      ui.Label({ value: '2013', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_vectors_v1/mapbiomas_fire_collection5_burned_area_2013.zip' }),
                      ui.Label({ value: '2014', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_vectors_v1/mapbiomas_fire_collection5_burned_area_2014.zip' }),
                      ui.Label({ value: '2015', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_vectors_v1/mapbiomas_fire_collection5_burned_area_2015.zip' }),
                      ui.Label({ value: '2016', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_vectors_v1/mapbiomas_fire_collection5_burned_area_2016.zip' }),
                      ui.Label({ value: '2017', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_vectors_v1/mapbiomas_fire_collection5_burned_area_2017.zip' }),
                      ui.Label({ value: '2018', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_vectors_v1/mapbiomas_fire_collection5_burned_area_2018.zip' }),
                      ui.Label({ value: '2019', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_vectors_v1/mapbiomas_fire_collection5_burned_area_2019.zip' }),
                      ui.Label({ value: '2020', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_vectors_v1/mapbiomas_fire_collection5_burned_area_2020.zip' }),
                      ui.Label({ value: '2021', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_vectors_v1/mapbiomas_fire_collection5_burned_area_2021.zip' }),
                      ui.Label({ value: '2022', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_vectors_v1/mapbiomas_fire_collection5_burned_area_2022.zip' }),
                      ui.Label({ value: '2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_vectors_v1/mapbiomas_fire_collection5_burned_area_2023.zip' }),
                      ui.Label({ value: '2024', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_vectors_v1/mapbiomas_fire_collection5_burned_area_2024.zip' }),
                      ui.Label({ value: '2025', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_vectors_v1/mapbiomas_fire_collection5_burned_area_2025.zip' }),
                    ],
                    'layout': ui.Panel.Layout.flow('horizontal', true),
                    style: {
                        'border': '1px grey solid',
                        'margin': '0px 6px 0px 6px'
                    }
                }),
                ui.Label('Brazil fire col5: annual_burned_coverage'),
                ui.Panel({
                    widgets: [
                      ui.Label({ value: '1985', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_coverage_v1/burned_coverage_1985.tif' }),
                      ui.Label({ value: '1986', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_coverage_v1/burned_coverage_1986.tif' }),
                      ui.Label({ value: '1987', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_coverage_v1/burned_coverage_1987.tif' }),
                      ui.Label({ value: '1988', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_coverage_v1/burned_coverage_1988.tif' }),
                      ui.Label({ value: '1989', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_coverage_v1/burned_coverage_1989.tif' }),
                      ui.Label({ value: '1990', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_coverage_v1/burned_coverage_1990.tif' }),
                      ui.Label({ value: '1991', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_coverage_v1/burned_coverage_1991.tif' }),
                      ui.Label({ value: '1992', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_coverage_v1/burned_coverage_1992.tif' }),
                      ui.Label({ value: '1993', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_coverage_v1/burned_coverage_1993.tif' }),
                      ui.Label({ value: '1994', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_coverage_v1/burned_coverage_1994.tif' }),
                      ui.Label({ value: '1995', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_coverage_v1/burned_coverage_1995.tif' }),
                      ui.Label({ value: '1996', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_coverage_v1/burned_coverage_1996.tif' }),
                      ui.Label({ value: '1997', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_coverage_v1/burned_coverage_1997.tif' }),
                      ui.Label({ value: '1998', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_coverage_v1/burned_coverage_1998.tif' }),
                      ui.Label({ value: '1999', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_coverage_v1/burned_coverage_1999.tif' }),
                      ui.Label({ value: '2000', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_coverage_v1/burned_coverage_2000.tif' }),
                      ui.Label({ value: '2001', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_coverage_v1/burned_coverage_2001.tif' }),
                      ui.Label({ value: '2002', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_coverage_v1/burned_coverage_2002.tif' }),
                      ui.Label({ value: '2003', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_coverage_v1/burned_coverage_2003.tif' }),
                      ui.Label({ value: '2004', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_coverage_v1/burned_coverage_2004.tif' }),
                      ui.Label({ value: '2005', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_coverage_v1/burned_coverage_2005.tif' }),
                      ui.Label({ value: '2006', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_coverage_v1/burned_coverage_2006.tif' }),
                      ui.Label({ value: '2007', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_coverage_v1/burned_coverage_2007.tif' }),
                      ui.Label({ value: '2008', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_coverage_v1/burned_coverage_2008.tif' }),
                      ui.Label({ value: '2009', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_coverage_v1/burned_coverage_2009.tif' }),
                      ui.Label({ value: '2010', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_coverage_v1/burned_coverage_2010.tif' }),
                      ui.Label({ value: '2011', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_coverage_v1/burned_coverage_2011.tif' }),
                      ui.Label({ value: '2012', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_coverage_v1/burned_coverage_2012.tif' }),
                      ui.Label({ value: '2013', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_coverage_v1/burned_coverage_2013.tif' }),
                      ui.Label({ value: '2014', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_coverage_v1/burned_coverage_2014.tif' }),
                      ui.Label({ value: '2015', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_coverage_v1/burned_coverage_2015.tif' }),
                      ui.Label({ value: '2016', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_coverage_v1/burned_coverage_2016.tif' }),
                      ui.Label({ value: '2017', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_coverage_v1/burned_coverage_2017.tif' }),
                      ui.Label({ value: '2018', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_coverage_v1/burned_coverage_2018.tif' }),
                      ui.Label({ value: '2019', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_coverage_v1/burned_coverage_2019.tif' }),
                      ui.Label({ value: '2020', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_coverage_v1/burned_coverage_2020.tif' }),
                      ui.Label({ value: '2021', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_coverage_v1/burned_coverage_2021.tif' }),
                      ui.Label({ value: '2022', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_coverage_v1/burned_coverage_2022.tif' }),
                      ui.Label({ value: '2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_coverage_v1/burned_coverage_2023.tif' }),
                      ui.Label({ value: '2024', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_coverage_v1/burned_coverage_2024.tif' }),
                      ui.Label({ value: '2025', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_coverage_v1/burned_coverage_2025.tif' }),
                    ],
                    'layout': ui.Panel.Layout.flow('horizontal', true),
                    style: {
                        'border': '1px grey solid',
                        'margin': '0px 6px 0px 6px'
                    }
                }),
                ui.Label('Brazil fire col5: monthly_burned'),
                ui.Panel({
                    widgets: [
                        ui.Label({ value: '1985', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_coverage_v1/burned_coverage_1985.tif' }),
                        ui.Label({ value: '1986', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_coverage_v1/burned_coverage_1986.tif' }),
                        ui.Label({ value: '1987', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_coverage_v1/burned_coverage_1987.tif' }),
                        ui.Label({ value: '1988', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_coverage_v1/burned_coverage_1988.tif' }),
                        ui.Label({ value: '1989', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_coverage_v1/burned_coverage_1989.tif' }),
                        ui.Label({ value: '1990', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_coverage_v1/burned_coverage_1990.tif' }),
                        ui.Label({ value: '1991', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_coverage_v1/burned_coverage_1991.tif' }),
                        ui.Label({ value: '1992', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_coverage_v1/burned_coverage_1992.tif' }),
                        ui.Label({ value: '1993', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_coverage_v1/burned_coverage_1993.tif' }),
                        ui.Label({ value: '1994', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_coverage_v1/burned_coverage_1994.tif' }),
                        ui.Label({ value: '1995', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_coverage_v1/burned_coverage_1995.tif' }),
                        ui.Label({ value: '1996', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_coverage_v1/burned_coverage_1996.tif' }),
                        ui.Label({ value: '1997', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_coverage_v1/burned_coverage_1997.tif' }),
                        ui.Label({ value: '1998', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_coverage_v1/burned_coverage_1998.tif' }),
                        ui.Label({ value: '1999', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_coverage_v1/burned_coverage_1999.tif' }),
                        ui.Label({ value: '2000', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_coverage_v1/burned_coverage_2000.tif' }),
                        ui.Label({ value: '2001', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_coverage_v1/burned_coverage_2001.tif' }),
                        ui.Label({ value: '2002', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_coverage_v1/burned_coverage_2002.tif' }),
                        ui.Label({ value: '2003', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_coverage_v1/burned_coverage_2003.tif' }),
                        ui.Label({ value: '2004', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_coverage_v1/burned_coverage_2004.tif' }),
                        ui.Label({ value: '2005', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_coverage_v1/burned_coverage_2005.tif' }),
                        ui.Label({ value: '2006', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_coverage_v1/burned_coverage_2006.tif' }),
                        ui.Label({ value: '2007', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_coverage_v1/burned_coverage_2007.tif' }),
                        ui.Label({ value: '2008', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_coverage_v1/burned_coverage_2008.tif' }),
                        ui.Label({ value: '2009', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_coverage_v1/burned_coverage_2009.tif' }),
                        ui.Label({ value: '2010', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_coverage_v1/burned_coverage_2010.tif' }),
                        ui.Label({ value: '2011', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_coverage_v1/burned_coverage_2011.tif' }),
                        ui.Label({ value: '2012', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_coverage_v1/burned_coverage_2012.tif' }),
                        ui.Label({ value: '2013', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_coverage_v1/burned_coverage_2013.tif' }),
                        ui.Label({ value: '2014', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_coverage_v1/burned_coverage_2014.tif' }),
                        ui.Label({ value: '2015', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_coverage_v1/burned_coverage_2015.tif' }),
                        ui.Label({ value: '2016', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_coverage_v1/burned_coverage_2016.tif' }),
                        ui.Label({ value: '2017', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_coverage_v1/burned_coverage_2017.tif' }),
                        ui.Label({ value: '2018', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_coverage_v1/burned_coverage_2018.tif' }),
                        ui.Label({ value: '2019', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_coverage_v1/burned_coverage_2019.tif' }),
                        ui.Label({ value: '2020', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_coverage_v1/burned_coverage_2020.tif' }),
                        ui.Label({ value: '2021', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_coverage_v1/burned_coverage_2021.tif' }),
                        ui.Label({ value: '2022', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_coverage_v1/burned_coverage_2022.tif' }),
                        ui.Label({ value: '2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_coverage_v1/burned_coverage_2023.tif' }),
                        ui.Label({ value: '2024', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_coverage_v1/burned_coverage_2024.tif' }),
                        ui.Label({ value: '2025', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/annual_burned_coverage_v1/burned_coverage_2025.tif' }),
                    ],
                    'layout': ui.Panel.Layout.flow('horizontal', true),
                    style: {
                        'border': '1px grey solid',
                        'margin': '0px 6px 0px 6px'
                    }
                }),
                ui.Label('Brazil fire col5: annual_burned_scar_size_range'),
                ui.Panel({
                    widgets: [
                        ui.Label({ value: '1985', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_scar_size_range_v1/scar_area_ha_1985.tif' }),
                        ui.Label({ value: '1986', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_scar_size_range_v1/scar_area_ha_1986.tif' }),
                        ui.Label({ value: '1987', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_scar_size_range_v1/scar_area_ha_1987.tif' }),
                        ui.Label({ value: '1988', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_scar_size_range_v1/scar_area_ha_1988.tif' }),
                        ui.Label({ value: '1989', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_scar_size_range_v1/scar_area_ha_1989.tif' }),
                        ui.Label({ value: '1990', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_scar_size_range_v1/scar_area_ha_1990.tif' }),
                        ui.Label({ value: '1991', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_scar_size_range_v1/scar_area_ha_1991.tif' }),
                        ui.Label({ value: '1992', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_scar_size_range_v1/scar_area_ha_1992.tif' }),
                        ui.Label({ value: '1993', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_scar_size_range_v1/scar_area_ha_1993.tif' }),
                        ui.Label({ value: '1994', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_scar_size_range_v1/scar_area_ha_1994.tif' }),
                        ui.Label({ value: '1995', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_scar_size_range_v1/scar_area_ha_1995.tif' }),
                        ui.Label({ value: '1996', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_scar_size_range_v1/scar_area_ha_1996.tif' }),
                        ui.Label({ value: '1997', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_scar_size_range_v1/scar_area_ha_1997.tif' }),
                        ui.Label({ value: '1998', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_scar_size_range_v1/scar_area_ha_1998.tif' }),
                        ui.Label({ value: '1999', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_scar_size_range_v1/scar_area_ha_1999.tif' }),
                        ui.Label({ value: '2000', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_scar_size_range_v1/scar_area_ha_2000.tif' }),
                        ui.Label({ value: '2001', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_scar_size_range_v1/scar_area_ha_2001.tif' }),
                        ui.Label({ value: '2002', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_scar_size_range_v1/scar_area_ha_2002.tif' }),
                        ui.Label({ value: '2003', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_scar_size_range_v1/scar_area_ha_2003.tif' }),
                        ui.Label({ value: '2004', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_scar_size_range_v1/scar_area_ha_2004.tif' }),
                        ui.Label({ value: '2005', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_scar_size_range_v1/scar_area_ha_2005.tif' }),
                        ui.Label({ value: '2006', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_scar_size_range_v1/scar_area_ha_2006.tif' }),
                        ui.Label({ value: '2007', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_scar_size_range_v1/scar_area_ha_2007.tif' }),
                        ui.Label({ value: '2008', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_scar_size_range_v1/scar_area_ha_2008.tif' }),
                        ui.Label({ value: '2009', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_scar_size_range_v1/scar_area_ha_2009.tif' }),
                        ui.Label({ value: '2010', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_scar_size_range_v1/scar_area_ha_2010.tif' }),
                        ui.Label({ value: '2011', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_scar_size_range_v1/scar_area_ha_2011.tif' }),
                        ui.Label({ value: '2012', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_scar_size_range_v1/scar_area_ha_2012.tif' }),
                        ui.Label({ value: '2013', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_scar_size_range_v1/scar_area_ha_2013.tif' }),
                        ui.Label({ value: '2014', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_scar_size_range_v1/scar_area_ha_2014.tif' }),
                        ui.Label({ value: '2015', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_scar_size_range_v1/scar_area_ha_2015.tif' }),
                        ui.Label({ value: '2016', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_scar_size_range_v1/scar_area_ha_2016.tif' }),
                        ui.Label({ value: '2017', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_scar_size_range_v1/scar_area_ha_2017.tif' }),
                        ui.Label({ value: '2018', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_scar_size_range_v1/scar_area_ha_2018.tif' }),
                        ui.Label({ value: '2019', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_scar_size_range_v1/scar_area_ha_2019.tif' }),
                        ui.Label({ value: '2020', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_scar_size_range_v1/scar_area_ha_2020.tif' }),
                        ui.Label({ value: '2021', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_scar_size_range_v1/scar_area_ha_2021.tif' }),
                        ui.Label({ value: '2022', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_scar_size_range_v1/scar_area_ha_2022.tif' }),
                        ui.Label({ value: '2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_scar_size_range_v1/scar_area_ha_2023.tif' }),
                        ui.Label({ value: '2024', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_scar_size_range_v1/scar_area_ha_2024.tif' }),
                        ui.Label({ value: '2025', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_annual_burned_scar_size_range_v1/scar_area_ha_2025.tif' }),
                    ],
                    'layout': ui.Panel.Layout.flow('horizontal', true),
                    style: {
                        'border': '1px grey solid',
                        'margin': '0px 6px 0px 6px'
                    }
                }),
                ui.Label('Brazil fire col5: year_last_fire'),
                ui.Panel({
                    widgets: [
                        ui.Label({ value: '1986', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_year_last_fire_v1/year_last_fire_1986.tif' }),
                        ui.Label({ value: '1987', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_year_last_fire_v1/year_last_fire_1987.tif' }),
                        ui.Label({ value: '1988', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_year_last_fire_v1/year_last_fire_1988.tif' }),
                        ui.Label({ value: '1989', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_year_last_fire_v1/year_last_fire_1989.tif' }),
                        ui.Label({ value: '1990', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_year_last_fire_v1/year_last_fire_1990.tif' }),
                        ui.Label({ value: '1991', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_year_last_fire_v1/year_last_fire_1991.tif' }),
                        ui.Label({ value: '1992', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_year_last_fire_v1/year_last_fire_1992.tif' }),
                        ui.Label({ value: '1993', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_year_last_fire_v1/year_last_fire_1993.tif' }),
                        ui.Label({ value: '1994', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_year_last_fire_v1/year_last_fire_1994.tif' }),
                        ui.Label({ value: '1995', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_year_last_fire_v1/year_last_fire_1995.tif' }),
                        ui.Label({ value: '1996', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_year_last_fire_v1/year_last_fire_1996.tif' }),
                        ui.Label({ value: '1997', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_year_last_fire_v1/year_last_fire_1997.tif' }),
                        ui.Label({ value: '1998', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_year_last_fire_v1/year_last_fire_1998.tif' }),
                        ui.Label({ value: '1999', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_year_last_fire_v1/year_last_fire_1999.tif' }),
                        ui.Label({ value: '2000', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_year_last_fire_v1/year_last_fire_2000.tif' }),
                        ui.Label({ value: '2001', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_year_last_fire_v1/year_last_fire_2001.tif' }),
                        ui.Label({ value: '2002', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_year_last_fire_v1/year_last_fire_2002.tif' }),
                        ui.Label({ value: '2003', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_year_last_fire_v1/year_last_fire_2003.tif' }),
                        ui.Label({ value: '2004', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_year_last_fire_v1/year_last_fire_2004.tif' }),
                        ui.Label({ value: '2005', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_year_last_fire_v1/year_last_fire_2005.tif' }),
                        ui.Label({ value: '2006', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_year_last_fire_v1/year_last_fire_2006.tif' }),
                        ui.Label({ value: '2007', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_year_last_fire_v1/year_last_fire_2007.tif' }),
                        ui.Label({ value: '2008', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_year_last_fire_v1/year_last_fire_2008.tif' }),
                        ui.Label({ value: '2009', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_year_last_fire_v1/year_last_fire_2009.tif' }),
                        ui.Label({ value: '2010', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_year_last_fire_v1/year_last_fire_2010.tif' }),
                        ui.Label({ value: '2011', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_year_last_fire_v1/year_last_fire_2011.tif' }),
                        ui.Label({ value: '2012', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_year_last_fire_v1/year_last_fire_2012.tif' }),
                        ui.Label({ value: '2013', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_year_last_fire_v1/year_last_fire_2013.tif' }),
                        ui.Label({ value: '2014', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_year_last_fire_v1/year_last_fire_2014.tif' }),
                        ui.Label({ value: '2015', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_year_last_fire_v1/year_last_fire_2015.tif' }),
                        ui.Label({ value: '2016', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_year_last_fire_v1/year_last_fire_2016.tif' }),
                        ui.Label({ value: '2017', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_year_last_fire_v1/year_last_fire_2017.tif' }),
                        ui.Label({ value: '2018', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_year_last_fire_v1/year_last_fire_2018.tif' }),
                        ui.Label({ value: '2019', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_year_last_fire_v1/year_last_fire_2019.tif' }),
                        ui.Label({ value: '2020', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_year_last_fire_v1/year_last_fire_2020.tif' }),
                        ui.Label({ value: '2021', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_year_last_fire_v1/year_last_fire_2021.tif' }),
                        ui.Label({ value: '2022', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_year_last_fire_v1/year_last_fire_2022.tif' }),
                        ui.Label({ value: '2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_year_last_fire_v1/year_last_fire_2023.tif' }),
                        ui.Label({ value: '2024', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_year_last_fire_v1/year_last_fire_2024.tif' }),
                        ui.Label({ value: '2025', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_year_last_fire_v1/year_last_fire_2025.tif' }),
                        ui.Label({ value: '2026', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_year_last_fire_v1/year_last_fire_2026.tif' }),
                    ],
                    'layout': ui.Panel.Layout.flow('horizontal', true),
                    style: {
                        'border': '1px grey solid',
                        'margin': '0px 6px 0px 6px'
                    }
                }),
                ui.Label('Brazil fire col5: accumulated_burned'),
                ui.Panel({
                    widgets: [
                      ui.Label({ value: '1985_1985', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_v1/fire_accumulated_1985_1985.tif'}),
                      ui.Label({ value: '1985_1986', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_v1/fire_accumulated_1985_1986.tif'}),
                      ui.Label({ value: '1985_1987', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_v1/fire_accumulated_1985_1987.tif'}),
                      ui.Label({ value: '1985_1988', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_v1/fire_accumulated_1985_1988.tif'}),
                      ui.Label({ value: '1985_1989', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_v1/fire_accumulated_1985_1989.tif'}),
                      ui.Label({ value: '1985_1990', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_v1/fire_accumulated_1985_1990.tif'}),
                      ui.Label({ value: '1985_1991', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_v1/fire_accumulated_1985_1991.tif'}),
                      ui.Label({ value: '1985_1992', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_v1/fire_accumulated_1985_1992.tif'}),
                      ui.Label({ value: '1985_1993', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_v1/fire_accumulated_1985_1993.tif'}),
                      ui.Label({ value: '1985_1994', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_v1/fire_accumulated_1985_1994.tif'}),
                      ui.Label({ value: '1985_1995', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_v1/fire_accumulated_1985_1995.tif'}),
                      ui.Label({ value: '1985_1996', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_v1/fire_accumulated_1985_1996.tif'}),
                      ui.Label({ value: '1985_1997', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_v1/fire_accumulated_1985_1997.tif'}),
                      ui.Label({ value: '1985_1998', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_v1/fire_accumulated_1985_1998.tif'}),
                      ui.Label({ value: '1985_1999', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_v1/fire_accumulated_1985_1999.tif'}),
                      ui.Label({ value: '1985_2000', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_v1/fire_accumulated_1985_2000.tif'}),
                      ui.Label({ value: '1985_2001', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_v1/fire_accumulated_1985_2001.tif'}),
                      ui.Label({ value: '1985_2002', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_v1/fire_accumulated_1985_2002.tif'}),
                      ui.Label({ value: '1985_2003', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_v1/fire_accumulated_1985_2003.tif'}),
                      ui.Label({ value: '1985_2004', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_v1/fire_accumulated_1985_2004.tif'}),
                      ui.Label({ value: '1985_2005', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_v1/fire_accumulated_1985_2005.tif'}),
                      ui.Label({ value: '1985_2006', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_v1/fire_accumulated_1985_2006.tif'}),
                      ui.Label({ value: '1985_2007', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_v1/fire_accumulated_1985_2007.tif'}),
                      ui.Label({ value: '1985_2008', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_v1/fire_accumulated_1985_2008.tif'}),
                      ui.Label({ value: '1985_2009', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_v1/fire_accumulated_1985_2009.tif'}),
                      ui.Label({ value: '1985_2010', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_v1/fire_accumulated_1985_2010.tif'}),
                      ui.Label({ value: '1985_2011', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_v1/fire_accumulated_1985_2011.tif'}),
                      ui.Label({ value: '1985_2012', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_v1/fire_accumulated_1985_2012.tif'}),
                      ui.Label({ value: '1985_2013', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_v1/fire_accumulated_1985_2013.tif'}),
                      ui.Label({ value: '1985_2014', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_v1/fire_accumulated_1985_2014.tif'}),
                      ui.Label({ value: '1985_2015', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_v1/fire_accumulated_1985_2015.tif'}),
                      ui.Label({ value: '1985_2016', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_v1/fire_accumulated_1985_2016.tif'}),
                      ui.Label({ value: '1985_2017', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_v1/fire_accumulated_1985_2017.tif'}),
                      ui.Label({ value: '1985_2018', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_v1/fire_accumulated_1985_2018.tif'}),
                      ui.Label({ value: '1985_2019', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_v1/fire_accumulated_1985_2019.tif'}),
                      ui.Label({ value: '1985_2020', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_v1/fire_accumulated_1985_2020.tif'}),
                      ui.Label({ value: '1985_2021', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_v1/fire_accumulated_1985_2021.tif'}),
                      ui.Label({ value: '1985_2022', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_v1/fire_accumulated_1985_2022.tif'}),
                      ui.Label({ value: '1985_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_v1/fire_accumulated_1985_2023.tif'}),
                      ui.Label({ value: '1985_2024', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_v1/fire_accumulated_1985_2024.tif'}),
                      ui.Label({ value: '1985_2025', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_v1/fire_accumulated_1985_2025.tif'}),
                      
                    ],
                    'layout': ui.Panel.Layout.flow('horizontal', true),
                    style: {
                        'border': '1px grey solid',
                        'margin': '0px 6px 0px 6px'
                    }
                }),
                ui.Label('Brazil fire col5: accumulated_burned_coverage'),
                ui.Panel({
                    widgets: [
                      ui.Label({ value: '1985_1985', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_coverage_v1/fire_accumulated_1985_1985.tif'}),
                      ui.Label({ value: '1985_1986', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_coverage_v1/fire_accumulated_1985_1986.tif'}),
                      ui.Label({ value: '1985_1987', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_coverage_v1/fire_accumulated_1985_1987.tif'}),
                      ui.Label({ value: '1985_1988', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_coverage_v1/fire_accumulated_1985_1988.tif'}),
                      ui.Label({ value: '1985_1989', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_coverage_v1/fire_accumulated_1985_1989.tif'}),
                      ui.Label({ value: '1985_1990', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_coverage_v1/fire_accumulated_1985_1990.tif'}),
                      ui.Label({ value: '1985_1991', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_coverage_v1/fire_accumulated_1985_1991.tif'}),
                      ui.Label({ value: '1985_1992', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_coverage_v1/fire_accumulated_1985_1992.tif'}),
                      ui.Label({ value: '1985_1993', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_coverage_v1/fire_accumulated_1985_1993.tif'}),
                      ui.Label({ value: '1985_1994', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_coverage_v1/fire_accumulated_1985_1994.tif'}),
                      ui.Label({ value: '1985_1995', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_coverage_v1/fire_accumulated_1985_1995.tif'}),
                      ui.Label({ value: '1985_1996', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_coverage_v1/fire_accumulated_1985_1996.tif'}),
                      ui.Label({ value: '1985_1997', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_coverage_v1/fire_accumulated_1985_1997.tif'}),
                      ui.Label({ value: '1985_1998', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_coverage_v1/fire_accumulated_1985_1998.tif'}),
                      ui.Label({ value: '1985_1999', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_coverage_v1/fire_accumulated_1985_1999.tif'}),
                      ui.Label({ value: '1985_2000', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_coverage_v1/fire_accumulated_1985_2000.tif'}),
                      ui.Label({ value: '1985_2001', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_coverage_v1/fire_accumulated_1985_2001.tif'}),
                      ui.Label({ value: '1985_2002', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_coverage_v1/fire_accumulated_1985_2002.tif'}),
                      ui.Label({ value: '1985_2003', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_coverage_v1/fire_accumulated_1985_2003.tif'}),
                      ui.Label({ value: '1985_2004', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_coverage_v1/fire_accumulated_1985_2004.tif'}),
                      ui.Label({ value: '1985_2005', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_coverage_v1/fire_accumulated_1985_2005.tif'}),
                      ui.Label({ value: '1985_2006', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_coverage_v1/fire_accumulated_1985_2006.tif'}),
                      ui.Label({ value: '1985_2007', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_coverage_v1/fire_accumulated_1985_2007.tif'}),
                      ui.Label({ value: '1985_2008', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_coverage_v1/fire_accumulated_1985_2008.tif'}),
                      ui.Label({ value: '1985_2009', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_coverage_v1/fire_accumulated_1985_2009.tif'}),
                      ui.Label({ value: '1985_2010', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_coverage_v1/fire_accumulated_1985_2010.tif'}),
                      ui.Label({ value: '1985_2011', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_coverage_v1/fire_accumulated_1985_2011.tif'}),
                      ui.Label({ value: '1985_2012', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_coverage_v1/fire_accumulated_1985_2012.tif'}),
                      ui.Label({ value: '1985_2013', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_coverage_v1/fire_accumulated_1985_2013.tif'}),
                      ui.Label({ value: '1985_2014', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_coverage_v1/fire_accumulated_1985_2014.tif'}),
                      ui.Label({ value: '1985_2015', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_coverage_v1/fire_accumulated_1985_2015.tif'}),
                      ui.Label({ value: '1985_2016', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_coverage_v1/fire_accumulated_1985_2016.tif'}),
                      ui.Label({ value: '1985_2017', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_coverage_v1/fire_accumulated_1985_2017.tif'}),
                      ui.Label({ value: '1985_2018', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_coverage_v1/fire_accumulated_1985_2018.tif'}),
                      ui.Label({ value: '1985_2019', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_coverage_v1/fire_accumulated_1985_2019.tif'}),
                      ui.Label({ value: '1985_2020', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_coverage_v1/fire_accumulated_1985_2020.tif'}),
                      ui.Label({ value: '1985_2021', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_coverage_v1/fire_accumulated_1985_2021.tif'}),
                      ui.Label({ value: '1985_2022', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_coverage_v1/fire_accumulated_1985_2022.tif'}),
                      ui.Label({ value: '1985_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_coverage_v1/fire_accumulated_1985_2023.tif'}),
                      ui.Label({ value: '1985_2024', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_coverage_v1/fire_accumulated_1985_2024.tif'}),
                      ui.Label({ value: '1985_2025', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_accumulated_burned_coverage_v1/fire_accumulated_1985_2025.tif'}),
                    ],
                    'layout': ui.Panel.Layout.flow('horizontal', true),
                    style: {
                        'border': '1px grey solid',
                        'margin': '0px 6px 0px 6px'
                    }
                }),
                ui.Label('Brazil fire col5: frequency_burned'),
                ui.Panel({
                    widgets: [
                      ui.Label({ value: '1985_1985', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_fire_frequency_v1/fire_frequency_1985_1985.tif'}),
                      ui.Label({ value: '1985_1986', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_fire_frequency_v1/fire_frequency_1985_1986.tif'}),
                      ui.Label({ value: '1985_1987', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_fire_frequency_v1/fire_frequency_1985_1987.tif'}),
                      ui.Label({ value: '1985_1988', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_fire_frequency_v1/fire_frequency_1985_1988.tif'}),
                      ui.Label({ value: '1985_1989', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_fire_frequency_v1/fire_frequency_1985_1989.tif'}),
                      ui.Label({ value: '1985_1990', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_fire_frequency_v1/fire_frequency_1985_1990.tif'}),
                      ui.Label({ value: '1985_1991', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_fire_frequency_v1/fire_frequency_1985_1991.tif'}),
                      ui.Label({ value: '1985_1992', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_fire_frequency_v1/fire_frequency_1985_1992.tif'}),
                      ui.Label({ value: '1985_1993', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_fire_frequency_v1/fire_frequency_1985_1993.tif'}),
                      ui.Label({ value: '1985_1994', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_fire_frequency_v1/fire_frequency_1985_1994.tif'}),
                      ui.Label({ value: '1985_1995', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_fire_frequency_v1/fire_frequency_1985_1995.tif'}),
                      ui.Label({ value: '1985_1996', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_fire_frequency_v1/fire_frequency_1985_1996.tif'}),
                      ui.Label({ value: '1985_1997', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_fire_frequency_v1/fire_frequency_1985_1997.tif'}),
                      ui.Label({ value: '1985_1998', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_fire_frequency_v1/fire_frequency_1985_1998.tif'}),
                      ui.Label({ value: '1985_1999', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_fire_frequency_v1/fire_frequency_1985_1999.tif'}),
                      ui.Label({ value: '1985_2000', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_fire_frequency_v1/fire_frequency_1985_2000.tif'}),
                      ui.Label({ value: '1985_2001', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_fire_frequency_v1/fire_frequency_1985_2001.tif'}),
                      ui.Label({ value: '1985_2002', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_fire_frequency_v1/fire_frequency_1985_2002.tif'}),
                      ui.Label({ value: '1985_2003', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_fire_frequency_v1/fire_frequency_1985_2003.tif'}),
                      ui.Label({ value: '1985_2004', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_fire_frequency_v1/fire_frequency_1985_2004.tif'}),
                      ui.Label({ value: '1985_2005', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_fire_frequency_v1/fire_frequency_1985_2005.tif'}),
                      ui.Label({ value: '1985_2006', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_fire_frequency_v1/fire_frequency_1985_2006.tif'}),
                      ui.Label({ value: '1985_2007', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_fire_frequency_v1/fire_frequency_1985_2007.tif'}),
                      ui.Label({ value: '1985_2008', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_fire_frequency_v1/fire_frequency_1985_2008.tif'}),
                      ui.Label({ value: '1985_2009', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_fire_frequency_v1/fire_frequency_1985_2009.tif'}),
                      ui.Label({ value: '1985_2010', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_fire_frequency_v1/fire_frequency_1985_2010.tif'}),
                      ui.Label({ value: '1985_2011', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_fire_frequency_v1/fire_frequency_1985_2011.tif'}),
                      ui.Label({ value: '1985_2012', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_fire_frequency_v1/fire_frequency_1985_2012.tif'}),
                      ui.Label({ value: '1985_2013', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_fire_frequency_v1/fire_frequency_1985_2013.tif'}),
                      ui.Label({ value: '1985_2014', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_fire_frequency_v1/fire_frequency_1985_2014.tif'}),
                      ui.Label({ value: '1985_2015', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_fire_frequency_v1/fire_frequency_1985_2015.tif'}),
                      ui.Label({ value: '1985_2016', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_fire_frequency_v1/fire_frequency_1985_2016.tif'}),
                      ui.Label({ value: '1985_2017', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_fire_frequency_v1/fire_frequency_1985_2017.tif'}),
                      ui.Label({ value: '1985_2018', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_fire_frequency_v1/fire_frequency_1985_2018.tif'}),
                      ui.Label({ value: '1985_2019', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_fire_frequency_v1/fire_frequency_1985_2019.tif'}),
                      ui.Label({ value: '1985_2020', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_fire_frequency_v1/fire_frequency_1985_2020.tif'}),
                      ui.Label({ value: '1985_2021', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_fire_frequency_v1/fire_frequency_1985_2021.tif'}),
                      ui.Label({ value: '1985_2022', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_fire_frequency_v1/fire_frequency_1985_2022.tif'}),
                      ui.Label({ value: '1985_2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_fire_frequency_v1/fire_frequency_1985_2023.tif'}),
                      ui.Label({ value: '1985_2024', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_fire_frequency_v1/fire_frequency_1985_2024.tif'}),
                      ui.Label({ value: '1985_2025', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_fire_frequency_v1/fire_frequency_1985_2025.tif'}),
                    ],
                    'layout': ui.Panel.Layout.flow('horizontal', true),
                    style: {
                        'border': '1px grey solid',
                        'margin': '0px 6px 0px 6px'
                    }
                }),
                ui.Label('Brazil fire col5: severity'),
                ui.Panel({
                    widgets: [
                        ui.Label({ value: '1986', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_severity_class_v1/severity_class_1985.tif' }),
                        ui.Label({ value: '1986', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_severity_class_v1/severity_class_1986.tif' }),
                        ui.Label({ value: '1987', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_severity_class_v1/severity_class_1987.tif' }),
                        ui.Label({ value: '1988', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_severity_class_v1/severity_class_1988.tif' }),
                        ui.Label({ value: '1989', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_severity_class_v1/severity_class_1989.tif' }),
                        ui.Label({ value: '1990', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_severity_class_v1/severity_class_1990.tif' }),
                        ui.Label({ value: '1991', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_severity_class_v1/severity_class_1991.tif' }),
                        ui.Label({ value: '1992', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_severity_class_v1/severity_class_1992.tif' }),
                        ui.Label({ value: '1993', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_severity_class_v1/severity_class_1993.tif' }),
                        ui.Label({ value: '1994', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_severity_class_v1/severity_class_1994.tif' }),
                        ui.Label({ value: '1995', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_severity_class_v1/severity_class_1995.tif' }),
                        ui.Label({ value: '1996', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_severity_class_v1/severity_class_1996.tif' }),
                        ui.Label({ value: '1997', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_severity_class_v1/severity_class_1997.tif' }),
                        ui.Label({ value: '1998', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_severity_class_v1/severity_class_1998.tif' }),
                        ui.Label({ value: '1999', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_severity_class_v1/severity_class_1999.tif' }),
                        ui.Label({ value: '2000', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_severity_class_v1/severity_class_2000.tif' }),
                        ui.Label({ value: '2001', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_severity_class_v1/severity_class_2001.tif' }),
                        ui.Label({ value: '2002', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_severity_class_v1/severity_class_2002.tif' }),
                        ui.Label({ value: '2003', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_severity_class_v1/severity_class_2003.tif' }),
                        ui.Label({ value: '2004', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_severity_class_v1/severity_class_2004.tif' }),
                        ui.Label({ value: '2005', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_severity_class_v1/severity_class_2005.tif' }),
                        ui.Label({ value: '2006', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_severity_class_v1/severity_class_2006.tif' }),
                        ui.Label({ value: '2007', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_severity_class_v1/severity_class_2007.tif' }),
                        ui.Label({ value: '2008', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_severity_class_v1/severity_class_2008.tif' }),
                        ui.Label({ value: '2009', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_severity_class_v1/severity_class_2009.tif' }),
                        ui.Label({ value: '2010', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_severity_class_v1/severity_class_2010.tif' }),
                        ui.Label({ value: '2011', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_severity_class_v1/severity_class_2011.tif' }),
                        ui.Label({ value: '2012', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_severity_class_v1/severity_class_2012.tif' }),
                        ui.Label({ value: '2013', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_severity_class_v1/severity_class_2013.tif' }),
                        ui.Label({ value: '2014', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_severity_class_v1/severity_class_2014.tif' }),
                        ui.Label({ value: '2015', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_severity_class_v1/severity_class_2015.tif' }),
                        ui.Label({ value: '2016', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_severity_class_v1/severity_class_2016.tif' }),
                        ui.Label({ value: '2017', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_severity_class_v1/severity_class_2017.tif' }),
                        ui.Label({ value: '2018', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_severity_class_v1/severity_class_2018.tif' }),
                        ui.Label({ value: '2019', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_severity_class_v1/severity_class_2019.tif' }),
                        ui.Label({ value: '2020', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_severity_class_v1/severity_class_2020.tif' }),
                        ui.Label({ value: '2021', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_severity_class_v1/severity_class_2021.tif' }),
                        ui.Label({ value: '2022', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_severity_class_v1/severity_class_2022.tif' }),
                        ui.Label({ value: '2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_severity_class_v1/severity_class_2023.tif' }),
                        ui.Label({ value: '2024', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_severity_class_v1/severity_class_2024.tif' }),
                        ui.Label({ value: '2025', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_severity_class_v1/severity_class_2025.tif' }),
                    ],
                    'layout': ui.Panel.Layout.flow('horizontal', true),
                    style: {
                        'border': '1px grey solid',
                        'margin': '0px 6px 0px 6px'
                    }
                }),
                ui.Label('Brazil fire col5: interval_since_fire'),
                ui.Panel({
                    widgets: [
                        ui.Label({ value: '1985', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_interval_since_fire_v1/interval_since_fire_1985.tif' }),
                        ui.Label({ value: '1986', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_interval_since_fire_v1/interval_since_fire_1986.tif' }),
                        ui.Label({ value: '1987', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_interval_since_fire_v1/interval_since_fire_1987.tif' }),
                        ui.Label({ value: '1988', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_interval_since_fire_v1/interval_since_fire_1988.tif' }),
                        ui.Label({ value: '1989', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_interval_since_fire_v1/interval_since_fire_1989.tif' }),
                        ui.Label({ value: '1990', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_interval_since_fire_v1/interval_since_fire_1990.tif' }),
                        ui.Label({ value: '1991', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_interval_since_fire_v1/interval_since_fire_1991.tif' }),
                        ui.Label({ value: '1992', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_interval_since_fire_v1/interval_since_fire_1992.tif' }),
                        ui.Label({ value: '1993', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_interval_since_fire_v1/interval_since_fire_1993.tif' }),
                        ui.Label({ value: '1994', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_interval_since_fire_v1/interval_since_fire_1994.tif' }),
                        ui.Label({ value: '1995', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_interval_since_fire_v1/interval_since_fire_1995.tif' }),
                        ui.Label({ value: '1996', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_interval_since_fire_v1/interval_since_fire_1996.tif' }),
                        ui.Label({ value: '1997', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_interval_since_fire_v1/interval_since_fire_1997.tif' }),
                        ui.Label({ value: '1998', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_interval_since_fire_v1/interval_since_fire_1998.tif' }),
                        ui.Label({ value: '1999', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_interval_since_fire_v1/interval_since_fire_1999.tif' }),
                        ui.Label({ value: '2000', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_interval_since_fire_v1/interval_since_fire_2000.tif' }),
                        ui.Label({ value: '2001', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_interval_since_fire_v1/interval_since_fire_2001.tif' }),
                        ui.Label({ value: '2002', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_interval_since_fire_v1/interval_since_fire_2002.tif' }),
                        ui.Label({ value: '2003', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_interval_since_fire_v1/interval_since_fire_2003.tif' }),
                        ui.Label({ value: '2004', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_interval_since_fire_v1/interval_since_fire_2004.tif' }),
                        ui.Label({ value: '2005', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_interval_since_fire_v1/interval_since_fire_2005.tif' }),
                        ui.Label({ value: '2006', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_interval_since_fire_v1/interval_since_fire_2006.tif' }),
                        ui.Label({ value: '2007', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_interval_since_fire_v1/interval_since_fire_2007.tif' }),
                        ui.Label({ value: '2008', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_interval_since_fire_v1/interval_since_fire_2008.tif' }),
                        ui.Label({ value: '2009', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_interval_since_fire_v1/interval_since_fire_2009.tif' }),
                        ui.Label({ value: '2010', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_interval_since_fire_v1/interval_since_fire_2010.tif' }),
                        ui.Label({ value: '2011', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_interval_since_fire_v1/interval_since_fire_2011.tif' }),
                        ui.Label({ value: '2012', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_interval_since_fire_v1/interval_since_fire_2012.tif' }),
                        ui.Label({ value: '2013', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_interval_since_fire_v1/interval_since_fire_2013.tif' }),
                        ui.Label({ value: '2014', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_interval_since_fire_v1/interval_since_fire_2014.tif' }),
                        ui.Label({ value: '2015', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_interval_since_fire_v1/interval_since_fire_2015.tif' }),
                        ui.Label({ value: '2016', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_interval_since_fire_v1/interval_since_fire_2016.tif' }),
                        ui.Label({ value: '2017', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_interval_since_fire_v1/interval_since_fire_2017.tif' }),
                        ui.Label({ value: '2018', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_interval_since_fire_v1/interval_since_fire_2018.tif' }),
                        ui.Label({ value: '2019', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_interval_since_fire_v1/interval_since_fire_2019.tif' }),
                        ui.Label({ value: '2020', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_interval_since_fire_v1/interval_since_fire_2020.tif' }),
                        ui.Label({ value: '2021', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_interval_since_fire_v1/interval_since_fire_2021.tif' }),
                        ui.Label({ value: '2022', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_interval_since_fire_v1/interval_since_fire_2022.tif' }),
                        ui.Label({ value: '2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_interval_since_fire_v1/interval_since_fire_2023.tif' }),
                        ui.Label({ value: '2024', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_interval_since_fire_v1/interval_since_fire_2024.tif' }),
                        ui.Label({ value: '2025', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/brasil/collection_10/fire-col5/mapbiomas_fire_collection5_interval_since_fire_v1/interval_since_fire_2025.tif' }),
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
          // Indonesia links
           panel4: ui.Panel({
              widgets: [
                ui.Label('Indonesia fire col1: annual_burned'),
                ui.Panel({
                    widgets: [
                        ui.Label({ value: '2013', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ANNUAL_TOTAL/annual_burned_2013.tif' }),
                        ui.Label({ value: '2014', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ANNUAL_TOTAL/annual_burned_2014.tif' }),
                        ui.Label({ value: '2015', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ANNUAL_TOTAL/annual_burned_2015.tif' }),
                        ui.Label({ value: '2016', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ANNUAL_TOTAL/annual_burned_2016.tif' }),
                        ui.Label({ value: '2017', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ANNUAL_TOTAL/annual_burned_2017.tif' }),
                        ui.Label({ value: '2018', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ANNUAL_TOTAL/annual_burned_2018.tif' }),
                        ui.Label({ value: '2019', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ANNUAL_TOTAL/annual_burned_2019.tif' }),
                        ui.Label({ value: '2020', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ANNUAL_TOTAL/annual_burned_2020.tif' }),
                        ui.Label({ value: '2021', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ANNUAL_TOTAL/annual_burned_2021.tif' }),
                        ui.Label({ value: '2022', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ANNUAL_TOTAL/annual_burned_2022.tif' }),
                        ui.Label({ value: '2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ANNUAL_TOTAL/annual_burned_2023.tif' }),
                    ],
                    'layout': ui.Panel.Layout.flow('horizontal', true),
                    style: {
                        'border': '1px grey solid',
                        'margin': '0px 6px 0px 6px'
                    }
                }),
                ui.Label('Indonesia fire col1: annual_burned_coverage'),
                ui.Panel({
                    widgets: [
                        ui.Label({ value: '2013', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ANNUAL_COVERAGE/annual_burned_coverage_2013.tif'}),
                        ui.Label({ value: '2014', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ANNUAL_COVERAGE/annual_burned_coverage_2014.tif'}),
                        ui.Label({ value: '2015', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ANNUAL_COVERAGE/annual_burned_coverage_2015.tif'}),
                        ui.Label({ value: '2016', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ANNUAL_COVERAGE/annual_burned_coverage_2016.tif'}),
                        ui.Label({ value: '2017', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ANNUAL_COVERAGE/annual_burned_coverage_2017.tif'}),
                        ui.Label({ value: '2018', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ANNUAL_COVERAGE/annual_burned_coverage_2018.tif'}),
                        ui.Label({ value: '2019', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ANNUAL_COVERAGE/annual_burned_coverage_2019.tif'}),
                        ui.Label({ value: '2020', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ANNUAL_COVERAGE/annual_burned_coverage_2020.tif'}),
                        ui.Label({ value: '2021', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ANNUAL_COVERAGE/annual_burned_coverage_2021.tif'}),
                        ui.Label({ value: '2022', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ANNUAL_COVERAGE/annual_burned_coverage_2022.tif'}),
                        ui.Label({ value: '2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ANNUAL_COVERAGE/annual_burned_coverage_2023.tif'}),
                    ],
                    'layout': ui.Panel.Layout.flow('horizontal', true),
                    style: {
                        'border': '1px grey solid',
                        'margin': '0px 6px 0px 6px'
                    }
                }),
                ui.Label('Indonesia fire col1: monthly_burned'),
                ui.Panel({
                    widgets: [
                        ui.Label({ value: '2013', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_MONTHLY_TOTAL/monthly_burned_2013.tif' }),
                        ui.Label({ value: '2014', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_MONTHLY_TOTAL/monthly_burned_2014.tif' }),
                        ui.Label({ value: '2015', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_MONTHLY_TOTAL/monthly_burned_2015.tif' }),
                        ui.Label({ value: '2016', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_MONTHLY_TOTAL/monthly_burned_2016.tif' }),
                        ui.Label({ value: '2017', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_MONTHLY_TOTAL/monthly_burned_2017.tif' }),
                        ui.Label({ value: '2018', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_MONTHLY_TOTAL/monthly_burned_2018.tif' }),
                        ui.Label({ value: '2019', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_MONTHLY_TOTAL/monthly_burned_2019.tif' }),
                        ui.Label({ value: '2020', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_MONTHLY_TOTAL/monthly_burned_2020.tif' }),
                        ui.Label({ value: '2021', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_MONTHLY_TOTAL/monthly_burned_2021.tif' }),
                        ui.Label({ value: '2022', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_MONTHLY_TOTAL/monthly_burned_2022.tif' }),
                        ui.Label({ value: '2023', targetUrl: 'https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_MONTHLY_TOTAL/monthly_burned_2023.tif' }),
                    ],
                    'layout': ui.Panel.Layout.flow('horizontal', true),
                    style: {
                        'border': '1px grey solid',
                        'margin': '0px 6px 0px 6px'
                    }
                }),
                ui.Label('Indonesia fire col1: accumulated_burned_coverage'),
                ui.Panel({
                    widgets: [
                        ui.Label({ value: "2013_2013", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_2013_2013.tif"}),
                        ui.Label({ value: "2013_2014", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_2013_2014.tif"}),
                        ui.Label({ value: "2013_2015", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_2013_2015.tif"}),
                        ui.Label({ value: "2013_2016", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_2013_2016.tif"}),
                        ui.Label({ value: "2013_2017", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_2013_2017.tif"}),
                        ui.Label({ value: "2013_2018", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_2013_2018.tif"}),
                        ui.Label({ value: "2013_2019", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_2013_2019.tif"}),
                        ui.Label({ value: "2013_2020", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_2013_2020.tif"}),
                        ui.Label({ value: "2013_2021", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_2013_2021.tif"}),
                        ui.Label({ value: "2013_2022", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_2013_2022.tif"}),
                        ui.Label({ value: "2013_2023", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_2013_2023.tif"}),
                        ui.Label({ value: "2023_2023", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_2023_2023.tif"}),
                        ui.Label({ value: "2022_2023", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_2022_2023.tif"}),
                        ui.Label({ value: "2021_2023", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_2021_2023.tif"}),
                        ui.Label({ value: "2020_2023", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_2020_2023.tif"}),
                        ui.Label({ value: "2019_2023", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_2019_2023.tif"}),
                        ui.Label({ value: "2018_2023", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_2018_2023.tif"}),
                        ui.Label({ value: "2017_2023", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_2017_2023.tif"}),
                        ui.Label({ value: "2016_2023", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_2016_2023.tif"}),
                        ui.Label({ value: "2015_2023", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_2015_2023.tif"}),
                        ui.Label({ value: "2014_2023", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_2014_2023.tif"}),
                    ],
                    'layout': ui.Panel.Layout.flow('horizontal', true),
                    style: {
                        'border': '1px grey solid',
                        'margin': '0px 6px 0px 6px'
                    }
                }),
                ui.Label('Indonesia fire col1: accumulated_burned'),
                ui.Panel({
                    widgets: [
                        ui.Label({ value: "2013_2013", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_TOTAL/accumulated_burned_2013_2013.tif"}),
                        ui.Label({ value: "2013_2014", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_TOTAL/accumulated_burned_2013_2014.tif"}),
                        ui.Label({ value: "2013_2015", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_TOTAL/accumulated_burned_2013_2015.tif"}),
                        ui.Label({ value: "2013_2016", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_TOTAL/accumulated_burned_2013_2016.tif"}),
                        ui.Label({ value: "2013_2017", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_TOTAL/accumulated_burned_2013_2017.tif"}),
                        ui.Label({ value: "2013_2018", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_TOTAL/accumulated_burned_2013_2018.tif"}),
                        ui.Label({ value: "2013_2019", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_TOTAL/accumulated_burned_2013_2019.tif"}),
                        ui.Label({ value: "2013_2020", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_TOTAL/accumulated_burned_2013_2020.tif"}),
                        ui.Label({ value: "2013_2021", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_TOTAL/accumulated_burned_2013_2021.tif"}),
                        ui.Label({ value: "2013_2022", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_TOTAL/accumulated_burned_2013_2022.tif"}),
                        ui.Label({ value: "2013_2023", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_TOTAL/accumulated_burned_2013_2023.tif"}),
                        ui.Label({ value: "2023_2023", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_TOTAL/accumulated_burned_2023_2023.tif"}),
                        ui.Label({ value: "2022_2023", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_TOTAL/accumulated_burned_2022_2023.tif"}),
                        ui.Label({ value: "2021_2023", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_TOTAL/accumulated_burned_2021_2023.tif"}),
                        ui.Label({ value: "2020_2023", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_TOTAL/accumulated_burned_2020_2023.tif"}),
                        ui.Label({ value: "2019_2023", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_TOTAL/accumulated_burned_2019_2023.tif"}),
                        ui.Label({ value: "2018_2023", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_TOTAL/accumulated_burned_2018_2023.tif"}),
                        ui.Label({ value: "2017_2023", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_TOTAL/accumulated_burned_2017_2023.tif"}),
                        ui.Label({ value: "2016_2023", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_TOTAL/accumulated_burned_2016_2023.tif"}),
                        ui.Label({ value: "2015_2023", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_TOTAL/accumulated_burned_2015_2023.tif"}),
                        ui.Label({ value: "2014_2023", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_TOTAL/accumulated_burned_2014_2023.tif"}),
                  ],
                    'layout': ui.Panel.Layout.flow('horizontal', true),
                    style: {
                        'border': '1px grey solid',
                        'margin': '0px 6px 0px 6px'
                    }
                }),
                ui.Label('Indonesia fire col1: frequency_burned'),
                ui.Panel({
                    widgets: [
                        ui.Label({ value: "2013_2013", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_FREQUENCY_TOTAL/frequency_burned_2013_2013.tif"}),
                        ui.Label({ value: "2013_2014", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_FREQUENCY_TOTAL/frequency_burned_2013_2014.tif"}),
                        ui.Label({ value: "2013_2015", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_FREQUENCY_TOTAL/frequency_burned_2013_2015.tif"}),
                        ui.Label({ value: "2013_2016", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_FREQUENCY_TOTAL/frequency_burned_2013_2016.tif"}),
                        ui.Label({ value: "2013_2017", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_FREQUENCY_TOTAL/frequency_burned_2013_2017.tif"}),
                        ui.Label({ value: "2013_2018", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_FREQUENCY_TOTAL/frequency_burned_2013_2018.tif"}),
                        ui.Label({ value: "2013_2019", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_FREQUENCY_TOTAL/frequency_burned_2013_2019.tif"}),
                        ui.Label({ value: "2013_2020", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_FREQUENCY_TOTAL/frequency_burned_2013_2020.tif"}),
                        ui.Label({ value: "2013_2021", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_FREQUENCY_TOTAL/frequency_burned_2013_2021.tif"}),
                        ui.Label({ value: "2013_2022", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_FREQUENCY_TOTAL/frequency_burned_2013_2022.tif"}),
                        ui.Label({ value: "2013_2023", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_FREQUENCY_TOTAL/frequency_burned_2013_2023.tif"}),
                        ui.Label({ value: "2023_2023", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_FREQUENCY_TOTAL/frequency_burned_2023_2023.tif"}),
                        ui.Label({ value: "2022_2023", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_FREQUENCY_TOTAL/frequency_burned_2022_2023.tif"}),
                        ui.Label({ value: "2021_2023", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_FREQUENCY_TOTAL/frequency_burned_2021_2023.tif"}),
                        ui.Label({ value: "2020_2023", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_FREQUENCY_TOTAL/frequency_burned_2020_2023.tif"}),
                        ui.Label({ value: "2019_2023", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_FREQUENCY_TOTAL/frequency_burned_2019_2023.tif"}),
                        ui.Label({ value: "2018_2023", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_FREQUENCY_TOTAL/frequency_burned_2018_2023.tif"}),
                        ui.Label({ value: "2017_2023", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_FREQUENCY_TOTAL/frequency_burned_2017_2023.tif"}),
                        ui.Label({ value: "2016_2023", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_FREQUENCY_TOTAL/frequency_burned_2016_2023.tif"}),
                        ui.Label({ value: "2015_2023", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_FREQUENCY_TOTAL/frequency_burned_2015_2023.tif"}),
                        ui.Label({ value: "2014_2023", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_FREQUENCY_TOTAL/frequency_burned_2014_2023.tif"}),
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

          // Paraguay links
           panel5: ui.Panel({
              widgets: [
                ui.Label('Paraguay fire col1: annual_burned'),
                ui.Panel({
                    widgets:[
                        ui.Label({ value: '1999', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/annual_burned/annual_burned-burned_area_1999.tif' }),
                        ui.Label({ value: '2000', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/annual_burned/annual_burned-burned_area_2000.tif' }),
                        ui.Label({ value: '2001', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/annual_burned/annual_burned-burned_area_2001.tif' }),
                        ui.Label({ value: '2002', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/annual_burned/annual_burned-burned_area_2002.tif' }),
                        ui.Label({ value: '2003', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/annual_burned/annual_burned-burned_area_2003.tif' }),
                        ui.Label({ value: '2004', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/annual_burned/annual_burned-burned_area_2004.tif' }),
                        ui.Label({ value: '2005', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/annual_burned/annual_burned-burned_area_2005.tif' }),
                        ui.Label({ value: '2006', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/annual_burned/annual_burned-burned_area_2006.tif' }),
                        ui.Label({ value: '2007', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/annual_burned/annual_burned-burned_area_2007.tif' }),
                        ui.Label({ value: '2008', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/annual_burned/annual_burned-burned_area_2008.tif' }),
                        ui.Label({ value: '2009', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/annual_burned/annual_burned-burned_area_2009.tif' }),
                        ui.Label({ value: '2010', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/annual_burned/annual_burned-burned_area_2010.tif' }),
                        ui.Label({ value: '2011', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/annual_burned/annual_burned-burned_area_2011.tif' }),
                        ui.Label({ value: '2012', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/annual_burned/annual_burned-burned_area_2012.tif' }),
                        ui.Label({ value: '2013', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/annual_burned/annual_burned-burned_area_2013.tif' }),
                        ui.Label({ value: '2014', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/annual_burned/annual_burned-burned_area_2014.tif' }),
                        ui.Label({ value: '2015', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/annual_burned/annual_burned-burned_area_2015.tif' }),
                        ui.Label({ value: '2016', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/annual_burned/annual_burned-burned_area_2016.tif' }),
                        ui.Label({ value: '2017', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/annual_burned/annual_burned-burned_area_2017.tif' }),
                        ui.Label({ value: '2018', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/annual_burned/annual_burned-burned_area_2018.tif' }),
                        ui.Label({ value: '2019', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/annual_burned/annual_burned-burned_area_2019.tif' }),
                        ui.Label({ value: '2020', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/annual_burned/annual_burned-burned_area_2020.tif' }),
                        ui.Label({ value: '2021', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/annual_burned/annual_burned-burned_area_2021.tif' }),
                        ui.Label({ value: '2022', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/annual_burned/annual_burned-burned_area_2022.tif' }),
                        ui.Label({ value: '2023', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/annual_burned/annual_burned-burned_area_2023.tif' }),
                        ui.Label({ value: '2024', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/annual_burned/annual_burned-burned_area_2024.tif' }),
                    ],
                    'layout': ui.Panel.Layout.flow('horizontal', true),
                    style: {
                        'border': '1px grey solid',
                        'margin': '0px 6px 0px 6px'
                    }
                }),
                ui.Label('Paraguay fire col1: annual_burned_coverage'),
                ui.Panel({
                    widgets:[
                        ui.Label({ value: '1999', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/annual_burned_coverage/annual_burned_coverage-burned_coverage_1999.tif' }),
                        ui.Label({ value: '2000', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/annual_burned_coverage/annual_burned_coverage-burned_coverage_2000.tif' }),
                        ui.Label({ value: '2001', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/annual_burned_coverage/annual_burned_coverage-burned_coverage_2001.tif' }),
                        ui.Label({ value: '2002', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/annual_burned_coverage/annual_burned_coverage-burned_coverage_2002.tif' }),
                        ui.Label({ value: '2003', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/annual_burned_coverage/annual_burned_coverage-burned_coverage_2003.tif' }),
                        ui.Label({ value: '2004', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/annual_burned_coverage/annual_burned_coverage-burned_coverage_2004.tif' }),
                        ui.Label({ value: '2005', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/annual_burned_coverage/annual_burned_coverage-burned_coverage_2005.tif' }),
                        ui.Label({ value: '2006', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/annual_burned_coverage/annual_burned_coverage-burned_coverage_2006.tif' }),
                        ui.Label({ value: '2007', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/annual_burned_coverage/annual_burned_coverage-burned_coverage_2007.tif' }),
                        ui.Label({ value: '2008', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/annual_burned_coverage/annual_burned_coverage-burned_coverage_2008.tif' }),
                        ui.Label({ value: '2009', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/annual_burned_coverage/annual_burned_coverage-burned_coverage_2009.tif' }),
                        ui.Label({ value: '2010', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/annual_burned_coverage/annual_burned_coverage-burned_coverage_2010.tif' }),
                        ui.Label({ value: '2011', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/annual_burned_coverage/annual_burned_coverage-burned_coverage_2011.tif' }),
                        ui.Label({ value: '2012', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/annual_burned_coverage/annual_burned_coverage-burned_coverage_2012.tif' }),
                        ui.Label({ value: '2013', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/annual_burned_coverage/annual_burned_coverage-burned_coverage_2013.tif' }),
                        ui.Label({ value: '2014', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/annual_burned_coverage/annual_burned_coverage-burned_coverage_2014.tif' }),
                        ui.Label({ value: '2015', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/annual_burned_coverage/annual_burned_coverage-burned_coverage_2015.tif' }),
                        ui.Label({ value: '2016', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/annual_burned_coverage/annual_burned_coverage-burned_coverage_2016.tif' }),
                        ui.Label({ value: '2017', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/annual_burned_coverage/annual_burned_coverage-burned_coverage_2017.tif' }),
                        ui.Label({ value: '2018', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/annual_burned_coverage/annual_burned_coverage-burned_coverage_2018.tif' }),
                        ui.Label({ value: '2019', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/annual_burned_coverage/annual_burned_coverage-burned_coverage_2019.tif' }),
                        ui.Label({ value: '2020', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/annual_burned_coverage/annual_burned_coverage-burned_coverage_2020.tif' }),
                        ui.Label({ value: '2021', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/annual_burned_coverage/annual_burned_coverage-burned_coverage_2021.tif' }),
                        ui.Label({ value: '2022', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/annual_burned_coverage/annual_burned_coverage-burned_coverage_2022.tif' }),
                        ui.Label({ value: '2023', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/annual_burned_coverage/annual_burned_coverage-burned_coverage_2023.tif' }),
                        ui.Label({ value: '2024', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/annual_burned_coverage/annual_burned_coverage-burned_coverage_2024.tif' }),
                    ],
                    'layout': ui.Panel.Layout.flow('horizontal', true),
                    style: {
                        'border': '1px grey solid',
                        'margin': '0px 6px 0px 6px'
                    }
                }),
                ui.Label('Paraguay fire col1: monthly_burned'),
                ui.Panel({
                    widgets:[
                        ui.Label({ value: '1999', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/monthly_burned/monthly_burned-burned_monthly_1999.tif'}),
                        ui.Label({ value: '2000', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/monthly_burned/monthly_burned-burned_monthly_2000.tif'}),
                        ui.Label({ value: '2001', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/monthly_burned/monthly_burned-burned_monthly_2001.tif'}),
                        ui.Label({ value: '2002', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/monthly_burned/monthly_burned-burned_monthly_2002.tif'}),
                        ui.Label({ value: '2003', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/monthly_burned/monthly_burned-burned_monthly_2003.tif'}),
                        ui.Label({ value: '2004', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/monthly_burned/monthly_burned-burned_monthly_2004.tif'}),
                        ui.Label({ value: '2005', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/monthly_burned/monthly_burned-burned_monthly_2005.tif'}),
                        ui.Label({ value: '2006', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/monthly_burned/monthly_burned-burned_monthly_2006.tif'}),
                        ui.Label({ value: '2007', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/monthly_burned/monthly_burned-burned_monthly_2007.tif'}),
                        ui.Label({ value: '2008', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/monthly_burned/monthly_burned-burned_monthly_2008.tif'}),
                        ui.Label({ value: '2009', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/monthly_burned/monthly_burned-burned_monthly_2009.tif'}),
                        ui.Label({ value: '2010', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/monthly_burned/monthly_burned-burned_monthly_2010.tif'}),
                        ui.Label({ value: '2011', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/monthly_burned/monthly_burned-burned_monthly_2011.tif'}),
                        ui.Label({ value: '2012', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/monthly_burned/monthly_burned-burned_monthly_2012.tif'}),
                        ui.Label({ value: '2013', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/monthly_burned/monthly_burned-burned_monthly_2013.tif'}),
                        ui.Label({ value: '2014', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/monthly_burned/monthly_burned-burned_monthly_2014.tif'}),
                        ui.Label({ value: '2015', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/monthly_burned/monthly_burned-burned_monthly_2015.tif'}),
                        ui.Label({ value: '2016', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/monthly_burned/monthly_burned-burned_monthly_2016.tif'}),
                        ui.Label({ value: '2017', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/monthly_burned/monthly_burned-burned_monthly_2017.tif'}),
                        ui.Label({ value: '2018', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/monthly_burned/monthly_burned-burned_monthly_2018.tif'}),
                        ui.Label({ value: '2019', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/monthly_burned/monthly_burned-burned_monthly_2019.tif'}),
                        ui.Label({ value: '2020', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/monthly_burned/monthly_burned-burned_monthly_2020.tif'}),
                        ui.Label({ value: '2021', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/monthly_burned/monthly_burned-burned_monthly_2021.tif'}),
                        ui.Label({ value: '2022', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/monthly_burned/monthly_burned-burned_monthly_2022.tif'}),
                        ui.Label({ value: '2023', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/monthly_burned/monthly_burned-burned_monthly_2023.tif'}),
                        ui.Label({ value: '2024', targetUrl: 'https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/monthly_burned/monthly_burned-burned_monthly_2024.tif'})
                    ],
                    'layout': ui.Panel.Layout.flow('horizontal', true),
                    style: {
                        'border': '1px grey solid',
                        'margin': '0px 6px 0px 6px'
                    }
                }),
                ui.Label('Paraguay fire col1: accumulated_burned_coverage'),
                ui.Panel({
                    widgets: [                      
                      ui.Label({value: "1999_1999", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_1999_1999.tif"}),
                      ui.Label({value: "1999_2000", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_1999_2000.tif"}),
                      ui.Label({value: "1999_2001", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_1999_2001.tif"}),
                      ui.Label({value: "1999_2002", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_1999_2002.tif"}),
                      ui.Label({value: "1999_2003", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_1999_2003.tif"}),
                      ui.Label({value: "1999_2004", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_1999_2004.tif"}),
                      ui.Label({value: "1999_2005", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_1999_2005.tif"}),
                      ui.Label({value: "1999_2006", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_1999_2006.tif"}),
                      ui.Label({value: "1999_2007", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_1999_2007.tif"}),
                      ui.Label({value: "1999_2008", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_1999_2008.tif"}),
                      ui.Label({value: "1999_2009", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_1999_2009.tif"}),
                      ui.Label({value: "1999_2010", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_1999_2010.tif"}),
                      ui.Label({value: "1999_2011", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_1999_2011.tif"}),
                      ui.Label({value: "1999_2012", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_1999_2012.tif"}),
                      ui.Label({value: "1999_2013", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_1999_2013.tif"}),
                      ui.Label({value: "1999_2014", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_1999_2014.tif"}),
                      ui.Label({value: "1999_2015", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_1999_2015.tif"}),
                      ui.Label({value: "1999_2016", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_1999_2016.tif"}),
                      ui.Label({value: "1999_2017", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_1999_2017.tif"}),
                      ui.Label({value: "1999_2018", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_1999_2018.tif"}),
                      ui.Label({value: "1999_2019", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_1999_2019.tif"}),
                      ui.Label({value: "1999_2020", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_1999_2020.tif"}),
                      ui.Label({value: "1999_2021", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_1999_2021.tif"}),
                      ui.Label({value: "1999_2022", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_1999_2022.tif"}),
                      ui.Label({value: "1999_2023", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_1999_2023.tif"}),
                      ui.Label({value: "1999_2024", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_1999_2024.tif"}),
                      ui.Label({value: "2000_2024", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_2000_2024.tif"}),
                      ui.Label({value: "2001_2024", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_2001_2024.tif"}),
                      ui.Label({value: "2002_2024", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_2002_2024.tif"}),
                      ui.Label({value: "2003_2024", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_2003_2024.tif"}),
                      ui.Label({value: "2004_2024", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_2004_2024.tif"}),
                      ui.Label({value: "2005_2024", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_2005_2024.tif"}),
                      ui.Label({value: "2006_2024", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_2006_2024.tif"}),
                      ui.Label({value: "2007_2024", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_2007_2024.tif"}),
                      ui.Label({value: "2008_2024", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_2008_2024.tif"}),
                      ui.Label({value: "2009_2024", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_2009_2024.tif"}),
                      ui.Label({value: "2010_2024", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_2010_2024.tif"}),
                      ui.Label({value: "2011_2024", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_2011_2024.tif"}),
                      ui.Label({value: "2012_2024", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_2012_2024.tif"}),
                      ui.Label({value: "2013_2024", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_2013_2024.tif"}),
                      ui.Label({value: "2014_2024", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_2014_2024.tif"}),
                      ui.Label({value: "2015_2024", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_2015_2024.tif"}),
                      ui.Label({value: "2016_2024", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_2016_2024.tif"}),
                      ui.Label({value: "2017_2024", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_2017_2024.tif"}),
                      ui.Label({value: "2018_2024", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_2018_2024.tif"}),
                      ui.Label({value: "2019_2024", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_2019_2024.tif"}),
                      ui.Label({value: "2020_2024", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_2020_2024.tif"}),
                      ui.Label({value: "2021_2024", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_2021_2024.tif"}),
                      ui.Label({value: "2022_2024", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_2022_2024.tif"}),
                      ui.Label({value: "2023_2024", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_2023_2024.tif"}),
                      ui.Label({value: "2024_2024", targetUrl: "https://storage.googleapis.com/mapbiomas-public/initiatives/indonesia/collection_2/fire-col1/fire-simplifed/FIRE_ACCUMULATED_COVERAGE/accumulated_burned_coverage_2024_2024.tif"}),
                  ],
                  'layout': ui.Panel.Layout.flow('horizontal', true),
                  style: {
                      'border': '1px grey solid',
                      'margin': '0px 6px 0px 6px'
                  }
                }),
                ui.Label('Paraguay fire col1: accumulated_burned'),
                ui.Panel({
                    widgets: [                      
                      ui.Label({value: "1999_1999", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/accumulated_burned/accumulated_burned-fire_accumulated_1999_1999.tif"}),
                      ui.Label({value: "1999_2000", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/accumulated_burned/accumulated_burned-fire_accumulated_1999_2000.tif"}),
                      ui.Label({value: "1999_2001", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/accumulated_burned/accumulated_burned-fire_accumulated_1999_2001.tif"}),
                      ui.Label({value: "1999_2002", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/accumulated_burned/accumulated_burned-fire_accumulated_1999_2002.tif"}),
                      ui.Label({value: "1999_2003", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/accumulated_burned/accumulated_burned-fire_accumulated_1999_2003.tif"}),
                      ui.Label({value: "1999_2004", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/accumulated_burned/accumulated_burned-fire_accumulated_1999_2004.tif"}),
                      ui.Label({value: "1999_2005", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/accumulated_burned/accumulated_burned-fire_accumulated_1999_2005.tif"}),
                      ui.Label({value: "1999_2006", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/accumulated_burned/accumulated_burned-fire_accumulated_1999_2006.tif"}),
                      ui.Label({value: "1999_2007", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/accumulated_burned/accumulated_burned-fire_accumulated_1999_2007.tif"}),
                      ui.Label({value: "1999_2008", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/accumulated_burned/accumulated_burned-fire_accumulated_1999_2008.tif"}),
                      ui.Label({value: "1999_2009", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/accumulated_burned/accumulated_burned-fire_accumulated_1999_2009.tif"}),
                      ui.Label({value: "1999_2010", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/accumulated_burned/accumulated_burned-fire_accumulated_1999_2010.tif"}),
                      ui.Label({value: "1999_2011", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/accumulated_burned/accumulated_burned-fire_accumulated_1999_2011.tif"}),
                      ui.Label({value: "1999_2012", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/accumulated_burned/accumulated_burned-fire_accumulated_1999_2012.tif"}),
                      ui.Label({value: "1999_2013", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/accumulated_burned/accumulated_burned-fire_accumulated_1999_2013.tif"}),
                      ui.Label({value: "1999_2014", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/accumulated_burned/accumulated_burned-fire_accumulated_1999_2014.tif"}),
                      ui.Label({value: "1999_2015", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/accumulated_burned/accumulated_burned-fire_accumulated_1999_2015.tif"}),
                      ui.Label({value: "1999_2016", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/accumulated_burned/accumulated_burned-fire_accumulated_1999_2016.tif"}),
                      ui.Label({value: "1999_2017", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/accumulated_burned/accumulated_burned-fire_accumulated_1999_2017.tif"}),
                      ui.Label({value: "1999_2018", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/accumulated_burned/accumulated_burned-fire_accumulated_1999_2018.tif"}),
                      ui.Label({value: "1999_2019", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/accumulated_burned/accumulated_burned-fire_accumulated_1999_2019.tif"}),
                      ui.Label({value: "1999_2020", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/accumulated_burned/accumulated_burned-fire_accumulated_1999_2020.tif"}),
                      ui.Label({value: "1999_2021", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/accumulated_burned/accumulated_burned-fire_accumulated_1999_2021.tif"}),
                      ui.Label({value: "1999_2022", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/accumulated_burned/accumulated_burned-fire_accumulated_1999_2022.tif"}),
                      ui.Label({value: "1999_2023", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/accumulated_burned/accumulated_burned-fire_accumulated_1999_2023.tif"}),
                      ui.Label({value: "1999_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/accumulated_burned/accumulated_burned-fire_accumulated_1999_2024.tif"}),
                      ui.Label({value: "2000_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/accumulated_burned/accumulated_burned-fire_accumulated_2000_2024.tif"}),
                      ui.Label({value: "2001_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/accumulated_burned/accumulated_burned-fire_accumulated_2001_2024.tif"}),
                      ui.Label({value: "2002_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/accumulated_burned/accumulated_burned-fire_accumulated_2002_2024.tif"}),
                      ui.Label({value: "2003_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/accumulated_burned/accumulated_burned-fire_accumulated_2003_2024.tif"}),
                      ui.Label({value: "2004_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/accumulated_burned/accumulated_burned-fire_accumulated_2004_2024.tif"}),
                      ui.Label({value: "2005_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/accumulated_burned/accumulated_burned-fire_accumulated_2005_2024.tif"}),
                      ui.Label({value: "2006_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/accumulated_burned/accumulated_burned-fire_accumulated_2006_2024.tif"}),
                      ui.Label({value: "2007_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/accumulated_burned/accumulated_burned-fire_accumulated_2007_2024.tif"}),
                      ui.Label({value: "2008_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/accumulated_burned/accumulated_burned-fire_accumulated_2008_2024.tif"}),
                      ui.Label({value: "2009_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/accumulated_burned/accumulated_burned-fire_accumulated_2009_2024.tif"}),
                      ui.Label({value: "2010_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/accumulated_burned/accumulated_burned-fire_accumulated_2010_2024.tif"}),
                      ui.Label({value: "2011_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/accumulated_burned/accumulated_burned-fire_accumulated_2011_2024.tif"}),
                      ui.Label({value: "2012_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/accumulated_burned/accumulated_burned-fire_accumulated_2012_2024.tif"}),
                      ui.Label({value: "2013_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/accumulated_burned/accumulated_burned-fire_accumulated_2013_2024.tif"}),
                      ui.Label({value: "2014_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/accumulated_burned/accumulated_burned-fire_accumulated_2014_2024.tif"}),
                      ui.Label({value: "2015_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/accumulated_burned/accumulated_burned-fire_accumulated_2015_2024.tif"}),
                      ui.Label({value: "2016_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/accumulated_burned/accumulated_burned-fire_accumulated_2016_2024.tif"}),
                      ui.Label({value: "2017_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/accumulated_burned/accumulated_burned-fire_accumulated_2017_2024.tif"}),
                      ui.Label({value: "2018_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/accumulated_burned/accumulated_burned-fire_accumulated_2018_2024.tif"}),
                      ui.Label({value: "2019_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/accumulated_burned/accumulated_burned-fire_accumulated_2019_2024.tif"}),
                      ui.Label({value: "2020_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/accumulated_burned/accumulated_burned-fire_accumulated_2020_2024.tif"}),
                      ui.Label({value: "2021_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/accumulated_burned/accumulated_burned-fire_accumulated_2021_2024.tif"}),
                      ui.Label({value: "2022_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/accumulated_burned/accumulated_burned-fire_accumulated_2022_2024.tif"}),
                      ui.Label({value: "2023_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/accumulated_burned/accumulated_burned-fire_accumulated_2023_2024.tif"}),
                      ui.Label({value: "2024_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/accumulated_burned/accumulated_burned-fire_accumulated_2024_2024.tif"}),
                  ],
                  'layout': ui.Panel.Layout.flow('horizontal', true),
                  style: {
                      'border': '1px grey solid',
                      'margin': '0px 6px 0px 6px'
                  }
                }),
                ui.Label('Paraguay fire col1: frequency_burned'),
                ui.Panel({
                    widgets: [                      
                      ui.Label({value: "1999_1999", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/fire_frequency/fire_frequency-fire_frequency_1999_1999.tif"}),
                      ui.Label({value: "1999_2000", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/fire_frequency/fire_frequency-fire_frequency_1999_2000.tif"}),
                      ui.Label({value: "1999_2001", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/fire_frequency/fire_frequency-fire_frequency_1999_2001.tif"}),
                      ui.Label({value: "1999_2002", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/fire_frequency/fire_frequency-fire_frequency_1999_2002.tif"}),
                      ui.Label({value: "1999_2003", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/fire_frequency/fire_frequency-fire_frequency_1999_2003.tif"}),
                      ui.Label({value: "1999_2004", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/fire_frequency/fire_frequency-fire_frequency_1999_2004.tif"}),
                      ui.Label({value: "1999_2005", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/fire_frequency/fire_frequency-fire_frequency_1999_2005.tif"}),
                      ui.Label({value: "1999_2006", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/fire_frequency/fire_frequency-fire_frequency_1999_2006.tif"}),
                      ui.Label({value: "1999_2007", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/fire_frequency/fire_frequency-fire_frequency_1999_2007.tif"}),
                      ui.Label({value: "1999_2008", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/fire_frequency/fire_frequency-fire_frequency_1999_2008.tif"}),
                      ui.Label({value: "1999_2009", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/fire_frequency/fire_frequency-fire_frequency_1999_2009.tif"}),
                      ui.Label({value: "1999_2010", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/fire_frequency/fire_frequency-fire_frequency_1999_2010.tif"}),
                      ui.Label({value: "1999_2011", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/fire_frequency/fire_frequency-fire_frequency_1999_2011.tif"}),
                      ui.Label({value: "1999_2012", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/fire_frequency/fire_frequency-fire_frequency_1999_2012.tif"}),
                      ui.Label({value: "1999_2013", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/fire_frequency/fire_frequency-fire_frequency_1999_2013.tif"}),
                      ui.Label({value: "1999_2014", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/fire_frequency/fire_frequency-fire_frequency_1999_2014.tif"}),
                      ui.Label({value: "1999_2015", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/fire_frequency/fire_frequency-fire_frequency_1999_2015.tif"}),
                      ui.Label({value: "1999_2016", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/fire_frequency/fire_frequency-fire_frequency_1999_2016.tif"}),
                      ui.Label({value: "1999_2017", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/fire_frequency/fire_frequency-fire_frequency_1999_2017.tif"}),
                      ui.Label({value: "1999_2018", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/fire_frequency/fire_frequency-fire_frequency_1999_2018.tif"}),
                      ui.Label({value: "1999_2019", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/fire_frequency/fire_frequency-fire_frequency_1999_2019.tif"}),
                      ui.Label({value: "1999_2020", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/fire_frequency/fire_frequency-fire_frequency_1999_2020.tif"}),
                      ui.Label({value: "1999_2021", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/fire_frequency/fire_frequency-fire_frequency_1999_2021.tif"}),
                      ui.Label({value: "1999_2022", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/fire_frequency/fire_frequency-fire_frequency_1999_2022.tif"}),
                      ui.Label({value: "1999_2023", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/fire_frequency/fire_frequency-fire_frequency_1999_2023.tif"}),
                      ui.Label({value: "1999_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/fire_frequency/fire_frequency-fire_frequency_1999_2024.tif"}),
                      ui.Label({value: "2000_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/fire_frequency/fire_frequency-fire_frequency_2000_2024.tif"}),
                      ui.Label({value: "2001_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/fire_frequency/fire_frequency-fire_frequency_2001_2024.tif"}),
                      ui.Label({value: "2002_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/fire_frequency/fire_frequency-fire_frequency_2002_2024.tif"}),
                      ui.Label({value: "2003_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/fire_frequency/fire_frequency-fire_frequency_2003_2024.tif"}),
                      ui.Label({value: "2004_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/fire_frequency/fire_frequency-fire_frequency_2004_2024.tif"}),
                      ui.Label({value: "2005_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/fire_frequency/fire_frequency-fire_frequency_2005_2024.tif"}),
                      ui.Label({value: "2006_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/fire_frequency/fire_frequency-fire_frequency_2006_2024.tif"}),
                      ui.Label({value: "2007_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/fire_frequency/fire_frequency-fire_frequency_2007_2024.tif"}),
                      ui.Label({value: "2008_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/fire_frequency/fire_frequency-fire_frequency_2008_2024.tif"}),
                      ui.Label({value: "2009_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/fire_frequency/fire_frequency-fire_frequency_2009_2024.tif"}),
                      ui.Label({value: "2010_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/fire_frequency/fire_frequency-fire_frequency_2010_2024.tif"}),
                      ui.Label({value: "2011_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/fire_frequency/fire_frequency-fire_frequency_2011_2024.tif"}),
                      ui.Label({value: "2012_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/fire_frequency/fire_frequency-fire_frequency_2012_2024.tif"}),
                      ui.Label({value: "2013_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/fire_frequency/fire_frequency-fire_frequency_2013_2024.tif"}),
                      ui.Label({value: "2014_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/fire_frequency/fire_frequency-fire_frequency_2014_2024.tif"}),
                      ui.Label({value: "2015_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/fire_frequency/fire_frequency-fire_frequency_2015_2024.tif"}),
                      ui.Label({value: "2016_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/fire_frequency/fire_frequency-fire_frequency_2016_2024.tif"}),
                      ui.Label({value: "2017_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/fire_frequency/fire_frequency-fire_frequency_2017_2024.tif"}),
                      ui.Label({value: "2018_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/fire_frequency/fire_frequency-fire_frequency_2018_2024.tif"}),
                      ui.Label({value: "2019_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/fire_frequency/fire_frequency-fire_frequency_2019_2024.tif"}),
                      ui.Label({value: "2020_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/fire_frequency/fire_frequency-fire_frequency_2020_2024.tif"}),
                      ui.Label({value: "2021_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/fire_frequency/fire_frequency-fire_frequency_2021_2024.tif"}),
                      ui.Label({value: "2022_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/fire_frequency/fire_frequency-fire_frequency_2022_2024.tif"}),
                      ui.Label({value: "2023_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/fire_frequency/fire_frequency-fire_frequency_2023_2024.tif"}),
                      ui.Label({value: "2024_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PARAGUAY/COLLECTION1/FIRE/fire_frequency/fire_frequency-fire_frequency_2024_2024.tif"}),
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
          // Peru links
           panel6: ui.Panel({
              widgets: [
                ui.Label('Peru fire col1: annual_burned'),
                ui.Panel({
                    widgets: [
                      ui.Label({value: "2013", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_annual_burned/mbfire_col1_peru_annual_burned-burned_area_2013.tif"}),
                      ui.Label({value: "2014", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_annual_burned/mbfire_col1_peru_annual_burned-burned_area_2014.tif"}),
                      ui.Label({value: "2015", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_annual_burned/mbfire_col1_peru_annual_burned-burned_area_2015.tif"}),
                      ui.Label({value: "2016", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_annual_burned/mbfire_col1_peru_annual_burned-burned_area_2016.tif"}),
                      ui.Label({value: "2017", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_annual_burned/mbfire_col1_peru_annual_burned-burned_area_2017.tif"}),
                      ui.Label({value: "2018", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_annual_burned/mbfire_col1_peru_annual_burned-burned_area_2018.tif"}),
                      ui.Label({value: "2019", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_annual_burned/mbfire_col1_peru_annual_burned-burned_area_2019.tif"}),
                      ui.Label({value: "2020", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_annual_burned/mbfire_col1_peru_annual_burned-burned_area_2020.tif"}),
                      ui.Label({value: "2021", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_annual_burned/mbfire_col1_peru_annual_burned-burned_area_2021.tif"}),
                      ui.Label({value: "2022", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_annual_burned/mbfire_col1_peru_annual_burned-burned_area_2022.tif"}),
                      ui.Label({value: "2023", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_annual_burned/mbfire_col1_peru_annual_burned-burned_area_2023.tif"}),
                      ui.Label({value: "2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_annual_burned/mbfire_col1_peru_annual_burned-burned_area_2024.tif"}),
                    ],
                    'layout': ui.Panel.Layout.flow('horizontal', true),
                    style: {
                        'border': '1px grey solid',
                        'margin': '0px 6px 0px 6px'
                    }
                }),

                ui.Label('Peru fire col1: annual_burned_coverage'),
                ui.Panel({
                    widgets: [
                      ui.Label({value: "2013", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_annual_burned_coverage/mbfire_col1_peru_annual_burned_coverage-burned_coverage_2013.tif"}),
                      ui.Label({value: "2014", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_annual_burned_coverage/mbfire_col1_peru_annual_burned_coverage-burned_coverage_2014.tif"}),
                      ui.Label({value: "2015", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_annual_burned_coverage/mbfire_col1_peru_annual_burned_coverage-burned_coverage_2015.tif"}),
                      ui.Label({value: "2016", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_annual_burned_coverage/mbfire_col1_peru_annual_burned_coverage-burned_coverage_2016.tif"}),
                      ui.Label({value: "2017", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_annual_burned_coverage/mbfire_col1_peru_annual_burned_coverage-burned_coverage_2017.tif"}),
                      ui.Label({value: "2018", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_annual_burned_coverage/mbfire_col1_peru_annual_burned_coverage-burned_coverage_2018.tif"}),
                      ui.Label({value: "2019", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_annual_burned_coverage/mbfire_col1_peru_annual_burned_coverage-burned_coverage_2019.tif"}),
                      ui.Label({value: "2020", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_annual_burned_coverage/mbfire_col1_peru_annual_burned_coverage-burned_coverage_2020.tif"}),
                      ui.Label({value: "2021", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_annual_burned_coverage/mbfire_col1_peru_annual_burned_coverage-burned_coverage_2021.tif"}),
                      ui.Label({value: "2022", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_annual_burned_coverage/mbfire_col1_peru_annual_burned_coverage-burned_coverage_2022.tif"}),
                      ui.Label({value: "2023", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_annual_burned_coverage/mbfire_col1_peru_annual_burned_coverage-burned_coverage_2023.tif"}),
                      ui.Label({value: "2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_annual_burned_coverage/mbfire_col1_peru_annual_burned_coverage-burned_coverage_2024.tif"}),
                    ],
                    'layout': ui.Panel.Layout.flow('horizontal', true),
                    style: {
                        'border': '1px grey solid',
                        'margin': '0px 6px 0px 6px'
                    }
                }),
                ui.Label('Peru fire col1: monthly_burned'),
                ui.Panel({
                    widgets: [
                      ui.Label({value: "2013", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_monthly_burned/mbfire_col1_peru_monthly_burned-burned_monthly_2013.tif"}),
                      ui.Label({value: "2014", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_monthly_burned/mbfire_col1_peru_monthly_burned-burned_monthly_2014.tif"}),
                      ui.Label({value: "2015", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_monthly_burned/mbfire_col1_peru_monthly_burned-burned_monthly_2015.tif"}),
                      ui.Label({value: "2016", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_monthly_burned/mbfire_col1_peru_monthly_burned-burned_monthly_2016.tif"}),
                      ui.Label({value: "2017", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_monthly_burned/mbfire_col1_peru_monthly_burned-burned_monthly_2017.tif"}),
                      ui.Label({value: "2018", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_monthly_burned/mbfire_col1_peru_monthly_burned-burned_monthly_2018.tif"}),
                      ui.Label({value: "2019", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_monthly_burned/mbfire_col1_peru_monthly_burned-burned_monthly_2019.tif"}),
                      ui.Label({value: "2020", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_monthly_burned/mbfire_col1_peru_monthly_burned-burned_monthly_2020.tif"}),
                      ui.Label({value: "2021", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_monthly_burned/mbfire_col1_peru_monthly_burned-burned_monthly_2021.tif"}),
                      ui.Label({value: "2022", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_monthly_burned/mbfire_col1_peru_monthly_burned-burned_monthly_2022.tif"}),
                      ui.Label({value: "2023", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_monthly_burned/mbfire_col1_peru_monthly_burned-burned_monthly_2023.tif"}),
                      ui.Label({value: "2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_monthly_burned/mbfire_col1_peru_monthly_burned-burned_monthly_2024.tif"}),

                    ],
                    'layout': ui.Panel.Layout.flow('horizontal', true),
                    style: {
                        'border': '1px grey solid',
                        'margin': '0px 6px 0px 6px'
                    }
                }),
                ui.Label('Peru fire col1: annual_burned_scar_size_range'),
                ui.Panel({
                    widgets: [
                      ui.Label({value: "2013", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_annual_burned_scar_size_range/mbfire_col1_peru_annual_burned_scar_size_range-scar_area_ha_2013.tif"}),
                      ui.Label({value: "2014", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_annual_burned_scar_size_range/mbfire_col1_peru_annual_burned_scar_size_range-scar_area_ha_2014.tif"}),
                      ui.Label({value: "2015", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_annual_burned_scar_size_range/mbfire_col1_peru_annual_burned_scar_size_range-scar_area_ha_2015.tif"}),
                      ui.Label({value: "2016", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_annual_burned_scar_size_range/mbfire_col1_peru_annual_burned_scar_size_range-scar_area_ha_2016.tif"}),
                      ui.Label({value: "2017", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_annual_burned_scar_size_range/mbfire_col1_peru_annual_burned_scar_size_range-scar_area_ha_2017.tif"}),
                      ui.Label({value: "2018", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_annual_burned_scar_size_range/mbfire_col1_peru_annual_burned_scar_size_range-scar_area_ha_2018.tif"}),
                      ui.Label({value: "2019", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_annual_burned_scar_size_range/mbfire_col1_peru_annual_burned_scar_size_range-scar_area_ha_2019.tif"}),
                      ui.Label({value: "2020", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_annual_burned_scar_size_range/mbfire_col1_peru_annual_burned_scar_size_range-scar_area_ha_2020.tif"}),
                      ui.Label({value: "2021", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_annual_burned_scar_size_range/mbfire_col1_peru_annual_burned_scar_size_range-scar_area_ha_2021.tif"}),
                      ui.Label({value: "2022", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_annual_burned_scar_size_range/mbfire_col1_peru_annual_burned_scar_size_range-scar_area_ha_2022.tif"}),
                      ui.Label({value: "2023", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_annual_burned_scar_size_range/mbfire_col1_peru_annual_burned_scar_size_range-scar_area_ha_2023.tif"}),
                      ui.Label({value: "2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_annual_burned_scar_size_range/mbfire_col1_peru_annual_burned_scar_size_range-scar_area_ha_2024.tif"}),

                    ],
                    'layout': ui.Panel.Layout.flow('horizontal', true),
                    style: {
                        'border': '1px grey solid',
                        'margin': '0px 6px 0px 6px'
                    }
                }),
                ui.Label('Peru fire col1: annual_burned_scar_area_ha'),
                ui.Panel({
                    widgets: [
                      ui.Label({value: "2013", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_annual_burned_area_ha/mbfire_col1_peru_annual_burned_area_ha-scar_area_ha_2013.tif"}),
                      ui.Label({value: "2014", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_annual_burned_area_ha/mbfire_col1_peru_annual_burned_area_ha-scar_area_ha_2014.tif"}),
                      ui.Label({value: "2015", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_annual_burned_area_ha/mbfire_col1_peru_annual_burned_area_ha-scar_area_ha_2015.tif"}),
                      ui.Label({value: "2016", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_annual_burned_area_ha/mbfire_col1_peru_annual_burned_area_ha-scar_area_ha_2016.tif"}),
                      ui.Label({value: "2017", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_annual_burned_area_ha/mbfire_col1_peru_annual_burned_area_ha-scar_area_ha_2017.tif"}),
                      ui.Label({value: "2018", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_annual_burned_area_ha/mbfire_col1_peru_annual_burned_area_ha-scar_area_ha_2018.tif"}),
                      ui.Label({value: "2019", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_annual_burned_area_ha/mbfire_col1_peru_annual_burned_area_ha-scar_area_ha_2019.tif"}),
                      ui.Label({value: "2020", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_annual_burned_area_ha/mbfire_col1_peru_annual_burned_area_ha-scar_area_ha_2020.tif"}),
                      ui.Label({value: "2021", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_annual_burned_area_ha/mbfire_col1_peru_annual_burned_area_ha-scar_area_ha_2021.tif"}),
                      ui.Label({value: "2022", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_annual_burned_area_ha/mbfire_col1_peru_annual_burned_area_ha-scar_area_ha_2022.tif"}),
                      ui.Label({value: "2023", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_annual_burned_area_ha/mbfire_col1_peru_annual_burned_area_ha-scar_area_ha_2023.tif"}),
                      ui.Label({value: "2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_annual_burned_area_ha/mbfire_col1_peru_annual_burned_area_ha-scar_area_ha_2024.tif"}),

                    ],
                    'layout': ui.Panel.Layout.flow('horizontal', true),
                    style: {
                        'border': '1px grey solid',
                        'margin': '0px 6px 0px 6px'
                    }
                }),
                ui.Label('Peru fire col1: year_last_fire'),
                ui.Panel({
                    widgets: [
                      ui.Label({value: "2014", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_year_last_fire/mbfire_col1_peru_year_last_fire-classification_2014.tif"}),
                      ui.Label({value: "2015", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_year_last_fire/mbfire_col1_peru_year_last_fire-classification_2015.tif"}),
                      ui.Label({value: "2016", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_year_last_fire/mbfire_col1_peru_year_last_fire-classification_2016.tif"}),
                      ui.Label({value: "2017", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_year_last_fire/mbfire_col1_peru_year_last_fire-classification_2017.tif"}),
                      ui.Label({value: "2018", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_year_last_fire/mbfire_col1_peru_year_last_fire-classification_2018.tif"}),
                      ui.Label({value: "2019", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_year_last_fire/mbfire_col1_peru_year_last_fire-classification_2019.tif"}),
                      ui.Label({value: "2020", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_year_last_fire/mbfire_col1_peru_year_last_fire-classification_2020.tif"}),
                      ui.Label({value: "2021", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_year_last_fire/mbfire_col1_peru_year_last_fire-classification_2021.tif"}),
                      ui.Label({value: "2022", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_year_last_fire/mbfire_col1_peru_year_last_fire-classification_2022.tif"}),
                      ui.Label({value: "2023", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_year_last_fire/mbfire_col1_peru_year_last_fire-classification_2023.tif"}),
                      ui.Label({value: "2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_year_last_fire/mbfire_col1_peru_year_last_fire-classification_2024.tif"}),
                      ui.Label({value: "2025", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_year_last_fire/mbfire_col1_peru_year_last_fire-classification_2025.tif"}),
                    ],
                    'layout': ui.Panel.Layout.flow('horizontal', true),
                    style: {
                        'border': '1px grey solid',
                        'margin': '0px 6px 0px 6px'
                    }
                }),
                ui.Label('Peru fire col1: accumulated_burned'),
                ui.Panel({
                    widgets: [
                      ui.Label({value: "2013_2013", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_accumulated_burned/mbfire_col1_peru_accumulated_burned-fire_accumulated_2013_2013.tif"}),
                      ui.Label({value: "2013_2014", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_accumulated_burned/mbfire_col1_peru_accumulated_burned-fire_accumulated_2013_2014.tif"}),
                      ui.Label({value: "2013_2015", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_accumulated_burned/mbfire_col1_peru_accumulated_burned-fire_accumulated_2013_2015.tif"}),
                      ui.Label({value: "2013_2016", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_accumulated_burned/mbfire_col1_peru_accumulated_burned-fire_accumulated_2013_2016.tif"}),
                      ui.Label({value: "2013_2017", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_accumulated_burned/mbfire_col1_peru_accumulated_burned-fire_accumulated_2013_2017.tif"}),
                      ui.Label({value: "2013_2018", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_accumulated_burned/mbfire_col1_peru_accumulated_burned-fire_accumulated_2013_2018.tif"}),
                      ui.Label({value: "2013_2019", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_accumulated_burned/mbfire_col1_peru_accumulated_burned-fire_accumulated_2013_2019.tif"}),
                      ui.Label({value: "2013_2020", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_accumulated_burned/mbfire_col1_peru_accumulated_burned-fire_accumulated_2013_2020.tif"}),
                      ui.Label({value: "2013_2021", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_accumulated_burned/mbfire_col1_peru_accumulated_burned-fire_accumulated_2013_2021.tif"}),
                      ui.Label({value: "2013_2022", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_accumulated_burned/mbfire_col1_peru_accumulated_burned-fire_accumulated_2013_2022.tif"}),
                      ui.Label({value: "2013_2023", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_accumulated_burned/mbfire_col1_peru_accumulated_burned-fire_accumulated_2013_2023.tif"}),
                      ui.Label({value: "2013_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_accumulated_burned/mbfire_col1_peru_accumulated_burned-fire_accumulated_2013_2024.tif"}),
                      ui.Label({value: "2014_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_accumulated_burned/mbfire_col1_peru_accumulated_burned-fire_accumulated_2014_2024.tif"}),
                      ui.Label({value: "2015_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_accumulated_burned/mbfire_col1_peru_accumulated_burned-fire_accumulated_2015_2024.tif"}),
                      ui.Label({value: "2016_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_accumulated_burned/mbfire_col1_peru_accumulated_burned-fire_accumulated_2016_2024.tif"}),
                      ui.Label({value: "2017_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_accumulated_burned/mbfire_col1_peru_accumulated_burned-fire_accumulated_2017_2024.tif"}),
                      ui.Label({value: "2018_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_accumulated_burned/mbfire_col1_peru_accumulated_burned-fire_accumulated_2018_2024.tif"}),
                      ui.Label({value: "2019_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_accumulated_burned/mbfire_col1_peru_accumulated_burned-fire_accumulated_2019_2024.tif"}),
                      ui.Label({value: "2020_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_accumulated_burned/mbfire_col1_peru_accumulated_burned-fire_accumulated_2020_2024.tif"}),
                      ui.Label({value: "2021_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_accumulated_burned/mbfire_col1_peru_accumulated_burned-fire_accumulated_2021_2024.tif"}),
                      ui.Label({value: "2022_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_accumulated_burned/mbfire_col1_peru_accumulated_burned-fire_accumulated_2022_2024.tif"}),
                      ui.Label({value: "2023_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_accumulated_burned/mbfire_col1_peru_accumulated_burned-fire_accumulated_2023_2024.tif"}),
                      ui.Label({value: "2024_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_accumulated_burned/mbfire_col1_peru_accumulated_burned-fire_accumulated_2024_2024.tif"}),

                    ],
                    'layout': ui.Panel.Layout.flow('horizontal', true),
                    style: {
                        'border': '1px grey solid',
                        'margin': '0px 6px 0px 6px'
                    }
                }),
                ui.Label('Peru fire col1: accumulated_burned_coverage'),
                ui.Panel({
                    widgets: [
                      ui.Label({value: "2013_2013", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_accumulated_burned_coverage/mbfire_col1_peru_accumulated_burned_coverage-fire_accumulated_2013_2013.tif"}),
                      ui.Label({value: "2013_2014", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_accumulated_burned_coverage/mbfire_col1_peru_accumulated_burned_coverage-fire_accumulated_2013_2014.tif"}),
                      ui.Label({value: "2013_2015", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_accumulated_burned_coverage/mbfire_col1_peru_accumulated_burned_coverage-fire_accumulated_2013_2015.tif"}),
                      ui.Label({value: "2013_2016", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_accumulated_burned_coverage/mbfire_col1_peru_accumulated_burned_coverage-fire_accumulated_2013_2016.tif"}),
                      ui.Label({value: "2013_2017", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_accumulated_burned_coverage/mbfire_col1_peru_accumulated_burned_coverage-fire_accumulated_2013_2017.tif"}),
                      ui.Label({value: "2013_2018", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_accumulated_burned_coverage/mbfire_col1_peru_accumulated_burned_coverage-fire_accumulated_2013_2018.tif"}),
                      ui.Label({value: "2013_2019", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_accumulated_burned_coverage/mbfire_col1_peru_accumulated_burned_coverage-fire_accumulated_2013_2019.tif"}),
                      ui.Label({value: "2013_2020", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_accumulated_burned_coverage/mbfire_col1_peru_accumulated_burned_coverage-fire_accumulated_2013_2020.tif"}),
                      ui.Label({value: "2013_2021", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_accumulated_burned_coverage/mbfire_col1_peru_accumulated_burned_coverage-fire_accumulated_2013_2021.tif"}),
                      ui.Label({value: "2013_2022", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_accumulated_burned_coverage/mbfire_col1_peru_accumulated_burned_coverage-fire_accumulated_2013_2022.tif"}),
                      ui.Label({value: "2013_2023", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_accumulated_burned_coverage/mbfire_col1_peru_accumulated_burned_coverage-fire_accumulated_2013_2023.tif"}),
                      ui.Label({value: "2013_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_accumulated_burned_coverage/mbfire_col1_peru_accumulated_burned_coverage-fire_accumulated_2013_2024.tif"}),
                      ui.Label({value: "2014_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_accumulated_burned_coverage/mbfire_col1_peru_accumulated_burned_coverage-fire_accumulated_2014_2024.tif"}),
                      ui.Label({value: "2015_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_accumulated_burned_coverage/mbfire_col1_peru_accumulated_burned_coverage-fire_accumulated_2015_2024.tif"}),
                      ui.Label({value: "2016_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_accumulated_burned_coverage/mbfire_col1_peru_accumulated_burned_coverage-fire_accumulated_2016_2024.tif"}),
                      ui.Label({value: "2017_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_accumulated_burned_coverage/mbfire_col1_peru_accumulated_burned_coverage-fire_accumulated_2017_2024.tif"}),
                      ui.Label({value: "2018_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_accumulated_burned_coverage/mbfire_col1_peru_accumulated_burned_coverage-fire_accumulated_2018_2024.tif"}),
                      ui.Label({value: "2019_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_accumulated_burned_coverage/mbfire_col1_peru_accumulated_burned_coverage-fire_accumulated_2019_2024.tif"}),
                      ui.Label({value: "2020_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_accumulated_burned_coverage/mbfire_col1_peru_accumulated_burned_coverage-fire_accumulated_2020_2024.tif"}),
                      ui.Label({value: "2021_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_accumulated_burned_coverage/mbfire_col1_peru_accumulated_burned_coverage-fire_accumulated_2021_2024.tif"}),
                      ui.Label({value: "2022_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_accumulated_burned_coverage/mbfire_col1_peru_accumulated_burned_coverage-fire_accumulated_2022_2024.tif"}),
                      ui.Label({value: "2023_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_accumulated_burned_coverage/mbfire_col1_peru_accumulated_burned_coverage-fire_accumulated_2023_2024.tif"}),
                      ui.Label({value: "2024_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_accumulated_burned_coverage/mbfire_col1_peru_accumulated_burned_coverage-fire_accumulated_2024_2024.tif"}),

                    ],
                    'layout': ui.Panel.Layout.flow('horizontal', true),
                    style: {
                        'border': '1px grey solid',
                        'margin': '0px 6px 0px 6px'
                    }
                }),
                ui.Label('Peru fire col1: frequency_burned'),
                ui.Panel({
                    widgets: [
                      ui.Label({value: "2013_2013", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_frequency_burned/mbfire_col1_peru_frequency_burned-fire_frequency_2013_2013.tif"}),
                      ui.Label({value: "2013_2014", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_frequency_burned/mbfire_col1_peru_frequency_burned-fire_frequency_2013_2014.tif"}),
                      ui.Label({value: "2013_2015", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_frequency_burned/mbfire_col1_peru_frequency_burned-fire_frequency_2013_2015.tif"}),
                      ui.Label({value: "2013_2016", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_frequency_burned/mbfire_col1_peru_frequency_burned-fire_frequency_2013_2016.tif"}),
                      ui.Label({value: "2013_2017", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_frequency_burned/mbfire_col1_peru_frequency_burned-fire_frequency_2013_2017.tif"}),
                      ui.Label({value: "2013_2018", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_frequency_burned/mbfire_col1_peru_frequency_burned-fire_frequency_2013_2018.tif"}),
                      ui.Label({value: "2013_2019", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_frequency_burned/mbfire_col1_peru_frequency_burned-fire_frequency_2013_2019.tif"}),
                      ui.Label({value: "2013_2020", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_frequency_burned/mbfire_col1_peru_frequency_burned-fire_frequency_2013_2020.tif"}),
                      ui.Label({value: "2013_2021", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_frequency_burned/mbfire_col1_peru_frequency_burned-fire_frequency_2013_2021.tif"}),
                      ui.Label({value: "2013_2022", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_frequency_burned/mbfire_col1_peru_frequency_burned-fire_frequency_2013_2022.tif"}),
                      ui.Label({value: "2013_2023", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_frequency_burned/mbfire_col1_peru_frequency_burned-fire_frequency_2013_2023.tif"}),
                      ui.Label({value: "2013_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_frequency_burned/mbfire_col1_peru_frequency_burned-fire_frequency_2013_2024.tif"}),
                      ui.Label({value: "2014_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_frequency_burned/mbfire_col1_peru_frequency_burned-fire_frequency_2014_2024.tif"}),
                      ui.Label({value: "2015_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_frequency_burned/mbfire_col1_peru_frequency_burned-fire_frequency_2015_2024.tif"}),
                      ui.Label({value: "2016_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_frequency_burned/mbfire_col1_peru_frequency_burned-fire_frequency_2016_2024.tif"}),
                      ui.Label({value: "2017_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_frequency_burned/mbfire_col1_peru_frequency_burned-fire_frequency_2017_2024.tif"}),
                      ui.Label({value: "2018_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_frequency_burned/mbfire_col1_peru_frequency_burned-fire_frequency_2018_2024.tif"}),
                      ui.Label({value: "2019_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_frequency_burned/mbfire_col1_peru_frequency_burned-fire_frequency_2019_2024.tif"}),
                      ui.Label({value: "2020_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_frequency_burned/mbfire_col1_peru_frequency_burned-fire_frequency_2020_2024.tif"}),
                      ui.Label({value: "2021_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_frequency_burned/mbfire_col1_peru_frequency_burned-fire_frequency_2021_2024.tif"}),
                      ui.Label({value: "2022_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_frequency_burned/mbfire_col1_peru_frequency_burned-fire_frequency_2022_2024.tif"}),
                      ui.Label({value: "2023_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_frequency_burned/mbfire_col1_peru_frequency_burned-fire_frequency_2023_2024.tif"}),
                      ui.Label({value: "2024_2024", targetUrl: "https://storage.googleapis.com/shared-development-storage/COLLECTIONS/PERU/FIRE/COLLECTION1/mbfire_col1_peru_frequency_burned/mbfire_col1_peru_frequency_burned-fire_frequency_2024_2024.tif"}),
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
                    .set('area ha', area);

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

 

App.init();

App.setVersion();

