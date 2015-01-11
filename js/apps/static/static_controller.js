define(["app", "apps/static/views/all"], function(App) {

	// The StaticApp just takes care of rendering static pages,
	// so there's no entities for them, or any complicated setup;
	// all these handlers do is loading the views and their templates
	// and immediately render them to the screen as soon as loaded.

	App.module("StaticApp", function(StaticApp, App, Backbone, Marionette, $, _) {

		StaticApp.Controller = {

			home: function() {
				var homePage = new StaticApp.Views.HomeView();
				App.contentRegion.show(homePage);
			},

			about: function() {
				var homePage = new StaticApp.Views.AboutView();
				App.contentRegion.show(homePage);
			}

		};

	});

});
