// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");

class Intern extends Employee{
    constructor( name, id,  email, school){
        super(name,id, "Intern", email )
        this.school = school;
    }
    printInfo() {
        console.log(`Members id  ${this.id} `);
        console.log(`Members Name ${this.name}`);
        console.log(`Members email ${this.email}`);
        console.log(`Members Role ${this.role}`);
    }
}
 const intern = new Intern( "ruma", 1 ,"Intern");
 intern.printInfo();
module.exports = Intern;