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
