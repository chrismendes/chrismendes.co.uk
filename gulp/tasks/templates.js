var path         = require('path');
var baseURL      = path.resolve(__dirname, '../../');
var config       = require(baseURL + '/app.config.js');

var gulp         = require('gulp');
var handlebars   = require('gulp-compile-handlebars');
var flatten      = require('gulp-flatten');
var fs           = require('fs');
var del          = require('del');
var glob         = require("glob")
var _            = require('lodash');
var browserSync  = require('browser-sync');


gulp.task('templates', function() {

  // Delete previously compiled HTML
  del.sync(config.directories.build.html + '/*.html');

  // Template data
  var templateDataFiles = glob.sync(config.directories.src.pages + '/**/*.json');
  var templateData = {};
  templateDataFiles.forEach(function(file) {
    var contents = fs.readFileSync(file, 'utf-8');;
    var data = JSON.parse(contents)
    templateData = _.merge(templateData, data);
  });

  // Handlebars options
  var options = {
    batch: [config.directories.src.partials],
    helpers: {
      urlFriendly: function(str) {
        return str.toLowerCase().replace(' ', '');
      }
    }
  };

  return gulp.src(config.directories.src.pages + '/**/*.html')
    .pipe(handlebars(templateData, options))
    .pipe(flatten())
    .pipe(gulp.dest(config.directories.build.html))
    .pipe(browserSync.reload({ stream: true }));

});
