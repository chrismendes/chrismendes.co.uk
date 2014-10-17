// -------
// App Start
// -------
define(['require', '../config'], function (require) {

    'use strict';

    require(['routers/router'], function(AppRouter) {
        /* jshint nonew: false */
        new AppRouter();
    });

});