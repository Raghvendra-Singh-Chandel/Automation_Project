const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight : 1080,
  viewportWidth : 1980,
  e2e: {
    setupNodeEvents(on, config) {
      
    },
  },
});
