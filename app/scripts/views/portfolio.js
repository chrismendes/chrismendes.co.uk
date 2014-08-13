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
            // TODO: Parse to JSON rather than passing down models to view
            var projects = {};
            
            projects.highlights = collection.filter(function(item) {
                return item.get('highlight') === true;
            });

            projects.contract = collection.filter(function(item) {
                return item.get('contract') === true;
            });

            projects.dnx = collection.filter(function(item) {
                return item.get('employer') === 'DNX Marketing';
            });

            projects.fingo = collection.filter(function(item) {
                return item.get('employer') === 'Fingo Marketing';
            });

            projects.other = collection.filter(function(item) {
                return item.get('contract') === false && item.get('employer') === null;
            });

            this.data = {
                categories: {
                    'highlights':   { name: 'Project Highlights',   projects: projects.highlights },
                    'contract':     { name: 'Contract Work',        projects: projects.contract },
                    'dnx':          { name: 'DNX Marketing',        projects: projects.dnx },
                    'fingo':        { name: 'Fingo Marketing',      projects: projects.fingo },
                    'other':        { name: 'Other Projects',       projects: projects.other }
                }
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