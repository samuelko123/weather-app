import { createSlice } from '@reduxjs/toolkit'

const themeSlice = createSlice({
	initialState: {
		color: 'light',
	},
	name: 'theme',
	reducers: {
		setTheme: (state, action) => {
			state.color = action.payload
		},
	},
})

export const {
	setTheme,
} = themeSlice.actions
export const themeReducer = themeSlice.reducer