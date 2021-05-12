/**
 * @description
 *    Calculates area by class id and year
 * 
 * @author
 *    João Siqueira
 * 
 */

// Asset mapbiomas
var asset = "projects/mapbiomas-workspace/public/collection5/mapbiomas_collection50_integration_v1";

// Asset of regions for which you want to calculate statistics
var assetTerritories = "users/joaovsiqueira1/MAPBIOMAS/ti_uc";

// Numeric attribute to index the shapefile
var attribute = "id_arp";

// A list of class ids you are interested
var classIds = [33];

// Output csv name
var outputName = 'areas';

// Change the scale if you need.
var scale = 30;

// Define a list of years to export
var years = [
    '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992',
    '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000',
    '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008',
    '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016',
    '2017', '2018', '2019'
];

// Define a Google Drive output folder 
var driverFolder = 'AREA-EXPORT';

/**
 * 
 */
// Territory
var territory = ee.FeatureCollection(assetTerritories);

// LULC mapbiomas image
var mapbiomas = ee.Image(asset).selfMask();

// Image area in km2
var pixelArea = ee.Image.pixelArea().divide(1000000);

// Geometry to export
var geometry = mapbiomas.geometry();

/**
 * Convert a complex ob to feature collection
 * @param obj 
 */
var convert2table = function (obj) {

    obj = ee.Dictionary(obj);

    var territory = obj.get('territory');

    var classesAndAreas = ee.List(obj.get('groups'));

    var tableRows = classesAndAreas.map(
        function (classAndArea) {
            classAndArea = ee.Dictionary(classAndArea);

            var classId = classAndArea.get('class');
            var area = classAndArea.get('sum');

            var tableColumns = ee.Feature(null)
                .set(attribute, territory)
                .set('class', classId)
                .set('area', area);

            return tableColumns;
        }
    );

    return ee.FeatureCollection(ee.List(tableRows));
};

/**
 * Calculate area crossing a cover map (deforestation, mapbiomas)
 * and a region map (states, biomes, municipalites)
 * @param image 
 * @param territory 
 * @param geometry
 */
var calculateArea = function (image, territory, geometry) {

    var reducer = ee.Reducer.sum().group(1, 'class').group(1, 'territory');

    var territotiesData = pixelArea.addBands(territory).addBands(image)
        .reduceRegion({
            reducer: reducer,
            geometry: geometry,
            scale: scale,
            maxPixels: 1e12
        });

    territotiesData = ee.List(territotiesData.get('groups'));

    var areas = territotiesData.map(convert2table);

    areas = ee.FeatureCollection(areas).flatten();

    return areas;
};

var areas = years.map(
    function (year) {
        var image = mapbiomas.select('classification_' + year);
        
        var areas = territory.map(
            function(feature){
                return calculateArea(
                    image.remap(classIds, classIds, 0),
                    ee.Image().int64().paint({
                        'featureCollection': ee.FeatureCollection(feature),
                        'color': attribute
                    }),
                    feature.geometry()
                );
            }
        );
        
        areas = areas.flatten();
        
        // set additional properties
        areas = areas.map(
            function (feature) {
                return feature.set('year', year);
            }
        );

        return areas;
    }
);

areas = ee.FeatureCollection(areas).flatten();

Map.addLayer(territory);

Export.table.toDrive({
    collection: areas,
    description: outputName,
    folder: driverFolder,
    fileNamePrefix: outputName,
    fileFormat: 'CSV'
});
