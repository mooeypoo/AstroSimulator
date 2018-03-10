/**
 * Get the JDN (Julian Day Number) of a certain given date.
 * Note: Times must be provided in UTC.
 *
 * JDN is used for astronomical calculations.
 * See https://en.wikipedia.org/wiki/Julian_day
 *
 * The algorithm below was adjusted from the algorithm
 * in the page:
 * https://quasar.as.utexas.edu/BillInfo/JulianDateCalc.html
 *
 * @param {number} [year] Requested year (YYYY)
 * @param {number} [month] Requested month (MM)
 * @param {number} [day] Requested day of the month (DD)
 * @param {number} [hour=12] Hours for time of day in integers 0-24 UTC
 * @param {number} [minute=0] Minutes for time of day in integers 0-60 UTC
 * @return {number} The decimal number of days from January 1, 4713 BC, 0:00 UT
*/
const getJDN = function ( year, month, day, hour = 12, minute = 0 ) {
	let A, B, C, E, F, julianDay, julianDayTime;

	if ( month < 3 ) {
		year--;
		month += 12;
	}
	// Gregorian calendar corrections
	A = Math.floor( year / 100 );
	B = Math.floor( A / 4 );
	C = 2 - A + B;
	E = Math.floor( 365.25 * ( year + 4716 ) );
	F = Math.floor( 30.6001 * ( month + 1 ) );
	julianDay = C + day + E + F - 1524;
	julianDayTime = ( hour - 12 ) / 24 + 	minute / 1440;

	return julianDay + julianDayTime;
	// let jdn = (
	// 	// Days
	// 	( ( 1461 * ( year + 4800 + ( month - 14 ) / 12 ) ) / 4 ) +
	// 	( ( 367 * ( month - 2 - 12 * ( ( month - 14 ) / 12 ) ) ) / 12 ) -
	// 	( ( 3 * ( ( year + 4900 + ( month - 14 ) / 12 ) / 100 ) ) / 4 ) +
	// 	day - 32075 // +
	// 	// // Hours and minutes
	// 	// ( ( hour - 12 ) / 24 ) +
	// 	// ( minute / 1440 )
	// );
// return jdn;
	// return Math.round( jdn * 100 ) / 100;
};

module.exports = {
	getJDN: getJDN
};
