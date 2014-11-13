// -------
// Employment Page
// -------
define([
    'underscore',
    'views/_base',
    'text!../../templates/recruitment.html'
], function(_, BaseView, html) {

    'use strict';

    var RecruitmentView = BaseView.extend({

        id:             'recruitment',
        name:           'Recruitment',
        template:       _.template(html),
        background:     'purple',
        theme:          'red'

    });

    return RecruitmentView;

});