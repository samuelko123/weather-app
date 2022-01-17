import { createSlice } from '@reduxjs/toolkit'

const themeSlice = createSlice({
	initialState: {
		name: 'light',
	},
	name: 'theme',
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