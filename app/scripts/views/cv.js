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
		$('body').addClass('slideup');
		$('.intro').hide();
		this.render();
	},

	render: function() {
		this.$el.html(this.template());
		return this;
	},

});