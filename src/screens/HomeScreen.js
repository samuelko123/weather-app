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
	MenuIcon,
	Row,
	SearchIcon,
	Spinner,
	Title,
} from '../components'

const StyledSearchIcon = styled(SearchIcon)`
	padding-left: ${props => props.theme.base.spacing * 2}px;
	margin-right: ${props => props.theme.base.spacing * 0.5}px;
`

const StyledMenuIcon = styled(MenuIcon)`
	padding-left: ${props => props.theme.base.spacing * 2}px;
	padding-right: ${props => props.theme.base.spacing * 2}px;
`

const DateText = styled(BaseText)`
    flex: 1;
`

const TempText = styled(BaseText)`
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
				<Button onPress={() => navigation.navigate('Settings')}>
					<StyledMenuIcon />
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
								<TempText>{item.min.toFixed(1)}</TempText>
								<TempText>{item.max.toFixed(1)}</TempText>
							</Row>
						)}
					/>
				}
			</Main>
		</>
	)
}