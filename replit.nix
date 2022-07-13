# DO NOT CHANGE ANYTHING HERE UNLESS YOU NEED A PACKAGE

{ pkgs }: {
	deps = with pkgs; [
		nodejs-16_x
		nodePackages.typescript-language-server
		nodePackages.node-pre-gyp
		libpng
		libjpeg
		libuuid
	];
}