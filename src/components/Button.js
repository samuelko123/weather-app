import React, { useState } from 'react'
import styled from 'styled-components/native'

const StyledPressable = styled.Pressable`
	flex-direction: row;
	justify-content: center;
	align-items: center;
	height: 100%;
`

export const Button = (props) => {
	const {
		onPress,
		children,
	} = props

	const [opacity, setOpacity] = useState(1)

	return (
		<StyledPressable
			onPress={onPress}
			onPressIn={() => setOpacity(0.5)}
			onPressOut={() => setOpacity(1)}
			opacity={opacity}
		>
			{children}
		</StyledPressable>
	)
}