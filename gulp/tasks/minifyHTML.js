var gulp        = require('gulp');
var config      = require('../config');
var minifyHTML  = require('gulp-minify-html');
var merge       = require('merge-stream');
 
var taskOptions = {
  conditionals: true,
  spare: true
};

gulp.task('minifyHTML', function() {
  var index = gulp.src(config.buildDir + '/index.html')
    .pipe(minifyHTML(taskOptions))
    .pipe(gulp.dest(config.productionDir));

  // var templates = gulp.src(config.build.templates + '/**')
  //   .pipe(minifyHTML(taskOptions))
  //   .pipe(gulp.dest(config.production.templates));

  return merge(index, templates);
});
