#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float width;
uniform float height;
uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec4 temp = texture(image, texcoord);
	temp.x = (round(temp.x * 4.0)) / 4.0;
	temp.y = (round(temp.y * 4.0)) / 4.0;
	temp.z = (round(temp.z * 4.0)) / 4.0;
    FragColor = temp * texture(image,texcoord);
}
