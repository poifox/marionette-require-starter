define([
	"app",
	"text!apps/boilerplate/templates/index_layout.html",
	"apps/boilerplate/views/index",
	"apps/boilerplate/views/panel",
	],

	function(App, Template) {

		App.module("BoilerplateApp.Views", function(Views, App, Backbone, Marionette, $, _) {

			Views.IndexLayoutView = Marionette.LayoutView.extend({
				template: _.template(Template),
				regions: {
					panelRegion: "#panel-region",
					indexRegion: "#index-region"
				}
			});
		});

	});
