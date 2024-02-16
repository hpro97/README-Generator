// function to generate markdown for README
function generateMarkdown(data) { //input defined as data function creates markdown
  return `
  ## License
  
  ${data.license} License


  ![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)

  The above copyright badge and this permission notice shall be included in all copies or substantial portions of the Software. This product is covered by the ${data.license} license.


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

//----------------------------------------------------------------------//

//       notes:

//${data.usage} //write to file in index.js specifies data, name: specifies more branch delving as per questions const
//module.exports = generateMarkdown; //exports wrapped function for use in other files
//badges found here https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba explaining line 9

//----------------------------------------------------------------------//