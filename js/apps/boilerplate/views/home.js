define(["app", "text!apps/boilerplate/templates/home.html"], function(App, Template) {

	App.module("BoilerplateApp.Views", function(Views, App, Backbone, Marionette, $, _) {

		Views.HomeView = Marionette.ItemView.extend({

			className: "column small-12",

			template: _.template(Template)

		});

	});

});
