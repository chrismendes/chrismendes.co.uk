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
        background:     'purple',
        theme:          'green'

    });

    return EmploymentView;

});