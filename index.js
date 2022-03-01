


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
];

//list of img.shields.io extensions for badges and addresses for license texts
const badgeList = [
    ["License-None-black","https://choosealicense.com/no-permission/"],
    ["License-Apache_2.0-blue","https://opensource.org/licenses/Apache-2.0"],
    ["License-GPLv3-blue","https://www.gnu.org/licenses/gpl-3.0"],
    ["License-MIT-yellow","https://opensource.org/licenses/MIT"],
    ["License-BSD_2--Clause-orange","(https://opensource.org/licenses/BSD-2-Clause"],
    ["License-BSD_3--Clause-orange","https://opensource.org/licenses/BSD-3-Clause"],
    ["License-Boost_1.0-lightblue","https://www.boost.org/LICENSE_1_0.txt"],
    ["License-CC0_1.0-lightgrey","http://creativecommons.org/publicdomain/zero/1.0/"],
    ["License-EPL_2.0-red","https://opensource.org/licenses/EPL-2.0"],
    ["License-AGPL_v3.0-blue","https://www.gnu.org/licenses/agpl-3.0"],
    ["License-GPL_v2.0-blue.svg","https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html"],
    ["License-LGPL_v2.1-blue","https://www.gnu.org/licenses/old-licenses/lgpl-2.1.html"],
    ["License-MPL_2.0-brightgreen","https://opensource.org/licenses/MPL-2.0"],
    ["License-Unlicense-blue","https://unlicense.org/"]
]

//get answers from user
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


const generateREADME = ({ title, description, installation, usage, contribution, test, license, github, email }) =>{
    
    //select appropriate badge and link for chosen license
    let badge = new Array(2);
    badge[0]=badgeList[0][0];//default is no license if the user does not make a selection
    badge[1]=badgeList[0][1];
    for(let i = 0; i<licenseList.length; i++){
        if(String(license)==licenseList[i]){//once we find a match, create array with badge and link to license text
            badge[0]=`<a href="${badgeList[i][1]}" target="_blank">![](https://img.shields.io/badge/${badgeList[i][0]})</a>`
            badge[1]=badgeList[i][1];
        }
    }
    
    return`
    ${badge[0]}<br>
    <h1>${title}</h1>
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
    This software is covered by the license: ${license}<br>
    For more information about this license please follow this link: <a href="${badge[1]}" target="_blank">${license}</a>
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

}
// function to initialize app

function init() {
    promptUser()
        .then((answers) =>fs.writeFileSync('./generatedREADME/README.md', generateREADME(answers)))
        .catch((err) => console.error(err));
}

// initialize app

init();

