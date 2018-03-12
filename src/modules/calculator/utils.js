const ITERATIONLIMIT = 1000,
	ERRORLIMIT = Math.pow( 10, -4 ),
	/**
	* Convert angles from degrees to radians
	*
	* @param {number} angle Angle in degrees
	* @return {number} Angle in radians
	*/
	degreesToRadians = function ( angle ) {
		return angle * ( Math.PI / 180 );
	},
	/**
	 * Approximate the eccententric anomaly by iteration
	 *
	 * @param {number} e Eccentricity
	 * @param {number} M Mean anomaly
	 * @return {number} Eccentric anomaly in radians
	 */
	approximateEccentricAnomaly = function ( e, M ) {
		const eStar = ( Math.PI / 180 ) * e;
		let dM,
			En = M + eStar + Math.sin( degreesToRadians( M ) ),
			dE = 1,
			iteration = ITERATIONLIMIT;

		while ( iteration-- && Math.abs( dE ) > ERRORLIMIT ) {
			dM = M - ( En - eStar * Math.sin( degreesToRadians( En ) ) );
			dE = dM / ( 1 - e * Math.cos( degreesToRadians( En ) ) );
			En = En + dE;
		}
		return degreesToRadians( En );
	};

module.exports = {
	degreesToRadians: degreesToRadians,
	approximateEccentricAnomaly: approximateEccentricAnomaly
};
