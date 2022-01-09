import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
	HomeScreen,
	SelectCityScreen,
} from './screens'
import { Layout } from './components'
import { theme } from './styles'

const Stack = createNativeStackNavigator()

export const App = () => {
	return (
		<Layout theme={theme}>
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
							gestureEnabled: true,
							gestureDirection: 'vertical',
						}}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</Layout>

	)
}