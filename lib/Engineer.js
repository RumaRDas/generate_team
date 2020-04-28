// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");

class Engineer extends Employee{
    constructor(id, name,  email, github){
        super(id, name, "Engineer",email)
        this.github = github;
    }
    printInfo() {
        console.log(`Members id  ${this.id} `);
        console.log(`Members Name ${this.name}`);
        console.log(`Members email ${this.email}`);
        console.log(`Members Role ${this.role}`);
    }
}
 const engineer = new Engineer(`${this.name}, ${this.id},  ${this.email}, "Engineer", ${this.github}`);
engineer.printInfo();

module.exports = Engineer;