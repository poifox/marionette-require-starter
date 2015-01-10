define(["app", "apps/boilerplate/controller"], function(App) {

	App.module("BoilerplateApp", function(BoilerplateApp, App, Backbone, Marionette, $, _) {


		BoilerplateApp.Router = Marionette.AppRouter.extend({
			appRoutes: {
				"": "home"
			}
		});

		var API = {
			home: function() {
				BoilerplateApp.Controller.home(arguments);
			}
		};

		App.addInitializer(function() {
			new BoilerplateApp.Router({
				controller: API
			})
		});

	});

});
