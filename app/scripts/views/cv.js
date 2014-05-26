var App = App || {};

// -------
// Home Page
// -------
App.Views.CV = Backbone.View.extend({

	el: '#main',
	template: App.Helpers.template('template-cv'),
	theme: 'gold',

	events: {
		'click .back-home': 										'returnToHomepage'
		// 'mouseenter a.info-popup span': 			'showModal',
		// 'mouseleave a.info-popup': 						'hideModal',
	},

	initialize: function() {
		this.returnToHomepage = App.Helpers.returnToHomepage;
		this.render();
	},

	render: function() {
		$('body').addClass(this.theme).addClass('slideup');
		this.$el.html(this.template());
		$('#page-cv').fadeIn(200);
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