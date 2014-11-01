// -------
// Skills/Expertise Page
// -------
define([
    'jquery',
    'underscore',
    'backbone',
    'views/_base',
    'text!../../templates/skills.html',
    'bootstraptab'
], function($, _, Backbone, BaseView, html) {

    'use strict';

    var SkillsView = BaseView.extend({

        id:             'skills',
        template:       _.template(html),
        background:     'gold',
        theme:          'red',

        events: {
            'click .js-icon-select':    'onWorkflowBoxClick'
        },

        onWorkflowBoxClick: function(e) {
            var selected = this.identifyClickedBox(e);
            var tab = selected.attr('data-tab');

            if($('.js-middle-content-column').css('display') !== 'none') {
                // Desktop - populate middle column
                this.setActive(selected);
                this.changeContent(tab);
            } else {
                // Phone - trigger popup
                this.showModal(tab);
            }
        },

        setActive: function(selected) {
            $('.js-icon-select').removeClass('is-active');
            selected.toggleClass('is-active');
        },
        changeContent: function(tab) {
            $('.js-workflow-tab').hide();
            $('#'+tab).show();
        },

    });

    return SkillsView;

});