// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name,id , email, role) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;
        this.getName = function(){
            return this.name;
        };
        this.getId = function(){
            return this.id;
        };
        this.getEmail = function(){
            return this.email;
        };
        this.getRole = function(){
            return "Employee";
        }

    }

    printInfo() {
       
    }
      };

   
const employee = new Employee(`${this.name}, ${this.id},  ${this.email},"Employee",  ${this.github}`);

employee.printInfo();

module.exports = Employee;