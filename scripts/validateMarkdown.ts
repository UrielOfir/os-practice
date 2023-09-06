import * as fs from 'fs';
import {default as markdownlint} from 'markdownlint';
import { Octokit } from "octokit";
export default async function run(){

  try {
    console.log('Validating docs...');

    const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN, request: { fetch} });
    const { data: files } = await octokit.rest.pulls.listFiles({
      owner: 'owner',
      repo: 'repo',
      pull_number: Number(process.env.PR_NUMBER)  
    });
    
    console.log(files);
    
    
    // Filter Markdown files in docs folder
    const docsFiles = files.filter(file => {
      console.log(file);
      return file.filename.includes('/docs/people/') &&
            file.filename.endsWith('.md');
    });
    
    // Validate each file
    for (let file of docsFiles) {
      const content = fs.readFileSync(file as unknown as string, 'utf8');
      // Rules 
      const result = markdownlint.sync({
        strings: {
          content 
        },
        config: {
          "MD025": false, // Allow multiple top level headers 
        }
      });
    
      if (!!result.length) {
        // Print markdownlint errors  
        console.error(file, result);
        // Exit with failing code
        process.exit(1);
      }
    }
    
    console.log('All Markdown files look valid!');
  } catch (error) {
    console.log(error);
    
  }
}

run().then(console.log);