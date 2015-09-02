// ---
// In-View Animation
// ---
require('jquery.inview/jquery.inview');

$('.js-reveal').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
  if(isInView && visiblePartY === 'top') {
    $('.js-reveal-element').addClass('is-revealed');
    $(this).unbind('inview');
  }
});


// ---
// Past Projects Gallery
// ---
var gallery = require('gallery/gallery');

var $galleryArea = $('.js-gallery');
var totalSlides = 2;

gallery.initialise($galleryArea, totalSlides, {
  container: '.js-gallery-container'
});


// ---
// Past Projects Posters
// ---
var posterScreen = require('poster/posterscreen');
posterScreen.initialise();
