define([
	"app",
	"text!apps/static/templates/home.html"],

	function(App, HomeTemplate) {

		App.module("StaticApp.Views", function(Views, App, Backbone, Marionette) {

			Views.HomeView = Marionette.ItemView.extend({
				template: _.template(HomeTemplate)
			});

		});

		return App.StaticApp.Views.HomeView;

	});
