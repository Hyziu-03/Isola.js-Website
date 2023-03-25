export function downscale(size) {
	return (size * 3) / 4;
}
export const screenWidth = window.innerWidth;

export const isDark =
	window.matchMedia("(prefers-color-scheme: dark)")
		.matches === true;
export const theme = isDark ? "dark" : "light";
