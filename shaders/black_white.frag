#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
	vec4 temp = texture(image, texcoord);
	var luminance = 0.299 * temp.x + 0.587 * temp.y + 0.114 * temp.z;
	vec4 color = vec4(luminance, luminance, luminance, 1.0); 
	FragColor = color;
}
