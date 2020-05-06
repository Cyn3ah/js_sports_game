
let teamOneShots = document.querySelector("#teamone-numshots");
let teamOneGoals = document.querySelector("#teamone-numgoals");
let teamOneShootButton = document.querySelector("#teamone-shoot-button");

let teamTwoShots = document.querySelector("#teamtwo-numshots");
let teamTwoGoals = document.querySelector("#teamtwo-numgoals");
let teamTwoShootButton = document.querySelector("#teamtwo-shoot-button");

let resetButton = document.querySelector("#reset-button");
let numResets = document.querySelector("#num-resets");

resetButton.addEventListener("click", function () {

  let newTeamOneShots = 0;
  teamOneShots.innerHTML = newTeamOneShots;

  let newTeamOneGoals = 0;
  teamOneGoals.innerHTML = newTeamOneGoals;

  let newTeamTwoShots = 0;
  teamTwoShots.innerHTML = newTeamTwoShots;

  let newTeamTwoGoals = 0;
  teamTwoGoals.innerHTML = newTeamTwoGoals;

  let newNumResets = Number(numResets.innerHTML) + 1;

  numResets.innerHTML = newNumResets;
})

teamOneShootButton.addEventListener("click", function () {

  let newTeamOneShots = Number(teamOneShots.innerHTML) + 1;

  teamOneShots.innerHTML = newTeamOneShots;

  let newTeamOneGoals = Number(teamOneGoals.innerHTML) + (Math.random() < 0.5);

  teamOneGoals.innerHTML = newTeamOneGoals;

})

teamTwoShootButton.addEventListener("click", function () {

  let newTeamTwoShots = Number(teamTwoShots.innerHTML) + 1;

  teamTwoShots.innerHTML = newTeamTwoShots;

  let newTeamTwoGoals = Number(teamTwoGoals.innerHTML) + (Math.random() < 0.5);

  teamTwoGoals.innerHTML = newTeamTwoGoals;

})

//   Clicking the "RESET" button should reset all the shot and goal counters and add 1 to the number of resets

