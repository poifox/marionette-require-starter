define(["app"], function(App) {

	App.module("Fixtures", function(Fixtures, App, Backbone, Marionette, $, _) {

		Fixtures.MenuItem = Backbone.Model.extend({
			defaults: {
				name: "UNDEFINED",
				url: "/",
				trigger: "boilerplate:index",
				icon: "",
			}
		});

		Fixtures.Menu = Backbone.Collection.extend({
			model: Fixtures.MenuItem
		});

		var API = {
			getMenu: function() {
				return new Fixtures.Menu([
					// {name: "Home", url: "/", trigger: "boilerplate:home"},
					{name: "Boilerplate", url: "/boilerplates", trigger: "boilerplate:index"}]);
			}
		};

		App.reqres.setHandler("fixtures:menu", function () {
			return API.getMenu();
		});

	});

	return App.Fixtures.Menu;

});
