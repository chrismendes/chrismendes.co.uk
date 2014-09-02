// -------
// Portfolio Page
// -------
define([
    'jquery',
    'backbone',
    'views/_base',
    'text!/templates/portfolio.html',
    'collections/projects',
    'text!/data/portfolio.json',
    'common',
    'bootstrap-tab',
    'bootstrap-modal',
    'bootstrap-transition',
    'owlcarousel'
], function($, Backbone, BaseView, html, ProjectCollection, PortfolioData, Common) {

    var PortfolioView = BaseView.extend({

        template:       _.template(html),
        elPage:         '#page-portfolio',
        background:     'gold',
        theme:          'red',

        events: {
            'click .js-modal-show':     'showProjectModal'
        },

        initialize: function() {
            var projects = new ProjectCollection(JSON.parse(PortfolioData));
            this.prepareData(projects);
        },

        prepareData: function(collection) {
            var categories = {
                highlights:     { name: 'Project Highlights',   filter: { highlight: true }                                       },
                tech:           { name: 'JavaScript MVC',       filter: { techCategory: true },                 clientLogos: true },
                big:            { name: 'Big Business',         filter: { employer: 'DNX Marketing' },          clientLogos: true },
                small:          { name: 'Small Business',       filter: { employer: 'Fingo Marketing' }                           },
                other:          { name: 'Other Projects',       filter: { contract: false, employer: null }                       }
            };
            var categoryData = {};

            // Convert backbone models to object literals
            _.each(categories, function(config, key) {
                var projects = collection.where(config.filter);
                _.each(projects, function(proj, key) {
                    projects[key] = proj.attributes
                });
                categoryData[key] = { name: config.name, projects: projects, clientLogos: config.clientLogos };
            });

            // Release data to view
            this.data = {
                categories: categoryData
            };
        },

        showProjectModal: function(e) {
            var project = $(e.target).parents('.js-modal-id');
            var modal = project.attr('data-modal');
            if(typeof modal !== 'undefined') {
                if(!project.hasClass('js-noclick')) {
                    var self = this;
                    this.showModal(modal, function() {
                        self.startCarousel();
                    });
                }
            }
        },

        startCarousel: function() {
            $('.js-modal .owl-carousel').owlCarousel({
                singleItem: true,
                navigation: true,
                autoWidth: true
            });
        }

    });

    return PortfolioView;

});