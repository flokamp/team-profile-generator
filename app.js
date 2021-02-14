const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let teamArr = [];

// Function to get team name
function teamName() {
  inquirer.prompt({
      type: 'input',
      name: 'teamname',
      message: 'What is your team name?',
      validate: answer => {
        if (answer) {
          return true;
        } else {
          console.log('Please enter your team name!');
          return false;
        }
      }
    }).then(data => {
      let teamProfileName = data.teamname;
      managerDetails()
    })
}

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

console.log(teamProfileName)
  });
};

function generatePage(teamArr) {
  return `<h1 class="title">Test<h1>
  ${teamArr.map(function(team) {
    return `
    <div class="member-card">
    <ul>
    <li>${team.role}</li>
    <li>${team.id}</li>
    <li>${team.email}</li>
    <li>${team.officeNumber ? team.officeNumber : ''}</li>
    <li>${team.school ? team.school : ''}</li>
    <li>${team.github ? team.github : ''}</li>
    </ul>
    </div>
    `
  }).join('')}
  <footer></footer>
  `
}

teamName();