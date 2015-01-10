define(["app"], function(App) {

	App.module("BoilerplateApp", function(BoilerplateApp, App, Backbone, Marionette, $, _) {

		BoilerplateApp.Controller = {
			home: function() {
				require(["apps/boilerplate/views/home"], function() {
					var homePage = new BoilerplateApp.Views.Home();
					App.contentRegion.show(homePage);
				});
			}
		};

		return BoilerplateApp.Controller;

	});

});
