define(["app", "text!apps/boilerplate/templates/single.html"], function(App, Template) {

	App.module("BoilerplateApp.Views", function(Views, App, Backbone, Marionette, $, _) {

		Views.SingleView = Marionette.ItemView.extend({
			template: _.template(Template)
		});

	});

});
