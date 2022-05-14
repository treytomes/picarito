precision mediump float;
varying vec2 v_texcoord;
uniform sampler2D u_image;
uniform sampler2D u_palette;
uniform float u_time;

#define PALETTE_SIZE 256.0

vec4 getColor(float x, float y) {
	vec2 pos = vec2(x, y);
	float index = texture2D(u_image, pos).a * (PALETTE_SIZE - 1.0);
	vec4 color = texture2D(u_palette, vec2((index + 0.5) / PALETTE_SIZE, 0.5));
	return color;
}

void main() {
	vec2 pos = v_texcoord;
	float index = texture2D(u_image, pos).a * (PALETTE_SIZE - 1.0);
	vec4 color = getColor(pos.x, pos.y);
	gl_FragColor = color;
}
