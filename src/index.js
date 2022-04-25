import {
    GameCanvas, clearScreen, setPixel, initialize
} from './framework/bootstrap.js';

import {default as Jimp} from 'jimp';

import { MoreMath } from './framework/MoreMath.js';
import { generatePalette, getColor } from './framework/radialPalette.js';
import OEM437_8 from './OEM437_8.png';

import './style.css';

const DROP_HEIGHT = 16;
const DROP_RADIUS = 8;
const DAMPING_FACTOR = 128; // 16;
const DROP_SPEED = 300;
const ENABLE_DROPS = false;

class WaterRipplesGameCanvas extends GameCanvas {

    constructor() {
        super();
        
        //this.screenWidth = 640;
        //this.screenHeight = 480;

        this.lastDropTime = 0;
        
        this.waves0 = new Float64Array(this.screenWidth * this.screenHeight);
        this.waves1 = new Float64Array(this.screenWidth * this.screenHeight);
        this.activeBuffer = 0;
    }

    getWaveValue(bufferIndex, x, y) {
        if (!MoreMath.isInRange(x, 0, this.screenWidth) || !MoreMath.isInRange(y, 0, this.screenHeight)) {
            return 0;
        }
    
        if (bufferIndex == 0) {
            return this.waves0[x + y * this.screenWidth];
        } else {
            return this.waves1[x + y * this.screenWidth];
        }
    }
    
    setWaveValue(bufferIndex, x, y, value) {
        if (!MoreMath.isInRange(x, 0, this.screenWidth) || !MoreMath.isInRange(y, 0, this.screenHeight)) {
            return;
        }
    
        if (bufferIndex == 0) {
            this.waves0[x + y * this.screenWidth] = value;
        } else {
            this.waves1[x + y * this.screenWidth] = value;
        }
    }
    
    putDrop(x, y, height) {
        for (let i = -DROP_RADIUS; i <= DROP_RADIUS; i++) {
            for (let j = -DROP_RADIUS; j <= DROP_RADIUS; j++) {
                let dx = x + i;
                let dy = y + j;
                if (MoreMath.isInRange(dx, 0, this.screenWidth) && MoreMath.isInRange(dy, 0, this.screenHeight)) {
                    let dist = Math.sqrt(i * i + j * j);
                    if (dist < DROP_RADIUS) {
                        let value = Math.cos(dist * Math.PI / DROP_RADIUS) * height;
                        this.setWaveValue(this.activeBuffer, dx, dy, value);
                    }
                }
            }
        }
    }
    
    onInit() {
        generatePalette();
    }
    
    onMouseDown(x, y, buttons) {
        if (buttons & 1) {
            this.putDrop(x, y, DROP_HEIGHT);
        }
    }
    
    onMouseMove(x, y, buttons) {
        if (buttons & 1) {
            this.putDrop(x, y, DROP_HEIGHT);
        }
    }
    
    /**
     * 
     * @param {number} time Total elapsed milliseconds.
     */
    onUpdate(time) {
        if (ENABLE_DROPS) {
            if (time - this.lastDropTime >= DROP_SPEED) {
                this.lastDropTime = time;
    
                let dx = Math.floor(Math.random() * this.screenWidth);
                let dy = Math.floor(Math.random() * this.screenHeight);
                this.putDrop(dx, dy, DROP_HEIGHT);
            }
        }
    
        let newBuffer = (this.activeBuffer == 0) ? 1 : 0;
    
        for (let x = 0; x < this.screenWidth; x++) {
            for (let y = 0; y < this.screenHeight; y++) {
                this.setWaveValue(newBuffer, x, y, ((
                    this.getWaveValue(this.activeBuffer, x - 1, y - 1) +
                    this.getWaveValue(this.activeBuffer, x, y - 1) +
                    this.getWaveValue(this.activeBuffer, x + 1, y - 1) +
                    this.getWaveValue(this.activeBuffer, x - 1, y) +
                    this.getWaveValue(this.activeBuffer, x + 1, y) +
                    this.getWaveValue(this.activeBuffer, x - 1, y + 1) +
                    this.getWaveValue(this.activeBuffer, x, y + 1) +
                    this.getWaveValue(this.activeBuffer, x + 1, y + 1)
                ) / 4) - this.getWaveValue(newBuffer, x, y));
    
                // Damping.
                let value = this.getWaveValue(newBuffer, x, y)
                if (value < 0.001) {
                    // Handle the floating-point errors.
                    value = 0;
                    this.setWaveValue(newBuffer, x, y, value);
                } else if (value != 0) {
                    value = Math.round(value - value / DAMPING_FACTOR);
                    this.setWaveValue(newBuffer, x, y, value);
                }
            }
        }
        this.activeBuffer = newBuffer;
    }
    
    /**
     * 
     * @param {number} time Total elapsed milliseconds.
     */
    onRender(time) {
        clearScreen(0);
    
        for (let x = 0; x < this.screenWidth; x++) {
            for (let y = 0; y < this.screenHeight; y++) {
                // This gives us the effect of water breaking the light.
                let xOffset = (this.getWaveValue(this.activeBuffer, x - 1, y) - this.getWaveValue(this.activeBuffer, x + 1, y)) / 8;
                let yOffset = (this.getWaveValue(this.activeBuffer, x, y - 1) - this.getWaveValue(this.activeBuffer, x, y + 1)) / 8;
    
                if ((xOffset != 0) || (yOffset != 0)) {
                    // Generate alpha.
                    let alpha = 200 - xOffset;
                    if (alpha < 0) alpha = 0;
                    if (alpha > 255) alpha = 254;
    
                    let c = (alpha / 255) * 5;
                    setPixel(x + xOffset, y + yOffset, getColor(c, c, c));
                }
            }
        }
    }
}

class TerminalGameCanvas extends GameCanvas {
	constructor() {
		super();

		this.tileImage = null;
		this.isReady = false;
	}
    
    onInit() {
        generatePalette();
	}

	/**
     * @param {number} time Total elapsed milliseconds.
     */
	onUpdate(time) {
	}

	loadContent() {
		Jimp.read(OEM437_8).then(image => {
			this.tileImage = image;
			this.isReady = true;
		});
	}

    /**
     * @param {number} time Total elapsed milliseconds.
     */
	onRender(time) {
        clearScreen(0);

		if (!this.isReady) {
			return;
		}

		for (let y = 0; y < 128; y++) {
			for (let x = 0; x < 128; x++) {
				const c = this.tileImage.getPixelColor(x, y);
				if (c != 0x000000FF) {
					setPixel(x, y, getColor(5, 5, 5));
				}
			}
		}

		setPixel(10, 10, getColor(5, 0, 0));
		setPixel(11, 10, getColor(0, 5, 0));
		setPixel(12, 10, getColor(5, 5, 0));
		setPixel(13, 10, getColor(0, 0, 5));
		setPixel(14, 10, getColor(5, 0, 5));
		setPixel(15, 10, getColor(0, 5, 5));
		setPixel(16, 10, getColor(5, 5, 5));
	}
}

function onWindowLoad() {
    //initialize(new WaterRipplesGameCanvas());
	initialize(new TerminalGameCanvas());
}

window.addEventListener('load', onWindowLoad, false);
