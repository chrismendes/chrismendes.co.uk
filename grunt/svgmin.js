// Documentation: https://github.com/sindresorhus/grunt-svgmin
// Minify SVG

module.exports = function(grunt) {

    var svgmin = grunt.config('svgmin') || {};

    svgmin = {
        dist: {
            files: [{
                expand: true,
                cwd: '<%= config.dev.images %>',
                src: '{,*/}*.svg',
                dest: '<%= config.dist.images %>'
            }]
        }
    };

    grunt.config('svgmin', svgmin);

};