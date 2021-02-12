// TODO: Create a function that returns a license badge based on which license is passed in
//If there is no license, return an empty string

const updateLangArray = []

function languageArray (data) {
  const langsArray = data.language
  langsArray.forEach(langs =>{
    // `<li>${langs}</li>`
    
    updateLangArray.push(langs)
  })
  
}





// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}


const licenseText = []
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
let licenseType = license
licenseText.push()
}

// TODO: Create a function to generate markdown for README



function generateMarkdown (data) { 
  console.log(data);   

  return `
  # ${data.name}
  ![license](https://img.shields.io/badge/license-${data.license}-critical)

  ## Description
  ${data.description}

  ## Table of Contents
  ${data.confirmInstall === true ? "* [Installation](##Installation)" : ""}
  ${data.usage !== undefined ? "* [Usage](##Usage)" : ""}
  * [License](##License)
  ${data.customContribute !== undefined ? "* [Contribute](##Contribute)" : ""}
  ${data.test !== undefined ? "* [Tests](##Tests)" : ""}
  ${data.userName !== undefined ? "* [Questions](##Questions)" : ""}
  
  ${data.confirmInstall === true ? "## Installation" : ""}
  ${data.installation !== undefined? `${data.installation}` : ""}

  ${data.confirmUsage === true ? "## Installation" : ""}
  ${data.usage !== undefined? `${data.usage}` : ""}

  ## License
  ![license](https://img.shields.io/badge/license-${data.license}-critical?style=for-the-badge&logo=appveyor)
  
  This application currently is licensed with [${data.license}](./license/${data.license}.txt). 
  Please click on the [link](./license/${data.license}.txt) to review all terms, definitions and conditions of use.

  ${data.license == 'None' ? 'This work is under exclusive Copyright protection. all use must be expressly given by author.' : ''}

  ${data.language.length !== 0 ? "## Languages" : ""}  
   <ul>
  ${data.language.map(function (langs) {
    return "<li> <img alt='Language' src='https://img.shields.io/badge/" + langs + "-blue'></li>"               
  }).join("")}
  </ul>

  ${data.confirmContribute === true && data.contribute !== undefined ? "## Contribute" : ""}
  ${data.contribute !== undefined ? `${data.contribute}` : ""}

  ${data.confirmTest === true && data.test !== undefined ? "## Tests" : ""}
  ${data.contribute !== undefined ? `${data.test}` : ""}

  ## Questions
  Please feel free to email me with any comments, questions or concerns at ${data.email}

  [GitHub Account](https://github.com/${data.userName}) 



 
`;




}




module.exports = {generateMarkdown, languageArray}
  