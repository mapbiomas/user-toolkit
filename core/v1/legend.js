/**
 * @name
 *      core/v1/legend.js
 *
 * @description
 *      The colour swatch and label list the toolkits show under the panel.
 *
 *      It used to come from `users/joaovsiqueira1/packages:Legend.js`, a
 *      personal account. Same code, moved here so the toolkits depend only on
 *      this repository.
 *
 *      Each swatch is a tiny circle drawn by the server, which is why this
 *      builds an `ee.Image` instead of using a colour box.
 *
 * @author
 *      João Siqueira
 *      contato@mapbiomas.org
 *
 * @see
 *      https://github.com/mapbiomas/user-toolkit
 */

var point = ee.Geometry.Point([-17, 0.0]);

var circle = point.buffer(100);

var region = point.buffer(150).getInfo();

var image = ee.Image(1).clip(circle);

var border = ee.Image()
    .paint({
        featureCollection: ee.FeatureCollection(ee.Feature(circle)),
        color: 2,
        width: 15,
    });

var legend = function (params) {
    var legendItens = params.layers
        .map(
            function (item) {
                var layer = ui.Panel([
                    ui.Thumbnail({
                        "image": border.unmask(image)
                            .visualize({
                                "min": 1,
                                "max": 2,
                                "palette": item[0] + ',' + params.style.color
                            }),
                        "params": {
                            "region": region,
                            "format": 'png'
                        },
                        "style": {
                            "height": params.style.iconSize || '16px',
                            "width": params.style.iconSize || '16px',
                            "backgroundColor": params.style.backgroundColor,
                            "margin": "2px 10px 4px 6px"
                        }
                    }),
                    ui.Label(
                        (item[1] !== null) ? '[' + String(item[1]) + '] ' + item[2] : item[2],
                        {
                            "backgroundColor": params.style.backgroundColor,
                            "color": params.style.color,
                            "fontSize": params.style.fontSize || '12px',
                            "margin": "4px 4px 4px -8px"
                        }
                    )
                ],
                    ui.Panel.Layout.flow('horizontal'),
                    {
                        "backgroundColor": params.style.backgroundColor,
                    }
                );

                return layer;
            }
        );
    
    var widgets;
    if (params.title !== null){
        var labelTitle = ui.Label(params.title || 'Legend', {
            "color": params.style.color,
            "backgroundColor": params.style.backgroundColor,
            "fontSize": params.style.fontSize || '12px'
        });
        
        widgets = [labelTitle].concat(legendItens);
    } else {
        widgets = legendItens;
    }
    
    var panelLegend = ui.Panel({
        'widgets': widgets,
        'layout': ui.Panel.Layout.flow(params.orientation || 'vertical'),
        'style': {
            'stretch': 'vertical',
            'backgroundColor': params.style.backgroundColor,
            'position': 'bottom-left'
        },
    });

    return panelLegend;
};

exports.getLegend = legend;
