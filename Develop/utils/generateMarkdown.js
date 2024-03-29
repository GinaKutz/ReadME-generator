// generateMarkdown.js
const generateMarkdown = (data) => {
  return `
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
[Add installation instructions here]

## Usage
[Add usage information here]

## License
This project is licensed under the ${data.license} License - see the [LICENSE](LICENSE) file for details.

## Contributing
[Add contribution guidelines here]

## Tests
[Add test instructions here]

## Questions
For additional questions, contact ${data.email}.  
GitHub: [${data.github}](https://github.com/${data.github})
  `;
};

module.exports = generateMarkdown;
