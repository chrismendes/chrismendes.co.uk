// -------
// Employment Page
// -------
define([
    'views/_base',
    'text!/templates/recruitment.html',
    'common'
], function(BaseView, html, Common) {

    var RecruitmentView = BaseView.extend({

        id:             'recruitment',
        template:       _.template(html),
        background:     'purple',
        theme:          'green'

    });

    return RecruitmentView;

});