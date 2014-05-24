var App = App || {};

// -------
// Home Page
// -------
App.Views.CV = Backbone.View.extend({

	el: '#main',
	template: App.Helpers.template('template-cv'),

	events: {
		// 'mouseenter a.info-popup span': 			'showModal',
		// 'mouseleave a.info-popup': 			'hideModal',
	},

	initialize: function() {
		this.render();
	},

	render: function() {
		$('body').addClass('gold').addClass('slideup');
		this.$el.html(this.template());
		return this;
	},

	showModal: function(e) {
		var modal = $(e.target).attr('data-target');
		$(modal).modal({
			backdrop: false
		});
	},
	hideModal: function(e) {
		var modal = $(e.target).attr('data-target');
		$(modal).modal('hide');
	}

});