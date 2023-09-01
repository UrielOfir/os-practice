
// index.js

import { validateMarkdown } from './validate';

// Get path to MD file from GitHub action input
const { MD_FILE_PATH } = process.env; 

const { isMarkdownFileValidated, status } = validateMarkdown(MD_FILE_PATH);

if (!isMarkdownFileValidated) {
  console.error(status);
  process.exit(1);
}

console.log('Markdown file validated successfully');