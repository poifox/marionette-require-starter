define(["app", "apps/static/static_controller"], function(App, Controller) {

	App.module("StaticApp", function(StaticApp, App, Backbone, Marionette, $, _) {


		StaticApp.Router = Marionette.AppRouter.extend({
			appRoutes: {
				"": "home",
				"about": "about",
			}
		});

		App.on("static:home", function() {
			App.navigate("/");
			StaticApp.Controller.home();
		});
		App.on("static:about", function() {
			App.navigate("/about");
			StaticApp.Controller.about();
		});

		App.addInitializer(function() {
			new StaticApp.Router({
				controller: StaticApp.Controller
			});
		});

	});

});
