// Documentation: https://github.com/andyshora/grunt-yslow
// Test web page performance using the YSlow library invoked by a grunt task

module.exports = function(grunt) {

    var yslow = grunt.config('yslow') || {};

    yslow = {
        options: {
            thresholds: {
                weight:     180,    // The maximum page weight allowed (kb)
                speed:      1000,   // The maximum load time of the page allowed (ms)
                score:      80,     // The minimum YSlow performance score (out of 100) required
                requests:   15      // The maximum number of requests the page is allowed to send on load
            }
        },
        pages: {
            files: [{ src: 'http://localhost:9001' }]
        }
    };

    grunt.config('yslow', yslow);

};