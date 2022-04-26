import Jimp from 'jimp';

import { setPixel } from './framework/bootstrap.js';

const DEFAULT_COLORKEY = 0x000000FF;

export default class TileSet {
	constructor(filename, tileWidth, tileHeight) {
		this.filename = filename;
		this.tileWidth = tileWidth;
		this.tileHeight = tileHeight;
		this.tilesPerRow = 0;

		this.image = null;
		this.isLoaded = false;

		this.colorKey = DEFAULT_COLORKEY;
	}

	loadContent() {
		Jimp.read(this.filename).then(image => {
			this.image = image;
			this.tilesPerRow = this.image.bitmap.width / this.tileWidth;
			this.isLoaded = true;
		});
	}

	draw(x, y, tileIndex, fg, bg) {
		const src_x = Math.floor(tileIndex % this.tilesPerRow) * this.tileWidth;
		const src_y = Math.floor(tileIndex / this.tilesPerRow) * this.tileHeight;

		for (let off_y = 0; off_y < this.tileHeight; off_y++) {
			for (let off_x = 0; off_x < this.tileWidth; off_x++) {
				const c = this.image.getPixelColor(src_x + off_x, src_y + off_y);
				if (c != this.colorKey) {
					setPixel(x + off_x, y + off_y, fg);
				} else {
					setPixel(x + off_x, y + off_y, bg);
				}
			}
		}
	}
}
