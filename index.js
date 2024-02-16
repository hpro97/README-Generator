//git add . && git commit -m "message" && git push

const fs = require("fs"); //npm i fs (comes with node) allows use of file system for writing markdown file
const path = require("path");
const inquirer = require("inquirer"); //npm i inquirer allows use of inquirer in code
const generateMarkdown = require("./utils/generateMarkdown"); //pathing to function generating markdown

// array of questions for user
const questions = [ //array of questions to gether user input from terminal prompts
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
    choices: ["MIT", "Apache_2.0", "GPLv3", "BSD_3"], //list of choices correlating to list type input in this object
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
function writeToFile(fileName, data) { //input defined as fileName and data
  fs.writeFile(fileName, data, (err) => { //writes to file with fs.writeFile stating filename and data retrieved from user input, alongside error handling
    err ? console.error(err) : console.log("README created."); //ternary (condensed from if statement to comply with es6) for error handling. if error, log error, else log Readme created
  });
}

// function to initialize program
function init() { 
  inquirer.prompt(questions).then((answers) => { //prompts user for questions in command line then user input defined as answers. uses fat arrow function to pass answers to generate markdown
    const markdown = generateMarkdown(answers); //input defined as answers and calls generate markdown function from lines 2-52 exported from generateMarkdown.js
    writeToFile(`README ${answers.title}.md`, markdown); //write to file function creates title based on answers for title name to give individual name and makes md file, uses markdown as the input for write to file
  });
}

// function call to initialize program
init(); //calls function

// left to do:

// submit to git:
// video using from command line, showing example generated
// sample readme

// submit to boot:
// link to vid
// link to git
// link to index and genmark
// link to example readme detailing project


//enquirer details: https://www.npmjs.com/package/inquirer