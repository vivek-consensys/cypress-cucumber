const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'http://www.saucedemo.com',
    specPattern: "**/*.feature",
    supportFile: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const cucumber = require('cypress-cucumber-preprocessor').default
      on('file:preprocessor', cucumber())
    },
  },
});
