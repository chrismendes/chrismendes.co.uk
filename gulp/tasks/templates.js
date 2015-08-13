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

  var partialDirs = glob.sync(config.directories.src.pages + '/**/partials');
      partialDirs.push(config.directories.src.partials);

  // Handlebars options
  var options = {
    batch: partialDirs,
    helpers: {
      urlFriendly: function(str) {
        var friendly = str.toLowerCase().replace('/', '-').replace('.', '').replace(/ /g, '');
        return friendly;
      },
      loop: function(n, block) {
        var result = '';
        for(var i = 0; i < n; ++i) {
          result += block.fn(i+1);
        }
        return result;
      }
    }
  };

  return gulp.src(config.directories.src.pages + '/**/*.html')
    .pipe(handlebars(templateData, options))
    .pipe(flatten())
    .pipe(gulp.dest(config.directories.build.html))
    .pipe(browserSync.reload({ stream: true }));

});
