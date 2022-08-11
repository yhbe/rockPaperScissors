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

document.querySelectorAll("#selection").forEach((selectionbutton) => {
  selectionbutton.addEventListener("click", (e) => {
    singleRound(selectionbutton.value);
  });
});

function singleRound(player) {
  let computer = getComputerChoice();

  if (computer === player) {
    console.log("DRAW!");
  } else if (computer === "rock" && player === "paper") {
    console.log(
      `You win! 
      You played ${player}
      The computer played ${computer}
      *${player} beats ${computer}*`
    );
    return playerScore++;
  } else if (computer === "paper" && player === "scissors") {
    console.log(
      `You win! 
      You played ${player}
      The computer played ${computer}
      *${player} beats ${computer}*`
    );
    return playerScore++;
  } else if (computer === "scissors" && player === "rock") {
    console.log(
      `You win! 
      You played ${player} 
      The computer played ${computer}
      *${player} beats ${computer}*`
    );
    return playerScore++;
  } else if (computer === "rock" && player === "scissors") {
    console.log(
      `You lose! 
      You played ${player} 
      The computer played ${computer}
      *${computer} beats ${player}*`
    );
    return computerScore++;
  } else if (computer === "paper" && player === "rock") {
    console.log(
      `You lose! 
      You played ${player}
      The computer played ${computer}
      *${computer} beats ${player}*`
    );
    return computerScore++;
  } else if (computer === "scissors" && player === "paper") {
    console.log(
      `You lose! 
      You played ${player}
      The computer played ${computer}
      *${computer} beats ${player}*`
    );
    return computerScore++;
  }
}

// function game() {
//   // for (let i = 0; i < 5; i++) {
//   //   singleRound();
//   // }
//   if (computerScore > playerScore) {
//     console.log("Computer wins!!");
//   } else if (playerScore > computerScore) {
//     console.log("Player wins!!");
//   } else console.log("Its a tie..");
// }

// game();
