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

	onBoxHover: function(e) {
		var element = (e.target.tagName != 'DIV') ? $(e.target).parent() : $(e.target);
		element.addClass('hover', 100);
	},
	onBoxHoverOut: function(e) {
		var element = (e.target.tagName != 'DIV') ? $(e.target).parent() : $(e.target);
		element.removeClass('hover', 100);
	}

});