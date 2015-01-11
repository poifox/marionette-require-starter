define(["app", "apps/config/localstorage"], function(App) {

	App.module("Entities", function(Entities, App, Backbone, Marionette, $, _) {

		Entities.BoilerplateModel = Backbone.Model.extend({
			// Not necessary for persisting to server
			urlRoot: "boilerplates",
			// Uncomment if persisting to server
			// url: function() {
			// 	return "boilerplates/" + (this.id ? "/" + this.id : "");
			// },
			localStorage: new Backbone.LocalStorage("boilerplates"),
			defaults: {
				title: "",
				body: ""
			},
			validate: function() {
				var errors = {};
				if (!_.isEmpty(errors)) {
					return errors;
				}
			}
		});
		Entities.configureStorage(Entities.BoilerplateModel);



		// Boilerplate Collection holds our data
		Entities.BoilerplatesCollection = Backbone.Collection.extend({
			url: "boilerplates",
		});
		Entities.configureStorage(Entities.BoilerplatesCollection);



		var API = {

			getIndex: function() {
				var collection = new Entities.BoilerplatesCollection();
				var defer = $.Deferred();
				setTimeout(function() {
					collection.fetch({
						wait: true,
						success: function() {
							defer.resolve(collection);
						},
						error: function() {
							defer.resolve(undefined);
						}
					});
				}, 200);
				return defer.promise();
			},

			getSingle: function(boilerplateID) {
				var boilerplate = new Entities.BoilerplateModel({
					id: boilerplateID
				});
				var defer = $.Deferred();
				boilerplate.fetch({
					wait: true,
					success: function() {
						defer.resolve(boilerplate);
					},
					error: function() {
						defer.resolve(undefined);
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
