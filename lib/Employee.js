// TODO: Write code to define and export the Employee class
class Employee {
    constructor(id, name, role, email) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;
    }
    printInfo() {
        console.log(`Members id  ${this.id} `);
        console.log(`Members Name ${this.name}`);
        console.log(`Members email ${this.email}`);
        console.log(`Members Role ${this.role}`);
    }
}
const employee = new Employee(`${this.name}, ${this.id},  ${this.email}, ${this.role}`);

employee.printInfo();
module.exports = Employee;