define([
	"app",
	"text!apps/common/templates/alert.html"
	],

	function(App, Template) {

		App.module("CommonApp.Views", function(Views, App, Backbone, Marionette) {

			Views.AlertView = Marionette.ItemView.extend({
				className: "column small-12",
				template: _.template(Template),
				onRender: function() {
					var self = this;
					var milis = self.model.get("alertMessage").length * 100;
					setTimeout(function() {
						self.$el.fadeOut(function() {
							self.destroy();
						});
					}, milis);
				}
			});

		});

	});
