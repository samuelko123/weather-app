const baseTheme = {
	borderRadius: {
		alert: 6,
		button: 12,
	},
	borderWidth: {
		alert: 1,
		button: 2,
		separator: 1,
		textField: 1,
	},
	fontSize: {
		base: 18,
		button: 18,
		icon: 24,
		textField: 18,
		title: 18,
	},
	height: {
		header: 72,
		row: 48,
	},
	margin: {
		icon: 6,
	},
	padding: {
		alert: 12,
		button: 12,
		header: 24,
		main: 24,
		textField: 6,
	},
}

export const lightTheme = {
	...baseTheme,
	color: {
		background: '#eeeeee',
		baseText: '#111111',
		brand: '#0d5257',
		brandText: '#eeeeee',
		errorBackground: '#ffdddd',
		errorBorder: '#bb0000',
		errorText: '#bb0000',
		header: '#0d5257',
		maxTemp: '#bb0000',
		minTemp: '#0000bb',
		placeholder: '#eeeeee88',
		separator: '#cccccc',
	},
}

export const darkTheme = {
	...baseTheme,
	color: {
		background: '#121212',
		baseText: '#ffffff99',
		brand: '#272727',
		brandText: '#ffffffde',
		errorBackground: '#ffdddd',
		errorBorder: '#bb0000',
		errorText: '#bb0000',
		header: '#272727',
		maxTemp: '#ffffff99',
		minTemp: '#ffffff99',
		placeholder: '#ffffff99',
		separator: '#ffffff61',
	},	
}