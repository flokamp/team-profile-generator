const Engineer = require('../lib/Engineer');

test('gets engineer github', () => {
  const github = "flokamp";
  const engineer = new Engineer("engineer name", 1, "engineer@gmail.com", github);
  expect(engineer.github).toBe(github);
})

test('gets engineer github from get getGithub() method', () => {
  const github = "flokamp";
  const engineer = new Engineer("engineer name", 1, "engineer@gmail.com", github);
  expect(engineer.getGithub()).toBe(github);
})

test('gets engineer role from getRole() method', () => {
  const role = "&#128187; Engineer";
  const engineer = new Engineer("engineer name", 1, "engineer@gmail.com", "flokamp");
  expect(engineer.getRole()).toBe(role);
})