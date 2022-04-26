export default class PaletteContext {
	constructor(gl, size = PALETTE_SIZE) {
		this.gl = gl;
		this.size = size;

		// The 256-color screen palette.
		this.palette = new Uint8Array(this.size * 4);

		this.texture = this.gl.createTexture();
		this.gl.activeTexture(this.gl.TEXTURE1);
		this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture);
		this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
		this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
		this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.NEAREST);
		this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.NEAREST);
		this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.size, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, this.palette);
	}

	/**
	 * Reload the palette texture in video memory from the renderImage array.
	 */
	refresh() {
		this.gl.activeTexture(this.gl.TEXTURE0);
		this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture);
		this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.size, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, this.palette);	
	}

	load(colors) {
		for (let index = 0; index < colors.length; index++) {
			let c = colors[index];
			let r = c[0];
			let g = c[1];
			let b = c[2];
			let a = (c.length > 3) ? c[3] : 255;
	
			this.palette[index * 4 + 0] = r;
			this.palette[index * 4 + 1] = g;
			this.palette[index * 4 + 2] = b;
			this.palette[index * 4 + 3] = a;
		}
		this.refresh();
	}

	set(index, r, g, b, a = 255) {
		this.palette[index * 4 + 0] = r;
		this.palette[index * 4 + 1] = g;
		this.palette[index * 4 + 2] = b;
		this.palette[index * 4 + 3] = a;
		this.refresh();
	}
}
