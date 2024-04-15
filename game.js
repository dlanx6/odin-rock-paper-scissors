function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

let score = 0;

function playRound() {
    const playerSelection = promt("Rock, Paper, or Scissors?");
    const computerSelection = getComputerChoice();
    if (playerSelection.toLowerCase() === computerSelection) {
        return "Tie!";
    }
    else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
        return `You Win! ${playerSelection.toLowerCase()} beats ${computerSelection}`;
    }
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
        return `You Win! ${playerSelection.toLowerCase()} beats ${computerSelection}`;
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
        return `You Win! ${playerSelection.toLowerCase()} beats ${computerSelection}`;
    }
    else {
        return `You Lose! ${computerSelection} beats ${playerSelection.toLowerCase()}`;
    }
}


function playGame() {
    for (let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice();
        console.log(playRound());
    }  
}

playGame();