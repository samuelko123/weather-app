import {
	combineReducers,
	configureStore,
} from '@reduxjs/toolkit'

import {
	persistReducer,
	persistStore,
} from 'redux-persist'

import AsyncStorage from '@react-native-async-storage/async-storage'

import { cityReducer } from './slices'

const rootReducer = combineReducers({
	city: cityReducer,
})

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
	version: 1,
	whitelist: ['city'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
})

export const persistor = persistStore(store)