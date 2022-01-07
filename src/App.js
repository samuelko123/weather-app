import React, {
	useEffect,
	useState,
} from 'react'
import styled, { ThemeProvider } from 'styled-components/native'
import axios from 'axios'
import {
	BaseBackground,
	BaseText,
	Button,
	ErrorAlert,
	IosBackground,
	Spinner,
	WeatherList,
} from './components'
import { theme } from './styles'

const Header = styled.View`
    background-color: ${props => props.theme.brand};
    height: 72px;
    justify-content: space-between;
    margin-bottom: 24px;
    flex-direction: row;
    padding: 0 24px;
`

const TitleContainer = styled.View`
    justify-content: center;
`

const Title = styled(BaseText)`
    color: ${props => props.theme.brandText};
	font-size: 24px;
    font-weight: bold;
`

const ButtonContainer = styled.View`
    justify-content: center;
`

const Main = styled.View`
    padding: 0 24px;
    flex: 1;
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
		if(city === 'VIC'){
			setCity('WA')
		} else {
			setCity('VIC')
		}
	}

	useEffect(() => {
		fetchWeatherData()
	}, [city])

	return (
		<ThemeProvider theme={theme}>
			<IosBackground>
				<BaseBackground>
					<Header>
						<TitleContainer>
							<Title>Weather App</Title>
						</TitleContainer>
						<ButtonContainer>
							<Button
								text={city}
								onPress={selectCity}
								textColor={theme.brandText}
								fillColor={theme.brand}
							/>
						</ButtonContainer>
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
				</BaseBackground>
			</IosBackground>
		</ThemeProvider>
	)
}