// -------
// Base View
// -------
define([
    'jquery',
    'backbone',
    'common'
], function($, Backbone, Common) {

    var BaseView = Backbone.View.extend({

    	el: '#main',
    	elPage: null,
    	template: null,
    	theme: null,

    	events: {
    		'click .back-home': 'returnToHomepage'
    	},

    	initialize: function() {
    		this.render();
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
    		$('body').unbind('backgroundSet');
    		$('body').on('backgroundSet', function() {
                Backbone.trigger('changePage', '');
    		});
            console.log('test1');
    		$('body').removeClass('slideup', 500, 'easeOutCubic', function() {
                console.log('test2');
    			Common.setBackground(Common.homeTheme);
    		});
    	}

    });

    return BaseView;

});