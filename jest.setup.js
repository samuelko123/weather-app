import '@testing-library/jest-native/extend-expect'

import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock'

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage)
jest.mock('redux-persist/integration/react', () => ({
	PersistGate: props => props.children,
}))