// -------
// Projects Collection
// -------
define([
    'backbone',
    'models/project'
], function(Backbone, ProjectModel) {

    'use strict';

    var ProjectsCollection = Backbone.Collection.extend({

        model: ProjectModel

    });

    return ProjectsCollection;

});