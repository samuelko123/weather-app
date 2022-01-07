import React from 'react'
import styled from 'styled-components/native'
import { BaseText } from './BaseText'

export const Container = styled.View`
    background-color: ${props => props.theme.errorBackground};
    padding: 12px 12px;
    border: 1px solid ${props => props.theme.errorBorder};
    border-radius: 6px;
`

export const StyledText = styled(BaseText)`
    color: ${props => props.theme.errorText};
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