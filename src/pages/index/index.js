// ---
// In-View Animation
// ---
require('jquery.inview/jquery.inview');

$('.js-reveal').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
  if(isInView === true) {
    $('.js-reveal-element').addClass('is-revealed');
    $(this).unbind('inview');
  }
});
