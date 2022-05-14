export default class ParticleFountain {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.particles = [];

		this.spawnTimer = 0;
		this.lastSpawnTime = 0;
		this.spawnRate = 1000;
	}

	get isAlive() {
		return (this.spawnRate > 0) || (this.particles.filter(x => x.isAlive).length > 0);
	}

	get isDead() {
		return !this.isAlive;
	}

	spawn() {
		this.particles.push(new Particle(this.x, this.y, 1, 0, 300, 5000, getColor(5, 5, 5), getColor(0, 0, 0)));
	}

	/**
	 * 
	 * @param {number} time Elapsed milliseconds. 
	 */
	update(time) {
		const deadParticles = [];
		this.spawnTimer += time;
		if ((this.spawnRate > 0) && this.spawnTimer - this.lastSpawnTime >= this.spawnRate) {
			this.spawn();
			this.lastSpawnTime = this.spawnTimer;
		}

		for (let n = 0; n < this.particles.length; n++) {
			const particle = this.particles[n];
			particle.update(time);
			if (particle.isDead) {
				deadParticles.push(n);
			}
		}

		for (let n = 0; n < deadParticles.length; n++) {
			this.particles.splice(deadParticles[n], 1);
		}
	}

	/**
	 * 
	 * @param {WorldGameCanvas} world 
	 */
	draw(world, offsetX, offsetY) {
		for (let n = 0; n < this.particles.length; n++) {
			this.particles[n].draw(world, offsetX, offsetY);
		}
	}
}
