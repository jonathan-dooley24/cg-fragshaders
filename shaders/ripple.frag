#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float time;
uniform sampler2D image;

out vec4 FragColor;

void main() {
	vec2 temp_coord = (texcoord * 2.0) - 1.0;
	var radius = length(temp_coord);
	vec2 offset = temp_coord * (sin(radius * 30.0 - (time * 5.0)) + 0.5) / 60.0;
	
    vec4 FragColor = texture(image, (texcoord + offset));
}
