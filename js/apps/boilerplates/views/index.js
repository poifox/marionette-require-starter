define([
	"app",
	"text!apps/boilerplates/templates/index.html",
	"text!apps/boilerplates/templates/index_item.html",
	"text!apps/boilerplates/templates/empty.html",
	"text!apps/boilerplates/templates/index_layout.html",
	"apps/boilerplates/views/panel"
	],

	function(App, IndexTemplate, ItemTemplate, EmptyTemplate, LayoutTemplate) {

		App.module("BoilerplatesApp.Views", function(Views, App, Backbone, Marionette, $, _) {

			Views.IndexItemView = Marionette.ItemView.extend({

				template: _.template(ItemTemplate),

				events: {
					"click a.js-view": "viewClicked",
					"click a.js-edit": "editClicked",
					"click a.js-delete": "deleteClicked",
				},

				viewClicked: function(evt) {
					evt.preventDefault();
					this.trigger("boilerplates:single", this.model.get("id"));
				},

				editClicked: function(evt) {
					evt.preventDefault();
					this.trigger("boilerplates:edit", this.model.get("id"));
				},

				deleteClicked: function(evt) {
					evt.preventDefault();
					this.trigger("boilerplates:delete", this.model);
				},

				close: function() {
					var self = this;
					this.$el.slideUp(250, "swing", function() {
						Marionette.ItemView.prototype.close.call(self);
					});
				}

			});

			var NoElementsView = Marionette.ItemView.extend({
				template: _.template(EmptyTemplate),
				events: {
					"click .js-add": "addClicked"
				},
				addClicked: function(evt) {
					evt.preventDefault();
					this.trigger("boilerplates:add");
				}
			});

			Views.IndexView = Marionette.CompositeView.extend({
				template: _.template(IndexTemplate),
				childView: Views.IndexItemView,
				emptyView: NoElementsView,
				childViewContainer: "#index",
			});

			Views.IndexLayoutView = Marionette.LayoutView.extend({
				className: "column small-12",
				template: _.template(LayoutTemplate),
				regions: {
					panelRegion: "#panel-region",
					indexRegion: "#index-region"
				}
			});

		});

	});
