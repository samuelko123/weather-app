import React, {
	useEffect,
	useState,
} from 'react'
import styled from 'styled-components/native'
import axios from 'axios'
import {
	BaseText,
	Button,
	ErrorAlert,
	Layout,
	Spinner,
	WeatherList,
} from './components'
import { theme } from './styles'

const Header = styled.View`
    background-color: ${props => props.theme.color.brand};
    height: ${props => props.theme.height.header}px;
	padding: 0 ${props => props.theme.padding.header}px;
	flex-direction: row;
    justify-content: space-between;
	align-items: center;
`

const Main = styled.View`
    padding: ${props => props.theme.padding.main}px;
	flex: 1;
`

const Title = styled(BaseText)`
    color: ${props => props.theme.color.brandText};
	font-size: ${props => props.theme.fontSize.title}px;
    font-weight: bold;
`

export const App = () => {
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

	const selectCity = () => {
		if (city === 'VIC') {
			setCity('WA')
		} else {
			setCity('VIC')
		}
	}

	useEffect(() => {
		fetchWeatherData()
	}, [city])

	return (
		<Layout theme={theme}>
			<Header>
				<Title>Weather App</Title>
				<Button
					text={city}
					onPress={selectCity}
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
		</Layout>
	)
}