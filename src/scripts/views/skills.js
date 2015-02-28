// -------
// Skills/Expertise Page
// -------
define([
    'jquery',
    'underscore',
    'backbone',
    'views/_base',
    'text!../../templates/skills-expertise.html',
    'text!../../templates/skills-expertise/overview.html',
    'text!../../templates/skills-expertise/tech.html',
    'text!../../templates/skills-expertise/knowledge.html',
    'text!../../templates/skills-expertise/learning.html',
    'bootstraptab'
], function($, _, Backbone, BaseView, htmlRoot, htmlOverview, htmlTech, htmlKnowledge, htmlLearning) {

    'use strict';

    var SkillsView = BaseView.extend({

        id:             'skills',
        name:           'Skills & Expertise',
        template:       _.template(htmlRoot),
        background:     'gold',
        theme:          'red',

        events: {
            'click .js-icon-select':    'onWorkflowBoxClick'
        },

        initialize: function() {
            this.data = {
                tabOverview:    htmlOverview,
                tabTech:        htmlTech,
                tabKnowledge:   htmlKnowledge,
                tabLearning:    htmlLearning
            };
        },

        onWorkflowBoxClick: function(e) {
            var selected = this.identifyClickedBox(e);
            var tab = selected.attr('data-tab');

            if($('.js-middle-content-column').css('display') !== 'none') { // Desktop - populate middle column
                this.setActive(selected);
                this.changeContent(tab);
            } else { // Phone - trigger popup
                this.showModal(tab);
            }
        },

        setActive: function(selected) {
            $('.js-icon-select').removeClass('is-active');
            selected.toggleClass('is-active');
        },
        changeContent: function(tab) {
            $('.js-topic-tab').hide();
            $('#'+tab).show();
        },

    });

    return SkillsView;

});