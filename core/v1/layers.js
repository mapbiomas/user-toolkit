/**
 * @name
 *      core/v1/layers.js
 *
 * @description
 *      The list of periods the user ticks to put layers on the map, and the
 *      removal of a layer by name.
 *
 *      What a ticked period actually draws is up to each toolkit, because the
 *      bands, palettes and ranges differ: `makeList` calls back into it.
 *
 * @author
 *      João Siqueira
 *      contato@mapbiomas.org
 *
 * @see
 *      https://github.com/mapbiomas/user-toolkit
 */

/**
 * Fills a panel with one checkbox per period.
 *
 * @param {ui.Panel} panel      the panel to fill, cleared first
 * @param {string}   prefix     territory name, the first half of each label
 * @param {Object}   region     the feature the toolkit clips to, passed back untouched
 * @param {Array}    periods    years or year pairs; an empty list just clears the panel
 * @param {Function} onToggle   (checked, period, label, region), called on every click
 */
var makeList = function (panel, prefix, region, periods, onToggle) {

    panel.clear();

    (periods || []).forEach(
        function (period) {

            var label = prefix + ' ' + period;

            panel.add(
                ui.Checkbox({
                    'label': label,
                    'value': false,
                    'onChange': function (checked) {
                        onToggle(checked, period, label, region);
                    },
                    'disabled': false,
                    'style': {
                        'padding': '2px',
                        'stretch': 'horizontal',
                        'backgroundColor': '#dddddd',
                        'fontSize': '12px'
                    }
                })
            );
        }
    );
};

/**
 * Removes every map layer with this name.
 *
 * @param {string} label
 */
var removeByName = function (label) {

    for (var i = 0; i < Map.layers().length(); i++) {

        var layer = Map.layers().get(i);

        if (label === layer.get('name')) {
            Map.remove(layer);
        }
    }
};

exports.makeList = makeList;
exports.removeByName = removeByName;
