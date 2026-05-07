// This is where my js file begins at TOP

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
    
    if (human === "rock" || human === "scissors" || human === "paper") {
        return human;
    } else (!entry) 
    return "Invalid entry! Round skipped.";
    
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) return "It is a Tie!";

    if ((humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock") || 
        (humanChoice === "scissors" && computerChoice === "paper")) {
            humanScore++;
            return `CONGRATS! You win because **${humanChoice}** beat ${computerChoice}`;
        }
        
    if ((computerChoice === "rock" && humanChoice === "scissors") || 
        (computerChoice === "paper" && humanChoice === "rock") || 
        (computerChoice === "scissors" && humanChoice === "paper")) {
            computerScore++;
            return `Sorry, you lose because **${computerChoice}** beat ${humanChoice}`;
        } 
        
}

function playGame() {
    for (let i = 0; i < 5; i++) {

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log(`--- Round #${i + 1} ---`);
        console.log(playRound(humanSelection, computerSelection));
        console.log("Your Choice:", humanSelection, "\nPC Choice:", computerSelection);
        console.log("Current Score:-\n You:", humanScore, "\n PC:", computerScore);
    }
}

playGame();