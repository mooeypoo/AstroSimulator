/**
 * Get the JDN (Julian Day Number) of a certain given date.
 * Note: Times must be provided in UTC.
 *
 * JDN is used for astronomical calculations.
 * See https://en.wikipedia.org/wiki/Julian_day
 *
 * The algorithm below was adapted from
 * http://aa.quae.nl/en/reken/juliaansedag.html
 *
 * @param {number} [year] Requested year (YYYY)
 * @param {number} [month] Requested month (MM)
 * @param {number} [day] Requested day of the month (DD)
 * @param {number} [hour=12] Hours for time of day in integers 0-24 UTC
 * @param {number} [minute=0] Minutes for time of day in integers 0-60 UTC
 * @return {number} The decimal number of days from January 1, 4713 BC, 0:00 UT
*/
const getJDN = function ( year, month, day, hour = 12, minute = 0 ) {
	const c0 = Math.floor( ( month - 3 ) / 12 ),
		x4 = year + c0,
		x3 = Math.floor( x4 / 100 ), // Quotient
		x2 = x4 % 100, // Remainder
		x1 = month - 12 * c0 - 3,
		jdn = Math.floor( 146097 * x3 / 4 ) +
			Math.floor( 36525 * x2 / 100 ) +
			Math.floor( ( 153 * x1 + 2 ) / 5 ) +
			day + 1721119;

	// Add time of day consideration
	let jdnTime = ( hour - 12 ) / 24 + 	minute / 1440;

	// Round time to at most 3 decimal places
	jdnTime = Math.round( jdnTime * 1000 + Number.EPSILON ) / 1000;

	return jdn + jdnTime;
};

module.exports = {
	getJDN: getJDN
};
