import React from 'react'
import {
	fireEvent,
	render,
} from '@testing-library/react-native'

import { Wrapper } from '../../src/App'
import { SettingsScreen } from '../../src/screens'
import * as themeSlice from '../../src/redux/slices/themeSlice'

describe('happy path', () => {
	beforeEach(() => {
		global.navMock = {
			navigate: jest.fn(),
		}
	})

	test('navigate', async () => {
		// Arrange
		const screen = render(
			<Wrapper>
				<SettingsScreen navigation={global.navMock} />
			</Wrapper>
		)

		// Act
		const btn = await screen.findByA11yLabel('Go back')
		fireEvent.press(btn)

		// Assert
		expect(global.navMock.navigate).toBeCalledWith('Home')
	})

	test('toggle theme', async () => {
		// Arrange
		const screen = render(
			<Wrapper>
				<SettingsScreen navigation={global.navMock} />
			</Wrapper>
		)
		const setTheme = jest.spyOn(themeSlice, 'setTheme')

		// Act
		const dark = await screen.findByText('Dark')
		fireEvent.press(dark)

		// Assert
		expect(setTheme).toBeCalledWith('dark')

		// Act
		const light = screen.getByText('Light')
		fireEvent.press(light)

		// Assert
		expect(setTheme).toBeCalledWith('light')
	})
})