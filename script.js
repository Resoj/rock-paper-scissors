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
    let score1 = 0;
    let score2 = 0;

    while (score1 < 3 && score2 < 3){
        let message = 'Choose your weapon: Rock, Paper, or Scissors:';
        let playerSelection = prompt(message).toLowerCase();
        let result = playRound(playerSelection, getComputerChoice());
        if(result){
            ++score1;
        }
        else{
            if(result !== null){
                ++score2;
                console.log(score2);
            }
        }
        console.log(`Player score: ${score1}`);
        console.log(`Opponent score: ${score2}`);
    }

    if(score1 > score2){
        console.log('You Win! Congrats!')
    }
    else{
        console.log('You Lose! Better luck next time.')
    }
}