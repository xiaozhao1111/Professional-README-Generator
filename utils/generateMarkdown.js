// function to generate markdown for README
function generateMarkdown(data) {
  // Destructing the data object
  const {title, description, installation, usage, license, contributing, email, githubUserName} = data;

  // create content table and link to specific sections
  const contentTable = `
## Table of Contents
- [Description] (#desc)

`

  return `
# ${title}
`;
}

module.exports = generateMarkdown;
