const baseTheme = {
	base: {
		borderRadius: 12,
		borderWidth: 1,
		fontSize: 18,
		iconSize: 24,
		spacing: 12,
	},
}

export const lightTheme = {
	...baseTheme,
	color: {
		background: '#e0e0e0',
		textOnBackground: '#121212',
		iconOnBackground: '#0d5257',
		error: '#ffdddd',
		onError: '#bb0000',
		primary: '#0d5257',
		onPrimary: '#dedede',
		placeholderOnPrimary: '#9f9f9f',
		surface: '#efefef',
		textOnSurface: '#121212',
		iconOnSurface: '#0d5257',
	},
}

export const darkTheme = {
	...baseTheme,
	color: {
		background: '#121212',
		textOnBackground: '#dedede',
		iconOnBackground: '#cdcdcd',
		error: '#cf6679',
		onError: '#121212',
		primary: '#272727',
		onPrimary: '#cdcdcd',
		placeholderOnPrimary: '#676767',
		surface: '#272727',
		textOnSurface: '#cdcdcd',
		iconOnSurface: '#898989',
	},
}