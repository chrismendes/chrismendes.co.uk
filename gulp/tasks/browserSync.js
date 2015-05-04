var browserSync = require('browser-sync');
var gulp        = require('gulp');
var config      = require('../config');

var taskOptions = {
  server: {
    // Serve up our build folder
    baseDir: config.buildDir
  }
};

gulp.task('browserSync', function() {
  browserSync(taskOptions);
});
