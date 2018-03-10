/* eslint-env node, mocha */
const assert = require( 'chai' ).assert,
	calcValidation = require( '../src/modules/calculator/validation.js' );

describe( 'Numerical validations', function () {
	describe( 'Validate range', function () {
		const cases = [
			{
				number: 1,
				min: 0, max: 10,
				expected: true,
				msg: 'Integer between integer range'
			},
			{
				number: 11,
				min: 0, max: 10,
				expected: false,
				msg: 'Integer outside of integer range'
			},
			{
				number: 0.2,
				min: 0, max: 1,
				expected: true,
				msg: 'Float inside integer range'
			},
			{
				number: 1.2,
				min: 0, max: 1,
				expected: false,
				msg: 'Float outeside integer range'
			},
			{
				number: 0.02,
				min: 0, max: 0.1,
				expected: true,
				msg: 'Float inside float range'
			},
			{
				number: 0.22,
				min: 0, max: 0.1,
				expected: false,
				msg: 'Float outeside float range'
			},
			{
				number: 10,
				min: 0,
				max: 10,
				expected: true,
				msg: 'Number at the upper limit'
			},
			{
				number: 0,
				min: 0,
				max: 10,
				expected: true,
				msg: 'Number at the lower limit'
			},
			{
				number: 'abc',
				min: 1, max: 10,
				expected: false,
				msg: 'Invalid number'
			},
			{
				number: '5',
				min: 1, max: 10,
				expected: true,
				msg: 'String number inside the range'
			},
			{
				number: Infinity,
				min: -Infinity, max: Infinity,
				expected: true,
				msg: 'Infinity within range'
			},
			{
				number: Infinity,
				min: -Infinity,
				max: 0,
				expected: false,
				msg: 'Infinity outside range'
			},
			{
				number: 1e2,
				min: 0,
				max: 1000,
				expected: true,
				msg: 'Scientific notation within range'
			}
		];

		cases.forEach( ( caseData ) => {
			it( caseData.msg, () => {
				assert.equal(
					calcValidation.isValidRange(
						caseData.number,
						caseData.min,
						caseData.max
					),
					caseData.expected
				);
			} );
		} );
	} );

	describe( 'Validate month', function () {
		const cases = [
			{
				msg: 'Valid month',
				input: 1,
				expected: true
			},
			{
				msg: 'Inalid number for a month',
				input: 13,
				expected: false
			},
			{
				msg: 'Zero is not a valid month',
				input: 0,
				expected: false
			},
			{
				msg: 'Negative number is not a valid month',
				input: -2,
				expected: false
			}
		];

		cases.forEach( ( caseData ) => {
			it( caseData.msg, () => {
				assert.equal(
					calcValidation.isValidMonth(
						caseData.input
					),
					caseData.expected
				);
			} );
		} );
	} );

	describe( 'Check leap years', function () {
		const leapYears = [ 1904, 1908, 1920, 1924, 1964, 1968, 1980, 1984, 1988, 1992, 1996, 2000, 2e3, 2004, 2008, 2012, 2016, 2020, -2020, -2016 ],
			nonLeapYears = [ 1903, 1907, 1910, -1, 'NotANumber' ];

		leapYears.forEach( ( year ) => {
			it( 'Leap year: ' + year, () => {
				assert.equal(
					calcValidation.isLeapYear( year ),
					true
				);
			} );
		} );

		nonLeapYears.forEach( ( year ) => {
			it( 'Not leap year: ' + year, () => {
				assert.equal(
					calcValidation.isLeapYear( year ),
					false
				);
			} );
		} );
	} );

} );
