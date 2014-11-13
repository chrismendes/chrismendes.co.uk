// -------
// About Me Page
// -------
define([
    'jquery',
    'underscore',
    'views/_base',
    'text!../../templates/about.html',
    'owlcarousel'
], function($, _, BaseView, html) {

    'use strict';

    var AboutView = BaseView.extend({

        id:             'about',
        name:           'About Me',
        template:       _.template(html),
        background:     'green',
        theme:          'red',

        onBeforeShow: function() {
            this.startCarousels();
        },

        startCarousels: function() {
            $('.js-carousel').owlCarousel({
                singleItem: true,
                autoWidth: true,
                pagination: false,
                afterMove: _.bind(this.onCarouselChange, { view: this })
            });
            this.setCarouselNavClickEvents();
        },

        onCarouselChange: function() {
            this.view.setSlideIndicatorActiveState();
            this.view.trackCarouselChange();
        },

        setCarouselNavClickEvents: function() {
            var owl = $('.js-carousel').data('owlCarousel');
            $('.js-slide-link').click(function() {
                var slide = $(this).attr('data-slide');
                if(typeof slide !== 'undefined') {
                    owl.goTo(slide);
                }
            });
            $('.js-carousel-previous').click(function(e) {
                e.preventDefault();
                owl.prev();
            });
            $('.js-carousel-next').click(function(e) {
                e.preventDefault();
                owl.next();
            });
        },

        setSlideIndicatorActiveState: function() {
            var owl = $('.js-carousel').data('owlCarousel');
            var slide = owl.currentItem;
            $('.js-slide-link').removeClass('is-active');
            $('.js-slide-link').eq(slide).addClass('is-active');
        }

    });

    return AboutView;

});