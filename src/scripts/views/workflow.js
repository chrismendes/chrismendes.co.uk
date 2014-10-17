// -------
// Dev Workflow Page
// -------
define([
    'jqueryui',
    'underscore',
    'views/_base',
    'text!/templates/workflow.html'
], function($, _, BaseView, html) {

    'use strict';

    var WorkflowView = BaseView.extend({

        id:             'workflow',
        template:       _.template(html),
        background:     'teal',
        theme:          'green',

        events: {
            'click .js-select':    'onBoxClick'
        },

        onBoxClick: function(e) {
            var selected = this.identifyClickedBox(e);
            this.setActive(selected);
            this.changeContent(selected.attr('data-tab'));
        },

        setActive: function(selected) {
            $('.js-select').removeClass('is-active');
            selected.toggleClass('is-active');
        },
        changeContent: function(tab) {
            $('.js-tab').hide();
            $('#'+tab).show();
        }

    });

    return WorkflowView;

});