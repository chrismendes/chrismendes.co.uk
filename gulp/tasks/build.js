// (TODO: Investigate task 'iconFont')
var gulp        = require('gulp');
var config      = require('../config');
var browserify  = require('browserify');
var del         = require('del');

var minBuildTasks = [
  'sass',
  'templates',
  'images',
  'fonts'
];

// Minimum build, for development purposes (Directory: '/build/development')
gulp.task('build', function() {
  gulp.start(minBuildTasks);
  browserify();
});

// Build excluding JS, browserify triggered separately, such as the watch task during development
gulp.task('build:nojs', function() {
  gulp.start(minBuildTasks);
});

// Production build (Directory: '/build/production')
gulp.task('build:production', ['build', 'templates', 'clean:production'], function() {
  gulp.start([
    'minifyHTML',
    'sass',
    'minifyCSS',
    'minifyJS',
    'images',
    'fonts'
  ])
});

// Clean out production directory to start again
gulp.task('clean:production', function(cb) {
  del([
    config.productionDir
  ], cb);
});
