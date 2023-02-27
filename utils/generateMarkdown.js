// function to generate markdown for README
function generateMarkdown(data) {
  // Destructing the data object
  const {title, description, installation, usage, license, contributing, email, githubUserName} = data;

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

  return `
# ${title}

${contentTable}

<a name='desc'></a>
## Description

${description}

<a name='install'></a>
## Installation

${installation}

<a name='usage'></a>
## Usage Tips

${usage}

<a name='tests'></a>
## Tests

<a name='contributing'></a>
## Contributing

${contributing}

<a name='questions'></a>
## Questions

* If you have any doubts, feel free to contact me via ${email}
* Find more about my works on [my Github](${githubURL})

`;
}

module.exports = generateMarkdown;
