// -------
// Base View
// -------
define([
    'jquery',
    'underscore',
    'backbone',
    'text!../../templates/_header.html',
    'text!../../templates/_footer.html',
    'text!../../templates/_modal.html',
    'text!../../templates/_shared.html',
    'text!../../templates/_mobilemenu.html'
], function($, _, Backbone, htmlHeader, htmlFooter, htmlModal, htmllShared, htmlMobileMenu) {

    'use strict';

    var BaseView = Backbone.View.extend({

        el:             '.js-page-container',
        id:             null,
        background:     null,
        theme:          null,
        data:           null,

        onBeforeRender: function() {},

        onAfterRender: function() {},

        onBeforeShow: function() {},

        onBeforeRenderBase: function() {
            this.setThemeClasses();
        },

        onAfterRenderBase: function() {
            this.setMobileMenuButtonHandlers();
            this.setSharedModalClickHandler();
            this.trackPageView();
        },

        onBeforeShowBase: function() {
            // Restore footer
            $('.js-footer').show();

            // Hide horizontal navbar on home page
            if(this.id === 'home') {
                $('.js-menu').hide();
            }

            this.setMenuActiveItem();
            this.scrollToTop();
            this.setEventTrackingClicks();
        },

        render: function() {
            this.onBeforeRenderBase();
            this.onBeforeRender();

            // Inject page header, footer, mobile menu, etc.
            this.insertCoreHTML();

            // Set page contents
            this.$el.html(this.template(this.data));

            this.onBeforeShowBase();
            this.onBeforeShow();

            // Fade in page if hidden
            if($('.js-fadein').length > 0) {
                var self = this;
                $('.js-fadein').fadeIn(400, function() {
                    self.onAfterRenderBase();
                    self.onAfterRender();
                });
            } else {
                this.onAfterRenderBase();
                this.onAfterRender();
            }

            return this;
        },

        insertCoreHTML: function() {
            // Set header
            var header = _.template(htmlHeader);
            $('.js-header').html(header());

            // Set footer
            var footer = _.template(htmlFooter);
            $('.js-footer').html(footer());

            // Set modal skeleton markup
            var modal = _.template(htmlModal);
            $('.js-modal-skeleton').html(modal);

            // Set globally shared content
            var shared = _.template(htmllShared);
            $('.js-shared-content').html(shared);

            // Set mobile menu
            var mobileMenu = _.template(htmlMobileMenu);
            $('.js-mobile-menu').html(mobileMenu);
        },

        destroy: function() {
            this.stopListening();
            this.undelegateEvents();
            this.unbind();
        },

        showModal: function(modalID, onComplete) {
            // Acquire new modal content
            var modalTarget = '.js-modal-content-' + modalID;
            var modalContent = {
                header: $(modalTarget+' .js-modal-content-header').html(),
                body:   $(modalTarget+' .js-modal-content-body').html()
            };
            // Determine large or small modal
            if($(modalTarget).attr('data-modal-large') === 'false') {
                $('.js-modal .modal-dialog').removeClass('modal-lg');
            } else {
                $('.js-modal .modal-dialog').addClass('modal-lg');
            }
            // Set header contents
            if(typeof modalContent.header !== 'undefined') {
                $('.js-modal').removeClass('modal-no-header');
                $('.js-modal-header').html(modalContent.header);
            } else {
                $('.js-modal-header').empty();
                $('.js-modal').addClass('modal-no-header');
            }
            // Set body contents and show
            $('.js-modal-body').html(modalContent.body);
            $('.js-modal').modal();

            // Set click handler for close modal link other than close button
            var self = this;
            $('.js-close-modal').click(function() {
                self.closeModal();
            });

            // Set event tracking click handlers for new modal content
            this.setEventTrackingClicks(true);
            
            // Run callback if specified
            if(typeof onComplete !== 'undefined') {
                onComplete();
            }
        },

        closeModal: function() {
            $('.js-modal').modal('hide');
            $('.modal-backdrop').remove();
        },

        setSharedModalClickHandler: function() {
            var self = this;
            $('.js-shared-modal').click(function(e) {
                e.preventDefault();
                var modal = $(this).attr('data-modal');
                if(typeof modal !== 'undefined') {
                    self.showModal(modal);
                }
            });
        },

        // Return jQuery element for clicked box, whether box itself or child element clicked
        identifyClickedBox: function(e) {
            return (e.target.tagName !== 'DIV') ? $(e.target).parent() : $(e.target);
        },

        setMenuActiveItem: function() {
            $('.js-menu li, .js-menu-mobile li').removeClass('is-active');
            $('.js-menu-' + this.id).addClass('is-active');
        },

        setMobileMenuButtonHandlers: function() {
            $('.js-open-mobile-menu').click(function(e) {
                e.preventDefault();
                $('body').addClass('mobile-menu-open');
            });
            $('.js-close-mobile-menu').click(function(e) {
                e.preventDefault();
                $('body').removeClass('mobile-menu-open');
            });
        },

        setThemeClasses: function() {
            // Clear current theme classes
            $('body').attr('class', '');

            // Set new background colour
            if(this.background !== null) {
                $('body').addClass('theme-bg-'+this.background);
            }

            // Set new page theme colour
            if(this.theme !== null) {
                $('body').addClass('theme-'+this.theme);
            }
        },

        scrollToTop: function() {
            window.scrollTo(0, 0);
        },

        setEventTrackingClicks: function(modal) {
            /* global ga */
            var selector = '.js-track';
            if(modal) {
                selector = '.js-modal ' + selector;
            }
            $(selector).click(function() {
                var category = $(this).data('track-category');
                var label = $(this).data('track-label');
                if(typeof category === 'undefined' || typeof label === 'undefined') {
                    return;
                }

                ga('send', 'event', category, 'click', label);
            });
        },
        trackCarouselChange: function(modal) {
            /* global ga */
            var selector = '.js-carousel-track';
            if(modal) {
                if($('.js-carousel-tabs').length > 0) {
                    selector = '.js-modal .js-tab.active ' + selector;
                } else {
                    selector = '.js-modal ' + selector;
                }
            }
            var owl = $(selector).data('owlCarousel');
            var slideNumber = owl.currentItem;

            var category = $(selector).data('track-category');
            var label = $(selector).data('track-label');
            var slideLabel = $(selector).find('.js-carousel-item').eq(slideNumber).data('track-label');
            if(typeof slideLabel !== 'undefined') {
                label = label.replace('#', slideLabel);
            } else {
                label = label.replace('#', parseInt(slideNumber)+1);
            }

            ga('send', 'event', category, 'click', label);
        },

        trackPageView: function() {
            /* global ga */
            var location = window.location.protocol + '//' + window.location.hostname + window.location.pathname;
            var page = '/';
            if(this.id !== 'home') {
                location = location + this.id;
                page = page + this.id;
            }
            ga('send', 'pageview', {
                'location':  location,
                'page':      page,
                'title':     this.name
            });
        }

    });

    return BaseView;

});