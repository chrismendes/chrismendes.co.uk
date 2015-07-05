var path         = require('path');
var baseURL      = path.resolve(__dirname, '../../');
var config       = require(baseURL + '/app.config.js');

var gulp         = require('gulp');

gulp.task('watch', ['browser-sync'], function() {
  gulp.watch(config.directories.src.styles + '/**/*.scss',      ['sass']);
  gulp.watch(config.directories.src.templates + '/**/*.html',   ['serverside-html']);
  gulp.watch(config.directories.srcDir + '/index.html',         ['serverside-html']);
  gulp.watch(config.directories.src.components + '/**/*.js',    ['webpack']);
  gulp.watch(config.directories.src.pages + '/**/*.js',         ['webpack']);
  gulp.watch(config.directories.src.mocks + '/**/*.js',         ['webpack']);
});
