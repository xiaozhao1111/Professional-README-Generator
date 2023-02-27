// function to generate markdown for README
function generateMarkdown(data) {
  // Destructing the data object
  const {title, description, installation, usage, license, contributing, email, githubUserName} = data;

  // create content table and link to specific sections
  const contentTable = `
## Table of Contents
- [Description](#desc)
- [Usage Tips](#usage)

`

  return `
# ${title}

${contentTable}

<a name='desc'></a>
## Description

${description}


`;
}

module.exports = generateMarkdown;
