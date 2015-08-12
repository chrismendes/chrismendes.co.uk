'use strict';

// ---
// Dependencies
// ---
require('jcarousellite/jcarousellite');


// ---
// Component
// ---
var defaults = {
  btnNext:          '.js-gallery-next',
  btnPrevious:      '.js-gallery-previous',
  currentSlide:     '.js-gallery-currentslide',
  screenshotCount:  '.js-gallery-screenshotcount'
};

var component = {

  currentSlide: null,
  totalSlides:  null,

  initialise: function($target, slides, config) {
    config = $.extend(defaults, config);

    $target.jCarouselLite({
      btnNext:  config.next,
      btnPrev:  config.previous,
      visible:  1
    });

    component.currentSlide = 1;
    component.totalSlides  = slides;

    $(config.currentSlide).html(component.currentSlide);
    $(config.screenshotCount).html(component.totalSlides);

    $(config.btnNext).click(component.updatePagination);
    $(config.btnPrevious).click(component.updatePagination);
  },

  updatePagination: function(e) {
    var nextClass = selectors.next.substr(1);

    if($(e.target).hasClass(nextClass) === true) {
      if(component.currentSlide < component.totalSlides) {
        component.currentSlide += 1;
      } else {
        component.currentSlide = 1;
      }
    } else {
      if(component.currentSlide > 1) {
        component.currentSlide -= 1;
      } else {
        component.currentSlide = component.totalSlides;
      }
    }

    $('.js-currentslide').html(component.currentSlide);
  },

  tearDown: function() {
    $(selectors.next).unbind('click');
    $(selectors.previous).unbind('click');
  }

};


// ---
// Export
// ---
module.exports = component;
