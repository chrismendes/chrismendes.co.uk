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
        template:       _.template(html),
        background:     'purple',
        theme:          'green'

    });

    return RecruitmentView;

});