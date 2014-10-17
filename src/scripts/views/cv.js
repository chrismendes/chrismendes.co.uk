// -------
// CV Page
// -------
define([
    'jquery',
    'underscore',
    'views/_base',
    'text!/templates/cv.html',
    'bootstrap-tab'
], function($, _, BaseView, html) {

    'use strict';

    var CvView = BaseView.extend({

        id:             'cv',
        template:       _.template(html),
        background:     'green',
        theme:          'red',

        onAfterRender: function() {
            $('body').addClass('is-inactive');
        }

    });

    return CvView;

});