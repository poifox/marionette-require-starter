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

		Fixtures.MenuCollection = Backbone.Collection.extend({
			model: Fixtures.MenuItem
		});

		var API = {

			getLeftMenu: function() {
				return new Fixtures.MenuCollection([
					// {name: "Home", url: "/", trigger: "boilerplate:home"},
					{name: "Boilerplates", url: "/boilerplates", trigger: "boilerplate:index"},
					{name: "About", url: "/about", trigger: "static:about"}
				]);
			},

			getRightMenu: function() {
				return new Fixtures.MenuCollection([
					// {name: "Home", url: "/", trigger: "boilerplate:home"},
					{name: "Right", url: "/", trigger: "boilerplate:home"}]);
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
