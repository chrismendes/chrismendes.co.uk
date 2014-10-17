// Documentation: https://github.com/gruntjs/grunt-contrib-copy
// Copy files and folders.

module.exports = function(grunt) {

    var copy = grunt.config('copy') || {};

    // Copies remaining files to places other tasks can use
    copy = {
        default: {
            files: [
                // Core root directory files, plus images
                {
                    expand: true,
                    dot:    true,
                    cwd:    '<%= config.dev.root %>',
                    dest:   '<%= config.dist.root %>',
                    src: [
                        '*.{ico,png,txt}',
                        '.htaccess',
                        'sitemap.xml',
                        'images/**/*',
                        '!images/sprites/**',
                        '*.html',
                        'fonts/{,*/}*.*',
                        'locales/*'
                    ]
                },
                // News templates (index, categories, articles)
                {
                    src:        ['<%= config.dev.templates %>/content/main/news/*.html'],
                    dest:       '<%= config.dist.templates %>/news/',
                    expand:     true,
                    flatten:    true
                },
                {
                    src:        ['<%= config.dev.templates %>/content/main/news/articles/*.html'],
                    dest:       '<%= config.dist.templates %>/news/articles/',
                    expand:     true,
                    flatten:    true
                },
                {
                    src:        ['<%= config.dev.templates %>/content/main/news/categories/*.html'],
                    dest:       '<%= config.dist.templates %>/news/categories/',
                    expand:     true,
                    flatten:    true
                }
            ]
        }
    };

    grunt.config('copy', copy);

};