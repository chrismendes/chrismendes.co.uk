require('offcanvaspanel/offcanvaspanel');
require('tabs/tabs');
var gallery = require('gallery/gallery');


// ---
// Populate Off-Canvas Panel w/Gallery
// ---
$(document).on('offCanvasPanelOpen', function(event, data) {

  var $imageSets = data.children();
  var $target = $('.js-offcanvaspanel-loadedcontent');

  $imageSets.each(function() {
    var $set = $(this);
    var selector = '.' + $set.attr('class');
    $target.children(selector).html($set.children());

    gallery.initialise($target.children(selector));

  });

});


// ---
// Clear Off-Canvas Panel
// ---
$(document).on('offCanvasPanelClose', function(event, data) {
  
});
