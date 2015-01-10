define(["marionette"], function(Marionette) {

	var App = new Marionette.Application();

	App.addRegions({
		headerRegion: "#region-header",
		contentRegion: "#region-content",
		footerRegion: "#region-footer",
	});

	App.on("start", function() {
		require(["apps/boilerplate/app"], function() {
			if (Backbone.history) {
				Backbone.history.start({
					// pushState: true // You may not need this
				});
			}
		});
	});

	return App;

});
