import {
	combineReducers,
	configureStore,
} from '@reduxjs/toolkit'

import { cityReducer } from './slices'

const rootReducer = combineReducers({
	city: cityReducer,
})

export const store = configureStore({
	reducer: rootReducer,
})