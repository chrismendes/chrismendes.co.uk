'use strict';

// ---
// Dependencies
// ---
var $ = require('jquery');


// ---
// Component
// ---
var selectors = {
  tab:                'a[href^="#/tab/"]',
  tabContent:         '[id^="tab-"]',
  tabContentNested:   '[id^="tabnested-"]',
  tabPrefix:          '#tab-',
  tabPrefixNested:    '#tabnested-'
};
var activeClass = 'is-active';


var component = {

  onTabClick: function(event) {
    event.preventDefault();

    var tab = event.currentTarget.hash.slice(6);
    var segments = tab.split('/');
    var nestedTabGroup = null;

    if(segments.length > 1) { // href reference to nested tab (e.g. 'contractjob/capablue')
      tab = tab.replace('/', '-');
      nestedTabGroup = segments[0];
    }
    if(!tab) return;

    // Highlight Tab
    var tabWithin = $(this).parent('li');
    if(tabWithin.length) {
      tabWithin.addClass(activeClass)
        .siblings().removeClass(activeClass);
    }

    // Show Content
    if(nestedTabGroup === null) {
      $(selectors.tabContent).removeClass(activeClass);
      $(selectors.tabPrefix + tab).addClass(activeClass);
    } else {
      $(selectors.tabContentNested).removeClass(activeClass);
      $(selectors.tabPrefixNested + tab).addClass(activeClass);
    }

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
