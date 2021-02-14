const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let teamArr = [];

// Function to get tean name
function getTeamName() {
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
    })
}

getTeamName();