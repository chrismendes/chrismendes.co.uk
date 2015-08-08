'use strict';

// ---
// Dependencies
// ---
require('jcarousellite/jcarousellite');


// ---
// Component
// ---
var component = {

  initialise: function($target) {
    $target.jCarouselLite({
      btnNext:  '.js-gallery-next',
      btnPrev:  '.js-gallery-previous',
      visible:  1,
      circular: false
    });
  }

};


// ---
// Export
// ---
module.exports = component;
