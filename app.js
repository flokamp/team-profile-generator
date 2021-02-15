const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let teamArr = [];

// Function to get manager info
function managerDetails() {
  inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your managers name?',
        validate: answer => {
          if (answer) {
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
        validate: answer => {
          if (answer) {
            return true;
          } else {
            console.log('Please enter your managers ID number!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your managers email?',
        validate: answer => {
          if (answer) {
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
        validate: answer => {
          if (answer) {
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
      teamMembers()
    })
}

// Function to add team members
function teamMembers() {
  inquirer.prompt({
      type: 'list',
      name: 'member',
      message: 'Would you like to add a new team member?',
      choices: ["Yes I would like to add an engineer.", "Yes, I would like to add an intern.", "No, I've added everyone on my team."]
    }).then(data => {
      if (data.member === "Yes I would like to add an engineer.") {
        addEngineer()
      } else if (data.member === "Yes, I would like to add an intern.") {
        addIntern()
      } else {
        createFile()
      }
    })
}

// Function to get engineer details
function addEngineer() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your engineers name?',
      validate: answer => {
        if (answer) {
          return true;
        } else {
          console.log('Please enter your engineers name!');
          return false;
        }
      }
    },
    {
      type: 'number',
      name: 'id',
      message: 'What is your engineers ID number?',
      validate: answer => {
        if (answer) {
          return true;
        } else {
          console.log('Please enter your engineers ID number!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your engineers email?',
      validate: answer => {
        if (answer) {
          return true;
        } else {
          console.log('Please enter your managers email!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your engineers GitHub username?',
      validate: answer => {
        if (answer) {
          return true;
        } else {
          console.log('Please enter your engineers GitHub username!');
          return false;
        }
      }
    },
  ]).then(data => {
    const name = data.name;
    const id = data.id;
    const email = data.email;
    const github = data.github;
    const engineer = new Engineer(name, id, email, github)
    teamArr.push(engineer);
    console.log(teamArr)
    teamMembers()
  })
}

// Function to get intern details
function addIntern() {
  inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your interns name?',
      validate: answer => {
        if (answer) {
          return true;
        } else {
          console.log('Please enter your interns name!');
          return false;
        }
      }
    },
    {
      type: 'number',
      name: 'id',
      message: 'What is your interns ID number?',
      validate: answer => {
        if (answer) {
          return true;
        } else {
          console.log('Please enter your interns ID number!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your interns email?',
      validate: answer => {
        if (answer) {
          return true;
        } else {
          console.log('Please enter your managers email!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'school',
      message: 'What is your interns school?',
      validate: answer => {
        if (answer) {
          return true;
        } else {
          console.log('Please enter your interns school!');
          return false;
        }
      }
    },
  ]).then(data => {
    const name = data.name;
    const id = data.id;
    const email = data.email;
    const school = data.school;
    const intern = new Intern(name, id, email, school)
    teamArr.push(intern);
    teamMembers()
  })
}

function createFile() {
  // Function to write HTML file
  const filename = 'index.html';
  fs.writeFile(filename, generatePage(teamArr), (err) => {
    if (err) {
      return console.log(err)
    }
    console.log("Success!")
  });
};

// Function to conditionally display office number
function displayOfficeNumber(number) {
  return `
  <p id="number"><span class="label">Phone:</span> ${number}</p>
  `
}

// Function to conditionally display github link
function displayGithub(github) {
  return `
  <p id="github"><span class="label">Github: </span>
  <a href="https://github.com/${github}">${github}</a>
  `
}

// Function to conditionally display school
function displaySchool(school) {
  return `
  <p id="school"><span class="label">School:</span> ${school}</p>
  `
}

// Function to generate card for each team member
function employeeCard(team) {
  return `<div class="employee-card">
  <div class="card-header">
  <h2 class="name">${team.name}</h2>
  <p id="role">${team.role}</p>
  </div>
  <hr>
  <div class="card-details">
  <p id="id"><span class="label">ID:</span> ${team.id}</p>
  <p id="email"><span class="label">Email: </span><a href="mailto:{team.email}">${team.email}</a>
  </p>
  ${team.officeNumber ? displayOfficeNumber(team.officeNumber) : ''}
  ${team.school ? displaySchool(team.school) : ''}
  ${team.github ? displayGithub(team.github) : ''}
  </div>
  </div>
  `
}

// Function to generate html page
function generatePage(teamArr) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./assets/css/style.css" />
    <title>Team Profile</title>
  </head>
  <body>
  <header>
    <h1>Team Profile</h1>
  </header>
  <div class="container">
  ${teamArr.map(employeeCard).join('')}
  <div>
  </body>
  `
}

managerDetails()