const baseTheme = {
	base: {
		borderRadius: 12,
		borderWidth: 1,
		fontSize: 18,
		spacing: 12,
	},
}

export const lightTheme = {
	...baseTheme,
	color: {
		background: '#e0e0e0',
		onBackground: '#121212',
		error: '#ffdddd',
		onError: '#bb0000',
		primary: '#0d5257',
		onPrimary: '#dedede',
		surface: '#efefef',
		textOnSurface: '#121212',
		iconOnSurface: '#0d5257',
	},
}

export const darkTheme = {
	...baseTheme,
	color: {
		background: '#121212',
		onBackground: '#dedede',
		error: '#cf6679',
		onError: '#121212',
		primary: '#272727',
		onPrimary: '#cdcdcd',
		surface: '#272727',
		textOnSurface: '#cdcdcd',
		iconOnSurface: '#cdcdcd',
	},
}