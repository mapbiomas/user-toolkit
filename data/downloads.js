/**
 * @name
 *      data/downloads.js
 *
 * @description
 *      Where to download whole maps, by region.
 *
 *      The toolkits used to carry thousands of hard-coded links to single
 *      GeoTIFFs in the storage bucket. They pointed at old collections, broke
 *      whenever a collection was published, and nobody could keep nine copies
 *      of them current. Each region's download page is maintained by the
 *      initiative itself and always points at the current collection.
 *
 *      Checked on 2026-09-19.
 *
 * @author
 *      João Siqueira
 *      contato@mapbiomas.org
 *
 * @see
 *      https://github.com/mapbiomas/user-toolkit
 */

var pages = {
    'mapbiomas-brazil': 'https://brasil.mapbiomas.org/downloads/',
    'mapbiomas-amazon': 'https://amazonia.mapbiomas.org/downloads/',
    'mapbiomas-chaco': 'https://chaco.mapbiomas.org/downloads/',
    'mapbiomas-atlantic-forest': 'https://bosqueatlantico.mapbiomas.org/downloads/',
    'mapbiomas-pampa': 'https://pampa.mapbiomas.org/downloads/',
    'mapbiomas-argentina': 'https://argentina.mapbiomas.org/descargas/',
    'mapbiomas-bolivia': 'https://bolivia.mapbiomas.org/downloads/',
    'mapbiomas-chile': 'https://chile.mapbiomas.org/descargas/',
    'mapbiomas-colombia': 'https://colombia.mapbiomas.org/descargas/',
    'mapbiomas-drc': 'https://rdc.mapbiomas.org/telechargements/',
    'mapbiomas-ecuador': 'https://ecuador.mapbiomas.org/downloads/',
    'mapbiomas-indonesia': 'https://indonesia.mapbiomas.org/downloads/',
    'mapbiomas-mexico': 'https://mexico.mapbiomas.org/descargas/',
    'mapbiomas-paraguay': 'https://paraguay.mapbiomas.org/descargas/',
    'mapbiomas-peru': 'https://peru.mapbiomas.org/descargas/',
    'mapbiomas-suriname': 'https://mapbiomas.org/en/',
    'mapbiomas-uruguay': 'https://uruguay.mapbiomas.org/descargas/',
    'mapbiomas-venezuela': 'https://venezuela.mapbiomas.org/descargas/'
};

// Suriname has no download page of its own yet, and neither does a region
// nobody has picked, so both land on the MapBiomas home page.
var DEFAULT_PAGE = 'https://mapbiomas.org/en/';

/**
 * The download page of a region, or the MapBiomas one when the region has no
 * page of its own or none has been picked yet.
 *
 * @param {string} region
 * @returns {string}
 */
var pageOf = function (region) {
    return pages[region] || DEFAULT_PAGE;
};

exports.pages = pages;
exports.pageOf = pageOf;
exports.DEFAULT_PAGE = DEFAULT_PAGE;
