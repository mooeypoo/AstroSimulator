/* eslint-env node, mocha */
const assert = require( 'chai' ).assert,
	calcJulian = require( '../src/modules/calculator/jdn.js' );

describe( 'Julian Day operations', function () {
	describe( 'Julian Day Number', function () {
		const cases = [
			{
				date: [ 2000, 1, 1 ],
				expected: 2451545,
				msg: 'Known JDN for January 1st, 2000 12:00 UTC'
			},
			{
				date: [ 2000, 1, 1, 0, 0 ],
				expected: 2451544.5,
				msg: 'Known JDN for January 1st, 2000 00:00 UTC'
			},
			{
				date: [ 1858, 11, 16 ],
				expected: 2400000,
				msg: 'Known JDN for November 16th, 1858 12:00 UTC'
			},
			{
				date: [ 1858, 11, 18, 0, 0 ],
				// A day and a half from Nov 16th at noon
				expected: 2400001.5,
				msg: 'Known JDN for November 18th, 1858 00:00 UTC'
			},
			{
				date: [ 2132, 8, 31 ],
				expected: 2500000,
				msg: 'Known JDN for August 31st, 2132 12:00 UTC'
			},
			{
				date: [ 2000, 1, 1, 0, 0 ],
				expected: 2451544.5,
				msg: 'Known JDN for January 1st, 2000 00:00 UTC'
			}
		];

		cases.forEach( ( caseData ) => {
			it( caseData.msg, () => {
				assert.equal(
					calcJulian.getJDN.apply( null, caseData.date ),
					caseData.expected
				);
			} );
		} );
	} );
} );
