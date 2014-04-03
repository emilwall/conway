module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-ts');
	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.initConfig({
		ts: {
			build: {
				src: ['tests/**/*.ts', './*.ts'],
				options: {
					target: 'es3',
					module: 'commonjs',
					sourceMap: true,
					declaration: false,
					removeComments: true
				},
			},
		},
		jasmine: {
			pivotal: {
				src: ['*.js', '!Gruntfile.js'],
				options: {
					specs: 'tests/**/*.js',
				},
			},
		},
		watch: {
			pivotal : {
				files: ['tests/**/*.ts', './*.ts'],
				tasks: ['ts:build', 'jasmine:pivotal']
			},
		},
	});

	grunt.registerTask("default", ["watch"]);
}
