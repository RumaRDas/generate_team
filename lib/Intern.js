// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");

class Intern extends Employee{
    constructor( name, id,  email, school){
        super(name, id, email,)
        this.school = school;
        this.getRole = function(){
            return "Intern";
        };
        this.getSchool = function(){
            return this.school;
        };
    }
    printInfo() {
       
    }
}
 const intern = new Intern(`${this.name}, ${this.id},  ${this.email}, "Intern", ${this.school}`);
 intern.printInfo();
module.exports = Intern;