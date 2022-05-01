import { initialize } from './framework/bootstrap.js';
import { MoreMath } from './framework/MoreMath.js';
import { getColor } from './framework/radialPalette.js';
import TerminalGameCanvas from './TerminalGameCanvas';
import ConsoleTile from './ConsoleTile';
import Keys from './Keys';
import Rectangle from './Rectangle';
import './style.css';
import { max, random } from 'lodash';

const WORLD_WIDTH = 64;
const WORLD_HEIGHT = 64;

class Logger {
	log(text, color) {
		console.log(text);
	}
}
const LOGGER = new Logger();

// TODO: Particles.

class WorldTile extends ConsoleTile {
	constructor(tileIndex, foregroundColor, backgroundColor) {
		super(tileIndex, foregroundColor, backgroundColor);
		this.blocksMovement = false;
		this.blocksVision = false;
	}

	set blocksMovement(value) {
		this._blocksMovement = value;
	}

	get blocksMovement() {
		return this._blocksMovement;
	}

	set blocksVision(value) {
		this._blocksVision = value;
	}

	get blocksVision() {
		return this._blocksVision;
	}
}

class Entity extends WorldTile {
	constructor(tileIndex, foregroundColor, backgroundColor) {
		super(tileIndex, foregroundColor, backgroundColor);
		this.x = 0;
		this.y = 0;
		this.maxHealth = this.currentHealth = 1;
		this.name = 'Player';
	}

	get isDead() {
		return this.currentHealth <= 0;
	}

	get isAlive() {
		return !this.isDead;
	}

	heal(delta) {
		if (this.currentHealth + delta < 0) {
			delta = this.currentHealth;
		} else if (this.currentHealth + delta > this.maxHealth) {
			delta = this.maxHealth - this.currentHealth;
		}
		this.currentHealth += delta;
		LOGGER.log(`${this.name} was healed by ${delta}.`, getColor(50));
	}

	damage(delta) {
		if (this.currentHealth - delta < 0) {
			delta = this.currentHealth;
		} else if (this.currentHealth - delta > this.maxHealth) {
			delta = this.maxHealth - this.currentHealth;
		}
		this.currentHealth -= delta;
		LOGGER.log(`${this.name} was damaged by ${delta}.`, getColor(500));
	}
}

class PlayerEntity extends Entity {
	constructor(tileIndex, foregroundColor, backgroundColor) {
		super(tileIndex, foregroundColor, backgroundColor);
		this.maxHealth = this.currentHealth = 10;
		this.level = 1;
		this.experience = 0;
		this.experienceToLevel = 0;
	}
}

class TileFactory {
	static wall() {
		const tile = new WorldTile('#', getColor(420), getColor(0));
		tile.blocksMovement = true;
		tile.blocksVision = true;
		return tile;
	}

	static floor() {
		const tile = new WorldTile('.', getColor(210), getColor(0));
		tile.blocksMovement = false;
		tile.blocksVision = false;
		return tile;
	}

	static door() {
		const tile = new WorldTile(8, getColor(555), getColor(0))
		tile.blocksMovement = false;
		tile.blocksVision = true;
		return tile;
	}
}

class EntityFactory {
	static player(x, y) {
		const entity = new PlayerEntity('@', getColor(555), getColor(0));
		entity.x = x;
		entity.y = y;
		return entity;
	}
}

class WorldGenerator {
	constructor(width, height) {
		this.width = width;
		this.height = height;
		this.worldTiles = null;

		this.initialize();
		this.generate();
	}

	initialize() {
		this.worldTiles = [];
		for (let y = 0; y < this.height; y++) {
			const row = [];
			for (let x = 0; x < this.width; x++) {
				row.push(new WorldTile(0, 0, 0));
			}
			this.worldTiles.push(row);
		}
	}

	generate() {}

	drawText(x, y, text, foregroundColor, backgroundColor, blocksMovement = true) {
		for (let n = 0; n < text.length; n++) {
			this.worldTiles[y][x + n] = new WorldTile(text[n], foregroundColor, backgroundColor);
			this.worldTiles[y][x + n].blocksMovement = blocksMovement;
		}
	}

	drawRect(x, y, width, height, tileFn) {
		if (x + width > this.width) {
			width = this.width - x;
		}
		if (y + height > this.height) {
			height = this.height - y;
		}
		for (let _x = x; _x < x + width; _x++) {
			this.worldTiles[y][_x] = tileFn();
			this.worldTiles[y + height - 1][_x] = tileFn();
		}
		for (let _y = y + 1; _y < y + height - 1; _y++) {
			this.worldTiles[_y][x] = tileFn();
			this.worldTiles[_y][x + width - 1] = tileFn();
		}
	}

	fillRect(x, y, width, height, tileFn) {
		for (let _y = y; _y < y + height; _y++) {
			for (let _x = x; _x < x + width; _x++) {
				this.worldTiles[_y][_x] = tileFn();
			}
		}
	}
}

class BspTree extends Rectangle {
	constructor(x, y, width, height, minWidth, minHeight) {
		super(x, y, width, height);

		this.minWidth = minWidth;
		this.minHeight = minHeight;

		this.A = null;
		this.B = null;
		this.split();
	}

	split() {
		const SPLIT_VERTICAL = random(0, 1) === 0;
		if (SPLIT_VERTICAL) {
			if (!this.splitVertical()) {
				this.splitHorizontal();
			}
		} else {
			if (!this.splitHorizontal()) {
				this.splitVertical();
			}
		}
	}

	splitVertical() {
		const SIZE = random(this.minHeight, this.height - this.minHeight);
		if ((SIZE < this.minHeight) || (this.height - SIZE < this.minHeight)) {
			return false;
		}

		this.A = new BspTree(this.x, this.y, this.width, SIZE, this.minWidth, this.minHeight);
		this.B = new BspTree(this.x, this.y + SIZE, this.width, this.height - SIZE, this.minWidth, this.minHeight);
		return true;
	}

	splitHorizontal() {
		const SIZE = random(this.minWidth, this.width - this.minWidth);
		if ((SIZE < this.minWidth) || (this.width - SIZE < this.minWidth)) {
			return false;
		}

		this.A = new BspTree(this.x, this.y, SIZE, this.height, this.minWidth, this.minHeight);
		this.B = new BspTree(this.x + SIZE, this.y, this.width - SIZE, this.height, this.minWidth, this.minHeight);
		return true;
	}
}

class Room extends Rectangle {
	constructor(rect) {
		super(rect.x, rect.y, rect.width, rect.height);
	}
}

const ROOM_WIDTH_MIN = 8;
const ROOM_HEIGHT_MIN = 8;
const ROOM_WIDTH_MAX = 12;
const ROOM_HEIGHT_MAX = 12;

class ArenaWorldGenerator extends WorldGenerator {
	constructor(width, height) {
		super(width, height);
	}

	getTile(x, y) {
		if ((x < 0) || (x >= this.width) || (y < 0) || (y >= this.height)) {
			console.log("getTile error: ", x, y);
			return;
		}
		return this.worldTiles[y][x];
	}

	setTile(x, y, tile) {
		if ((x < 0) || (x >= this.width) || (y < 0) || (y >= this.height)) {
			console.log("getTile error: ", x, y);
			return;
		}
		this.worldTiles[y][x] = tile;
	}

	generate() {
		this.rooms = [];
		this.fillRect(0, 0, this.width, this.height, () => TileFactory.wall());

		//this.drawRect(0, 0, this.width, this.height, () => TileFactory.wall());
		//this.fillRect(1, 1, this.width - 2, this.height - 2, () => TileFactory.floor());
		//this.drawText(10, 5, 'Hello, world! :-D', getColor(550), getColor(3));

		/*
		const NUM_PILLARS = random(20, 40);
		console.log(`Generating ${NUM_PILLARS} pillars.`);
		for (let n = 0; n < NUM_PILLARS; n++) {
			const x = random(1, this.width - 2);
			const y = random(1, this.height - 2);
			this.drawPillar(x, y);
		}
		*/

		const tree = new BspTree(0, 0, this.width, this.height, ROOM_WIDTH_MAX, ROOM_HEIGHT_MAX);
		this.bspDescend(tree);
		this.connectAllRooms();
		this.decorateRooms();
	}

	/**
	 * Descend through the tree until you find the leaves, then create rooms out of those leaves.
	 * 
	 * Populates the rooms array.
	 */
	bspDescend(tree) {
		if ((tree.A === null) || (tree.B === null)) {
			if ((tree.width < ROOM_WIDTH_MIN) || (tree.height < ROOM_HEIGHT_MIN)) {
				return;
			}
			if (tree.width > ROOM_WIDTH_MAX) {
				tree.width = ROOM_WIDTH_MAX;
			}
			if (tree.height > ROOM_HEIGHT_MAX) {
				tree.height = ROOM_HEIGHT_MAX;
			}

			this.rooms.push(new Room(tree));
		} else {
			this.bspDescend(tree.A);
			this.bspDescend(tree.B);
		}
	}

	decorateRooms() {
		for (let n = 0; n < this.rooms.length; n++) {
			this.decorateRoom(this.rooms[n]);
		}
	}

	decorateRoom(room) {
		// Walk the room permiter and place doors where a tunnel enters the room.
		for (let x = room.left + 1; x <= room.right - 1; x++) {
			if (this.getTile(x, room.top).blocksMovement) {
				this.worldTiles[room.top][x] = TileFactory.wall();
			} else {
				this.worldTiles[room.top][x] = TileFactory.door();
			}
			if (this.getTile(x, room.bottom).blocksMovement) {
				this.worldTiles[room.bottom][x] = TileFactory.wall();
			} else {
				this.worldTiles[room.bottom][x] = TileFactory.door();
			}
		}
		for (let y = room.top + 1; y <= room.bottom - 1; y++) {
			if (this.getTile(room.left, y).blocksMovement) {
				this.worldTiles[y][room.left] = TileFactory.wall();
			} else {
				this.worldTiles[y][room.left] = TileFactory.door();
			}
			if (this.getTile(room.right, y).blocksMovement) {
				this.worldTiles[y][room.right] = TileFactory.wall();
			} else {
				this.worldTiles[y][room.right] = TileFactory.door();
			}
		}
		this.fillRect(room.x + 1, room.y + 1, room.width - 2, room.height - 2, () => TileFactory.floor());
	}

	connectAllRooms() {
		for (let n = 1; n < this.rooms.length; n++) {
			const previousRoom = this.rooms[n - 1];
			const thisRoom = this.rooms[n];
			this.connectRooms(previousRoom, thisRoom);
		}
	}

	connectRooms(roomA, roomB) {
		this.carveTunnel(roomA.centerX, roomA.centerY, roomB.centerX, roomB.centerY);
	}

	carveTunnel(x1, y1, x2, y2) {
		const dx = (x1 < x2) ? 1 : -1;
		const dy = (y1 < y2) ? 1 : -1;
		let x = x1;
		let y = y1;
		while (x !== x2) {
			this.worldTiles[y][x] = TileFactory.floor();
			x += dx;
		}
		if (x === 0) {
			console.log(x, y);
		}
		while (y !== y2) {
			this.setTile(x, y, TileFactory.floor());
			y += dy;
		} 
	}

	drawPillar(x, y) {
		this.worldTiles[y][x] = TileFactory.wall();
		this.worldTiles[y - 1][x] = TileFactory.wall();
		this.worldTiles[y + 1][x] = TileFactory.wall();
		this.worldTiles[y][x - 1] = TileFactory.wall();
		this.worldTiles[y][x + 1] = TileFactory.wall();
	}
}

class WorldGameCanvas extends TerminalGameCanvas {
	constructor() {
		super(28, 32)

		this.player = EntityFactory.player(20, 20);
		this.worldTiles = (new ArenaWorldGenerator(WORLD_WIDTH, WORLD_HEIGHT)).worldTiles;
	}

	drawWorld() {
		const SCREEN_START_X = 0;
		const SCREEN_START_Y = 1;
		const SCREEN_DISPLAY_WIDTH = this.columns;
		const SCREEN_DISPLAY_HEIGHT = this.rows - 1;

		let worldLeft = this.player.x - this.columns / 2;
		let worldRight = worldLeft + SCREEN_DISPLAY_WIDTH;
		let worldTop = this.player.y - this.rows / 2;
		let worldBottom = worldTop + SCREEN_DISPLAY_HEIGHT;

		const x_off = SCREEN_START_X + this.columns / 2 - this.player.x;
		const y_off = SCREEN_START_Y + this.rows / 2 - this.player.y;

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

		const healthPercent = this.player.currentHealth / this.player.maxHealth;
		const backgroundColor = getColor(Math.floor(5 * (1 - healthPercent)) * 100);
		this.drawTile(y_off + this.player.y, x_off + this.player.x, this.player.tileIndex, this.player.foregroundColor, backgroundColor);
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

	drawHud() {
		const HUD_WIDTH = this.columns;
		const HUD_HEIGHT = 1;
		const SCREEN_START_X = 0;
		const SCREEN_START_Y = 0;
		const HUD_BG_COLOR = getColor(5);
		const HUD_FG_COLOR = getColor(550);

		this.fillRect(SCREEN_START_X, SCREEN_START_Y, HUD_WIDTH, HUD_HEIGHT, 32, HUD_FG_COLOR, HUD_BG_COLOR);

		let left = SCREEN_START_X;

		const levelText = `LVL:${this.player.level}`;
		this.drawString(SCREEN_START_Y, left, levelText, HUD_FG_COLOR, HUD_BG_COLOR);
		left += levelText.length + 1;

		const experienceText = `XP:${this.player.experience}/${this.player.experienceToLevel}`;
		this.drawString(SCREEN_START_Y, left, experienceText, HUD_FG_COLOR, HUD_BG_COLOR);
		left += experienceText.length + 1;

		const healthText = `HP:${this.player.currentHealth}/${this.player.maxHealth}`;
		this.drawString(SCREEN_START_Y, left, healthText, HUD_FG_COLOR, HUD_BG_COLOR);
		left += healthText.length + 1;
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
			case Keys.KEY_F:
				this.player.damage(1);
				break;
			default:
				console.log(e.keyCode);
				break;
		}

		const tile = this.worldTiles[this.player.y + dy][this.player.x + dx];
		if (!tile.blocksMovement) {
			this.player.x += dx;
			this.player.y += dy;
		}
	}

	pixelsToWorld(x, y) {
		const SCREEN_START_X = 0;
		const SCREEN_START_Y = 1;
		const x_off = this.player.x - this.columns / 2 - SCREEN_START_X;
		const y_off = this.player.y - this.rows / 2 - SCREEN_START_Y;
		const row = y_off + Math.floor(y / this.tileSet.tileHeight);
		const column = x_off + Math.floor(x / this.tileSet.tileWidth);
		return [ row, column ];
	}

	onMouseDown(x, y, buttons) {
		const [ row, column ] = this.pixelsToWorld(x, y);
		console.log(`onMouseDown: ${x}, ${y}, ${column}, ${row}`);
	}

    onMouseUp(x, y, buttons) {
		const [ row, column ] = this.pixelsToWorld(x, y);
		console.log(`onMouseUp: ${x}, ${y}, ${column}, ${row}`);
	}

    onMouseMove(x, y, buttons) {
		const [ row, column ] = this.pixelsToWorld(x, y);
		console.log(`onMouseMove: ${x}, ${y}, ${column}, ${row}`);
	}
}

function onWindowLoad() {
	initialize(new WorldGameCanvas());
}

window.addEventListener('load', onWindowLoad, false);
