import React from 'react'
import styled from 'styled-components/native'
import { FlatList } from 'react-native'
import {
	shallowEqual,
	useSelector,
} from 'react-redux'
import moment from 'moment'

import { useSevenDayForecast } from '../hooks'
import {
	BaseText,
	Button,
	ErrorAlert,
	Header,
	Main,
	Row,
	Spinner,
	Title,
} from '../components'
import { theme } from '../styles'

const DateText = styled(BaseText)`
    flex: 1;
`

const MinTempText = styled(BaseText)`
    color: ${props => props.theme.color.minTemp};
    text-align: right;
    flex: 1;
`

const MaxTempText = styled(BaseText)`
    color: ${props => props.theme.color.maxTemp};
    text-align: right;
    flex: 1;
`

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
					<FlatList
						data={data}
						keyExtractor={(item) => item.dt}
						renderItem={({ item }) => (
							<Row>
								<DateText>{moment.unix(item.dt).format('DD/MM ddd')}</DateText>
								<MinTempText>{Math.round(item.min)}</MinTempText>
								<MaxTempText>{Math.round(item.max)}</MaxTempText>
							</Row>
						)}
					/>
				}
			</Main>
		</>
	)
}