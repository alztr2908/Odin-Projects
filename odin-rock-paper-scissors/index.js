// Sanity check
console.log("Hello world!");

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  res = Math.floor(Math.random() * choices.length);

  return choices[res];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "tie";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "win";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "win";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "win";
  } else {
    return "lose";
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
const resultsDisplay = document.querySelector(".resultsDisplay");
// var playerSelection = "";

console.log(choicesButton);

choicesButton.forEach((choice) => {
  choice.addEventListener("click", () => {
    playerSelection = choice.textContent;
    const computerSelection = getComputerChoice();

    // Reset score once computer or player score reached to 5
    if (playerScore.textContent == 5 || computerScore.textContent == 5) {
      playerScore.textContent = "0";
      computerScore.textContent = "0";
    }

    // Score points and display match results
    if (playRound(playerSelection, computerSelection) == "win") {
      playerScore.textContent = parseInt(playerScore.textContent) + 1;
      resultsDisplay.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (playRound(playerSelection, computerSelection) == "lose") {
      computerScore.textContent = parseInt(computerScore.textContent) + 1;
      resultsDisplay.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
    } else {
      resultsDisplay.textContent = `It's a tie!`;
    }

    // Display winner when either score is 5
    if (playerScore.textContent == 5 || computerScore.textContent == 5) {
      if (playerScore.textContent == 5) {
        resultsDisplay.textContent += `You won the game! You win!`;
      } else if (computerScore.textContent == 5) {
        resultsDisplay.textContent += `You lost the game! Computer wins!`;
      }
    }
  });
});

// game();
