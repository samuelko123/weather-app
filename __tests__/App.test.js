import React from 'react'
import { App } from '../src/App'
import {
	fireEvent,
	render,
	waitForElementToBeRemoved,
} from '@testing-library/react-native'
import axios from 'axios'

describe('happy path', () => {
	afterEach(() => {
		jest.restoreAllMocks()
	})

	test('renders correctly', async () => {
		// Arrange
		jest.spyOn(axios, 'get').mockImplementation((url) => {
			if (url.includes('cities')) {
				return Promise.resolve({
					data: [{
						name: 'Sydney',
						lat: -33.865143,
						lon: 151.209900,
					}, {
						name: 'Perth',
						lat: -31.953512,
						lon: 115.857048,
					}],
				})
			} else {
				return Promise.resolve({
					data: [{
						dt: 1000000000,
						min: 22.01,
						max: 30.99,
					}],
				})
			}
		})

		// Act
		const {
			getByText,
			getByPlaceholderText,
			getByA11yLabel,
			queryByA11yLabel,
		} = render(<App />)
		await waitForElementToBeRemoved(() => queryByA11yLabel('Loading...'), { timeout: 5000 })

		// Assert
		await expect(getByText('22')).toBeTruthy()
		await expect(getByText('31')).toBeTruthy()

		// Act
		fireEvent.press(getByText('Melbourne'))

		// Assert
		await expect(getByPlaceholderText('Search')).toBeTruthy()

		// Act
		fireEvent.changeText(getByPlaceholderText('Search'), 'Sydney')
		await waitForElementToBeRemoved(() => queryByA11yLabel('Loading...'), { timeout: 5000 })

		// Assert
		await expect(getByText('Perth')).toBeTruthy()

		// Act
		fireEvent.press(getByText('Perth'))
		await waitForElementToBeRemoved(() => queryByA11yLabel('Loading...'), { timeout: 5000 })

		// Assert
		await expect(getByText('22')).toBeTruthy()

		// Act
		fireEvent.press(getByText('Perth'))
		fireEvent.press(getByA11yLabel('Close'))

		// Assert
		await expect(getByText('22')).toBeTruthy()
	})

	test('No cities found', async () => {
		// Arrange
		jest.spyOn(axios, 'get').mockImplementation((url) => {
			if (url.includes('cities')) {
				return Promise.resolve({
					data: [],
				})
			} else {
				return Promise.resolve({
					data: [{
						dt: 1000000000,
						min: 22.01,
						max: 30.99,
					}],
				})
			}
		})

		const {
			getByText,
			getByPlaceholderText,
			queryByA11yLabel,
		} = render(<App />)
		await waitForElementToBeRemoved(() => queryByA11yLabel('Loading...'), { timeout: 5000 })

		// Act
		fireEvent.press(getByText('Perth'))
		fireEvent.changeText(getByPlaceholderText('Search'), '')
		await new Promise(resolve => setTimeout(resolve, 1000))

		// Assert
		await expect(getByText('No results found')).toBeTruthy()
	})
})

describe('error handling', () => {
	afterEach(() => {
		jest.restoreAllMocks()
	})

	test('Home Screen', async () => {
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
		await expect(getByText(errorMsg)).toBeTruthy()
	})

	test('Select City Screen', async () => {
		// Arrange
		const errorMsg = 'No internet'
		jest.spyOn(axios, 'get').mockImplementation(() => Promise.reject(errorMsg))

		const {
			getAllByText,
			getByA11yLabel,
			getByPlaceholderText,
			queryByA11yLabel,
		} = render(<App />)
		await waitForElementToBeRemoved(() => queryByA11yLabel('Loading...'))

		// Act
		fireEvent.press(getByA11yLabel('Search'))
		await new Promise(resolve => setTimeout(resolve, 1000))
		fireEvent.changeText(getByPlaceholderText('Search'), 'Brisbane')
		await new Promise(resolve => setTimeout(resolve, 1000))

		// Assert
		expect(getAllByText(errorMsg)).toHaveLength(2)
	})
})