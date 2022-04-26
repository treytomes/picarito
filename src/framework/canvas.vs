attribute vec4 position;
attribute vec2 texcoord;

uniform mat4 u_matrix;

varying vec2 v_texcoord;

void main() {
	gl_Position = u_matrix * position;
	v_texcoord = texcoord;
	
}
