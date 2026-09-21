/**
 * @name
 *      core/v1/panel.js
 *
 * @description
 *      The selects whose contents have to come from the server.
 *
 *      Picking a property of a table, or a value of that property, means asking
 *      Earth Engine first. The panel shows a "loading…" placeholder, and when
 *      the answer arrives the old select is thrown away and a new one takes its
 *      place — that is how the Code Editor's `ui.Select` is refilled.
 *
 *      Each toolkit says what to do with the choice; everything around it is the
 *      same everywhere.
 *
 * @author
 *      João Siqueira
 *      contato@mapbiomas.org
 *
 * @see
 *      https://github.com/mapbiomas/user-toolkit
 */

/**
 * Replaces a select with one filled from the server.
 *
 * @param {Object}   form            the object holding the widget, usually `App.ui.form`
 * @param {string}   key             its name in that object, e.g. 'selectProperties'
 * @param {ui.Panel} panel           the panel it sits in; the select is slot 1
 * @param {Object}   params
 * @param {Object}   params.values       an ee object that evaluates to a list
 * @param {string}   params.loading      placeholder while the server answers
 * @param {string}   params.placeholder  placeholder once it is filled
 * @param {Function} params.onChange     called with the chosen value, never with 'None'
 */
var replaceSelect = function (form, key, panel, params) {

    if (form[key]) {
        form[key].setPlaceholder(params.loading);
    }

    params.values.evaluate(
        function (values) {

            var select = ui.Select({
                'items': values || [],
                'placeholder': params.placeholder,
                'onChange': function (value) {
                    if (value !== 'None' && value !== null && value !== undefined) {
                        params.onChange(value);
                    }
                },
                'style': {
                    'stretch': 'horizontal'
                }
            });

            form[key] = select;
            panel.widgets().set(1, select);
        }
    );
};

/**
 * The properties a table has, read from its first feature.
 *
 * @param {Object}   form
 * @param {string}   key
 * @param {ui.Panel} panel
 * @param {ee.FeatureCollection} table
 * @param {Function} onChange
 */
var propertyNames = function (form, key, panel, table, onChange) {

    replaceSelect(form, key, panel, {
        'values': ee.Feature(table.first()).propertyNames(),
        'loading': 'loading tables names...',
        'placeholder': 'select property',
        'onChange': onChange
    });
};

/**
 * The values a property takes in a table, without repeats and in order.
 *
 * Territories often come as several polygons under one name, so the list has to
 * be deduplicated; most toolkits used to list one entry per feature and showed
 * the same name several times.
 *
 * @param {Object}   form
 * @param {string}   key
 * @param {ui.Panel} panel
 * @param {ee.FeatureCollection} table
 * @param {string}   property
 * @param {Function} onChange
 */
var featureNames = function (form, key, panel, table, property, onChange) {

    replaceSelect(form, key, panel, {
        'values': table.aggregate_array(property).distinct().sort(),
        'loading': 'loading feature names...',
        'placeholder': 'select feature',
        'onChange': onChange
    });
};

exports.replaceSelect = replaceSelect;
exports.propertyNames = propertyNames;
exports.featureNames = featureNames;
