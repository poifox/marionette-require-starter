define(["app"], function(App, Template) {

	App.module("MenuApp", function(MenuApp, App, Backbone, Marionette, $, _) {

		MenuApp.Controller = {
			startNav: function() {
				require([
					"apps/menu/views/menu",
					"fixtures/menu",
					],
					function() {
						// Container for complete menu
						var menuLayoutView = new MenuApp.Views.MenuLayoutView();

						// Left menu
						var leftMenuFixtures = App.request("fixtures:menu:left");
						var leftMenuView = new MenuApp.Views.MenuView({
							className: "left",
							collection: leftMenuFixtures
						});
						leftMenuView.on("childview:navigate", function(childView, trigger) {
							App.trigger(trigger);
						});

						// Here in case you wanna use a right-side menu
						// Right menu
						// var rightMenuFixtures = App.request("fixtures:menu:right");
						// var rightMenuView = new MenuApp.Views.MenuView({
						// 	className: "right",
						// 	collection: rightMenuFixtures
						// });
						// rightMenuView.on("childview:navigate", function(childView, trigger) {
						// 	App.trigger(trigger);
						// });

						menuLayoutView.on("show", function() {
							menuLayoutView.leftMenuRegion.show(leftMenuView);
							// menuLayoutView.rightMenuRegion.show(rightMenuView);
						}).on("brand:clicked", function () {
							App.trigger("boilerplate:home");
						});
						App.headerRegion.show(menuLayoutView);
					});
			}
		};

	});

	return App.MenuApp.Controller;

});
