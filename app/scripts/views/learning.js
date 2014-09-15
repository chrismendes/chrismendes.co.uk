// -------
// Learning Page
// -------
define([
    'views/_base',
    'text!/templates/learning.html',
    'common'
], function(BaseView, html, Common) {

    var LearningView = BaseView.extend({

        template:       _.template(html),
        elPage:         '#page-learning',
        background:     'teal',
        theme:          'green'

    });

    return LearningView;

});