var changed       = require('gulp-changed');
var gulp          = require('gulp');
var imagemin      = require('gulp-imagemin');
var config        = require('../config');
var browserSync   = require('browser-sync');

gulp.task('images', function() {
  return gulp.src(config.src.images + '/**/*')
    .pipe(changed(config.build.images)) // Ignore unchanged files
    .pipe(imagemin()) // Optimize
    .pipe(gulp.dest(config.build.images))
    .pipe(browserSync.reload({ stream: true }));
});
