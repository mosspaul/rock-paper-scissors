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
    let playerChoice = prompt(input).toLowerCase();
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
                return (player === "paper") ? `You win, ${player} beats ${ai}!` : `You lose, ${ai} beats ${player}!`;
            case "paper":
                 return (player === "scissors") ? `You win, ${player} beats ${ai}!` : `You lose, ${ai} beats ${player}!`;
            case "scissors":
                return (player === "rock") ? `You win, ${player} beats ${ai}!` : `You lose, ${ai} beats ${player}!`;
                
        }
    }
}

/*playGame
* make a for loop that plays 5 round
*/
function playGame() {
    let playerPoints = 0;
    let aiPoints = 0;
    for(let i = 0; i < 5; i++) {
        let result = playRound(playerSelection("Enter rock, paper or scissors"), getComputerChoice());
        console.log(result);
        if (result.substring(0, 5) === `You w`) {
            playerPoints++;
        } else if (result.substring(0, 5) === `You l`) {
            aiPoints++;
        }
        if (playerPoints >= 3) {
            break;
        } else if (aiPoints >= 3) {
            break;
        }
    }
    if (playerPoints > aiPoints) {
        console.log(`You won! Great work!`);
    } else if (aiPoints > playerPoints) {
        console.log(`You lost.`);
    } else {
        console.log(`You tied.`);
    }
}

for(let i = 1; i++;) {
    if (i - 1 === 1) {
        playGame();
    } else {
        if (prompt(`Would you like to play round ${i - 1}? Type yes or any key.`).toLowerCase() == `yes`) {
            playGame();
        } else {
            break;
        }
    }
}