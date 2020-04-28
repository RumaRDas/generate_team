// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");

class Engineer extends Employee {
    constructor(id, name, email, github) {
        super(id, name, email)
        this.github = github;
        this.getRole = function(){
            return "Engineer";
        };
        this.getGithub= function(){
            return this.github;
        };

    }
    printInfo() {

    }
}
const engineer = new Engineer(`${this.name}, ${this.id},  ${this.email}, "Engineer", ${this.github}`);
engineer.printInfo();

module.exports = Engineer;