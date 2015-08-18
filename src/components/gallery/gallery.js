'use strict';

// ---
// Dependencies
// ---
require('jcarousellite/jcarousellite');


// ---
// Component
// ---
var defaults = {
  container:        '.js-gallery',
  btnNext:          '.js-gallery-next',
  btnPrevious:      '.js-gallery-previous',
  currentSlide:     '.js-gallery-currentslide',
  screenshotCount:  '.js-gallery-screenshotcount'
};
var $ui = {};


function initialise($target, totalSlides, config) {
  config = $.extend(defaults, config);

  $ui.container       = $(config.container);
  $ui.currentSlide    = $(config.container + ' ' + config.currentSlide);
  $ui.screenshotCount = $(config.container + ' ' + config.screenshotCount);
  $ui.btnNext         = $(config.container + ' ' + config.btnNext);
  $ui.btnPrevious     = $(config.container + ' ' + config.btnPrevious);

  $target.jCarouselLite({
    btnNext:  $ui.btnNext,
    btnPrev:  $ui.btnPrevious,
    visible:  1
  });

  var currentSlide = 1;
  $ui.container.attr('data-slide', currentSlide);
  $ui.currentSlide.html(currentSlide);
  $ui.screenshotCount.html(totalSlides);

  $ui.btnNext.click({
    $container:     $ui.container,
    $currentSlide:  $ui.currentSlide,
    direction:      'next',
    totalSlides:    totalSlides
  }, updatePagination);

  $ui.btnPrevious.click({
    $container:     $ui.container,
    $currentSlide:  $ui.currentSlide,
    direction:      'previous',
    totalSlides:    totalSlides
  }, updatePagination);
};


function updatePagination(e) {
  var totalSlides = e.data.totalSlides;
  var direction = e.data.direction;

  var $container = e.data.$container;
  var $currentSlide = e.data.$currentSlide;
  var currentSlide = parseInt($container.attr('data-slide'));

  if(direction === 'next') {
    if(currentSlide < totalSlides) {
      currentSlide += 1;
    } else {
      currentSlide = 1;
    }
  } else {
    if(currentSlide > 1) {
      currentSlide -= 1;
    } else {
      currentSlide = totalSlides;
    }
  }

  $currentSlide.html(currentSlide);
  $container.attr('data-slide', currentSlide);
};


function tearDown() {
  $ui.btnNext.unbind('click');
  $ui.btnPrevious.unbind('click');
}


// ---
// Export
// ---
var publicAPI = {
  initialise: initialise,
  tearDown:   tearDown
};

module.exports = publicAPI;
