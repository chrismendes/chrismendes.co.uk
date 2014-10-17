// Documentation: https://github.com/yeoman/grunt-bower-requirejs
// Automagically wire-up installed Bower components into your RequireJS config

module.exports = function(grunt) {

    var bower = grunt.config('bower') || {};

    // Copies remaining files to places other tasks can use
    bower = {
        target: {
            rjsConfig: '<%= config.dev.root %>/config.js'
        }
    };

    grunt.config('bower', bower);

};