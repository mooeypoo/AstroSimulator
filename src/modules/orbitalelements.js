/**
 * Orbital elements for the solar system
 * Sources:
 * - http://www.stjarnhimlen.se/comp/ppcomp.html#4
 *
 * @type {Object}
 * Variables take the following information:
 * {
 *   a Semi-major axis (au and au/cy)
 *   e Eccentricity ( no units and no units/cy)
 *   I Inclination (degrees and degrees/cy)
 *   L Mean longitude (degrees and degrees/cy)
 *   longPeri: Longitude of perihelion
 *    (degree and degrees/cy)
 *   longNode: Longitude of the ascending node
 *    (degrees and degrees/cy)
 * }
 */
module.exports = {
	mercury: {
		orbiting: 'sun',
		vars: {
			r: 2440,
			a: [ 0.38709927, 0.00000037 ],
			e: [ 0.20563593, 0.00001906 ],
			I: [ 7.00497902, -0.00594749 ],
			L: [ 252.25032350, 149472.67411175 ],
			longPerihelion: [ 77.45779628, 0.16047689 ],
			longNode: [ 48.33076593, -0.12534081 ]
		}
	},
	venus: {
		orbiting: 'sun',
		vars: {
			r: 6052,
			a: [ 0.72333566, 0.00000390 ],
			e: [ 0.00677672, -0.00004107 ],
			I: [ 3.39467605, -0.00078890 ],
			L: [ 181.97909950, 58517.81538729 ],
			longPerihelion: [ 131.60246718, 0.00268329 ],
			longNode: [ 76.67984255, -0.27769418 ]
		}
	},
	earth: {
		orbiting: 'sun',
		vars: {
			r: 6378,
			a: [ 1.00000261, 0.00000562 ],
			e: [ 0.01671123, -0.00004392 ],
			I: [ -0.00001531, -0.01294668 ],
			L: [ 100.46457166, 35999.37244981 ],
			longPerihelion: [ 102.93768193, 0.32327364 ],
			longNode: [ 0, 0 ]
		}
	},
	moon: {
		oribiting: 'earth',
		vars: {
			a: [ 0.028709927, 0 ],
			e: [ 0.020563593, 0 ],
			I: [ 1.00497902, 0 ],
			L: [ 52.25032350, 459472.67411175 ],
			longPerihelion: [ 77.45779628, 0.16047689 ],
			longNode: [ 48.33076593, -0.12534081 ]
		}
	},
	mars: {
		orbiting: 'sun',
		vars: {
			r: 3397,
			a: [ 1.52371243, 0.00000097 ],
			e: [ 0.09336511, 0.00009149 ],
			I: [ 1.85181869, -0.00724757 ],
			L: [ -4.56813164, 19140.29934243 ],
			longPerihelion: [ -23.91744784, 0.45223625 ],
			longNode: [ 49.71320984, -0.26852431 ]
		}
	},
	jupiter: {
		orbiting: 'sun',
		vars: {
			r: 71492,
			a: [ 5.20248019, -0.00002864 ],
			e: [ 0.04853590, 0.00018026 ],
			I: [ 1.29861416, -0.00322699 ],
			L: [ 34.33479152, 3034.90371757 ],
			longPerihelion: [ 14.27495244, 0.18199196 ],
			longNode: [ 100.29282654, 0.13024619 ],
			b: -0.00012452,
			c: 0.06064060,
			s: -0.35635438,
			f: 38.35125000
		}
	},
	saturn: {
		oribiting: 'sun',
		vars: {
			r: 60268,
			a: [ 9.54149883, -0.00003065 ],
			e: [ 0.05550825, -0.00032044 ],
			I: [ 2.49424102, 0.00451969 ],
			L: [ 50.07571329, 1222.11494724 ],
			longPerihelion: [ 92.86136063, 0.54179478 ],
			longNode: [ 113.63998702, -0.25015002 ],
			b: 0.00025899,
			c: -0.13434469,
			s: 0.87320147,
			f: 38.35125000
		}
	},
	uranus: {
		orbiting: 'sun',
		vars: {
			r: 25559,
			a: [ 19.18797948, -0.00020455 ],
			e: [ 0.04685740, -0.00001550 ],
			I: [ 0.77298127, -0.00180155 ],
			L: [ 314.20276625, 428.49512595 ],
			longPerihelion: [ 172.43404441, 0.09266985 ],
			longNode: [ 73.96250215, 0.05739699 ],
			b: 0.00058331,
			c: -0.97731848,
			s: 0.17689245,
			f: 7.67025000
		}
	},
	neptune: {
		orbiting: 'sun',
		vars: {
			r: 24766,
			a: [ 30.06952752, 0.00006447 ],
			e: [ 0.00895439, 0.00000818 ],
			I: [ 1.77005520, 0.00022400 ],
			L: [ 304.22289287, 218.46515314 ],
			longPerihelion: [ 46.68158724, 0.01009938 ],
			longNode: [ 131.78635853, -0.00606302 ],
			b: -0.00041348,
			c: 0.68346318,
			s: -0.10162547,
			f: 7.67025000
		}
	}
};
