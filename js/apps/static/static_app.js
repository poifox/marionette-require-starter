define(["app", "apps/static/static_controller"], function(App, Controller) {

	App.module("StaticApp", function(StaticApp, App, Backbone, Marionette, $, _) {


		StaticApp.Router = Marionette.AppRouter.extend({
			appRoutes: {
				"": "home",
				"about": "about",
			}
		});

		var API = {
			home: function() {
				StaticApp.Controller.home(arguments);
			},
			about: function() {
				StaticApp.Controller.about();
			},
		};

		App.on("static:home", function() {
			App.navigate("/");
			API.home();
		});
		App.on("static:about", function() {
			App.navigate("/about");
			API.about();
		});

		App.addInitializer(function() {
			new StaticApp.Router({
				controller: API
			});
		});

	});

});
