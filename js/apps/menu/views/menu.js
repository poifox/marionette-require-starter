define([
	"app",
	"text!apps/menu/templates/menu_layout.html",
	"apps/menu/views/menu_item"
	],

	function(App, LayoutTemplate) {

		App.module("MenuApp.Views", function(Views, App, Backbone, Marionette, $, _) {

			Views.MenuLayoutView = Marionette.LayoutView.extend({

				template: _.template(LayoutTemplate),

				regions: {
					leftMenuRegion: "#left-menu-region",
					rightMenuRegion: "#right-menu-region"
				},

				events: {
					"click #brand-region h1 a": "brandClicked"
				},

				brandClicked: function(evt) {
					evt.preventDefault();
					this.trigger("brand:clicked");
				}
			});

			Views.MenuView = Marionette.CollectionView.extend({

				tagName: "ul",

				childView: Views.MenuItem,

			});

		});

	});
