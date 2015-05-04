var gulp              = require('gulp');
var browserify        = require('browserify');

var devMode = true;

gulp.task('watchify', function() {
  return browserify(devMode);
});
