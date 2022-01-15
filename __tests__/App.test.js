import React from 'react'
import { render } from '@testing-library/react-native'
import axios from 'axios'

import { App } from '../src/App'

describe('happy path', () => {
	beforeEach(() => {
		jest.spyOn(axios, 'get').mockImplementation(() => {
			return Promise.resolve({
				data: [{
					dt: 1000000000,
					min: 22.01,
					max: 30.99,
				}],
			})
		})
	})

	test('renders correctly', async () => {
		// Arrange
		const screen = render(
			<App />
		)

		// Assert
		expect(await screen.findByA11yLabel('Search')).toBeTruthy()
	})
})