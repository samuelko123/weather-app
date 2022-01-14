import { createSlice } from '@reduxjs/toolkit'

const citySlice = createSlice({
	name: 'city',
	initialState: {
		name: 'Melbourne',
		lat: -37.820555555,
		lon: 144.961388888,
	},
	reducers: {
		setCity: (state, action) => {
			return { ...action.payload }
		},
	},
})

export const {
	setCity,
} = citySlice.actions
export const cityReducer = citySlice.reducer