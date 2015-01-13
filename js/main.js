
requirejs.config({
	baseUrl: "/js",
	paths: {
		"json2": "vendor/json/json2",
		"jquery": "vendor/jquery/dist/jquery",
		"underscore": "vendor/underscore/underscore",
		"backbone": "vendor/backbone/backbone",
		"marionette": "vendor/backbone.marionette/lib/backbone.marionette",
		"localstorage": "vendor/backbone.localstorage/backbone.localStorage",
		"text": "vendor/text/text",
		"spin": "vendor/spin.js/spin",
		"jquery.spin": "vendor/spin.js/jquery.spin",
		"backbone.syphon": "vendor/backbone.syphon/lib/amd/backbone.syphon",
		"foundation": "vendor/foundation/js/foundation",
		"markdown": "vendor/markdown/lib/markdown",
	},
	shim: {
		"underscore": {
			exports: "_"
		},
		"backbone": {
			deps: ["json2", "jquery", "underscore", "text", "markdown"],
			exports: "Backbone"
		},
		"backbone.syphon": {
			deps: ["backbone"]
		},
		"marionette": {
			deps: ["backbone"],
			exports: "Marionette"
		},
		"localstorage": {
			deps: ["backbone"]
		},
		"jquery.spin": {
			deps: ["jquery", "spin"],
			exports: "Spin"
		},
		"foundation": {
			deps: ["jquery", ""]
		},
		"markdown": {
			exports: "markdown"
		}
	}
});

require(["app", "apps/menu/menu_app", "foundation"], function(App) {
	$(document).foundation();
	App.start();
});
