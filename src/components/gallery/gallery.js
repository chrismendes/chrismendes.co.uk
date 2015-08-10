'use strict';

// ---
// Dependencies
// ---
require('jcarousellite/jcarousellite');


// ---
// Component
// ---
var selectors = {
  pagination: '.js-pagination > ul > li'
};

var component = {

  initialise: function($target) {
    var pagination = component.getPaginationButtons();

    $target.jCarouselLite({
      btnNext:  '.js-gallery-next',
      btnPrev:  '.js-gallery-previous',
      btnGo:    pagination,
      visible:  1,
      circular: false
    });
  },

  getPaginationButtons: function() {
    var buttons = [];
    var count = $(selectors.pagination).length;
    for(var i = 0; i < count; i++) {
      var suffix = ':nth-child(' + (i+1) + ')';
      buttons.push(selectors.pagination + suffix);
    }

    return buttons;
  }

};


// ---
// Export
// ---
module.exports = component;
