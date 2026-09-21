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

/**
 * Draws the selected territory on the map: centred, outlined in red over a
 * translucent fill.
 *
 * Every toolkit used to do this its own way — the water one in yellow, three of
 * them as a solid red patch, and half of them without centring — so the same
 * click looked different depending on which toolkit you were in.
 *
 * Clearing what was on the map stays with the caller, because the toolkits
 * differ in what they need to keep: some re-register their base map styles,
 * others have widgets on the map that must not go.
 *
 * @param {ee.FeatureCollection} featureCollection
 * @param {string} name  the layer name
 */
var highlight = function (featureCollection, name) {

    Map.centerObject(featureCollection);

    Map.addLayer(
        featureCollection.style({
            'color': 'ff0000',
            'width': 1,
            'fillColor': 'ff000033'
        }),
        {},
        name,
        true
    );
};

exports.userTables = userTables;
exports.highlight = highlight;
