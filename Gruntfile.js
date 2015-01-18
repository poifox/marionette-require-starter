// Grunt tasks
module.exports = function(Grunt) {

	var config = Grunt.file.readJSON("./grunt.config.json");

	// Load config above
	Grunt.initConfig(config);

	// Load plugins
	Grunt.loadNpmTasks("grunt-contrib-sass");
	Grunt.loadNpmTasks("grunt-contrib-requirejs");

	// Register tasks
	Grunt.registerTask("devcss", ["sass:dev"]);
	Grunt.registerTask("devjs", ["requirejs:dev"]);
	Grunt.registerTask("dist", ["sass:dist", "requirejs:dist"]);

	// Default task is full build
	Grunt.registerTask("default", ["dist"]);

};
