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

let computerScore = 0;
let playerScore = 0;
let playerhtml = document.querySelector("#player");
let computerhtml = document.querySelector("#computer");
playerhtml.textContent = `Player Score: ${playerScore}`;
computerhtml.textContent = `Computer Score: ${computerScore}`;

let div = document.querySelector("#results");

document.querySelectorAll("#selection").forEach((selectionbutton) => {
  selectionbutton.addEventListener("click", (e) => {
    singleRound(selectionbutton.value);
  });
});

function singleRound(player) {
  let computer = getComputerChoice();

  if (computer === player) {
    div.textContent = "DRAW!";
  } else if (computer === "rock" && player === "paper") {
    div.textContent = `You win!
      You played ${player}
      The computer played ${computer}
      *${player} beats ${computer}*`;
    return (
      (playerhtml.textContent = `Player Score: ${++playerScore}`),
      game(playerScore, computerScore)
    );
  } else if (computer === "paper" && player === "scissors") {
    div.textContent = `You win! 
      You played ${player}
      The computer played ${computer}
      *${player} beats ${computer}*`;
    return (
      (playerhtml.textContent = `Player Score: ${++playerScore}`),
      game(playerScore, computerScore)
    );
  } else if (computer === "scissors" && player === "rock") {
    div.textContent = `You win! 
      You played ${player} 
      The computer played ${computer}
      *${player} beats ${computer}*`;
    return (
      (playerhtml.textContent = `Player Score: ${++playerScore}`),
      game(playerScore, computerScore)
    );
  } else if (computer === "rock" && player === "scissors") {
    div.textContent = `You lose! 
      You played ${player} 
      The computer played ${computer}
      *${computer} beats ${player}*`;
    return (
      (computerhtml.textContent = `Computer Score: ${++computerScore}`),
      game(playerScore, computerScore)
    );
  } else if (computer === "paper" && player === "rock") {
    div.textContent = `You lose! 
      You played ${player}
      The computer played ${computer}
      *${computer} beats ${player}*`;
    return (
      (computerhtml.textContent = `Computer Score: ${++computerScore}`),
      game(playerScore, computerScore)
    );
  } else if (computer === "scissors" && player === "paper") {
    div.textContent = `You lose! 
      You played ${player}
      The computer played ${computer}
      *${computer} beats ${player}*`;
    return (
      (computerhtml.textContent = `Computer Score: ${++computerScore}`),
      game(playerScore, computerScore)
    );
  }
}

function game(playerScore, computerScore) {
  if (computerScore === 5) {
    alert("Computer Wins!");
  } else if (playerScore === 5) {
    alert("Player Wins!");
  }
}

function reset() {
  let newPlayer = 0;
  let newComputer = 0;
  return (
    (playerhtml.textContent = `Player Score: ${newPlayer}`),
    (computerhtml.textContent = `Computer Score: ${newComputer}`),
    (computerScore = 0),
    (playerScore = 0)
  );
}
