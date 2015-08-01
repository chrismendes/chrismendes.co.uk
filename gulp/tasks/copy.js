var path         = require('path');
var baseURL      = path.resolve(__dirname, '../../');

var config       = require(baseURL + '/app.config.js');
var gulp         = require('gulp');
var flatten      = require('gulp-flatten');


gulp.task('copy:fonts', function() {

  gulp.src(config.directories.src.fonts + '/**/*')
    .pipe(gulp.dest(config.directories.build.fonts));

});


gulp.task('copy:images', ['images:global', 'images:non-global']);


gulp.task('images:global', function() {

  gulp.src(config.directories.src.images + '/**/*')
    .pipe(gulp.dest(config.directories.build.images));

});


gulp.task('images:non-global', function() {

  var targetDirs = [
    config.directories.src.components + '/**/images/**',
    config.directories.src.pages      + '/**/images/**'
  ];

  gulp.src(targetDirs)
    .pipe(gulp.dest(config.directories.build.images));

});
