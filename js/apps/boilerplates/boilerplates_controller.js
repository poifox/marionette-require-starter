define(["app", "entities/boilerplate"], function(App) {

	App.module("BoilerplatesApp", function(BoilerplatesApp, App, Backbone, Marionette, $, _) {

		var deletionConfirmMessage = "The boilerplate will be deleted permanently, are you sure?";

		var deletionErrorMessage = "We could not delete the boilerplate.";

		BoilerplatesApp.Controller = {

			home: function() {
				require(["apps/boilerplates/views/home"], function() {
					var homePage = new BoilerplatesApp.Views.HomeView();
					App.contentRegion.show(homePage);
				});
			},

			index: function() {

				App.contentRegion.show(new App.Common.Views.Spinner());

				require(["apps/boilerplates/views/index"], function() {

					var boilerplateIndexLayout = new BoilerplatesApp.Views.IndexLayoutView();

					var fetching = App.request("boilerplates:index");
					$.when(fetching).done(function(boilerplates) {

						var boilerplatePanelView = new BoilerplatesApp.Views.PanelView();
						var boilerplateIndexView = new BoilerplatesApp.Views.IndexView({
							collection: boilerplates
						});

						// Linking to new Boilerplate view
						boilerplatePanelView.on("boilerplates:add", function() {
							App.trigger("boilerplates:add");
						});

						// Children ItemView handlers
						boilerplateIndexView
						.on("childview:boilerplates:single", function(childView, boilerplateID) {
							// Single boilerplate
							App.trigger("boilerplates:single", boilerplateID);
						})
						.on("childview:boilerplates:edit", function(childView, boilerplateID) {
							// Edit boilerplate
							App.trigger("boilerplates:edit", boilerplateID);
						})
						.on("childview:boilerplates:delete", function(childView, boilerplateModel) {
							// Delete boilerplate
							if (confirm(deletionConfirmMessage)) {
								boilerplateModel.destroy({
									wait: true,
									error: function() {
										App.trigger("notice:error", deletionErrorMessage);
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

				require(["apps/boilerplates/views/single"], function() {
					var fetching = App.request("boilerplates:single", boilerplateID);

					$.when(fetching).done(function(boilerplateModel) {
						var boilerplateSingleView;
						if (boilerplateModel) {
							boilerplateSingleView= new BoilerplatesApp.Views.SingleView({
								model: boilerplateModel
							});

							boilerplateSingleView.on("boilerplates:single", function(boilerplateID) {
								App.trigger("boilerplates:single", boilerplateID);
							});
							boilerplateSingleView.on("boilerplates:edit", function(boilerplateID) {
								App.trigger("boilerplates:edit", boilerplateID);
							});
							boilerplateSingleView.on("boilerplates:delete", function(boilerplateModel) {
								if (confirm(deletionConfirmMessage)) {
									boilerplateModel.destroy({
										wait: true,
										error: function() {
											App.trigger("notice:error", deletionErrorMessage);
										},
										success: function() {
											App.trigger("boilerplates:index");
										}
									});
								}
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

				require(["apps/boilerplates/views/edit"], function() {
					var fetching = App.request("boilerplates:single", boilerplateID);

					$.when(fetching).done(function(boilerplateModel) {
						var boilerplateEditView;
						if (boilerplateModel) {
							boilerplateEditView = new BoilerplatesApp.Views.EditView({
								model: boilerplateModel
							});

							boilerplateEditView.on("form:submit", function(data) {
								var saved = boilerplateModel.save(data, {
									wait: true,
									error: function() {},
									success: function() {
										App.trigger("boilerplates:single", boilerplateModel.get("id"));
									}
								});
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
				require(["apps/boilerplates/views/add"], function() {
					var boilerplateModel = App.request("boilerplates:new");
					var boilerplateAddView = new BoilerplatesApp.Views.AddView({
						model: boilerplateModel
					});

					boilerplateAddView.on("form:submit", function(data) {
						var saved = boilerplateModel.save(data, {
							wait: true,
							error: function() {},
							success: function() {
								App.trigger("boilerplates:edit", boilerplateModel.get("id"));
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

		return App.BoilerplatesApp.Controller;

	});

});
