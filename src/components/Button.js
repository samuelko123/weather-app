import React, { useState } from 'react'
import { Pressable } from 'react-native'

export const Button = (props) => {
	const {
		onPress,
		children,
	} = props

	const [opacity, setOpacity] = useState(1)

	return (
		<Pressable
			onPress={onPress}
			onPressIn={() => setOpacity(0.5)}
			onPressOut={() => setOpacity(1)}
			opacity={opacity}
		>
			{children}
		</Pressable>
	)
}