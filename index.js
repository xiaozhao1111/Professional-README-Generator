const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What\'s the tile of your project?',
        name:'title'
    },
    {
        type: 'input',
        message: 'Please give a short description of you project.',
        name: 'description'
    }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then((response) => {
            console.log(response);
        })
}

// function call to initialize program
init();
