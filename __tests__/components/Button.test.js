import React from 'react'
import {
	Button,
	Layout,
} from '../../src/components'
import {
	fireEvent,
	render,
} from '@testing-library/react-native'
import { theme } from '../../src/styles'

test('renders correctly', async () => {
	// Arrange
	const text = 'Test Button'
	const textColor = '#000000'
	const fillColor = '#ffffff'

	const { getByText } = render(
		<Layout theme={theme}>
			<Button
				text={text}
				textColor={textColor}
				fillColor={fillColor}
			/>
		</Layout>
	)

	const btn = getByText(text)

	// Act
	fireEvent(btn, 'pressIn')

	// Assert
	await expect(btn).toHaveStyle({ color: fillColor })

	// Act
	fireEvent(btn, 'pressOut')

	// Assert
	await expect(btn).toHaveStyle({ color: textColor })
})