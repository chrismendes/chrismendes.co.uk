// -------
// CV Page
// -------
define([
    'jquery',
    'backbone',
    'views/_base',
    'text!/templates/skills.html',
    'common'
], function($, Backbone, BaseView, html, Common) {

    var SkillsView = BaseView.extend({

        template: _.template(html),
        elPage: '#page-skills',
        theme: 'green',

        events: {
            'click .js-nav':        'showContent'
            // 'click .back-home': 'returnToHomepage'
        },

        // Fade out current body content, fade in new
        showContent: function(e) {
            var boxClicked = this.identifyBox(e);
            var reqContent = boxClicked.attr('data-body');

            if(boxClicked.hasClass('is-active')) {
                return;
            }
            
            // Change option states
            $('.js-nav.is-active').removeClass('is-active', 100);
            boxClicked.addClass('is-active', 100);

            // Change body content
            $('.js-body.is-active').fadeOut(200, function() {
                $(this).removeClass('is-active');
                $('.js-body-'+reqContent).fadeIn(200, function() {
                    $(this).addClass('is-active');
                });
            });
        },

        // Return jQuery element for clicked box, whether box itself or child element clicked
        identifyBox: function(e) {
            return (e.target.tagName != 'DIV') ? $(e.target).parents('.js-nav') : $(e.target);
        }

    });

    return SkillsView;

});