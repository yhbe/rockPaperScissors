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
    return "You Lose! Scissors beats paper!";
  } else return "sorry lets play again...";
}

function game() {
  let computer = 0;
  let player = 0;

  for (let i = 0; i < 5; i++) {
    let match = playtheGame(playerSelection, computerSelection);

    if (match.includes("win")) {
      player++;
      prompt(match);
    } else if (match.includes("Lose")) {
      computer++;
      prompt(match);
    } else if (match.includes("DRAW")) {
      i--;
      prompt(match);
    }

    if (computer === 3) {
      return alert("Computer wins!");
    } else if (player === 3) {
      return alert("Player wins!");
    }
  }
}

game();
