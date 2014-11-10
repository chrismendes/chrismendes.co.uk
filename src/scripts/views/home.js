// -------
// Home Page
// -------
define([
    'jqueryui',
    'underscore',
    'backbone',
    'views/_base',
    'text!../../templates/home.html'
], function($, _, Backbone, BaseView, html) {

    'use strict';

    var HomeView = BaseView.extend({

        id:             'home',
        template:       _.template(html),
        background:     'blue',
        theme:          'blue',

        events: {
            'mouseenter .box':       'onBoxHover',
            'mouseleave .box':       'onBoxHoverOut',
            'click .box':            'onBoxClick'
        },

        onBeforeShow: function() {
            $('body').addClass('home').addClass('is-not-raised', 400);
        },

        // Box hover over/out effects
        onBoxHover: function(e) {
            this.identifyClickedBox(e).addClass('is-active').addClass('is-animating', 100);
        },
        onBoxHoverOut: function(e) {
            this.identifyClickedBox(e).removeClass('is-active').removeClass('is-animating', 100);
        },

        onBoxClick: function(e) {
            var boxClicked = this.identifyClickedBox(e);
            if(typeof boxClicked.attr('data-href') !== 'undefined') {
                this.exitPage(boxClicked);
            }
        },

        // Home page exit transition
        exitPage: function(boxClicked) {
            var navigateTo = boxClicked.attr('data-href');
            if(typeof navigateTo === 'undefined') {
                return;
            }
            // Hide footer so as to not appear top of page mid-transition
            $('.js-footer').hide();

            // Fix box heights so as to prevent them collapsing
            $('.box').each(function() {
                $(this).parent().css('height', $(this).parent().height());
            });
            // Fade out all boxes not clicked first
            $('.box').not(boxClicked).fadeOut();
            // After short delay, fade out clicked box, change background, and redirect on complete
            var self = this;
            _.delay(function() {
                boxClicked.fadeOut(300, function() {
                    $('body').removeClass('is-not-raised', 500, 'easeOutCubic', function() {
                        self.setBackground(boxClicked.attr('data-bg'), function() {
                            // Change page
                            Backbone.history.navigate(navigateTo, { trigger: true });
                        });
                    });
                });
            }, 200);
        },

        // Fade in new background
        setBackground: function(colour, onComplete) {
            if(_.isUndefined(colour)) {
                return false;
            }
            // Fade in background via 'bg-transition' element
            $('#bg-transition').removeClass().addClass('theme-bg-'+colour);
            $('#bg-transition').fadeIn(500, function() {
                $('body').removeClass().addClass('theme-bg-'+colour);
                $('#bg-transition').hide();
                if(onComplete) {
                    onComplete();
                }
            });
        }

    });

    return HomeView;

});