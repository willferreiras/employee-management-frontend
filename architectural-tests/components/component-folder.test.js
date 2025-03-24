/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-require-imports */
 
const fs = require("fs");
const path = require("path");

function validateComponentFolders(dir, errors = []) {
  const items = fs.readdirSync(dir);
  const dirName = path.basename(dir);

  // Exclude files and folders that start with '.'
  const filteredItems = items.filter(item => !item.startsWith("."));

  const files = filteredItems.filter(item =>
    fs.lstatSync(path.join(dir, item)).isFile(),
  );
  const folders = filteredItems.filter(item =>
    fs.lstatSync(path.join(dir, item)).isDirectory(),
  );

  if (folders.length > 0) {
    if (files.length > 0) {
      errors.push(`Directory "${dir}" contains both files and folders.`);
    }
    // Recursively validate subfolders
    folders.forEach(folder => {
      validateComponentFolders(path.join(dir, folder), errors);
    });
  } else {
    // Expected filenames
    const expectedComponentFile = `.component.tsx`;
    const expectedStyleFile = `.styles.`;

    // Check for extra or missing files (excluding dot files)
    if (files.length !== 2) {
      errors.push(`Directory "${dir}" should contain exactly two files.`);
    }

    // Validate file names
    if (!files.find(file => file.includes(expectedComponentFile))) {
      errors.push(
        `Missing file "${expectedComponentFile}" in directory "${dir}".`,
      );
    }

    if (!files.find(file => file.includes(expectedStyleFile))) {
      errors.push(`Missing file "${expectedStyleFile}" in directory "${dir}".`);
    }
  }

  return errors;
}

function validateComponentFoldertsAndListErrors(dir, errors = []) {
  validateComponentFolders(dir, errors);

  try {
    if (errors.length > 0) {
      throw new Error(errors.join("\n"));
    } else {
      console.log("Success: All component folders are valid. \n");
    }
  } catch (error) {
    console.error(`Error: ${error.message} \n`);
  }
}

module.exports = { validateComponentFoldertsAndListErrors };
