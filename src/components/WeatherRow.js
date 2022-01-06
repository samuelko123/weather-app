import React from 'react'
import styled from 'styled-components/native'
import { BaseText } from './index'

const Container = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    align-items: baseline;
    height: 3rem;    
`

const DateText = styled(BaseText)`
    flex: 1;
`

const MinTempText = styled(BaseText)`
    color: ${props => props.theme.minTemp};
    text-align: right;
    flex: 1;
`

const MaxTempText = styled(BaseText)`
    color: ${props => props.theme.maxTemp};
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
		<Container>
			<DateText>{date}</DateText>
			<MinTempText>{min}</MinTempText>
			<MaxTempText>{max}</MaxTempText>
		</Container>
	)
}