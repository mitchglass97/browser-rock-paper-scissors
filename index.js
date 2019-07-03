function computerPlay() {
    let rand = Math.floor(Math.random() * 3);
    switch(rand) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2: 
            return "scissors";
    }
}

// Takes a choice from player and computer and determines winner
// returns winner in form of a text string, either "player", 
// "computer", or "tie".
function playRound(player) {

    // clear background color of all buttons
    ['rock', 'paper', 'scissors'].forEach(id => {
        document.getElementById(id).classList.remove('chosen', 'incorrect');
    })


    let computer = computerPlay();
    let winner = 0;
    //console.log('player chose: ' + player);
    //console.log('computer chose: ' + computer);

    switch(player) {
        case "rock":
            if(computer === "paper") {
                winner = 2;
            } else if(computer === "scissors") {
                winner = 1;
            }
            break;
        case "paper":
            if(computer === "scissors") {
                winner = 2;
            } else if(computer === "rock") {
                winner = 1;
            }
            break;
        case "scissors":
            if(computer === "rock") {
                winner = 2;
            } else if(computer === "paper") {
                winner = 1;
            }
            break;
    }

    // if winner = 1, player won. if 2, computer won. if 0, tie.
    let results = document.getElementById('results');
    let buttonChoice = document.getElementById(String(player));
    let gameOver = false;

    // Player wins. Increment player score and change chosen button to green
    if(winner === 1) {
        console.log('player wins');
        let playerScore = document.getElementById('player-score');
        playerScore.textContent = 1 + parseInt(playerScore.textContent, 10)
        if(parseInt(playerScore.textContent, 10) === 5) {
            gameOver = true;
            console.log('game over');
        }
        results.textContent = 'You won the round-- ' + player + ' beats ' + computer + '.';
        buttonChoice.classList.add('chosen');
    } 
    
    // Player loses. Increment computer score and change chosen button to red
    else if (winner === 2) {
        console.log('computer wins');
        let computerScore = document.getElementById('computer-score');
        computerScore.textContent = 1 + parseInt(computerScore.textContent, 10);
        if(parseInt(computerScore.textContent, 10) === 5) {
            gameOver = true;
            console.log('game over');
        }
        results.textContent = 'You lost the round-- ' + player + ' is beaten by ' + computer + '.';
        buttonChoice.classList.add('incorrect');
    } else {
        console.log('tie');
        results.textContent = 'Tie round. Computer also chose ' + computer + '.';
    } 

    if(gameOver === true) {
        results.textContent = 'Game over! Click to play again!';
        //let restartButton = document.createElement('button');
        //restartButton.textContent = 'Play Again';
        //document.getElementById('results').appendChild(restartButton);
        return true;
    }


}

// Loops through five rounds of the game. The user will
// be prompted five times. Result of each round is printed
// to console. After five rounds, result of the game is
// printed to console. 
function game() {
    var round;
    var playerWins = 0;
    var computerWins = 0;
    var ties = 0;

    for (let round = 0; round < 5; round++) {
        // Computer and Player make their pick
        let computer = computerPlay();
        let player = prompt("enter rock, paper, or scissors");
        player = player.toLowerCase();
        let result = playRound(player, computer);
        if(result === "player") {
            playerWins++;
        } else if (result === "computer") {
            computerWins++;
        } else {
            ties++;
        }
        console.log("---------------------")
    }
    
    // See who won
    if(playerWins > computerWins) {
        console.log("You win the game! " + playerWins + " to " + computerWins + ".");
    } else if(playerWins < computerWins) {
        console.log("You lose the game! " + computerWins + " to " + playerWins + ".");
    } else {
        console.log("Tie game! " + playerWins + " to " + computerWins + ".");
    }
    console.log("Refresh the page to play again!");
}

let gameOver = false;
function buttonClick() {
    console.log(gameOver);
    if(!gameOver) {
        let playerChoice = this.id;
        if(playRound(playerChoice)) {
            gameOver = true;
        }
    }
    if(gameOver) {
        let restartButton = document.getElementById('restart-button');
        restartButton.style.visibility = 'visible';
    }
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', buttonClick);
});
