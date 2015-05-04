var changed       = require('gulp-changed');
var gulp          = require('gulp');
var config        = require('../config');
var browserSync   = require('browser-sync');

gulp.task('fonts', function() {
  return gulp.src(config.src.fonts + '/**/*')
    .pipe(changed(config.build.fonts)) // Ignore unchanged files
    .pipe(gulp.dest(config.build.fonts))
    .pipe(browserSync.reload({ stream: true }));
});
