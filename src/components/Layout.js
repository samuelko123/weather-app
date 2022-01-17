import React from 'react'
import styled, { ThemeProvider } from 'styled-components/native'
import { SafeAreaView } from 'react-native'
import { Dimensions } from 'react-native'
import {
	shallowEqual,
	useSelector,
} from 'react-redux'
import {
	darkTheme,
	lightTheme,
} from '../styles'

const RootContainer = styled.View`
	min-height: ${Dimensions.get('window').height}px;
    flex-direction: column;
`

export const Layout = (props) => {
	const { children } = props

	const theme = useSelector(state => state.theme, shallowEqual)

	return (
		<ThemeProvider theme={theme.name === 'light' ? lightTheme : darkTheme}>
			<SafeAreaView>
				<RootContainer>
					{children}
				</RootContainer>
			</SafeAreaView>
		</ThemeProvider>
	)
}