var path         = require('path');
var baseURL      = path.resolve(__dirname, '../../');

var config       = require(baseURL + '/config.app.js');
var gulp         = require('gulp');


gulp.task('fonts', function() {
  return gulp.src(config.directories.src.fonts + '/**/*')
    .pipe(gulp.dest(config.directories.build.fonts));
});
