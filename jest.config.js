module.exports = {
  testEnvironment: 'jsdom', // Simulate browser environment
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest', // Use Babel for transpiling
  },
};
