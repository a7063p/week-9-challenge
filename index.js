// Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');
const {generateMarkdown} = require ('./utils/generateMarkdown')


// Array of questions for user input

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
        message: 'Provide a description of the project: (required)',
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
        name: 'installation',
        message: 'Enter installation instructions:',
        when: ({confirmInstall}) => {
            if (confirmInstall) {
                return true;
                } else {
                    return false;
                }
            },
        validate: nameInput => {
            if (nameInput) {
                return true;
                } else {
                    console.log('Please enter your Install Instructions.');
                    return false;
                        
                }
             }
        },
        // USAGE INSTRUCTIONS//
        {
        type: 'confirm',
        name: 'confirmUsage',
        message: 'Would you like to enter Usage instructions?',
        default: true
        },
        {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage instructions:', 
        when: ({confirmUsage}) => {
            if (confirmUsage) {
                return true;
                } else {
                    return false;
                }
            },
        validate: nameInput => {
            if (nameInput) {
                return true;
                } else {
                    console.log('Please enter your Usage Instructions.');
                    return false;                        
                }
             }           
        },
        // LICENSE TYPE//
        {
        type: 'checkbox',
        name: 'license',
        message: 'Choose a license type:(required)',
        choices: [ 
            'None', 
            'Apache_2.0', 
            'GNU_General_Public_v3.0', 
            'MIT', 
            'ISC',
            'Boost_Software_1.0',
            'GNU_Affero_General_Public_v3.0',
            'GNU_General_Public_v3.0',
            'GNU_Lesser_General_Public_v3.0',
            'Mozilla_Public_2.0',
            'Unlicense'],
        validate: nameInput => {
            if (nameInput.length !== 0) {
                return true;
                } else {
                    return false;
                     
                    }
                }
            },

        // LANGUAGES ***for badges 
        {
            type: 'checkbox',
            name: 'language',
            message: 'What languages was this project built with? (check all that apply)',
            choices: [
                'JavaScript', 
                'HTML', 
                'CSS', 
                'ES6', 
                'JQUERY', 
                'Bootstrap', 
                'Node']
        },

        // CONTRIBUTION STATEMENT//
        {
        type: 'confirm',
        name: 'confirmContribute',
        message: 'Would like to add a contributor statement?',
        default: false
        },
        {
        type: 'input',
        name: 'contribute',
        message: 'Enter your contribution message:',
        when: ({confirmContribute}) => {
            if (confirmContribute) {
                return true
                } else {
                  return false
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
        message: 'Enter your GitHub User name: (required):',
        validate: nameInput => {
            if (nameInput.length !== 0) {
                return true;
                } else {
                    console.log('Please Enter your GitHub username');
                    return false;
                     
                    }
                }
             },
        {
        type: 'input',
        name: 'email',
        message: 'Enter your contact email: (required)',
        validate: nameInput => {
            if (nameInput.length !== 0) {
                return true;
                } else {
                    console.log(('Please enter your email address'));
                    return false;
                     
                    }
            }
        }
    ])
    
};

const promptImage = imageData => {

    console.log(`
    ====================
    ADD A New Screenshot
    ====================
    `);
    if(!imageData.images) {
    imageData.images = [];
    }

    return inquirer
    .prompt([
        {
         type: 'input',
         name: 'name',
         message: 'Enter relative path for screenshot:'
        },
        {
            type: 'confirm',
            name: 'confirmAddImage',
            message: 'Would you like to add another screenshot?',
            default: 'true'
        }
    ])
    .then(screenshotData => {
    imageData.images.push(screenshotData.name);
    if (screenshotData.confirmAddImage) {
        return promptImage(imageData)
    } else {
        return imageData
        }
    });
}



// function to write README file //
function writeToFile(filename, data) {
    fs.writeFile(filename,data,err => {
    if (err) throw new Error(err)
    console.log('README Complete');
})
}


// Create a function to initialize app //
    promptUser()
    .then(promptImage)    
    .then( (data) => {
         generateMarkdown(data)
         writeToFile('./README.md', generateMarkdown(data))
         console.log('data', data);
     })
          
   
    






