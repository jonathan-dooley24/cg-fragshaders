#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
	vec4 f_color = texture(image, texcoord);
	float luminance = 0.299 * f_color.x + 0.587 * f_color.y + 0.114 * f_color.z;
	vec4 FinalColor = vec4(luminance, luminance, luminance, 1.0); 
	FragColor = FinalColor;
}
