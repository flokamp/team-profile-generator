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
  <li class="list-group-item p-4"><span class="text-muted">Number:</span> ${number}</li>
  `
}

// Function to conditionally display github link
function displayGithub(github) {
  return `
  <li class="list-group-item p-4"><span class="text-muted text-decoration-none">Github: </span><a href="https://github.com/${github}">${github}</a></li>
  `
}

// Function to conditionally display school
function displaySchool(school) {
  return `
  <li class="list-group-item p-4"><span class="text-muted">School: </span>${school}</li>
  `
}

// Function to generate card for each team member
function employeeCard(team) {
  return `<div class="col">
    <div class="card m-4 shadow p-3 bg-body rounded">
      <div class="card-body">
        <h1 class="card-title">${team.name}</h1>
        <h5 class="fw-light">${team.role}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item p-4"><span class="text-muted">ID:</span>  ${team.id}</li>
        <li class="list-group-item p-4"><span class="text-muted">Email: </span><a class="text-decoration-none" href="mailto:${team.email}">${team.email}</a></li>
        ${team.officeNumber ? displayOfficeNumber(team.officeNumber) : ''}
        ${team.school ? displaySchool(team.school) : ''}
        ${team.github ? displayGithub(team.github) : ''}
      </ul>
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
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <title>Team Profile</title>
  </head>
  <body>
    <header>
      <div class="navbar text-white sticky-top navbar-dark bg-dark p-4 mb-4">
        <h1 class="display-5 m-auto">Team Profile<h1>
      </div>
    </header>
    <div class="container-md">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        ${teamArr.map(employeeCard).join('')}
      </div>
    </div>
  </body>
  `
}

managerDetails()