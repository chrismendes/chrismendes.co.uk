// Documentation: https://github.com/gruntjs/grunt-contrib-watch
// Watches files for changes and runs tasks based on the changed files

module.exports = function(grunt) {

    var watch = grunt.config('watch') || {};

    watch = {
        less: {
            files: [
                '<%= config.dev.styles %>/app.less',
                '<%= config.dev.styles %>/{,*/}*.{less}'
            ],
            tasks: ['less', 'autoprefixer']
        },
        js: {
            files: [
                '<%= config.dev.root %>/{,*/}*.js',
                '<%= config.dev.scripts %>/{,*/}*.js',
                '<%= config.dev.libraries %>/**/{,*/}*.js'
            ],
            tasks: ['jshint'],
            options: {
                livereload: true
            }
        },
        bower: {
            files: ['bower.json'],
            tasks: ['bowerInstall']
        },
        gruntfile: {
            files: ['Gruntfile.js']
        },

        livereload: {
            options: {
                livereload: '<%= connect.options.livereload %>'
            },
            files: [
                '<%= config.dev.root %>/{,*/}*.html'
            ]
        }
    };

    grunt.config('watch', watch);

};