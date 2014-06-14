// -------
// Portfolio Page
// -------
define([
    'jquery',
    'backbone',
    'views/_base',
    'text!/templates/portfolio.html',
    'common'
], function($, Backbone, BaseView, html, Common) {

    var PortfolioView = BaseView.extend({

        theme: 'teal',
        elPage: '#page-portfolio',
        template: _.template(html),

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

    return PortfolioView;

});