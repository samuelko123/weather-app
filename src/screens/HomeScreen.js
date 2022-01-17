import React from 'react'
import styled from 'styled-components/native'
import { FlatList } from 'react-native'
import {
	shallowEqual,
	useDispatch,
	useSelector,
} from 'react-redux'
import moment from 'moment'

import { setTheme } from '../redux/slices'
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
	Switch,
	Title,
} from '../components'

const StyledSearchIcon = styled(SearchIcon)`
	padding-left: ${props => props.theme.base.spacing * 2}px;
	margin-right: ${props => props.theme.base.spacing * 0.5}px;
`

const StyledSwitchContainer = styled.View`
	margin-right: ${props => props.theme.base.spacing * 2}px;
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
	const dispatch = useDispatch()

	return (
		<>
			<Header>
				<Button onPress={() => navigation.navigate('Suburb')}>
					<StyledSearchIcon />
					<Title>{suburb.name}</Title>
				</Button>
				<StyledSwitchContainer>
					<Switch onPress={(dark) => dispatch(setTheme(dark ? 'dark' : 'light')) } />
				</StyledSwitchContainer>
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