/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable no-undef */
 
// scripts/validatePages.js

const fs = require("fs");
const path = require("path");

/**
 * Checks if the file content includes an implementation of BasePage.
 * @param {string} fileContent - The content of the .page.tsx file.
 * @returns {boolean} - True if BasePage is implemented, false otherwise.
 */
function implementsBasePage(fileContent) {
  const basePageRegex =
    /extends\s+ReactPageBaseComponent|implements\s+ReactPageBaseComponent|<ReactPageBaseComponent[\s>]/;

  return basePageRegex.test(fileContent);
}

/**
 * Validates the pages directory structure and content.
 * @param {string} dir - The directory to validate.
 * @param {Array} errors - The array to collect error messages.
 * @param {number} level - The current directory depth level.
 *
 */
function validatePages(dir, errors = [], level = 0) {
  console.log("Validating page folders...");

  const items = fs.readdirSync(dir);
  const dirName = path.basename(dir);

  // Exclude hidden files and folders
  const filteredItems = items.filter(item => !item.startsWith("."));

  const files = filteredItems.filter(item =>
    fs.lstatSync(path.join(dir, item)).isFile(),
  );
  const folders = filteredItems.filter(item =>
    fs.lstatSync(path.join(dir, item)).isDirectory(),
  );

  if (level === 0) {
    // Rule 1: The 'pages' directory must only contain folders
    if (files.length > 0) {
      errors.push(`The 'pages' directory should not contain files directly.`);
    }
    // Recursively validate subfolders at level 1
    folders.forEach(folder => {
      const folderPath = path.join(dir, folder);
      validatePages(folderPath, errors, level + 1);
    });
  } else if (level === 1) {
    // Rule 2: Each folder must contain specific files
    const expectedPageFile = `${dirName}.page.tsx`;
    const expectedStyleFile = `${dirName}.styles.tsx`;

    // Validate presence of required files
    if (!files.includes(expectedPageFile)) {
      errors.push(`Missing file "${expectedPageFile}" in directory "${dir}".`);
    }
    if (!files.includes(expectedStyleFile)) {
      errors.push(`Missing file "${expectedStyleFile}" in directory "${dir}".`);
    }

    // Rule 3: Validate that the .page.tsx file implements ReactPageBaseComponent
    const pageFilePath = path.join(dir, expectedPageFile);
    if (fs.existsSync(pageFilePath)) {
      const fileContent = fs.readFileSync(pageFilePath, "utf-8");
      if (!implementsBasePage(fileContent)) {
        errors.push(
          `File "${pageFilePath}" does not implement a React component called "BasePage".`,
        );
      }
    }
  } else {
    // Level greater than 1 is not allowed
    errors.push(`Subfolders beyond level 1 are not allowed. Found "${dir}".`);
  }

  try {
    if (errors.length > 0) {
      throw new Error(errors.join("\n"));
    } else {
      console.log("Success: All page folders are valid. \n");
    }
  } catch (error) {
    console.error(`Error: ${error.message} \n`);
  }
}

module.exports = { validatePages };
