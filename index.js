


// packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');

//array of questions for user input
const questions = [];

//function to get the answers 

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'Enter the title of the project.',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a description of the project.',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions.',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Enter usage instructions.',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Enter contribution instructions.',
      },
      {
        type: 'input',
        name: 'test',
        message: 'Enter testing instructions.',
      },
      {
        type: 'input',
        name: 'license',
        message: 'Choose your license (this needs to be checkbox, and also get badge btw)',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter a Github username to associate with this project.',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter an email address to associate with this project.',
      },

    ]);
  };



//function to write README file
const generateREADME = ({ title, description, installation, usage, contribution, test, license, github, email }) =>
    `<h1>${title}</h1>
    <h2 id="Description">Description</h2>
    ${description}
    <h2>Table Of Contents</h2>
    <a href ="#Description">Description</a> &nbsp
    <a href ="#Installation">Installation</a> &nbsp
    <a href ="#Usage">Usage</a> &nbsp
    <a href ="#License">License</a> &nbsp
    <a href ="#Contributing">Contributing</a> &nbsp 
    <a href ="#Tests">Tests</a> &nbsp
    <a href ="#Questions">Questions</a> &nbsp
    <h2 id="Installation">Installation</h2>
    ${installation}
    <h2 id="Usage">Usage</h2>
    ${usage}
    <h2 id="License">License</h2>
    ${license}
    <h2 id="Contributing">Contributing</h2>
    ${contribution}
    <h2 id="Tests">Tests</h2>
    ${test}
    <h2 id="Questions">Questions</h2>
    ${github}<br>
    ${email}    
    `;


// TODO: Create a function to initialize app
function init() {
    promptUser(questions)
        .then((answers) => fs.writeFileSync('README.md', generateREADME(answers)))
        .catch((err) => console.error(err));
}

// Function call to initialize app
init();



/*
sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

project title
THEN this is displayed as the title of the README

description, installation instructions, usage information, contribution guidelines, and test instructions
Description, Installation, Usage, Contributing, and Tests

license for my application from a list of options
THEN a badge for that license is added near the top of the README 
a notice is added to the section of the README entitled License that explains which license the application is covered under

GitHub username
added to the section of the README entitled Questions,
with a link to my GitHub profile

email address
THEN this is added to the section of the README entitled Questions, 
with instructions on how to reach me with additional questions

WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```*/
