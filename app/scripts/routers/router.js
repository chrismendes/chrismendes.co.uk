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
            'employment':   'showEmployment',
            'learning':     'showLearning',
            'workflow':     'showWorkflow',
            'about':        'showAboutMe'
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
        // Employment Page
        showEmployment: function() {
            App.showEmployment();
        },
        // Learning Page
        showLearning: function() {
            App.showLearning();
        },
        // Dev Workflow Page
        showWorkflow: function() {
            App.showWorkflow();
        },
        // About Me Page
        showAboutMe: function() {
            App.showAboutMe();
        }
        
    });

    return Router;

});