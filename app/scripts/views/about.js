// -------
// About Me Page
// -------
define([
    'views/_base',
    'text!/templates/about.html',
    'common'
], function(BaseView, html, Common) {

    var AboutView = BaseView.extend({

        id:             'about',
        template:       _.template(html),
        elPage:         '#page-about',
        background:     'teal',
        theme:          'green'

    });

    return AboutView;

});