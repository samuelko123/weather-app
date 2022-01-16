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
	SearchIcon,
	Spinner,
	Title,
} from '../components'

const StyledSearchIcon = styled(SearchIcon)`
	padding-left: ${props => props.theme.padding.header}px;
	margin-right: ${props => props.theme.margin.icon}px;
`

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

	const suburb = useSelector(state => state.suburb, shallowEqual)
	const [isLoading, data, errorMsg] = useSevenDayForecast(suburb.lat, suburb.lon)

	return (
		<>
			<Header>
				<Button onPress={() => navigation.navigate('Suburb')}>
					<StyledSearchIcon />
					<Title>{suburb.name}</Title>
				</Button>
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
								<MinTempText>{item.min.toFixed(1)}</MinTempText>
								<MaxTempText>{item.max.toFixed(1)}</MaxTempText>
							</Row>
						)}
					/>
				}
			</Main>
		</>
	)
}