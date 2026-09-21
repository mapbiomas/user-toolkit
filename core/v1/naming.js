/**
 * @name
 *      core/v1/naming.js
 *
 * @description
 *      Names of the layers the toolkits draw and of the files they export.
 *
 *      The Code Editor runs ES5 and has no `String.prototype.normalize`, so the
 *      accents are replaced from an explicit table.
 *
 * @author
 *      João Siqueira
 *      contato@mapbiomas.org
 *
 * @see
 *      https://github.com/mapbiomas/user-toolkit
 */

/**
 * Cleans a name so it can go into a file name: lowercase, no accents, no spaces
 * and no characters that a file system or a CSV reader would complain about.
 *
 * @param {string} name
 * @returns {string}
 */
var formatName = function (name) {

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
        .replace(/\[/g, '')
        .replace(/\]/g, '')
        .replace(/["'()\/]/g, '');

    return formated;
};

/**
 * Short name of the active territory, for layers and exported files.
 *
 * The vectors ingested by the MapBiomas platform end in a UUID, so the label of
 * the table is used instead. A table the user picked from their own assets keeps
 * the last part of its path.
 *
 * @param {Object} tables  `App.options.tables`, keyed by region
 * @param {string} path    asset id of the active table
 * @returns {string}
 */
var tableShortName = function (tables, path) {

    var label = null;

    Object.keys(tables).forEach(function (region) {
        tables[region].forEach(function (table) {
            if (table.value === path) {
                label = table.label;
            }
        });
    });

    if (label === null) {
        return path.split('/').slice(-1)[0];
    }

    return label.toLowerCase()
        .replace(/[áàâãä]/g, 'a').replace(/[éèêë]/g, 'e').replace(/[íìîï]/g, 'i')
        .replace(/[óòôõö]/g, 'o').replace(/[úùûü]/g, 'u').replace(/ç/g, 'c').replace(/ñ/g, 'n')
        .replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '');
};

exports.formatName = formatName;
exports.tableShortName = tableShortName;
