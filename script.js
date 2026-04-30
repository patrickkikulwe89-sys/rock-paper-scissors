// This is where my js file begins at TOP
//console.log("This means your script file has connected successfully!");

// Rock - Paper - Scissors Game

// Set up PC choice
function getComputerChoice() {
    let userChoice = Math.random();

    if (userChoice <= .33)
        return "Rock";        
    if (userChoice <= .66)
        return "Paper";
    return "Scissors";
}
console.log("******",getComputerChoice(),"******","\n---(is the PC's random choice)---");


/*
function getHumanChoice() {
    let human = prompt("What is your choice")
    return;
}
function playRound(humanChoice, computerChoice) {
  // your code here!
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
