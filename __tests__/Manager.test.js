const Manager = require('../lib/Manager');

test('gets manager office number', () => {
  const officeNumber = 12git34567890;
  const manager = new Manager("manager name", 1, "manager@gmail.com", officeNumber);
  expect(manager.officeNumber).toBe(officeNumber);
})

test('gets manager officeNumber from getOfficeNumber() method', () => {
  const officeNumber = 1234567890;
  const manager = new Manager("manager name", 1, "manager@gmail.com", officeNumber);
  expect(manager.getOfficeNumber()).toBe(officeNumber);
})

test('gets manager role from getRole() method', () => {
  const role = "&#9749; Manager";
  const manager = new Manager("manager name", 1, "manager@gmail.com", 1234567890);
  expect(manager.getRole()).toBe(role);
})