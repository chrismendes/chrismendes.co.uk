// -------
// Project Model
// -------
define([
    'backbone' 
], function(Backbone) {

    var ProjectModel = Backbone.Model.extend({

        defaults: {
            name:           null,
            url:            null,
            description:    null,
            skills:         [],
            employer:       null,
            contract:       false,
            date:           null,
            highlight:      false
        }

    });

    return ProjectModel;

});