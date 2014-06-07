// -------
// Router
// -------
define([
    'backbone',
    'views/home',
    'views/cv',
    'views/portfolio'
], function(Backbone, HomeView, CvView, PortfolioView) {

    var Router = Backbone.Router.extend({

        routes: {
            '':            'index',
            'cv':          'showCV',
            'portfolio':   'showPortfolio'
        },

        initialize: function() {
            this.index();
            this.listenTo(Backbone, 'changePage', this.changePage);
        },

        // Used inside animate onComplete callbacks
        changePage: function(target) {
            var routeHandler = this.routes[target];
            this[routeHandler]();
        },

        // Home Page
        index: function() {
            new HomeView;
        },
        // CV Page
        showCV: function() {
            new CvView;
        },
        // Portfolio Page
        showPortfolio: function() {
            new PortfolioView;
        }

    });

    return Router;

});