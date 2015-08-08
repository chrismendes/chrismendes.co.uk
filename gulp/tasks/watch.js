var path         = require('path');
var baseURL      = path.resolve(__dirname, '../../');
var config       = require(baseURL + '/app.config.js');

var gulp         = require('gulp');

gulp.task('watch', ['browser-sync'], function() {
  gulp.watch(config.directories.src.pages + '/**/*.html',       ['templates']);
  gulp.watch(config.directories.src.pages + '/**/*.json',       ['templates']);
  gulp.watch(config.directories.src.partials + '/**/*.html',    ['templates']);

  gulp.watch(config.directories.src.pages + '/**/*.js',         ['webpack']);
  gulp.watch(config.directories.src.components + '/**/*.js',    ['webpack']);

  gulp.watch(config.directories.src.root + '/*.scss',           ['sass']);
  gulp.watch(config.directories.src.components + '/**/*.scss',  ['sass']);
  gulp.watch(config.directories.src.layouts + '/**/*.scss',     ['sass']);
  gulp.watch(config.directories.src.basestyles + '/**/*.scss',  ['sass']);

  gulp.watch(config.directories.src.images + '/**/*',           ['images']);
});
