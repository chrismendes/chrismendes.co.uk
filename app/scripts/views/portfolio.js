var App = App || {};

// -------
// Portfolio Page
// -------
App.Views.Portfolio = App.Views.BaseView.extend({

	template: App.Helpers.template('template-portfolio'),
	theme: 'gold',
	elPage: '#page-portfolio',

	onAfterRender: function() {
		this.setCarouselAnnotationHook();
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