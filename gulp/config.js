var config = {
  srcDir:         './src',
  buildDir:       './build/development',
  productionDir:  './build/production'
};

// App source files
config.src = {
  components:   config.srcDir + '/components', // (JS + UI CSS)
  basestyles:   config.srcDir + '/basestyles',
  layoutstyles: config.srcDir + '/layouts',
  templates:    config.srcDir + '/pages',
  partials:     config.srcDir + '/partials',
  images:       config.srcDir + '/assets/images',
  fonts:        config.srcDir + '/assets/fonts'
};

// Fit for browser (Sass -> CSS, compiled templates, etc.)
config.build = {
  css:          config.buildDir + '/css',
  js:           config.buildDir + '/js',
  images:       config.buildDir + '/images',
  fonts:        config.buildDir + '/fonts'
};

// Production ready app
config.production = {
  css:          config.productionDir + '/css',
  js:           config.productionDir + '/js',
  images:       config.productionDir + '/images',
  fonts:        config.productionDir + '/fonts'
};


module.exports = config;
