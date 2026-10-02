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
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      require('./dicta-shared/videoCleanup')(on)
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://transliterate.dicta.org.il/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
