define(["app", "text!templates/boilerplate/home.html"], function(App, Template) {

	App.module("BoilerplateApp.Views", function(Views, App, Backbone, Marionette, $, _) {

		Views.Home = Marionette.ItemView.extend({
			template: _.template(Template)
		});

	});

});
