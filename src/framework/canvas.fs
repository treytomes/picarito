precision mediump float;
varying vec2 v_texcoord;
uniform sampler2D u_texture;
uniform float u_time;

void main() {
	vec2 pos = v_texcoord;
	vec4 color = texture2D(u_texture, v_texcoord);

	// Scanlines
	/*
	color -= abs(sin(pos.y * 100.0 + u_time * 5.0)) * 0.08; // (1)
	color -= abs(sin(pos.y * 300.0 - u_time * 10.0)) * 0.05; // (2)
	color.a = 1.0;
	*/

	
	float dx = 1.0 / 256.0 / 2.0;
	float dy = 1.0 / 224.0 / 2.0;
	vec4 color0 = texture2D(u_texture, vec2(pos.x - dx, pos.y - dy));
	vec4 color1 = texture2D(u_texture, vec2(pos.x +0.0, pos.y - dy));
	vec4 color2 = texture2D(u_texture, vec2(pos.x + dx, pos.y - dy));
	vec4 color3 = texture2D(u_texture, vec2(pos.x - dx, pos.y +0.0));
	vec4 color4 = texture2D(u_texture, vec2(pos.x +0.0, pos.y +0.0));
	vec4 color5 = texture2D(u_texture, vec2(pos.x + dx, pos.y +0.0));
	vec4 color6 = texture2D(u_texture, vec2(pos.x - dx, pos.y + dy));
	vec4 color7 = texture2D(u_texture, vec2(pos.x +0.0, pos.y + dy));
	vec4 color8 = texture2D(u_texture, vec2(pos.x + dx, pos.y + dy));

	float glowFactor = 0.9;
	float originWeight = 0.1;

	color = (color + color0 + color1 + color2 + color3 + color4 + color5 + color6 + color7 + color8) / 9.0 * (1.0 - originWeight) + color * (originWeight + glowFactor);

	gl_FragColor = color;
}