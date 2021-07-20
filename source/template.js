const teamBuilder = team => {
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

    <title>Document</title>
</head>
<body>
    <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4 jumbo" >My Team</h1>
  </div>
</div>

<div class="row">
    <div class="col-12 d-flex justify content center">
    ${cardBuilder(team)}
    </div> 
</div>
</body>
</html>
    `
}

const cardBuilder = team => {
    const managerCard = manager =>{
        return `
        <div class="card" style="width: 18rem;">
    <div class="card-header">
      <h2 class="card-title">${manager.getName()}</h2>
      <h3 class="card-text"><i class="fas fa-mug-hot"></i> Manager</h3>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Id: ${manager.getId()}</li>
      <li class="list-group-item">${manager.getEmail()}</li>
      <li class="list-group-item">${manager.getOfficeNumber()}</li>
    </ul>
  </div>
        `
    }
}