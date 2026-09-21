/**
 * @name
 *      core/v1/territory.js
 *
 * @description
 *      The user's own territory tables, which the toolkits offer next to the
 *      official ones.
 *
 *      They are whatever sits in a folder named MAPBIOMAS in the user's assets.
 *      Where that folder is depends on the account: in a Cloud project it is one
 *      of the entries `getAssetRoots()` returns, and in a legacy user account it
 *      is inside the single root.
 *
 *      `ee.data.getAssetRoots()` is deprecated; phase 3 of the refactoring
 *      replaces it. Having it here means changing it in one place.
 *
 * @author
 *      João Siqueira
 *      contato@mapbiomas.org
 *
 * @see
 *      https://github.com/mapbiomas/user-toolkit
 */

/**
 * Asset ids of the tables in the user's MAPBIOMAS folder.
 *
 * Returns an empty list when there is no such folder, which is the common case:
 * the toolkit then offers only the official territories.
 *
 * @returns {Array<string>}
 */
var userTables = function () {

    var roots;

    try {
        roots = ee.data.getAssetRoots().map(
            function (obj) {
                return obj.id;
            });
    } catch (e) {
        return [];
    }

    var folders = roots.filter(
        function (root) {
            return root.indexOf('/MAPBIOMAS') !== -1;
        });

    // a legacy account has a single root, with the folder inside it
    if (folders.length === 0 && roots.length > 0) {
        folders = [roots[0] + '/MAPBIOMAS'];
    }

    if (folders.length === 0) {
        return [];
    }

    try {
        return ee.data.getList({ 'id': folders[0] }).map(
            function (obj) {
                return obj.id;
            });
    } catch (e) {
        return [];
    }
};

exports.userTables = userTables;
