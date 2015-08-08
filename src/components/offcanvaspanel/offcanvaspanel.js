'use strict';

// ---
// Dependencies
// ---
var $ = require('jquery');


// ---
// Component
// ---
var selectors = {
  panel:        '.js-offcanvaspanel',
  openButton:   '.js-open-offcanvaspanel',
  closeButton:  '.js-close-offcanvaspanel',
  pageMask:     '.js-pagemask'
};

var $ui = {};

var activeClass = 'is-active';
var openClass   = 'is-open';


var component = {

  openPanel: function() {
    $ui.pageMask.addClass(activeClass);
    $ui.panel.addClass(openClass);
  },

  closePanel: function() {
    $ui.pageMask.removeClass(activeClass);
    $ui.panel.removeClass(openClass);
  },

  closeViaBackgroundClick: function(event) {
    var className = (selectors.panel).substr(1);
    if($(event.target).hasClass(className)) {
      component.closePanel();
    }
  },

  initialise: function() {
    $ui.panel = $(selectors.panel);
    $ui.openButton = $(selectors.openButton);
    $ui.pageMask = $(selectors.pageMask);

    $(document).delegate(selectors.openButton,  'click', component.openPanel);
    $(document).delegate(selectors.closeButton, 'click', component.closePanel);

    $(document).delegate(selectors.panel, 'click', component.closeViaBackgroundClick);
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
