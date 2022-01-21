import React, { useState } from 'react'
import { Pressable } from 'react-native'

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
		<Pressable
			{...btnProps}
			opacity={opacity}
			onPressIn={handlePressIn}
			onPressOut={handlePressOut}
		>
			{children}
		</Pressable>
	)
}