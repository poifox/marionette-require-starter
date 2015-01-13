define([
	"app",
	"text!apps/common/templates/notfound.html",
	"jquery.spin"
	],

	function(App, NotFoundTemplate) {

		App.module("CommonApp.Views", function(Views, App, Backbone, Marionette) {

			// 404 error view
			Views.NotFound = Marionette.ItemView.extend({
				template: _.template(NotFoundTemplate)
			});


			Views.Spinner = Marionette.ItemView.extend({
				template: _.template('<div id="spinner" class="text-center"></div>'),
				onShow: function() {
					var opts = {
						lines: 12,            // The number of lines to draw
						length: 7,            // The length of each line
						width: 5,             // The line thickness
						radius: 10,           // The radius of the inner circle
						rotate: 0,            // Rotation offset
						corners: 1,           // Roundness (0..1)
						color: '#555',        // #rgb or #rrggbb
						direction: 1,         // 1: clockwise, -1: counterclockwise
						speed: 1,             // Rounds per second
						trail: 100,           // Afterglow percentage
						opacity: 1/4,         // Opacity of the lines
						fps: 20,              // Frames per second when using setTimeout()
						zIndex: 2e9,          // Use a high z-index by default
						className: 'spinner', // CSS class to assign to the element
						top: '50%',           // center vertically
						left: '50%',          // center horizontally
						position: 'absolute'  // element position
					};
					$("#spinner").spin(opts);
				}
			});

		});

	});
