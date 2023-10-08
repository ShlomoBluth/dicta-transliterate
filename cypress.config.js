const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: true,
  projectId: 'eh218b',
  screenshotOnRunFailure: false,
  defaultCommandTimeout: 10000,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'dicta-shared/reporter-config.json',
  },
  env: {
    DEV_URL: '',
    LIVE_URL: 'https://transliterate.dicta.org.il/',
    TOOL_TESTS: false,
    REQUESTS_TESTS: true,
    RECORD_KEY: 'de47995c-194f-49fa-91c7-8d56eec4221a',
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://transliterate.dicta.org.il/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
