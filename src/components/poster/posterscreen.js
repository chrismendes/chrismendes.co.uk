'use strict';

// ---
// Dependencies
// ---
var $ = require('jquery');


// ---
// Config
// ---
var defaults = {
  container:    '.js-posterscreen',
  next:         '.js-changeposter-next',
  previous:     '.js-changeposter-previous'
};

var $ui = {};

var currentPoster = 0;
var totalPosters = 0;


// ---
// Implementation
// ---
function initialise(config) {
  config = $.extend(defaults, config);

  $ui.container = $(config.container);
  $ui.posters   = $(config.container).children('li');
  totalPosters  = $ui.posters.length;

  if(typeof $ui.container === 'undefined' || typeof $ui.posters === 'undefined' || totalPosters === 0) {
    console.warn('Poster Screen component failed to initialise.')
    return false;
  }

  $(config.next).on('click', changePoster);
  $(config.previous).on('click', changePoster);
}

function changePoster(event) {
  var previous = $(this).hasClass('js-changeposter-previous');

  if(previous === true) {
    currentPoster -= 1;
  } else {
    currentPoster += 1;
  }

  if(currentPoster > (totalPosters-1)) {
    currentPoster = 0;
  }
  if(currentPoster < 0) {
    currentPoster = totalPosters-1;
  }

  $ui.posters.removeClass('is-shown');
  $ui.posters.eq(currentPoster).addClass('is-shown');
}


// ---
// Export
// ---
var publicAPI = {
  initialise: initialise
};

module.exports = publicAPI;
