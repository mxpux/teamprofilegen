const Engineer = require('./library/Engineer')
const Intern = require('./library/Intern')
const Manager = require('./library/Manager')
const inquirer = require('inquirer')
const teamArray = [];
const teamBuilder = require('./source/template')
const fs = require('fs');
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// THEN I enter the team manager’s name, employee ID, email address, and office number
function addManager (){
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the Manager's name?"
        },
        {
            type: "input",
            name: "managerId",
            message: "What is the Manager's ID number?"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the Manager's email?"
        },
        {
            type: "input",
            name: "managerOffice",
            message: "What is the Manager's office number?"
        }

    ])
    .then (res => {
        console.log(res)
        const manager = new Manager(res.managerName, res.managerId, res.managerEmail, res.managerOffice);

        teamArray.push(manager)
        crossRoad()
    })
}

addManager();
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
function addEngineer (){
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is the Engineer's name?"
        },
        {
            type: "input",
            name: "engineerId",
            message: "What is the Engineer's ID number?"
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is the Engineer's email?"
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "What is the Engineer's GitHub?"
        }

    ])
    .then (res => {
        const engineer = new Engineer(res.engineerName, res.engineerId, res.engineerEmail, res.engineerGithub);
        teamArray.push(engineer)
        crossRoad()
    })
}
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
function addIntern (){
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is the Intern's name?"
        },
        {
            type: "input",
            name: "internId",
            message: "What is the Intern's ID number?"
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is the Intern's email?"
        },
        {
            type: "input",
            name: "internSchool",
            message: "What is the Intern's school?"
        }

    ])
    .then (res => {
        const intern = new Intern(res.internName, res.internId, res.internEmail, res.internSchool);
        teamArray.push(intern)
        crossRoad()
    })
}

function buildTeam (){
    console.log(teamArray)
    fs.writeFileSync('team.html', teamBuilder(teamArray))
}
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// THEN I exit the application, and the HTML is generated
function crossRoad (){
    inquirer.prompt([
        {
            type: "list",
            name: "answer",
            message: "What team member would you like to add?",
            choices: ["Engineer", "Intern", "All done"]
        }
    ])
    .then (res => {
        switch(res.answer){
            case "Engineer":
                return addEngineer();
            case "Intern":
                return addIntern();
            case "All done":
                return buildTeam();
        }
    })
}