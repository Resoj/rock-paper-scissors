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

document.addEventListener('DOMContentLoaded', function () { // DOMContentLoaded ensures JS runs after HTML is fully loaded
    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            playRound(button.textContent, getComputerChoice())
        });
    });
});
