import ConsoleTile from "./ConsoleTile";

export default class WorldTile extends ConsoleTile {
	constructor(tileIndex, foregroundColor, backgroundColor) {
		super(tileIndex, foregroundColor, backgroundColor);
		this.blocksMovement = false;
		this.blocksVision = false;
		this.name = '';
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
