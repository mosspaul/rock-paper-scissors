const score = document.querySelector(".score");
const body = document.querySelector("body");
const button = document.querySelectorAll("button");
const message = document.createElement("div");
message.classList.add("message");
body.appendChild(message);


let playerPoints = 0;
let aiPoints = 0;


button.forEach(button => button.addEventListener("click", handleClick));

// This function resets all of the 
function playAgainHandler() {
    const playAgain = document.createElement("button");
    body.appendChild(playAgain);
    playAgain.textContent = "Play Again";
    playAgain.addEventListener("click", function () {
        playerPoints = 0;
        aiPoints = 0;
        body.removeChild(playAgain);
    });
    score.textContent = `Player: 0 to AI: 0`;
    message.textContent ="";
}


function handleClick(e) {
    if (playerPoints >= 5) {
        message.textContent = "You won!";  
        playAgainHandler();   
        return;

    } else if (aiPoints >= 5) {
        message.textContent = "You lost!";
        playAgainHandler(); 
        return;
    }
    playGame(e.target.textContent)
}
/* getComputerChoice
* randomly return one of three values: rock, paper or scissors;
*/
function getComputerChoice() {
    list = ["rock", "paper", "scissors"];
    randNum = Math.floor(Math.random() * 3);
    return list[randNum];
}
/* getUserChoice
* ask user for one of three values: rock, paper or scissors;
*/

function playerSelection(input){
    let playerChoice = input.toLowerCase();
    if (playerChoice === "rock" || "paper" || "scissors") {
        return playerChoice;
    } else {
        playerSelection();
    }
}
/* playRound
* do both player and computer moves
* compare and find out winner
* print winner to console
*/
function playRound(player, ai) {
    if (ai === player) {
        return `Sorry, it's a tie!`
    }  else {
        switch (ai) {
            case "rock":
                return (player === "paper") ? `Good job, ${player} beats ${ai}!` : `Better luck next time, ${ai} beats ${player}!`;
            case "paper":
                 return (player === "scissors") ? `Good job, ${player} beats ${ai}!` : `Better luck next time, ${ai} beats ${player}!`;
            case "scissors":
                return (player === "rock") ? `Good job, ${player} beats ${ai}!` : `Better luck next time, ${ai} beats ${player}!`;
                
        }
    }
}

/*playGame
* make a for loop that plays 5 round
*/
function playGame(input) {

    let result = playRound(playerSelection(input), getComputerChoice());
    message.textContent = result;
    if (result.substring(0, 1) === `G`) {
        playerPoints++;
        score.textContent = `Player: ${playerPoints} to AI: ${aiPoints}`;
    } else if (result.substring(0, 1) === `B`) {
        aiPoints++;
        score.textContent = `Player: ${playerPoints} to AI: ${aiPoints}`;
    }
        
    
}
