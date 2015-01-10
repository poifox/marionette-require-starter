define(["app", "text!apps/boilerplate/templates/home.html"], function(App, Template) {

	App.module("BoilerplateApp.Views", function(Views, App, Backbone, Marionette, $, _) {

		Views.HomeView = Marionette.ItemView.extend({
			template: _.template(Template)
		});

	});

});
