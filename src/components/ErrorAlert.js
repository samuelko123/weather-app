import React from 'react'
import styled from 'styled-components/native'
import { BaseText } from './BaseText'

export const Container = styled.View`
    background-color: ${props => props.theme.color.errorBackground};
    padding: ${props => props.theme.padding.alert}px;
    border-width: ${props => props.theme.borderWidth.alert}px;
	border-color: ${props => props.theme.color.errorBorder};
    border-radius: ${props => props.theme.borderRadius.alert}px;
`

export const StyledText = styled(BaseText)`
    color: ${props => props.theme.color.errorText};
`

export const ErrorAlert = (props) => {
	const { children } = props

	return (
		<Container>
			<StyledText>
				{children}
			</StyledText>
		</Container>
	)
}