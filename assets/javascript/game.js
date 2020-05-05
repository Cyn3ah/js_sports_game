// The best-practice is to pull all the elements into variables, in order to avoid
// searching the HTML tree for these elements more than once:
let teamOneShots = document.querySelector("#teamone-numshots"); 
let teamOneGoals = document.querySelector("#teamone-numgoals"); 
let teamOneShootButton = document.querySelector ("#teamone-shoot-button")

let teamTwoShots = document.querySelector("#teamtwo-numshots"); 
let teamTwoGoals = document.querySelector("#teamtwo-numgoals"); 
let teamTwoShootButton = document.querySelector ("#teamtwo-shoot-button") 





// This line says, "I want to listen for someone to CLICK my
// incrementButton, and any time I 'hear' that event occur,
// I want some code to run.
teamOneShootButton.addEventListener("click", function() {
    // Any code you write in here, will run every time incrementButton
    // is clicked.
    // Run the console.log function to display some text in the console:
    console.log("+ button clicked");
  }) // We have to close the curly braces and parentheses we opened above.

    // This line says, "I want to listen for someone to CLICK my
    // incrementButton, and any time I 'hear' that event occur,
    // I want some code to run.
    teamTwoShootButton.addEventListener("click", function() {
    // Any code you write in here, will run every time incrementButton
    // is clicked.
    // Run the console.log function to display some text in the console:
    console.log("+ button clicked");
  }) // We have to close the curly braces and parentheses we opened above.

  teamOneShootButton.addEventListener("click", function() {
    console.log("+ button clicked");
    // Calculate the new value for our counter:
    let teamOneShots = Number(teamOneShootButton.innerHTML) + 1;
  })

    teamTwoShootButton.addEventListener("click", function() {
    console.log("+ button clicked");
    // Calculate the new value for our counter:
    let teamTwoShots = Number(teamTwoShootButton.innerHTML) + 1;
  })