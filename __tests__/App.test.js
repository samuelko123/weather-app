import React from 'react'
import { render } from '@testing-library/react-native'
import axios from 'axios'

import { App } from '../src/App'

describe('happy path', () => {
	beforeEach(() => {
		jest.spyOn(axios, 'get').mockImplementation(() => {})
	})

	test('renders correctly', async () => {
		// Arrange
		const screen = render(<App />)

		// Assert
		expect(await screen.findByA11yLabel('Search')).toBeTruthy()
	})
})