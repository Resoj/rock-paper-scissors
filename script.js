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
    let winner;
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();

    if(playerSelection === computerSelection){
        return "It's a tie! Play another round"
    }
    if(playerSelection === 'ROCK' && computerSelection === 'PAPER'){
        return 'You Lose! Paper beats Rock'
    }
    if(playerSelection === 'ROCK' && computerSelection === 'SCISSORS'){
        return 'You Win! Rock beats Scissors'
    }
    if(playerSelection === 'PAPER' && computerSelection === 'SCISSORS'){
        return 'You Lose! Scissors beat Paper'
    }
    if(playerSelection === 'PAPER' && computerSelection === 'ROCK'){
        return 'You Win! Paper beats Rock'
    }
    if(playerSelection === 'SCISSORS' && computerSelection === 'ROCK'){
        return 'You Lose! Rock beats Scissors'
    }
    if(playerSelection === 'SCISSORS' && computerSelection === 'PAPER'){
        return 'You Win! Scissors beat Paper'
    }
}