var path         = require('path');
var baseURL      = path.resolve(__dirname, '../../');
var config       = require(baseURL + '/app.config.js');

var gulp         = require('gulp');
var debug        = require('gulp-debug');
var browserSync  = require('browser-sync');
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');
var handleErrors = require('../util/handleErrors');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
  return gulp.src(config.directories.src.base + '/app.scss')
    .pipe(sass())
    .pipe(autoprefixer({ browsers: ['last 2 version'] }))
    .pipe(debug({title: 'debug/sass:'}))
    .pipe(gulp.dest(config.directories.build.styles))
    .pipe(browserSync.reload({ stream: true }));
});
