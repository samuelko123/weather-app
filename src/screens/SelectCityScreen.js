import React from 'react'
import styled from 'styled-components/native'
import { Pressable } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import {
	BaseText,
	CityList,
} from '../components'

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

const CloseIcon = styled(AntDesign).attrs(props => ({
	name: 'close',
	color: props.theme.color.brandText,
	size: props.theme.fontSize.icon,
	accessibilityLabel: 'Close',
}))``

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