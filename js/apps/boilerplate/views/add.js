define(["app", "apps/boilerplate/views/shared_form"], function(App, Template) {

	App.module("BoilerplateApp.Views", function(Views, App, Backbone, Marionette, $, _) {

		Views.AddView = Views.SharedFormView.extend({
			title: "New Boilerplate"
		});

	});

});
