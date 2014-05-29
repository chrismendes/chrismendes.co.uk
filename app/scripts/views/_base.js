var App = App || {};

// -------
// Base View
// -------
App.Views.BaseView = Backbone.View.extend({

	el: '#main',
	elPage: null,
	template: null,
	theme: null,

	events: {
		'click .back-home': 'returnToHomepage'
	},

	initialize: function() {
		this.render();
	},

	render: function() {
		if(this.elPage !== null) {
			$('body').addClass(this.theme).addClass('slideup');
			this.$el.html(this.template());
			$(this.elPage).fadeIn(200);
			this.onAfterRender();
			return this;
		}
		return false;
	},

	onAfterRender: function() {},

	returnToHomepage: function() {
		$('body').unbind('backgroundSet');
		$('body').on('backgroundSet', function() {
			Router.navigate('/', true);
		});
		$('body').removeClass('slideup', 500, 'easeOutCubic', function() {
			App.Helpers.setBackground(App.Views.Home.prototype.theme);
		});
	}

});