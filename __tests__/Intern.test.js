const Intern = require('../lib/Intern');

test('creates an intern object', () => {
  const intern = new Intern('Intern Name', 200, 'intern@gmail.com', "Intern", "School Name");

  expect(intern.name).toEqual(expect.any(String));
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.school).toEqual(expect.any(String));
  console.log(intern)

});