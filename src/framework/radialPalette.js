import { loadPalette } from './bootstrap.js';
import { MoreMath } from './MoreMath';

/**
 * Generate a palette with 6 increments each of red, green, and blue.
 */
 function generatePalette() {
    const BITS = 6;
    let colors = [];
    let n = 0;
    for (let r = 0; r < BITS; r++) {
        for (let g = 0; g < BITS; g++) {
            for (let b = 0; b < BITS; b++) {
                let rr = r * 255 / (BITS - 1);
                let gg = g * 255 / (BITS - 1);
                let bb = b * 255 / (BITS - 1);

                let mid = (rr * 30 + gg * 59 + bb * 11) / 100;

                let r1 = ~~(((rr + mid * 1) / 2) * 230 / 255 + 10);
                let g1 = ~~(((gg + mid * 1) / 2) * 230 / 255 + 10);
                let b1 = ~~(((bb + mid * 1) / 2) * 230 / 255 + 10);

                colors[n++] = [ r1, g1, b1 ];
            }
        }
    }
    loadPalette(colors);
}

/**
 * Convert an RGB value into a palette index.
 * 
 * If only 1 parameter is provided, the that parameter will be split into 3 digits
 * where each digit represents the red, green, and blue components of the color.
 * 
 * Each component is a value from 0-5.
 * 
 * This function should be used along with generateRadialPalette.
 * 
 * @param {number} r A number from 0-5 for split RGB, or a 3-digit number of 0-5 for each digit for a single-value color.
 * @param {number?} g A number from 0-5, or null for a single-value color.
 * @param {number?} b A number from 0-5, or null for a single-value color.
 * @returns A palette index into the radial palette.
 */
function getColor(r, g = null, b = null) {
    if ((g == null) && (b == null)) {
        b = (r % 10);
        g = Math.floor(r / 10) % 10;
        r = Math.floor(r / 100) % 10;
        return r * 36 + g * 6 + b;
    } else {
        r = Math.floor(r);
        g = Math.floor(g);
        b = Math.floor(b);
        return r * 36 + g * 6 + b;
    }
}

/**
 * Get a color multipled by some percentage.
 * 
 * @param {number} c 
 * @param {number} percent 
 */
/*
function getShadedColor(c, percent) {
	const r = Math.floor(c / 100) % 10;
	const g = Math.floor(c / 10) % 10;
	const b = (c % 10);

	r = MoreMath.clamp(Math.floor(r * percent), 0, 5);
	g = MoreMath.clamp(Math.floor(g * percent), 0, 5);
	b = MoreMath.clamp(Math.floor(b * percent), 0, 5);

	return r * 36 + g * 6 + b;
}
*/

export { generatePalette, getColor };