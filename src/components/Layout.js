import React from 'react'
import styled, { ThemeProvider } from 'styled-components/native'
import { SafeAreaView } from 'react-native'
import { Dimensions } from 'react-native'

const RootContainer = styled.View`
	background-color: ${props => props.theme.color.background};
	min-height: ${Dimensions.get('window').height}px;
    flex-direction: column;
`

export const Layout = (props) => {
	const {
		children,
		theme,
	} = props

	return (
		<ThemeProvider theme={theme}>
			<SafeAreaView>
				<RootContainer>
					{children}
				</RootContainer>
			</SafeAreaView>
		</ThemeProvider>
	)
}