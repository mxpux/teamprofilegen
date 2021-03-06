// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
const cardBuilder = team => {
    const managerCard = manager =>{
        return `
  <div class="card shadow p-2" style="width: 18rem;">
      <div class="card-header">
        <h2 class="card-title title p-right-2 p-left-2">${manager.getName()}</h2>
        <h4 class="card-text"><i class="fas fa-mug-hot"></i><class="job"> Manager</h4>
      </div>
    
      <ul class="list-group list-group-flush">
      <li class="list-group-item"><b>Id:</b> ${manager.getId()}</li>
      <li class="list-group-item"><b>Email:</b> <a href='mailto: ${manager.getEmail()}'>${manager.getEmail()}</a></li>
      <li class="list-group-item"><b>Office Number:</b> ${manager.getOfficeNumber()}</li>
      </ul>
  </div>
      `
    }
    const internCard = intern =>{
        return `
  <div class="card shadow p-2" style="width: 18rem;">
    <div class="card-header cont">
      <h2 class="card-title title p-right-2 p-left-2">${intern.getName()}</h2>
      <h4 class="card-text"><i class="fas fa-graduation-cap"></i> Intern</h4>
    </div>
    
      <ul class="list-group list-group-flush">
      <li class="list-group-item"><b>Id:</b> ${intern.getId()}</li>
      <li class="list-group-item"><b>Email:</b> <a href='mailto: ${intern.getEmail()}'>${intern.getEmail()}</a></li>
      <li class="list-group-item"><b>School:</b> ${intern.getSchool()}</li>
      </ul>
  </div>
      `
    }
    const engineerCard = engineer =>{
        return `
  <div class="card shadow p-2" style="width: 18rem;">
    <div class="card-header">
      <h2 class="card-title title p-right-2 p-left-2">${engineer.getName()}</h2>
      <h4 class="card-text"><i class="fas fa-glasses"></i> Engineer</h4>
    </div>
    
      <ul class="list-group list-group-flush">
      <li class="list-group-item"><b>Id:</b> ${engineer.getId()}</li>
      <li class="list-group-item"><b>Email:</b> <a href='mailto: ${engineer.getEmail()}'>${engineer.getEmail()}</a></li>
      <li class="list-group-item"><b>GitHub:</b> <a href=https://www.github.com/${engineer.getGithub()}>${engineer.getGithub()}</a></li>
      
      </ul>
  </div>
      `
    }

    const html = [];
    for(const teamMember of team){
        const tempRole = teamMember.getRole();
        console.log(tempRole)
        switch (tempRole){
            case "Engineer":
                 html.push(engineerCard(teamMember));
                 break
            case "Manager":
                 html.push(managerCard(teamMember));
                 break
            case "Intern":
                 html.push(internCard(teamMember));
                 break
        }
    }
    return html.join('')
}

module.exports = team => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@100;500&family=Fjalla+One&display=swap" rel="stylesheet">  

  <title>My Team</title>
</head>

<body>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
      <h1 class="display-4 jumbo">My Team</h1>
      </div>
  </div>

    <div class="row">
    <div class="col-12 d-flex mx-auto justify-content-center">
    ${cardBuilder(team)}
    </div> 
</div>
</body>
</html>
    `
}

