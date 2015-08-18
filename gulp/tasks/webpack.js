var gulp              = require('gulp');
var gutil             = require('gulp-util');
var webpack           = require('webpack');
var webpackConfig     = require('../../config.webpack.js');
var browserSync       = require('browser-sync');

gulp.task('webpack', ['webpack-compile'], function(callback) {
  return gulp.src('/')
    .pipe(browserSync.reload({ stream: true }))
});

gulp.task('webpack-compile', function(callback) {
  webpack(webpackConfig, function(error, stats) {
    if(error) {
      throw new gutil.PluginError('webpack', error);
    }
    // gutil.log('[webpack]', stats.toString({
    //   colors: true
    // }));
    return callback();
  });
});
