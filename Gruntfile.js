var globalConfig = {
		sass: {
			dev: {
				options: {
					"cache": false,
					"trace": true,
					"no-cache": true,
					"style": "nested"
				},
				files: {
					"dist/css/styles.css": "css/styles.scss"
				}
			},
			dist: {
				options: {
					"trace": true,
					"no-cache": true,
					"unixNewlines": true,
					"style": "compressed"
				},
				files: {
					"dist/css/styles.min.css": "css/styles.scss"
				}
			}
		}
	};

module.exports = function(Grunt) {

	// Load config above
	Grunt.initConfig(globalConfig);

	// Load plugins
	Grunt.loadNpmTasks("grunt-contrib-sass");

	// Register tasks
	Grunt.registerTask("dev", ["sass:dev"]);
	Grunt.registerTask("dist", ["sass:dev", "sass:dist"]);

	// Default task is full build
	Grunt.registerTask("default", ["dist"]);

};
