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
        template:       _.template(html),
        background:     'teal',
        theme:          'red',

        onBeforeShow: function() {
            this.startCarousels();
        },

        startCarousels: function() {
            $('.js-carousel').owlCarousel({
                singleItem: true,
                autoWidth: true,
                pagination: false
            });
            this.setCarouselNavClickEvents();
        },

        setCarouselNavClickEvents: function() {
            var owl = $('.js-carousel').data('owlCarousel');
            $('.js-slide-link').click(function() {
                var s = $(this).attr('data-slide');
                if(typeof s !== 'undefined') {
                    owl.goTo(s);
                    $('.js-slide-link').removeClass('is-active');
                    $(this).addClass('is-active');
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

    });

    return AboutView;

});