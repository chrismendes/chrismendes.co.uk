// -------
// Base View
// -------
define([
    'jquery',
    'backbone',
    'common',
    'text!/templates/_header.html',
    'text!/templates/_footer.html'
], function($, Backbone, Common, htmlHeader, htmlFooter) {

    var BaseView = Backbone.View.extend({

    	el:             '#page-contents',
    	elPage:         null,
    	background:     null,
        theme:          null,

        onBeforeRender: function() {},

    	render: function() {
            if(typeof this.template === 'undefined') {
                console.error('Caught error: View template not defined.');
                return false;
            }
    		if(this.elPage !== null) {

                this.onBeforeRender();

                if(this.elPage !== '#page-home') {
                    // Set header to raised on direct access
                    $('body').addClass('slideup');
                }

                // Set background colour
                if(this.background !== null) {
                    $('body').addClass('theme-bg-'+this.background)
                }

                // Set page theme colour
                if(this.theme !== null) {
                    $('body').addClass('theme-'+this.theme)
                }

                // Set header
                var header = _.template(htmlHeader);
                $('header').html(header());

                // Show back button
                if(this.elPage !== '#page-home') {
                    $('.back-home').css('display', 'inline-block');
                    $('.back-home').removeClass('is-hidden', 300);
                }

                // Set footer
                var footer = _.template(htmlFooter);
                $('footer').html(footer());

                // Set page contents
                this.$el.html(this.template());

                this.onBeforeShow();

                $(this.elPage).fadeIn(200);
    			
                this.onAfterRender();

    			return this;
    		}
    		return false;
    	},

    	onAfterRender: function() {},

        onBeforeShow: function() {},

    	destroy: function() {
            this.stopListening();
            this.undelegateEvents();
            this.unbind();
        },

        returnToHomepage: function() {
    		$('body').removeClass('slideup', 500, 'easeOutCubic', function() {
    			Common.setBackground(Common.homeTheme, function() {
                    // Change page
                    Backbone.history.navigate('/', { trigger: true });
                });
    		});
    	}

    });

    return BaseView;

});