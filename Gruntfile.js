module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        eslint: {
            options: {
                fix: false
            },
            target: ["*.js"]
        }
    });

    grunt.loadNpmTasks("grunt-eslint");
    grunt.registerTask("lint", ["eslint"]);
    grunt.registerTask("default", ["eslint"]);
};
