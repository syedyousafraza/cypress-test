const { defineConfig } = require("cypress");




module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.saucedemo.com',

    defaultCommandTimeout: 10000,
    pageLoadTimeout: 30000,
    chromeWebSecurity: false,
    video: false, // Enable video recording (default is true in CI environments)
    screenshotOnRunFailure: true,

    env: {
      username: 'testuser',
      password: 'testpassword',
    },



  },
});
