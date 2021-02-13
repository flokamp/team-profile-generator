const Employee = require('../lib/Employee');

test('creates an employee object', () => {
  const employee = new Employee();
  player.name = "Florence";
  expect(employee.name).toBe('Florence');
  expect(employee.id).toEqual(expect.any(String));
  expect(employee.email).toEqual(expect.any(String));
  expect(player.getName()).tobe('Florence');
  expect(player.getId()).toEqual(expect.any(String));
  expect(player.getEmail()).toEqual(expect.any(String));

  expect(player.getRole()).tobe("Employee");
});