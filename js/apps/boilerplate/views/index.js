define([
	"app",
	"text!apps/boilerplate/templates/index.html",
	"text!apps/boilerplate/templates/empty.html",
	"apps/boilerplate/views/index_item",
	],

	function(App, Template, EmptyTemplate) {

		App.module("BoilerplateApp.Views", function(Views, App, Backbone, Marionette, $, _) {

			var NoElementsView = Marionette.ItemView.extend({
				template: _.template(EmptyTemplate)
			});

			Views.IndexView = Marionette.CompositeView.extend({
				template: _.template(Template),
				emptyView: NoElementsView,
				childView: Views.IndexItem,
				childViewContainer: "#index"
			});

		});

	});
