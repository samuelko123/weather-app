import React, { useState } from 'react'
import styled from 'styled-components/native'
import { BaseText } from './BaseText'

const ButtonContainer = styled.Pressable`
	height: 12px;
	padding: 12px;
    background-color: ${props => props.backgroundColor};
    border: 2px solid ${props => props.borderColor};
    border-radius: 24px;
    justify-content: center;
`

const ButtonText = styled(BaseText)`
    color: ${props => props.textColor};
	text-align: center;
	font-weight: bold;
	height: 16px;
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
		<ButtonContainer
			onPress={onPress}
			onPressIn={onPressIn}
			onPressOut={onPressOut}
			backgroundColor={finalFillColor}
			borderColor={finalTextColor}
		>
			<ButtonText textColor={finalTextColor}>
				{text}
			</ButtonText>
		</ButtonContainer>
	)
}