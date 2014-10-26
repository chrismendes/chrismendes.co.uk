// -------
// Portfolio Page
// -------
define([
    'jquery',
    'underscore',
    'backbone',
    'views/_base',
    'text!../../templates/portfolio.html',
    'collections/projects',
    'text!../../data/portfolio.json',
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

        onAfterRender: function() {
            $('a.download-file').click(function(e) {
                e.preventDefault();
                $('.js-modal').modal('show');
            });
            this.setProjectModalTearDown();
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
                    // Show/hide project details in modal header
                    var projectDetails = $('.js-modal-content-' + modal + ' .js-project-details');
                    (!$('#highlights').hasClass('active')) ? projectDetails.hide() : projectDetails.show();

                    // Show modal and configure carousel(s) and tab links
                    var self = this;
                    this.showModal(modal, function() {
                        self.startCarousels();
                        self.setModalTabClickEvents();
                    });
                }
            }
        },

        setProjectModalTearDown: function() {
            var self = this;
            $('.js-modal').on('hidden.bs.modal', function() {
                self.destroyCarousels();
                $('.js-modal .js-modal-header').empty();
                $('.js-modal .js-modal-body').empty();
            });
        },

        startCarousels: function() {
            $('.js-modal .js-carousel').owlCarousel({
                singleItem: true,
                autoWidth: true
            });
            this.setCarouselNavClickEvents('.js-tab:first-child');
        },

        destroyCarousels: function() {
            $('.js-modal .js-tab').each(function() {
                var owl = $(this).find('.js-carousel').data('owlCarousel');
                if(typeof owl !== 'undefined') {
                    owl.destroy();
                }
            });
        },

        setCarouselNavClickEvents: function(tab) {
            var owl = $('.js-modal ' + tab + ' .js-carousel').data('owlCarousel');
            $('.js-carousel-previous').unbind('click').click(function(e) {
                e.preventDefault();
                owl.prev();
            });
            $('.js-carousel-next').unbind('click').click(function(e) {
                e.preventDefault();
                owl.next();
            });
        },

        setModalTabClickEvents: function() {
            /* jshint maxlen: 200 */
            // Handled manually as tab content exists twice (original template, duplicate imported into modal) and Bootstrap tab JS fails under these conditions
            var self = this;
            $('.js-modal .js-tablink').click(function(e) {
                e.preventDefault();
                // Set tab link active
                $('.js-modal .js-carousel-tabs li').removeClass('active');
                $(this).parent('li').addClass('active');
                // Change tabs
                var tab = $(this).attr('href');
                $('.js-modal .js-tab').removeClass('active');
                $('.js-modal ' + tab).addClass('active');

                // Update carousel previous/next links to work with current tab's carousel
                self.setCarouselNavClickEvents(tab);
            });
        }

    });

    return PortfolioView;

});