// -------
// Learning Page
// -------
define([
    'underscore',
    'views/_base',
    'text!../../templates/learning.html'
], function(_, BaseView, html) {

    'use strict';

    var LearningView = BaseView.extend({

        id:             'learning',
        template:       _.template(html),
        background:     'teal',
        theme:          'green'

    });

    return LearningView;

});