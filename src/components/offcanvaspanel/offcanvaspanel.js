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


var component = {

  openPanel: function() {
    var $panelContent = $(this).parent().siblings('.js-offcanvaspanel-content');
    $(document).trigger('offCanvasPanelOpen', [ $panelContent ]);

    $ui.pageMask.addClass('is-active');
    $ui.panel.addClass('is-open');
    $ui.body.addClass('is-locked');
  },

  closePanel: function() {
    $(document).trigger('offCanvasPanelClose');
    $ui.pageMask.removeClass('is-active');
    $ui.panel.removeClass('is-open');
    $ui.body.removeClass('is-locked');
  },

  closeViaBackgroundClick: function(event) {
    var className = (selectors.panel).substr(1);
    if($(event.target).hasClass(className)) {
      component.closePanel();
    }
  },

  initialise: function() {
    $ui.panel       = $(selectors.panel);
    $ui.openButton  = $(selectors.openButton);
    $ui.pageMask    = $(selectors.pageMask);
    $ui.body        = $('body');

    $(document).delegate(selectors.openButton,  'click', component.openPanel);
    $(document).delegate(selectors.closeButton, 'click', component.closePanel);
    $(document).delegate(selectors.panel,       'click', component.closeViaBackgroundClick);
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
