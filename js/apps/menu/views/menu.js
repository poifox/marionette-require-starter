define([
	"app",
	"text!apps/menu/templates/menu.html",
	"apps/menu/views/menu_item"
	],

	function(App, Template) {

		App.module("MenuApp.Views", function(Views, App, Backbone, Marionette, $, _) {

			Views.Menu = Marionette.CompositeView.extend({

				className: "menu top-menu",

				template: _.template(Template),

				childView: Views.MenuItem,

				childViewContainer: "#menu-children",

				events: {
					"click .menu-brand": "brandClicked"
				},

				brandClicked: function(evt) {
					evt.preventDefault();
					this.trigger("brand:clicked");
				}
			});

		});

	});
