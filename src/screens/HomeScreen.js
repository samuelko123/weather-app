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

import { useWeatherForecast } from '../hooks'
import {
	BaseText,
	Button,
	Card,
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

export const HomeScreen = (props) => {
	const { navigation } = props

	const suburb = useSelector(state => state.suburb, shallowEqual)
	const [isLoading, data, errorMsg, fetchData] = useWeatherForecast(suburb.lat, suburb.lon)
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
					<Row padding={0.1}>
						<AntDesign
							name='search1'
							color={theme.color.onPrimary}
							size={theme.base.iconSize}
							style={{ marginRight: theme.base.spacing * 0.5 }}
						/>
						<Title>{suburb.name}</Title>
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
						<Surface>
							<List
								data={[data.current]}
								renderItem={(item, index) =>
									<Row key={index}>
										<BaseText
											color={theme.color.textOnSurface}
											flex={1}
										>
											{moment.unix(item.dt).format('hh:mm a')}
										</BaseText>
										<BaseText
											color={theme.color.textOnSurface}
											flex={1}
											textAlign='right'
										>
											{`${item.temp.toFixed(1)}°`}
										</BaseText>
									</Row>
								}
							/>
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
									data={data.hourly}
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
												name={item.icon}
												color={theme.color.iconOnSurface}
												size={theme.base.iconSize * 1.5}
											/>
											<BaseText
												color={theme.color.textOnSurface}
											>
												{`${item.temp.toFixed(1)}°`}
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
								data={data.daily}
								renderItem={(item, index) =>
									<Row key={index}>
										<BaseText
											color={theme.color.textOnSurface}
											flex={1}
										>
											{moment.unix(item.dt).format('ddd')}
										</BaseText>
										<MaterialCommunityIcons
											name={item.icon}
											color={theme.color.iconOnSurface}
											size={theme.base.iconSize * 1.5}
										/>
										<BaseText
											color={theme.color.textOnSurface}
											flex={1}
											textAlign='right'
										>
											{`${item.min.toFixed(1)}°`}
										</BaseText>
										<BaseText
											color={theme.color.textOnSurface}
											flex={1}
											textAlign='right'
											bold={true}
										>
											{`${item.max.toFixed(1)}°`}
										</BaseText>
									</Row>
								}
							/>
						</Surface>
					</>
				}
			</Main>
		</>
	)
}