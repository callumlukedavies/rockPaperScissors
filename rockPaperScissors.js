function computerPlay(){
    let rock = `rock`;
    let scissors = `scissors`;
    let paper = `paper`;

    let rand = Math.floor(Math.random() * 3);
    console.log(rand);
    if(rand === 0){
        return rock;
    }else if (rand === 1){
        return scissors;
    }else{
        return paper;
    }
}


function playRound(playerInput, computerInput){
    const score = playerInput.localeCompare(computerInput);
    if(score === 0){
        return `its a tie!`;

    }else if(0 === playerInput.localeCompare(`scissors`)){
        if(0 === computerInput.localeCompare(`rock`)){
            return `computer wins!`;
        }else{
            return `player wins!`;
        }
    }else if(0 === playerInput.localeCompare(`paper`)){
        if(0 === computerInput.localeCompare(`scissors`)){
            return `computer wins!`;
        }else{
            return `player wins!`;
        }
    }else{
        if(0 === computerInput.localeCompare(`paper`)){
            return `computer wins!`;
        }else{
            return `player wins!`;
        }
    }
}

function game(){
    let playerWins = 0;
    let computerWins = 0;
    for(let i = 0; i<5; i++){
        const input = window.prompt("choose your weapon...");
        const computerSelection = computerPlay();
        console.log(computerSelection);
        let decision = playRound(input, computerSelection);
        console.log(decision);
        if (0 === decision.localeCompare(`computer wins!`)){
            computerWins++;
        }else if (0 === decision.localeCompare(`player wins!`)){
            playerWins++;
        }
        else{
            continue;
        }
    }
    if(playerWins > computerWins){
        console.log(`congratulations! you beat the computer by ` 
        + (playerWins - computerWins) + ` rounds`);
    }else if (playerWins < computerWins){
        console.log(`Oh no! The computer beat you by ` 
        + (computerWins - playerWins) + ` rounds`);
    } else{
        console.log(`you scored ` + playerWins + ` and 
        computer scored ` + computerWins + `. Its a draw!`);
    }
}

game();