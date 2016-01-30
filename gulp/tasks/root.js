var path         = require('path');
var baseURL      = path.resolve(__dirname, '../../');

var config       = require(baseURL + '/config.app.js');
var gulp         = require('gulp');


var include = [
  baseURL + '/.htaccess',
  baseURL + '/sitemap.xml'
];

gulp.task('root', function() {

  return gulp.src(include)
    .pipe(gulp.dest(config.directories.build.root));

});
