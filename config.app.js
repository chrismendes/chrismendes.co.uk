var path     = require('path');
var basePath = path.resolve('.');


// ---
// Global Vars
// ---
var globals = {

};


// ---
// Directory Shortcuts
// ---
var folders = {
  srcDir:       '/src',
  buildDir:     '/.build',
  tempDir:      '/.tmp'
};

var directories = {};

// App Source Files
directories.src = {
  root:               basePath + folders.srcDir,
  pages:              basePath + folders.srcDir + '/pages',
  components:         basePath + folders.srcDir + '/components',
  basestyles:         basePath + folders.srcDir + '/shared/basestyles',
  layouts:            basePath + folders.srcDir + '/layouts',
  partials:           basePath + folders.srcDir + '/shared/partials',
  fonts:              basePath + folders.srcDir + '/shared/fonts',
  images:             basePath + folders.srcDir + '/shared/images'
};

// Fit for Browser (Sass -> CSS, compiled templates, etc.)
directories.build = {
  root:               basePath + folders.buildDir,
  html:               basePath + folders.buildDir,
  styles:             basePath + folders.buildDir + '/css',
  scripts:            basePath + folders.buildDir + '/js',
  fonts:              basePath + folders.buildDir + '/fonts',
  images:             basePath + folders.buildDir + '/images',
  templates:          basePath + folders.tempDir + '/.handlebars'
};


module.exports = {
  directories:  directories,
  globals:      globals
}
