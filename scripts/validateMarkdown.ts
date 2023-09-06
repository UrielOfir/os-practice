// import * as fs from 'fs';
// import {default as markdownlint} from 'markdownlint';
import { config } from 'dotenv';


import { Octokit } from "@octokit/rest";

export default async function mdFilesValidator(){
  config();
  try {
    console.log('Validating docs...');
    const fetch = await import('node-fetch').then(mod => mod.default)
    const { GITHUB_TOKEN, PR_NUMBER, OWNER, REPO } = process.env;


    console.log(process.env.GITHUB_TOKEN, PR_NUMBER, OWNER, REPO );
    
    const octokit = new Octokit({ 
      auth: GITHUB_TOKEN, 
      request: { fetch: fetch },
      userAgent: 'maakag v1.0.0',
    });

    await octokit.request("GET /");
    const prFiles = (await octokit.pulls.get()).data

    console.log({prFiles});
    console.log('All Markdown files look valid!');
    
    return prFiles
  } catch (error) {
    console.error('there was an error: ', error.message, error.stack, 'Please check your environment variables and try again');

    process.exit(1);
  }
}

        // console.log(`octokit response data: ${docsFiles}`);

        // Filter Markdown files in docs folder
  
    // const mdFiles = docsFiles.filter(({ filename }) => filename.includes('/docs/people/') && filename.endsWith('.md'));
    
    
    // Validate each file
    // for (let md of mdFiles) {
    //   const content = fs.readFileSync(file as unknown as string, 'utf8');
    //   // Rules 
    //   const result = markdownlint.sync({
    //     strings: {
    //       content 
    //     },
    //     config: {
    //       "MD025": false, // Allow multiple top level headers 
    //     }
    //   });
    
    //   if (!!result.length) {
    //     // Print markdownlint errors  
    //     console.error(file, result);
    //     // Exit with failing code
    //     process.exit(1);
    //   }
    // }  

mdFilesValidator().then(console.log);
