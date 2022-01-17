const baseTheme = {
	base: {
		borderRadius: 6,
		borderWidth: 1,
		fontSize: 18,
		spacing: 12,
	},
}

export const lightTheme = {
	...baseTheme,
	color: {
		background: '#dedede',
		error: '#ffdddd',
		onBackground: '#121212',
		onError: '#bb0000',
		onPrimary: '#dedede',
		primary: '#0d5257',
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
		primary: '#272727',
	},
}