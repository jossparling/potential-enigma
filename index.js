// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import generatePage from './src/page-template.js';
import writeFile from './utils/generateMarkdown.js';
import copyFile from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'project title',
            message: 'What is your project title? (Required)',
            validate: titleInput => {
                if (titleInput) {
                  return true;
                } else {
                  console.log('Please enter your project title!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                  return true;
                } else {
                  console.log('You need to enter a project description!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Please name the contributors for the project (Required)',
            validate: contributorInput => {
                if (contributorInput) {
                  return true;
                } else {
                  console.log('You need to enter a contributor!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please enter the installations used for the project (Required)',
            validate: installationInput => {
                if (installationInput) {
                  return true;
                } else {
                  console.log('You need to enter an installation!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please enter an example of usage from your project (Required)',
            validate: usageInput => {
                if (usageInput) {
                  return true;
                } else {
                  console.log('You need to enter an installation!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'license',
            message: 'Please enter the licences for your project (Required)',
            validate: licenseInput => {
                if (licenseInput) {
                  return true;
                } else {
                  console.log('You need to enter a license!');
                  return false;
                }
              }
        }
    ])
}

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
questions()
.then(data => {
    return generatePage(data);
})
.then(pageHTML => {
    return writeFile(pageHTML);
})
.then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
})
.then(copyFileResponse => {
    console.log(copyFileResponse);
})
.catch(err => {
    console.log(err);
});