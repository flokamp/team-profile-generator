const Employee = require('../lib/Employee');

test('creates an employee object', () => {
  const employee = new Employee("Florence,", 12, "gmail.com");
  expect(typeof(employee)).toBe("object");
})

test('gets employee name', () => {
  const name = "florence";
  const employee = new Employee(name);
  expect(employee.name).toBe(name);
})

test('gets employee id', () => {
  const id = 1;
  const employee = new Employee("florence", id);
  expect(employee.id).toBe(id);
})

test('gets employee email', () => {
  const email = "kampflo2@gmail.com";
  const employee = new Employee("florence", 1, email);
  expect(employee.email).toBe(email);
})

test('gets name from getName() method', () => {
  const name = "florence";
  const employee = new Employee(name);
  expect(employee.getName()).toBe(name);
})

test('gets id from getId() method', () => {
  const id = 1;
  const employee = new Employee("florence", id);
  expect(employee.getId()).toBe(id);
})

test('gets email from getEmail() method', () => {
  const email = "kampflo2@gmail.com";
  const employee = new Employee("florence", 1, email);
  expect(employee.getEmail()).toBe(email);
})

test('get role from getRole() method', () => {
  const role = "Employee";
  const employee = new Employee("florence", 1, "kampflo2@gmail.com", role);
  expect(employee.getRole()).toBe(role);
})