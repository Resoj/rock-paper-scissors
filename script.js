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