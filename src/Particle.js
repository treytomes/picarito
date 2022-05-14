import ConsoleTile from './ConsoleTile.js';

export default class Particle extends ConsoleTile {
	constructor(x, y, dx, dy, speed, lifeSpan, foregroundColor, backgroundColor) {
		super('*', foregroundColor, backgroundColor);
		this.x = x;
		this.y = y;
		this.dx = dx;
		this.dy = dy;

		this.totalTime = 0;
		this.lastUpdateTime = 0;
		this.speed = speed;

		// Lifespan in milliseconds.
		this.lifeSpan = lifeSpan;
	}

	get isAlive() {
		return this.totalTime < this.lifeSpan;
	}

	get isDead() {
		return !this.isAlive;
	}

	update(time) {
		this.totalTime += time;
		if (this.totalTime - this.lastUpdateTime > this.speed) {
			this.x += this.dx;
			this.y += this.dy;
			this.lastUpdateTime = this.totalTime;
		}
	}

	/**
	 * 
	 * @param {WorldGameCanvas} world 
	 */
	draw(world, offsetX, offsetY) {
		world.drawTile(offsetY + this.y, offsetX + this.x, '*', this.foregroundColor, this.backgroundColor);
	}
}