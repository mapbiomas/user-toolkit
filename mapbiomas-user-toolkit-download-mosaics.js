/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var geometry = 
    /* color: #d63000 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[-49.20147764591418, -15.304958621330327],
          [-49.20147764591418, -16.17996722859655],
          [-46.80645811466418, -16.17996722859655],
          [-46.80645811466418, -15.304958621330327]]], null, false);
/***** End of imports. If edited, may not auto-convert in the playground. *****/
// HOW TO USE
// 1. Choose the Biome (line 15)
// 2. Choose the year (line 18)
// 3. Set the geometry at "geometry" button on the upleft side of the map
// 4. RUN the script
// 5. Run the task of export on the upright panel
//
// Obs: If you define a big geometry, maybe your data get splitted
// on Google Drive. You will need to make a local mosaic using ArcGis, QGis, ENVI...

// Do not change
var asset = 'projects/nexgenmap/MapBiomas2/LANDSAT/mosaics';

// Choose the biome name: 'AMAZONIA', 'CAATINGA', 'CERRADO', 'MATAATLANTICA', 'PAMPA' or 'PANTANAL'
var biome = 'CERRADO';

// Define the year of your interest
var year = 2019;

// Output file name
var fileName = 'mosaic-' + String(year);

// Look the available band list at the console
var exportBands = [
      "blue_median",
      "green_median",
      "red_median",
      "bir_median",
      "swir1_median",
      "swir2_median",
  ];

// Get the moisac
var mosaic = ee.ImageCollection(asset)
               .filterMetadata('biome', 'equals', biome)
               .filterMetadata('year', 'equals', year)
               .filterBounds(geometry)
               .mosaic();

// prints all bands available to download
print(mosaic.bandNames());

// Shows the mosaic on map
Map.addLayer(mosaic.clip(geometry), 
    {
        bands: 'swir1_median,nir_median,red_median',
        gain: '0.08,0.06,0.2',
        gamma: 0.75
    },
    
    'mapbiomas mosaic'
);

Map.centerObject(geometry);

// Exports the data to MAPBIOMAS-EXPORT folder in your Google Drive
Export.image.toDrive(
      {
        'image': mosaic.int32(), 
        'description': fileName, 
        'folder': 'MAPBIOMAS-EXPORT', 
        'fileNamePrefix': fileName,
        'region': geometry, 
        'scale': 30, 
        'maxPixels': 1e13,
        'fileFormat': 'GeoTIFF'
      }
);
