import React from 'react'
import {
	fireEvent,
	render,
} from '@testing-library/react-native'
import axios from 'axios'

import { Wrapper } from '../../src/App'
import { SelectCityScreen } from '../../src/screens'

describe('happy path', () => {
	beforeEach(() => {
		global.navMock = {
			navigate: jest.fn(),
		}

		jest.spyOn(axios, 'get').mockImplementation(() => {
			return Promise.resolve({
				data: [{
					name: 'Melbourne',
					lat: -37,
					lon: 144,
				}, {
					name: 'Melbourne Airport',
					lat: -37,
					lon: 144,
				}],
			})
		})
	})

	test('renders correctly', async () => {
		// Arrange
		const screen = render(
			<Wrapper>
				<SelectCityScreen navigation={global.navMock} />
			</Wrapper>
		)

		// Assert
		expect(await screen.findByText('No results found')).toBeTruthy()
	})

	test('navigate', async () => {
		// Arrange
		const screen = render(
			<Wrapper>
				<SelectCityScreen navigation={global.navMock} />
			</Wrapper>
		)

		// Act
		const btn = await screen.findByA11yLabel('Close')
		fireEvent.press(btn)

		// Assert
		expect(global.navMock.navigate).toBeCalledWith('Home')
	})

	test('type to search', async () => {
		// Arrange
		const screen = render(
			<Wrapper>
				<SelectCityScreen navigation={global.navMock} />
			</Wrapper>
		)

		// Act
		fireEvent.changeText(screen.getByPlaceholderText('Search'), 'Melbourne')

		// Assert
		expect(await screen.findByText('Melbourne Airport')).toBeTruthy()
	})

	test('press a city', async () => {
		// Arrange
		const screen = render(
			<Wrapper>
				<SelectCityScreen navigation={global.navMock} />
			</Wrapper>
		)

		// Act
		fireEvent.changeText(screen.getByPlaceholderText('Search'), 'Melbourne')
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
				<SelectCityScreen navigation={global.navMock} />
			</Wrapper>
		)

		// Act
		fireEvent.changeText(screen.getByPlaceholderText('Search'), 'Melbourne')

		// Assert
		expect(await screen.findByText(errorMsg)).toBeTruthy()
	})
})