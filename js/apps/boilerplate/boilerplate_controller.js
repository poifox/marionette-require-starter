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

				App.contentRegion.show(new App.Common.Views.Spinner());

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

						// Children ItemView handlers
						boilerplateIndexView
						.on("childview:boilerplate:view", function(childView, boilerplateID) {
							// Single boilerplate
							App.trigger("boilerplate:view", boilerplateID);
						})
						.on("childview:boilerplate:edit", function(childView, boilerplateID) {
							// Edit boilerplate
							App.trigger("boilerplate:edit", boilerplateID);
						})
						.on("childview:boilerplate:delete", function(childView, boilerplateModel) {
							// Delete boilerplate
							if (confirm("The boilerplate will be deleted permanently, are you sure?")) {
								boilerplateModel.destroy({
									wait: true,
									error: function() {
										App.trigger("notice:error", "We could not delete the boilerplate.");
									},
								});
							}
						});

						// Render everything
						boilerplateIndexLayout.on("show", function() {
							boilerplateIndexLayout.panelRegion.show(boilerplatePanelView);
							boilerplateIndexLayout.indexRegion.show(boilerplateIndexView);
						});

						// Render the layout
						App.contentRegion.show(boilerplateIndexLayout);
					});
				});
			},

			single: function(boilerplateID) {

				App.contentRegion.show(new App.Common.Views.Spinner());

				require(["apps/boilerplate/views/single"], function() {
					var fetching = App.request("boilerplate:view", boilerplateID);

					$.when(fetching).done(function(boilerplateModel) {
						var boilerplateSingleView;
						if (boilerplateModel) {
							boilerplateSingleView= new BoilerplateApp.Views.SingleView({
								model: boilerplateModel
							});
						} else {
							boilerplateSingleView = new App.Common.Views.NotFound();
						}
						App.contentRegion.show(boilerplateSingleView);
					});
				});
			},

			edit: function(boilerplateID) {

				App.contentRegion.show(new App.Common.Views.Spinner());

				require(["apps/boilerplate/views/edit"], function() {
					var fetching = App.request("boilerplate:view", boilerplateID);

					$.when(fetching).done(function(boilerplateModel) {
						var boilerplateEditView;
						if (boilerplateModel) {
							boilerplateEditView = new BoilerplateApp.Views.EditView({
								model: boilerplateModel
							});

							boilerplateEditView.on("form:submit", function(data) {
								var saved = boilerplateModel.save(data, {
									wait: true,
									error: function() {},
									success: function() {
										App.trigger("boilerplate:view", boilerplateModel.get("id"));
									}
								});
								console.log(saved);
								if (!saved) {
									boilerplateEditView.trigger("form:data:invalid", boilerplateModel.validationError);
								}
							});
						} else {
							boilerplateEditView = new App.Common.Views.NotFound();
						}

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
