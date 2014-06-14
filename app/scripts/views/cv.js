// -------
// CV Page
// -------
define([
    'jquery',
    'backbone',
    'views/_base',
    'text!/templates/cv.html',
    'common'
], function($, Backbone, BaseView, html, Common) {

    var CvView = BaseView.extend({

        template: _.template(html),
        elPage: '#page-cv',
        theme: 'gold',

        events: _.extend(BaseView.prototype.events, {
            'mouseenter a.info-popup span': 'showModal',
            'mouseleave a.info-popup': 'hideModal',
        }),

        showModal: function(e) {
            var modal = $(e.target).attr('data-target');
            $(modal).modal({
                backdrop: false
            });
        },
        hideModal: function(e) {
            var modal = $(e.target).attr('data-target');
            $(modal).modal('hide');
        }

    });

    return CvView;

});