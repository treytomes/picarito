/**
 * Use this to start up the framework.
 */

// TODO: Remove needed functions from this: https://github.com/greggman/twgl.js

// This was helpful: https://webgl2fundamentals.org/webgl/lessons/webgl-qna-how-to-get-pixelize-effect-in-webgl-.html

/*
TODO:
http://marcgg.com/blog/2016/11/21/chiptune-sequencer-multiplayer/
http://marcgg.com/blog/2016/11/01/javascript-audio/
https://webglfundamentals.org/
*/

import * as twgl from 'twgl.js';

// These are used to setup the quad buffer for rendering the image data to the framebuffer.
const QUAD_ARRAYS = {
    position: {
        numComponents: 2,
        data: [
            0, 0,
            1, 0,
            0, 1,
            0, 1,
            1, 0,
            1, 1,
        ],
    },
    texcoord: [
        0, 0,
        1, 0,
        0, 1,
        0, 1,
        1, 0,
        1, 1,
    ],
};

const PALETTE_SIZE = 256;

// The 256-color screen palette.
const PALETTE = new Uint8Array(PALETTE_SIZE * 4);

// Setup a unit quad composed of 2 triangles for rendering the framebuffer to the canvas.
const FRAMEBUFFER_POSITIONS = [
    1,  1,
    -1,  1,
    -1, -1,

    1,  1,
    -1, -1,
    1, -1,
];

class GameCanvas {
    constructor(canvas = null) {
        this.canvas = canvas ?? document.querySelector('canvas');

        // Standard SNES resolution.
        this.screenWidth = 256;
        this.screenHeight = 224;
		this.isContentLoaded = false;
    }

    onInit() {}
	loadContent() {}
    onMouseDown(x, y, buttons) {}
    onMouseUp(x, y, buttons) {}
    onMouseMove(x, y, buttons) {}
    onUpdate(time) {}
    onRender(time) {}
}

let _instance = null;
let gl = null;
let renderImage = null;  // The image representing our scren.
let canvasShader = null;
let renderShader = null;
let quadBufferInfo = null;
let renderTexture = null;
let depthBuffer = null;
let fb = null;
let paletteTex = null;
let imageTex = null;

function hsv2rgb(hue, saturation, brightness) {
    if (hue < 0) hue = 0;
    if (saturation < 0) saturation = 0;
    if (brightness < 0) brightness = 0;

    if (hue > 1) hue = 1;
    if (saturation > 1) saturation = 1;
    if (brightness > 1) brightness = 1;

    if (0 == saturation) {
        brightness = Math.floor(brightness * 255);
        return [brightness, brightness, brightness];
    }

    let fMax = 0;
    let fMid = 0;
    let fMin = 0;

    if (0.5 < brightness) {
        fMax = brightness - (brightness * saturation) + saturation;
        fMin = brightness + (brightness * saturation) - saturation;
    } else {
        fMax = brightness + (brightness * saturation);
        fMin = brightness - (brightness * saturation);
    }

    let iSextant = Math.floor(hue / 60);
    if (300 <= hue) {
        hue -= 360;
    }
    hue /= 60;
    hue -= 2 * Math.floor(((iSextant + 1) % 6) / 2.0);
    if (0 == (iSextant % 2)) {
        fMid = hue * (fMax - fMin) + fMin;
    } else {
        fMid = fMin - hue * (fMax - fMin);
    }

    switch (iSextant) {
        case 1:
            return [fMid, fMax, fMin];
        case 2:
            return [fMin, fMax, fMid];
        case 3:
            return [fMin, fMid, fMax];
        case 4:
            return [fMid, fMin, fMax];
        case 5:
            return [fMax, fMin, fMid];
        default:
            return [fMax, fMid, fMin];
    }
}

/**
 * Generate the quad buffer for rendering the image data to the framebuffer.
 */
function initializeQuadBuffer() {
    // calls gl.createBuffer, gl.bindBuffer, gl.bufferData for each array
    quadBufferInfo = twgl.createBufferInfoFromArrays(gl, QUAD_ARRAYS);
}

/**
 * Make a pixel texture to match the requested screen size.
 */
function initializeRenderTexture() {
    renderImage = new Uint8Array(_instance.screenWidth * _instance.screenHeight);
    renderTexture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, renderTexture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, _instance.screenWidth, _instance.screenHeight, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
}

/**
 * Create a depth buffer to use with the render texture.
 * 
 * @param {*} screenWidth 
 * @param {*} screenHeight 
 */
function initializeDepthBuffer() {
    depthBuffer = gl.createRenderbuffer();
    gl.bindRenderbuffer(gl.RENDERBUFFER, depthBuffer);
    gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_STENCIL, _instance.screenWidth, _instance.screenHeight);
}

/**
 * Create the framebuffer.  Attach the texture and depth buffer to the framebuffer. 
 */
function initializeFramebuffer() {
    fb = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, fb);

    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, renderTexture, 0);
    gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_STENCIL_ATTACHMENT, gl.RENDERBUFFER, depthBuffer);
}

function loadRenderShader() {
    const VERTEX_SHADER = `
        attribute vec4 a_position;
        varying vec2 v_texcoord;
        void main() {
            gl_Position = a_position;
            
            // assuming a unit quad for position we
            // can just use that for texcoords. Flip Y though so we get the top at 0
            v_texcoord = a_position.xy * vec2(0.5, -0.5) + 0.5;
        }    
    `;
    const FRAGMENT_SHADER = `
        precision mediump float;
        varying vec2 v_texcoord;
        uniform sampler2D u_image;
        uniform sampler2D u_palette;
        uniform float u_time;

        vec2 distort(vec2 pos) {
            float distortion = 0.1;
            pos -= vec2(0.5, 0.5);
            pos *= vec2(pow(length(pos), distortion));
            pos += vec2(0.5, 0.5);
            return pos;
        }

        void main() {
            vec2 pos = v_texcoord;

            // Barrel Distortion
            //pos = distort(pos);

            float index = texture2D(u_image, pos).a * 255.0;

            vec4 color = texture2D(u_palette, vec2((index + 0.5) / 256.0, 0.5));

            // Scanlines
            /*
            color -= abs(sin(pos.y * 100.0 + u_time * 5.0)) * 0.08; // (1)
            color -= abs(sin(pos.y * 300.0 - u_time * 10.0)) * 0.05; // (2)
            color.a = 1.0;
            */
            
            if (pos.x > 1.0 || pos.x < 0.0 || pos.y > 1.0 || pos.y < 0.0) {
                gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0); // black
            } else {
                gl_FragColor = color; // vec4(color, 1.0).rgba;
            }
        }
    `;

    renderShader = twgl.createProgramInfo(gl, [VERTEX_SHADER, FRAGMENT_SHADER]);

    gl.useProgram(renderShader.program);
    let imageLoc = gl.getUniformLocation(renderShader.program, "u_image");
    let paletteLoc = gl.getUniformLocation(renderShader.program, "u_palette");

    // Tell it to use texture units 0 and 1 for the image and palette.
    gl.uniform1i(imageLoc, 0);
    gl.uniform1i(paletteLoc, 1);
}

function loadCanvasShader() {
    const VERTEX_SHADER = `
        attribute vec4 position;
        attribute vec2 texcoord;

        uniform mat4 u_matrix;

        varying vec2 v_texcoord;

        void main() {
            gl_Position = u_matrix * position;
            v_texcoord = texcoord;
            
        }
    `;
    const FRAGMENT_SHADER = `
        precision mediump float;
        varying vec2 v_texcoord;
        uniform sampler2D u_texture;
        uniform float u_time;

        void main() {
            vec2 pos = v_texcoord;
            vec4 color = texture2D(u_texture, v_texcoord);

            // Scanlines
            color -= abs(sin(pos.y * 100.0 + u_time * 5.0)) * 0.08; // (1)
            color -= abs(sin(pos.y * 300.0 - u_time * 10.0)) * 0.05; // (2)
            color.a = 1.0;

            gl_FragColor = color;
        }
    `;

    // Compiles shaders, links program, looks up locations.
    canvasShader = twgl.createProgramInfo(gl, [VERTEX_SHADER, FRAGMENT_SHADER]);
}

/**
 * Upload the palette data to video memory.
 */
 function initializePalette() {
    paletteTex = gl.createTexture();
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, paletteTex);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, PALETTE_SIZE, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, PALETTE);
}

/**
 * Reload the palette texture in video memory from the renderImage array.
 */
 function refreshPaletteImage() {
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, paletteTex);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, PALETTE_SIZE, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, PALETTE);
}

function setPalette(index, r, g, b, a = 255) {
    PALETTE[index * 4 + 0] = r;
    PALETTE[index * 4 + 1] = g;
    PALETTE[index * 4 + 2] = b;
    PALETTE[index * 4 + 3] = a;
    refreshPaletteImage();
}

function loadPalette(colors) {
    for (let index = 0; index < colors.length; index++) {
        let c = colors[index];
        let r = c[0];
        let g = c[1];
        let b = c[2];
        let a = (c.length > 3) ? c[3] : 255;

        PALETTE[index * 4 + 0] = r;
        PALETTE[index * 4 + 1] = g;
        PALETTE[index * 4 + 2] = b;
        PALETTE[index * 4 + 3] = a;
    }
    refreshPaletteImage();
}

/**
 * Upload the render image data to video memory.
 */
 function initializeRenderImage() {
    imageTex = gl.createTexture();
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, imageTex);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.ALPHA, _instance.screenWidth, _instance.screenHeight, 0, gl.ALPHA, gl.UNSIGNED_BYTE, renderImage);
}

/**
 * Get the palette index at a position.
 * 
 * @param {number} x 
 * @param {number} y 
 * @returns {number} The palette index at the given position.
 */
 function getPixel(x, y) {
    return renderImage[y * _instance.screenWidth + x];
}

/**
 * Set a pixel to a palette index at a position.
 * 
 * @param {number} x 
 * @param {number} y 
 * @param {number} color 
 */
function setPixel(x, y, color) {
    x = Math.floor(x);
    y = Math.floor(y);
    color = Math.floor(color);
    if (color < 0) color = 0;
    if (color > 255) color = 255;

    renderImage[y * _instance.screenWidth + x] = color;
}

/**
 * Clear the image buffer to a color.
 * 
 * @param {number} color 
 */
function clearScreen(color) {
    renderImage = renderImage.fill(color);
}

/**
 * Reload the render texture in video memory from the renderImage array.
 */
 function refreshRenderImage() {
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, imageTex);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.ALPHA, _instance.screenWidth, _instance.screenHeight, 0, gl.ALPHA, gl.UNSIGNED_BYTE, renderImage);
}

/**
 * Draw the image data to the frame buffer.
 */
function refreshFrameBuffer() {
    let vertBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(FRAMEBUFFER_POSITIONS), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
    gl.drawArrays(gl.TRIANGLES, 0, FRAMEBUFFER_POSITIONS.length / 2);
}

/**
 * Render the framebuffer to the canvas.
 */
function presentFrameBuffer(time) {
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

    const displayWidth = gl.canvas.clientWidth;
    const displayHeight = gl.canvas.clientHeight;
    let drawWidth = 0;
    let drawHeight = 0;
    if (displayWidth > displayHeight) {
        // Most of the time the monitor will be horizontal.
        drawHeight = displayHeight;
        drawWidth = _instance.screenWidth * drawHeight / _instance.screenHeight;
    } else {
        // Sometimes the monitor will be vertical.
        drawWidth = displayWidth;
        drawHeight = _instance.screenHeight * drawWidth / _instance.screenWidth;
    }
    const m = twgl.m4.ortho(0, gl.canvas.clientWidth, 0, gl.canvas.clientHeight, -1, 1);
    twgl.m4.translate(m, [
        (displayWidth - drawWidth) / 2, 
        (displayHeight - drawHeight) / 2,
        0
    ], m);
    twgl.m4.scale(m, [drawWidth, drawHeight, 1], m);
    
    gl.useProgram(canvasShader.program);
    // calls gl.bindBuffer, gl.enableVertexAttribArray, gl.vertexAttribPointer
    twgl.setBuffersAndAttributes(gl, canvasShader, quadBufferInfo);
    // calls gl.uniformXXX, gl.activeTexture, gl.bindTexture
    twgl.setUniforms(canvasShader, {
        u_matrix: m,
        u_texture: renderTexture,
        u_time: time * 0.0001
    });
    // calls gl.drawArrays or gl.drawElements
    twgl.drawBufferInfo(gl, quadBufferInfo);
}

/**
 * Prepare the screen for rendering.
 * 
 * @param {number} time How much time has passed, in milliseconds, since the start.
 */
function beginRender(time) {
    twgl.resizeCanvasToDisplaySize(gl.canvas);
    // this makes WebGL render to the texture and depthBuffer
    // all draw calls will render there instead of the canvas
    // until we bind something else.
    gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
    gl.viewport(0, 0, _instance.screenWidth, _instance.screenHeight);
    
    gl.useProgram(renderShader.program);
    let timeLoc = gl.getUniformLocation(renderShader.program, "u_time");
    gl.uniform1f(timeLoc, time * 0.001);
}

/**
 * Present the completed image data to the screen.
 * 
 * @param {number} time How much time has passed, in milliseconds, since the start.
 */
function endRender(time) {
    refreshRenderImage();
    refreshFrameBuffer();
    presentFrameBuffer(time);
}

/**
 * Convert canvas coordinates into virtual screen coordinates.
 * 
 * @param {number} x 
 * @param {number} y 
 * @returns An object with the converted x and y properties.
 */
function convertPosition(x, y) {
    const rect = _instance.canvas.getBoundingClientRect();

    const displayWidth = _instance.canvas.clientWidth;
    const displayHeight = _instance.canvas.clientHeight;
    let drawWidth = 0;
    let drawHeight = 0;
    if (displayWidth > displayHeight) {
        // Most of the time the monitor will be horizontal.
        drawHeight = displayHeight;
        drawWidth = _instance.screenWidth * drawHeight / _instance.screenHeight;
    } else {
        // Sometimes the monitor will be vertical.
        drawWidth = displayWidth;
        drawHeight = _instance.screenHeight * drawWidth / _instance.screenWidth;
    }

    rect.x += (displayWidth - drawWidth) / 2;
    rect.y += (displayHeight - drawHeight) / 2;
    rect.width = drawWidth;
    rect.height = drawHeight;

    const newX = Math.floor((x - rect.left) / rect.width * _instance.screenWidth);
    const newY = Math.floor((y - rect.top) / rect.height * _instance.screenHeight);

    return { x: newX, y: newY };
}

function onUpdateFrame(time) {
    _instance.onUpdate(time);
    requestAnimationFrame(onUpdateFrame);
}

function onRenderFrame(time) {
    beginRender(time);
	if (!_instance.isContentLoaded) {
		_instance.loadContent();
		_instance.isContentLoaded = true;
	}
    _instance.onRender(time);
    endRender(time);
    requestAnimationFrame(onRenderFrame);
}

function initialize(gameInstance) {
    _instance = gameInstance;
	const canvas = document.createElement('canvas');
	document.body.appendChild(canvas);
	_instance.canvas = canvas;
    gl = canvas.getContext('webgl');

    loadCanvasShader();
    loadRenderShader();
    initializeQuadBuffer();

    initializeRenderTexture();
    initializeDepthBuffer();

    initializeFramebuffer();

    initializePalette();
    initializeRenderImage();

    _instance.canvas.addEventListener('mousedown', function(e) {
        const pos = convertPosition(e.clientX, e.clientY);
        _instance.onMouseDown(pos.x, pos.y, e.buttons);
    });

    _instance.canvas.addEventListener('mouseup', function(e) {
        const pos = convertPosition(e.clientX, e.clientY);
        _instance.onMouseUp(pos.x, pos.y, e.buttons);
    });

    _instance.canvas.addEventListener('mousemove', function(e) {
        const pos = convertPosition(e.clientX, e.clientY);
        _instance.onMouseMove(pos.x, pos.y, e.buttons);
    });

    _instance.canvas.addEventListener('touchstart', function(e) {
        mousePos = getTouchPos(canvas, e);
        for (let n = 0; n < e.touches.length; n++) {
            const touch = e.touches[n];
            const pos = convertPosition(touch.clientX, touch.clientY);
            _instance.onMouseMove(pos.x, pos.y, 1);
        }
    });

    _instance.canvas.addEventListener('touchend', function(e) {
        _instance.onMouseUp(null, null, 1);
    });

    _instance.canvas.addEventListener('touchmove', function(e) {
        for (let n = 0; n < e.touches.length; n++) {
            const touch = e.touches[n];
            const pos = convertPosition(touch.clientX, touch.clientY);
            _instance.onMouseMove(pos.x, pos.y, 1);
        }
    });

    _instance.onInit();
    requestAnimationFrame(onRenderFrame);
    requestAnimationFrame(onUpdateFrame);
}

export {
    PALETTE_SIZE, GameCanvas,
    setPalette, loadPalette, hsv2rgb,
    clearScreen, getPixel, setPixel,
    initialize, beginRender, endRender,
    convertPosition,

    gl, FRAMEBUFFER_POSITIONS
};