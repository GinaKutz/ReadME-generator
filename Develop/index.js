// index.js
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Function to prompt user for input
const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter your project title:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter project description:',
    },
    // Add more prompts for other sections (installation, usage, etc.)
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your application:',
      choices: ['MIT', 'Apache', 'GPL'],
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
    },
  ]);
};

// Function to run the application
const init = async () => {
  try {
    // Prompt user for input
    const userInput = await promptUser();

    // Generate markdown content
    const markdownContent = generateMarkdown(userInput);

    // Save README.md file
    require('fs').writeFileSync('README.md', markdownContent);

    console.log('README.md generated successfully!');
  } catch (error) {
    console.error('Error generating README:', error);
  }
};

// Run the application
init();
