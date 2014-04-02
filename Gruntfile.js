module.exports = function (grunt) {
    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    grunt.initConfig({
	    ts: {
	        // A specific target
	        build: {
	            // The source TypeScript files, http://gruntjs.com/configuring-tasks#files
	            src: ["tests/**/*.ts", "./*.ts"],
	            // If specified, the generate JavaScript files are placed here. Only works if out is not specified
	            outDir: '.',
	            // If specified, watches this directory for changes, and re-runs the current target
	            watch: '.',                     
	            // Use to override the default options, http://gruntjs.com/configuring-tasks#options
	            options: {     
	                // 'es3' (default) | 'es5'
	                target: 'es3',
	                // 'amd' (default) | 'commonjs'    
	                module: 'commonjs',
	                // true (default) | false
	                sourceMap: true,
	                // true | false (default)
	                declaration: false,
	                // true (default) | false
	                removeComments: true
	            },
	        },
	    },
	    jasmine: {
			pivotal: {
				src: '*.js',
				options: {
					specs: 'tests/**/*.js'
				}
			}
		},
	});

	grunt.registerTask("default", ["ts:build"]);
}
