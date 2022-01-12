import React from 'react'
import styled from 'styled-components/native'
import {
	FlatList,
	Pressable,
} from 'react-native'
import {
	shallowEqual,
	useDispatch,
	useSelector,
} from 'react-redux'
import { setCity } from '../redux/slices'
import {
	BaseText,
	CloseIcon,
	Header,
	Main,
	RightArrowIcon,
	Row,
	Title,
} from '../components'

const Separator = styled.View`
	border-bottom-color: ${props => props.theme.color.separator};
	border-bottom-width: ${props => props.theme.border.separator}px;
`

const CityRow = styled(Row)`
	justify-content: space-between;
`

const CityText = styled(BaseText)`
	${props => props.highlighted && 'font-weight: bold;'}
	${props => props.highlighted && `color: ${props.theme.color.brand}`}
`

export const SelectCityScreen = (props) => {
	const { navigation } = props
	const city = useSelector(state => state.city.name, shallowEqual)
	const dispatch = useDispatch()
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

	const handlePress = (item) => {
		dispatch(setCity(item.name))
		navigation.navigate('Home')
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
				<FlatList
					data={data}
					keyExtractor={(item) => item.name}
					renderItem={({ item }) => (

						<Pressable
							onPress={() => handlePress(item)}
						>
							<CityRow>
								<CityText highlighted={item.name === city}>
									{item.name}
								</CityText>
								<RightArrowIcon />
							</CityRow>
						</Pressable>
					)}
					ItemSeparatorComponent={() => (
						<Separator />
					)}
				/>
			</Main>
		</>
	)
}