define(["app", "entities/boilerplate"], function(App) {

	App.module("BoilerplateApp", function(BoilerplateApp, App, Backbone, Marionette, $, _) {

		BoilerplateApp.Controller = {

			home: function() {
				require(["apps/boilerplate/views/home"], function() {
					var homePage = new BoilerplateApp.Views.HomeView();
					App.contentRegion.show(homePage);
				});
			},

			index: function() {

				require(["apps/boilerplate/views/index"], function() {
					var boilerplateIndexLayout = new BoilerplateApp.Views.IndexLayoutView();

					var fetching = App.request("boilerplate:index");
					$.when(fetching).done(function(boilerplates) {

						var boilerplatePanelView = new BoilerplateApp.Views.PanelView();
						var boilerplateIndexView = new BoilerplateApp.Views.IndexView({
							collection: boilerplates
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
				require(["apps/boilerplate/views/edit"], function() {
					var fetching = App.request("boilerplate:view");
					$.when(fetching).done(function(boilerplateModel) {
						var boilerplateEditView = new BoilerplateApp.Views.EditView({
							model: boilerplateModel
						});

						boilerplateEditView.on("form:submit", function(data) {
							var saved = boilerplateModel.save(data, {
								wait: true,
								error: function() {},
								success: function() {
									App.trigger("boilerplate:single", boilerplateModel.get("id"));
								}
							});
							if (!saved) {
								boilerplateEditView.trigger("form:data:invalid", boilerplateModel.validationError);
							}
						});

						App.contentRegion.show(boilerplateEditView);
					});
				});
			},

			add: function() {
				require(["apps/boilerplate/views/add"], function() {
					var boilerplateModel = App.request("boilerplate:new");
					var boilerplateAddView = new BoilerplateApp.Views.AddView({
						model: boilerplateModel
					});

					boilerplateAddView.on("form:submit", function(data) {
						var saved = boilerplateModel.save(data, {
							wait: true,
							error: function() {},
							success: function() {
								App.trigger("boilerplate:edit", boilerplateModel.get("id"));
							}
						});
						if (!saved) {
							boilerplateAddView.trigger("form:data:invalid", boilerplateModel.validationError);
						}
					});

					App.contentRegion.show(boilerplateAddView);
				});
			},
		};

		return App.BoilerplateApp.Controller;

	});

});
