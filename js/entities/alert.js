define(["app"], function(App) {

	App.module("Entities", function(Entities, App, Backbone, Marionette) {

		Entities.AlertModel = Backbone.Model.extend({
			defaults: {
				alertClass: "error",
				alertMessage: "UNDEFINED MESSAGE, CHECK YOUR CODE"
			}
		});

	});

});
