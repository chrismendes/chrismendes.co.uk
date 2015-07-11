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
  base:               basePath + folders.srcDir,
  components:         basePath + folders.srcDir + '/components',
  layouts:            basePath + folders.srcDir + '/layouts',
  pages:              basePath + folders.srcDir + '/pages',
  partials:           basePath + folders.srcDir + '/partials'
};

// Fit for Browser (Sass -> CSS, compiled templates, etc.)
directories.build = {
  html:               basePath + folders.buildDir,
  styles:             basePath + folders.buildDir + '/css',
  scripts:            basePath + folders.buildDir + '/js',
  fonts:              basePath + folders.buildDir + '/fonts',
  templates:          basePath + folders.tempDir + '/.handlebars'
};


module.exports = {
  directories:  directories,
  globals:      globals
}
