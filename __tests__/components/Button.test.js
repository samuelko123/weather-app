import React from 'react'
import { Button } from '../../src/components'
import { Text } from 'react-native'
import {
	fireEvent,
	render,
} from '@testing-library/react-native'

test('renders correctly', async () => {
	// Arrange
	const text = 'Test Button'

	const screen = render(
		<Button>
			<Text>{text}</Text>
		</Button>
	)

	const btn = screen.getByText(text)

	// Act
	fireEvent(btn, 'pressIn')

	// Assert
	await expect(screen.toJSON().props.opacity).toEqual(0.5)

	// Act
	fireEvent(btn, 'pressOut')

	// Assert
	await expect(screen.toJSON().props.opacity).toEqual(1)
})