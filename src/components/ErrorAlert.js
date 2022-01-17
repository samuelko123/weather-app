import React from 'react'
import styled from 'styled-components/native'
import { BaseText } from './BaseText'

export const Container = styled.View`
    background-color: ${props => props.theme.color.error};
    padding: ${props => props.theme.base.spacing}px;
    border-width: ${props => props.theme.base.borderWidth}px;
	border-color: ${props => props.theme.color.onError};
    border-radius: ${props => props.theme.base.borderRadius}px;
`

export const StyledText = styled(BaseText)`
    color: ${props => props.theme.color.onError};
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