import { createSlice } from '@reduxjs/toolkit'

const citySlice = createSlice({
	name: 'city',
	initialState: {
		name: 'VIC',
	},
	reducers: {
		setCity: (state, action) => {
			state.name = action.payload
		},
	},
})

export const {
	setCity,
} = citySlice.actions
export const cityReducer = citySlice.reducer