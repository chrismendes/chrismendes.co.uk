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
            date:           null,
            highlight:      false
            category:       null
        }

    });

    return ProjectModel;

});