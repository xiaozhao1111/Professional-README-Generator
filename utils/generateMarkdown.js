// function to generate markdown for README
function generateMarkdown(data) {
  // Destructing the data object
  const {title, description, installation, usage, tests,license, contributing, email, githubUserName} = data;

  const githubURL = 'https://github.com/' + githubUserName;
  // create content table and link to specific sections
  const contentTable = `
## Table of Contents
- [Description](#desc)
- [Installation](#install)
- [Usage Tips](#usage)
- [Tests](#tests)
- [Contributing](#contributing)
- [Questions](#questions)
- [License](#license)
`
let licenseBadage ='';
if(license === 'Boost Software License 1.0') {
  licenseBadage = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
} else if (license === 'Apache 2.0 License') {
  licenseBadage = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
} else if (license === 'BSD 3-Clause License') {
  licenseBadage = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
} else {
  licenseBadage = '';
}


  return `
# ${title.trim()}

${licenseBadage}

${contentTable}

<a name='desc'></a>
## Description

${description.trim()}

<a name='install'></a>
## Installation

${installation.trim()}

<a name='usage'></a>
## Usage Tips

${usage.trim()}

<a name='tests'></a>
## Tests

${tests.trim()}

<a name='contributing'></a>
## Contributing

${contributing.trim()}

<a name='questions'></a>
## Questions

* If you have any doubts, feel free to contact me via ${email}
* Find more about my works on [my Github](${githubURL})

`;
}

module.exports = generateMarkdown;
