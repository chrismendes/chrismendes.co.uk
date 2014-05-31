var App = App || {};

// -------
// CV Page
// -------
App.Views.CV = App.Views.BaseView.extend({

	template: App.Helpers.template('template-cv'),
	theme: 'teal',
	elPage: '#page-cv',

	events: _.extend(App.Views.BaseView.prototype.events, {
		// 'mouseenter a.info-popup span': 			'showModal',
		// 'mouseleave a.info-popup': 						'hideModal',
	}),

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