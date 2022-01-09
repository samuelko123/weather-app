import React from 'react'
import styled from 'styled-components/native'
import {
	FlatList,
	Pressable,
} from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { BaseText } from './BaseText'
import { Row } from './Row'

const Separator = styled.View`
	border-bottom-color: ${props => props.theme.color.separator};
	border-bottom-width: ${props => props.theme.border.separator}px;
`

const CityRow = styled(Row)`
	justify-content: space-between;
`

const RightArrow = styled(AntDesign).attrs(props => ({
	name: 'right',
	color: props.theme.color.brand,
	size: props.theme.fontSize.icon,
}))``

export const CityList = (props) => {
	const {
		data,
		onSelectCity,
	} = props

	const handlePress = (item) => {
		onSelectCity(item.name)
	}

	return (
		<FlatList
			data={data}
			keyExtractor={(item) => item.name}
			renderItem={({ item }) => (

				<Pressable
					onPress={() => handlePress(item)}
				>
					<CityRow>
						<BaseText>{item.name}</BaseText>
						<RightArrow />
					</CityRow>
				</Pressable>
			)}
			ItemSeparatorComponent = {() => (
				<Separator />
			)}
		/>
	)
}