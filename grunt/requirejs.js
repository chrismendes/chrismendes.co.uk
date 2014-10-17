// Documentation: https://github.com/gruntjs/grunt-contrib-requirejs
// Optimize RequireJS projects using r.js

module.exports = function(grunt) {

    var requirejs = grunt.config('requirejs') || {};

    // Release build - r.js optimisation to bundle all modules into main.js module.
    requirejs = {
        compile: {
            options: {
                baseUrl:                    '<%= config.dev.scripts %>',
                out:                        '<%= config.dist.scripts %>/main.js',
                mainConfigFile:             '<%= config.dev.scripts %>/main.js',
                findNestedDependencies:     true,
                name:                       'main',
                include:                    ['../libraries/almond/almond', 'main'],
                stubModules:                ['text'],
                insertRequire:              ['main'],
                preserveLicenseComments:    false,
                // optimize: 'none'
            }
        }
    };

    grunt.config('requirejs', requirejs);

};