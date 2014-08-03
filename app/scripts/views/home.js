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

        template:       _.template(html),
        elPage:         '#page-home',
        background:     'blue',

        events: {
            'mouseenter .box':      'onBoxHover',
            'mouseleave .box':      'onBoxHoverOut',
            'click .box':           'onBoxClick'
        },

        onAfterRender: function() {
            $('body').addClass('is-not-raised', 400);
        },

        // Box hover over/out effects
        onBoxHover: function(e) {
            this.identifyBox(e).addClass('is-active').addClass('is-animating', 100);
        },
        onBoxHoverOut: function(e) {
            this.identifyBox(e).removeClass('is-active').removeClass('is-animating', 100);
        },

        onBoxClick: function(e) {
            var boxClicked = this.identifyBox(e);
            if(typeof boxClicked.attr('data-href') !== 'undefined') {
                this.exitPage(boxClicked);
            } else {
                this.showModal(boxClicked);
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
        },

        showModal: function(boxClicked) {
            var modalSrc = boxClicked.attr('data-modal');
            if(typeof modalSrc === 'undefined') {
                return;
            }
            
        },

        // Return jQuery element for clicked box, whether box itself or child element clicked
        identifyBox: function(e) {
            return (e.target.tagName != 'DIV') ? $(e.target).parent() : $(e.target);
        }

    });

    return HomeView;

});