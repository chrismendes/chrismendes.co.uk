// Documentation: https://github.com/gruntjs/grunt-contrib-watch
// Watches files for changes and runs tasks based on the changed files

module.exports = function(grunt) {

    var watch = grunt.config('watch') || {};

    watch = {
        bower: {
            files: ['bower.json'],
            tasks: ['bowerInstall']
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
        jstest: {
            files: ['test/spec/{,*/}*.js'],
            tasks: ['test:watch']
        },
        gruntfile: {
            files: ['Gruntfile.js']
        },
        less: {
            files: ['<%= config.dev.styles %>/{,*/}*.{less}'],
            tasks: ['less', 'autoprefixer']
        },
        // styles: {
        //     files: ['<%= config.dev.root %>/css/{,*/}*.css'],
        //     tasks: ['autoprefixer']
        // },
        livereload: {
            options: {
                livereload: '<%= connect.options.livereload %>'
            },
            files: [
                '<%= config.dev.root %>/{,*/}*.html',
                '.tmp/styles/{,*/}*.css',
                '<%= config.dev.images %>/{,*/}*'
            ]
        }
    };

    grunt.config('watch', watch);

};