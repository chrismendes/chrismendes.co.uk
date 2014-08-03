// -------
// Router
// -------
define([
    'backbone',
    'app'
], function(Backbone, App) {

    var Router = Backbone.Router.extend({

        routes: {
            '':             'index',
            'cv':           'showCV',
            'portfolio':    'showPortfolio',
            'skills':       'showSkills',
            'situation':    'showCurrentSituation',
            'contact':      'showContactModal'
        },

        initialize: function() {
            // Turn on Backbone's URL change listener (also triggers home route)
            Backbone.history.start();
            // Backbone.history.start({ pushState: true });
        },

        // Home Page
        index: function() {
            App.showHome();
        },
        // CV Page
        showCV: function() {
            App.showCV();
        },
        // Portfolio Page
        showPortfolio: function() {
            App.showPortfolio();
        },
        // Skills Page
        showSkills: function() {
            App.showSkills();
        },
        // Current Situation Page
        showCurrentSituation: function() {
            App.showCurrentSituation();
        }
        
    });

    return Router;

});