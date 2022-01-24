import React from 'react'
import {
	fireEvent,
	render,
} from '@testing-library/react-native'
import axios from 'axios'

import { Wrapper } from '../../src/App'
import { HomeScreen } from '../../src/screens'

describe('happy path', () => {
	beforeEach(() => {
		global.navMock = {
			navigate: jest.fn(),
		}

		jest.spyOn(axios, 'get').mockImplementation(() => {
			return Promise.resolve({
				data: {
					current: {
						dt: global.timestamp,
						temp: 0,
						wind_speed: 1,
					},
					hourly: [
						{
							dt: 1000000000,
							temp: 0,
						},
						{
							dt: 1000000001,
							temp: 0,
						},
						{
							dt: 1000000002,
							temp: 0,
						},
					],
					daily: [
						{
							dt: 1000000000,
							temp_min: 22.01,
							temp_max: 30.99,
						},
						{
							dt: 1000000001,
							temp_min: 15,
							temp_max: 20,
						},
					],
				},
			})
		})
	})

	test('renders correctly', async () => {
		// Arrange
		const screen = render(
			<Wrapper>
				<HomeScreen navigation={global.navMock} />
			</Wrapper>
		)

		// Assert
		expect(await screen.findByA11yLabel('Search')).toBeTruthy()
		expect(screen.getByText('22°')).toBeTruthy()
		expect(screen.getByText('31°')).toBeTruthy()
	})

	test('navigate to suburb screen', async () => {
		// Arrange
		const screen = render(
			<Wrapper>
				<HomeScreen navigation={global.navMock} />
			</Wrapper>
		)

		// Act
		const btn = await screen.findByA11yLabel('Search')
		fireEvent.press(btn)

		// Assert
		expect(global.navMock.navigate).toBeCalledWith('Suburb')
	})

	test('navigate to settings screen', async () => {
		// Arrange
		const screen = render(
			<Wrapper>
				<HomeScreen navigation={global.navMock} />
			</Wrapper>
		)

		// Act
		const btn = await screen.findByA11yLabel('Settings')
		fireEvent.press(btn)

		// Assert
		expect(global.navMock.navigate).toBeCalledWith('Settings')
	})
})

describe('error handling', () => {
	test('network', async () => {
		// Arrange
		const errorMsg = 'No internet'
		jest.spyOn(axios, 'get').mockImplementation(() => Promise.reject(errorMsg))

		// Act
		const screen = render(
			<Wrapper>
				<HomeScreen navigation={global.navMock} />
			</Wrapper>
		)

		// Assert
		expect(await screen.findByText(errorMsg)).toBeTruthy()
	})
})