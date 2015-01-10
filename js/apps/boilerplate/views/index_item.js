define(["app", "text!apps/boilerplate/templates/index_item.html"], function(App, Template) {

	App.module("BoilerplateApp.Views", function(Views, App, Backbone, Marionette, $, _) {

		Views.IndexItemView = Marionette.ItemView.extend({
			template: _.template(Template)
		});

	});

});
