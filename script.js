function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    console.log("rock");
  } else if (randomNumber === 2) {
    console.log("paper");
  } else {
    console.log("scissor");
  }
}

getComputerChoice();
