var App = App || {};

// -------
// Helpers
// -------

// Retrieve template html block
App.Helpers.template = function(id) {
	return _.template( $('#' + id).html() );
};

// Fade in new background
App.Helpers.setBackground = function(colour, onCompleteRedirect) {
	if(_.isUndefined(colour)) {
		return false;
	}
	// Preserve 'slideup' body class if present
	bodySlideUp = $('body').hasClass('slideup');
	// Fade in background via 'bg-transition' element
	$('#bg-transition').removeClass().addClass(colour);
	$('#bg-transition').fadeIn(500, function() {
		$('body').removeClass().addClass(colour);
		if(bodySlideUp) {
			$('body').addClass('slideup');
		}
		$('#bg-transition').hide();
		if(!_.isUndefined(onCompleteRedirect)) {
			Router.navigate(onCompleteRedirect, true);
		}
	});
}