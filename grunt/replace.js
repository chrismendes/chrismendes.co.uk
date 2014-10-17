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
                    from:   'libs/requirejs/require.js',
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
        // e.g. <img src="../images/logo.png" -> <img src="https://cdn.capablue.com/images/logo.png"...
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
        },

        // Update views/news module in compiled main.js so as to retrieve news HTML content from within dist directory structure (different from dev)
        newstemplates: {
            src: ['<%= config.dist.scripts %>/main.js'],
            overwrite: true,
            replacements: [
                {
                    from:   'templates/content/main/news/',
                    to:     'html/news/'
                }
            ]
        }
    };

    grunt.config('replace', replace);

};