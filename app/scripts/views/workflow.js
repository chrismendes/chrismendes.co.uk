// -------
// Dev Workflow Page
// -------
define([
    'jqueryui',
    'views/_base',
    'text!/templates/workflow.html',
    'common'
], function($, BaseView, html, Common) {

    var WorkflowView = BaseView.extend({

        template:       _.template(html),
        elPage:         '#page-workflow',
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