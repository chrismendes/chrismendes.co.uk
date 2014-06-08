// -------
// Base View
// -------
define([
    'jquery',
    'backbone',
    'common'
], function($, Backbone, Common) {

    var BaseView = Backbone.View.extend({

    	el: '#page-contents',
    	elPage: null,
    	// template: null,
    	theme: null,

    	events: {
    		'click .back-home': 'returnToHomepage'
    	},

    	initialize: function() {
    		// this.render();
    	},

        destroy: function() {
            this.stopListening();
            this.undelegateEvents();
            this.unbind();
        },

    	render: function() {
    		if(this.elPage !== null) {
    			$('body').addClass(this.theme).addClass('slideup');
    			this.$el.html(this.template());
    			$(this.elPage).fadeIn(200);
    			this.onAfterRender();
    			return this;
    		}
    		return false;
    	},

    	onAfterRender: function() {},

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