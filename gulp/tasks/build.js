var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function() {

  // (Tasks inside array are run in parallel, outside in sequence.)
  runSequence(
    [
      'templates',
      'copy:images',
      'copy:fonts',
      'sass',
      'webpack'
    ]
  );

});
