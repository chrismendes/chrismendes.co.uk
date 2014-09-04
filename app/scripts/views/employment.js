// -------
// Current Situation Page
// -------
define([
    'views/_base',
    'text!/templates/employment.html',
    'common'
], function(BaseView, html, Common) {

    var EmploymentView = BaseView.extend({

        template:       _.template(html),
        elPage:         '#page-employment',
        background:     'purple',
        theme:          'green'

    });

    return EmploymentView;

});