let computer = 0;
let player = 0;

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
    return player++;
  } else if (computerSelection === "paper" && playerSelection === "scissors") {
    return player++;
  } else if (computerSelection === "scissors" && playerSelection === "rock") {
    return player++;
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    return computer++;
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    return computer++;
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    return computer++;
  } else return "sorry lets play again...";
}

function game() {
  for (let i = 0; i < 5; i++) {
    playtheGame();
  }

  console.log(
    `The computer played ${computerSelection}, you played ${playerSelection}`
  );

  if (player === 3) return "Player wins!";
  else if (computer === 3) return "Computer wins!";
}

game();
