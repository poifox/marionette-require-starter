define(["app", "apps/menu/menu_controller"], function(App, Controller) {

	App.module("MenuApp", function(MenuApp, App, Backbone, Marionette, $, _) {

		var API = {
			startTopNav: function() {
				Controller.startNav();
			}
		};

		App.commands.setHandler("nav:set:active", function(name) {
			Controller.setActiveNav(name);
		});

		MenuApp.on("start", function() {
			API.startTopNav();
		});

	});

	return App.MenuApp;

});
