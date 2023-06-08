const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity:false,
    specPattern : ['cypress/integeration/example/standard_user.js',
    'cypress/integeration/example/problem_user.js',
    'cypress/integeration/example/locked_out_user.js']
  },
});
