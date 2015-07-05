var path         = require('path');
var baseURL      = path.resolve(__dirname, '../../');
var config       = require(baseURL + '/app.config.js');

var gulp         = require('gulp');
var hogan        = require('gulp-hogan-compile');
var browserSync  = require('browser-sync');

// ---
// Compile to Client (for development)
// ---
gulp.task('templates:tmp', ['templates-partials:tmp', 'templates-pages:tmp']);

gulp.task('templates-partials:tmp', function() {
  return compilePartials(config.directories.build.templates, 'templates-partials.js');
});
gulp.task('templates-pages:tmp', function() {
  return compilePages(config.directories.build.templates, 'templates-pages.js');
});


// ---
// Compile to Server (Shared)
// ---
gulp.task('templates:shared', ['templates-partials:shared', 'templates-pages:shared']);

gulp.task('templates-partials:shared', function() {
  return compilePartials(config.directories.shared.serverTemplates, 'templates-partials.js');
});
gulp.task('templates-pages:shared', function() {
  return compilePages(config.directories.shared.serverTemplates, 'templates-pages.js');
});


// ---
// Template Compilation
// ---
function compilePartials(targetDir, targetFilename, callback) {
  if(!targetDir || !targetFilename) {
    return;
  }

  var task = gulp.src(config.directories.src.templatePartials + '/**/*.html')
    .pipe(hogan(targetFilename, {
      wrapper: 'commonjs',
      templateName: function(file) {
        return path.basename(file.path, '.html');
      }
    }))
    .pipe(gulp.dest(targetDir));

    if(callback) {
      task.pipe(callback);
    }
    return task;
}

function compilePages(targetDir, targetFilename, callback) {
  if(!targetDir || !targetFilename) {
    return;
  }
  var task = gulp.src(config.directories.src.templatePages + '/**/*.html')
    .pipe(hogan(targetFilename, {
      wrapper: 'commonjs',
      templateName: function(file) {
        return path.basename(file.path, '.html');
      }
    }))
    .pipe(gulp.dest(targetDir));

    if(callback) {
      task.pipe(callback);
    }
    return task;
}
