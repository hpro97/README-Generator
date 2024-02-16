//git add . && git commit -m "message" && git push

const fs = require("fs");
const path = require("path");
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
    choices: ["MIT", "Apache_2.0", "GPLv3", "BSD_3"],
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
    message: "Input your github username:",
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
    writeToFile(`README ${answers.title}.md`, markdown);
  });
}

// function call to initialize program
init();

// left to do:
// debugg
// double check
// delete done
// add comments

// submit to git:
// video using from command line, showing example generated
// sample readme

// submit to boot:
// link to vid
// link to git
// link to index and genmark
// link to example readme detailing project


//enquirer details: https://www.npmjs.com/package/inquirer