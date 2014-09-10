// -------
// CV Page
// -------
define([
    'jquery',
    'views/_base',
    'text!/templates/cv.html',
    'common',
    'bootstrap-tab'
], function($, BaseView, html) {

    var CvView = BaseView.extend({

        template:       _.template(html),
        elPage:         '#page-cv',
        background:     'green',
        theme:          'red'

    });

    return CvView;

});