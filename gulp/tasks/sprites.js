var path         = require('path');
var baseURL      = path.resolve(__dirname, '../../');

var config       = require(baseURL + '/config.app.js');
var gulp         = require('gulp');
var gulpif       = require('gulp-if');
var sprite       = require('css-sprite').stream;


gulp.task('sprites', ['sprites:home:skills']);


gulp.task('sprites:home:skills', function() {

  var target = config.directories.src.pages + '/index/images/skills/*.png';
  gulp.src(target)
    .pipe(sprite({
      name:       'spritesheet',
      style:      'spritesheet.scss',
      cssPath:    '../images/index/spritesheets/spritesheet',
      processor:  'scss'
    }))
    .pipe(gulpif(
      '*.png',
      gulp.dest(config.directories.src.pages + '/index/images/spritesheets/'),
      gulp.dest(config.directories.src.pages + '/index/images/spritesheets/'))
    );
});
