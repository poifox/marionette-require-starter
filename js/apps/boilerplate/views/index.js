define([
	"app",
	"text!apps/boilerplate/templates/index.html",
	"text!apps/boilerplate/templates/index_item.html",
	"text!apps/boilerplate/templates/empty.html",
	"text!apps/boilerplate/templates/index_layout.html",
	"apps/boilerplate/views/panel"
	],

	function(App, IndexTemplate, ItemTemplate, EmptyTemplate, LayoutTemplate) {

		App.module("BoilerplateApp.Views", function(Views, App, Backbone, Marionette, $, _) {

			Views.IndexItemView = Marionette.ItemView.extend({

				template: _.template(ItemTemplate),

				events: {
					"click a.js-view": "viewClicked"
				},

				viewClicked: function(evt) {
					evt.preventDefault();
					this.trigger("boilerplate:view", this.model.get("id"));
				}

			});

			var NoElementsView = Marionette.ItemView.extend({
				template: _.template(EmptyTemplate),
				events: {
					"click .js-add": "addClicked"
				},
				addClicked: function(evt) {
					evt.preventDefault();
					this.trigger("boilerplate:add");
				}
			});

			Views.IndexView = Marionette.CompositeView.extend({
				template: _.template(IndexTemplate),
				childView: Views.IndexItemView,
				emptyView: NoElementsView,
				childViewContainer: "#index",
			});

			Views.IndexLayoutView = Marionette.LayoutView.extend({
				template: _.template(LayoutTemplate),
				regions: {
					panelRegion: "#panel-region",
					indexRegion: "#index-region"
				}
			});

		});

	});
