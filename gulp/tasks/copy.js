var path         = require('path');
var baseURL      = path.resolve(__dirname, '../../');

var config       = require(baseURL + '/app.config.js');
var gulp         = require('gulp');


gulp.task('copy:fonts', function() {

  gulp.src(config.directories.src.fonts + '/**/*')
    .pipe(gulp.dest(config.directories.build.fonts));

});
