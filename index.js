const Engineer = require('./library/Engineer')
const Intern = require('./library/Intern')
const Manager = require('./library/Manager')
const inquirer = require('inquirer')
const teamArray = [];

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
            message: "What is the manager's ID number?"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the manager's email?"
        },
        {
            type: "input",
            name: "managerOffice",
            message: "What is the manager's office number?"
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

function addEngineer (){

}

function addIntern (){

}

function buildTeam (){

}

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