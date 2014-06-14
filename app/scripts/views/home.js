// -------
// Home Page
// -------
define([
    'jqueryui',
    'backbone',
    'views/_base',
    'text!/templates/home.html',
    'common'    
], function($, Backbone, BaseView, templateHome, Common) {

    var HomeView = BaseView.extend({

        elPage: '#page-home',
        theme: 'blue',

        events: {
            'mouseenter .box':      'onBoxHover',
            'mouseleave .box':      'onBoxHoverOut',
            'click .box':           'exitPage'
        },

        render: function() {
            $('body').removeClass('slideup');
            $('#header .intro').show();
            // this.$el.html(this.template());
            $(this.elPage).fadeIn();
            return this;
        },

        // Box hover over/out effects
        onBoxHover: function(e) {
            this.identifyBox(e).addClass('hover').addClass('hover-animate', 100);
        },
        onBoxHoverOut: function(e) {
            this.identifyBox(e).removeClass('hover').removeClass('hover-animate', 100);
        },

        // Home page exit transition
        exitPage: function(e) {
            var boxClicked = this.identifyBox(e);
            var navigateTo = boxClicked.attr('data-href');
            // boxClicked.removeClass('hover', 50).removeClass('hover-animate', 50);
            // Fix box heights so as to prevent them collapsing
            $('.box').each(function() {
                $(this).parent().css('height', $(this).parent().height());
            });
            // Fade out all boxes not clicked first
            $('.box').not(boxClicked).fadeOut();
            // After short delay, fade out clicked box, change background, and redirect on complete
            _.delay(function() {
                boxClicked.fadeOut(300, function() {
                    $('body').addClass('slideup', 500, 'easeOutCubic', function() {
                        Common.setBackground(boxClicked.data('theme'), function() {
                            // Change page
                            Backbone.history.navigate(navigateTo, { trigger: true });
                        });
                    });
                });
            }, 200);
        },

        // Return jQuery element for clicked box, whether box itself or child element clicked
        identifyBox: function(e) {
            return (e.target.tagName != 'DIV') ? $(e.target).parent() : $(e.target);
        }

    });

    return HomeView;

});