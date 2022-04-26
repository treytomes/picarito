export default class RenderContext {
	constructor(gl, width, height) {
		this.gl = gl;
		this.width = width;
		this.height = height;

		// The image representing our screen.
		this.image = new Uint8Array(width * height);
		this.imageTexture = null;

		this.texture = this.gl.createTexture();
		this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture);
		this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.width, this.height, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, null);
		this.setTextureParameters();
	}

	/**
	 * Upload the render image data to video memory.
	 */
	createTexture() {
		this.imageTexture = this.gl.createTexture();
		this.refresh();
		this.setTextureParameters();
	}

	setTextureParameters() {
		this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.NEAREST);
		this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.NEAREST);
		this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
		this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
	}

	/**
	 * Reload the render texture in video memory from the renderImage array.
	 */
	refresh() {
		this.gl.activeTexture(this.gl.TEXTURE0);
		this.gl.bindTexture(this.gl.TEXTURE_2D, this.imageTexture);
		this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.ALPHA, this.width, this.height, 0, this.gl.ALPHA, this.gl.UNSIGNED_BYTE, this.image);
	}

	/**
	 * Get the palette index at a position.
	 * 
	 * @param {number} x 
	 * @param {number} y 
	 * @returns {number} The palette index at the given position.
	 */
	getPixel(x, y) {
		return this.image[y * this.width + x];
	}

	/**
	 * Set a pixel to a palette index at a position.
	 * 
	 * @param {number} x 
	 * @param {number} y 
	 * @param {number} color 
	 */
	setPixel(x, y, color) {
		x = Math.floor(x);
		y = Math.floor(y);
		color = Math.floor(color);
		if (color < 0) color = 0;
		if (color > 255) color = 255;

		this.image[y * this.width + x] = color;
	}

	/**
	 * Clear the image buffer to a color.
	 * 
	 * @param {number} color 
	 */
	clear(color) {
		this.image = this.image.fill(color);
	}
}
