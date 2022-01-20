import React from 'react'
import styled from 'styled-components/native'
import {
	shallowEqual,
	useSelector,
} from 'react-redux'
import moment from 'moment'

import { useWeatherForecast } from '../hooks'
import {
	BaseText,
	Button,
	ErrorAlert,
	Header,
	List,
	Main,
	MenuIcon,
	Row,
	SearchIcon,
	SectionHeader,
	Spinner,
	Title,
} from '../components'

const StyledTitleContainer = styled.View`
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
`

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
    flex: 1;
	text-align: right;
`

const TempBoldText = styled(BaseText)`
    flex: 1;
	text-align: right;
	font-weight: bold;
`

export const HomeScreen = (props) => {
	const { navigation } = props

	const suburb = useSelector(state => state.suburb, shallowEqual)
	const [isLoading, data, errorMsg] = useWeatherForecast(suburb.lat, suburb.lon)

	return (
		<>
			<Header>
				<Button onPress={() => navigation.navigate('Suburb')}>
					<StyledTitleContainer>
						<StyledSearchIcon />
						<Title>{suburb.name}</Title>
					</StyledTitleContainer>
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
					<>
						<SectionHeader>
							Current
						</SectionHeader>
						<List
							data={[data.current]}
							renderItem={(item, index) =>
								<Row key={index}>
									<DateText>{moment.unix(item.dt).format('hh:mm a')}</DateText>
									<TempText>{`${item.temp.toFixed(1)}°`}</TempText>
								</Row>
							}
						/>
						<SectionHeader>
							Daily
						</SectionHeader>
						<List
							data={data.daily}
							renderItem={(item, index) =>
								<Row key={index}>
									<DateText>{moment.unix(item.dt).format('dddd')}</DateText>
									<TempText>{`${item.min.toFixed(1)}°`}</TempText>
									<TempBoldText>{`${item.max.toFixed(1)}°`}</TempBoldText>
								</Row>
							}
						/>
						<SectionHeader>
							Hourly
						</SectionHeader>
						<List
							data={data.hourly}
							renderItem={(item, index) =>
								<Row key={index}>
									<DateText>{moment.unix(item.dt).format('ddd ha')}</DateText>
									<TempText>{`${item.temp.toFixed(1)}°`}</TempText>
								</Row>
							}
						/>
					</>
				}
			</Main>
		</>
	)
}