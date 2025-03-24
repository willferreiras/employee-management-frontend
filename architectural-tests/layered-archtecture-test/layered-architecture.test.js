/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-require-imports */
 // __tests__/validateLayeredArchitecture.test.js

const fs = require("fs");
const path = require("path");
const babelParser = require("@babel/parser");
const traverse = require("@babel/traverse").default;

/**
 * Recursively collects all file paths in a directory that match the given extensions.
 * @param {string} dir - Directory to search.
 * @param {Array<string>} extensions - File extensions to include.
 * @returns {Array<string>} - List of file paths.
 */
function getAllFiles(dir, extensions, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.lstatSync(fullPath);

    if (stat.isDirectory()) {
      getAllFiles(fullPath, extensions, fileList);
    } else if (extensions.includes(path.extname(file))) {
      fileList.push(fullPath);
    }
  });

  return fileList;
}

/**
 * Parses a file and extracts all import source values.
 * @param {string} filePath - Path to the file.
 * @returns {Array<string>} - List of import source strings.
 */
function getImportSources(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ast = babelParser.parse(code, {
    sourceType: "module",
    plugins: [
      "typescript",
      "jsx",
      ["decorators", { decoratorsBeforeExport: true }],
      "classProperties",
      "classPrivateProperties",
    ],
  });

  const importSources = [];

  traverse(ast, {
    ImportDeclaration({ node }) {
      importSources.push(node.source.value);
    },
    CallExpression({ node }) {
      if (
        node.callee.type === "Import" &&
        node.arguments.length &&
        node.arguments[0].type === "StringLiteral"
      ) {
        importSources.push(node.arguments[0].value);
      }
    },
  });

  return importSources;
}

test("Services should not depend on page components", () => {
  const servicesDir = path.join(process.cwd(), "src", "services");
  const pagesDir = path.join(process.cwd(), "src", "pages");

  const serviceFiles = getAllFiles(servicesDir, [".js", ".jsx", ".ts", ".tsx"]);

  const errors = [];

  serviceFiles.forEach(serviceFile => {
    const importSources = getImportSources(serviceFile);

    importSources.forEach(importSource => {
      // Resolve the absolute path of the import
      const importPath = path.resolve(path.dirname(serviceFile), importSource);

      // Normalize paths for comparison
      const normalizedImportPath = path.normalize(importPath);
      const normalizedPagesDir = path.normalize(pagesDir);

      // Check if the import is within src/pages
      if (normalizedImportPath.startsWith(normalizedPagesDir)) {
        const importedFileName = path.basename(importPath);

        // Check if the imported file contains '.page' in the name
        if (importedFileName.includes(".page")) {
          errors.push(
            `Invalid dependency from "${serviceFile}" to "${importPath}"`,
          );
        }
      }
    });
  });

  if (errors.length > 0) {
    const errorMessage = errors.join("\n");
    throw new Error(`Layered architecture violations found:\n${errorMessage}`);
  }
});

test("Pages should not depend on services", () => {
  const servicesDir = path.join(process.cwd(), "src", "services");
  const pagesDir = path.join(process.cwd(), "src", "pages");

  const pageFiles = getAllFiles(pagesDir, [".js", ".jsx", ".ts", ".tsx"]);

  const errors = [];

  for (const pageFile of pageFiles) {
    const importSources = getImportSources(pageFile);

    for (const importSource of importSources) {
      const importPath = path.resolve(path.dirname(pageFile), importSource);

      const normalizedImportPath = path.normalize(importPath);
      const normalizedServicesDir = path.normalize(servicesDir);

      // If the file name contains '.container.', ignore it
      const skip =
        pageFile.includes(".container.") ||
        pageFile.includes(".usecase.") ||
        pageFile.includes(".hook.") ||
        pageFile.includes(".type.");

      // Check if the import is within src/services
      if (normalizedImportPath.startsWith(normalizedServicesDir) && !skip) {
        errors.push(`Invalid dependency from "${pageFile}" to "${importPath}"`);
      }
    }
  }

  if (errors.length > 0) {
    const errorMessage = errors.join("\n");
    throw new Error(`Layered architecture violations found:\n${errorMessage}`);
  }
});
