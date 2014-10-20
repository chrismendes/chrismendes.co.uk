// -------
// Recommendations Page
// -------
define([
    'underscore',
    'views/_base',
    'text!../../templates/recommendations.html'
], function(_, BaseView, html) {

    'use strict';

    var RecommendationsView = BaseView.extend({

        id:             'recommendations',
        template:       _.template(html),
        background:     'teal',
        theme:          'red'

    });

    return RecommendationsView;

});