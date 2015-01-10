define(["app"], function(App, Template) {

	App.module("MenuApp", function(MenuApp, App, Backbone, Marionette, $, _) {

		MenuApp.Controller = {
			startNav: function() {
				require([
					"apps/menu/views/menu",
					"fixtures/menu",
					],
					function() {
						var menuFixtures = App.request("fixtures:menu");
						var menuView = new MenuApp.Views.Menu({
							collection: menuFixtures
						});

						menuView.on("childview:navigate", function(childView, menuModel) {
							var trigger = menuModel.get("trigger");
							App.trigger(trigger);
						});

						menuView.on("brand:clicked", function() {
							App.trigger("boilerplate:home");
						});

						App.headerRegion.show(menuView);
					});
			}
		};

	});

	return App.MenuApp.Controller;

});
