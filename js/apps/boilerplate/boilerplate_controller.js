define(["app", "entities/boilerplate"], function(App) {

	App.module("BoilerplateApp", function(BoilerplateApp, App, Backbone, Marionette, $, _) {

		BoilerplateApp.Controller = {

			home: function() {
				console.log("home view");
				require(["apps/boilerplate/views/home"], function() {
					var homePage = new BoilerplateApp.Views.HomeView();
					App.contentRegion.show(homePage);
				});
			},

			index: function() {
				console.log("index view");

				require(["apps/boilerplate/views/index_layout"], function() {
					var boilerplateIndexLayout = new BoilerplateApp.Views.IndexLayoutView();

					var fetching = App.request("boilerplate:index");
					$.when(fetching).done(function(boilerplateCollection) {
						var boilerplatePanelView = new BoilerplateApp.Views.PanelView();
						var boilerplateIndexView = new BoilerplateApp.Views.IndexView({
							collection: boilerplateCollection
						});

						// Linking to new Boilerplate view
						boilerplatePanelView.on("boilerplate:add", function() {
							App.trigger("boilerplate:add");
						});

						// Linking to single Boilerplate page
						boilerplateIndexView.on("childview:boilerplate:view", function(childView, boilerplateID) {
							App.trigger("boilerplate:view", boilerplateID);
						});

						boilerplateIndexLayout.on("show", function() {
							boilerplateIndexLayout.panelRegion.show(boilerplatePanelView);
							boilerplateIndexLayout.indexRegion.show(boilerplateIndexView);
						});

						App.contentRegion.show(boilerplateIndexLayout);
					});
				});
			},

			single: function(boilerplateID) {
				console.log("single view");
				require(["apps/boilerplate/views/single"], function() {
					var fetching = App.request("boilerplate:view");
					$.when(fetching).done(function(boilerplateModel) {
						var boilerplateSingleView = new BoilerplateApp.Views.SingleView({
							model: boilerplateModel
						});
						App.contentRegion.show(boilerplateSingleView);
					});
				});
			},

			edit: function(boilerplateID) {
				console.log("edit view");
				require(["apps/boilerplate/views/edit"], function() {
					var fetching = App.request("boilerplate:view");
					$.when(fetching).done(function(boilerplateModel) {
						var boilerplateEditView = new BoilerplateApp.Views.EditView({
							model: boilerplateModel
						});
						App.contentRegion.show(boilerplateEditView);
					});
				});
			},

			add: function() {
				console.log("add view");
				require(["apps/boilerplate/views/add"], function() {
					var boilerplateModel = App.request("boilerplate:new");
					var boilerplateAddView = new BoilerplateApp.Views.AddView({
						model: boilerplateModel
					});
					App.contentRegion.show(boilerplateAddView);
				});
			},
		};

		return App.BoilerplateApp.Controller;

	});

});
