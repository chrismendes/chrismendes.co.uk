var path         = require('path');
var baseURL      = path.resolve(__dirname, '../../');
var config       = require(baseURL + '/app.config.js');

var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var sass         = require('gulp-sass'); // (via Libsass is faster, but current version won't compile Susy)
// var compass      = require('gulp-compass');
var sourcemaps   = require('gulp-sourcemaps');
var handleErrors = require('../util/handleErrors');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
  return gulp.src(config.directories.src.styles + '/main.scss')
    // .pipe(sourcemaps.init())
    .pipe(sass())
    // .pipe(sourcemaps.write())
    .pipe(autoprefixer({ browsers: ['last 2 version'] }))
    .pipe(gulp.dest(config.directories.build.styles))
    .pipe(browserSync.reload({ stream: true }));
});
