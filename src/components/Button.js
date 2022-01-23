import React, { useState } from 'react'
import styled from 'styled-components/native'
import { marginStyle } from '../styles'

const StyledPressable = styled.Pressable`
	${marginStyle}
`

export const Button = (props) => {
	const {
		children,
		...btnProps
	} = props

	const [opacity, setOpacity] = useState(1)

	const handlePressIn = () => {
		setOpacity(0.5)
	}

	const handlePressOut = () => {
		setOpacity(1)
	}

	return (
		<StyledPressable
			{...btnProps}
			opacity={opacity}
			onPressIn={handlePressIn}
			onPressOut={handlePressOut}
		>
			{children}
		</StyledPressable>
	)
}