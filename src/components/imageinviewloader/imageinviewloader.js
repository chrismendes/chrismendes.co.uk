require('jquery.inview/jquery.inview');

var $targets = $('.js-imageinviewloader');

$targets.each(function() {

  $(this).bind('inview', function(event, isInView, visiblePartX, visiblePartY) {

    if(isInView === true) {
      var $this = $(this);
      var images = this.getElementsByTagName('img');

      for(var i = 0; i < images.length; i++) {
        var src = images[i].getAttribute('data-src');
        images[i].setAttribute('src', src);
      }

      $this.addClass('is-loaded').unbind('inview');
    }

  });

});
