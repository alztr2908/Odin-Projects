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

function displayResults(results, playerSelection, computerSelection) {
  if (results == "win") {
    playerScore.textContent = parseInt(playerScore.textContent) + 1;
    resultsDisplay.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
  } else if (results == "lose") {
    computerScore.textContent = parseInt(computerScore.textContent) + 1;
    resultsDisplay.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
  } else {
    resultsDisplay.textContent = `It's a tie!`;
  }
}

function setMatch(currPlayerScore, currComputerScore) {
  if (currPlayerScore == 5) {
    resultsDisplay.textContent += `You won the game! You win!`;
    return;
  }
  if (currComputerScore == 5) {
    resultsDisplay.textContent += `You lost the game! Computer wins!`;
    return;
  }
}

const choicesButton = document.querySelectorAll("button");
const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore");
const resultsDisplay = document.querySelector(".resultsDisplay");

choicesButton.forEach((choiceButton) => {
  choiceButton.addEventListener("click", () => {
    // Reset score once computer or player score reached to 5
    if (playerScore.textContent == 5 || computerScore.textContent == 5) {
      playerScore.textContent = "0";
      computerScore.textContent = "0";
    }

    const playerSelection = choiceButton.textContent;
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);

    // Score points and display match results
    displayResults(result, playerSelection, computerSelection);

    // Display winner when either score is 5
    setMatch(playerScore.textContent, computerScore.textContent);
  });
});
