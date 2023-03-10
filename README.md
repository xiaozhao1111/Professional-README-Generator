# Professional-README-Generator

##  About 
In this application, a README file can be quickly and easily created by using the command-line interface. This allows the project creator to devote more time to working on the project.

## User Story
* As a developer, I want a README generator so that I can quickly create a professional README for a new project.

## Prerequisite
* Install Node.js. If you haven't used Node.js before, you can spend some time to read these [introduction articles](https://nodejs.dev/en/learn/introduction-to-nodejs/).
* Inquirer package needed. Find more about [inquirer](https://www.npmjs.com/package/inquirer).

## Installation
* Use '$ git clone git@github.com:xiaozhao1111/Professional-README-Generator.git' to copy the repo to your pc.
* Set up the npm package with the command '$ npm init -y'

## Usage Tips
* Open the terminal in the VS code, and cd to the repo folder.
* Invoke the application by the command '$ node index.js'
* Complete all the questions in the terminal. A new sample README file will be created.
* Here is a [walkthrough video](./assets/video/video.webm) for this application.
* Here is a [sample README file](./assets/sample-readme/sampleReadMe-Webpage%20accessibility%20coderefactor.md) generated by the application

## Main features
* The command-line application accepts user input
    * The user is prompted for information about the application repository including 'Title', 'Description', 'Installation', 'Usage', 'License', 'Contributing', 'Tests', 'email' and 'github user name'.
    * The README.md is generated with 'The title of my project', and sections entitled with 'Table of Contents', 'Description', 'Installation', 'Usage tips', 'Tests', 'Contributing', 'Questions' and 'License'.

* When the user enter an empty input for the questions, the application will remind the user.

* When a user enters a description, installation instructions, usage information, contribution guidelines, and test instructions then this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests.

* When a user choose a license for the application, a badge will be added near the top of the README file. If no license was chosen, no badge will be shown. Meanwhile, a notice is added to the section of the README entitled License that explains which license the application is covered under.

* When a user enters their GitHub username then this is added to the section of the README entitled Questions, with a link to their GitHub profile.

* When a user enters their email address then this is added to the section of the README entitled Questions, with instructions on how to reach them with additional questions.

* When a user clicks on the links in the Table of Contents then they are taken to the corresponding section of the README

## Contribution 
Feel free to contribute with the git workflow. Please follow the [contributing guide](https://github.com/github/docs/blob/main/CONTRIBUTING.md).

## License
No license used for this application.