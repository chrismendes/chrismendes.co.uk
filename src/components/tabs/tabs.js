'use strict';

// ---
// Dependencies
// ---
var $ = require('jquery');


// ---
// Component
// ---
var selectors = {
  tab:          'a[href^="#/tab/"]',
  tabContent:   '[id^="tab-"]',
};
var activeClass = 'is-active';

var component = {

  onTabClick: function(event) {
    event.preventDefault();

    var tab = event.currentTarget.hash.slice(6);
    if(!tab) return;

    // Highlight Tab
    var tabWithin = $(this).parent('li');
    if(tabWithin.length > 0) {
      tabWithin.addClass(activeClass)
        .siblings().removeClass(activeClass);
    }

    // Show Content
    $(selectors.tabContent).removeClass(activeClass);
    $('#tab-' + tab).addClass(activeClass);
  },

  initialise: function() {
    $(document).delegate(selectors.tab, 'click', component.onTabClick);
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
