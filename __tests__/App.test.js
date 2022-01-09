import React from 'react'
import { App } from '../src/App'
import {
	fireEvent,
	render,
	waitForElementToBeRemoved,
} from '@testing-library/react-native'
import { act } from 'react-test-renderer'
import axios from 'axios'

test('renders correctly', async () => {
	// Arrange
	jest.spyOn(axios, 'get').mockImplementation(() => Promise.resolve({
		data: [{
			dt: 1000000000,
			min: 22.01,
			max: 30.99,
		}],
	}))

	// Act
	const {
		getByText,
		getByA11yLabel,
		queryByA11yLabel,
	} = render(<App />)
	await waitForElementToBeRemoved(() => queryByA11yLabel('Loading...'), { timeout: 5000 })

	// Assert
	await expect(getByText('22')).toBeTruthy()
	await expect(getByText('31')).toBeTruthy()

	// Act
	const btn = getByText('VIC')
	await act(async () => {
		fireEvent.press(btn)
	})

	// Assert
	expect(getByText('Select City')).toBeTruthy()

	// Act
	const btnWA = getByText('WA')
	await act(async () => {
		fireEvent.press(btnWA)
	})

	// Assert
	expect(getByText('Weather App')).toBeTruthy()

	// Act
	await act(async () => {
		fireEvent.press(btn)
	})

	const btnClose = getByA11yLabel('Close')
	await act(async () => {
		fireEvent.press(btnClose)
	})

	// Assert
	expect(getByText('Weather App')).toBeTruthy()
})

test('error handling', async () => {
	// Arrange
	const errorMsg = 'API is down'
	jest.spyOn(axios, 'get').mockImplementation(() => Promise.reject(errorMsg))

	// Act
	const {
		getByText,
		queryByA11yLabel,
	} = render(<App />)
	await waitForElementToBeRemoved(() => queryByA11yLabel('Loading...'))

	// Assert
	const elem = getByText(errorMsg)
	await expect(elem).toBeTruthy()
})