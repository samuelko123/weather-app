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
		error: '#ffdddd',
		onBackground: '#121212',
		onError: '#bb0000',
		onPrimary: '#dedede',
		onSurface: '#121212',
		primary: '#0d5257',
		surface: '#efefef',
	},
}

export const darkTheme = {
	...baseTheme,
	color: {
		background: '#121212',
		error: '#cf6679',
		onBackground: '#dedede',
		onError: '#121212',
		onPrimary: '#cdcdcd',
		onSurface: '#cdcdcd',
		primary: '#272727',
		surface: '#272727',
	},
}