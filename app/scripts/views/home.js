var App = App || {};

// -------
// Home Page
// -------
App.Views.Home = Backbone.View.extend({

	el: '#main',
	template: App.Helpers.template('template-home'),

	events: {
		'mouseenter .box': 					'onBoxHover',
		'mouseleave .box': 					'onBoxHoverOut'
	},

	initialize: function() {
		this.render();
	},

	render: function() {
		this.$el.html(this.template());
		return this;
	},

	onBoxHover: function(element) {
		element = (element.target.tagName != 'DIV') ? $(element.target).parent() : $(element.target);
		element.addClass('hover', 100);
	},
	onBoxHoverOut: function(element) {
		element = (element.target.tagName != 'DIV') ? $(element.target).parent() : $(element.target);
		element.removeClass('hover', 100);
	}

});