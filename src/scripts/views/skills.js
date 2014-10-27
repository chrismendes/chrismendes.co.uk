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
        theme:          'red'

    });

    return SkillsView;

});