export default class Rectangle {
	constructor(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}

	get left() {
		return this.x;
	}

	get right() {
		return this.x + this.width - 1;
	}

	get top() {
		return this.y;
	}

	get bottom() {
		return this.y + this.height - 1;
	}

	get centerX() {
		return Math.floor((this.left + this.right) / 2);
	}

	get centerY() {
		return Math.floor((this.top + this.bottom) / 2);
	}
}
