/**
 * Validate numerical range for the given number
 *
 * @param {number} number Given number
 * @param {number} min Lower end of range, inclusive
 * @param {number} max Upper end of range, inclusive
 * @return {number} The given number is within range
 */
const isValidRange = function ( number, min, max ) {
		return !isNaN( parseFloat( number ) ) &&
		number >= min &&
		number <= max;
	},
	/**
	 * Validate the given month number
	 *
	 * @param {number} month Number of the month, 1-12
	 * @return {boolean} The given number for a month is valid
	 */
	isValidMonth = function ( month ) {
		return isValidRange( month, 1, 12 );
	},
	/**
	 * Check whether the year is a leap year
	 *
	 * @param  {number} year Given year
	 * @return {boolean} Given year is a leap year
	 */
	isLeapYear = function ( year ) {
		return (
			year % 4 === 0 &&
			(
				year % 100 !== 0 ||
				year % 400 === 0
			)
		);
	};

module.exports = {
	isValidRange: isValidRange,
	isValidMonth: isValidMonth,
	isLeapYear: isLeapYear
};
