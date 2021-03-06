import React from 'react'
import {
	fireEvent,
	render,
} from '@testing-library/react-native'
import axios from 'axios'

import { Wrapper } from '../../src/App'
import { SuburbScreen } from '../../src/screens'

describe('happy path', () => {
	beforeEach(() => {
		global.navMock = {
			navigate: jest.fn(),
		}

		jest.spyOn(axios, 'get').mockImplementation(() => {
			return Promise.resolve({
				data: [{
					lat: -37,
					lon: 144,
					name: 'Melbourne',
					postcode: 3000,
					state: 'VIC',
				}, {
					lat: -37,
					lon: 144,
					name: 'Melbourne Airport',
					postcode: 3045,
					state: 'VIC',
				}],
			})
		})
	})

	test('renders correctly', async () => {
		// Arrange
		const screen = render(
			<Wrapper>
				<SuburbScreen navigation={global.navMock} />
			</Wrapper>
		)

		// Assert
		expect(await screen.findByText('No results found')).toBeTruthy()
	})

	test('navigate', async () => {
		// Arrange
		const screen = render(
			<Wrapper>
				<SuburbScreen navigation={global.navMock} />
			</Wrapper>
		)

		// Act
		const btn = await screen.findByA11yLabel('Go back')
		fireEvent.press(btn)

		// Assert
		expect(global.navMock.navigate).toBeCalledWith('Home')
	})

	test('type to search', async () => {
		// Arrange
		const screen = render(
			<Wrapper>
				<SuburbScreen navigation={global.navMock} />
			</Wrapper>
		)

		// Act
		fireEvent.changeText(screen.getByRole('search'), 'Melbourne')

		// Assert
		expect(await screen.findByText('Melbourne Airport')).toBeTruthy()
	})

	test('press a suburb', async () => {
		// Arrange
		const screen = render(
			<Wrapper>
				<SuburbScreen navigation={global.navMock} />
			</Wrapper>
		)

		// Act
		fireEvent.changeText(screen.getByRole('search'), 'Melbourne')
		fireEvent.press(await screen.findByText('Melbourne Airport'))

		// Assert
		expect(global.navMock.navigate).toBeCalledWith('Home')
	})
})

describe('error handling', () => {
	test('network', async () => {
		// Arrange
		const errorMsg = 'No internet'
		jest.spyOn(axios, 'get').mockImplementation(() => Promise.reject(errorMsg))

		const screen = render(
			<Wrapper>
				<SuburbScreen navigation={global.navMock} />
			</Wrapper>
		)

		// Act
		fireEvent.changeText(screen.getByRole('search'), 'Melbourne')

		// Assert
		expect(await screen.findByText(errorMsg)).toBeTruthy()
	})
})