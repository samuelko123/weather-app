module.exports = {
	clearMocks: true,
	collectCoverage: true,
	coverageDirectory: 'coverage',
	preset: 'jest-expo',
	restoreMocks: true,
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	testEnvironment: 'jest-environment-jsdom',
	testMatch: [
		'<rootDir>/__tests__/**/*.test.js',
	],
	testTimeout: 15 * 1000, // 15s
	transform: {
		'^.+\\.(js|jsx|ts|tsx)$': ['babel-jest'],
	},
}