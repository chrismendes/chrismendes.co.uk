var webpack    = require('webpack');
var config     = require('./config.app.js');

var path       = require('path');
var glob       = require("glob")

 
var pageJS = glob.sync(config.directories.src.pages + '/**/*.js');
var entries = {};

pageJS.forEach(function(file) {
  var pageName = path.basename(file, '.js');
  entries[pageName] = file;
});


module.exports = {
  entry: entries,
  output: {
    path:     config.directories.build.scripts,
    filename: '[name].js'
  },
  plugins: [
    new webpack.DefinePlugin(config.globals),
    new webpack.optimize.CommonsChunkPlugin('shared', 'shared.js', null, 2),
    new webpack.ProvidePlugin({
      $:        'jquery',
      'jQuery': 'jquery'
    })
  ],
  resolve: {
    modulesDirectories: [
      'node_modules',
      'components'
    ],
    alias: {

    }
  },
  debug: true,
  devtool: 'source-map'
};
