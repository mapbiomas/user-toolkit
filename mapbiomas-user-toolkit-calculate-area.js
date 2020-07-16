/**
 * calcular area
 */
var year = "2018";

var asset = "projects/mapbiomas-workspace/public/collection4_1/mapbiomas_collection41_integration_v1";
var assetBiomes = "projects/mapbiomas-workspace/AUXILIAR/biomas-raster-41";

var scale = 30; // Mude a escala aqui se precisar. Tamanho do pixel em metros.

var driverFolder = 'AREA-EXPORT';

// carrega o raster dos biomas
var biomes = ee.Image(assetBiomes);

var biomeId = {
    'amz': 1,
    'caa': 5,
    'cer': 4,
    'mat': 2,
    'pam': 6,
    'pan': 3,
};

var mapbiomas = ee.Image(asset)
    .select('classification_'+ year)
    .mask(biomes.eq(biomeId.caa)) // Mude o bioma aqui!!
    .selfMask();

var palettes = require('users/mapbiomas/modules:Palettes.js');

Map.addLayer(mapbiomas, {
        bands: ['classification_' + year],
        min: 0,
        max: 34,
        palette: palettes.get('amazonia'),
        format: 'png'
    }, 
    'mapbiomas ' + year,
    true);

// get raster with area km2
var pixelArea = ee.Image.pixelArea().divide(1000000);

var geometry = mapbiomas.geometry();

/**
 * Helper function
 * @param item 
 */
var convert2featCollection = function (item) {

    item = ee.Dictionary(item);

    var feature = ee.Feature(ee.Geometry.Point([0, 0]))
        .set('classe', item.get('classe'))
        .set("area", item.get('sum'));

    return feature;

};

/**
 * Calculate area crossing a cover map (deforestation, mapbiomas)
 * and a region map (states, biomes, municipalites)
 * @param image 
 * @param geometry
 */
var calculateArea = function (image, geometry) {

    var reducer = ee.Reducer.sum().group(1, 'classe');

    var areas = pixelArea.addBands(image)
        .reduceRegion({
            reducer: reducer,
            geometry: geometry,
            scale: scale,
            maxPixels: 1e12
        });

    var year = ee.Number(image.get('year'));
    
    areas = ee.List(areas.get('groups')).map(convert2featCollection);
    areas = ee.FeatureCollection(areas);
    
    return areas;
};

var areas = calculateArea(mapbiomas.selfMask(), geometry)
    .map(
        function(feature){
            return feature.set('year', year);
        }
    );

// print(areas);

Export.table.toDrive({
    collection: areas,
    description: 'area-'+ year,
    folder: driverFolder,
    fileNamePrefix: 'area-'+ year,
    fileFormat: 'CSV'
});        
        