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
        message: 'Please give a short description of you project: ',
        name: 'description'
    },
    {
        type: 'input',
        message: 'How to install the application?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'How to use the application?',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'Please select the license: ',
        choices: ['MIT License', 'Apache 2.0 License', 'The Unlicense', 'No license'],
        name: 'license'
    },
    {
        type: 'input',
        message: 'What\'s the contributing guidelines for this project?',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'Could you please leave your email address for Q&A?',
        name:'email',
        validate: function(email)
        {
            // Regex mail check (return true if valid mail)
            return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
        }
    },
    {
        type: 'input',
        message: 'Please enter your Github username: ',
        name: 'githubUserName',
    }
];

// function to write README file
function writeToFile(filename, data) {
    fs.writeFile(`${filename}.md`, JSON.stringify(data), (err) => {
        err ? console.error(err) : console.log('A new README file was saved!');
    })
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then((response) => {
            console.log(response.title);
            writeToFile('sample', response);
        })
        
        
}

// function call to initialize program
init();
