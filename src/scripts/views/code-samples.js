// -------
// Code Samples Page
// -------
define([
    'jquery',
    'underscore',
    'views/_base',
    'text!../../templates/code-samples.html'
], function($, _, BaseView, html) {

    'use strict';

    var CodeSamplesView = BaseView.extend({

        id:             'codesamples',
        name:           'Code Samples',
        template:       _.template(html),
        background:     'green',
        theme:          'red'

    });

    return CodeSamplesView;

});