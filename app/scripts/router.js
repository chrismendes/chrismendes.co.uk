var App = App || {};

// -------
// Router
// -------
App.Router = Backbone.Router.extend({

	routes: {
		'': 'index'
	},

	initialize: function() {
		Backbone.history.start();
	},

	index: function() {
		new App.Views.Home;
	}

});

var Router = new App.Router;