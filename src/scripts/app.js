// -------
// App Controller
// -------
define([
    'views/home',
    'views/cv',
    'views/portfolio',
    'views/skills',
    'views/recruitment',
    'views/recommendations',
    'views/about',
], function(HomeView, CvView, PortfolioView, SkillsView, RecruitmentView, RecommendationsView, AboutView) {

    'use strict';

    // (TODO: Add FastClick.js)

    return {

        currentView: null,

        // Destroy current view before loading the next
        showView: function(nextView) {
            if(this.currentView) {
                this.currentView.destroy();
            }
            this.currentView = nextView;
            this.currentView.render();
        },

        // Home Page
        showHome: function() {
            var home = new HomeView();
            this.showView(home);
        },

        // CV Page
        showCV: function() {
            var cv = new CvView();
            this.showView(cv);
        },

        // Portfolio Page
        showPortfolio: function() {
            var portfolio = new PortfolioView();
            this.showView(portfolio);
        },

        // Skills Page
        showSkills: function() {
            var skills = new SkillsView();
            this.showView(skills);
        },

        // Employment Page
        showRecruitment: function() {
            var recruitment = new RecruitmentView();
            this.showView(recruitment);
        },

        // Learning Page
        showRecommendations: function() {
            var recommendations = new RecommendationsView();
            this.showView(recommendations);
        },

        // About Me Page
        showAboutMe: function() {
            var about = new AboutView();
            this.showView(about);
        }

    };

});