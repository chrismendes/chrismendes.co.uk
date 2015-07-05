var fs          = require('fs');
var path        = require('path');
var through     = require('through2');
var gutil       = require('gulp-util');
var request     = require('request');

var PLUGIN_NAME = 'hogan-to-html-remotedata';

/**
* hoganToHTMLRemoteData - Export full page HTML to .html files for in-browser development, compiling page templates with partials and remote/mock data.
* Designed to work in conjunction with 'gulp serve'.
* 
* Breakdown:
*   - For each raw page templates files (.html), retrieve the corresponding pre-compiled template from the JavaScript file provided (options.templatePages)
*   - Request remote data via the specified URL (options.dataURLs)
*   - Render the page template with the provided template partials (options.templatePartials) and the remote data
*   - Load file with output HTML to be saved via 'gulp.dest'
*
* Options:
*   - templatePages (pre-compiled JS templates for pages with keys that match the filenames of Gulp task source files)
*   - templatePartials (pre-compiled JS templates for partials)
*   - dataURLs (key value pairs of a page name and data URL)
*/
function hoganToHTMLRemoteData(options) {

  return through.obj(function(file, encoding, callback) {

    // Ensure source files refer to raw template files.
    if(['.html', '.mustache'].indexOf(path.extname(file.path)) === -1) {
      throw new gutil.PluginError(PLUGIN_NAME, 'Source files must reflect raw template files (.html or .mustache).');
    }

    // Ensure pre-compiled templates files were provided.
    if(!options.templatePages) {
      throw new gutil.PluginError(PLUGIN_NAME, 'Compiled page templates not specified (options.templatePages).');
    }
  
    var pageName = path.basename(file.relative, path.extname(file.relative));
    var template = options.templatePages[pageName];

    if(!template) {
      // Pre-compiled template for page not found.
      this.emit('error', new gutil.PluginError({
        plugin: PLUGIN_NAME,
        message: 'Compiled page template not found for: ' + pageName + '.'
      }));
      return callback();
    }

    var data = {};
    if(options.dataURLs) {

      // Retrieve compiled template for given page
      var url = options.dataURLs[pageName];

      if(url) {
        // URL for given page present, fetch data and render
        var that = this;
        request({
          url: url
        }, function(error, response, body) {
          var data = JSON.parse(body);
          file = addHTMLToFile(file, template, options.templatePartials, data);
          that.push(file);
          return callback();
        });
      } else {
        // No data URL for given page present (render page without data)
        file = addHTMLToFile(file, template, options.templatePartials, {});
        this.push(file);
        return callback();
      }

    } else {
      // Data mock URLs not specified (render page without data)
      file = addHTMLToFile(file, template, options.templatePartials, {});
      this.push(file);
      return callback();
    }

  });

};

/**
* Shortcut function to render compiled template, load HTML into file object and return.
*/
function addHTMLToFile(file, template, partials, data) {
  var html = template.render(data, partials);
  file.contents = new Buffer(html);
  return file;
}


module.exports = hoganToHTMLRemoteData;
