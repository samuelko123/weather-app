export const formatTemperature = (temp, precision) => {
	precision = precision || 0
	return `${temp ? temp.toFixed(precision) : 'N/A'}°`
}

export const formatWind = (speed) => {
	return `${speed ? speed.toFixed(0) : 'N/A'} km/h`
}