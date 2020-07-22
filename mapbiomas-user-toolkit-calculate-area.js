/**
 * calcular área
 */

// Asset de classificação para o qual deseja calcular as estatísticas de área
var asset = "projects/mapbiomas-workspace/public/collection4_1/mapbiomas_collection41_integration_v1";

// Mude o asset para o raster que deseja cruzar com o mapbiomas e
// extrair estatísticas de área
var assetTerritories = "projects/mapbiomas-workspace/AUXILIAR/biomas-raster-41";

// Mude a escala aqui se precisar. Tamanho do pixel em metros.
var scale = 30; 

// Defina uma lista de anos para inserir na tabela
var years = [
    '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992',
    '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000',
    '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008',
    '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016',
    '2017', '2018'
  ];

// Defina a pasta de saída no Google Drive
var driverFolder = 'AREA-EXPORT';

var territory = ee.Image(assetTerritories);

var mapbiomas = ee.Image(asset).selfMask();

var palettes = require('users/mapbiomas/modules:Palettes.js');

var pixelArea = ee.Image.pixelArea().divide(1000000);

var geometry = mapbiomas.geometry();

var convert2table = function (obj) {
    
      obj = ee.Dictionary(obj);
      
      var territory = obj.get('territory');
      
      var classesAndAreas = ee.List(obj.get('groups'));
      
      var tableRows = classesAndAreas.map(
          function(classAndArea) {
              classAndArea = ee.Dictionary(classAndArea);
              
              var classId = classAndArea.get('class');
              var area = classAndArea.get('sum');
              
              var tableColumns = ee.Feature(null)
                  .set('territory', territory)
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
  
    territotiesData = ee.List(areas.get('groups'));
    
    var areas = territotiesData.map(convert2table);
              
    areas = ee.FeatureCollection(areas).flatten();
    
    return areas;
};

var areas = years.map(
    function (year) {
        var image = mapbiomas.select('classification_' + year);

        var areas = calculateArea(image, territory, geometry);

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

Export.table.toDrive({
    collection: areas,
    description: 'areas-teste-toolkit',
    folder: driverFolder,
    fileNamePrefix: 'areas-teste-toolkit',
    fileFormat: 'CSV'
});
