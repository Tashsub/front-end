export function GetBGColorExtensions(css: string) {
	return {
		backgroundColor: `var(${css})`,
	};
}
