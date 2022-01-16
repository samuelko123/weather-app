import {
	combineReducers,
	configureStore,
} from '@reduxjs/toolkit'

import {
	persistReducer,
	persistStore,
} from 'redux-persist'

import AsyncStorage from '@react-native-async-storage/async-storage'

import {
	suburbReducer,
	themeReducer,
} from './slices'

const rootReducer = combineReducers({
	suburb: suburbReducer,
	theme: themeReducer,
})

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
	version: 1,
	whitelist: ['suburb', 'theme'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
	reducer: persistedReducer,
})

export const persistor = persistStore(store)