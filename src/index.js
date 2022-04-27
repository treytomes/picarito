import {
    GameCanvas, initialize
} from './framework/bootstrap.js';

import { MoreMath } from './framework/MoreMath.js';
import { generatePalette, getColor } from './framework/radialPalette.js';
import TileSet from './TileSet';
import ConsoleTile from './ConsoleTile';
import OEM437_8 from './OEM437_8.png';

import './style.css';

class TerminalGameCanvas extends GameCanvas {
	constructor() {
		super();

		this.tileSet = new TileSet(OEM437_8, 8, 8);

		this.rows = this.screenHeight / this.tileSet.tileHeight;
		this.columns = this.screenWidth / this.tileSet.tileWidth;

		this.tiles = [];
		for (let r = 0; r < this.rows; r++) {
			let row = [];
			for (let c = 0; c < this.columns; c++) {
				row.push(new ConsoleTile(0, getColor(333), getColor(0)));
			}
			this.tiles.push(row);
		}

		this.drawString(5, 10, 'Hello world!', getColor(550), getColor(3));
	}
    
    onInit() {
        generatePalette();
	}

	/**
     * @param {number} time Total elapsed milliseconds.
     */
	onUpdate(time) {
	}

	loadContent() {
		this.tileSet.loadContent();
	}

	drawTile(row, column, tileIndex = null, foregroundColor = null, backgroundColor = null) {
		const tile = this.tiles[row][column];
		if (tileIndex != null) {
			tile.tileIndex = tileIndex;
		}
		if (foregroundColor != null) {
			tile.foregroundColor = foregroundColor;
		}
		if (backgroundColor != null) {
			tile.backgroundColor = backgroundColor;
		}
	}

	drawString(row, column, text, foregroundColor = null, backgroundColor = null) {
		for (let n = 0; n < text.length; n++) {
			this.drawTile(row, column + n, text[n], foregroundColor, backgroundColor);
		}
	}

    /**
     * @param {number} time Total elapsed milliseconds.
     */
	onRender(time) {
		if (!this.tileSet.isLoaded) {
			return;
		}

		for (let r = 0, y = 0; r < this.rows; r++, y += this.tileSet.tileHeight) {
			for (let c = 0, x = 0; c < this.columns; c++, x += this.tileSet.tileWidth) {
				const tile = this.tiles[r][c];
				this.tileSet.draw(x, y, tile.tileIndex, tile.foregroundColor, tile.backgroundColor);
			}
		}
	}
}

function onWindowLoad() {
	initialize(new TerminalGameCanvas());
}

window.addEventListener('load', onWindowLoad, false);
