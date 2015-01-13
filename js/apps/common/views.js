define([
	"app",
	"text!apps/common/templates/notfound.html",
	"jquery.spin"
	],

	function(App, NotFoundTemplate) {

		App.module("Common.Views", function(Views, App, Backbone, Marionette) {

			// 404 error view
			Views.NotFound = Marionette.ItemView.extend({
				template: _.template(NotFoundTemplate)
			});


			Views.Spinner = Marionette.ItemView.extend({
				template: _.template('<div id="spinner"></div>'),
				onShow: function() {
					var opts = {
						lines: 13,
						length: 20,
						width: 10,
						radius: 30,
						corners: 1,
						rotate: 0,
						direction: 1,
						color: "#008CBA",
						speed: 1,
						trail: 60,
						shadow: false,
						hwaccel: false,
						className: "spinner",
						zIndex: 2e9,
						top: "250px",
						left: "auto",
						right: "auto",
						position: "relative"
					};
					$("#spinner").spin(opts);
				}
			});

		});

	});
