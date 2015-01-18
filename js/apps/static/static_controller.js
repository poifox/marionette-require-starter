define(["app"], function(App) {

	// The StaticApp just takes care of rendering static pages,
	// so there's no entities for them, or any complicated setup;
	// all these handlers do is loading the views and their templates
	// and immediately render them to the screen as soon as loaded.
	//
	// You can just copy and paste and rename variable in order to
	// get a new static page for your site, and add the route to `pages_app.js`

	App.module("StaticApp", function(StaticApp, App, Backbone, Marionette, $, _) {

		StaticApp.Controller = {

			home: function() {
				require(["apps/static/views/home"], function(HomeView) {
					var homePage = new HomeView();
					App.contentRegion.show(homePage);
				});
			},

			about: function() {
				require(["apps/static/views/about"], function(AboutView) {
					var homePage = new AboutView();
					App.contentRegion.show(homePage);
				});
			}

		};

	});

});
