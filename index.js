//git add . && git commit -m "message" && git push

const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
    type: "input",
    name: "title",
    message: "Title of project:",
    },
    {
    type: "input",
    name: "description",
    message: "Description of project:",
    },
    {
    type: "input",
    name: "tableOfContents",
    message: "Table of Contents:",
    },
    {
    type: "input",
    name: "installation",
    message: "Installation instructions:",
    },
    {
    type: "input",
    name: "usage",
    message: "Usage instructions:",
    },
    {
    type: "list",
    name: "license",
    message: "License in use:",
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
    type: "input",
    name: "contributing",
    message: "Contributing guidlines:",
    },
    {
    type: "input",
    name: "tests",
    message: "Tests instructions:",
    },
    {
    type: "input",
    name: "github",
    message: "Where to ask questions (input your github username):",
    },
    {
    type: "input",
    name: "email",
    message: "What is your email address?",
    },


];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log("README created.");
      });
  }
  

// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => {
        const markdown = generateMarkdown(answers);
        writeToFile("README.md", markdown);
      });
  }
  

// function call to initialize program
init();


// * Create a command-line application that accepts user input.
//   * When a user is prompted for information about the application repository then a high-quality, professional README.md is generated with:
//     * The title of my project 
//     * Sections entitled:
//       * Description 
//       * Table of Contents 
//       * Installation 
//       * Usage 
//       * License 
//       * Contributing 
//       * Tests 
//       * Questions
//     * When a user enters the project title then it is displayed as the title of the README
//     * When a user enters a description, installation instructions, usage information, contribution guidelines, and test instructions then this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
//     * When a user chooses a license for their application from a list of options then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled **License** that explains which license the application is covered under
//     * When a user enters their GitHub username then this is added to the section of the README entitled Questions, with a link to their GitHub profile
//     * When a user enters their email address then this is added to the section of the README entitled Questions, with instructions on how to reach them with additional questions
//     * When a user clicks on the links in the **Table of Contents** then they are taken to the corresponding section of the README