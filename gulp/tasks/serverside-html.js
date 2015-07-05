var path             = require('path');
var baseURL          = path.resolve(__dirname, '../../');
var config           = require(baseURL + '/app.config.js');

var gulp             = require('gulp');
var browserSync      = require('browser-sync');

var mocks            = require(path.resolve(baseURL, '../shared/mocks/mocks.js')); // (TODO: To be replaced with /node_modules version.)
var generateDevHTML  = require('../plugins/hogan-to-html-remotedata.js');

/**
* Server-side HTML - Simulate the Express server and generate full page HTML files (/.build dir) for in-browser client-side development in isolation of server.
* 
* Compile 'templates/pages' directory with mock data and partials and place output HTML in '.build' directory
* to be served by BrowserSync for development purposes.
*/
gulp.task('serverside-html', ['templates:tmp'], function() {

  var templatesPagesPath    = config.directories.build.templates + '/templates-pages.js';
  var templatesPartialsPath = config.directories.build.templates + '/templates-partials.js';

  // Obtain pre-compiled templates via require, but delete from cache first (updated via dependency task 'templates:tmp')
  delete require.cache[templatesPagesPath];
  delete require.cache[templatesPartialsPath];
  var pages    = require(templatesPagesPath);
  var partials = require(templatesPartialsPath);

  // URLs as set in the mocks
  var mockDataURLs = {
    'products': 'http://api.surfdome.dev/products'
  };

  // Activate mocks
  mocks.implementMocks();

  return gulp.src(config.directories.src.templatePages + '/**/*')
    .pipe(generateDevHTML({
      templatePages:      pages,
      templatePartials:   partials,
      dataURLs:           mockDataURLs
    }))
    .pipe(gulp.dest(config.directories.build.html))
    .pipe(browserSync.reload({ stream: true }));

});
