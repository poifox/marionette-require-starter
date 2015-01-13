define(["marionette"], function(Marionette) {

	var App = new Marionette.Application();

	App.addRegions({
		alertsRegion: "#region-alerts",
		headerRegion: "#region-header",
		footerRegion: "#region-footer",
		contentRegion: "#region-content",
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
				}
			});
	});

	App.on("app:top:alert", function(alertClass, alertMessage) {
		require(["entities/alert", "apps/common/views/alert"], function() {
			var alert = new App.Entities.AlertModel({
				alertClass: alertClass,
				alertMessage: alertMessage,
			});
			var alertView = new App.CommonApp.Views.AlertView({
				model: alert
			});
			App.alertsRegion.show(alertView);
		});
	});

	return App;

});
