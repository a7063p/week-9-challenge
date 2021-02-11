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

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README



function generateMarkdown (data) {    

  return `
  # ${data.name}

  ## Description

  ${data.description}

  ## License 
  ![license](https://img.shields.io/badge/license-${data.license}-critical)

  ## Languages  
   <ul>
  ${data.language.map(function (langs) {
    return "<li> <img alt='Language' src='https://img.shields.io/badge/" + langs + "-blue'></li>"               
  }).join("")}
  </ul>
  
  

`;




}




module.exports = {generateMarkdown, languageArray}
  