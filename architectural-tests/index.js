/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-require-imports */
 
const path = require("path");
const {
  validateComponentFoldertsAndListErrors,
} = require("./components/component-folder.test.js");
const { validatePages } = require("./pages/validate-page.test.js");

const componentsDir = path.join(process.cwd(), "./src/components");
const pagesDir = path.join(process.cwd(), "./src/pages");

// Start validation
validateComponentFoldertsAndListErrors(componentsDir);
validatePages(pagesDir);
process.exit(0);
