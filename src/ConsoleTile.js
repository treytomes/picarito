export default class ConsoleTile {
	constructor(tileIndex, foregroundColor, backgroundColor) {
		this.tileIndex = tileIndex;
		this.foregroundColor = foregroundColor;
		this.backgroundColor = backgroundColor;
	}

	set tileIndex(value) {
		if (!isNumber(value)) {
			this._tileIndex = value.charCodeAt(0);
		} else {
			this._tileIndex = Math.floor(value);
		}
	}

	get tileIndex() {
		return this._tileIndex;
	}
}