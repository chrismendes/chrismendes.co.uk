var path         = require('path');
var baseURL      = path.resolve(__dirname, '../../');
var config       = require(baseURL + '/app.config.js');

var gulp        = require('gulp');
var browserSync = require('browser-sync');

var taskOptions = {
  server: {
    baseDir: config.directories.build.html,
    routes: {
      // '/styles':   config.directories.src.styles,
      // '/scripts':  config.directories.src.scripts
    }
  }
};

gulp.task('browser-sync', function() {
  browserSync(taskOptions);
});
