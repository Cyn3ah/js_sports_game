
let teamOneShots = document.querySelector("#teamone-numshots"); 
let teamOneGoals = document.querySelector("#teamone-numgoals"); 
let teamOneShootButton = document.querySelector ("#teamone-shoot-button")

let teamTwoShots = document.querySelector("#teamtwo-numshots"); 
let teamTwoGoals = document.querySelector("#teamtwo-numgoals"); 
let teamTwoShootButton = document.querySelector ("#teamtwo-shoot-button") 

let resetButton = document.querySelector("#reset-button")


teamOneShootButton.addEventListener("click", function() {
    
    let newTeamOneShots = Number(teamOneShots.innerHTML) + 1;
    
    teamOneShots.innerHTML = newTeamOneShots;

  }) 
  
teamTwoShootButton.addEventListener("click", function() {
   
    let newTeamTwoShots = Number(teamTwoShootButton.innerHTML) + 1;
  
    teamTwoShots.innerHTML = newTeamTwoShots;

  })

