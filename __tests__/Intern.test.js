const Intern = require('../lib/Intern');

test('gets intern school', () => {
  const school = "University of Texas";
  const intern = new Intern("intern name", 1, "intern@gmail.com", school);
  expect(intern.school).toBe(school);
})

test('gets intern school from getCchool() method', () => {
  const school = "University of Texas";
  const intern = new Intern("intern name", 1, "intern@gmail.com", school);
  expect(intern.getSchool()).toBe(school);
})

test('gets intern role from getRole() method', () => {
  const role = "&#127890; Intern";
  const intern = new Intern("intern name", 1, "intern@gmail.com", "University of Texas");
  expect(intern.getRole()).toBe(role);
})