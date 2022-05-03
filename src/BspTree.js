import Rectangle from './Rectangle';
import { random } from 'lodash';

export default class BspTree extends Rectangle {
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
