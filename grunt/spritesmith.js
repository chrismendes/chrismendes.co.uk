// Documentation: https://github.com/Ensighten/grunt-spritesmith
// Generate sprite sheets and corresponding CSS

module.exports = function(grunt) {

    var spritesmith = grunt.config('sprite') || {};

    spritesmith = {

        home: {
            src:            [
                            '<%= config.dev.images %>/home/*.png',
                            ],
            destImg:        '<%= config.dev.images %>/spritesheet-home.png',
            destCSS:        '<%= config.dev.styles %>/core/sprites/home.less',
            cssFormat:      'less',
            imgPath:        '../images/spritesheet-home.png'
        },
        core: {
            src:            [
                            '<%= config.dev.images %>/icons/*.png',
                            ],
            destImg:        '<%= config.dev.images %>/spritesheet-core.png',
            destCSS:        '<%= config.dev.styles %>/core/sprites/core.less',
            cssFormat:      'css',
            imgPath:        '../images/spritesheet-core.png',
            cssOpts:        {
                                cssClass: function (item) {
                                    return '.sprite-' + item.name;
                                }
                            }
        },
        logos: {
            src:            [
                            '<%= config.dev.images %>/logos/*.jpg',
                            ],
            destImg:        '<%= config.dev.images %>/spritesheet-logos.jpg',
            destCSS:        '<%= config.dev.styles %>/core/sprites/logos.less',
            cssFormat:      'css',
            imgPath:        '../images/spritesheet-logos.jpg',
            cssOpts:        {
                                cssClass: function (item) {
                                    return '.sprite-' + item.name;
                                }
                            }
        },
        tech: {
            src:            [
                            '<%= config.dev.images %>/tech/*.jpg',
                            '<%= config.dev.images %>/tech/*.png',
                            ],
            destImg:        '<%= config.dev.images %>/spritesheet-tech.png',
            destCSS:        '<%= config.dev.styles %>/core/sprites/tech.less',
            cssFormat:      'css',
            imgPath:        '../images/spritesheet-tech.png',
            cssOpts:        {
                                cssClass: function (item) {
                                    return '.sprite-' + item.name;
                                }
                            }
        },
        general: {
            src:            [
                            '<%= config.dev.images %>/skills/*.png',
                            '<%= config.dev.images %>/people/*.jpg'
                            ],
            destImg:        '<%= config.dev.images %>/spritesheet-general.png',
            destCSS:        '<%= config.dev.styles %>/core/sprites/general.less',
            cssFormat:      'css',
            imgPath:        '../images/spritesheet-general.png',
            cssOpts:        {
                                cssClass: function (item) {
                                    return '.sprite-' + item.name;
                                }
                            }
        }

    };

    grunt.config('sprite', spritesmith);

};