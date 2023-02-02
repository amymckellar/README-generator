// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: "input",
      name: "What is the Title of your project?",
      message: "Title",
    },
    {
      type: "input",
      name: "What is the Description of your project?",
      message: "Description",
    },
    {
      type: "input",
      name: "What are the Installation Instructions?",
      message: "Installation",
    },
    {
      type: "input",
      name: "What are your Usage Instructions?",
      message: "Usage",
    },
    {
      type: "input",
      name: "What are your Contribution Guidelines?",
      message: "Contribution",
    },
    {
      type: "input",
      name: "What are your Test Instructions?",
      message: "Test",
    },
  ])
  .then((response) => writeToFile("README.md", response));

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeToFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Success!");
  });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
