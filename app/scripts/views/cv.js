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
		var _this = this;
		$('body').addClass('slideup', 500, 'easeOutQuart', function() {
			_this.$el.html(_this.template());
			$('#page-cv').animate({
				opacity: 1,
				height: '900px'
			}, 500);
		});
		return this;
	},

});