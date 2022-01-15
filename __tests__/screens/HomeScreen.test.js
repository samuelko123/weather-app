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
				data: [{
					dt: 1000000000,
					max: 30.99,
					min: 22.01,
				}],
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
		expect(screen.getByText('22.0')).toBeTruthy()
		expect(screen.getByText('31.0')).toBeTruthy()
	})

	test('navigate', async () => {
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