import React from 'react'
import moment from 'moment'
import { FlatList } from 'react-native'
import { WeatherRow } from './index'

export const WeatherList = (props) => {
	const { data } = props

	return (
		<FlatList
			data={data}
			keyExtractor={(item) => item.dt}
			renderItem={({ item }) => (
				<WeatherRow
					date={moment.unix(item.dt).format('DD/MM ddd')}
					min={Math.round(item.min)}
					max={Math.round(item.max)}
				/>
			)}
			ListHeaderComponent={
				<WeatherRow
					date='Date'
					min='Min'
					max='Max'
				/>
			}
		/>
	)
}