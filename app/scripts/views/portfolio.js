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
    'bootstrap-tab'
], function($, Backbone, BaseView, html, ProjectCollection, PortfolioData, Common) {

    var PortfolioView = BaseView.extend({

        template:       _.template(html),
        elPage:         '#page-portfolio',
        background:     'gold',
        theme:          'red',

        events: {},

        initialize: function() {
            var projects = new ProjectCollection(JSON.parse(PortfolioData));
            this.prepareData(projects);
        },

        prepareData: function(collection) {
            var categories = {
                highlights:     { name: 'Project Highlights',   filter: { highlight: true }                                       },
                tech:           { name: 'Backbone.js',          filter: { techCategory: true },                 clientLogos: true },
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

        onAfterRender: function() {
            // this.setCarouselAnnotationHook();
        },

        // setCarouselAnnotationHook: function() {
        //     this.setCarouselAnnotation();
        //     var self = this;
        //     $('#carousel-allprojects').on('slid.bs.carousel', function() {
        //         self.setCarouselAnnotation();
        //         $('.carousel-annotation').fadeIn(150);
        //     });
        //     $('#carousel-allprojects').on('slide.bs.carousel', function() {
        //         $('.carousel-annotation').fadeOut(500);
        //     });
        // },
        // setCarouselAnnotation: function() {
        //     var annotation = $('#carousel-allprojects').find('.item.active .annotation').html();
        //     $('.carousel-annotation').html(annotation);
        // }

    });

    return PortfolioView;

});