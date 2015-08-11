'use strict';

// ---
// Dependencies
// ---
require('jcarousellite/jcarousellite');


// ---
// Component
// ---
var selectors = {
  next:       '.js-gallery-next',
  previous:   '.js-gallery-previous'
};

var component = {

  currentSlide: null,
  totalSlides:  null,

  initialise: function($target, slides) {
    $target.jCarouselLite({
      btnNext:  selectors.next,
      btnPrev:  selectors.previous,
      visible:  1
    });

    component.currentSlide = 1;
    component.totalSlides = slides;
    $('.js-currentslide').html(component.currentSlide);
    $('.js-screenshotcount').html(component.totalSlides);

    $(selectors.next).click(component.updatePagination);
    $(selectors.previous).click(component.updatePagination);
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
