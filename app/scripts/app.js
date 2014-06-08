// -------
// App Controller
// -------
define([
    'views/home',
    'views/cv',
    'views/portfolio'
], function(HomeView, CvView, PortfolioView) {

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
        }

    }

});