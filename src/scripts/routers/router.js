// -------
// Router
// -------
define([
    'backbone',
    'app'
], function(Backbone, App) {

    'use strict';

    var Router = Backbone.Router.extend({

        routes: {
            '':                 'index',
            'cv':               'showCV',
            'portfolio':        'showPortfolio',
            'skills':           'showSkills',
            'recruitment':      'showRecruitment',
            'recommendations':  'showRecommendations',
            'about':            'showAboutMe'
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
        showRecruitment: function() {
            App.showRecruitment();
        },
        // Recommendations Page
        showRecommendations: function() {
            App.showRecommendations();
        },
        // About Me Page
        showAboutMe: function() {
            App.showAboutMe();
        }
        
    });

    return Router;

});