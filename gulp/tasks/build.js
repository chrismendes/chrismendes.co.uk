var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function() {

  // (Tasks inside array are run in parallel, outside in sequence.)

  runSequence(
    'serverside-html',
    [
      'sass',
      'copy:glyphicons',
      'webpack'
    ]
  );

});
