define(["app", "text!apps/boilerplates/templates/single.html"], function(App, Template) {

	App.module("BoilerplatesApp.Views", function(Views, App, Backbone, Marionette, $, _) {

		Views.SingleView = Marionette.ItemView.extend({

			className: "column small-12",

			template: _.template(Template),

		});

	});

});
