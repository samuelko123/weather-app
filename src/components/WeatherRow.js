import React from 'react'
import styled from 'styled-components/native'
import { BaseText } from './BaseText'

const Row = styled.View`
	height: ${props => props.theme.height.row}px;
    flex-direction: row;
    justify-content: flex-start;
`

const DateText = styled(BaseText)`
    flex: 1;
`

const MinTempText = styled(BaseText)`
    color: ${props => props.theme.color.minTemp};
    text-align: right;
    flex: 1;
`

const MaxTempText = styled(BaseText)`
    color: ${props => props.theme.color.maxTemp};
    text-align: right;
    flex: 1;
`

export const WeatherRow = (props) => {
	const {
		date,
		min,
		max,
	} = props

	return (
		<Row>
			<DateText>{date}</DateText>
			<MinTempText>{min}</MinTempText>
			<MaxTempText>{max}</MaxTempText>
		</Row>
	)
}