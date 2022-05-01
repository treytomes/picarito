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

vec4 getColor(float x, float y) {
	vec2 pos = vec2(x, y);
	float index = texture2D(u_image, pos).a * 255.0;
	vec4 color = texture2D(u_palette, vec2((index + 0.5) / 256.0, 0.5));
	return color;
}

void main() {
	vec2 pos = v_texcoord;

	// Barrel Distortion
	//pos = distort(pos);

	float index = texture2D(u_image, pos).a * 255.0;

	vec4 color = getColor(pos.x, pos.y);

	// Scanlines
	color -= abs(sin(pos.y * 100.0 + u_time * 5.0)) * 0.08; // (1)
	color.a = 1.0;
	/*
	color -= abs(sin(pos.y * 100.0 + u_time * 5.0)) * 0.08; // (1)
	color -= abs(sin(pos.y * 300.0 - u_time * 10.0)) * 0.05; // (2)
	color.a = 1.0;
	*/

	// Bloom?
	/*
	float dx = pos.x / 256.0 / 2.0f;
	float dy = pos.y / 224.0 / 2.0f;
	float factory = 0.4f;
	vec4 color0 = getColor(pos.x - dx, pos.y - dy);
	vec4 color1 = getColor(pos.x +0.0, pos.y - dy);
	vec4 color2 = getColor(pos.x + dx, pos.y - dy);
	vec4 color3 = getColor(pos.x - dx, pos.y +0.0);
	vec4 color4 = getColor(pos.x +0.0, pos.y +0.0);
	vec4 color5 = getColor(pos.x + dx, pos.y +0.0);
	vec4 color6 = getColor(pos.x - dx, pos.y + dy);
	vec4 color7 = getColor(pos.x +0.0, pos.y + dy);
	vec4 color8 = getColor(pos.x + dx, pos.y + dy);
	*/
	
	if (pos.x > 1.0 || pos.x < 0.0 || pos.y > 1.0 || pos.y < 0.0) {
		gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0); // black
	} else {
		//color = (color + color0 + color1 + color2 + color3 + color4 + color5 + color6 + color7 + color8) / 9.0 * 0.5 + color * 0.5;

		gl_FragColor = color; // vec4(color, 1.0).rgba;
	}
}
