var App = App || {};

// -------
// Home Page
// -------
App.Views.Home = Backbone.View.extend({

	el: '#main',
	template: App.Helpers.template('template-home'),

	events: {
		'mouseenter .box': 					'onBoxHover',
		'mouseleave .box': 					'onBoxHoverOut',
		'click .box': 							'exitBoxes'
	},

	initialize: function() {
		this.render();
	},

	render: function() {
		$('body').removeClass('slideup');
		$('#header .intro').show();
		this.$el.html(this.template());
		return this;
	},

	onBoxHover: function(e) {
		this.identifyBox(e).addClass('hover', 100);
	},
	onBoxHoverOut: function(e) {
		this.identifyBox(e).removeClass('hover', 100);
	},

	exitBoxes: function(e) {
		var boxClicked = this.identifyBox(e);
		boxClicked.removeClass('hover', 100);
		$('.box').each(function() {
			$(this).parent().css('height', $(this).parent().height());
		})
		$('.box').not(boxClicked).fadeOut(200, function() {
			boxClicked.fadeOut(200, function() {
				$('body').addClass('slideup', 500, 'easeOutQuart', function() {
					Router.navigate(boxClicked.attr('data-href'), true);
				});
			});
		});
	},

	identifyBox: function(e) {
		return (e.target.tagName != 'DIV') ? $(e.target).parent() : $(e.target);
	}

});