/**
 * @name
 *      core/v1/area.js
 *
 * @description
 *      Area per class inside a territory, for the CSV that every toolkit exports.
 *
 *      It crosses a class image (coverage, fire scar, mining substance…) with a
 *      territory image and groups `ee.Image.pixelArea()` by territory and class.
 *
 *      Used by mapbiomas-user-toolkit-<theme>.js. The soil toolkit has its own
 *      version, because it averages a continuous value instead of summing areas.
 *
 * @author
 *      João Siqueira
 *      contato@mapbiomas.org
 *
 * @see
 *      https://github.com/mapbiomas/user-toolkit
 */

/**
 * Turns one group of the grouped reducer into rows of a table.
 *
 * @param {Object} obj           one entry of the outer `groups` list
 * @param {string} areaColumn    name of the area column
 * @returns {ee.FeatureCollection}
 */
var convert2table = function (obj, areaColumn) {

    obj = ee.Dictionary(obj);

    var classesAndAreas = ee.List(obj.get('groups'));

    var tableRows = classesAndAreas.map(
        function (classAndArea) {
            classAndArea = ee.Dictionary(classAndArea);

            var classId = classAndArea.get('class');
            var area = classAndArea.get('sum');

            var tableColumns = ee.Feature(null)
                .set('class', classId)
                .set(areaColumn, area);

            return tableColumns;
        }
    );

    return ee.FeatureCollection(ee.List(tableRows));
};

/**
 * Area per class of `image` inside `territory`.
 *
 * @param {Object}   object
 * @param {ee.Image} object.image        single band, one class value per pixel
 * @param {ee.Image} object.territory    painted territory, one value per territory
 * @param {ee.Geometry} object.geometry  where to reduce, usually the bounds
 * @param {number}   object.scale        30 for MapBiomas data
 * @param {number}   object.factor       divides the pixel area: 1e6 for km², 1e4 for ha
 * @param {string}  [object.unit]        when given, adds a `unit` column with it
 * @param {string}  [object.areaColumn]  name of the area column, `area` by default
 * @returns {ee.FeatureCollection} one row per territory and class
 */
var calculate = function (object) {

    var areaColumn = object.areaColumn || 'area';

    var reducer = ee.Reducer.sum().group(1, 'class').group(1, 'territory');
    var pixelArea = ee.Image.pixelArea().divide(object.factor);

    var territoriesData = pixelArea.addBands(object.territory).addBands(object.image)
        .reduceRegion({
            reducer: reducer,
            geometry: object.geometry,
            scale: object.scale,
            maxPixels: 1e13
        });

    territoriesData = ee.List(territoriesData.get('groups'));

    var areas = territoriesData.map(
        function (group) {
            return convert2table(group, areaColumn);
        }
    );

    areas = ee.FeatureCollection(areas).flatten();

    if (object.unit) {
        areas = areas.map(
            function (feature) {
                return feature.set('unit', object.unit);
            }
        );
    }

    return areas;
};

exports.convert2table = convert2table;
exports.calculate = calculate;
