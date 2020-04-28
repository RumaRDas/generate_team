// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");

class Manager extends Employee{
    constructor( name, id, email, role, officeNumber){
        super(name,id, email)
        this.officeNumber = officeNumber;
        this.getName = function(){
            return this.name;
        };
    }
    printInfo() {
     
    }
}
 const manager = new Manager(`${this.name}, ${this.id},  ${this.email}, "Manager", ${this.officeNumber}`);
 intern.printInfo();
module.exports = Manager;