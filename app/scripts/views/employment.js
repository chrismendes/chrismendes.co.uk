// -------
// Employment Page
// -------
define([
    'views/_base',
    'text!/templates/employment.html',
    'common'
], function(BaseView, html, Common) {

    var EmploymentView = BaseView.extend({

        id:             'employment',
        template:       _.template(html),
        elPage:         '#page-employment',
        background:     'purple',
        theme:          'green'

    });

    return EmploymentView;

});