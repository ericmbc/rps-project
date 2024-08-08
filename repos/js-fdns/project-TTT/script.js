let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    const randomInt = getRandomInt(3);
        if (randomInt === 2) {
            return str = "rock"
        } else if (randomInt === 1) {
            return str = "paper"
        } else {
            return str = "scissors"
        }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getHumanChoice() {
    const humanChoice = prompt("Type Rock, Paper, or Scissors!");
    let lowercaseStr = humanChoice.toLowerCase();
    return lowercaseStr;
}

function playRound() {
    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();

    if (computerSelection === humanSelection) {
        console.log("human selection: " + humanSelection + ", " + "computer selection: " + computerSelection);
        return "It's a draw!";
    } else if (
        (computerSelection === "rock" && humanSelection === "scissors") ||
        (computerSelection === "paper" && humanSelection === "rock") ||
        (computerSelection === "scissors" && humanSelection === "paper") 
    ) {
        console.log("human selection: " + humanSelection + ", " + "computer selection: " + computerSelection);
        return "computer wins";
    } else {
        console.log("human selection: " + humanSelection + ", " + "computer selection: " + computerSelection);
        return "human wins";
    }
}

function updateScore(roundWinner) {
    if (roundWinner === "computer wins") {
        computerScore++;
        console.log("computer score:" + computerScore + " " + "human score:" + humanScore);
    } else if (roundWinner === "human wins") {
        humanScore++;
        console.log("computer score:" + computerScore + " " + "human score:" + humanScore);
    } else {
        console.log("computer score:" + computerScore + " " + "human score:" + humanScore);
    }
}

function playGame() {
    // let result = playRound(humanSelection, computerSelection);
    for (let round = 0; round < 5; round++) {
        let roundWinner = playRound();
        updateScore(roundWinner);
    }

    if (humanScore > computerScore) {
        return "human wins game!!!"
    } else if (computerScore > humanScore) {
       return "computer wins game!!!"
    } else {
        return 
    }
} 

// console.log(playGame(humanSelection, computerSelection))
console.log(playGame());