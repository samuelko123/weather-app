import { createSlice } from '@reduxjs/toolkit'

const themeSlice = createSlice({
	name: 'theme',
	initialState: {
		name: 'light',
	},
	reducers: {
		setTheme: (state, action) => {
			state.name = action.payload
		},
	},
})

export const {
	setTheme,
} = themeSlice.actions
export const themeReducer = themeSlice.reducer