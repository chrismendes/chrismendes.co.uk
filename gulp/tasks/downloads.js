var path         = require('path');
var baseURL      = path.resolve(__dirname, '../../');

var config       = require(baseURL + '/config.app.js');
var gulp         = require('gulp');


gulp.task('downloads', function() {
  return gulp.src(config.directories.src.downloads + '/**/*')
    .pipe(gulp.dest(config.directories.build.downloads));
});
