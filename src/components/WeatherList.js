import React from 'react'
import styled from 'styled-components/native'
import moment from 'moment'
import { FlatList } from 'react-native'
import { BaseText } from './BaseText'
import { Row } from './Row'

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

export const WeatherList = (props) => {
	const { data } = props

	return (
		<FlatList
			data={data}
			keyExtractor={(item) => item.dt}
			renderItem={({ item }) => (
				<Row>
					<DateText>{moment.unix(item.dt).format('DD/MM ddd')}</DateText>
					<MinTempText>{Math.round(item.min)}</MinTempText>
					<MaxTempText>{Math.round(item.max)}</MaxTempText>
				</Row>
			)}
		/>
	)
}