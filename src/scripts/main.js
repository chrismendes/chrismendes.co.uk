// -------
// RequireJS Config
// -------
require.config({
    baseUrl: '../scripts',
    paths: {
        'text':                     '../libraries/requirejs-text/text',
        'jquery':                   '../libraries/jquery/dist/jquery',
        'jqueryui':                 '../libraries/jquery-ui/ui/jquery-ui',
        'underscore':               '../libraries/underscore/underscore',
        'backbone':                 '../libraries/backbone/backbone',
        'bootstrap-modal':          '../libraries/bootstrap/js/modal',
        'bootstrap-transition':     '../libraries/bootstrap/js/transition',
        'bootstrap-tab':            '../libraries/bootstrap/js/tab',
        'bootstrap-collapse':       '../libraries/bootstrap/js/collapse',
        'bootstrap-carousel':       '../libraries/bootstrap/js/carousel',
        'owlcarousel':              '../libraries/owlcarousel/owl-carousel/owl.carousel',
        'fastclick':                '../libraries/fastclick-amd/fastclick',
    },
    shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            exports: 'backbone'
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
define(['require'], function (require) {

    'use strict';

    require(['./routers/router'], function(AppRouter) {
        /* jshint nonew: false */
        new AppRouter();
    });

});