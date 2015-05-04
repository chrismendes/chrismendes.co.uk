var gulp      = require('gulp');
var config    = require('../config');
var minifyCSS = require('gulp-minify-css');
var size      = require('gulp-filesize');

gulp.task('minifyCSS', ['sass'], function() {
  return gulp.src(config.build.css + '/**')
    .pipe(minifyCSS({ keepBreaks:true }))
    .pipe(gulp.dest(config.production.css))
    .pipe(size());
})
