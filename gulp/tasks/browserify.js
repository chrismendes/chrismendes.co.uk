var gulp        = require('gulp');
var config      = require('../config');
var browserify  = require('browserify');
var remapify    = require('remapify');
var source      = require('vinyl-source-stream');
var glob        = require('glob');
var browserSync = require('browser-sync');

gulp.task('browserify', function(){
  var entries = glob.sync(config.src.templates + '/**/*.js');
  return browserify({
      entries: entries,
      debug: true
    })

    // (Remapify:)
    .plugin(remapify, [{ src: config.src.components + '/**/*.js', expose: 'components', cwd: config.srcDir }])

    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest(config.build.js))
    .pipe(browserSync.reload({ stream: true }));
});
