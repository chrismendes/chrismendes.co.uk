// -------
// Home Page
// -------
define([
    'jqueryui',
    'backbone',
    'views/_base',
    'text!/templates/home.html',
    'common'    
], function($, Backbone, BaseView, html, Common) {

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

        onAfterRender: function() {
            $('.menu').hide();
            $('body').addClass('is-not-raised', 400);
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
            } else {
                var modal = boxClicked.attr('data-modal');
                if(typeof modal !== 'undefined') {
                    this.showModal(modal);
                }
            }
        },

        // Home page exit transition
        exitPage: function(boxClicked) {
            var navigateTo = boxClicked.attr('data-href');
            if(typeof navigateTo === 'undefined') {
                return;
            }
            // boxClicked.removeClass('is-active', 50).removeClass('is-animating', 50);
            // Fix box heights so as to prevent them collapsing
            $('.box').each(function() {
                $(this).parent().css('height', $(this).parent().height());
            });
            // Fade out all boxes not clicked first
            $('.box').not(boxClicked).fadeOut();
            // After short delay, fade out clicked box, change background, and redirect on complete
            _.delay(function() {
                boxClicked.fadeOut(300, function() {
                    $('body').removeClass('is-not-raised', 500, 'easeOutCubic', function() {
                        Common.setBackground(boxClicked.attr('data-bg'), function() {
                            // Change page
                            Backbone.history.navigate(navigateTo, { trigger: true });
                        });
                    });
                });
            }, 200);
        }

    });

    return HomeView;

});