var path         = require('path');
var baseURL      = path.resolve(__dirname, '../../');

var config       = require(baseURL + '/app.config.js');
var gulp         = require('gulp');


gulp.task('copy:fonts', function() {

  gulp.src(config.directories.src.fonts + '/**/*')
    .pipe(gulp.dest(config.directories.build.fonts));

});

gulp.task('copy:images', function() {

  var targetDirs = [
    config.directories.src.images     + '/**/*',
    config.directories.src.components + '/**/images/**',
    config.directories.src.pages      + '/**/images/**'
  ];

  gulp.src(targetDirs)
    .pipe(gulp.dest(config.directories.build.images));

});
