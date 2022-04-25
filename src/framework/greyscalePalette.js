import { loadPalette, PALETTE_SIZE } from './bootstrap.js';

/**
 * Generate a palette with 6 increments each of red, green, and blue.
 */
 function generatePalette() {
    let colors = [];
    for (let v = 0; v < PALETTE_SIZE; v++) {
        colors[v] = [ v, v, v ];
    }
    loadPalette(colors);
}

export { generatePalette };