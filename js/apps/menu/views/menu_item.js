define([
	"app",
	"text!apps/menu/templates/menu_item.html"
	],

	function(App, Template) {

		App.module("MenuApp.Views", function(Views, App, Backbone, Marionette, $, _) {

			Views.MenuItem = Marionette.ItemView.extend({

				tagName: "li",

				className: "menu-item",

				template: _.template(Template),

				events: {
					"click a": "linkClicked"
				},

				linkClicked: function(evt) {
					evt.preventDefault();
					this.trigger("navigate", this.model.get("trigger"));
				}
			});

		});

	});
