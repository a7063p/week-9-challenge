// Generate Markdown //

function generateMarkdown (data) { 
  
  return `
  # ${data.name}
  ![license](https://img.shields.io/badge/license-${data.license}-critical)

  ## Description
  ${data.description}


  [comment]: <> (-----------------Table of Contents-----------------)

  ## Table of Contents
  ${data.confirmInstall === true ? "* [Installation](##Installation)" : ""}
  ${data.usage !== undefined ? "* [Usage](##Usage)" : ""}
  * [License](##License)
  ${data.language.length !== 0 ? "* [Languages](##Languages)" : ""}  
  ${data.customContribute !== undefined ? "* [Contribute](##Contribute)" : ""}
  ${data.test !== undefined ? "* [Tests](##Tests)" : ""}
  ${data.userName !== undefined ? "* [Questions](##Questions)" : ""}

  [comment]: <> (===================================================)
  

  ${data.confirmInstall === true ? "## Installation" : ""}
  ${data.installation !== undefined? `${data.installation}` : ""}

  ${data.confirmUsage === true ? "## Usage" : ""}
  ${data.usage !== undefined? `${data.usage}` : ""}  

  [comment]: <> (---------------------License---------------)

  ## License
  ![license](https://img.shields.io/badge/license-${data.license}-critical
  
  This application currently is licensed with [${data.license}](./license/${data.license}.txt). 
  Please click on the [link](./license/${data.license}.txt) to review all terms, definitions and conditions of use.

  ${data.license == 'None' ? 'This work is under exclusive Copyright protection. all use must be expressly given by author.' : ''}
  [comment]: <> (============================================)


  [comment]: <> (----------Language HTML-------------)

  ${data.language.length !== 0 ? "## Languages" : ""}  
   <ul>
  ${data.language.map(function (langs) {
    return "<li> <img alt='Language' src='https://img.shields.io/badge/" + langs + "-blue'></li>"               
  }).join("")}
  </ul>
  [comment]: <> (====================================)

  ${data.confirmContribute === true && data.contribute !== undefined ? "## Contribute" : ""}
  ${data.contribute !== undefined ? `${data.contribute}` : ""}

  ${data.confirmTest === true && data.test !== undefined ? "## Tests" : ""}
  ${data.test !== undefined ? `${data.test}` : ""}

  ## Questions
  Please feel free to email me with any comments, questions or concerns at ${data.email}

  [GitHub Account](https://github.com/${data.userName})  
`;
}

module.exports = {generateMarkdown}
  