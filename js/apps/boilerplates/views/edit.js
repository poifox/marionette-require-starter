define(["app", "apps/boilerplates/views/shared_form"], function(App, Template) {

	App.module("BoilerplatesApp.Views", function(Views, App, Backbone, Marionette, $, _) {

		Views.EditView = Views.SharedFormView.extend({

			className: "column small-12",

			initialize: function() {
				this.title = "Editing: " + this.model.get("title");
			}

		});

	});

});
