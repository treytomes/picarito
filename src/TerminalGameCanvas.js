import { GameCanvas } from './framework/bootstrap.js';
import { generatePalette } from './framework/radialPalette.js';
import ConsoleTile from './ConsoleTile';
import TileSet from './TileSet';
import OEM437_8 from './OEM437_8.png';

export default class TerminalGameCanvas extends GameCanvas {
	constructor(rows, columns) {
		super();

		this.tileSet = new TileSet(OEM437_8, 8, 8);

		this.rows = rows; // 28; // this.screenHeight / this.tileSet.tileHeight;
		this.columns = columns; // 32; //this.screenWidth / this.tileSet.tileWidth;

		this.screenWidth = this.columns * this.tileSet.tileWidth;
		this.screenHeight = this.rows * this.tileSet.tileHeight;

		//console.log(`rows=${this.rows}, columns=${this.columns}`);
		//console.log(`width=${this.screenWidth}, height=${this.screenHeight}`);

		this.tiles = [];
		for (let r = 0; r < this.rows; r++) {
			let row = [];
			for (let c = 0; c < this.columns; c++) {
				row.push(new ConsoleTile(0, 0, 0));
			}
			this.tiles.push(row);
		}
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
		if ((row < 0) || (row >= this.rows) || (column < 0) || (column >= this.columns)) {
			return;
		}

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

	fillRect(x, y, width, height, tileIndex, fg, bg) {
		if (x + width > this.width) {
			width = this.width - x;
		}
		if (y + height > this.height) {
			height = this.height - y;
		}

		for (let dy = 0; dy < height; dy++) {
			for (let dx = 0; dx < width; dx++) {
				this.drawTile(y + dy, x + dx, tileIndex, fg, bg);
			}
		}
	}

	clear() {
		for (let r = 0; r < this.rows; r++) {
			for (let c = 0; c < this.columns; c++) {
				this.drawTile(r, c, 0, 0, 0);
			}
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
	
    onUpdate(time) {}
}
