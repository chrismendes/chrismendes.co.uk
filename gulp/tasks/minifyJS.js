var gulp    = require('gulp');
var config  = require('../config');
var size    = require('gulp-filesize');
var uglify  = require('gulp-uglify');

gulp.task('minifyJS', ['browserify:production'], function() {
  return gulp.src(config.build.js + '/**')
    .pipe(uglify())
    .pipe(gulp.dest(config.production.js))
    .pipe(size());
});
