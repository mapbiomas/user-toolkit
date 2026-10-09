/**
 * @name
 *      data/collections-soil.js
 *
 * @description
 *      The soil collections each region offers: the assets behind each one
 *      and the periods its bands actually hold.
 *
 *      The periods are read from the real band names, not from the
 *      documentation, because typing them by hand went wrong often enough.
 *      Only assets with public read access belong here, since that is what a
 *      toolkit user can open.
 *
 *      Collections 2.1 and 3 are flagged `load: 'by-depth'`: the toolkit
 *      flattens and renames their bands (App.loadAsset in the script).
 *
 *      build_patches.py in the private `mapbiomas-pipeline` repository doesn't
 *      cover soil yet, so this file is kept by hand until it does.
 *
 * @author
 *      João Siqueira
 *      contato@mapbiomas.org
 *
 * @see
 *      https://github.com/mapbiomas/user-toolkit
 */

var collections = {
    'mapbiomas-brazil': {
        'collection1-beta': {
            'assets': {
                'soc_t_ha_000_030cm': 'projects/mapbiomas-public/assets/brazil/soil/collection1/mapbiomas_soil_collection1_soil_organic_carbon_0_30cm_t_ha_v1',
                // 'soc_kg_m2_000_030cm': 'projects/mapbiomas-public/assets/brazil/soil/collection1/mapbiomas_soil_collection1_soil_organic_carbon_0_30cm_kg_m2_v1',
            },
            'periods': {
                'soc_t_ha_000_030cm': [
                    '1985', '1986', '1987', '1988', '1989', '1990',
                    '1991', '1992', '1993', '1994', '1995', '1996',
                    '1997', '1998', '1999', '2000', '2001', '2002',
                    '2003', '2004', '2005', '2006', '2007', '2008',
                    '2009', '2010', '2011', '2012', '2013', '2014',
                    '2015', '2016', '2017', '2018', '2019', '2020',
                    '2021',
                ],
                'soc_kg_m2_000_030cm': [
                    '1985', '1986', '1987', '1988', '1989', '1990',
                    '1991', '1992', '1993', '1994', '1995', '1996',
                    '1997', '1998', '1999', '2000', '2001', '2002',
                    '2003', '2004', '2005', '2006', '2007', '2008',
                    '2009', '2010', '2011', '2012', '2013', '2014',
                    '2015', '2016', '2017', '2018', '2019', '2020',
                    '2021'
                ],
            },
            'coverage_reference':ee.Image('projects/mapbiomas-public/assets/brazil/lulc/collection7_1/mapbiomas_collection71_integration_v1')
        },
        'collection2-beta': {
            'assets': {
                'soc_t_ha_000_030cm':'projects/mapbiomas-public/assets/brazil/soil/collection2/mapbiomas_soil_collection2_soc_t_ha_000_030cm',
                // 'soc_kg_m2_000_030cm':'projects/mapbiomas-public/assets/brazil/soil/collection2/mapbiomas_soil_collection2_soc_kg_m2_000_030cm',
                'granulometry_clay_percent':'projects/mapbiomas-public/assets/brazil/soil/collection2/mapbiomas_soil_collection2_granulometry_clay_percentage',
                'granulometry_sand_percent':'projects/mapbiomas-public/assets/brazil/soil/collection2/mapbiomas_soil_collection2_granulometry_sand_percentage',
                'granulometry_silt_percent':'projects/mapbiomas-public/assets/brazil/soil/collection2/mapbiomas_soil_collection2_granulometry_silt_percentage',
                'textural_classes':'projects/mapbiomas-public/assets/brazil/soil/collection2/mapbiomas_soil_collection2_textural_classes',
                'textural_subgroups':'projects/mapbiomas-public/assets/brazil/soil/collection2/mapbiomas_soil_collection2_textural_subgroups',
                'textural_groups':'projects/mapbiomas-public/assets/brazil/soil/collection2/mapbiomas_soil_collection2_textural_groups',
            },
            'periods': {
                'soc_t_ha_000_030cm': [
                  '1985','1986','1987','1988','1989','1990','1991','1992','1993','1994',
                  '1995','1996','1997','1998','1999','2000','2001','2002','2003','2004',
                  '2005','2006','2007','2008','2009','2010','2011','2012','2013','2014',
                  '2015','2016','2017','2018','2019','2020','2021','2022','2023',
                ],
                'soc_kg_m2_000_030cm':[
                  '1985','1986','1987','1988','1989','1990','1991','1992','1993','1994',
                  '1995','1996','1997','1998','1999','2000','2001','2002','2003','2004',
                  '2005','2006','2007','2008','2009','2010','2011','2012','2013','2014',
                  '2015','2016','2017','2018','2019','2020','2021','2022','2023',
                ],                        
                'granulometry_clay_percent': [
                  '000_010cm',
                  '010_020cm',
                  '020_030cm',
                  '000_020cm',
                  '000_030cm',
                ],
                'granulometry_sand_percent':[
                  '000_010cm',
                  '010_020cm',
                  '020_030cm',
                  '000_020cm',
                  '000_030cm',
                ],
                'granulometry_silt_percent':[
                  '000_010cm',
                  '010_020cm',
                  '020_030cm',
                  '000_020cm',
                  '000_030cm',
                ],
                'textural_classes':[
                  '000_010cm',
                  '000_020cm',
                  '000_030cm',
                ],
                'textural_subgroups':[
                  '000_010cm',
                  '000_020cm',
                  '000_030cm',
                ],
                'textural_groups':[
                  '000_010cm',
                  '000_020cm',
                  '000_030cm',
                ],
            },
            'coverage_reference':ee.Image('projects/mapbiomas-public/assets/brazil/lulc/collection9/mapbiomas_collection90_integration_v1'),
        },
        'collection2_1-beta': {
            'load': 'by-depth',
            'assets': {
                'soc_t_ha_000_030cm':'projects/mapbiomas-public/assets/brazil/soil/collection2_1/mapbiomas_brazil_collection21_soil_carbon_v2',
                'granulometry_clay_percent':'projects/mapbiomas-public/assets/brazil/soil/collection2_1/mapbiomas_brazil_collection21_soil_clay_fraction_v2',
                'granulometry_sand_percent':'projects/mapbiomas-public/assets/brazil/soil/collection2_1/mapbiomas_brazil_collection21_soil_sand_fraction_v2',
                'granulometry_silt_percent':'projects/mapbiomas-public/assets/brazil/soil/collection2_1/mapbiomas_brazil_collection21_soil_silt_fraction_v2',
                'textural_classes':'projects/mapbiomas-public/assets/brazil/soil/collection2_1/mapbiomas_brazil_collection21_soil_textural_class_v2',
                'textural_subgroups':'projects/mapbiomas-public/assets/brazil/soil/collection2_1/mapbiomas_brazil_collection21_soil_textural_subgroup_v2',
                'textural_groups':'projects/mapbiomas-public/assets/brazil/soil/collection2_1/mapbiomas_brazil_collection21_soil_textural_group_v2',
            },
            'periods': {
                'soc_t_ha_000_030cm': [
                  '1985','1986','1987','1988','1989','1990','1991','1992','1993','1994',
                  '1995','1996','1997','1998','1999','2000','2001','2002','2003','2004',
                  '2005','2006','2007','2008','2009','2010','2011','2012','2013','2014',
                  '2015','2016','2017','2018','2019','2020','2021','2022','2023'
                ],
                'granulometry_clay_percent': [
                  '000_010cm',
                  '010_020cm',
                  '020_030cm',
                  '000_020cm',
                  '000_030cm',
                ],
                'granulometry_sand_percent':[
                  '000_010cm',
                  '010_020cm',
                  '020_030cm',
                  '000_020cm',
                  '000_030cm',
                ],
                'granulometry_silt_percent':[
                  '000_010cm',
                  '010_020cm',
                  '020_030cm',
                  '000_020cm',
                  '000_030cm',
                ],
                'textural_classes':[
                  '000_010cm',
                  '000_020cm',
                  '000_030cm',
                ],
                'textural_subgroups':[
                  '000_010cm',
                  '000_020cm',
                  '000_030cm',
                ],
                'textural_groups':[
                  '000_010cm',
                  '000_020cm',
                  '000_030cm',
                ],
            },
            'coverage_reference':ee.Image('projects/mapbiomas-public/assets/brazil/lulc/collection10/mapbiomas_brazil_collection10_integration_v1').slice(0,-1),
        },
        'collection3-beta': {
            'load': 'by-depth',
            'assets': {
                'soc_t_ha_000_030cm':'projects/mapbiomas-public/assets/brazil/soil/collection3/mapbiomas_brazil_collection3_soil_carbon_v1',
                'granulometry_clay_percent':'projects/mapbiomas-public/assets/brazil/soil/collection3/mapbiomas_brazil_collection3_soil_clay_fraction_v1',
                'granulometry_sand_percent':'projects/mapbiomas-public/assets/brazil/soil/collection3/mapbiomas_brazil_collection3_soil_sand_fraction_v1',
                'granulometry_silt_percent':'projects/mapbiomas-public/assets/brazil/soil/collection3/mapbiomas_brazil_collection3_soil_silt_fraction_v1',
                'textural_classes':'projects/mapbiomas-public/assets/brazil/soil/collection3/mapbiomas_brazil_collection3_soil_textural_class_v1',
                'textural_subgroups':'projects/mapbiomas-public/assets/brazil/soil/collection3/mapbiomas_brazil_collection3_soil_textural_subgroup_v1',
                'textural_groups':'projects/mapbiomas-public/assets/brazil/soil/collection3/mapbiomas_brazil_collection3_soil_textural_group_v1',
                'stoniness':'projects/mapbiomas-public/assets/brazil/soil/collection3/mapbiomas_brazil_collection3_soil_stoniness_v1',
            },
            'periods': {
                'soc_t_ha_000_030cm': [
                  '1985','1986','1987','1988','1989','1990','1991','1992','1993','1994',
                  '1995','1996','1997','1998','1999','2000','2001','2002','2003','2004',
                  '2005','2006','2007','2008','2009','2010','2011','2012','2013','2014',
                  '2015','2016','2017','2018','2019','2020','2021','2022','2023','2024'
                ],
                'granulometry_clay_percent': ['000_010cm', '010_020cm', '020_030cm', '030_040cm', '040_050cm', '050_060cm', '060_070cm', '070_080cm', '080_090cm', '090_100cm'],
                'granulometry_sand_percent': ['000_010cm', '010_020cm', '020_030cm', '030_040cm', '040_050cm', '050_060cm', '060_070cm', '070_080cm', '080_090cm', '090_100cm'],
                'granulometry_silt_percent': ['000_010cm', '010_020cm', '020_030cm', '030_040cm', '040_050cm', '050_060cm', '060_070cm', '070_080cm', '080_090cm', '090_100cm'],
                'textural_classes': ['000_010cm','000_020cm','000_030cm','020_040cm','030_060cm','060_100cm'],
                'textural_subgroups': ['000_010cm','000_020cm','000_030cm','020_040cm','030_060cm','060_100cm'],
                'textural_groups': ['000_010cm','000_020cm','000_030cm','020_040cm','030_060cm','060_100cm'],
                'stoniness': ['50vol','90vol'],
            },
            'coverage_reference':ee.Image('projects/mapbiomas-public/assets/brazil/lulc/collection10/mapbiomas_brazil_collection10_integration_v1').slice(0,-1),
        },
    },
};

/**
 * The collections of some regions, in the shape `App.options.collections`
 * expects. A toolkit asks for the regions it covers, so its region list and its
 * collection list can't drift apart.
 *
 * @param {Array<string>} regions
 * @returns {Object}
 */
var pick = function (regions) {

    var picked = {};

    regions.forEach(
        function (region) {
            picked[region] = collections[region] || {};
        }
    );

    return picked;
};

exports.collections = collections;
exports.pick = pick;
