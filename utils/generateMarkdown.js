// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if(license === 'MIT') {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (license === 'GPLv3') {
    return  `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`}
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'MIT') {
    return `https://lbesson.mit-license.org/`
  } else if (license === 'GPLv3') {
    return  `http://perso.crans.org/besson/LICENSE.html`}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return`[${renderLicenseBadge(license)}](${renderLicenseLink(license)})`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ##description
  ${data.description}
  ##table of contents

  ## Table of Contents

  *[Instalation](installation)

  *[Usage](#Usage)

  *[License](#license)

  *[Contributing](#contributing)

  *[Tests](#tests)

  *[Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contribution}



`;
}

export default generateMarkdown;
