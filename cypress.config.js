const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl : "https://www.google.com/",
    
    projectId: "us37id"  ,

    "video":false  , //vıdeo kaydetmez tgestler daha hılı calısır

  //  "retries":2  //test fail olunca 2 kez daha calısır
    


  },
});
