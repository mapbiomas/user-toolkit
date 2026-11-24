/**
 * @name
 *      data/collections-degradation.js
 *
 * @description
 *      The degradation collections each region offers: the assets behind each
 *      data type and the periods its bands hold. All of them are public, in
 *      projects/mapbiomas-public: Brazil's collection 10.1. Colombia publishes
 *      collection 4 (lulc/collection4) but is left out for now.
 *
 *      Several data types read the same asset and the script decodes it
 *      differently: fire frequency, time since the last fire and secondary
 *      vegetation age store value * 100 + coverage class. The three isolation
 *      types are members of one ImageCollection, picked by system:index.
 *
 *      build_patches.py in the private `mapbiomas-pipeline` repository doesn't
 *      cover degradation yet, so this file is kept by hand until it does. The
 *      periods were read from the assets' bands.
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
        'collection-10.1': {
            'assets': {
                'edge_area': 'projects/mapbiomas-public/assets/brazil/lulc/collection10_1/mapbiomas_brazil_collection10_1_degradation_edge_area_v1',
                'edge_age': 'projects/mapbiomas-public/assets/brazil/lulc/collection10_1/mapbiomas_brazil_collection10_1_degradation_edge_age_v1',
                'patch_size': 'projects/mapbiomas-public/assets/brazil/lulc/collection10_1/mapbiomas_brazil_collection10_1_degradation_patch_size_v1',
                'landscape_morphology': 'projects/mapbiomas-public/assets/brazil/lulc/collection10_1/mapbiomas_brazil_collection10_1_degradation_landscape_morphology_v1',
                'isolation_100ha': 'projects/mapbiomas-public/assets/brazil/lulc/collection10_1/mapbiomas_brazil_collection10_1_degradation_isolation_v1',
                'isolation_500ha': 'projects/mapbiomas-public/assets/brazil/lulc/collection10_1/mapbiomas_brazil_collection10_1_degradation_isolation_v1',
                'isolation_1000ha': 'projects/mapbiomas-public/assets/brazil/lulc/collection10_1/mapbiomas_brazil_collection10_1_degradation_isolation_v1',
                'fire_frequency': 'projects/mapbiomas-public/assets/brazil/lulc/collection10_1/mapbiomas_brazil_collection10_1_degradation_fire_frequency_v1',
                'burned_coverage': 'projects/mapbiomas-public/assets/brazil/lulc/collection10_1/mapbiomas_brazil_collection10_1_degradation_fire_frequency_v1',
                'time_since_last_fire': 'projects/mapbiomas-public/assets/brazil/lulc/collection10_1/mapbiomas_brazil_collection10_1_degradation_fire_age_v1',
                'secondary_vegetation_age': 'projects/mapbiomas-public/assets/brazil/lulc/collection10_1/mapbiomas_brazil_collection10_1_degradation_secondary_vegetation_age_v1',
                'secondary_vegetation_coverage': 'projects/mapbiomas-public/assets/brazil/lulc/collection10_1/mapbiomas_brazil_collection10_1_degradation_secondary_vegetation_age_v1',
                'canopy_disturbance_frequency': 'projects/mapbiomas-public/assets/brazil/lulc/collection10_1/mapbiomas_brazil_collection10_1_degradation_canopy_disturbance_frequency_v2',
                'logging': 'projects/mapbiomas-public/assets/brazil/lulc/collection10_1/mapbiomas_brazil_collection10_1_degradation_logging_v2'
            },
            'periods': {
                'edge_area': [
                    '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992',
                    '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000',
                    '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008',
                    '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016',
                    '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'
                ],
                'edge_age': [
                    '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992',
                    '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000',
                    '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008',
                    '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016',
                    '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'
                ],
                'patch_size': [
                    '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992',
                    '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000',
                    '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008',
                    '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016',
                    '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'
                ],
                'landscape_morphology': [
                    '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992',
                    '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000',
                    '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008',
                    '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016',
                    '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'
                ],
                'isolation_100ha': [
                    '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992',
                    '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000',
                    '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008',
                    '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016',
                    '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'
                ],
                'isolation_500ha': [
                    '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992',
                    '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000',
                    '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008',
                    '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016',
                    '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'
                ],
                'isolation_1000ha': [
                    '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992',
                    '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000',
                    '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008',
                    '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016',
                    '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'
                ],
                'fire_frequency': [
                    '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992',
                    '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000',
                    '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008',
                    '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016',
                    '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'
                ],
                'burned_coverage': [
                    '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992',
                    '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000',
                    '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008',
                    '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016',
                    '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'
                ],
                'time_since_last_fire': [
                    '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993',
                    '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001',
                    '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009',
                    '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017',
                    '2018', '2019', '2020', '2021', '2022', '2023', '2024'
                ],
                'secondary_vegetation_age': [
                    '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992',
                    '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000',
                    '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008',
                    '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016',
                    '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'
                ],
                'secondary_vegetation_coverage': [
                    '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992',
                    '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000',
                    '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008',
                    '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016',
                    '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'
                ],
                'canopy_disturbance_frequency': [
                    '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995',
                    '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003',
                    '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011',
                    '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019',
                    '2020', '2021', '2022', '2023', '2024'
                ],
                'logging': [
                    '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995',
                    '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003',
                    '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011',
                    '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019',
                    '2020', '2021', '2022', '2023', '2024'
                ]
            }
        }
    }
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
