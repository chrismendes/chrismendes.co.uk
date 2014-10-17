// Documentation: https://github.com/Ensighten/grunt-spritesmith
// Generate sprite sheets and corresponding CSS

module.exports = function(grunt) {

    var spritesmith = grunt.config('sprite') || {};

    spritesmith = {
        default: {
            src:        [ '<%= config.dev.images %>/sprites/*', '<%= config.dev.images %>/sprites/**/*' ],
            destImg:    '<%= config.dev.images %>/spritesheet.png',
            destCSS:    '<%= config.dev.styles %>/core/sprites.scss',
            cssFormat:  'scss',
            imgPath:    '../images/spritesheet.png'
        }
    };

    grunt.config('sprite', spritesmith);

};