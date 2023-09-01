
import fs from 'fs';
import demands from './demands';
import { ValidateMarkdownResponse } from './interface';
import { remark } from 'remark';

export function validateMarkdown(mdFilePath?: string): ValidateMarkdownResponse {
  if (!mdFilePath) {
    console.error('[validateMarkdown] - Error: md file path cannot be empty');
    process.exit(0);
  }
  const mdFile = remark().processSync(mdFilePath);
  console.log({mdFile});
  
  for (let demand of demands) {
    // TODO: create test...

    // if (!meetsDemand(mdFileContent, demand))
    return {
      isMarkdownFileValidated: false,
      status: 'reason'
    }
      
  }
  // all md file tests pass
  return {
    isMarkdownFileValidated:true,
  }
}
