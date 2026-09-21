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
 *    1.36.3 - Territories come from data/territories.js; removes debug prints
 *    1.36.4 - Link to the region's download page, in place of the hard-coded download links
 *    2.0.0 - Breaking: export names and CSV columns standardized; territory drawn in red
 *            and centred in every toolkit
 * 
 * @see
 *      Get the MapBiomas exported data in your "Google Drive/MAPBIOMAS-EXPORT" folder
 *      Code and Tutorial - https://github.com/mapbiomas-brazil/user-toolkit
 */

var palettes = require('users/mapbiomas/modules:Palettes.js');
var logos = require('users/mapbiomas/modules:Logos.js');

var Area = require('users/mapbiomas/user-toolkit:core/v1/area.js');
var Naming = require('users/mapbiomas/user-toolkit:core/v1/naming.js');
var Layers = require('users/mapbiomas/user-toolkit:core/v1/layers.js');
var Territory = require('users/mapbiomas/user-toolkit:core/v1/territory.js');

var Territories = require('users/mapbiomas/user-toolkit:data/territories.js');
var Downloads = require('users/mapbiomas/user-toolkit:data/downloads.js');
var Exports = require('users/mapbiomas/user-toolkit:core/v1/export.js');


/**
 * 
 */
var App = {

    options: {

        version: '2.0.0',

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

        tables: Territories.pick([
            'mapbiomas-brazil',
            'mapbiomas-amazon',
            'mapbiomas-chaco',
            'mapbiomas-atlantic-forest',
            'mapbiomas-pampa',
            'mapbiomas-indonesia',
            'mapbiomas-peru',
            'mapbiomas-bolivia',
            'mapbiomas-colombia',
            'mapbiomas-venezuela',
            'mapbiomas-uruguay',
            'mapbiomas-ecuador',
            'mapbiomas-paraguay',
            'mapbiomas-chile',
            'mapbiomas-argentina',
            'mapbiomas-mexico',
            'mapbiomas-drc'
        ]),

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

            App.ui.form.labelDownloads.setUrl(Downloads.pageOf(regionName));

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

            var allTablesNames = App.options.tables[regionName]
                .concat(Territory.userTables());

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

            Territory.highlight(App.options.activeFeature, App.tableShortName());

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

            Map.clear();

            Territory.highlight(App.options.activeFeature, name);

        },

        addImageLayer: function (period, label, region) {


            var image = App.options.data[App.options.dataType]
                .select([App.options.bandsNames[App.options.dataType] + period])
                .clip(region);

            if (App.options.dataType == 'Transitions') {
                image = App.remapTransitions(image);
            }
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

            if (checked) {
                App.ui.addImageLayer(period, label, region);
            } else {
                App.ui.removeImageLayer(label);
            }

        },

        makeLayersList: function (regionName, region, periods) {
            Layers.makeList(App.ui.form.panelLayersList, regionName, region,
                periods, App.ui.manageLayers);
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

            var tableName = Exports.fileName(
                [regionName, collectionName, App.options.dataType, featureName, 'area']);

            Export.table.toDrive({
                'collection': areas,
                'description': tableName,
                'folder': 'MAPBIOMAS-EXPORT',
                'fileNamePrefix': tableName,
                'fileFormat': 'CSV',
                'selectors': [
                    'class',
                    'class_name',
                    'band',
                    'area_km2'
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

                App.ui.makeLegendLinksList();

                App.ui.form.panelMain.add(App.ui.form.panelLogo);
                App.ui.form.panelMain.add(App.ui.form.labelTitle);
                App.ui.form.panelMain.add(App.ui.form.labelSubtitle);
                // App.ui.form.panelMain.add(App.ui.form.labelLink);  // substituído pelo link único para os arquivos de legenda
                // App.ui.form.panelMain.add(App.ui.form.panelLink1);  // substituído pelo link único para os arquivos de legenda
                // App.ui.form.panelMain.add(App.ui.form.panelLink2);  // substituído pelo link único para os arquivos de legenda
                App.ui.form.panelMain.add(App.ui.form.labelLegendFiles);
                App.ui.form.panelMain.add(App.ui.form.labelDownloads);

                App.ui.form.panelMain.add(App.ui.form.panel1);

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

            labelDownloads: ui.Label('Download full maps', {
                'fontSize': '10px'
            },
                Downloads.DEFAULT_PAGE
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

            panel1: ui.Panel({
                style: {
                    'stretch': 'both'
                }
            }),

        },
    }
};

App.init();

App.setVersion();