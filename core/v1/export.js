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

exports.slug = slug;
exports.fileName = fileName;
