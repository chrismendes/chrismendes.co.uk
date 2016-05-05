var path         = require('path');
var baseURL      = path.resolve(__dirname, '../../');

var config       = require(baseURL + '/config.app.js');
var gulp         = require('gulp');

var appsBaseURL  = path.resolve(baseURL, '../Sample Apps/');
var apps         = {
                    'dreamteam': {
                      targetDir:  'dreamteam',
                      files:      path.resolve(appsBaseURL, 'Dream Team/dist')
                    },
                    'rockpaperscissors': {
                      targetDir:  'rockpaperscissors',
                      files:      path.resolve(appsBaseURL, 'Rock Paper Scissors/dist')
                    },
                    'shoppingbasket': {
                      targetDir:  'shoppingbasket',
                      files:      path.resolve(appsBaseURL, 'Shopping Basket/dist')
                    }
                  };


gulp.task('apps', ['apps:dreamteam', 'apps:rockpaperscissors', 'apps:shoppingbasket']);


// ---
// Dream Team
// ---
gulp.task('apps:dreamteam', function() {

  var app = apps['dreamteam'];
  gulp.src(app['files'] + '/**/*')
    .pipe(gulp.dest(config.directories.build.apps + '/' + app['targetDir']));

});

// ---
// Rock Paper Scissors
// ---
gulp.task('apps:rockpaperscissors', function() {

  var app = apps['rockpaperscissors'];
  gulp.src(app['files'] + '/**/*')
    .pipe(gulp.dest(config.directories.build.apps + '/' + app['targetDir']));

});

// ---
// Shopping Basket
// ---
gulp.task('apps:shoppingbasket', function() {

  var app = apps['shoppingbasket'];
  gulp.src(app['files'] + '/**/*')
    .pipe(gulp.dest(config.directories.build.apps + '/' + app['targetDir']));

});
