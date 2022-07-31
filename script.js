function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  if (randomNumber === 1) {
    return "rock";
  } else if (randomNumber === 2) {
    return "paper";
  } else if (randomNumber === 3) {
    return "scissors";
  }
}

let computer = getComputerChoice();
let player = prompt("rock, paper, or scissors?").toLowerCase();

function singleRound(player, computer) {
  if (computer === player) {
    console.log("DRAW!");
  } else if (computer === "rock" && player === "paper") {
    console.log(
      `You win! The computer played ${computer} and you played ${player}`
    );
  } else if (computer === "paper" && player === "scissors") {
    console.log(
      `You win! The computer played ${computer} and you played ${player}`
    );
  } else if (computer === "scissors" && player === "rock") {
    console.log(
      `You win! The computer played ${computer} and you played ${player}`
    );
  }
}

singleRound(computer, player);
