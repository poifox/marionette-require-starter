// Grunt tasks
module.exports = function(Grunt) {

	var config = Grunt.file.readJSON("./grunt.config.json");

	// Load config above
	Grunt.initConfig(config);

	// Load plugins
	Grunt.loadNpmTasks("grunt-contrib-sass");

	// Register tasks
	Grunt.registerTask("dev", ["sass:dev"]);
	Grunt.registerTask("dist", ["sass:dev", "sass:dist"]);

	// Default task is full build
	Grunt.registerTask("default", ["dist"]);

};
