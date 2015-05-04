var gulp         = require('gulp');
var browserSync  = require('browser-sync');
// var sass         = require('gulp-sass'); // (via Libsass is faster, but current version won't compile Susy)
var compass      = require('gulp-compass');
var sourcemaps   = require('gulp-sourcemaps');
var handleErrors = require('../util/handleErrors');
var config       = require('../config');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
  return gulp.src(config.srcDir + '/*.{sass,scss}')
    .pipe(sourcemaps.init())
    .pipe(compass({
      css: config.build.css,
      sass: config.srcDir
    }))
    .on('error', handleErrors)
    .pipe(sourcemaps.write())
    .pipe(autoprefixer({ browsers: ['last 2 version'] }))
    .pipe(gulp.dest(config.build.css))
    .pipe(browserSync.reload({ stream: true }));
});
