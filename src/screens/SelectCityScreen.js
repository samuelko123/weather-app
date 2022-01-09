import React from 'react'
import { Pressable } from 'react-native'
import {
	CityList,
	CloseIcon,
	Header,
	Main,
	Title,
} from '../components'

export const SelectCityScreen = (props) => {
	const { navigation } = props
	const data = [
		{ name: 'ACT' },
		{ name: 'NSW' },
		{ name: 'NT' },
		{ name: 'QLD' },
		{ name: 'SA' },
		{ name: 'TAS' },
		{ name: 'VIC' },
		{ name: 'WA' },
	]

	const handleSelectCity = (city) => {
		navigation.navigate('Home', {
			city: city,
		})
	}

	return (
		<>
			<Header>
				<Title>Select City</Title>
				<Pressable onPress={() => navigation.navigate('Home')}>
					<CloseIcon />
				</Pressable>
			</Header>
			<Main>
				<CityList
					data={data}
					onSelectCity={handleSelectCity}
				/>
			</Main>
		</>
	)
}