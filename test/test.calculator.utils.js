/* eslint-env node, mocha */
const assert = require( 'chai' ).assert,
	calcUtils = require( '../src/modules/calculator/utils.js' );

describe( 'Utility functions', function () {
	describe( 'Degrees to radians', function () {
		const cases = [
			{ angle: 0, expected: 0 },
			{ angle: 30, expected: Math.PI / 6 },
			{ angle: 45, expected: Math.PI / 4 },
			{ angle: 60, expected: Math.PI / 3 },
			{ angle: 90, expected: Math.PI / 2 },
			{ angle: 120, expected: 2 * Math.PI / 3 },
			{ angle: 135, expected: 3 * Math.PI / 4 },
			{ angle: 150, expected: 5 * Math.PI / 6 },
			{ angle: 180, expected: Math.PI },
			{ angle: 270, expected: 3 * Math.PI / 2 },
			{ angle: 360, expected: 2 * Math.PI }
		];

		cases.forEach( ( caseData ) => {
			it( caseData.angle + '° = ' + caseData.expected + ' rad', () => {
				assert.equal(
					calcUtils.degreesToRadians( caseData.angle ),
					caseData.expected
				);
			} );
		} );
	} );
} );
