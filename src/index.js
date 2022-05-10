import { initialize } from './framework/bootstrap.js';
import { MoreMath } from './framework/MoreMath.js';
import { getColor } from './framework/radialPalette.js';
import TerminalGameCanvas from './TerminalGameCanvas';
import WorldTile from './WorldTile';
import Keys from './Keys';
import Rectangle from './Rectangle';
import BspTree from './BspTree';
import './style.css';
import { max, random } from 'lodash';
import WorldGenerator from './WorldGenerator.js';

// TODO: https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API

const WORLD_WIDTH = 64;
const WORLD_HEIGHT = 64;

class Logger {
	log(text, color) {
		console.log(text);
	}
}
const LOGGER = new Logger();

// TODO: Particles.

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

class Room extends Rectangle {
	constructor(rect) {
		super(rect.x, rect.y, rect.width, rect.height);
	}
}

const ROOM_WIDTH_MIN = 8;
const ROOM_HEIGHT_MIN = 8;
const ROOM_WIDTH_MAX = 12;
const ROOM_HEIGHT_MAX = 12;

class DungeonWorldGenerator extends WorldGenerator {
	constructor(width, height) {
		super(width, height);
	}

	generate() {
		this.rooms = [];
		this.fillRect(0, 0, this.width, this.height, () => TileFactory.wall());

		const tree = new BspTree(0, 0, this.width, this.height, ROOM_WIDTH_MAX, ROOM_HEIGHT_MAX);
		this.bspDescend(tree);
		this.connectAllRooms();
		this.decorateRooms();
	}

	getSpawnPoint() {
		const spawnRoom = this.rooms[0];
		const x = random(spawnRoom.left + 1, spawnRoom.right - 1);
		const y = random(spawnRoom.top + 1, spawnRoom.bottom - 1);
		return { x: x, y: y };
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

	canPlaceHorizontalDoor(x, y) {
		return this.getTile(x - 1, y).blocksMovement && this.getTile(x + 1, y).blocksMovement;
	}

	canPlaceVerticalDoor(x, y) {
		return this.getTile(x, y - 1).blocksMovement && this.getTile(x, y + 1).blocksMovement;
	}

	decorateRoom(room) {
		// Walk the room permiter and place doors where a tunnel enters the room.
		for (let x = room.left + 1; x <= room.right - 1; x++) {
			if (this.getTile(x, room.top).blocksMovement) {
				this.setTile(x, room.top, TileFactory.wall());
			} else {
				if (this.canPlaceHorizontalDoor(x, room.top)) {
					this.setTile(x, room.top, TileFactory.door());
				}
			}
			if (this.getTile(x, room.bottom).blocksMovement) {
				this.setTile(x, room.bottom, TileFactory.wall());
			} else {
				if (this.canPlaceHorizontalDoor(x, room.bottom)) {
					this.setTile(x, room.bottom, TileFactory.door());
				}
			}
		}
		for (let y = room.top + 1; y <= room.bottom - 1; y++) {
			if (this.getTile(room.left, y).blocksMovement) {
				this.setTile(room.left, y, TileFactory.wall());
			} else {
				if (this.canPlaceVerticalDoor(room.left, y)) {
					this.setTile(room.left, y, TileFactory.door());
				}
			}
			if (this.getTile(room.right, y).blocksMovement) {
				this.setTile(room.right, y, TileFactory.wall());
			} else {
				if (this.canPlaceVerticalDoor(room.right, y)) {
					this.setTile(room.right, y, TileFactory.door());
				}
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
}

class ArenaWorldGenerator extends WorldGenerator {
	constructor(width, height) {
		super(width, height);
	}

	generate() {
		this.rooms = [];
		this.fillRect(1, 1, this.width - 2, this.height - 2, () => TileFactory.floor());
		this.drawRect(0, 0, this.width, this.height, () => TileFactory.wall());

		const NUM_PILLARS = random(20, 40);
		console.log(`Generating ${NUM_PILLARS} pillars.`);
		for (let n = 0; n < NUM_PILLARS; n++) {
			const x = random(1, this.width - 2);
			const y = random(1, this.height - 2);
			this.drawPillar(x, y);
		}
	}

	getSpawnPoint() {
		while (true) {
			const x = random(1, this.width - 2);
			const y = random(1, this.height - 2);
			const tile = this.getTile(x, y);
			if (!tile.blocksMovement) {
				return { x: x, y: y };
			}
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

class Particle {
	
}

class ParticleFountain {

}

class WorldGameCanvas extends TerminalGameCanvas {
	constructor() {
		super(28, 32)

		const generator = new DungeonWorldGenerator(WORLD_WIDTH, WORLD_HEIGHT);
		//const generator = new ArenaWorldGenerator(WORLD_WIDTH, WORLD_HEIGHT);
		this.worldTiles = generator.worldTiles;
		const spawnPoint = generator.getSpawnPoint();
		this.player = EntityFactory.player(spawnPoint.x, spawnPoint.y);

		this.particleFountains = [];
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

		for (let n = 0; n < this.particleFountains.length; n++) {
			this.particleFountains[n].draw(this);
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
