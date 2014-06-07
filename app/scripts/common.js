// -------
// Helpers
// -------
define([
    'jquery',
    'underscore'
], function($, _) {
    return {

        // Retrieve template html block
        template: function(id) {
        	return _.template( $('#' + id).html() );
        },

        // Fade in new background
        setBackground: function(colour) {
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
        		$('body').trigger('backgroundSet');
        	});
        }

    };
});