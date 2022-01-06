module.exports = {
	clearMocks: true,
	collectCoverage: true,
	coverageDirectory: 'coverage',
	maxWorkers: '50%',
	preset: 'react-native',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	testEnvironment: 'jest-environment-jsdom',
	testMatch: [
		'<rootDir>/__tests__/**/*.test.js',
	],
	testTimeout: 10000, // 10s
	transform: {
		'^.+\\.(js|jsx|ts|tsx)$': ['babel-jest'],
	},
}