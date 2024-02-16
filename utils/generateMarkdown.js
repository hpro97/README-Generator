// function to generate markdown for README
function generateMarkdown(data) {
  return `
  ## License
  
  ${data.license} License

  # ${data.title}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  If you have any questions regarding the projects you can reach me at <a href="mailto:${data.email}">${data.email}</a>. or you can visit my GitHub at <a href="https://github.com/${data.github}">${data.github}</a>.

`;
}

module.exports = generateMarkdown;

//* When a user chooses a license for their application from a list of options then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled **License** that explains which license the application is covered under