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

	gl_FragColor = color;
}