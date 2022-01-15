import { createSlice } from '@reduxjs/toolkit'

const citySlice = createSlice({
	initialState: {
		lat: -37.820555555,
		lon: 144.961388888,
		name: 'Melbourne',
	},
	name: 'city',
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