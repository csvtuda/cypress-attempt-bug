const { writeFileSync } = require("node:fs");

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      on("after:run", (results) => {
        writeFileSync("results.json", JSON.stringify(results, null, 2));
      });
    },
    retries: 2
  },
}
