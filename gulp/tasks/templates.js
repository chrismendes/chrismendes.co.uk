var path         = require('path');
var baseURL      = path.resolve(__dirname, '../../');
var config       = require(baseURL + '/app.config.js');

var gulp         = require('gulp');
var debug        = require('gulp-debug');
var handlebars   = require('gulp-compile-handlebars');
var rename       = require('gulp-rename');
var fs           = require('fs');
var del          = require('del');
var merge        = require('merge-stream');
var browserSync  = require('browser-sync');

// Overview:
//    1) For each page template, create duplicate of "master" template
//    2) Use HTML contents of page template for master partial placeholder "pagebody"
//    3) Rename accordingly (master.html -> page.html)

gulp.task('templates', function() {

  // Delete previously compiled template files
  del.sync(config.directories.build.html + '/*.html');

  // End-product HTML pages defined
  // (TODO: Withdraw config and add automatic search fs)
  var pages = [
    { name: 'index',            template: config.directories.src.pages + '/index/index.html' },
    { name: 'skills-expertise', template: config.directories.src.pages + '/skills-expertise/skills-expertise.html', data: config.directories.src.pages + '/skills-expertise/skills-expertise.json' },
    { name: 'portfolio',        template: config.directories.src.pages + '/portfolio/portfolio.html',               data: config.directories.src.pages + '/portfolio/portfolio.json' },
    { name: 'cv',               template: config.directories.src.pages + '/cv/cv.html',                             data: config.directories.src.pages + '/cv/cv.json' }
  ];

  // Compile HTML for each page template
  var masterTemplate = config.directories.src.base + '/main.html';
  var finalStream = null;

  for(var i = 0; i < pages.length; i++) { // For every defined page template

    // Retrieve template HTML
    pages[i].template = fs.readFileSync(pages[i].template, 'utf-8');

    // Retrieve template JSON data
    if(typeof pages[i].data !== 'undefined') {
      var data = fs.readFileSync(pages[i].data, 'utf-8');
      if(data.length) {
        pages[i].data = JSON.parse(data);
      }
    }

    // Handlebars options
    var options = {
      partials: {
        pagebody: pages[i].template
      },
      batch: [config.directories.src.partials],
      helpers: {
        urlFriendly: function(str) {
          return str.toLowerCase().replace(' ', '');
        }
      }
    };

    // Add page template compilation to queue
    var stream = gulp.src(masterTemplate)
      .pipe(handlebars(pages[i].data, options))
      .on('error', function() {
        this.emit('end');
      })

      .pipe(rename({
        basename: pages[i].name
      }))
      .pipe(debug({title: 'debug/html:'}))
      .pipe(gulp.dest(config.directories.build.html))
      .pipe(browserSync.reload({ stream: true }));

    if(finalStream === null) {
      finalStream = stream;
    } else {
      finalStream = merge(finalStream, stream);
    }
  }

  return finalStream;

});