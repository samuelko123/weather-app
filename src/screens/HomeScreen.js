import React from 'react'
import {
	shallowEqual,
	useSelector,
} from 'react-redux'
import {
	Button,
	ErrorAlert,
	Header,
	Main,
	Spinner,
	Title,
	WeatherList,
} from '../components'
import { theme } from '../styles'
import { useSevenDayForecast } from '../hooks'

export const HomeScreen = (props) => {
	const { navigation } = props

	const city = useSelector(state => state.city.name, shallowEqual)
	const [isLoading, data, errorMsg] = useSevenDayForecast(city)

	return (
		<>
			<Header>
				<Title>Weather App</Title>
				<Button
					text={city}
					onPress={() => navigation.navigate('Select City')}
					textColor={theme.color.brandText}
					fillColor={theme.color.brand}
				/>
			</Header>
			<Main>
				{
					errorMsg &&
					<ErrorAlert>{errorMsg}</ErrorAlert>
				}
				{
					isLoading &&
					<Spinner />
				}
				{
					!errorMsg && !isLoading &&
					<WeatherList data={data} />
				}
			</Main>
		</>
	)
}