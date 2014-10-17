// -------
// Portfolio Page
// -------
define([
    'jquery',
    'underscore',
    'backbone',
    'views/_base',
    'text!/templates/portfolio.html',
    'collections/projects',
    'text!/data/portfolio.json',
    'bootstrap-tab',
    'bootstrap-modal',
    'bootstrap-transition',
    'owlcarousel'
], function($, _, Backbone, BaseView, html, ProjectCollection, PortfolioData) {

    'use strict';

    var PortfolioView = BaseView.extend({

        id:             'portfolio',
        template:       _.template(html),
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
            /* jshint maxlen: 200 */
            var categories = {
                highlights:     { name: 'Project Highlights',   filter: { highlight:  true }                                        },
                big:            { name: 'Big Business',         filter: { employer:   'DNX Marketing' },          clientLogos: true },
                small:          { name: 'Small Business',       filter: { employer:   'Fingo Marketing' }                           },
                other:          { name: 'Other Projects',       filter: { contract:   false, employer: null }                       },
                codeSamples:    { name: 'Code Samples',         filter: { codeSample: true }                                        }
            };
            var categoryData = {};

            // Convert backbone models to object literals
            _.each(categories, function(config, key) {
                var projects = collection.where(config.filter);
                _.each(projects, function(proj, key) {
                    projects[key] = proj.attributes;
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