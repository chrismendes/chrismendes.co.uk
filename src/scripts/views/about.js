// -------
// About Me Page
// -------
define([
    'underscore',
    'views/_base',
    'text!/templates/about.html'
], function(_, BaseView, html) {

    'use strict';

    var AboutView = BaseView.extend({

        id:             'about',
        template:       _.template(html),
        background:     'teal',
        theme:          'green'

    });

    return AboutView;

});