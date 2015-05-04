var gulp             = require('gulp');
var iconfont         = require('gulp-iconfont');
var config           = require('../../config');
var generateIconSass = require('./generateIconSass');

var taskOptions = {
  name: 'Gulp Starter Icons',
    src: config.src + '/icons/*.svg',
    dest: config.dest + '/fonts',
    sassDest: config.src + '/sass',
    template: './gulp/tasks/iconFont/template.sass.swig',
    sassOutputName: '_icons.sass',
    fontPath: 'fonts',
    className: 'icon',
    options: {
      fontName: 'Post-Creator-Icons',
      appendCodepoints: true,
      normalize: false
    }
};

gulp.task('iconFont', function() {
  return gulp.src(taskOptions.src)
    .pipe(iconfont(taskOptions.options))
    .on('codepoints', generateIconSass)
    .pipe(gulp.dest(taskOptions.dest));
});
