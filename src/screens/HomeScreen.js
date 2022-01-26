import React from 'react'
import { useTheme } from 'styled-components/native'
import { ScrollView } from 'react-native'
import {
	shallowEqual,
	useSelector,
} from 'react-redux'
import {
	AntDesign,
	MaterialCommunityIcons,
} from '@expo/vector-icons'
import moment from 'moment'

import {
	useLastUpdated,
	useWeatherForecast,
} from '../hooks'
import {
	BaseText,
	Button,
	Card,
	Col,
	ErrorAlert,
	Header,
	List,
	Main,
	RefreshControl,
	Row,
	SectionHeader,
	Surface,
	Title,
} from '../components'
import {
	formatTemperature,
	formatWind,
} from '../utils'

export const HomeScreen = (props) => {
	const { navigation } = props

	const suburb = useSelector(state => state.suburb, shallowEqual)
	const [isLoading, data, errorMsg, fetchData] = useWeatherForecast(suburb.lat, suburb.lon)
	const [lastUpdated] = useLastUpdated(data ? data.current.dt : 0)
	const theme = useTheme()

	return (
		<>
			<Header>
				<Button
					onPress={() => navigation.navigate('Suburb')}
					hitSlop={theme.base.spacing * 2}
					accessible={true}
					accessibilityLabel='Search'
					accessibilityHint='Navigates to the search screen'
				>
					<Row>
						<AntDesign
							name='search1'
							color={theme.color.onPrimary}
							size={theme.base.iconSize}
						/>
						<Title ml={0.5}>
							{suburb.name}
						</Title>
					</Row>
				</Button>
				<Button
					onPress={() => navigation.navigate('Settings')}
					hitSlop={theme.base.spacing * 2}
					accessible={true}
					accessibilityLabel='Settings'
					accessibilityHint='Navigates to the settings screen'
				>
					<AntDesign
						name='setting'
						color={theme.color.onPrimary}
						size={theme.base.iconSize}
					/>
				</Button>
			</Header>
			<Main
				refreshControl={
					<RefreshControl
						refreshing={isLoading}
						onRefresh={fetchData}
					/>
				}
			>
				{
					errorMsg &&
					<ErrorAlert>{errorMsg}</ErrorAlert>
				}
				{
					!errorMsg && !isLoading &&
					<>
						<SectionHeader>
							Current Weather
						</SectionHeader>
						<Row>
							<Col flex={1}>
								<Row>
									<Col center={true}>
										<BaseText size={2}>
											{formatTemperature(data.current.temp, 1)}
										</BaseText>
										<BaseText size={0.75}>
											Feels like {formatTemperature(data.current.temp_feels_like, 1)}
										</BaseText>
									</Col>
								</Row>
								<Row mt={0.5}>
									<Col center={true}>
										<BaseText bold={true}>
											{formatTemperature(data.daily[0].temp_max)}
										</BaseText>
										<BaseText bold={true}>
											Max
										</BaseText>
									</Col>
									<Col center={true} ml={1}>
										<BaseText>
											{formatTemperature(data.daily[0].temp_min)}
										</BaseText>
										<BaseText>
											Min
										</BaseText>
									</Col>
								</Row>
							</Col>
							<Col flex={1}>
								<Row>
									<MaterialCommunityIcons
										name={data.current.weather_icon}
										color={theme.color.iconOnBackground}
										size={theme.base.iconSize * 3}
									/>
								</Row>
								<Row>
									<BaseText size={1.5}>
										{data.current.weather_short_desc}
									</BaseText>
								</Row>
							</Col>
						</Row>
						<Surface mt={1} pt={0.5}>
							<Row px={1} pb={0.5}>
								<BaseText flex={1} size={0.9}>
									Humidity
								</BaseText>
								<BaseText flex={1} size={0.9}>
									{data.current.humidity}%
								</BaseText>
							</Row>
							<Row px={1} pb={0.5}>
								<BaseText flex={1} size={0.9}>
									Wind
								</BaseText>
								<BaseText flex={1} size={0.9}>
									{formatWind(data.current.wind_speed)}
								</BaseText>
							</Row>
							<Row px={1} pb={0.5}>
								<BaseText flex={1} size={0.9}>
									Gust
								</BaseText>
								<BaseText flex={1} size={0.9}>
									{formatWind(data.current.wind_gust)}
								</BaseText>
							</Row>
							<Row px={1} pb={0.5}>
								<BaseText flex={1} size={0.9}>
									UV Index
								</BaseText>
								<BaseText flex={1} size={0.9}>
									{data.current.uv_index}
								</BaseText>
							</Row>
							<Row px={1} pb={0.5}>
								<BaseText flex={1} size={0.9}>
									Sunrise
								</BaseText>
								<BaseText flex={1} size={0.9}>
									{moment.unix(data.current.sunrise).format('h:mma')}
								</BaseText>
							</Row>
							<Row px={1} pb={0.5}>
								<BaseText flex={1} size={0.9}>
									Sunset
								</BaseText>
								<BaseText flex={1} size={0.9}>
									{moment.unix(data.current.sunset).format('h:mma')}
								</BaseText>
							</Row>
						</Surface>
						<SectionHeader>
							Hourly Forecast
						</SectionHeader>
						<Surface>
							<ScrollView
								horizontal={true}
								showsHorizontalScrollIndicator={true}
								pagingEnabled={false}
								contentContainerStyle={{ flexGrow: 1 }}
							>
								<List
									horizontal={true}
									data={data.hourly.slice(1)}
									renderItem={(item, index) =>
										<Card
											key={index}
											width={theme.base.spacing * 6}
											height={theme.base.spacing * 12}
										>
											<BaseText
												color={theme.color.textOnSurface}
											>
												{moment.unix(item.dt).format('ddd')}
											</BaseText>
											<BaseText
												color={theme.color.textOnSurface}
											>
												{moment.unix(item.dt).format('ha')}
											</BaseText>
											<MaterialCommunityIcons
												name={item.weather_icon}
												color={theme.color.iconOnSurface}
												size={theme.base.iconSize * 1.5}
											/>
											<BaseText
												color={theme.color.textOnSurface}
											>
												{formatTemperature(item.temp)}
											</BaseText>
										</Card>
									}
								/>
							</ScrollView>
						</Surface>
						<SectionHeader>
							Daily Forecast
						</SectionHeader>
						<Surface>
							<List
								data={data.daily.slice(1)}
								renderItem={(item, index) =>
									<Row p={1} key={index}>
										<BaseText
											color={theme.color.textOnSurface}
											flex={1}
										>
											{moment.unix(item.dt).format('ddd')}
										</BaseText>
										<MaterialCommunityIcons
											name={item.weather_icon}
											color={theme.color.iconOnSurface}
											size={theme.base.iconSize * 1.5}
										/>
										<BaseText
											color={theme.color.textOnSurface}
											flex={1}
											textAlign='right'
										>
											{formatTemperature(item.temp_min)}
										</BaseText>
										<BaseText
											color={theme.color.textOnSurface}
											flex={1}
											textAlign='right'
											bold={true}
										>
											{formatTemperature(item.temp_max)}
										</BaseText>
									</Row>
								}
							/>
						</Surface>
						<BaseText
							mt={2}
							size={0.75}
						>
							Last updated {lastUpdated}
						</BaseText>
					</>
				}
			</Main>
		</>
	)
}