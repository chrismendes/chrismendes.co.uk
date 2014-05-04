var App = App || {};

// -------
// Helpers
// -------

// Retrieve template html block
App.Helpers.template = function(id) {
	return _.template( $('#' + id).html() );
};