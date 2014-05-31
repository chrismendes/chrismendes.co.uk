var App = App || {};

// -------
// Home Page
// -------
App.Views.Home = Backbone.View.extend({

	el: '#main',
	template: App.Helpers.template('template-home'),
	theme: 'gold',

	events: {
		'mouseenter .box': 					'onBoxHover',
		'mouseleave .box': 					'onBoxHoverOut',
		'click .box': 							'exitPage'
	},

	initialize: function() {
		this.render();
	},

	render: function() {
		$('body').removeClass('slideup');
		$('#header .intro').show();
		this.$el.html(this.template());
		$('#page-home').fadeIn();
		return this;
	},

	onBoxHover: function(e) {
		this.identifyBox(e).addClass('hover').addClass('hover-animate', 100);
	},
	onBoxHoverOut: function(e) {
		this.identifyBox(e).removeClass('hover').removeClass('hover-animate', 100);
	},

	exitPage: function(e) {
		var boxClicked = this.identifyBox(e);
		boxClicked.removeClass('hover', 100);
		$('.box').each(function() {
			$(this).parent().css('height', $(this).parent().height());
		})
		$('.box').not(boxClicked).fadeOut(200, function() {
			boxClicked.fadeOut(200, function() {
				$('body').addClass('slideup', 500, 'easeOutCubic', function() {
					var navigateTo = boxClicked.attr('data-href');
					$('body').unbind('backgroundSet');
					$('body').on('backgroundSet', function() {
						Router.navigate(navigateTo, true);
					});
					App.Helpers.setBackground(boxClicked.data('theme'));
				});
			});
		});
	},

	identifyBox: function(e) {
		return (e.target.tagName != 'DIV') ? $(e.target).parent() : $(e.target);
	}

});