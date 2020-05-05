const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const axios = require("axios");


const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const employees = [
];
const generalQuestions = [
    {
        type: "input",
        name: "name",
        message: "Enter name of team member"
    },
    {
        type: "input",
        name: "id",
        message: "Enter Tem Member ID"
    },
    {
        type: "input",
        name: "email",
        message: "Enter Email"
    },
]

const employeeTypeQuestion = {
    type: "list",
    name: "role",
    message: "Enter role of team member",
    choices: [
        "Engineer",
        "Intern",
        "Exit"
    ]
}

const managerQuestion =

{
    type: "input",
    name: "officeNumber",
    message: "Enter office number"
}

const engineerQuestion = {
    type: "input",
    name: "github",
    message: "Enter github username"
}

const internQuestion = {
    type: "input",
    name: "school",
    message: "Enter school name"
}

function menu() {

    inquirer
        .prompt([...generalQuestions, managerQuestion])
        .then(function (data) {
            const manager = new Manager(data.name, data.id, data.email, data.officeNumber, data.role);
            employees.push(manager);
            createTeamMember();
        });
}
function createTeamMember() {
    inquirer
        .prompt(employeeTypeQuestion)
        .then(function (data) {
            switch (data.role) {
                case "Engineer":
                    createEngineer();
                    break;
                case "Intern":
                    createIntern();
                    break;
                default:
                    creatHtmlPage();
                    console.log(employees);
            }
        })
}

function createEngineer() {
    inquirer
        .prompt([...generalQuestions, engineerQuestion])
        .then(function (data) {
            const engineer = new Engineer(data.name, data.id, data.email, data.github, data.role)
            employees.push(engineer);
            createTeamMember();
        })
}

function createIntern() {
    inquirer
        .prompt([...generalQuestions, internQuestion])
        .then(function (data) {
            const intern = new Intern(data.name, data.id, data.email, data.school, data.role)
            employees.push(intern);
            createTeamMember();
        })
}

function creatHtmlPage() {
    html = render(employees);

    fs.writeFileSync("./index.html", html, function (err) {
        if (err) throw err;

        console.log("Base page generated!");
    });
};
menu();
