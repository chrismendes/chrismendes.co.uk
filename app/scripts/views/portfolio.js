var App = App || {};

// -------
// Portfolio Page
// -------
App.Views.Portfolio = Backbone.View.extend({

	el: '#main',
	template: App.Helpers.template('template-portfolio'),

	events: {
		'click .back-home': 										'returnToHomepage'
	},

	initialize: function() {
		this.returnToHomepage = App.Helpers.returnToHomepage;
		this.render();
	},

	render: function() {
		$('body').addClass('gold').addClass('slideup');
		this.$el.html(this.template());
		return this;
	},

});