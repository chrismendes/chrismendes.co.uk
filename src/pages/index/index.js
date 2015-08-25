var gallery = require('gallery/gallery');

var $galleryArea = $('.js-gallery');
var totalSlides = 2;

gallery.initialise($galleryArea, totalSlides, {
  container: '.js-gallery-container'
});
