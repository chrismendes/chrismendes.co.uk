'use strict';

// -------
// RequireJS Config
// -------
require.config({
	baseURL: 'app/scripts',
	paths: {
		'jquery': 		            '../bower_components/jquery/dist/jquery',
		'jqueryui': 	            '../bower_components/jquery-ui/ui/jquery-ui',
		'underscore': 	            '../bower_components/underscore/underscore',
		'backbone': 	            '../bower_components/backbone/backbone',
        'bootstrap-carousel':       '../bower_components/bootstrap/js/carousel',
        'bootstrap-modal':          '../bower_components/bootstrap/js/modal',
        'bootstrap-transition':     '../bower_components/bootstrap/js/transition',
        'bootstrap-tab':            '../bower_components/bootstrap/js/tab',
        'bootstrap-collapse':       '../bower_components/bootstrap/js/collapse'
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
        }
	}
});


// -------
// App Start
// -------
require([
    'backbone',
    'views/home',
    'routers/router'
], function(Backbone, HomeView, Router) {
    var router = new Router();
    router.initialize();
});