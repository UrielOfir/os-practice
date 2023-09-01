
import fs from 'fs';
// import remark
import demands from './demands';
import { ValidateMarkdownResponse } from './interface';


function meetsDemand(mdFile: string, demand: string){
  // TODO
}

export function validateMarkdown(filePath: string): ValidateMarkdownResponse {
  const mdFileContent = fs.readFileSync(filePath, 'utf8');


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
