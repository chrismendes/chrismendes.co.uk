var App = App || {};

// -------
// Router
// -------
App.Router = Backbone.Router.extend({

	routes: {
		'': 					'index',
		'cv': 				'showCV',
		'portfolio': 	'showPortfolio'
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
	showPortfolio: function() {
		new App.Views.Portfolio;
	}

});

var Router = new App.Router;