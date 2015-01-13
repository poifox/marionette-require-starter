define(["app"], function(App) {

	App.module("Fixtures", function(Fixtures, App, Backbone, Marionette, $, _) {

		Fixtures.MenuItem = Backbone.Model.extend({
			defaults: {
				name: "UNDEFINED",
				url: "/",
				trigger: "boilerplates:index",
				icon: "",
			}
		});

		Fixtures.MenuCollection = Backbone.Collection.extend({
			model: Fixtures.MenuItem
		});

		var API = {

			getLeftMenu: function() {
				return new Fixtures.MenuCollection([
					// {name: "Home", url: "/", trigger: "boilerplates:home"},
					{name: "Boilerplates", url: "/boilerplates", trigger: "boilerplates:index"},
					{name: "About", url: "/about", trigger: "static:about"}
				]);
			},

			getRightMenu: function() {
				return new Fixtures.MenuCollection([
					// {name: "Home", url: "/", trigger: "boilerplates:home"},
					{name: "Right", url: "/", trigger: "boilerplates:home"}]);
			}

		};

		App.reqres.setHandler("fixtures:menu:left", function () {
			return API.getLeftMenu();
		});

		App.reqres.setHandler("fixtures:menu:right", function () {
			return API.getRightMenu();
		});

	});

});
