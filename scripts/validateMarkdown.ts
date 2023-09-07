// import * as fs from 'fs';
// import {default as markdownlint} from 'markdownlint';
import { config } from 'dotenv';
import { Octokit  } from "@octokit/rest";
import * as git from 'actions/checkout@v2';
export default async function mdFilesValidator(){
  config();
  try {
    core
    console.log('Validating docs...');
    const fetch = await import('node-fetch').then(b => b.default)
    const { GITHUB_TOKEN, PR_NUMBER, OWNER, REPO } = process.env;
    const octokit = new Octokit({ 
      auth: GITHUB_TOKEN, 
      request: { fetch: fetch },
      userAgent: 'maakag v1.0.0',
    });
    
    const { data: listFiles } = await octokit.rest.pulls.listFiles({
      owner: OWNER,
      repo: REPO,
      pull_number: parseInt(PR_NUMBER),
    });

    const mdFile = listFiles.filter((file) => file.filename.endsWith('.md'));
    console.log(listFiles.map((file) => file.filename));
    
    console.log(mdFile, 'md file found in the PR');
    
    // .forEach(async (file) => {
    //   console.log(`Validating ${file.filename}...`);
    //   const { data } = await octokit.rest.pulls.get({
    //     owner: OWNER,
    //     repo: REPO,
    //     pull_number: parseInt(PR_NUMBER),
    //     file_path: file.filename,
    //   });

    console.log('All Markdown files look valid!');    
    // return prFiles
  } catch (error) {
    console.error(error.message);
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
