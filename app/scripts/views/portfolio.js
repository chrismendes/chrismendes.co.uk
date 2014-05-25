var App = App || {};

// -------
// Portfolio Page
// -------
App.Views.Portfolio = Backbone.View.extend({

	el: '#main',
	template: App.Helpers.template('template-portfolio'),
	theme: 'gold',

	events: {
		'click .back-home': 					'returnToHomepage'
	},

	initialize: function() {
		this.returnToHomepage = App.Helpers.returnToHomepage;
		this.render();
		this.setCarouselAnnotationHook();
	},

	render: function() {
		$('body').addClass(this.theme).addClass('slideup');
		this.$el.html(this.template());
		return this;
	},

	setCarouselAnnotationHook: function() {
		this.setCarouselAnnotation();
		var self = this;
		$('#carousel-allprojects').on('slid.bs.carousel', function() {
			self.setCarouselAnnotation();
			$('.carousel-annotation').fadeIn(150);
		});
		$('#carousel-allprojects').on('slide.bs.carousel', function() {
			$('.carousel-annotation').fadeOut(500);
		});
	},
	setCarouselAnnotation: function() {
		var annotation = $('#carousel-allprojects').find('.item.active .annotation').html();
		$('.carousel-annotation').html(annotation);
	}

});