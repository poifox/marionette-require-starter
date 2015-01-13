define(["marionette"], function(Marionette) {

	var App = new Marionette.Application();

	App.addRegions({
		headerRegion: "#region-header",
		contentRegion: "#region-content",
		footerRegion: "#region-footer",
	});

	App.navigate = function(route, opts) {
		opts = opts || {};
		Backbone.history.navigate(route, opts);
	};

	App.on("start", function() {
		require([
			"apps/common/views",
			"apps/static/static_app",
			// Your sub-apps here
			"apps/boilerplates/boilerplates_app"
			],
			function() {
				if (Backbone.history) {
					Backbone.history.start({
						pushState: true // You may not need this
					});
					$(document).foundation();
				}
			});
	});

	return App;

});
