// -------
// Helpers
// -------
define([
    'jquery',
    'underscore'
], function($, _) {
    return {

        // Colour theme for home page (used by exit transitions back to home page)
        homeTheme: 'blue',

        // Retrieve template html block
        template: function(id) {
        	return _.template( $('#' + id).html() );
        },

        // Fade in new background
        setBackground: function(colour, onComplete) {
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
                if(onComplete) {
                    onComplete();
                }
        	});
        }

    };
});