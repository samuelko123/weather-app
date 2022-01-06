import React from 'react'
import { App } from '../src/App'
import {
	fireEvent,
	render,
	waitForElementToBeRemoved,
} from '@testing-library/react-native'
import { act } from 'react-test-renderer'

test('renders correctly', async () => {
	// Arrange
	global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
		json: () =>
			Promise.resolve([{
				dt: 1000000000,
				min: 22.01,
				max: 30.99,
			}]),
	}))

	// Act
	const {
		getByText,
		queryByA11yLabel,
	} = render(<App />)
	await waitForElementToBeRemoved(() => queryByA11yLabel('Loading...'), { timeout: 5000 })

	// Assert
	const elemMin = getByText('22')
	await expect(elemMin).toBeTruthy()

	const elemMax = getByText('31')
	await expect(elemMax).toBeTruthy()
})

test('button click', async () => {
	// Arrange
	global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
		json: () =>
			Promise.resolve([{
				dt: 1000000000,
				min: 22.01,
				max: 30.99,
			}]),
	}))
	const {
		getByText,
		queryByA11yLabel,
	} = render(<App />)
	await waitForElementToBeRemoved(() => queryByA11yLabel('Loading...'))
	const btn = getByText('VIC')

	// Act
	await act(async () => {
		fireEvent.press(btn)
	})

	// Assert
	await expect(btn).toHaveTextContent('WA')

	// Act
	await act(async () => {
		fireEvent.press(btn)
	})

	// Assert
	await expect(btn).toHaveTextContent('VIC')
})

test('error handling', async () => {
	// Arrange
	const errorMsg = 'API is down'
	global.fetch = jest.fn().mockImplementation(() => Promise.reject(errorMsg))

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