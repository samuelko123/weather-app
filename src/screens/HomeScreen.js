import React, {
	useEffect,
	useState,
} from 'react'
import axios from 'axios'
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

export const HomeScreen = (props) => {
	const {
		navigation,
		route,
	} = props
	const [isLoading, setLoading] = useState(true)
	const [data, setData] = useState([])
	const [errorMsg, setErrorMsg] = useState(null)
	const [city, setCity] = useState('VIC')

	const fetchWeatherData = async () => {
		try {
			setLoading(true)
			const url = `https://weather-api-samuelko.vercel.app/api/seven-day-forecast/${city}`
			const res = await axios.get(url)
			setData(res.data)
		} catch (error) {
			setErrorMsg(error.toString())
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		if (route.params?.city) {
			setCity(route.params.city)
		}
		fetchWeatherData()
	}, [city, route.params?.city])

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