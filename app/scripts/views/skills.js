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
        theme: 'gold',

        events: _.extend(BaseView.prototype.events, {
            'mouseenter a.info-popup span': 'showModal',
            'mouseleave a.info-popup': 'hideModal',
        }),

        onAfterRender: function() {
            // Slide in category column
            $('.js-animated-entrace').removeClass('is-off-stage', 300);

            // Fade in main body
            $('.js-animated-entrace').removeClass('is-off-stage', 300);
        }

    });

    return SkillsView;

});