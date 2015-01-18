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

		// Maybe your app has a dynamic home page
		//
		// App.on("boilerplates:home", function() {
		// 	App.navigate("/");
		// 	BoilerplatesApp.Controller.home();
		// });

		// Boilerplates index
		App.on("boilerplates:index", function() {
			App.navigate("/boilerplates");
			BoilerplatesApp.Controller.index();
		});

		// Add a new boilerplate
		App.on("boilerplates:add", function() {
			App.navigate("/boilerplates/add");
			BoilerplatesApp.Controller.add();
		});

		// GET a single boilerplate
		App.on("boilerplates:single", function(boilerplateID) {
			App.navigate("/boilerplates/view/" + boilerplateID);
			BoilerplatesApp.Controller.single(boilerplateID);
		});

		// Edit a boilerplate
		App.on("boilerplates:edit", function(boilerplateID) {
			App.navigate("/boilerplates/edit/" + boilerplateID);
			BoilerplatesApp.Controller.edit(boilerplateID);
		});

		// Register with the main App
		App.addInitializer(function() {
			new BoilerplatesApp.Router({
				controller: BoilerplatesApp.Controller
			});
		});

	});

});
