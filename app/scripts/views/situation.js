// -------
// Current Situation Page
// -------
define([
    'jquery',
    'backbone',
    'views/_base',
    'text!/templates/situation.html',
    'common'
], function($, Backbone, BaseView, html, Common) {

    var CurrentSituationView = BaseView.extend({

        template:       _.template(html),
        elPage:         '#page-situation',
        background:     'denim',
        theme:          'green',

        events: {
            
        },

        onAfterRender: function() {
            // this.setCarouselAnnotationHook();
        },

    });

    return CurrentSituationView;

});