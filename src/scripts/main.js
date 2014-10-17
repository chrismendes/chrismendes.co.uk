'use strict';

// -------
// RequireJS Config
// -------
require.config({
    baseURL: 'app/scripts',
    paths: {
        'text':                     '../bower_components/requirejs-text/text',
        'jquery':                   '../bower_components/jquery/dist/jquery',
        'jqueryui':                 '../bower_components/jquery-ui/ui/jquery-ui',
        'underscore':               '../bower_components/underscore/underscore',
        'backbone':                 '../bower_components/backbone/backbone',
        'bootstrap-modal':          '../bower_components/bootstrap/js/modal',
        'bootstrap-transition':     '../bower_components/bootstrap/js/transition',
        'bootstrap-tab':            '../bower_components/bootstrap/js/tab',
        'bootstrap-collapse':       '../bower_components/bootstrap/js/collapse',
        'bootstrap-carousel':       '../bower_components/bootstrap/js/carousel',
        'owlcarousel':              '../bower_components/owlcarousel/owl-carousel/owl.carousel',
        'fastclick':                '../bower_components/fastclick-amd/fastclick',
    },
    shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            exports: 'Backbone'
        },
        'jqueryui': {
            exports: '$',
            deps:    ['jquery']
        },
        'bootstrap-carousel': {
            exports: 'bootstrap-carousel',
            deps:    ['jquery']
        },
        'bootstrap-modal': {
            exports: 'bootstrap-modal',
            deps:    ['jquery']
        },
        'bootstrap-transition': {
            exports: 'bootstrap-transition',
            deps:    ['jquery']
        },
        'bootstrap-tab': {
            exports: 'bootstrap-tab',
            deps:    ['jquery']
        },
        'bootstrap-collapse': {
            exports: 'bootstrap-collapse',
            deps:    ['jquery']
        },
        'owlcarousel': {
            exports: 'owlcarousel',
            deps:    ['jquery']
        }
    }
});


// -------
// App Start
// -------
require([
    'routers/router'
], function(Router) {
    new Router();
});