function generatePage() {
  `<h1 class="title">${teamArr[0]}<h1>
  Our team has ${teamArr.length} members!
  ${teamArr.map(function(team) {
    return `
    <div class="member-card">
    <ul>
    <li>${team.role}</li>
    <li>${team.id}</li>
    </ul>
    </div>
    `
  }).join('')}
  `
}
  
module.exports = generatePage;