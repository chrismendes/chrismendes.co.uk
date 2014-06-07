'use strict';

// -------
// RequireJS Config
// -------
require.config({
	baseURL: 'app/scripts',
	paths: {
		'jquery': 		'../bower_components/jquery/dist/jquery',
		'jqueryui': 	'../bower_components/jquery-ui/ui/jquery-ui',
		'underscore': 	'../bower_components/underscore/underscore',
		'backbone': 	'../bower_components/backbone/backbone'
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