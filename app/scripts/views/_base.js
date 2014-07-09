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

    	el: '#page-contents',
    	elPage: null,
    	theme: null,

        onBeforeRender: function() {},

    	render: function() {
            if(typeof this.template === 'undefined') {
                console.error('Caught error: View template not defined.');
                return false;
            }
    		if(this.elPage !== null) {

                this.onBeforeRender();

                // Ensure header on sub page is raised up on direct access or page refresh
                if(this.elPage !== '#page-home') {
                    $('body').addClass(this.theme).addClass('slideup');
                }

                // Set header
                var header = _.template(htmlHeader);
                $('header').html(header());

                // Set footer
                var footer = _.template(htmlFooter);
                $('footer').html(footer());

                // Set page contents and show
                this.$el.html(this.template());
    			$(this.elPage).fadeIn(200);
    			
                this.onAfterRender();

    			return this;
    		}
    		return false;
    	},

    	onAfterRender: function() {},

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