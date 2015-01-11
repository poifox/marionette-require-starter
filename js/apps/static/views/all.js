define([
	"app",
	"text!apps/static/templates/home.html",
	"text!apps/static/templates/about.html"
	],

	function(App, HomeTemplate, AboutTemplate) {

		App.module("StaticApp.Views", function(Views, App, Backbone, Marionette) {

			Views.HomeView = Marionette.ItemView.extend({
				template: _.template(HomeTemplate)
			});

			Views.AboutView = Marionette.ItemView.extend({
				template: _.template(AboutTemplate)
			});

		});

	});
