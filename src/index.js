import { initialize } from './framework/bootstrap.js';
import { MoreMath } from './framework/MoreMath.js';
import { getColor } from './framework/radialPalette.js';
import TerminalGameCanvas from './TerminalGameCanvas';
import ConsoleTile from './ConsoleTile';
import Keys from './Keys';

import './style.css';

const WORLD_WIDTH = 64;
const WORLD_HEIGHT = 64;

class WorldTile extends ConsoleTile {
	constructor(tileIndex, foregroundColor, backgroundColor) {
		super(tileIndex, foregroundColor, backgroundColor);
		this.blocksMovement = false;
	}
}

class TileFactory {
	static wall() {
		const tile = new WorldTile('#', getColor(420), getColor(0));
		tile.blocksMovement = true;
		return tile;
	}

	static floor() {
		const tile = new WorldTile('.', getColor(210), getColor(0));
		tile.blocksMovement = false;
		return tile;
	}
}

class WorldGameCanvas extends TerminalGameCanvas {
	constructor() {
		super(32, 32 + 8); // 28, 32)
		// TODO: Extend width to 40 for HUD?

		this.playerX = 20;
		this.playerY = 20;
		this.worldTiles = null;

		this.initializeWorld();
		this.generateWorld();
	}

	initializeWorld() {
		this.worldTiles = [];
		for (let y = 0; y < WORLD_HEIGHT; y++) {
			const row = [];
			for (let x = 0; x < WORLD_WIDTH; x++) {
				row.push(new WorldTile(0, 0, 0));
			}
			this.worldTiles.push(row);
		}
	}

	generateWorld() {
		for (let x = 0; x < WORLD_WIDTH; x++) {
			this.worldTiles[0][x] = TileFactory.wall();
			this.worldTiles[WORLD_HEIGHT - 1][x] = TileFactory.wall();
		}
		for (let y = 1; y < WORLD_HEIGHT - 1; y++) {
			this.worldTiles[y][0] = TileFactory.wall();
			this.worldTiles[y][WORLD_WIDTH - 1] = TileFactory.wall();
		}

		for (let y = 1; y < WORLD_HEIGHT - 1; y++) {
			for (let x = 1; x < WORLD_WIDTH - 1; x++) {
				this.worldTiles[y][x] = TileFactory.floor();
			}
		}

		const text = 'Hello world!';
		const textX = 10;
		const textY = 5;
		for (let n = 0; n < text.length; n++) {
			this.worldTiles[textY][textX + n] = new WorldTile(text[n], getColor(550), getColor(3));
			this.worldTiles[textY][textX + n].blocksMovement = true;
		}
	}

	drawWorld() {
		const SCREEN_START_X = 0;
		const SCREEN_START_Y = 0;
		const SCREEN_DISPLAY_WIDTH = 32;
		const SCREEN_DISPLAY_HEIGHT = 32;

		let worldLeft = this.playerX - this.columns / 2;
		let worldRight = worldLeft + SCREEN_DISPLAY_WIDTH;
		let worldTop = this.playerY - this.rows / 2;
		let worldBottom = worldTop + SCREEN_DISPLAY_HEIGHT;

		const x_off = SCREEN_START_X + this.columns / 2 - this.playerX;
		const y_off = SCREEN_START_Y + this.rows / 2 - this.playerY;

		if (worldLeft < 0) {
			worldLeft = 0;
		}
		if (worldRight > WORLD_WIDTH) {
			worldRight = WORLD_WIDTH;
		}
		if (worldTop < 0) {
			worldTop = 0;
		}
		if (worldBottom > WORLD_HEIGHT) {
			worldBottom = WORLD_HEIGHT;
		}

		for (let y = worldTop; y < worldBottom; y++) {
			for (let x = worldLeft; x < worldRight; x++) {
				const tile = this.worldTiles[y][x];
				this.drawTile(y_off + y, x_off + x, tile.tileIndex, tile.foregroundColor, tile.backgroundColor);
			}
		}

		this.drawTile(y_off + this.playerY, x_off + this.playerX, '@', getColor(555), getColor(5));
	}

	fillRect(x, y, width, height, tileIndex, fg, bg) {
		for (let dy = 0; dy < height; dy++) {
			for (let dx = 0; dx < width; dx++) {
				this.drawTile(y + dy, x + dx, tileIndex, fg, bg);
			}
		}
	}

	drawHud() {
		const HUD_WIDTH = 8;
		const HUD_HEIGHT = this.rows;
		const SCREEN_START_X = this.columns - HUD_WIDTH;
		const SCREEN_START_Y = 0;

		this.fillRect(SCREEN_START_X, SCREEN_START_Y, HUD_WIDTH, HUD_HEIGHT, 32, getColor(555), getColor(5));
	}

	onRender(time) {
		this.clear();
		this.drawWorld();
		this.drawHud();

		super.onRender(time);
	}

	onKeyDown(e) {
		let dx = 0;
		let dy = 0;
		switch (e.keyCode) {
			case Keys.KEY_W:
				dy--;
				break;
			case Keys.KEY_S:
				dy++;
				break;
			case Keys.KEY_A:
				dx--;
				break;
			case Keys.KEY_D:
				dx++;
				break;
		}
		//console.log(e.keyCode);

		const tile = this.worldTiles[this.playerY + dy][this.playerX + dx];
		if (!tile.blocksMovement) {
			this.playerX += dx;
			this.playerY += dy;
		}
	}

	onMouseDown(x, y, buttons) {
		const x_off = this.playerX - this.columns / 2;
		const y_off = this.playerY - this.rows / 2;
		const row = y_off + Math.floor(y / this.tileSet.tileHeight);
		const column = x_off + Math.floor(x / this.tileSet.tileWidth);
		console.log(`onMouseDown: ${x}, ${y}, ${column}, ${row}`);
	}

    onMouseUp(x, y, buttons) {
		const x_off = this.playerX - this.columns / 2;
		const y_off = this.playerY - this.rows / 2;
		const row = y_off + Math.floor(y / this.tileSet.tileHeight);
		const column = x_off + Math.floor(x / this.tileSet.tileWidth);
		console.log(`onMouseUp: ${x}, ${y}, ${column}, ${row}`);
	}

    onMouseMove(x, y, buttons) {
		const x_off = this.playerX - this.columns / 2;
		const y_off = this.playerY - this.rows / 2;
		const row = y_off + Math.floor(y / this.tileSet.tileHeight);
		const column = x_off + Math.floor(x / this.tileSet.tileWidth);
		console.log(`onMouseMove: ${x}, ${y}, ${column}, ${row}`);
	}
}

function onWindowLoad() {
	initialize(new WorldGameCanvas());
}

window.addEventListener('load', onWindowLoad, false);
