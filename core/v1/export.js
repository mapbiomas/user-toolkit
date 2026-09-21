/**
 * @name
 *      core/v1/export.js
 *
 * @description
 *      The names of the files the toolkits export.
 *
 *      Every toolkit used to build them its own way, so the same territory came
 *      out as `distritofederal` in one and `distrito_federal` in another, and
 *      some left the data type out entirely, which made a Coverage export and a
 *      Transitions export of the same year collide. One shape now:
 *
 *          <region>-<collection>-<data type>-<territory>-<period>
 *          mapbiomas_brazil-collection_11_0-coverage-distrito_federal-2025
 *
 *      Words inside a field are joined with `_`, fields with `-`, so the fields
 *      can still be told apart when reading a file name back. The area table of
 *      the same selection ends in `-area` instead of a period.
 *
 *      Changing this breaks scripts that post-process the exports, which is why
 *      it is called out in the README.
 *
 * @author
 *      João Siqueira
 *      contato@mapbiomas.org
 *
 * @see
 *      https://github.com/mapbiomas/user-toolkit
 */

// the Code Editor runs ES5 and has no String.prototype.normalize
var ACCENTS = {
    'á': 'a', 'ã': 'a', 'â': 'a', 'à': 'a', 'ä': 'a', 'å': 'a', 'ª': 'a',
    'é': 'e', 'ê': 'e', 'è': 'e', 'ë': 'e',
    'í': 'i', 'î': 'i', 'ì': 'i', 'ï': 'i',
    'ó': 'o', 'õ': 'o', 'ô': 'o', 'ò': 'o', 'ö': 'o',
    'ú': 'u', 'û': 'u', 'ù': 'u', 'ü': 'u', 'ũ': 'u',
    'ç': 'c', 'ñ': 'n'
};

/**
 * One field of a file name: no accents, lowercase, and everything that is not
 * a letter or a digit becomes a single `_`.
 *
 * @param {string} input
 * @returns {string}
 */
var slug = function (input) {

    var plain = String(input === null || input === undefined ? '' : input)
        .toLowerCase()
        .split('')
        .map(function (character) {
            return ACCENTS[character] || character;
        })
        .join('');

    return plain
        .replace(/[^a-z0-9]+/g, '_')
        .replace(/^_+|_+$/g, '');
};

/**
 * The file name of an export.
 *
 * @param {Array} parts  region, collection, data type, territory, period —
 *                       empty ones are dropped, so a toolkit can leave one out
 * @returns {string}
 */
var fileName = function (parts) {

    return parts
        .map(slug)
        .filter(function (part) {
            return part !== '';
        })
        .join('-');
};

/** Where every toolkit writes, in the user's Drive. */
var FOLDER = 'MAPBIOMAS-EXPORT';

/** The columns of the area CSV, in this order, in every toolkit. */
var AREA_COLUMNS = ['class', 'class_name', 'band', 'area_km2'];

/**
 * The region an export covers: the selected territory, grown by the buffer the
 * user picked.
 *
 * Six of the nine toolkits read the buffer; fire, soil and degradation did not.
 * Their buffer control is commented out of the panel, so nothing was visibly
 * wrong, but the value was ignored either way. Now they all honour it, and
 * showing the control in those three is a one-line change whenever that is
 * wanted.
 *
 * @param {ee.Feature|ee.FeatureCollection} feature
 * @param {number} bufferDistance  metres; 0 or undefined for none
 * @returns {ee.Geometry}
 */
var regionOf = function (feature, bufferDistance) {

    var region = feature.geometry();

    if (bufferDistance) {
        region = region.buffer(bufferDistance);
    }

    return region;
};

/**
 * A GeoTIFF to Drive, with the settings every toolkit uses.
 *
 * @param {Object}   params
 * @param {ee.Image} params.image
 * @param {string}   params.name            file name and task description
 * @param {ee.Geometry} params.region
 * @param {number}  [params.scale]          30 by default
 * @param {number}  [params.fileDimensions] tile size, when the toolkit sets one
 */
var image = function (params) {

    Export.image.toDrive({
        'image': params.image,
        'description': params.name,
        'folder': FOLDER,
        'fileNamePrefix': params.name,
        'region': params.region,
        'scale': params.scale || 30,
        'maxPixels': 1e13,
        'fileFormat': 'GeoTIFF',
        'fileDimensions': params.fileDimensions
    });
};

/**
 * The area table to Drive, with the standard columns.
 *
 * @param {ee.FeatureCollection} collection
 * @param {string} name
 * @param {Array} [columns]  only when a toolkit really needs other ones
 */
var table = function (collection, name, columns) {

    Export.table.toDrive({
        'collection': collection,
        'description': name,
        'folder': FOLDER,
        'fileNamePrefix': name,
        'fileFormat': 'CSV',
        'selectors': columns || AREA_COLUMNS
    });
};

exports.FOLDER = FOLDER;
exports.AREA_COLUMNS = AREA_COLUMNS;
exports.slug = slug;
exports.fileName = fileName;
exports.regionOf = regionOf;
exports.image = image;
exports.table = table;
