// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [ {
    type: "input",
    name: "title",
    message: "Please choose a title for your project:",
    default: "My README."
},
{
    type: "input",
    name: "description",
    mesage: "Please write a description of the project:",
    default: "Your description goes here."
},
{
    type: "input",
    name: "installation",
    message: "Please put the steps for installation here:",
    default: "Installation steps goes here."
},
{
    type: "input",
    name: "usage_information",
    message: "Please write your usage information here:",
    default: "Usage information goes here."
},
{
    type: "list",
    name: "license",
    message: "Which license fits your project?",
    default: "agpl",
    choices: ['agpl', 'apache', 'mit', 'no license']
},
{
    type: "input",
    name: "contribution",
    message: "Please write how others can contribute here:",
    default: "Contribution information goes here."
},
{
    type: "input",
    name: "tests",
    message: "Please write how to run tests for this project here:",
    default: "Test information goes here."
},
{
    type: "input",
    name: "username",
    message: "Please write your github username here:",
    default: "Username information goes here."
},
{
    type: "input",
    name: "email",
    message: "Please write the email associated with your github here:",
    default: "Github associated email goes here."
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), error => {
        if (error) throw error
  
        console.log('HTML saved!')
      })}

// TODO: Create a function to initialize app
function init() {  inquirer.prompt(questions).then((data) => {
    console.log(JSON.stringify(data, null, " "));
    writeToFile("./example/README.md", data);
});}

// Function call to initialize app
init();
