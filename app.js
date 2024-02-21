//generates a random number between 1 and 'max'
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//uses getRandomInt() to pick a random element in the choices array
function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[getRandomInt(3)].toLowerCase();
}

//prompts user to input their choice
function getPlayerSelection() {
  let choice = prompt("Rock, Paper, Scissors!").toLowerCase();
  return choice;
}

//variables storing the play choices of each player
const playerSelection = getPlayerSelection();
const computerSelection = getComputerChoice();

//display choices
console.log(`playerSelection: ${playerSelection}`);
console.log(`computerSelection: ${computerSelection}`);

//determines the winner by comparing choices
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("It's a tie, play again!");
  } else if (playerSelection !== computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
      console.log("Rock crushes scissors!");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      console.log("Paper covers rock!");
    } else if (
      playerSelection === "scissors" &&
      computerSelection === "paper"
    ) {
      console.log("Scissors cut paper!");
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
      console.log("Rock crushes scissors!");
    } else if (computerSelection === "paper" && playerSelection === "rock") {
      console.log("Paper covers rock!");
    } else if (
      computerSelection === "scissors" &&
      playerSelection === "paper"
    ) {
      console.log("Scissors cut paper!");
    }
  }
}

//displays string to determine winner
console.log(playRound(playerSelection, computerSelection));
