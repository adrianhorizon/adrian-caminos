/**
 * @file Jest configuration.
 */

module.exports = {
    rootDir: 'src/test',
    testRegex: '/src/test/.*test\\.js$',
    setupFiles: ['<rootDir>/setup.js'],
    moduleNameMapper: {
        "^.+\\.(css|less|scss)$": "babel-jest"
      }
};