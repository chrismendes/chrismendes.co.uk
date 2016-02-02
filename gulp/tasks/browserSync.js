var path         = require('path');
var baseURL      = path.resolve(__dirname, '../../');
var config       = require(baseURL + '/config.app.js');

var gulp        = require('gulp');
var browserSync = require('browser-sync');
var modRewrite  = require('connect-modrewrite');

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: config.directories.build.html,
      middleware: [ // App mirrors production env without extensions in URL, so add necessary routing for development
        modRewrite([
          '^/$ /index.html [L]',
          '^([^.]+)$ /$1.html [L]',
        ])
      ]
    }
  });
});
