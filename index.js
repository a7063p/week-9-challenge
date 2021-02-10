// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
//

const promptUser = () => {
    return inquirer.prompt([
        // PROJECT NAME//
        {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project? (required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
                } else {
                     console.log('A project name is required.');
                     return false;
                }
            }
        },
        // PRODUCT DESCRIPTION //
        {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project. (required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
                } else {
                    console.log('A project description is required.');
                }
            }   
        },
        //INSTALL INSTRUCTIONS//
        {
        type: 'confirm',
        name: 'confirmInstall',
        message: 'Would you like to enter installation instructions?',
        default: true
        },
        {
        type: 'input',
        name: 'Installation',
        message: 'Enter installation instructions',
        when: ({confirmInstall}) => {
            if (confirmInstall) {
                return true;
                } else {
                    return false;
                }
            }
        },
        // USAGE INSTRUCTIONS//
        {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage instructions.'    
        },
        // LICENSE TYPE//
        {
        type: 'checkbox',
        name: 'license',
        message: 'Choose a license type.(Reference: https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/licensing-a-repository#choosing-the-right-license)',
        choices: [ 
            'None', 
            'Apache License 2.0', 
            'GNU General Public License v3.0', 
            'MIT License', 
            'BSD 2-Clause "Simplified" License', 
            'BSD 3-Clause "New" or "Revised" License',
            'Boost Software License 1.0',
            'Creative Commons Zero v1.0 Universal',
            'Eclipse Public License 2.0',
            'GNU Affero General Public License v3.0',
            'GNU General Public License v2.0',
            'GNU Lesser General Public License v2.1',
            'Mozilla Public License 2.0',
            'The Unlicense']
        },

        // LANGUAGES ***for badges 
        {
            type: 'checkbox',
            name: 'language',
            message: 'What languages was this project built with? (check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'JQUERY', 'Bootstrap', 'Node']
        },

        // CONTRIBUTION STATEMENT//
        {
        type: 'confirm',
        name: 'confirmContribute',
        message: 'Would like to add a contributor statement?',
        default: false
        },
        {
        type: 'confirm',
        name: 'confirmDefaultContribute',
        message: 'Would like to use the default contribution statement ("Contribution privileges are open to ALL persons wanting to positively contribute to this project") or customize your own (default - "Yes" / custom - "No")',
        default: true,
        when: ({confirmContribute}) => {
            if (confirmContribute) {
                return true
                } else {
                  return false
                }
            }
        },    
        {
        type: 'input',
        name: 'customContribute',
        message: 'Enter your custom contribution statement.',
        when: ({confirmDefaultContribute})=> {
            if(confirmDefaultContribute){
                return false
                } else {
                 return true
                }
            }
        },
        // TEST DETAILS//
        {
        type: 'confirm',
        name: 'confirmTest',
        message: 'Would you like to add "tests" to your README?',
        default: false
        },
        {
        type: 'input',
        name: 'test',
        message: 'Please enter your test criteria. Provide examples on how to preform the test.',
        when: ({confirmTest}) => {
            if(confirmTest) {
                return true;
                } else {
                 return false;
                }
             }
        },
        // QUESTIONS//
        {
        type: 'input',
        name: 'userName',
        message: 'Enter your GitHub User name'
        },
        {
        type: 'input',
        name: 'email',
        message: 'Enter your contact email'
        }
    ])
};



// ==============================================//

// const promptScreenshot = screenshotData => {
//     if(!screenshotData.imagePath) {
//         screenshotData.imagePath =[]
//     }
// return inquirer
// .prompt ([
//     {
//     type: 'input',
//     name: 'screenShot',
//     message: ''
//     },
// ])
// }
// =============================================//



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app

function init() {}

// Function call to initialize app
promptUser();
console.log(promptUser.name);


