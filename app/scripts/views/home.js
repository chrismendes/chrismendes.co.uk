var App = App || {};

// -------
// Home Page
// -------
App.Views.Home = Backbone.View.extend({

	el: '#main',
	template: App.Helpers.template('template-home'),

	events: {
		'mouseenter .box': 					'onBoxHover',
		'mouseleave .box': 					'onBoxHoverOut',
		'mouseenter .skills .box': 	'onSkillsHover'
	},

	initialize: function() {
		this.render();
	},

	render: function() {
		this.$el.html(this.template());
		return this;
	},

	onBoxHover: function(element) {
		if($(element.target).parent().hasClass('intro')) {
			return;
		}
		$('.box').removeClass('hover', 100);
		$(element.target).addClass('hover', 100);
	},
	onBoxHoverOut: function(element) {
		// element.stopPropagation();
		$(element.target).removeClass('hover', 100);
	},

	onSkillsHover: function(element) {
		
	}

});