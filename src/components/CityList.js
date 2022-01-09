import React from 'react'
import styled from 'styled-components/native'
import {
	FlatList,
	Pressable,
} from 'react-native'
import { BaseText } from './BaseText'
import { Row } from './Row'

const Separator = styled.View`
	border-bottom-color: ${props => props.theme.color.separator};
	border-bottom-width: ${props => props.theme.border.separator}px;
`

const CityRow = styled(Row)`
	justify-content: space-between;
`

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
						<BaseText>{'>'}</BaseText>
					</CityRow>
				</Pressable>
			)}
			ItemSeparatorComponent = {() => (
				<Separator />
			)}
		/>
	)
}