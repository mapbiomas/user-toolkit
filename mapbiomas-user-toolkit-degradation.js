/**
 * @name
 *      Mapbiomas User Toolkit Downloads
 * 
 * @description
 *      This is a support tool for mapbiomas data users.
 *  
 * @author
 *    João Siqueira and Wallace Silva
 * 
 * @contact
 *      Tasso Azevedo, Marcos Rosa and João Siqueira
 *      contato@mapbiomas.org
 *
 * @version
 *    0.0.0 - Versão de desenvolvimento
 *          - Adicionando modulos de degradação 1.0 
 *    0.0.1 - Primeira versão
 *    0.0.2 - Replicando em memoria as camdas da plataforma (Area de classes borda, Area de classes de tamanho de fragmento e Area de classes de distancias dos fragmentos)
 *    0.0.3 - Atualizando camadas de degradação construidas em memoria
 *    0.0.4 - Territories from the MapBiomas platform
 *    0.0.5 - single link to the legend files on GitHub
 *    0.0.6 - Territories come from data/territories.js; removes a debug print
 *    0.0.7 - Link to the region's download page, in place of the hard-coded download links
 *    0.0.8 - Base map styles and legend come from core/v1, not from a personal account
 *    0.1.0 - Breaking: export names and CSV columns standardized; territory drawn in red
 *    0.1.1 - Removes the legend links that were built at startup and never shown
 *    0.1.2 - Property and feature selects come from core/v1/panel.js; the feature list no
 *    0.1.3 - Export plumbing comes from core/v1/export.js; the Buffer setting is honoured
 *            if it is ever shown on the panel, where it is commented out
 *            longer repeats a name that several polygons share
 *            and centred in every toolkit
 * 
 * @see
 *      Get the MapBiomas exported data in your "Google Drive/MAPBIOMAS-EXPORT" folder
 *      Code and Tutorial - https://github.com/mapbiomas-brazil/user-toolkit
 */

var palettes = require('users/mapbiomas/modules:Palettes.js');
var fire_palettes = require('users/workspaceipam/packages:mapbiomas-toolkit/utils/palettes');
var logos = require('users/workspaceipam/packages:mapbiomas-toolkit/utils/b64');

var Area = require('users/mapbiomas/user-toolkit:core/v1/area.js');
var Naming = require('users/mapbiomas/user-toolkit:core/v1/naming.js');
var Layers = require('users/mapbiomas/user-toolkit:core/v1/layers.js');
var Territory = require('users/mapbiomas/user-toolkit:core/v1/territory.js');

var Territories = require('users/mapbiomas/user-toolkit:data/territories.js');
var Downloads = require('users/mapbiomas/user-toolkit:data/downloads.js');
var Panel = require('users/mapbiomas/user-toolkit:core/v1/panel.js');
var Exports = require('users/mapbiomas/user-toolkit:core/v1/export.js');

/**
 * @description
 *    calculate area for mapbiomas fire map
 * 
 * @author
 *    Wallace Silva e João Siqueira
 * 
 */


// Criação das variáveis para cada produto
// --- base auxiliar
var landcover = ee.Image('projects/mapbiomas-public/assets/brazil/lulc/collection9/mapbiomas_collection90_integration_v1');
var mb_landcover_values  = [3, 4, 5, 6, 9, 11, 12, 13, 15, 20, 21, 23, 24, 25, 29, 30, 31, 32, 33, 36, 39, 40, 41, 46, 47, 48, 49, 50, 62];
var mb_vegNat_values =     [3, 4, 5, 6, 0, 11, 12, 13,  0,  0,  0,  0,  0,  0, 0,  0,  0,  0, 33,  0,  0,  0,  0,  0,  0,  0, 49, 50,  0];

// Remap land cover classes to native vegetation classes
var landcover_remap = landcover.multiply(0);
mb_landcover_values.forEach(function(classe, i) {
  landcover_remap = landcover_remap.where(landcover.eq(classe), mb_vegNat_values[i]);
});

var vis = {
  'min': 0,
  'max': 62,
  'palette': require('users/mapbiomas/modules:Palettes.js').get('classification8'),
  'bands':['classification_2022']
};

var landcover_base = landcover_remap.gte(1);
// Map.addLayer(landcover, vis, 'landcover',false);
// Map.addLayer(landcover_base, {min:0,max:1,palette:['#AAAADD','#7DCEB8']}, 'landcover_base',false);


var bordasArea = landcover_base.where(landcover_base.eq(1), 9)
  .blend(ee.Image('projects/mapbiomas-workspace/DEGRADACAO/COLECAO/BETA/PROCESS/edge_area/edge_1000m_col9_v1').gt(1).multiply(8))
  .blend(ee.Image('projects/mapbiomas-workspace/DEGRADACAO/COLECAO/BETA/PROCESS/edge_area/edge_600m_col9_v1').gt(1).multiply(7))
  .blend(ee.Image('projects/mapbiomas-workspace/DEGRADACAO/COLECAO/BETA/PROCESS/edge_area/edge_300m_col9_v1').gt(1).multiply(6))
  .blend(ee.Image('projects/mapbiomas-workspace/DEGRADACAO/COLECAO/BETA/PROCESS/edge_area/edge_150m_col9_v1').gt(1).multiply(5))
  .blend(ee.Image('projects/mapbiomas-workspace/DEGRADACAO/COLECAO/BETA/PROCESS/edge_area/edge_120m_col9_v1').gt(1).multiply(4))
  .blend(ee.Image('projects/mapbiomas-workspace/DEGRADACAO/COLECAO/BETA/PROCESS/edge_area/edge_90m_col9_v1').gt(1).multiply(3))
  .blend(ee.Image('projects/mapbiomas-workspace/DEGRADACAO/COLECAO/BETA/PROCESS/edge_area/edge_60m_col9_v1').gt(1).multiply(2))
  .blend(ee.Image('projects/mapbiomas-workspace/DEGRADACAO/COLECAO/BETA/PROCESS/edge_area/edge_30m_col9_v1').gt(1).multiply(1));

var fragmentSize = landcover_base.where(landcover_base.eq(1), 7)
  .blend(ee.Image('projects/mapbiomas-workspace/DEGRADACAO/COLECAO/BETA/PROCESS/patch_size/size_75ha_col9_v1').gt(1).multiply(6))
  .blend(ee.Image('projects/mapbiomas-workspace/DEGRADACAO/COLECAO/BETA/PROCESS/patch_size/size_50ha_col9_v1').gt(1).multiply(5))
  .blend(ee.Image('projects/mapbiomas-workspace/DEGRADACAO/COLECAO/BETA/PROCESS/patch_size/size_25ha_col9_v1').gt(1).multiply(4))
  .blend(ee.Image('projects/mapbiomas-workspace/DEGRADACAO/COLECAO/BETA/PROCESS/patch_size/size_10ha_col9_v1').gt(1).multiply(3))
  .blend(ee.Image('projects/mapbiomas-workspace/DEGRADACAO/COLECAO/BETA/PROCESS/patch_size/size_5ha_col9_v1').gt(1).multiply(2))
  .blend(ee.Image('projects/mapbiomas-workspace/DEGRADACAO/COLECAO/BETA/PROCESS/patch_size/size_3ha_col9_v1').gt(1).multiply(1));

var distances100ha = landcover_base.multiply(0)
  .where(ee.Image('projects/mapbiomas-workspace/DEGRADACAO/ISOLATION_col9_v2/BR_Distance/natural_mask_maior100ha_85_234'),10)
  .where(ee.Image('projects/mapbiomas-workspace/DEGRADACAO/ISOLATION_col9_v2/nat_uso_frag50_dist05k_100_v7_85_23'),2)
  .where(ee.Image('projects/mapbiomas-workspace/DEGRADACAO/ISOLATION_col9_v2/nat_uso_frag25_dist05k_100_v7_85_23'),3)
  .where(ee.Image('projects/mapbiomas-workspace/DEGRADACAO/ISOLATION_col9_v2/nat_uso_frag50_dist10k_100_v7_85_23'),5)
  .where(ee.Image('projects/mapbiomas-workspace/DEGRADACAO/ISOLATION_col9_v2/nat_uso_frag25_dist10k_100_v7_85_23'),6)
  .where(ee.Image('projects/mapbiomas-workspace/DEGRADACAO/ISOLATION_col9_v2/nat_uso_frag50_dist20k_100_v7_85_23'),8)
  .where(ee.Image('projects/mapbiomas-workspace/DEGRADACAO/ISOLATION_col9_v2/nat_uso_frag25_dist20k_100_v7_85_23'),9);

var distances500ha = landcover_base.multiply(0)
  .where(ee.Image('projects/mapbiomas-workspace/DEGRADACAO/ISOLATION_col9_v2/BR_Distance/natural_mask_maior500ha_85_234'),11)
  .where(ee.Image('projects/mapbiomas-workspace/DEGRADACAO/ISOLATION_col9_v2/nat_uso_frag100_dist05k_500_v7_85_23'),1)
  .where(ee.Image('projects/mapbiomas-workspace/DEGRADACAO/ISOLATION_col9_v2/nat_uso_frag50_dist05k_500_v7_85_23'),2)
  .where(ee.Image('projects/mapbiomas-workspace/DEGRADACAO/ISOLATION_col9_v2/nat_uso_frag25_dist05k_500_v7_85_23'),3)
  .where(ee.Image('projects/mapbiomas-workspace/DEGRADACAO/ISOLATION_col9_v2/nat_uso_frag100_dist10k_500_v7_85_23'),4)
  .where(ee.Image('projects/mapbiomas-workspace/DEGRADACAO/ISOLATION_col9_v2/nat_uso_frag50_dist10k_500_v7_85_23'),5)
  .where(ee.Image('projects/mapbiomas-workspace/DEGRADACAO/ISOLATION_col9_v2/nat_uso_frag25_dist10k_500_v7_85_23'),6)
  .where(ee.Image('projects/mapbiomas-workspace/DEGRADACAO/ISOLATION_col9_v2/nat_uso_frag50_dist20k_500_v7_85_23'),8)
  .where(ee.Image('projects/mapbiomas-workspace/DEGRADACAO/ISOLATION_col9_v2/nat_uso_frag25_dist20k_500_v7_85_23'),9);

var distances1000ha = landcover_base.multiply(0)
  .where(ee.Image('projects/mapbiomas-workspace/DEGRADACAO/ISOLATION_col9_v2/BR_Distance/natural_mask_maior1000ha_85_234'),12)
  .where(ee.Image('projects/mapbiomas-workspace/DEGRADACAO/ISOLATION_col9_v2/nat_uso_frag100_dist05k_1000_v7_85_23'),1)
  .where(ee.Image('projects/mapbiomas-workspace/DEGRADACAO/ISOLATION_col9_v2/nat_uso_frag50_dist05k_1000_v7_85_23'),2)
  .where(ee.Image('projects/mapbiomas-workspace/DEGRADACAO/ISOLATION_col9_v2/nat_uso_frag25_dist05k_1000_v7_85_23'),3)
  .where(ee.Image('projects/mapbiomas-workspace/DEGRADACAO/ISOLATION_col9_v2/nat_uso_frag100_dist10k_1000_v7_85_23'),4)
  .where(ee.Image('projects/mapbiomas-workspace/DEGRADACAO/ISOLATION_col9_v2/nat_uso_frag50_dist10k_1000_v7_85_23'),5)
  .where(ee.Image('projects/mapbiomas-workspace/DEGRADACAO/ISOLATION_col9_v2/nat_uso_frag25_dist10k_1000_v7_85_23'),6)
  .where(ee.Image('projects/mapbiomas-workspace/DEGRADACAO/ISOLATION_col9_v2/nat_uso_frag100_dist20k_1000_v7_85_23'),7)
  .where(ee.Image('projects/mapbiomas-workspace/DEGRADACAO/ISOLATION_col9_v2/nat_uso_frag50_dist20k_1000_v7_85_23'),8)
  .where(ee.Image('projects/mapbiomas-workspace/DEGRADACAO/ISOLATION_col9_v2/nat_uso_frag25_dist20k_1000_v7_85_23'),9);

// Adicionando os objetos ao dicionário assetsConfig
var assetsConfig = {
  bordasArea: {
    name: 'Bordas de 30 a 1000m',
    assetName: 'mapbiomas_degradation_collection_beta_edge_area_30_to_1000m',
    bandName: 'classification_',
    visParams: {
      min: 0,
      max: 9,
      palette: ['#ddddaa', '#FF0001', '#32CD32', '#19B06F', '#6FA8DC', '#0B5394', '#A64D79', '#F54CA9', '#55604B']
    },
    legend: {
      0: "Vetor de pressão", 
      1: "30m", 
      2: "60m", 
      3: "90m", 
      4: "120m", 
      5: "150m", 
      6: "300m", 
      7: "600m", 
      8: "1000m", 
      9: "Área fonte"
    },
    theme: 'DEGRADATION',
    source: 'MAPBIOMAS',
    pixel: 'Classe referente a faixas da área de borda da vegetação nativa.',
    eeObject: bordasArea
  },
  
  fragmentSize: {
    name: 'Tamanho dos fragmentos (≤ 3 a 75 ha)',
    assetName: 'mapbiomas_degradation_collection_beta_size_lte_3_to_75_ha',
    bandName: 'classification_',
    visParams: {
      min: 0,
      max: 7,
      palette: ['#ddddaa', '#E50C08', '#FFAA5F', '#32CD32', '#19B06F', '#6FA8DC', '#0B5394', '#55604B']
    },
    legend: {
      0: "Vetor de pressão",
      1: "≤ 3ha",
      2: "≤ 5ha",
      3: "≤ 10ha",
      4: "≤ 25ha",
      5: "≤ 50ha",
      6: "≤ 75ha",
      7: "Área Fonte"
    },
    theme: 'DEGRADATION',
    source: 'MAPBIOMAS',
    pixel: 'Classe referente ao tamanho do fragmento de vegetação nativa.',
    eeObject: fragmentSize
  },
  
  distances100ha: {
    name: 'Distâncias de áreas fontes de 100ha',
    assetName: 'distance_100ha',
    bandName: 'classification_',
    visParams: {
      min: 0,
      max: 12,
      palette: [
        '#DDDDAA', '#000080', '#0000ff', '#8080ff', '#008000', '#00ff00', '#80ff80',
        '#800000', '#ff0000', '#FF8080', '#90aa90', '#708070', '#55604B'
      ]
    },
    legend: {
      0: 'Vetor de pressão',
      2: 'Fragmentos de até 50 ha distantes 5 km de áreas fonte',
      3: 'Fragmentos de até 25 ha distantes 5 km de áreas fonte',
      5: 'Fragmentos de até 50 ha distantes 10 km de áreas fonte',
      6: 'Fragmentos de até 25 ha distantes 10 km de áreas fonte',
      8: 'Fragmentos de até 50 ha distantes 20 km de áreas fonte',
      9: 'Fragmentos de até 25 ha distantes 20 km de áreas fonte',
      10: 'Área fonte com 100 a 500 ha',
      11: 'Área fonte com 500 a 1000 ha',
      12: 'Área fonte com 1000 ha ou mais'
    },
    theme: 'DEGRADATION',
    source: 'MAPBIOMAS',
    pixel: 'Classe de distância do fragmento alvo da fonte de vegetação nativa.',
    eeObject: distances100ha
  },

  distances500ha: {
    name: 'Distâncias de áreas fontes de 500ha',
    assetName: 'distance_500ha',
    bandName: 'classification_',
    visParams: {
      min: 0,
      max: 12,
      palette: [
        '#DDDDAA', '#000080', '#0000ff', '#8080ff', '#008000', '#00ff00', '#80ff80',
        '#800000', '#ff0000', '#FF8080', '#90aa90', '#708070', '#55604B'
      ]
    },
    legend: {
      0: 'Vetor de pressão',
      1: 'Fragmentos de até 100 ha distantes 5 km de áreas fonte',
      2: 'Fragmentos de até 50 ha distantes 5 km de áreas fonte',
      3: 'Fragmentos de até 25 ha distantes 5 km de áreas fonte',
      4: 'Fragmentos de até 100 ha distantes 10 km de áreas fonte',
      5: 'Fragmentos de até 50 ha distantes 10 km de áreas fonte',
      6: 'Fragmentos de até 25 ha distantes 10 km de áreas fonte',
      7: 'Fragmentos de até 100 ha distantes 20 km de áreas fonte',
      8: 'Fragmentos de até 50 ha distantes 20 km de áreas fonte',
      9: 'Fragmentos de até 25 ha distantes 20 km de áreas fonte',
      10: 'Área fonte com de 100 a 500 ha',
      11: 'Área fonte com 500 a 1000 ha',
      12: 'Área fonte com 1000 ha ou mais'
    },
    theme: 'DEGRADATION',
    source: 'MAPBIOMAS',
    pixel: 'Classe de distância do fragmento alvo da fonte de vegetação nativa.',
    eeObject: distances500ha
  },

  distances1000ha: {
    name: 'Distâncias de áreas fontes de 1000ha',
    assetName: 'distance_1000ha',
    bandName: 'classification_',
    visParams: {
      min: 0,
      max: 12,
      palette: [
        '#DDDDAA', '#000080', '#0000ff', '#8080ff', '#008000', '#00ff00', '#80ff80',
        '#800000', '#ff0000', '#FF8080', '#90aa90', '#708070', '#55604B'
      ]
    },
    legend: {
      0: 'Vetor de pressão',
      1: 'Fragmentos de até 100 ha distantes 5 km de áreas fonte',
      2: 'Fragmentos de até 50 ha distantes 5 km de áreas fonte',
      3: 'Fragmentos de até 25 ha distantes 5 km de áreas fonte',
      4: 'Fragmentos de até 100 ha distantes 10 km de áreas fonte',
      5: 'Fragmentos de até 50 ha distantes 10 km de áreas fonte',
      6: 'Fragmentos de até 25 ha distantes 10 km de áreas fonte',
      7: 'Fragmentos de até 100 ha distantes 20 km de áreas fonte',
      8: 'Fragmentos de até 50 ha distantes 20 km de áreas fonte',
      9: 'Fragmentos de até 25 ha distantes 20 km de áreas fonte',
      10: 'Área fonte com de 100 a 500 ha',
      11: 'Área fonte com 500 a 1000 ha',
      12: 'Área fonte com 1000 ha ou mais'
    },
    theme: 'DEGRADATION',
    source: 'MAPBIOMAS',
    pixel: 'Classe de distância do fragmento alvo da fonte de vegetação nativa.',
    eeObject: distances1000ha
  }
};


assetsConfig.bordasArea
assetsConfig.fragmentSize
assetsConfig.distances100ha
assetsConfig.distances500ha
assetsConfig.distances1000ha
/**
 * 
 */
var App = {

    options: {

        version: '0.1.3',

        logo: {
            uri: 'gs://mapbiomas-public/mapbiomas-logos/mapbiomas-logo-horizontal.b64',
            base64: logos.get('logo_mapbiomas_degradacao')
        },

        tables: Territories.pick([
            'mapbiomas-brazil'
        ]),

        collections: {
            'mapbiomas-brazil': {
            'degradation BETA: edge area': {
                'assets': {
                  'edge_classes':assetsConfig.bordasArea.eeObject,
                  'edge_30m':'projects/mapbiomas-workspace/DEGRADACAO/COLECAO/BETA/PROCESS/edge_area/edge_30m_col9_v1',
                  'edge_60m':'projects/mapbiomas-workspace/DEGRADACAO/COLECAO/BETA/PROCESS/edge_area/edge_60m_col9_v1',
                  'edge_90m':'projects/mapbiomas-workspace/DEGRADACAO/COLECAO/BETA/PROCESS/edge_area/edge_90m_col9_v1',
                  'edge_120m':'projects/mapbiomas-workspace/DEGRADACAO/COLECAO/BETA/PROCESS/edge_area/edge_120m_col9_v1',
                  'edge_150m':'projects/mapbiomas-workspace/DEGRADACAO/COLECAO/BETA/PROCESS/edge_area/edge_150m_col9_v1',
                  'edge_300m':'projects/mapbiomas-workspace/DEGRADACAO/COLECAO/BETA/PROCESS/edge_area/edge_300m_col9_v1',
                  'edge_600m':'projects/mapbiomas-workspace/DEGRADACAO/COLECAO/BETA/PROCESS/edge_area/edge_600m_col9_v1',
                  'edge_1000m':'projects/mapbiomas-workspace/DEGRADACAO/COLECAO/BETA/PROCESS/edge_area/edge_1000m_col9_v1',
                },
                'periods': {
                  'edge_classes':[ '1986', '1987', '1988', '1989', '1990','1991', '1992', '1993', '1994', '1995', '1996','1997', '1998', '1999', '2000', '2001', '2002','2003', '2004', '2005', '2006', '2007', '2008','2009', '2010', '2011', '2012', '2013', '2014','2015', '2016', '2017', '2018', '2019', '2020','2021', '2022' ],
                  'edge_30m':[ '1986', '1987', '1988', '1989', '1990','1991', '1992', '1993', '1994', '1995', '1996','1997', '1998', '1999', '2000', '2001', '2002','2003', '2004', '2005', '2006', '2007', '2008','2009', '2010', '2011', '2012', '2013', '2014','2015', '2016', '2017', '2018', '2019', '2020','2021', '2022' ],
                  'edge_60m':[ '1986', '1987', '1988', '1989', '1990','1991', '1992', '1993', '1994', '1995', '1996','1997', '1998', '1999', '2000', '2001', '2002','2003', '2004', '2005', '2006', '2007', '2008','2009', '2010', '2011', '2012', '2013', '2014','2015', '2016', '2017', '2018', '2019', '2020','2021', '2022' ],
                  'edge_90m':[ '1986', '1987', '1988', '1989', '1990','1991', '1992', '1993', '1994', '1995', '1996','1997', '1998', '1999', '2000', '2001', '2002','2003', '2004', '2005', '2006', '2007', '2008','2009', '2010', '2011', '2012', '2013', '2014','2015', '2016', '2017', '2018', '2019', '2020','2021', '2022' ],
                  'edge_120m':[ '1986', '1987', '1988', '1989', '1990','1991', '1992', '1993', '1994', '1995', '1996','1997', '1998', '1999', '2000', '2001', '2002','2003', '2004', '2005', '2006', '2007', '2008','2009', '2010', '2011', '2012', '2013', '2014','2015', '2016', '2017', '2018', '2019', '2020','2021', '2022' ],
                  'edge_150m':[ '1986', '1987', '1988', '1989', '1990','1991', '1992', '1993', '1994', '1995', '1996','1997', '1998', '1999', '2000', '2001', '2002','2003', '2004', '2005', '2006', '2007', '2008','2009', '2010', '2011', '2012', '2013', '2014','2015', '2016', '2017', '2018', '2019', '2020','2021', '2022' ],
                  'edge_300m':[ '1986', '1987', '1988', '1989', '1990','1991', '1992', '1993', '1994', '1995', '1996','1997', '1998', '1999', '2000', '2001', '2002','2003', '2004', '2005', '2006', '2007', '2008','2009', '2010', '2011', '2012', '2013', '2014','2015', '2016', '2017', '2018', '2019', '2020','2021', '2022' ],
                  'edge_600m':[ '1986', '1987', '1988', '1989', '1990','1991', '1992', '1993', '1994', '1995', '1996','1997', '1998', '1999', '2000', '2001', '2002','2003', '2004', '2005', '2006', '2007', '2008','2009', '2010', '2011', '2012', '2013', '2014','2015', '2016', '2017', '2018', '2019', '2020','2021', '2022' ],
                  'edge_1000m':[ '1986', '1987', '1988', '1989', '1990','1991', '1992', '1993', '1994', '1995', '1996','1997', '1998', '1999', '2000', '2001', '2002','2003', '2004', '2005', '2006', '2007', '2008','2009', '2010', '2011', '2012', '2013', '2014','2015', '2016', '2017', '2018', '2019', '2020','2021', '2022' ],
                },
                
            },
            'degradation BETA: patch size': {
                'assets': {
                  'size_classes':assetsConfig.fragmentSize.eeObject,
                  'size_3ha':'projects/mapbiomas-workspace/DEGRADACAO/COLECAO/BETA/PROCESS/patch_size/size_3ha_col9_v1',
                  'size_5ha':'projects/mapbiomas-workspace/DEGRADACAO/COLECAO/BETA/PROCESS/patch_size/size_5ha_col9_v1',
                  'size_10ha':'projects/mapbiomas-workspace/DEGRADACAO/COLECAO/BETA/PROCESS/patch_size/size_10ha_col9_v1',
                  'size_25ha':'projects/mapbiomas-workspace/DEGRADACAO/COLECAO/BETA/PROCESS/patch_size/size_25ha_col9_v1',
                  'size_50ha':'projects/mapbiomas-workspace/DEGRADACAO/COLECAO/BETA/PROCESS/patch_size/size_50ha_col9_v1', 
                  'size_75ha':'projects/mapbiomas-workspace/DEGRADACAO/COLECAO/BETA/PROCESS/patch_size/size_75ha_col9_v1',
                },
                'periods': {                  
                  'size_classes':[ '1986', '1987', '1988', '1989', '1990','1991', '1992', '1993', '1994', '1995', '1996','1997', '1998', '1999', '2000', '2001', '2002','2003', '2004', '2005', '2006', '2007', '2008','2009', '2010', '2011', '2012', '2013', '2014','2015', '2016', '2017', '2018', '2019', '2020','2021', '2022' ],
                  'size_3ha':[ '1986', '1987', '1988', '1989', '1990','1991', '1992', '1993', '1994', '1995', '1996','1997', '1998', '1999', '2000', '2001', '2002','2003', '2004', '2005', '2006', '2007', '2008','2009', '2010', '2011', '2012', '2013', '2014','2015', '2016', '2017', '2018', '2019', '2020','2021', '2022' ],
                  'size_5ha':[ '1986', '1987', '1988', '1989', '1990','1991', '1992', '1993', '1994', '1995', '1996','1997', '1998', '1999', '2000', '2001', '2002','2003', '2004', '2005', '2006', '2007', '2008','2009', '2010', '2011', '2012', '2013', '2014','2015', '2016', '2017', '2018', '2019', '2020','2021', '2022' ],
                  'size_10ha':[ '1986', '1987', '1988', '1989', '1990','1991', '1992', '1993', '1994', '1995', '1996','1997', '1998', '1999', '2000', '2001', '2002','2003', '2004', '2005', '2006', '2007', '2008','2009', '2010', '2011', '2012', '2013', '2014','2015', '2016', '2017', '2018', '2019', '2020','2021', '2022' ],
                  'size_25ha':[ '1986', '1987', '1988', '1989', '1990','1991', '1992', '1993', '1994', '1995', '1996','1997', '1998', '1999', '2000', '2001', '2002','2003', '2004', '2005', '2006', '2007', '2008','2009', '2010', '2011', '2012', '2013', '2014','2015', '2016', '2017', '2018', '2019', '2020','2021', '2022' ],
                  'size_50ha':[ '1986', '1987', '1988', '1989', '1990','1991', '1992', '1993', '1994', '1995', '1996','1997', '1998', '1999', '2000', '2001', '2002','2003', '2004', '2005', '2006', '2007', '2008','2009', '2010', '2011', '2012', '2013', '2014','2015', '2016', '2017', '2018', '2019', '2020','2021', '2022' ],
                  'size_75ha':[ '1986', '1987', '1988', '1989', '1990','1991', '1992', '1993', '1994', '1995', '1996','1997', '1998', '1999', '2000', '2001', '2002','2003', '2004', '2005', '2006', '2007', '2008','2009', '2010', '2011', '2012', '2013', '2014','2015', '2016', '2017', '2018', '2019', '2020','2021' , '2022'],
                },
                
            },
            'degradation BETA: patch isolation': {
                'assets': {
                  'distance_classes_100ha':assetsConfig.distances100ha.eeObject,
                  'distance_classes_500ha':assetsConfig.distances500ha.eeObject,
                  'distance_classes_1000ha':assetsConfig.distances1000ha.eeObject,
                  'Target lte_25ha Distance lte_05km Source gte_100ha':'projects/mapbiomas-workspace/DEGRADACAO/ISOLATION_col9_v2/nat_uso_frag25_dist05k_100_v7_85_23',
                  'Target lte_25ha Distance lte_05km Source gte_500ha':'projects/mapbiomas-workspace/DEGRADACAO/ISOLATION_col9_v2/nat_uso_frag25_dist05k_500_v7_85_23',
                  'Target lte_25ha Distance lte_05km Source gte_1000ha':'projects/mapbiomas-workspace/DEGRADACAO/ISOLATION_col9_v2/nat_uso_frag25_dist05k_1000_v7_85_23',
                  'Target lte_25ha Distance lte_10km Source gte_100ha':'projects/mapbiomas-workspace/DEGRADACAO/ISOLATION_col9_v2/nat_uso_frag25_dist10k_100_v7_85_23',
                  'Target lte_25ha Distance lte_10km Source gte_500ha':'projects/mapbiomas-workspace/DEGRADACAO/ISOLATION_col9_v2/nat_uso_frag25_dist10k_500_v7_85_23',
                  'Target lte_25ha Distance lte_10km Source gte_1000ha':'projects/mapbiomas-workspace/DEGRADACAO/ISOLATION_col9_v2/nat_uso_frag25_dist10k_1000_v7_85_23',
                  'Target lte_25ha Distance lte_20km Source gte_100ha':'projects/mapbiomas-workspace/DEGRADACAO/ISOLATION_col9_v2/nat_uso_frag25_dist20k_100_v7_85_23',
                  'Target lte_25ha Distance lte_20km Source gte_500ha':'projects/mapbiomas-workspace/DEGRADACAO/ISOLATION_col9_v2/nat_uso_frag25_dist20k_500_v7_85_23',
                  'Target lte_25ha Distance lte_20km Source gte_1000ha':'projects/mapbiomas-workspace/DEGRADACAO/ISOLATION_col9_v2/nat_uso_frag25_dist20k_1000_v7_85_23',
                  'Target lte_50ha Distance lte_05km Source gte_100ha':'projects/mapbiomas-workspace/DEGRADACAO/ISOLATION_col9_v2/nat_uso_frag50_dist05k_100_v7_85_23',
                  'Target lte_50ha Distance lte_05km Source gte_500ha':'projects/mapbiomas-workspace/DEGRADACAO/ISOLATION_col9_v2/nat_uso_frag50_dist05k_500_v7_85_23',
                  'Target lte_50ha Distance lte_05km Source gte_1000ha':'projects/mapbiomas-workspace/DEGRADACAO/ISOLATION_col9_v2/nat_uso_frag50_dist05k_1000_v7_85_23',
                  'Target lte_50ha Distance lte_10km Source gte_100ha':'projects/mapbiomas-workspace/DEGRADACAO/ISOLATION_col9_v2/nat_uso_frag50_dist10k_100_v7_85_23',
                  'Target lte_50ha Distance lte_10km Source gte_500ha':'projects/mapbiomas-workspace/DEGRADACAO/ISOLATION_col9_v2/nat_uso_frag50_dist10k_500_v7_85_23',
                  'Target lte_50ha Distance lte_10km Source gte_1000ha':'projects/mapbiomas-workspace/DEGRADACAO/ISOLATION_col9_v2/nat_uso_frag50_dist10k_1000_v7_85_23',
                  'Target lte_50ha Distance lte_20km Source gte_100ha':'projects/mapbiomas-workspace/DEGRADACAO/ISOLATION_col9_v2/nat_uso_frag50_dist20k_100_v7_85_23',
                  'Target lte_50ha Distance lte_20km Source gte_500ha':'projects/mapbiomas-workspace/DEGRADACAO/ISOLATION_col9_v2/nat_uso_frag50_dist20k_500_v7_85_23',
                  'Target lte_50ha Distance lte_20km Source gte_1000ha':'projects/mapbiomas-workspace/DEGRADACAO/ISOLATION_col9_v2/nat_uso_frag50_dist20k_1000_v7_85_23',
                  'Target lte_100ha Distance lte_05km Source gte_500ha':'projects/mapbiomas-workspace/DEGRADACAO/ISOLATION_col9_v2/nat_uso_frag100_dist05k_500_v7_85_23',
                  'Target lte_100ha Distance lte_05km Source gte_1000ha':'projects/mapbiomas-workspace/DEGRADACAO/ISOLATION_col9_v2/nat_uso_frag100_dist05k_1000_v7_85_23',
                  'Target lte_100ha Distance lte_10km Source gte_500ha':'projects/mapbiomas-workspace/DEGRADACAO/ISOLATION_col9_v2/nat_uso_frag100_dist10k_500_v7_85_23',
                  'Target lte_100ha Distance lte_10km Source gte_1000ha':'projects/mapbiomas-workspace/DEGRADACAO/ISOLATION_col9_v2/nat_uso_frag100_dist10k_1000_v7_85_23',
                  'Target lte_100ha Distance lte_20km Source gte_500ha':'projects/mapbiomas-workspace/DEGRADACAO/ISOLATION_col9_v2/nat_uso_frag100_dist20k_500_v7_85_23',
                  'Target lte_100ha Distance lte_20km Source gte_1000ha':'projects/mapbiomas-workspace/DEGRADACAO/ISOLATION_col9_v2/nat_uso_frag100_dist20k_1000_v7_85_23',
                },
                'periods': {
                  'distance_classes_100ha':[ '1986', '1987', '1988', '1989', '1990','1991', '1992', '1993', '1994', '1995', '1996','1997', '1998', '1999', '2000', '2001', '2002','2003', '2004', '2005', '2006', '2007', '2008','2009', '2010', '2011', '2012', '2013', '2014','2015', '2016', '2017', '2018', '2019', '2020','2021', '2022' ],
                  'distance_classes_500ha':[ '1986', '1987', '1988', '1989', '1990','1991', '1992', '1993', '1994', '1995', '1996','1997', '1998', '1999', '2000', '2001', '2002','2003', '2004', '2005', '2006', '2007', '2008','2009', '2010', '2011', '2012', '2013', '2014','2015', '2016', '2017', '2018', '2019', '2020','2021', '2022' ],
                  'distance_classes_1000ha':[ '1986', '1987', '1988', '1989', '1990','1991', '1992', '1993', '1994', '1995', '1996','1997', '1998', '1999', '2000', '2001', '2002','2003', '2004', '2005', '2006', '2007', '2008','2009', '2010', '2011', '2012', '2013', '2014','2015', '2016', '2017', '2018', '2019', '2020','2021', '2022' ],
                  'Target lte_25ha Distance lte_05km Source gte_100ha':[ '1986', '1987', '1988', '1989', '1990','1991', '1992', '1993', '1994', '1995', '1996','1997', '1998', '1999', '2000', '2001', '2002','2003', '2004', '2005', '2006', '2007', '2008','2009', '2010', '2011', '2012', '2013', '2014','2015', '2016', '2017', '2018', '2019', '2020','2021', '2022' ],
                  'Target lte_25ha Distance lte_05km Source gte_500ha':[ '1986', '1987', '1988', '1989', '1990','1991', '1992', '1993', '1994', '1995', '1996','1997', '1998', '1999', '2000', '2001', '2002','2003', '2004', '2005', '2006', '2007', '2008','2009', '2010', '2011', '2012', '2013', '2014','2015', '2016', '2017', '2018', '2019', '2020','2021', '2022' ],
                  'Target lte_25ha Distance lte_05km Source gte_1000ha':[ '1986', '1987', '1988', '1989', '1990','1991', '1992', '1993', '1994', '1995', '1996','1997', '1998', '1999', '2000', '2001', '2002','2003', '2004', '2005', '2006', '2007', '2008','2009', '2010', '2011', '2012', '2013', '2014','2015', '2016', '2017', '2018', '2019', '2020','2021', '2022' ],
                  'Target lte_25ha Distance lte_10km Source gte_100ha':[ '1986', '1987', '1988', '1989', '1990','1991', '1992', '1993', '1994', '1995', '1996','1997', '1998', '1999', '2000', '2001', '2002','2003', '2004', '2005', '2006', '2007', '2008','2009', '2010', '2011', '2012', '2013', '2014','2015', '2016', '2017', '2018', '2019', '2020','2021', '2022' ],
                  'Target lte_25ha Distance lte_10km Source gte_500ha':[ '1986', '1987', '1988', '1989', '1990','1991', '1992', '1993', '1994', '1995', '1996','1997', '1998', '1999', '2000', '2001', '2002','2003', '2004', '2005', '2006', '2007', '2008','2009', '2010', '2011', '2012', '2013', '2014','2015', '2016', '2017', '2018', '2019', '2020','2021', '2022' ],
                  'Target lte_25ha Distance lte_10km Source gte_1000ha':[ '1986', '1987', '1988', '1989', '1990','1991', '1992', '1993', '1994', '1995', '1996','1997', '1998', '1999', '2000', '2001', '2002','2003', '2004', '2005', '2006', '2007', '2008','2009', '2010', '2011', '2012', '2013', '2014','2015', '2016', '2017', '2018', '2019', '2020','2021', '2022' ],
                  'Target lte_25ha Distance lte_20km Source gte_100ha':[ '1986', '1987', '1988', '1989', '1990','1991', '1992', '1993', '1994', '1995', '1996','1997', '1998', '1999', '2000', '2001', '2002','2003', '2004', '2005', '2006', '2007', '2008','2009', '2010', '2011', '2012', '2013', '2014','2015', '2016', '2017', '2018', '2019', '2020','2021', '2022' ],
                  'Target lte_25ha Distance lte_20km Source gte_500ha':[ '1986', '1987', '1988', '1989', '1990','1991', '1992', '1993', '1994', '1995', '1996','1997', '1998', '1999', '2000', '2001', '2002','2003', '2004', '2005', '2006', '2007', '2008','2009', '2010', '2011', '2012', '2013', '2014','2015', '2016', '2017', '2018', '2019', '2020','2021', '2022' ],
                  'Target lte_25ha Distance lte_20km Source gte_1000ha':[ '1986', '1987', '1988', '1989', '1990','1991', '1992', '1993', '1994', '1995', '1996','1997', '1998', '1999', '2000', '2001', '2002','2003', '2004', '2005', '2006', '2007', '2008','2009', '2010', '2011', '2012', '2013', '2014','2015', '2016', '2017', '2018', '2019', '2020','2021', '2022' ],
                  'Target lte_50ha Distance lte_05km Source gte_100ha':[ '1986', '1987', '1988', '1989', '1990','1991', '1992', '1993', '1994', '1995', '1996','1997', '1998', '1999', '2000', '2001', '2002','2003', '2004', '2005', '2006', '2007', '2008','2009', '2010', '2011', '2012', '2013', '2014','2015', '2016', '2017', '2018', '2019', '2020','2021', '2022' ],
                  'Target lte_50ha Distance lte_05km Source gte_500ha':[ '1986', '1987', '1988', '1989', '1990','1991', '1992', '1993', '1994', '1995', '1996','1997', '1998', '1999', '2000', '2001', '2002','2003', '2004', '2005', '2006', '2007', '2008','2009', '2010', '2011', '2012', '2013', '2014','2015', '2016', '2017', '2018', '2019', '2020','2021', '2022' ],
                  'Target lte_50ha Distance lte_05km Source gte_1000ha':[ '1986', '1987', '1988', '1989', '1990','1991', '1992', '1993', '1994', '1995', '1996','1997', '1998', '1999', '2000', '2001', '2002','2003', '2004', '2005', '2006', '2007', '2008','2009', '2010', '2011', '2012', '2013', '2014','2015', '2016', '2017', '2018', '2019', '2020','2021', '2022' ],
                  'Target lte_50ha Distance lte_10km Source gte_100ha':[ '1986', '1987', '1988', '1989', '1990','1991', '1992', '1993', '1994', '1995', '1996','1997', '1998', '1999', '2000', '2001', '2002','2003', '2004', '2005', '2006', '2007', '2008','2009', '2010', '2011', '2012', '2013', '2014','2015', '2016', '2017', '2018', '2019', '2020','2021', '2022' ],
                  'Target lte_50ha Distance lte_10km Source gte_500ha':[ '1986', '1987', '1988', '1989', '1990','1991', '1992', '1993', '1994', '1995', '1996','1997', '1998', '1999', '2000', '2001', '2002','2003', '2004', '2005', '2006', '2007', '2008','2009', '2010', '2011', '2012', '2013', '2014','2015', '2016', '2017', '2018', '2019', '2020','2021', '2022' ],
                  'Target lte_50ha Distance lte_10km Source gte_1000ha':[ '1986', '1987', '1988', '1989', '1990','1991', '1992', '1993', '1994', '1995', '1996','1997', '1998', '1999', '2000', '2001', '2002','2003', '2004', '2005', '2006', '2007', '2008','2009', '2010', '2011', '2012', '2013', '2014','2015', '2016', '2017', '2018', '2019', '2020','2021', '2022' ],
                  'Target lte_50ha Distance lte_20km Source gte_100ha':[ '1986', '1987', '1988', '1989', '1990','1991', '1992', '1993', '1994', '1995', '1996','1997', '1998', '1999', '2000', '2001', '2002','2003', '2004', '2005', '2006', '2007', '2008','2009', '2010', '2011', '2012', '2013', '2014','2015', '2016', '2017', '2018', '2019', '2020','2021', '2022' ],
                  'Target lte_50ha Distance lte_20km Source gte_500ha':[ '1986', '1987', '1988', '1989', '1990','1991', '1992', '1993', '1994', '1995', '1996','1997', '1998', '1999', '2000', '2001', '2002','2003', '2004', '2005', '2006', '2007', '2008','2009', '2010', '2011', '2012', '2013', '2014','2015', '2016', '2017', '2018', '2019', '2020','2021', '2022' ],
                  'Target lte_50ha Distance lte_20km Source gte_1000ha':[ '1986', '1987', '1988', '1989', '1990','1991', '1992', '1993', '1994', '1995', '1996','1997', '1998', '1999', '2000', '2001', '2002','2003', '2004', '2005', '2006', '2007', '2008','2009', '2010', '2011', '2012', '2013', '2014','2015', '2016', '2017', '2018', '2019', '2020','2021', '2022' ],
                  'Target lte_100ha Distance lte_05km Source gte_500ha':[ '1986', '1987', '1988', '1989', '1990','1991', '1992', '1993', '1994', '1995', '1996','1997', '1998', '1999', '2000', '2001', '2002','2003', '2004', '2005', '2006', '2007', '2008','2009', '2010', '2011', '2012', '2013', '2014','2015', '2016', '2017', '2018', '2019', '2020','2021', '2022' ],
                  'Target lte_100ha Distance lte_05km Source gte_1000ha':[ '1986', '1987', '1988', '1989', '1990','1991', '1992', '1993', '1994', '1995', '1996','1997', '1998', '1999', '2000', '2001', '2002','2003', '2004', '2005', '2006', '2007', '2008','2009', '2010', '2011', '2012', '2013', '2014','2015', '2016', '2017', '2018', '2019', '2020','2021', '2022' ],
                  'Target lte_100ha Distance lte_10km Source gte_500ha':[ '1986', '1987', '1988', '1989', '1990','1991', '1992', '1993', '1994', '1995', '1996','1997', '1998', '1999', '2000', '2001', '2002','2003', '2004', '2005', '2006', '2007', '2008','2009', '2010', '2011', '2012', '2013', '2014','2015', '2016', '2017', '2018', '2019', '2020','2021', '2022' ],
                  'Target lte_100ha Distance lte_10km Source gte_1000ha':[ '1986', '1987', '1988', '1989', '1990','1991', '1992', '1993', '1994', '1995', '1996','1997', '1998', '1999', '2000', '2001', '2002','2003', '2004', '2005', '2006', '2007', '2008','2009', '2010', '2011', '2012', '2013', '2014','2015', '2016', '2017', '2018', '2019', '2020','2021', '2022' ],
                  'Target lte_100ha Distance lte_20km Source gte_500ha':[ '1986', '1987', '1988', '1989', '1990','1991', '1992', '1993', '1994', '1995', '1996','1997', '1998', '1999', '2000', '2001', '2002','2003', '2004', '2005', '2006', '2007', '2008','2009', '2010', '2011', '2012', '2013', '2014','2015', '2016', '2017', '2018', '2019', '2020','2021', '2022' ],
                  'Target lte_100ha Distance lte_20km Source gte_1000ha':[ '1986', '1987', '1988', '1989', '1990','1991', '1992', '1993', '1994', '1995', '1996','1997', '1998', '1999', '2000', '2001', '2002','2003', '2004', '2005', '2006', '2007', '2008','2009', '2010', '2011', '2012', '2013', '2014','2015', '2016', '2017', '2018', '2019', '2020','2021', '2022' ],
                },
                
            },
            'degradation BETA: fire': {
                    'assets': {
                      'recurrence':'projects/mapbiomas-workspace/DEGRADACAO/COLECAO/BETA/PROCESS/fire/recurrence_col9_v1',
                      'age':'projects/mapbiomas-workspace/DEGRADACAO/COLECAO/BETA/PROCESS/fire/age_col9_v1',
                      'accumulated_burned_coverage':'projects/mapbiomas-workspace/DEGRADACAO/COLECAO/BETA/PROCESS/fire/recurrence_col9_v1',
 
                    },
                    'periods': {
                      'recurrence':[ '1986', '1987', '1988', '1989', '1990','1991', '1992', '1993', '1994', '1995', '1996','1997', '1998', '1999', '2000', '2001', '2002','2003', '2004', '2005', '2006', '2007', '2008','2009', '2010', '2011', '2012', '2013', '2014','2015', '2016', '2017', '2018', '2019', '2020','2021', '2022'],
                      'age':[ '1986', '1987', '1988', '1989', '1990','1991', '1992', '1993', '1994', '1995', '1996','1997', '1998', '1999', '2000', '2001', '2002','2003', '2004', '2005', '2006', '2007', '2008','2009', '2010', '2011', '2012', '2013', '2014','2015', '2016', '2017', '2018', '2019', '2020','2021', '2022' ],
                      'accumulated_burned_coverage':[ '1986', '1987', '1988', '1989', '1990','1991', '1992', '1993', '1994', '1995', '1996','1997', '1998', '1999', '2000', '2001', '2002','2003', '2004', '2005', '2006', '2007', '2008','2009', '2010', '2011', '2012', '2013', '2014','2015', '2016', '2017', '2018', '2019', '2020','2021', '2022' ],

                    },
                },
            'degradation BETA: secondary vegetation': {
                'assets': {

                  'secondary_age':'projects/mapbiomas-workspace/DEGRADACAO/COLECAO/BETA/PROCESS/secondary_vegetation/secondary_vegetation_age_col9_v1',
                  'secondary_coverage':'projects/mapbiomas-workspace/DEGRADACAO/COLECAO/BETA/PROCESS/secondary_vegetation/secondary_vegetation_age_col9_v1',

                },
                'periods': {
                  'secondary_age':[ '1986', '1987', '1988', '1989', '1990','1991', '1992', '1993', '1994', '1995', '1996','1997', '1998', '1999', '2000', '2001', '2002','2003', '2004', '2005', '2006', '2007', '2008','2009', '2010', '2011', '2012', '2013', '2014','2015', '2016', '2017', '2018', '2019', '2020','2021', '2022' ],
                  'secondary_coverage':[ '1986', '1987', '1988', '1989', '1990','1991', '1992', '1993', '1994', '1995', '1996','1997', '1998', '1999', '2000', '2001', '2002','2003', '2004', '2005', '2006', '2007', '2008','2009', '2010', '2011', '2012', '2013', '2014','2015', '2016', '2017', '2018', '2019', '2020','2021', '2022' ],

                },
            },
            },
            /*'mapbiomas-indonesia': {},*/
        },

        bandsNames: {
          'edge_classes':assetsConfig.bordasArea.bandName,
          "edge_30m":"edge_30m_",
          "edge_60m":"edge_60m_",
          "edge_90m":"edge_90m_",
          "edge_120m":"edge_120m_",
          "edge_150m":"edge_150m_",
          "edge_600m":"edge_600m_",
          "edge_300m":"edge_300m_",
          "edge_1000m":"edge_1000m_",
    
          'size_classes':assetsConfig.fragmentSize.bandName,
    
          "size_3ha":"size_3ha_",
          "size_5ha":"size_5ha_",
          "size_10ha":"size_10ha_",
          "size_25ha":"size_25ha_",
          "size_50ha":"size_50ha_",
          "size_75ha":"size_75ha_",
    
          "distance_classes_100ha":assetsConfig.distances100ha.bandName,
          "distance_classes_500ha":assetsConfig.distances500ha.bandName,
          "distance_classes_1000ha":assetsConfig.distances1000ha.bandName,
    
          "Target lte_25ha Distance lte_05km Source gte_100ha":"nat_",
          "Target lte_25ha Distance lte_05km Source gte_500ha":"nat_",
          "Target lte_25ha Distance lte_05km Source gte_1000ha":"nat_",
          "Target lte_25ha Distance lte_10km Source gte_100ha":"nat_",
          "Target lte_25ha Distance lte_10km Source gte_500ha":"nat_",
          "Target lte_25ha Distance lte_10km Source gte_1000ha":"nat_",
          "Target lte_25ha Distance lte_20km Source gte_100ha":"nat_",
          "Target lte_25ha Distance lte_20km Source gte_500ha":"nat_",
          "Target lte_25ha Distance lte_20km Source gte_1000ha":"nat_",
          "Target lte_50ha Distance lte_05km Source gte_100ha":"nat_",
          "Target lte_50ha Distance lte_05km Source gte_500ha":"nat_",
          "Target lte_50ha Distance lte_05km Source gte_1000ha":"nat_",
          "Target lte_50ha Distance lte_10km Source gte_100ha":"nat_",
          "Target lte_50ha Distance lte_10km Source gte_500ha":"nat_",
          "Target lte_50ha Distance lte_10km Source gte_1000ha":"nat_",
          "Target lte_50ha Distance lte_20km Source gte_100ha":"nat_",
          "Target lte_50ha Distance lte_20km Source gte_500ha":"nat_",
          "Target lte_50ha Distance lte_20km Source gte_1000ha":"nat_",
          "Target lte_100ha Distance lte_05km Source gte_500ha":"nat_",
          "Target lte_100ha Distance lte_05km Source gte_1000ha":"nat_",
          "Target lte_100ha Distance lte_10km Source gte_500ha":"nat_",
          "Target lte_100ha Distance lte_10km Source gte_1000ha":"nat_",
          "Target lte_100ha Distance lte_20km Source gte_500ha":"nat_",
          "Target lte_100ha Distance lte_20km Source gte_1000ha":"nat_",
          "accumulated_coverage":"recurrence_",
          "recurrence":"recurrence_",
          "age":"age_",
          "accumulated_burned_coverage":"recurrence_",
          "secondary_age":"age_",
          "secondary_coverage":"age_",
        },
        dataType: 'edge_30m',
        data: {},


        ranges: {
          'edge_classes':{'min':assetsConfig.bordasArea.visParams.min, 'max':assetsConfig.bordasArea.visParams.max},
          'size_classes':{'min':assetsConfig.fragmentSize.visParams.min, 'max':assetsConfig.fragmentSize.visParams.max},
          "distance_classes_100ha":{'min':assetsConfig.distances100ha.visParams.min, 'max':assetsConfig.distances100ha.visParams.max},
          "distance_classes_500ha":{'min':assetsConfig.distances500ha.visParams.min, 'max':assetsConfig.distances500ha.visParams.max},
          "distance_classes_1000ha":{'min':assetsConfig.distances1000ha.visParams.min, 'max':assetsConfig.distances1000ha.visParams.max},
          "edge_30m":{'min':0,'max':69},
          "edge_60m":{'min':0,'max':69},
          "edge_90m":{'min':0,'max':69},
          "edge_120m":{'min':0,'max':69},
          "edge_150m":{'min':0,'max':69},
          "edge_600m":{'min':0,'max':69},
          "edge_300m":{'min':0,'max':69},
          "edge_1000m":{'min':0,'max':69},
          "size_3ha":{'min':0,'max':69},
          "size_5ha":{'min':0,'max':69},
          "size_10ha":{'min':0,'max':69},
          "size_25ha":{'min':0,'max':69},
          "size_50ha":{'min':0,'max':69},
          "size_75ha":{'min':0,'max':69},
          "Target_lte_25ha_Distance_lte_05km_Source_gte_100ha":{'min':0,'max':69},
          "Target_lte_25ha_Distance_lte_05km_Source_gte_500ha":{'min':0,'max':69},
          "Target_lte_25ha_Distance_lte_05km_Source_gte_1000ha":{'min':0,'max':69},
          "Target_lte_25ha_Distance_lte_10km_Source_gte_100ha":{'min':0,'max':69},
          "Target_lte_25ha_Distance_lte_10km_Source_gte_500ha":{'min':0,'max':69},
          "Target_lte_25ha_Distance_lte_10km_Source_gte_1000ha":{'min':0,'max':69},
          "Target_lte_25ha_Distance_lte_20km_Source_gte_100ha":{'min':0,'max':69},
          "Target_lte_25ha_Distance_lte_20km_Source_gte_500ha":{'min':0,'max':69},
          "Target_lte_25ha_Distance_lte_20km_Source_gte_1000ha":{'min':0,'max':69},
          "Target_lte_50ha_Distance_lte_05km_Source_gte_100ha":{'min':0,'max':69},
          "Target_lte_50ha_Distance_lte_05km_Source_gte_500ha":{'min':0,'max':69},
          "Target_lte_50ha_Distance_lte_05km_Source_gte_1000ha":{'min':0,'max':69},
          "Target_lte_50ha_Distance_lte_10km_Source_gte_100ha":{'min':0,'max':69},
          "Target_lte_50ha_Distance_lte_10km_Source_gte_500ha":{'min':0,'max':69},
          "Target_lte_50ha_Distance_lte_10km_Source_gte_1000ha":{'min':0,'max':69},
          "Target_lte_50ha_Distance_lte_20km_Source_gte_100ha":{'min':0,'max':69},
          "Target_lte_50ha_Distance_lte_20km_Source_gte_500ha":{'min':0,'max':69},
          "Target_lte_50ha_Distance_lte_20km_Source_gte_1000ha":{'min':0,'max':69},
          "Target_lte_100ha_Distance_lte_05km_Source_gte_500ha":{'min':0,'max':69},
          "Target_lte_100ha_Distance_lte_05km_Source_gte_1000ha":{'min':0,'max':69},
          "Target_lte_100ha_Distance_lte_10km_Source_gte_500ha":{'min':0,'max':69},
          "Target_lte_100ha_Distance_lte_10km_Source_gte_1000ha":{'min':0,'max':69},
          "Target_lte_100ha_Distance_lte_20km_Source_gte_500ha":{'min':0,'max':69},
          "Target_lte_100ha_Distance_lte_20km_Source_gte_1000ha":{'min':0,'max':69},
          "recurrence":{'min':0,'max':39},
          "age":{'min':0,'max':39},
          "accumulated_burned_coverage":{'min':0,'max':69},
          "secondary_age":{'min':0,'max':39},
          "secondary_coverage":{'min':0,'max':69},

        },

        vector: null,
        activeFeature: null,
        activeName: '',

        mapbiomasRegion: '',

        palette: {

          'edge_classes':assetsConfig.bordasArea.visParams.palette,
          
          'size_classes':assetsConfig.fragmentSize.visParams.palette,
          
          "distance_classes_100ha":assetsConfig.distances100ha.visParams.palette,
          "distance_classes_500ha":assetsConfig.distances500ha.visParams.palette,
          "distance_classes_1000ha":assetsConfig.distances1000ha.visParams.palette,

          "edge_30m":palettes.get('classification9'),
          "edge_60m":palettes.get('classification9'),
          "edge_90m":palettes.get('classification9'),
          "edge_120m":palettes.get('classification9'),
          "edge_150m":palettes.get('classification9'),
          "edge_600m":palettes.get('classification9'),
          "edge_300m":palettes.get('classification9'),
          "edge_1000m":palettes.get('classification9'),

          "size_3ha":palettes.get('classification9'),
          "size_5ha":palettes.get('classification9'),
          "size_10ha":palettes.get('classification9'),
          "size_25ha":palettes.get('classification9'),
          "size_50ha":palettes.get('classification9'),
          "size_75ha":palettes.get('classification9'),

          "Target lte_25ha Distance lte_05km Source gte_100ha":palettes.get('classification9'),
          "Target lte_25ha Distance lte_05km Source gte_500ha":palettes.get('classification9'),
          "Target lte_25ha Distance lte_05km Source gte_1000ha":palettes.get('classification9'),
          "Target lte_25ha Distance lte_10km Source gte_100ha":palettes.get('classification9'),
          "Target lte_25ha Distance lte_10km Source gte_500ha":palettes.get('classification9'),
          "Target lte_25ha Distance lte_10km Source gte_1000ha":palettes.get('classification9'),
          "Target lte_25ha Distance lte_20km Source gte_100ha":palettes.get('classification9'),
          "Target lte_25ha Distance lte_20km Source gte_500ha":palettes.get('classification9'),
          "Target lte_25ha Distance lte_20km Source gte_1000ha":palettes.get('classification9'),
          "Target lte_50ha Distance lte_05km Source gte_100ha":palettes.get('classification9'),
          "Target lte_50ha Distance lte_05km Source gte_500ha":palettes.get('classification9'),
          "Target lte_50ha Distance lte_05km Source gte_1000ha":palettes.get('classification9'),
          "Target lte_50ha Distance lte_10km Source gte_100ha":palettes.get('classification9'),
          "Target lte_50ha Distance lte_10km Source gte_500ha":palettes.get('classification9'),
          "Target lte_50ha Distance lte_10km Source gte_1000ha":palettes.get('classification9'),
          "Target lte_50ha Distance lte_20km Source gte_100ha":palettes.get('classification9'),
          "Target lte_50ha Distance lte_20km Source gte_500ha":palettes.get('classification9'),
          "Target lte_50ha Distance lte_20km Source gte_1000ha":palettes.get('classification9'),
          "Target lte_100ha Distance lte_05km Source gte_500ha":palettes.get('classification9'),
          "Target lte_100ha Distance lte_05km Source gte_1000ha":palettes.get('classification9'),
          "Target lte_100ha Distance lte_10km Source gte_500ha":palettes.get('classification9'),
          "Target lte_100ha Distance lte_10km Source gte_1000ha":palettes.get('classification9'),
          "Target lte_100ha Distance lte_20km Source gte_500ha":palettes.get('classification9'),
          "Target lte_100ha Distance lte_20km Source gte_1000ha":palettes.get('classification9'),
          
          "recurrence":fire_palettes.get('frequencia_2'),
          "age":fire_palettes.get('ano_do_ultimo_fogo_2'),
          "accumulated_burned_coverage":palettes.get('classification9'),
          "secondary_age":fire_palettes.get('vegetacao_secundaria'),
          "secondary_coverage":palettes.get('classification9'),

        },

        taskid: 1,

        bufferDistance: 0,

    },

    init: function () {

        this.ui.init();

    },

    /**
     * Short name of the active territory, for layers and exported files.
     */
    tableShortName: function () {
        return Naming.tableShortName(App.options.tables, App.options.activeName);
    },

    setVersion: function () {

        App.ui.form.labelTitle.setValue('MapBiomas-Degradation User Toolkit ' + App.options.version);

    },

    formatName: function (input) {
          // Mapeamento de caracteres com acentos para caracteres simples
          var acentos = {
            'á': 'a', 'ã': 'a', 'â': 'a', 'à': 'a', 'ä': 'a',
            'é': 'e', 'ê': 'e', 'è': 'e', 'ë': 'e',
            'í': 'i', 'î': 'i', 'ì': 'i', 'ï': 'i',
            'ó': 'o', 'õ': 'o', 'ô': 'o', 'ò': 'o', 'ö': 'o',
            'ú': 'u', 'û': 'u', 'ù': 'u', 'ü': 'u',
            'ç': 'c',
            'Á': 'a', 'Ã': 'a', 'Â': 'a', 'À': 'a', 'Ä': 'a',
            'É': 'e', 'Ê': 'e', 'È': 'e', 'Ë': 'e',
            'Í': 'i', 'Î': 'i', 'Ì': 'i', 'Ï': 'i',
            'Ó': 'o', 'Õ': 'o', 'Ô': 'o', 'Ò': 'o', 'Ö': 'o',
            'Ú': 'u', 'Û': 'u', 'Ù': 'u', 'Ü': 'u',
            'Ç': 'c'
          };
          
          // Remove acentos
          var semAcentos = input.split('').map(function(char) {
            return acentos[char] || char;
          }).join('');
          
          // Converte para caixa baixa
          var minuscula = semAcentos.toLowerCase();
          
          // Substitui espaços por underscores
          var comUnderscores = minuscula.replace(/\s+/g, '_');
          
          // Substitui traço por underscores
          var comtraco = comUnderscores.replace(/-/g, '_');
          
          // Remove caracteres especiais
          var resultado = comtraco.replace(/[^a-z0-9_]/g, '');
          
          return resultado;
        },
    
    formatLabelWithLinks: function(text,links){
      
      var panel = ui.Panel({
          'layout': ui.Panel.Layout.flow('horizontal',true),
          'style': {'margin': '0px'},
      });
      // Função para adicionar texto com links
      function addTextWithLinks(panel, text, linkDict) {
        // Expressão regular para encontrar palavras entre **
        var regex = /\*\*(.*?)\*\*/g;
        var lastIndex = 0;
        var match;
      
        while ((match = regex.exec(text)) !== null) {
          // Adiciona texto antes da palavra com link
          if (match.index > lastIndex) {
            panel.add(ui.Label(text.substring(lastIndex, match.index),{'margin': '0px 2px 0px 2px'}));
          }
      
          // Adiciona a palavra como link
          var linkText = match[1];
          var url = linkDict[linkText];
          if (url) {
            var link = ui.Label({
              value: linkText,
              targetUrl: url,
              style: {color: 'blue', textDecoration: 'underline','margin': '0px'}
            });
            panel.add(link);
          } else {
            // Adiciona como texto normal se não houver URL no dicionário
            panel.add(ui.Label(linkText,{'margin': '0px'}));
          }
      
          lastIndex = regex.lastIndex;
        }
      
        // Adiciona o restante do texto após a última correspondência
        if (lastIndex < text.length) {
          panel.add(ui.Label(text.substring(lastIndex)));
        }
      }
      
      // Texto com palavras para transformar em links
      links = links === undefined ? {} : links;
      
      // Adiciona o texto e links ao painel
      addTextWithLinks(panel, text, links);
      return panel;

    },

    ui: {

        init: function () {

            this.form.init();

        },


        setMapbiomasRegion: function (regionName) {

            App.ui.form.labelDownloads.setUrl(Downloads.pageOf(regionName));

            App.options.mapbiomasRegion = regionName;

            // App.setPalette(regionName);

            App.ui.loadCollectionList(regionName);
            App.ui.loadTablesNames(regionName);

        },

        setDataType: function (dataType) {

            App.options.dataType = dataType;

        },

        loadCollectionList: function (regionName) {

            App.ui.form.selectCollection.setPlaceholder('loading collections...');

            App.ui.form.selectCollection = ui.Select({
                'items': Object.keys(App.options.collections[regionName]).reverse(),
                'placeholder': 'select collection',
                'onChange': function (collectioName) {
                    ee.Number(1).evaluate(
                        function (a) {
                          
                          var datas = Object.keys(App.options.collections[regionName][collectioName].assets);
                          
    
                          datas.forEach(function(key){

                            var mod_100_exception = ['accumulated_burned_coverage', 'secondary_coverage'];
                            var div_100_exception = ['recurrence','age','secondary_age'];
                            
                            if (mod_100_exception.indexOf(key) !== -1){
                              App.options.data[key] = ee.Image(App.options.collections[regionName][collectioName].assets[key]).mod(100).int8();
                              return ; 
                            }
                            
                            if (div_100_exception.indexOf(key) !== -1){
                              App.options.data[key] = ee.Image(App.options.collections[regionName][collectioName].assets[key]).divide(100).int8();
                              return ;
                            }

                              App.options.data[key] = ee.Image(App.options.collections[regionName][collectioName].assets[key]);
                            
                          });
                          
                          App.ui.setDataType(datas[0]);
                            //--------------------------------------------

                            var year = App.options.collections[regionName][collectioName].periods[datas[0]].slice(-1)[0];

                            Map.centerObject(App.options.data[Object.keys(App.options.data)[0]], 5);

                            App.ui.loadDataType();
                            
                        }
                    );

                },
                'style': {
                    'stretch': 'horizontal'
                }
            });

            App.ui.form.panelCollection.widgets()
                .set(1, App.ui.form.selectCollection);

        },

        loadTablesNames: function (regionName) {

            App.ui.form.selectRegion.setPlaceholder('loading tables names...');

            var allTablesNames = App.options.tables[regionName]
                .concat(Territory.userTables());

            App.ui.form.selectFeatureCollections = ui.Select({
                'items': allTablesNames,
                'placeholder': 'select table',
                'onChange': function (tableName) {
                    if (tableName != 'None') {
                        App.options.activeName = tableName;
                        App.ui.form.panelStates.remove(App.ui.form.labelStates);
                        App.ui.form.panelStates.remove(App.ui.form.selectStates);
                        ee.Number(1).evaluate(
                            function (a) {
                                var collectioName = App.ui.form.selectCollection.getValue();

                                App.ui.loadTable(tableName);

                                // a coleção ainda pode não ter sido escolhida: sem
                                // períodos a lista fica vazia, em vez de dar erro
                                var collection = App.options
                                    .collections[regionName][collectioName];

                                App.ui.makeLayersList(
                                    App.tableShortName(),
                                    App.options.activeFeature,
                                    collection && collection.periods[App.options.dataType]
                                );

                                App.ui.loadPropertiesNames();

                                App.ui.form.selectDataType.setDisabled(false);
                            }
                        );

                        // App.ui.loadingBox();
                    }
                },
                'style': {
                    'stretch': 'horizontal'
                }
            });

            App.ui.form.panelFeatureCollections.widgets()
                .set(1, App.ui.form.selectFeatureCollections);

        },

        loadTable: function (tableName) {

            App.options.table = ee.FeatureCollection(tableName);

            App.options.activeFeature = App.options.table;

            Map.layers().reset([]);

            Territory.highlight(App.options.activeFeature, App.tableShortName());

        },

        loadPropertiesNames: function () {

            Panel.propertyNames(App.ui.form, 'selectProperties',
                App.ui.form.panelProperties, App.options.table,
                function (propertyName) {

                    App.options.propertyName = propertyName;

                    ee.Number(1).evaluate(
                        function (a) {
                            App.ui.loadFeatureNames(propertyName);
                            App.ui.form.selectDataType.setDisabled(false);
                        }
                    );
                });

        },

        loadFeatureNames: function () {

            Panel.featureNames(App.ui.form, 'selectFeature',
                App.ui.form.panelFeature, App.options.table, App.options.propertyName,
                function (featureName) {

                    App.options.activeName = featureName;
                    App.options.featureName = featureName;

                    ee.Number(1).evaluate(
                        function (a) {
                            var regionName = App.ui.form.selectRegion.getValue();
                            var collectionName = App.ui.form.selectCollection.getValue();

                            App.ui.loadFeature(featureName);

                            if (App.ui.form.selectDataType.getValue() !== null){
                              App.ui.makeLayersList(
                                  featureName,
                                  App.options.activeFeature,
                                  App.options.collections[regionName][collectionName]
                                      .periods[App.options.dataType]);
                            }
                            App.ui.form.selectDataType.setDisabled(false);
                        }
                    );
                });

        },

        loadDataType: function () {

            App.ui.form.selectDataType.setPlaceholder('loading data type list...');

            ee.Number(1).evaluate(
                function (number) {

                    var regionName = App.ui.form.selectRegion.getValue();
                    var collectionName = App.ui.form.selectCollection.getValue();

                    App.ui.form.selectDataType = ui.Select({
                        'items': Object.keys(App.options.collections[regionName][collectionName].periods),
                        'placeholder': 'select data type',
                        'onChange': function (dataType) {

                            App.ui.setDataType(dataType);
                            
                            if (App.ui.form.selectDataType.getValue() !== null){
                              App.ui.makeLayersList(
                                  App.tableShortName(),
                                  App.options.activeFeature,
                                  App.options.collections[regionName][collectionName]
                                      .periods[App.options.dataType]);
                            }


                        },
                        'style': {
                            'stretch': 'horizontal'
                        }
                    });

                    App.ui.form.panelDataType.widgets()
                        .set(1, App.ui.form.selectDataType);
                }
            );

        },

        loadFeature: function (name) {

            App.options.activeFeature = App.options.table
                .filter(ee.Filter.eq(App.options.propertyName, name));

            Map.layers().reset([]);

            Territory.highlight(App.options.activeFeature, name);

        },

        addImageLayer: function (period, label, region) {


            var image = App.options.data[App.options.dataType]
                .select([App.options.bandsNames[App.options.dataType] + period])
                .multiply(ee.Image().paint(region).eq(0));
                




            var imageLayer = ui.Map.Layer({
                'eeObject': image,
                'visParams': {
                    'palette': App.options.palette[App.options.dataType],
                    'min': App.options.ranges[App.options.dataType].min,
                    'max': App.options.ranges[App.options.dataType].max,
                    'format': 'png'
                },
                'name': label,
                'shown': true,
                'opacity': 1.0
            });

            Map.layers().insert(
                Map.layers().length() - 1,
                imageLayer
            );

        },

        removeImageLayer: function (label) {
            Layers.removeByName(label);
        },

        manageLayers: function (checked, period, label, region) {

            if (checked) {
                App.ui.addImageLayer(period, label, region);
            } else {
                App.ui.removeImageLayer(label);
            }

        },

        makeLayersList: function (regionName, region, periods) {
            Layers.makeList(App.ui.form.panelLayersList, regionName, region,
                periods, App.ui.manageLayers);
        },

        export2Drive: function () {

            var layers = App.ui.form.panelLayersList.widgets();

            var regionName = App.ui.form.selectRegion.getValue();
            var collectionName = App.ui.form.selectCollection.getValue();

            // Exports.fileName normaliza; aqui vai o rótulo cru
            var featureName = App.ui.form.selectFeature.getValue() || '';

            var bandIds = [];

            for (var i = 0; i < layers.length(); i++) {

                var selected = layers.get(i).getValue();

                if (selected) {

                    var period = App.options.collections[regionName][collectionName]
                        .periods[App.options.dataType][i];

                    var fileName = Exports.fileName([
                        regionName,
                        collectionName.split(': ').slice(-1)[0],
                        App.options.dataType, featureName, period]);

                    var data = App.options.data[App.options.dataType]
                        .select([App.options.bandsNames[App.options.dataType] + period]);

                    // o buffer escolhido pelo usuário era ignorado aqui
                    var region = Exports.regionOf(
                        App.options.activeFeature, App.options.bufferDistance);

                    data = data.multiply(ee.Image().paint(region).eq(0));

                    Exports.image({
                        'image': data,
                        'name': fileName,
                        'region': region.bounds(),
                        'fileDimensions': 256 * 124
                    });

                    bandIds.push(App.options.bandsNames[App.options.dataType] + period);
                }
            }

            // Export table
            var territory = ee.Image().paint({
                'featureCollection': ee.FeatureCollection(App.options.activeFeature),
                'color': 1
            });

            var geometry = App.options.activeFeature.geometry().bounds();

            var areas = bandIds.map(
                function (band) {

                    var image = App.options.data[App.options.dataType].select(band);

                    var area = Area.calculate({
                        "image": image,
                        "territory": territory,
                        "geometry": geometry,
                        "scale": 30,
                        "factor": 1000000,
                        "areaColumn": 'area_km2',
                    });

                    area = ee.FeatureCollection(area).map(
                        function (feature) {
                            
                            var className = ee.String(feature.get('class')).cat(' observations');
                            feature = feature.set('class_name', className).set('band', band);

                            return feature;
                        }
                    );

                    return area;
                }
            );

            areas = ee.FeatureCollection(areas).flatten();
            // print(areas);

            var tableName = Exports.fileName([
                regionName,
                collectionName.split(': ').slice(-1)[0],
                App.options.dataType, featureName, 'area']);

            Exports.table(areas, tableName);

        },
        
        showDisclaimer: function () {
          
          App.ui.form.labelDisclaimer = [
                ui.Label('NOTA INFORMATIVA -  MapBiomas Degradação Módulo BETA'),
                ui.Label(''),
                ui.Label('O Módulo Beta de Degradação do MapBiomas disponibiliza dados anuais de vetores de degradação da vegetação nativa \
                do Brasil entre 1986 a 2022. Esses dados são derivados dos mapas anuais de cobertura e uso da terra da Coleção 9 do MapBiomas \
                Brasil e dos mapas de cicatrizes de fogo da Coleção 3 do MapBiomas Fogo. Este módulo inclui dados sobre: Área de Borda, Tamanho \
                do Fragmento, Isolamento do Fragmento, Frequência da Área Queimada; Tempo desde o último Fogo e Idade da Vegetação Secundária. \
                Todos os mapas estão disponíveis em diferentes recortes territoriais (país, bioma, estado, município, bacia hidrográfica e áreas protegidas)\
                e por classes de cobertura e uso da terra.',{'margin': '0px'}),
                ui.Label(''),
                App.formatLabelWithLinks('Para maiores informações sobre o método, acesse a **página com descrição do método e o ATBD**.',{
                                            "página com descrição do método e o ATBD": "https://brasil.mapbiomas.org/metodo-degradacao/",
                                          }),
                ui.Label(''),
                App.formatLabelWithLinks('Os mapas estão disponíveis para baixar no **Toolkit**.',{
                                          'Toolkit':'https://code.earthengine.google.com/?scriptPath=users%2Fmapbiomas%2Fuser-toolkit%3Amapbiomas-user-toolkit-degradation.js',
                                          }),
                ui.Label(''),
                ui.Label('Caso tenha dúvidas, sugestões ou críticas para aprimoramento do módulo, entre em contato pelo e-mail: contato@mapbiomas.org.'),
                ui.Label(''),
                ui.Label('Os dados do MapBiomas são públicos, abertos e gratuitos sob licença CC-BY-SA e mediante a referência da fonte, observando \
                          o seguinte formato: "Módulo de degradação da vegetação nativa do Brasil (1986-2021) - versão beta, acessado em [DATA] [LINK]"'),
                ui.Label(''),
                ui.Label('DISCLAIMER MapBiomas Degradation Beta Module'),
                ui.Label(''),
                ui.Label('The MapBiomas Degradation Beta Module provides annual data on the degradation drivers of native vegetation in Brazil from 1986 \
                          to 2022. These data are derived from the land cover and land use annual maps of MapBiomas Brazil Collection 9 and the fire scars \
                          maps of MapBiomas Fire Collection 3. This module includes data on Edge Area, Fragment Size, Fragment Isolation, Fire Frequency, \
                          Time since the Last Fire, and Secondary Vegetation Age. All maps are available in different territories \
                          (country, biome, state, municipality, watershed, and protected area) and by land cover and land use classes.',{'margin': '0px'}),
                ui.Label(''),
                App.formatLabelWithLinks('For more information about the methodology, visit the **page with the method description and the ATBD**.',{
                                            "page with the method description and the ATBD": "https://brasil.mapbiomas.org/metodo-degradacao/",
                                          }),
                ui.Label(''),
                App.formatLabelWithLinks('The maps are available for download in the **Toolkit**.',{
                                          'Toolkit':'https://code.earthengine.google.com/?scriptPath=users%2Fmapbiomas%2Fuser-toolkit%3Amapbiomas-user-toolkit-fire.js',
                                          'legend code':'',
                                          },{'margin': '0px'}),
                ui.Label(''),
                ui.Label('If you have questions, suggestions, or feedback for module improvement, please contact us at the following email: contato@mapbiomas.org.'),
                ui.Label(''),
                ui.Label('MapBiomas data is public, open, and free under the CC-BY-SA license and must be cited in the following format: "Brazil´s native vegetation degradation module (1986-2021) - beta version, accessed on [DATE] [LINK]"',{'margin': '0px'}),
            ];

            App.ui.form.panelDisclaimer.widgets().reset([]);
            App.ui.form.panelDisclaimerText.widgets().reset(App.ui.form.labelDisclaimer);
            App.ui.form.panelDisclaimer.add(App.ui.form.panelDisclaimerText);
            App.ui.form.panelDisclaimer.add(App.ui.form.buttonDisclaimerOk);

            Map.add(App.ui.form.panelDisclaimer);

            App.ui.form.buttonDisclaimerShow.setDisabled(true);
        },

        form: {

            init: function () {

                var blob = ee.Blob(App.options.logo.uri);

                blob.string().evaluate(
                    function (str) {
                        str = str.replace(/\n/g, '');
                        
                        str = App.options.logo.base64 === null ? str : App.options.logo.base64;
                        
                        App.options.logo.base64 = ui.Label({
                            imageUrl: str,
                        });
                        App.ui.form.panelLogo.add(App.options.logo.base64);
                    }
                );


                App.ui.form.panelMain.add(App.ui.form.panelLogo);
                App.ui.form.panelMain.add(App.ui.form.labelTitle);
                App.ui.form.panelMain.add(App.ui.form.labelSubtitle);
                App.ui.form.panelMain.add(App.ui.form.labelLegendFiles);
                App.ui.form.panelMain.add(App.ui.form.labelDownloads);
                // App.ui.form.panelMain.add(App.ui.form.labelLink);  // substituído pelo link único para os arquivos de legenda

                App.ui.form.panelMain.add(App.ui.form.panel1);



                App.ui.form.panelRegion.add(App.ui.form.labelRegion);
                App.ui.form.panelRegion.add(App.ui.form.selectRegion);

                App.ui.form.panelCollection.add(App.ui.form.labelCollection);
                App.ui.form.panelCollection.add(App.ui.form.selectCollection);

                App.ui.form.panelFeatureCollections.add(App.ui.form.labelTables);
                App.ui.form.panelFeatureCollections.add(App.ui.form.selectFeatureCollections);

                App.ui.form.panelProperties.add(App.ui.form.labelProperties);
                App.ui.form.panelProperties.add(App.ui.form.selectProperties);

                App.ui.form.panelFeature.add(App.ui.form.labelFeature);
                App.ui.form.panelFeature.add(App.ui.form.selectFeature);

                App.ui.form.panelDataType.add(App.ui.form.labelDataType);
                App.ui.form.panelDataType.add(App.ui.form.selectDataType);

                App.ui.form.panelBuffer.add(App.ui.form.labelBuffer);
                App.ui.form.panelBuffer.add(App.ui.form.selectBuffer);

                App.ui.form.panel1.add(App.ui.form.panelRegion);
                App.ui.form.panel1.add(App.ui.form.panelCollection);
                App.ui.form.panel1.add(App.ui.form.panelFeatureCollections);
                App.ui.form.panel1.add(App.ui.form.panelStates);
                App.ui.form.panel1.add(App.ui.form.panelProperties);
                App.ui.form.panel1.add(App.ui.form.panelFeature);
                App.ui.form.panel1.add(App.ui.form.panelDataType);
                // App.ui.form.panel1.add(App.ui.form.panelBuffer);

                App.ui.form.panel1.add(App.ui.form.labelLayers);
                App.ui.form.panel1.add(App.ui.form.panelLayersList);

                App.ui.form.panel1.add(App.ui.form.buttonExport2Drive);
                App.ui.form.panel1.add(App.ui.form.labelNotes);

                ui.root.add(App.ui.form.panelMain);

                App.ui.showDisclaimer();
                
                var Basemaps = require('users/mapbiomas/user-toolkit:core/v1/basemaps.js');
        
                Map.setOptions({
                  'styles': {
                    'Dark': Basemaps.getStyle('Dark'),
                    // 'Dark2':Basemaps.getStyle('Dark2'),
                    // 'Aubergine':Basemaps.getStyle('Aubergine'),
                    'Silver':Basemaps.getStyle('Silver'),
                    'Night':Basemaps.getStyle('Night'),
                  }
                });
                Map.setOptions('Silver');
                

            },

            panelMain: ui.Panel({
                'layout': ui.Panel.Layout.flow('vertical'),
                'style': {
                    'width': '360px',
                    'position': 'bottom-left',
                    'margin': '0px 0px 0px 0px',
                },
            }),

            panelLogo: ui.Panel({
                'layout': ui.Panel.Layout.flow('vertical'),
                'style': {
                    'stretch': 'horizontal',
                    'margin': '10px 0px 5px 15px',
                },
            }),

            panelStates: ui.Panel({
                'layout': ui.Panel.Layout.flow('vertical'),
                'style': {
                    'stretch': 'horizontal'
                },
            }),

            panelRegion: ui.Panel({
                'layout': ui.Panel.Layout.flow('vertical'),
                'style': {
                    'stretch': 'horizontal'
                },
            }),

            panelCollection: ui.Panel({
                'layout': ui.Panel.Layout.flow('vertical'),
                'style': {
                    'stretch': 'horizontal'
                },
            }),

            panelFeatureCollections: ui.Panel({
                'layout': ui.Panel.Layout.flow('vertical'),
                'style': {
                    'stretch': 'horizontal'
                },
            }),

            panelProperties: ui.Panel({
                'layout': ui.Panel.Layout.flow('vertical'),
                'style': {
                    'stretch': 'horizontal'
                },
            }),

            panelFeature: ui.Panel({
                'layout': ui.Panel.Layout.flow('vertical'),
                'style': {
                    'stretch': 'horizontal'
                },
            }),

            panelDataType: ui.Panel({
                'layout': ui.Panel.Layout.flow('vertical'),
                'style': {
                    'stretch': 'horizontal'
                },
            }),

            panelBuffer: ui.Panel({
                'layout': ui.Panel.Layout.flow('vertical'),
                'style': {
                    'stretch': 'horizontal'
                },
            }),

            panelLayersList: ui.Panel({
                'layout': ui.Panel.Layout.flow('vertical'),
                'style': {
                    'height': '200px',
                    'stretch': 'vertical',
                    'backgroundColor': '#cccccc',
                },
            }),

            panelDisclaimer: ui.Panel({
                'layout': ui.Panel.Layout.flow('vertical'),
                'style': {
                    // 'width': '700px',
                    // 'height': '350px',
                },
            }),

            panelDisclaimerText: ui.Panel({
                'layout': ui.Panel.Layout.flow('vertical'),
                'style': {
                    'width': '700px',
                    'height': '300px',
                },
            }),

            labelRegion: ui.Label('Region', {
                // 'fontWeight': 'bold',
                // 'padding': '1px',
                'fontSize': '16px'
            }),

            labelCollection: ui.Label('Module', {
                // 'fontWeight': 'bold',
                // 'padding': '1px',
                'fontSize': '16px'
            }),

            labelTitle: ui.Label('MapBiomas User Toolkit', {
                'fontWeight': 'bold',
                // 'padding': '1px',
                'fontSize': '16px'
            }),

            labelSubtitle: ui.Label('Land Use and Land Cover', {
                // 'fontWeight': 'bold',
                // 'padding': '1px',
                'fontSize': '14px'
            }),

            // arquivos de legenda (legend-colors/ no GitHub)
            labelLegendFiles: ui.Label('Legend files (QGIS, ArcGIS Pro, SLD, CSV)', {
                'fontSize': '10px'
            },
                'https://github.com/mapbiomas/user-toolkit/tree/master/legend-colors'
            ),

            labelDownloads: ui.Label('Download full maps', {
                'fontSize': '10px'
            },
                Downloads.DEFAULT_PAGE
            ),

            labelLink: ui.Label('Legend codes:', {
                'fontSize': '10px'
            }
            ),

            // labelLink1: ui.Label('Amazon', {
            //     'fontSize': '10px',
            // },
            //     'http://amazonia.mapbiomas.org/codigos-de-la-leyenda'
            // ),

            // labelLink2: ui.Label('Atlantic Forest', {
            //     'fontSize': '10px'
            // },
            //     'http://bosqueatlantico.mapbiomas.org/codigos-de-la-leyenda'
            // ),

            // labelLink3: ui.Label('Bolivia', {
            //     'fontSize': '10px',
            // },
            //     'https://bolivia.mapbiomas.org/codigos-de-la-leyenda/'
            // ),

            // labelLink4: ui.Label('Brazil', {
            //     'fontSize': '10px'
            // },
            //     'https://brasil.mapbiomas.org/codigos-de-legenda/'
            // ),

            // labelLink5: ui.Label('Chaco', {
            //     'fontSize': '10px'
            // },
            //     'http://chaco.mapbiomas.org/codigos-de-la-leyenda-1'
            // ),

            // labelLink6: ui.Label('Colombia', {
            //     'fontSize': '10px',
            // },
            //     'https://colombia.mapbiomas.org/codigos-de-la-leyenda/'
            // ),

            // labelLink7: ui.Label('Ecuador', {
            //     'fontSize': '10px',
            // },
            //     'https://ecuador.mapbiomas.org/codigos-de-la-leyenda/'
            // ),

            // labelLink8: ui.Label('Indonesia', {
            //     'fontSize': '10px',
            // },
            //     'https://mapbiomas.nusantara.earth/legendcode'
            // ),

            // labelLink9: ui.Label('Pampa', {
            //     'fontSize': '10px'
            // },
            //     'https://pampa.mapbiomas.org/codigos-de-la-leyenda/'
            // ),

            // labelLink10: ui.Label('Peru', {
            //     'fontSize': '10px',
            // },
            //     'https://peru.mapbiomas.org/codigos-de-la-leyenda/'
            // ),

            // labelLink11: ui.Label('Venezuela', {
            //     'fontSize': '10px',
            // },
            //     'https://venezuela.mapbiomas.org/codigos-de-la-leyenda/'
            // ),

            // labelLink12: ui.Label('Uruguay', {
            //     'fontSize': '10px',
            // },
            //     'https://uruguay.mapbiomas.org/codigos-de-la-leyenda/'
            // ),

            labelType: ui.Label('Type:', {
                // 'padding': '1px',
                'fontSize': '16px'
            }),

            labelTables: ui.Label('Tables:', {
                // 'padding': '1px',
                'fontSize': '16px'
            }),

            labelProperties: ui.Label('Properties:', {
                // 'padding': '1px',
                'fontSize': '16px'
            }),

            labelFeature: ui.Label('Features:', {
                // 'padding': '1px',
                'fontSize': '16px'
            }),

            labelDataType: ui.Label('Data Type:', {
                // 'padding': '1px',
                'fontSize': '16px'
            }),

            labelBuffer: ui.Label('Buffer:', {
                // 'padding': '1px',
                'fontSize': '16px'
            }),

            labelLayers: ui.Label('Layers:', {
                // 'padding': '1px',
                'fontSize': '16px'
            }),

            labelNotes: ui.Label('Click the RUN button in the TASK tab at the upper-right corner.', {
                // 'padding': '1px',
                'fontSize': '16px'
            }),

            labelStates: ui.Label('States:', {
                // 'padding': '1px',
                'fontSize': '16px'
            }),

            selectName: ui.Select({
                'items': ['None'],
                'placeholder': 'None',
                'style': {
                    'stretch': 'horizontal'
                }
            }),

            selectCollection: ui.Select({
                'items': [],
                'placeholder': 'None',
                'style': {
                    'stretch': 'horizontal'
                },
            }),

            selectRegion: ui.Select({
                'items': [
                    'mapbiomas-brazil',
                    // 'mapbiomas-indonesia',
                ],
                'placeholder': 'None',
                'style': {
                    'stretch': 'horizontal'
                },
                'onChange': function (region) {

                    ee.Number(1).evaluate(
                        function (a) {
                            App.ui.setMapbiomasRegion(region);
                        }
                    );

                },
            }),

            selectFeatureCollections: ui.Select({
                'items': ['None'],
                'placeholder': 'None',
                'style': {
                    'stretch': 'horizontal'
                }
            }),

            selectFeature: ui.Select({
                'items': ['None'],
                'placeholder': 'None',
                'style': {
                    'stretch': 'horizontal'
                }
            }),

            selectProperties: ui.Select({
                'items': ['None'],
                'placeholder': 'None',
                'style': {
                    'stretch': 'horizontal'
                }
            }),

            selectDataType: ui.Select({
                'items': ['None'],
                'placeholder': 'None',
                'style': {
                    'stretch': 'horizontal'
                },
                'disabled': true,
            }),

            selectBuffer: ui.Select({
                'items': [
                    'None',
                    '1km',
                    '2km',
                    '3km',
                    '4km',
                    '5km',
                    '10km',
                ],
                'placeholder': 'None',
                'style': {
                    'stretch': 'horizontal'
                },
                'onChange': function (distance) {
                    var distances = {
                        'None': 0,
                        '1km': 1000,
                        '2km': 2000,
                        '3km': 3000,
                        '4km': 4000,
                        '5km': 5000,
                        '10km': 10000,
                    };

                    App.options.bufferDistance = distances[distance];
                },
            }),

            buttonExport2Drive: ui.Button({
                "label": "Export images to Google Drive",
                "onClick": function () {
                    App.ui.export2Drive();
                },
                "disabled": false,
                "style": {
                    // 'padding': '2px',
                    'stretch': 'horizontal'
                }
            }),
            
            buttonDisclaimerOk: ui.Button({
                "label": "Ok, I get it!",
                "onClick": function () {
                    Map.remove(App.ui.form.panelDisclaimer);
                    App.ui.form.buttonDisclaimerShow.setDisabled(false);
                },
                "disabled": false,
                "style": {
                    // 'padding': '2px',
                    'stretch': 'horizontal'
                }
            }),

            buttonDisclaimerShow: ui.Button({
                "label": "Show disclaimer",
                "onClick": function () {
                    App.ui.showDisclaimer();
                },
                "disabled": false,
                "style": {
                    // 'padding': '2px',
                    'stretch': 'horizontal'
                }
            }),

            panel1: ui.Panel({
                style: {
                    'stretch': 'both'
                }
            }),
        },
    }
};

App.init();

App.setVersion();