import { message, danger } from 'danger';
const fs = require('fs');

const modifiedMD = danger.git.modified_files.join('- ');
message('Changed Files in this PR: \n - ' + modifiedMD);

const modifiedFiles = danger.git.modified_files.concat(
  danger.git.created_files
);

modifiedFiles.forEach(file => {
  try {
    const data = fs.readFileSync(file, 'utf-8');
    if (data.includes('Tanaka')) {
      message(`This file: ${file} includes Tanaka in it`);
    }
  } catch (error) {
    console.error(error);
  }
});
