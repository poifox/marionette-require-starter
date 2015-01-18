define([
	"app",
	"text!apps/static/templates/about.html"],

	function(App, AboutTemplate) {

		App.module("StaticApp.Views", function(Views, App, Backbone, Marionette) {

			Views.AboutView = Marionette.ItemView.extend({
				template: _.template(AboutTemplate)
			});

		});

		return App.StaticApp.Views.AboutView;

	});
