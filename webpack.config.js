var webpack    = require('webpack');
var config     = require('./app.config.js');

module.exports = {
  entry: {
    productlist: config.directories.src.pages + '/productlist.js'
  },
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
      'flight': 'flightjs',
      'templates-partials': config.directories.build.templates + '/templates-partials.js'
    }
  },
  debug: true,
  devtool: 'source-map'
};
