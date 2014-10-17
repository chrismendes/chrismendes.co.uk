// Documentation: https://github.com/yoniholmes/grunt-text-replace
// Grunt plugin to search and replace file content based on a string or regular expression pattern.

module.exports = function(grunt) {

    var replace = grunt.config('replace') || {};

    var cdnBaseUrl = 'http://d1mxiq3bn1fp00.cloudfront.net';

    replace = {

        // Update the following index.html script include for production
        // <script src="libs/requirejs/require.js" data-main="main" async></script>
        mainjs: {
            src: ['<%= config.dist.root %>/index.html'],
            overwrite: true,
            replacements: [
                // Swap require.js reference for main.js
                {
                    from:   'libraries/requirejs/require.js',
                    to:     'js/main.js'
                },
                // Remove redundant data-main attribute
                {
                    from:   ' data-main="main"',
                    to:     ''
                }
            ]
        },

        // Update src property for all images with CDN URL for production
        // e.g. <img src="../images/logo.png" -> <img src="https://cdn.cloudserver.com/images/logo.png"...
        cdn: {
            src: [
                '<%= config.dist.root %>/index.html',
                '<%= config.dist.scripts %>/*.js',
                '<%= config.dist.styles %>/*.css',
            ],
            overwrite: true,
            replacements: [
                {
                    from:   '../images',
                    to:     cdnBaseUrl
                }
            ]
        }
    };

    grunt.config('replace', replace);

};