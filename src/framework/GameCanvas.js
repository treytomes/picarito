export default class GameCanvas {
    constructor(canvas = null) {
        this.canvas = canvas ?? document.querySelector('canvas');

        // Standard SNES resolution.
        this.screenWidth = 256;
        this.screenHeight = 224;
		this.isContentLoaded = false;
    }

    onInit() {}
	loadContent() {}

	/**
	 * @param {KeyboardEvent} e 
	 */
	onKeyDown(e) {}

	/**
	 * @param {KeyboardEvent} e 
	 */
	onKeyUp(e) {}

	/**
	 * @param {KeyboardEvent} e 
	 */
	onKeyPress(e) {}
	
	onMouseDown(x, y, buttons) {}
    onMouseUp(x, y, buttons) {}
    onMouseMove(x, y, buttons) {}
    onUpdate(time) {}
    onRender(time) {}
}
