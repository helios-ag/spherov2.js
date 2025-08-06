// jest.config.js
module.exports = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov', 'text'],
  testEnvironment: 'node', // or 'jsdom' depending on your project
};
