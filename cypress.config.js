const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight : 1080,
  viewportWidth : 1980,
  e2e: {
    setupNodeEvents(on, config) {
      
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    excludeSpecPattern : ['**/1-getting-started/*','**/2-advanced-examples/*'],
    experimentalSessionAndOrigin: true,
    
  },
});
