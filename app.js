const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let teamArr = [];

// Function to get team name
function teamName() {
  inquirer
    .prompt({
      type: 'input',
      name: 'teamname',
      message: 'What is your team name?',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your team name!');
          return false;
        }
      }
    }).then(data => {
      const teamName = data.teamname;
      teamArr.push(teamName);
      console.log(teamArr)
      managerDetails()
    })
}


// Function to get manager info
function managerDetails() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your managers name?',
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
        type: 'number',
        name: 'id',
        message: 'What is your managers ID number?',
        validate: idInput => {
          if (idInput === NaN) {
            console.log('Please enter your managers ID number!');
            return false;
          } else {
            return true;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your managers email?',
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
        name: 'officeNumber',
        message: 'What is your managers office number?',
        validate: officeNumberInput => {
          if (officeNumberInput) {
            return true;
          } else {
            console.log('Please enter your managers office number!');
            return false;
          }
        }
      },
    ]).then(data => {
      const name = data.name;
      const id = data.id;
      const email = data.email;
      const officeNumber = data.officeNumber;
      const manager = new Manager(name, id, email, officeNumber)
      teamArr.push(manager);
      console.log(teamArr)
      teamMemberDetails()
    })
}

teamName();