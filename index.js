const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const { title } = require("process");


// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What\'s the tile of your project?',
        name:'title',
        validate: function(title) {
        if(title.trim()!='') {
            return true;
            } else {
            return 'Please give a valid title.'
            }
        }
    },
    {
        type: 'input',
        message: 'Please give a short description of you project: ',
        name: 'description',
        validate: function(description) {
            if(description.trim()!='') {
                return true;
            } else {
                return 'Sorry, the description cannot be empty.'
            }
        }
    },
    {
        type: 'input',
        message: 'How to install the application?',
        name: 'installation',
        validate: function(installation) {
            if(installation.trim()!='') {
                return true;
            } else {
                return 'Please describe how to install the application.'
            }
        }
    },
    {
        type: 'input',
        message: 'How to use the application?',
        name: 'usage',
        validate: function(usage) {
            if(usage.trim()!='') {
                return true;
            } else {
                return 'Please give the usage tips of this application.'
            }
        }
    },
    {
        type: 'list',
        message: 'Please select the license: ',
        choices: ['Boost Software License 1.0', 'Apache 2.0 License', 'BSD 3-Clause License', 'No license'],
        name: 'license'
    },
    {
        type: 'input',
        message: 'Please indicate how to test the application.',
        name:'tests',
        validate: function(tests) {
            if(tests.trim()!='') {
                return true;
            } else {
                return 'Please give more details for the testing of the application.'
            }
        }
    },
    {
        type: 'input',
        message: 'What\'s the contributing guidelines for this project?',
        name: 'contributing',
        validate: function(contributing) {
            if(contributing.trim()!='') {
                return true;
            } else {
                return 'Please give the guidelines to contribute to this application.'
            }
        }
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
        validate: function(githubUserName) {
            if(githubUserName!='') {
                return true;
            } else {
                return 'Please input your github user name.'
            }
        }

    }
];

// function to write README file
function writeToFile(filename, data) {
    fs.writeFile(`${filename}.md`, data, (err) => {
        err ? console.error(err) : console.log('A new README file was saved!');
    })
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then((response) => {
            const readMeFile = generateMarkdown(response);
            writeToFile(`${response.title}`, readMeFile);
        })
        
        
}

// function call to initialize program
init();
