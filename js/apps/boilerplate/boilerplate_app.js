define(["app", "apps/boilerplate/boilerplate_controller"], function(App, Controller) {

	App.module("BoilerplateApp", function(BoilerplateApp, App, Backbone, Marionette, $, _) {


		BoilerplateApp.Router = Marionette.AppRouter.extend({
			appRoutes: {
				// "": "home",
				"boilerplates": "index",
				"boilerplates/add": "add",
				"boilerplates/view/:id": "single",
				"boilerplates/edit/:id": "edit",
			}
		});

		var API = {
			home: function() {
				BoilerplateApp.Controller.home(arguments);
			},
			index: function() {
				BoilerplateApp.Controller.index();
			},
			add: function() {
				BoilerplateApp.Controller.add();
			},
			single: function(boilerplateID) {
				BoilerplateApp.Controller.single(boilerplateID);
			},
			edit: function(boilerplateID) {
				BoilerplateApp.Controller.edit(boilerplateID);
			},
		};

		App.on("boilerplate:home", function() {
			App.navigate("/");
			API.home();
		});
		App.on("boilerplate:index", function() {
			App.navigate("/boilerplates");
			API.index();
		});
		App.on("boilerplate:add", function() {
			App.navigate("/boilerplates/add");
			API.add();
		});
		App.on("boilerplate:view", function(boilerplateID) {
			App.navigate("/boilerplates/view/" + boilerplateID);
			API.single(boilerplateID);
		});
		App.on("boilerplate:edit", function(boilerplateID) {
			App.navigate("/boilerplates/edit/" + boilerplateID);
			API.edit(boilerplateID);
		});

		App.addInitializer(function() {
			new BoilerplateApp.Router({
				controller: API
			});
		});

	});

});
