import { createSlice } from '@reduxjs/toolkit'

const suburbSlice = createSlice({
	name: 'suburb',
	initialState: {
		lat: -37.820555555,
		lon: 144.961388888,
		name: 'Melbourne',
	},
	reducers: {
		setSuburb: (state, action) => {
			return { ...action.payload }
		},
	},
})

export const {
	setSuburb,
} = suburbSlice.actions
export const suburbReducer = suburbSlice.reducer