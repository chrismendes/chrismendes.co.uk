// -------
// Job Feedback Page
// -------
define([
    'underscore',
    'views/_base',
    'text!../../templates/feedback.html'
], function(_, BaseView, html) {

    'use strict';

    var FeedbackView = BaseView.extend({

        id:             'feedback',
        template:       _.template(html),
        background:     'teal',
        theme:          'red'

    });

    return FeedbackView;

});