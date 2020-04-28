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

// Write code to use inquirer to gather information about the development team members,
inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "Enter name of team member"
        },
        {
            type: "input",
            name: "role",
            message: "Enter role of team member"
        },
        {
            type: "input",
            name: "Id",
            message: "Enter Tem Member ID"
        },
        {
            type: "input",
            name: "GitHubUser",
            message: "Enter  GitHub Username"
        },
    ]

    )
    .then(function ({ GitHubUser }) {
        const queryUrl = `https://api.github.com/users/${GitHubUser}?client_id=b77dd6d5ba39bf8bca34&client_secret=8a78678b6f246d35c590f5f6088859266fc6b0d2`;
        axios.get(queryUrl).then(function (res) {
            console.log(res.data);
            console.log(res.data.email);
        });
    });

// and to create objects for each team member (using the correct classes as blueprints!)


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
