var App = App || {};

// -------
// Home Page
// -------
App.Views.CV = Backbone.View.extend({

	el: '#main',
	template: App.Helpers.template('template-cv'),

	events: {
		
	},

	initialize: function() {
		this.render();
	},

	render: function() {
		$('body').addClass('slideup');
		this.$el.html(this.template());
		// $('#page-cv').animate({
		// 	opacity: 1,
		// 	height: '900px'
		// }, 500);
		return this;
	},

});