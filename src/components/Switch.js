import React, { useState } from 'react'
import styled from 'styled-components/native'

const Track = styled.Pressable`
    height: ${props => props.theme.base.spacing * 2}px;
    width: ${props => props.theme.base.spacing * 4}px;
    background-color: ${props => props.theme.color.onBackground};
`

const Thumb = styled.View`
    height: 100%;
    width: 50%;
    left: ${props => props.value ? props.theme.base.spacing * 2 : 0}px;
    background-color: ${props => props.theme.color.onPrimary};
`

export const Switch = (props) => {
	const {
		defaultValue,
		onPress,
	} = props
	const [value, setValue] = useState(defaultValue)

	const handlePress = () => {
		onPress(!value)
		setValue(!value)
	}

	return (
		<Track
			onPress={handlePress}
			accessibilityRole='switch'
		>
			<Thumb value={value}/>
		</Track>
	)
}