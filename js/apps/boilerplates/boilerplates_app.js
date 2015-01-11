define(["app", "apps/boilerplates/boilerplates_controller"], function(App, Controller) {

	App.module("BoilerplatesApp", function(BoilerplatesApp, App, Backbone, Marionette, $, _) {


		BoilerplatesApp.Router = Marionette.AppRouter.extend({
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
				BoilerplatesApp.Controller.home(arguments);
			},
			index: function() {
				BoilerplatesApp.Controller.index();
			},
			add: function() {
				BoilerplatesApp.Controller.add();
			},
			single: function(boilerplateID) {
				BoilerplatesApp.Controller.single(boilerplateID);
			},
			edit: function(boilerplateID) {
				BoilerplatesApp.Controller.edit(boilerplateID);
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
			new BoilerplatesApp.Router({
				controller: API
			});
		});

	});

});
