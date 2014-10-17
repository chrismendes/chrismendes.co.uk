// Documentation: https://github.com/gruntjs/grunt-contrib-less
// Compile LESS to CSS

module.exports = function(grunt) {

    var less = grunt.config('less') || {};

    // Compiles LESS to CSS
    less = {
        default: {
            options: {
                paths: ['<%= config.dev.styles %>'],
                yuicompress: true
            },
            files: {
                '<%= config.dev.styles %>/app.css': '<%= config.dev.styles %>/app.less'
            }
        }
    };

    grunt.config('less', less);

};