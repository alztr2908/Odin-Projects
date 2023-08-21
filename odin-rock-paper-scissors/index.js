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
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function game() {
  for (var i = 0; i < 5; i++) {
    const playerSelection = prompt("Rock, Paper, Scissors?");
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
}

game();
