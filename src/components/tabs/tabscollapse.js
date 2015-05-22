'use strict';

// ---
// Dependencies
// ---
var $ = require('jquery');


// ---
// Component
// ---
var selectors = {
  collapse:           'a[href^="#/collapse/"]',
  tabContent:         '[id^="tabnested-"]'
};
var activeClass = 'is-active';


var component = {

  toggleTab: function(event) {
    event.preventDefault();

    var tab = event.currentTarget.hash.slice(2);
    var segments = tab.split('/');

    var $tabShow = $('#'+segments[1]);
    var currentlyActive = $tabShow.hasClass(activeClass);

    $(selectors.collapse).removeClass(activeClass);
    $(selectors.tabContent).removeClass(activeClass);

    if(currentlyActive === false) {
      $(this).addClass(activeClass);
      $tabShow.addClass(activeClass);
    }
  },

  initialise: function() {
    $(document).delegate(selectors.collapse, 'click', component.toggleTab);
  }

};


// ---
// Self Bootstrap
// ---
$(document).ready(function() {
  component.initialise();
});


// ---
// Export
// ---
module.exports = component;
