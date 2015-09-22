require('jquery.inview/jquery.inview');

var $targets = $('.js-inviewloader');

$targets.each(function() {
  $(this).bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if(isInView) {
      $(this).addClass('is-loaded').unbind('inview');
    }
  });
});
