const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Function to initalize prompts
const init = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'manager-name',
      message: 'What is your managers name? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your managers name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'manager-id',
      message: 'What is your managers ID? (Required)',
      validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log('Please enter your managers ID!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'manager-email',
      message: 'What is your managers email? (Required)',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('Please enter your managers email!');
          return false;
        }
      }
    },
    {
      type: 'number',
      name: 'office-number',
      message: 'What is your managers office number? (Required)',
      validate: officeNumberInput => {
        if (officeNumberInput) {
          return true;
        } else {
          console.log('Please enter your managers office number!');
          return false;
        }
      }
    },
  ])
}

init()