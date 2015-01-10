define(["app", "text!apps/boilerplate/templates/panel.html"], function(App, Template) {

	App.module("BoilerplateApp.Views", function(Views, App, Backbone, Marionette, $, _) {

		Views.PanelView = Marionette.ItemView.extend({

			template: _.template(Template),

			events: {
				"click .js-add": "addClicked"
			},

			addClicked: function(evt) {
				evt.preventDefault();
				this.trigger("boilerplate:add");
			}
		});

	});

});
