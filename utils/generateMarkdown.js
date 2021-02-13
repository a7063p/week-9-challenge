// Generate Markdown //

function generateMarkdown (data) { 
  
  return `
  # ${data.name}
  ![license](https://img.shields.io/badge/license-${data.license}-critical?./license/${data.license})

  ## Description
  ${data.description}


  ## Table of Contents
  ${data.confirmInstall === true ? "* [Installation](##Installation)" : ""}
  ${data.usage !== undefined ? "* [Usage](##Usage)" : ""}
  * [License](##License)
  ${data.language.length !== 0 ? "* [Languages](##Languages)" : ""}  
  ${data.customContribute !== undefined ? "* [Contribute](##Contribute)" : ""}
  ${data.test !== undefined ? "* [Tests](##Tests)" : ""}
  ${data.userName !== undefined ? "* [Questions](##Questions)" : ""} 
  

  ${data.confirmInstall === true ? "## Installation" : ""}
  ${data.installation !== undefined? `${data.installation}` : ""}

  ${data.confirmUsage === true || data.images.length !== 0 ? "## Usage" : ""}
  ${data.usage !== undefined? `${data.usage}` : ""} 

  ${data.images.map(function (img) { return "![image](" + img + ")  "               
  }).join("")}
  
  ${data.images.length !== 0 ? "## Languages" : ""}  
  ${data.language.map(function (langs) {
    return "![language](https://img.shields.io/badge/" + langs + "-critical)"              
  }).join("  ")}  
 

  ## License
  ![license](https://img.shields.io/badge/license-${data.license}-critical)
  
  This application currently is licensed with [${data.license}](./license/${data.license}.txt). 
  Please click on the [link](./license/${data.license}.txt) to review all terms, definitions and conditions of use.

  ${data.license == 'None' ? 'This work is under exclusive Copyright protection. all use must be expressly given by author.' : ''}


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
  