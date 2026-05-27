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

function getHumanChoice() {
    let entry = prompt("What is your choice");
    let human = entry.toLocaleLowerCase();
    
    if (human === "rock" || human === "scissors" || human === "paper") {
        return human;
    } else //removed syntax for correcting invalid entries and just return a message that the round is skipped
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
    //Removing this logic to work on DOM manipulation and event listeners for buttons
    
    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const humanSelection = button.id;
            const computerSelection = getComputerChoice();
            const result = playRound(humanSelection, computerSelection);
            document.getElementById("results").innerHTML = result;
            document.getElementById("score").innerHTML = `Score: Human ${humanScore} - Computer ${computerScore}`;
        
            if (humanScore === 5) {
                document.getElementById("final-result").innerHTML = "Congratulations! You won the game!";
                document.getElementById("final-result").style.cssText = "color: green; font-weight: bold; font-size: 20px"; //Indicates win with green font color
            } else if (computerScore === 5) {
                document.getElementById("final-result").innerHTML = "Sorry, you lost the game!";
                document.getElementById("final-result").style.cssText = "color: red; font-weight: bold; font-size: 20px"; //Indicates loss with red font color
            }
            //When either player reaches 5 points, reset the scores to 0 to allow for a new game without refreshing the page
            if (humanScore === 5 || computerScore === 5) {
                humanScore = 0;
                computerScore = 0;
            }
            
        });
    });
}

playGame();



/////////////////////////////////
//For now, remove the logic that plays exactly five rounds.
//Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)
//Add a div for displaying results and change all of your console.logs into DOM methods.
//Display the running score, and announce a winner of the game once one player reaches 5 points.
//You will likely have to refactor (rework/rewrite) your original code to make it work for this. That’s OK! Reworking old code is an important part of a programmer’s life.

