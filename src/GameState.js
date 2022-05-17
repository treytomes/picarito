/**
 * A generic state to base all other states on.
 */
export default class GameState {
	constructor() {}
	
	/**
	 * @param {number} time Elapsed time since the last frame. 
	 */
	onUpdate(time) {}

	/**
	 * 
	 * @param {number} time Elapsed time since the last frame.
	 * @param {TerminalGameCanvas} terminal The screen to draw to.
	 */
	onRender(time, terminal) {}

	onKeyDown(e) {}

	onKeyUp(e) {}

	onMouseDown(x, y, buttons) {}

	onMouseUp(x, y, buttons) {}

	onMouseMove(x, y, buttons) {}
}
