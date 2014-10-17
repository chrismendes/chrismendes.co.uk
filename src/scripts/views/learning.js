// -------
// Learning Page
// -------
define([
    'views/_base',
    'text!/templates/learning.html',
    'common'
], function(BaseView, html, Common) {

    var LearningView = BaseView.extend({

        id:             'learning',
        template:       _.template(html),
        background:     'teal',
        theme:          'green'

    });

    return LearningView;

});