define(["app", "apps/menu/menu_controller"], function(App) {

	App.module("MenuApp", function(MenuApp, App, Backbone, Marionette, $, _) {

		var API = {
			startTopNav: function() {
				MenuApp.Controller.startNav();
			}
		};

		App.commands.setHandler("nav:set:active", function(name) {
			MenuApp.Controller.setActiveNav(name);
		});

		MenuApp.on("start", function() {
			API.startTopNav();
		});

	});

	return App.MenuApp;

});
