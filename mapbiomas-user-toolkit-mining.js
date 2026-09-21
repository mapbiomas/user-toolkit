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
 *    1.4.3 - Link to the region's download page, in place of the hard-coded download links
 *    1.4.4 - Base map styles and legend come from core/v1, not from a personal account
 *    2.0.0 - Breaking: export names and CSV columns standardized; territory drawn in red
 *    2.0.1 - Property and feature selects come from core/v1/panel.js; the feature list no
 *    2.0.2 - Export plumbing comes from core/v1/export.js
 *    2.0.3 - Collections come from data/collections-<theme>.js
 *            longer repeats a name that several polygons share
 *            and centred in every toolkit
 * 
 * @see
 *      Get the MapBiomas exported data in your "Google Drive/MAPBIOMAS-EXPORT" folder
 *      Code and Tutorial - https://github.com/mapbiomas-brazil/user-toolkit
 */

var palettes = require('users/mapbiomas/modules:Palettes.js');
var logos = require('users/mapbiomas/modules:Logos.js');
var Basemaps = require('users/mapbiomas/user-toolkit:core/v1/basemaps.js');
var Legend = require('users/mapbiomas/user-toolkit:core/v1/legend.js');

var Area = require('users/mapbiomas/user-toolkit:core/v1/area.js');
var Naming = require('users/mapbiomas/user-toolkit:core/v1/naming.js');
var Layers = require('users/mapbiomas/user-toolkit:core/v1/layers.js');
var Territory = require('users/mapbiomas/user-toolkit:core/v1/territory.js');

var Territories = require('users/mapbiomas/user-toolkit:data/territories.js');
var Downloads = require('users/mapbiomas/user-toolkit:data/downloads.js');
var Collections = require('users/mapbiomas/user-toolkit:data/collections-mining.js');
var Panel = require('users/mapbiomas/user-toolkit:core/v1/panel.js');
var Exports = require('users/mapbiomas/user-toolkit:core/v1/export.js');


/**
 * 
 */
var App = {

    options: {

        version: '2.0.3',

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
            'mapbiomas-brazil'
        ]),

        collections: Collections.pick([
            'mapbiomas-brazil'
        ]),

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
     * Short name of the active territory, for layers and exported files.
     */
    tableShortName: function () {
        return Naming.tableShortName(App.options.tables, App.options.activeName);
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
                'Dark': Basemaps.getStyle('Dark')
            }
        });

        Map.add(imageLayer);

    },

    formatName: function (name) {
        return Naming.formatName(name);
    },

    ui: {

        init: function () {

            this.form.init();

        },

        clear: function () {
            Map.clear();

            Map.setOptions({
                'styles': {
                    'Dark': Basemaps.getStyle('Dark')
                }
            });
        },

        setMapbiomasRegion: function (regionName) {

            App.ui.form.labelDownloads.setUrl(Downloads.pageOf(regionName));

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
                    App.ui.form.panelLegend.add(Legend.getLegend(params));
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

            App.ui.clear();

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
                });

        },

        loadFeature: function (name) {

            App.options.activeFeature = App.options.table
                .filterMetadata(App.options.propertyName, 'equals', name);

            App.ui.clear();

            Territory.highlight(App.options.activeFeature, name);

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
                        .select([App.options.bandsNames[App.options.dataType] + '_' + period]);

                    var region = Exports.regionOf(
                        App.options.activeFeature, App.options.bufferDistance);

                    data = data.clip(region);

                    Exports.image({
                        'image': data,
                        'name': fileName,
                        'region': region.bounds(),
                        'fileDimensions': App.options.fileDimensions[App.options.dataType]
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
                        "areaColumn": 'area_km2'
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

            var tableName = Exports.fileName(
                [regionName, collectionName, App.options.dataType, featureName, 'area']);

            Exports.table(areas, tableName);

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
                App.ui.form.panelMain.add(App.ui.form.labelDownloads);

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

            labelDownloads: ui.Label('Download full maps', {
                'fontSize': '10px'
            },
                Downloads.DEFAULT_PAGE
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