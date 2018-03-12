/* eslint-env node */
module.exports = function Gruntfile( grunt ) {
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-eslint' );
	grunt.loadNpmTasks( 'grunt-stylelint' );
	grunt.loadNpmTasks( 'grunt-mocha-test' );

	grunt.initConfig( {
		eslint: {
			code: {
				src: [
					'**/*.js',
					'!node_modules/**'
				]
			}
		},
		// Lint – Styling
		stylelint: {
			options: {
				syntax: 'less'
			},
			all: [
				'static/**/*.css',
				'!static/lib/**'
			]
		},
		mochaTest: {
			test: {
				options: {
					reporter: 'spec'
				},
				src: [ 'test/*.js' ]
			}
		}
	} );

	grunt.registerTask( 'lint', [ 'eslint', 'stylelint' ] );
	grunt.registerTask( 'test', [ 'lint', 'mochaTest' ] );
	grunt.registerTask( 'default', 'test' );
};
