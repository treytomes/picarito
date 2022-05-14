precision mediump float;
varying vec2 v_texcoord;
uniform sampler2D u_texture;
uniform float u_time;
uniform vec2 u_screenResolution;

// Vignette inspired by: https://babylonjs.medium.com/retro-crt-shader-a-post-processing-effect-study-1cb3f783afbc

vec2 curveRemapUV(vec2 pos, vec2 curvature) {
    // As we near the edge of our screen apply greater distortion using a cubic function.
    pos = pos * 2.0 - 1.0;
    vec2 offset = abs(pos.yx) / vec2(curvature.x, curvature.y);
    pos = pos + pos * offset * offset;
    pos = pos * 0.5 + 0.5;
    return pos;
}

vec4 vignetteIntensity(vec2 pos, float opacity, float roundness) {
	float intensity = pos.x * pos.y * (1.0 - pos.x) * (1.0 - pos.y);
	return vec4(vec3(clamp(pow((u_screenResolution.x / roundness) * intensity, opacity), 0.0, 1.0)), 1.0);
}

vec4 scanlines(vec2 pos, vec4 color) {
	// Static lines.
	color *= sign(sin(pos.y * 3000.0));
	color.a = 1.0;

	// Travelling lines.
	color -= abs(sin(pos.y * 100.0 + u_time * 5.0)) * 0.08;
	color.a = 1.0;

	return color;
}

vec4 bloom(vec4 color, vec2 pos, float glowFactor, float originWeight) {
	float dx = 1.0 / u_screenResolution.x / 2.0;
	float dy = 1.0 / u_screenResolution.y / 2.0;
	vec4 color0 = texture2D(u_texture, vec2(pos.x - dx, pos.y - dy));
	vec4 color1 = texture2D(u_texture, vec2(pos.x +0.0, pos.y - dy));
	vec4 color2 = texture2D(u_texture, vec2(pos.x + dx, pos.y - dy));
	vec4 color3 = texture2D(u_texture, vec2(pos.x - dx, pos.y +0.0));
	vec4 color4 = texture2D(u_texture, vec2(pos.x +0.0, pos.y +0.0));
	vec4 color5 = texture2D(u_texture, vec2(pos.x + dx, pos.y +0.0));
	vec4 color6 = texture2D(u_texture, vec2(pos.x - dx, pos.y + dy));
	vec4 color7 = texture2D(u_texture, vec2(pos.x +0.0, pos.y + dy));
	vec4 color8 = texture2D(u_texture, vec2(pos.x + dx, pos.y + dy));

	color = (color + color0 + color1 + color2 + color3 + color4 + color5 + color6 + color7 + color8) / 9.0 * (1.0 - originWeight) + color * (originWeight + glowFactor);
	return color;
}

void main() {
	vec2 curvature = vec2(4.0, 4.0);
	float glowFactor = 0.9;
	float originWeight = 0.1;
	float vignetteOpacity = 0.6;
	float vignetteRoundness = 2.0;
	vec2 pos = v_texcoord;
	pos = curveRemapUV(pos, curvature);

	vec4 color = texture2D(u_texture, pos);
	color = scanlines(pos, color);
	color = bloom(color, pos, glowFactor, originWeight);
	color *= vignetteIntensity(pos, vignetteOpacity, vignetteRoundness);
	
    if (pos.x < 0.0 || pos.y < 0.0 || pos.x > 1.0 || pos.y > 1.0){
        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
    } else {
        gl_FragColor = color;
    }
}