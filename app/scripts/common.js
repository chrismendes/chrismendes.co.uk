// -------
// Helpers
// -------
define([
    'jquery',
    'underscore'
], function($, _) {
    return {

        // Colour theme for home page (used by exit transitions to return to home page)
        homeTheme: 'blue',

        // Retrieve template html block
        template: function(id) {
        	return _.template( $('#' + id).html() );
        },

        // Fade in new background
        setBackground: function(colour) {
            console.log('test3');
        	if(_.isUndefined(colour)) {
        		return false;
        	}
        	// Preserve 'slideup' body class if present
        	bodySlideUp = $('body').hasClass('slideup');
        	
        	// Fade in background via 'bg-transition' element
        	$('#bg-transition').removeClass().addClass(colour);
        	$('#bg-transition').fadeIn(500, function() {
                console.log('test4');
        		$('body').removeClass().addClass(colour);
        		if(bodySlideUp) {
        			$('body').addClass('slideup');
        		}
        		$('#bg-transition').hide();
        		$('body').trigger('backgroundSet');
        	});
            console.log('test5');
        }

    };
});