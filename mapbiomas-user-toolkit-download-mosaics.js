/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var geometry = 
    /* color: #d63000 */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[-55.80975401310168, -6.617795520325061],
          [-55.80975401310168, -7.519994257183307],
          [-54.93634092716418, -7.519994257183307],
          [-54.93634092716418, -6.617795520325061]]], null, false);
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

// Do not change the mosaics asset
var asset = 'projects/mapbiomas-workspace/MOSAICOS/workspace-c3';

// Choose the biome name: 'AMAZONIA', 'CAATINGA', 'CERRADO', 'MATAATLANTICA', 'PAMPA' or 'PANTANAL'
var biome = 'AMAZONIA';

// Define the year of your interest
var year = 2019;

// Output file name
var fileName = 'mosaic-' + String(year);

// Look the available band list at the console
var exportBands = [
      "median_blue",
      "median_gree",
      "median_red",
      "median_bir",
      "median_swir1",
      "median_swir2",
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
        bands: 'median_swir1,median_nir,median_red',
        gain: '0.08,0.06,0.2',
        gamma: 0.75
    },
    
    'mapbiomas mosaic'
);

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
