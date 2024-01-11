function getComputerChoice(){
    let randNum = Math.floor(Math.random() * 3) + 1;
    let computerChoice;
    if (randNum === 1){
        computerChoice = 'Rock';
    }
    else if(randNum === 2){
        computerChoice = 'Paper';
    }
    else{
        computerChoice = 'Scissors';
    }
    return computerChoice;
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();


    if(playerSelection === computerSelection){
        console.log("It's a tie! Play another round.");
        return null;
    }
    if(playerSelection === 'ROCK' && computerSelection === 'PAPER'){
        console.log('Round lost. Paper beats Rock!');
        return false;
    }
    if(playerSelection === 'ROCK' && computerSelection === 'SCISSORS'){
        console.log('Round won! Rock beats Scissors!');
        return true;
    }
    if(playerSelection === 'PAPER' && computerSelection === 'SCISSORS'){
        console.log('Round lost! Scissors beat Paper!');
        return false;
    }
    if(playerSelection === 'PAPER' && computerSelection === 'ROCK'){
        console.log('Round won! Paper beats Rock!');
        return true;
    }
    if(playerSelection === 'SCISSORS' && computerSelection === 'ROCK'){
        console.log('Round lost! Rock beats Scissors!');
        return false;
    }
    if(playerSelection === 'SCISSORS' && computerSelection === 'PAPER'){
        console.log('Round won! Scissors beat Paper!');
        return true;
    }
}



function game(){
    let playerScore = 0;
    let opponentScore = 0;
    let gameInProgress = true;

    document.addEventListener('DOMContentLoaded', function () { // DOMContentLoaded ensures JS runs after HTML is fully loaded
        const container = document.querySelector('#container');
        const buttons = document.querySelectorAll('button');

        const score = document.createElement('div');

        container.appendChild(score);
        
        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                if(gameInProgress){
                    let result = playRound(button.textContent, getComputerChoice());
                    if(result){
                        playerScore++;
                    }
                    else{
                        if(result != null){
                            opponentScore++;
                        }
                    }

                    score.textContent = `Player: ${playerScore} Opponent: ${opponentScore}`;

                    if(playerScore === 5 || opponentScore === 5){
                        gameInProgress = false;
                        if(playerScore === 5){
                            score.textContent = 'You win! Congratulations!';
                        }
                        else{
                            score.textContent = 'You lost. Better luck next time.'
                        }
                    }
                }
            });
        });
    });
}

game();