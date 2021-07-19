const Engineer = require('./library/Engineer')
const Intern = require('./library/Intern')
const Manager = require('./library/Manager')
const inquirer = require('inquirer')

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

}