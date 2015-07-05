var path     = require('path');
var basePath = path.resolve('.');

// ---
// Global Vars
// ---
var globals = {
  MOCKS_ENABLED: false
};

// ---
// Directory Shortcuts
// ---
var directories = {
  srcDir:       '',
  buildDir:     '/.build',
  tempDir:      '/.tmp',
  sharedDir:    path.resolve(basePath + '/../shared')
};

// App Source Files
directories.src = {
  styles:             basePath + directories.srcDir + '/styles',
  scripts:            basePath + directories.srcDir + '/scripts',
  components:         basePath + directories.srcDir + '/scripts/components',
  pages:              basePath + directories.srcDir + '/scripts/pages',
  templates:          basePath + directories.srcDir + '/templates',
  templatePages:      basePath + directories.srcDir + '/templates/pages',
  templatePartials:   basePath + directories.srcDir + '/templates/partials',
  mocks:              basePath + directories.srcDir + '/mocks'
};

// Fit for Browser (Sass -> CSS, compiled templates, etc.)
directories.build = {
  html:               basePath + directories.buildDir,
  styles:             basePath + directories.buildDir + '/css',
  scripts:            basePath + directories.buildDir + '/js',
  fonts:              basePath + directories.buildDir + '/fonts',
  templates:          basePath + directories.tempDir + '/templates'
};

// Client-Node Shared Assets
directories.shared = {
  serverTemplates:    directories.sharedDir + '/templates'
};


module.exports = {
  directories:  directories,
  globals:      globals
}
