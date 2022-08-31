/* getComputerChoice
* randomly return one of three values: rock, paper or scissors;
*/
list = ["rock", "paper", "scissors"];
function getComputerChoice() {
    randNum = Math.floor(Math.random() * 3);
    return list[randNum];
}
/* getUserChoice
* ask user for one of three values: rock, paper or scissors;
*/

function playerSelection(){
    let playerChoice = prompt("Enter rock, paper or scissors").toLowerCase();
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
        playRound();
    }  else {
        switch (ai) {
            case "rock":
                (player === "paper") ? console.log(`You win, ${player} beats ${ai}`) : console.log(`You win, ${ai} beats ${player}`);
        }
    }
}

/*playGame
* make a for loop that plays 5 round
*/
function playGame() {
    for(let i = 0; i < 5; i++) {
        playRound();
    }
}
