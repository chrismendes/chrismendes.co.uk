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
        'bootstrapmodal':          '../libraries/bootstrap/js/modal',
        'bootstraptransition':     '../libraries/bootstrap/js/transition',
        'bootstraptab':            '../libraries/bootstrap/js/tab',
        'bootstrapcollapse':       '../libraries/bootstrap/js/collapse',
        'bootstrapcarousel':       '../libraries/bootstrap/js/carousel',
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
        'bootstrapcarousel': {
            exports: 'bootstrapcarousel',
            deps:    ['jquery']
        },
        'bootstrapmodal': {
            exports: 'bootstrapmodal',
            deps:    ['jquery']
        },
        'bootstraptransition': {
            exports: 'bootstraptransition',
            deps:    ['jquery']
        },
        'bootstraptab': {
            exports: 'bootstraptab',
            deps:    ['jquery']
        },
        'bootstrapcollapse': {
            exports: 'bootstrapcollapse',
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