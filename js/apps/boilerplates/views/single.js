define(["app", "text!apps/boilerplates/templates/single.html"], function(App, Template) {

	App.module("BoilerplatesApp.Views", function(Views, App, Backbone, Marionette, $, _) {

		Views.SingleView = Marionette.ItemView.extend({

			className: "column small-12",

			template: _.template(Template),

			events: {
				"click .js-edit": "editClicked",
				"click .js-delete": "deleteClicked",
				"click .js-single": "singleClicked",
			},

			editClicked: function(evt) {
				evt.preventDefault();
				this.trigger("boilerplates:edit", this.model.get("id"));
			},

			singleClicked: function(evt) {
				evt.preventDefault();
				// this.trigger("boilerplates:single", this.model.get("id"));
			},

			deleteClicked: function(evt) {
				evt.preventDefault();
				this.trigger("boilerplates:delete", this.model);
			},


		});

	});

});
