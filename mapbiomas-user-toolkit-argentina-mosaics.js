/**
 * @name
 *      MapBiomas Integration Toolkit
 * 
 * @description
 *  
 * @author
 *      João Siqueira
 *      joaovsiqueira1@gmail.com
 *
 * @version 1.0.0
 *
 */

var assets = {
    mosaic: {
        'chaco_lx': 'projects/nexgenmap/MapBiomas2/LANDSAT/CHACO/mosaics',
        'chaco_l7': 'projects/nexgenmap/MapBiomas2/LANDSAT/CHACO/mosaics-landsat-7',
        'atlantic_forest_lx': 'projects/nexgenmap/MapBiomas2/LANDSAT/ATLANTICFOREST/mosaics',
        'pampa_lx': 'projects/nexgenmap/MapBiomas2/LANDSAT/PAMPA/mosaics',
        'cuyo_patagonia_lx': 'projects/nexgenmap/MapBiomas2/LANDSAT/ARGENTINA/mosaics-1',
    },
    country: 'projects/mapbiomas-argentina/assets/ANCILLARY_DATA/STATISTICS/COLLECTION1/VERSION-1/nivel-politico-1-raster',
};

var year = 2022;

var vis = {
    'bands': ['swir1_median', 'nir_median', 'red_median'],
    'gain': [0.08, 0.06, 0.2],
    'gamma': 0.85
};

var country = ee.Image(assets.country);

var collectionChacoLx = ee.ImageCollection(assets.mosaic.chaco_lx)
    .filterMetadata('biome', 'equals', 'CHACO')
    .filterMetadata('version', 'equals', '2')
    .select(vis.bands);

var collectionChacoL7 = ee.ImageCollection(assets.mosaic.chaco_l7)
    .filterMetadata('biome', 'equals', 'CHACO')
    .filterMetadata('version', 'equals', '2')
    .select(vis.bands);

var collectionAtfLx = ee.ImageCollection(assets.mosaic.atlantic_forest_lx)
    .select(vis.bands);

var collectionPampaLx = ee.ImageCollection(assets.mosaic.pampa_lx)
    .map(
        function (image) {
            return image.set('year', ee.Number.parse(image.get('year'), 10));
        }
    )
    .filterMetadata('version', 'equals', '4')
    .select(vis.bands);

var collectionCuyoPatg = ee.ImageCollection(assets.mosaic.cuyo_patagonia_lx)
    .select(vis.bands);

var collection = collectionChacoL7
    .merge(collectionChacoLx)
    .merge(collectionAtfLx)
    .merge(collectionPampaLx)
    .merge(collectionCuyoPatg)
    .filter(ee.Filter.eq('year', year));

var image = collection.mosaic().mask(country);

Map.addLayer(image, vis, 'Argentina');

Map.centerObject(country, 6);
