console.log("Hello world!");

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  res = Math.floor(Math.random() * choices.length);

  return choices[res];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return [`You win! ${playerSelection} beats ${computerSelection}`, true];
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return [`You win! ${playerSelection} beats ${computerSelection}`, true];
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return [`You win! ${playerSelection} beats ${computerSelection}`, true];
  } else {
    return [`You lose! ${computerSelection} beats ${playerSelection}`, false];
  }
}

function game() {
  for (var i = 0; i < 5; i++) {
    const playerSelection = prompt("Rock, Paper, Scissors?");
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
}

// const rockButton = document.querySelector("#rock");
// const paperButton = document.querySelector("#paper");
// const scissorsButton = document.querySelector("#scissors");
const choicesButton = document.querySelectorAll("button");
const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore");
console.log(playerScore);
console.log(computerScore);
// var playerSelection = "";

console.log(choicesButton);

choicesButton.forEach((choice) => {
  choice.addEventListener("click", () => {
    playerSelection = choice.textContent;
    const computerSelection = getComputerChoice();

    console.log(playRound(playerSelection, computerSelection));

    // Score points
    if (playRound(playerSelection, computerSelection)[1]) {
      // if win
      playerScore.textContent = parseInt(playerScore.textContent) + 1;
    } else if (!playRound(playerSelection, computerSelection)[1]) {
      // if lose
      computerScore.textContent = parseInt(computerScore.textContent) + 1;
    }
  });
});

// console.log(playerSelection);
// choicesButton.addEventListener("click", () => {
//   // playerSelection = rockButton.textContent;
//   console.log(choicesButton);
// });

// game();
