


// packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');

//list of licences

const licenseList = [
"None",
"Apache License 2.0",
"GNU General Public License v3.0",
"MIT License",
"BSD 2-Clause 'Simplified' License",
"BSD 3-Clause 'New' or 'Revised' License",
"Boost Software License 1.0",
"Creative Commons Zero v1.0 Universal",
"Eclipse Public License 2.0",
"GNU Affero General Public License v3.0",
"GNU General Public License v2.0",
"GNU Lesser General Public License v2.1",
"Mozilla Public License 2.0",
"The Unlicense "
]


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

        type: 'checkbox',
        name: 'license',
        message: 'Choose license.',
        choices: licenseList,
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter a Github username to associate with this project.',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter an Email address to associate with this project.',
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
    To check for any updates and fixes, please go to the github account at: 
    <a href ="https://github.com/${github}" target="_blank">github.com/${github}</a><br>
    For any other questions please send an email to:
    <a href="mailto:${email}">${email}</a><br>   
    `;


// function to initialize app

function init() {
    promptUser()
        .then((answers) => fs.writeFileSync('./generatedREADME/README.md', generateREADME(answers)))
        .catch((err) => console.error(err));
}

// initialize app

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
