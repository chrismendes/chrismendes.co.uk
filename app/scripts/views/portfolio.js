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

        template:       _.template(html),
        elPage:         '#page-portfolio',
        background:     'gold',
        theme:          'red',

        events: {
            'mouseenter .grid-content-block':      'onBoxHover',
            'mouseleave .grid-content-block':      'onBoxHoverOut',
        },

        // Box hover over/out effects
        onBoxHover: function(e) {
            console.log('onBoxHover');
            this.identifyBox(e).not('.is-filtered-out').addClass('is-active', 200);
        },
        onBoxHoverOut: function(e) {
            this.identifyBox(e).removeClass('is-active', 200);
        },

        onAfterRender: function() {
            // this.setCarouselAnnotationHook();
        },

        // Return jQuery element for clicked box, whether box itself or child element clicked
        identifyBox: function(e) {
            return (e.target.tagName != 'DIV') ? $(e.target).parent() : $(e.target);
        }

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