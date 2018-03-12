const utils = require( './utils.js' ),
	/**
	 * Solve the Kepler equation for the given parameters to get the object's
	 * position in space. This position is raw heliocentric space coordiates
	 *
	 * Original credit for this method goes to Matthew Watson.
	 *
	 * Calculation taken from NASA JPL Formula:
	 * - http://www.stjarnhimlen.se/comp/ppcomp.html#4
	 * - http://ssd.jpl.nasa.gov/?planet_pos
	 * - https://gist.github.com/bartolsthoorn/7913357
	 * - https://space.stackexchange.com/questions/8911/determining-orbital-position-at-a-future-point-in-time
	 *
	 * @param {Object} vars Orbital element variables
	 * @param {number[]} vars.a Semi-major axis (au and au/cy)
	 * @param {number[]} vars.e Eccentricity ( no units and no units/cy)
	 * @param {number[]} vars.I Inclination (degrees and degrees/cy)
	 * @param {number[]} vars.L Mean longitude (degrees and degrees/cy)
	 * @param {number[]} vars.longPerihelion Longitude of perihelion (degree and degrees/cy)
	 * @param {number[]} vars.longNode Longitude of the ascending node (degrees and degrees/cy)
	 * @param {number} [jd2000=0] Julian Days from J2000.0. If not given, calculated for J2000.0
	 * @param {Object} [optionalVariables] Optional variables for the calculation
	 * @return {Object} Three-dimensional position in space, values in km
	 */
	solveKepler = function ( vars, jd2000 = 0 ) {
		const om = vars.longPerihelion[ 0 ] + vars.longPerihelion[ 1 ] * jd2000,
			// bigOm = longNode[ 0 ] + longNode[ 1 ] * jd2000,
			// Elements
			a = vars.a[ 0 ] + vars.a[ 1 ] * jd2000,
			e = vars.e[ 0 ] + vars.e[ 1 ] * jd2000,
			// normalizedI = I[ 0 ] + I[ 1 ] * jd2000,
			L = vars.L[ 0 ] + vars.L[ 1 ] * jd2000,
			// Optional variables
			b = vars.b || 0,
			c = vars.c || 0,
			f = vars.f || 0,
			s = vars.s || 0;
			// Argument of perihelion
			// omega = om - bigOm;

		// Mean anomaly
		let dimensions, E,
			M = vars.M || (
				L - om +
				b * Math.pow( jd2000, 2 ) +
				c + Math.cos( f * jd2000 ) +
				s * Math.sin( f * jd2000 )
			);

		M = utils.degreesToRadians( e, M );

		// Eccentric anomaly
		E = utils.approximateEccentricAnomaly( e, M );

		// Heliocentric coordinates
		// TODO: Figure out how to adjust to a system
		// where two or more stars are the 'heliocentric'
		// coordinate center, like binary systems
		dimensions = {
			x: a * ( Math.cos( E ) - e ),
			y: a * Math.sqrt( 1 - Math.pow( e, 2 ) ) * Math.sin( E ),
			z: 0
		};

		return Object.assign( dimensions, {
			z: dimensions.y
		} );
	};

module.exports = {
	solveKepler: solveKepler
};
