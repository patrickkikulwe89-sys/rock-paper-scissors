// This is where my js file begins at TOP
//console.log("This means your script file has connected successfully!");

// Rock - Paper - Scissors Game


let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let pcChoice = Math.random();

    if (pcChoice <= .33)
        return "rock";        
    if (pcChoice <= .66)
        return "paper";
    return "scissors";
}
//console.log("******",getComputerChoice(),"******","\n---(is the PC's random choice)---");

function getHumanChoice() {
    let entry = prompt("What is your choice");
    let human = entry.toLocaleLowerCase();
    
    if (human === "rock" || human === "scissors" || human === "paper")
    return human;
}
//console.log("\n******",getHumanChoice(),"******","\n  (is Your Choice)");


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) return "It is a Tie!";

    if ((humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock") || 
        (humanChoice === "scissors" && computerChoice === "paper")) {
            humanScore++;
            return `Congrats! You win! because **${humanChoice}** beat ${computerChoice}`;
        }
        
    if ((computerChoice === "rock" && humanChoice === "scissors") || 
        (computerChoice === "paper" && humanChoice === "rock") || 
        (computerChoice === "scissors" && humanChoice === "paper")) {
            computerScore++;
            return `Sorry, you lose because **${computerChoice}** beat your ${humanChoice}`;
        }
        
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


