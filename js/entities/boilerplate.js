define(["app", "localstorage"], function(App) {

	App.module("Entities", function(Entities, App, Backbone, Marionette, $, _) {

		Entities.BoilerplateModel = Backbone.Model.extend({
			baseUrl: "boilerplates",
			localStorage: new Backbone.LocalStorage("Boilerplates"),
			defaults: {
				title: "",
				body: ""
			},
			validate: function() {
				// TODO:
			}
		});

		// Boilerplate Collection holds our data
		Entities.BoilerplateCollection = Backbone.Collection.extend({
			baseUrl: "boilerplates",
			localStorage: new Backbone.LocalStorage("Boilerplates")
		});

		var API = {

			getIndex: function() {
				var boilerplate = new Entities.BoilerplateCollection();
				var defer = $.Deferred();
				boilerplate.fetch({
					wait: true,
					success: function(entity) {
						defer.resolve(entity);
					}
				});
				return defer.promise();
			},

			getSingle: function(boilerplateID) {
				var boilerplate = new Entities.BoilerplateModel({
					id: boilerplateID
				});
				var defer = $.Deferred();
				boilerplate.fetch({
					wait: true,
					success: function(entity) {
						defer.resolve(entity);
					}
				});
				return defer.promise();
			},

			getNew: function() {
				return new Entities.BoilerplateModel();
			},
		};


		App.reqres.setHandler("boilerplate:index", function() {
			return API.getIndex();
		});

		App.reqres.setHandler("boilerplate:view", function(boilerplateID) {
			return API.getSingle(boilerplateID);
		});

		App.reqres.setHandler("boilerplate:new", function() {
			return API.getNew();
		});

	});

});
