var App = App || {};

// -------
// Router
// -------
App.Router = Backbone.Router.extend({

	routes: {
		'': 					'index',
		'cv': 				'showCV'
	},

	initialize: function() {
		Backbone.history.start();
	},

	index: function() {
		new App.Views.Home;
	},

	showCV: function() {
		new App.Views.CV;
	},

});

var Router = new App.Router;