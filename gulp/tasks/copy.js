var path         = require('path');
var baseURL      = path.resolve(__dirname, '../../');
var config       = require(baseURL + '/app.config.js');
var gulp         = require('gulp');

/**
* Copy Bootstrap glphicons to serve directory (won't be neeeded post-bootstrap withdrawal)
*/
gulp.task('copy:glyphicons', function() {

  var bootstrapFonts = './node_modules/bootstrap-sass/assets/fonts/bootstrap/*';
  gulp.src(bootstrapFonts)
    .pipe(gulp.dest(config.directories.build.fonts));

});
