// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'no license') {
    console.log(license)
    return `
  ![badge](https://img.shields.io/badge/license-${license}-blue)
    `;
  } else {
    return ' ';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'no license') {
    return `
    [${license}](https://choosealicense.com/licenses/${license})
      `;
    } else {
      return ' ';
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'no license') {
    return `
    ## [License](#table-of-contents)
    The application is covered under the following license:
    ${renderLicenseLink(license)}
      `;
    } else {
      return ' ';
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)

  return `  # ${data.title}


  ## Licensing:
  ${renderLicenseBadge(data.license)}
  
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage_information)
  - [License](#license)
  - [Contribution](#contribution)
  - [Testing](#tests)
  - [Username](#username)
  - [Email](#email)


  # ${data.description}
  
  # ${data.installation}
  
  # ${data.usage_information}
  
  # ${data.license}
  
  # ${data.contribution}
  
  # ${data.tests}
  
  # ${data.username}
  
  # ${data.email}
  
  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;