// -------
// Portfolio Page
// -------
define([
    'jquery',
    'backbone',
    'views/_base',
    'text!/templates/portfolio.html',
    'common',
    'bootstrap-tab'
], function($, Backbone, BaseView, html, Common) {

    var PortfolioView = BaseView.extend({

        template:       _.template(html),
        elPage:         '#page-portfolio',
        background:     'gold',
        theme:          'red',

        events: {},

        onAfterRender: function() {
            // this.setCarouselAnnotationHook();
        },

        // setCarouselAnnotationHook: function() {
        //     this.setCarouselAnnotation();
        //     var self = this;
        //     $('#carousel-allprojects').on('slid.bs.carousel', function() {
        //         self.setCarouselAnnotation();
        //         $('.carousel-annotation').fadeIn(150);
        //     });
        //     $('#carousel-allprojects').on('slide.bs.carousel', function() {
        //         $('.carousel-annotation').fadeOut(500);
        //     });
        // },
        // setCarouselAnnotation: function() {
        //     var annotation = $('#carousel-allprojects').find('.item.active .annotation').html();
        //     $('.carousel-annotation').html(annotation);
        // }

    });

    return PortfolioView;

});