import React, { useState } from 'react'
import styled from 'styled-components/native'

const Track = styled.Pressable`
    height: 24px;
    width: 48px;
    background-color: ${props => props.theme.color.baseText};
`

const Thumb = styled.View`
    height: 100%;
    width: 50%;
    left: ${props => props.value ? '24px' : '0px'};
    background-color: ${props => props.theme.color.brandText};
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