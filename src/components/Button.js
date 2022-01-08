import React, { useState } from 'react'
import styled from 'styled-components/native'
import { BaseText } from './BaseText'

const Container = styled.Pressable`
	padding: ${props => props.theme.padding.button}px;
    background-color: ${props => props.backgroundColor};
    border: ${props => props.theme.border.button}px solid ${props => props.borderColor};
    border-radius: ${props => props.theme.borderRadius.button}px;
	flex-direction: column;
    justify-content: center;
`

const StyledText = styled(BaseText)`
    color: ${props => props.textColor};
	font-size: ${props => props.theme.fontSize.button}px;
	font-weight: bold;
	height: ${props => props.theme.fontSize.button}px;
`

export const Button = (props) => {
	const {
		onPress,
		text,
		textColor,
		fillColor,
	} = props
	const [finalFillColor, setFinalFillColor] = useState(fillColor)
	const [finalTextColor, setFinalTextColor] = useState(textColor)

	const onPressIn = () => {
		setFinalFillColor(textColor)
		setFinalTextColor(fillColor)
	}

	const onPressOut = () => {
		setFinalFillColor(fillColor)
		setFinalTextColor(textColor)
	}

	return (
		<Container
			onPress={onPress}
			onPressIn={onPressIn}
			onPressOut={onPressOut}
			backgroundColor={finalFillColor}
			borderColor={finalTextColor}
		>
			<StyledText textColor={finalTextColor}>
				{text}
			</StyledText>
		</Container>
	)
}