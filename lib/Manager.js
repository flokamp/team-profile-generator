const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    this.role = "&#9749; Manager";
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;