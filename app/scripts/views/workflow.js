// -------
// Dev Workflow Page
// -------
define([
    'views/_base',
    'text!/templates/workflow.html',
    'common'
], function(BaseView, html, Common) {

    var WorkflowView = BaseView.extend({

        template:       _.template(html),
        elPage:         '#page-workflow',
        background:     'teal',
        theme:          'green'

    });

    return WorkflowView;

});