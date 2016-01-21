var path         = require('path');
var baseURL      = path.resolve(__dirname, '../../');

var config       = require(baseURL + '/config.app.js');
var gulp         = require('gulp');
var gulpif       = require('gulp-if');
var sprite       = require('css-sprite').stream;


gulp.task('sprites', ['sprites:home-expertise', 'sprites:skills:knowledge']);


// ---
// Home Page
// ---
gulp.task('sprites:home-expertise', function() {

  var target = config.directories.src.pages + '/index/images/expertise/*.png';
  return gulp.src(target)
    .pipe(sprite({
      name:       'spritesheet',
      style:      'spritesheet.css',
      cssPath:    '../images/index/expertise/',
      processor:  'css',
      prefix:     'sprite-expertise'
    }))
    .pipe(gulpif(
      '*.png',
      gulp.dest(config.directories.src.pages + '/index/images/expertise/'),
      gulp.dest(config.directories.src.pages + '/index/images/expertise/'))
    );
});


// ---
// Skills/Expertise: Dev Knowledge
// ---
gulp.task('sprites:skills:knowledge', function() {

  var target = config.directories.src.pages + '/skills-expertise/images/knowledge/*.png';
  return gulp.src(target)
    .pipe(sprite({
      name:       'spritesheet',
      style:      'spritesheet.css',
      cssPath:    '../images/skills-expertise/knowledge/',
      processor:  'css',
      prefix:     'sprite-knowledge'
    }))
    .pipe(gulpif(
      '*.png',
      gulp.dest(config.directories.src.pages + '/skills-expertise/images/knowledge/'),
      gulp.dest(config.directories.src.pages + '/skills-expertise/images/knowledge/'))
    );
});
