function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    return "rock";
  } else if (randomNumber === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

let computerSelection = getComputerChoice();
let playerSelection = prompt("Rock? Paper? Scissors?").toLowerCase();

function playtheGame(playerSelection, computerSelection) {
  if (computerSelection === playerSelection) {
    return "DRAW!";
  } else if (computerSelection === "rock" && playerSelection === "paper") {
    return "You win! Paper beats rock";
  } else if (computerSelection === "paper" && playerSelection === "scissors") {
    return "You win! Scissors beats paper";
  } else if (computerSelection === "scissors" && playerSelection === "rock") {
    return "You win! Rock beats scissors!";
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    return "You Lose! Rock beats scissors!";
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    return "You Lose! Paper beats rock!";
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    return "You lose! Scissors beats paper!";
  } else return "sorry lets play again...";
}

function game() {
  for (let i = 0; i < 5; i++) {}
}

console.log(playtheGame(playerSelection, computerSelection));
