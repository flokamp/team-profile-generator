class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;  
  }
  getName() {
    return `${this.name}`;
  }
  getId() {
    return `${this.id}`;
  }
  getEmail() {
    return `${this.email}`;
  }
  getRole() {
    return "Employee";
  }
}

const employee = new Employee('Florence', 100, 'kampflo2@gmail.com');
console.log(employee)

module.exports = Employee;