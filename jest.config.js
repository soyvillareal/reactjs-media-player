module.exports = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  transform: {
    '^.+\\.(js|jsx)$': 'esbuild-jest',
  },
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['js', 'jsx'],
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['<rootDir>/jest.setup.js'], // Agrega este archivo
  setupFilesAfterEnv: ['@testing-library/jest-dom', '<rootDir>/test/setupTests.js'],
  coverageReporters: ['lcov', 'json', 'clover', 'text'],
  coveragePathIgnorePatterns: ['node_modules', 'demo', 'examples', 'lib', 'scripts', 'types', 'dist', 'coverage'],
  reporters: ['default', ['jest-junit', { outputDirectory: 'coverage', outputName: 'report.xml' }]],
  testMatch: ['<rootDir>/test/**/*.spec.(js|jsx)', '<rootDir>/test/**/*.spec.(js|jsx)'],
};
