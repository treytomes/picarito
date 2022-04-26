attribute vec4 a_position;
varying vec2 v_texcoord;
void main() {
	gl_Position = a_position;
	
	// assuming a unit quad for position we
	// can just use that for texcoords. Flip Y though so we get the top at 0
	v_texcoord = a_position.xy * vec2(0.5, -0.5) + 0.5;
}