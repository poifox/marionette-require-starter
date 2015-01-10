define(["app", "apps/boilerplate/views/shared_form"], function(App, Template) {

	App.module("BoilerplateApp.Views", function(Views, App, Backbone, Marionette, $, _) {

		Views.EditView = Views.SharedFormView.extend({
			initialize: function() {
				this.title = "Editing: " + this.model.get("title");
			}
		});

	});

});
