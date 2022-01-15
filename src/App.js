import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import {
	HomeScreen,
	SelectCityScreen,
} from './screens'
import { Layout } from './components'
import { theme } from './styles'
import {
	persistor,
	store,
} from './redux/store'

const Stack = createNativeStackNavigator()

export const Wrapper = (props) => {
	const { children } = props

	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Layout theme={theme}>
					{children}
				</Layout>
			</PersistGate>
		</Provider>
	)
}

export const App = () => {
	return (
		<Wrapper>
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerShown: false,
					}}
					initialRouteName="Home"
				>
					<Stack.Screen name="Home" component={HomeScreen} />
					<Stack.Screen
						name="Select City"
						component={SelectCityScreen}
						options={{
							gestureDirection: 'vertical',
							gestureEnabled: true,
						}}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</Wrapper>
	)
}