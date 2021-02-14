const Manager = require('../lib/Manager');

test('creates a manager object', () => {
  const manager = new Manager('Manager Name', 100, 'manager@gmail.com', "Manager", 2149497269);

  expect(manager.name).toEqual(expect.any(String));
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.officeNumber).toEqual(expect.any(Number));
  console.log(manager)

});