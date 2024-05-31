let scoreStr = localStorage.getItem('Score');
let score;
resetScore(scoreStr);

function resetScore(scoreStr) {
 score = JSON.parse(scoreStr) || {
    win: 0,
    loose: 0,
    tie: 0,
};
score.displayScore = function() {
    return `Won:${score.win}, Loose:${score.loose}, Ties:${score.tie}`};
}


let computerChoice;
function generateComputerChoice() {
    let randomNumber = Math.random() * 3;
    if (randomNumber > 0 && randomNumber <= 1) {
    computerChoice = 'Bat';
    }else if(randomNumber > 1 && randomNumber <= 2) {
    computerChoice = 'Ball';
    }else{
    computerChoice = 'Stump';
    }
}

function getResult(userMove, computerMove) {
    if (userMove === 'Bat'){
        if (computerMove === 'Ball'){
            score.win++;
            return `You won!`;
        }
        else if (computerMove === 'Bat'){
            score.tie++;
            return `It's a Tie!`;
        }
        else if (computerMove === 'Stump'){
            score.loose++;
            return `You Lost!`;
        }
    }
    else if (userMove === 'Ball'){
        if (computerMove === 'Stump'){
            score.win++;
            return `You won!`;
        }
        else if (computerMove === 'Ball'){
            score.tie++;
            return `It's a Tie!`;
        }
        else if (computerMove === 'Bat'){
            score.loose++;
            return `You Lost!`;
        }
    }
    else{ 
        if (computerMove === 'Bat'){
            score.win++;
            return `You won!`;
        }
        else if (computerMove === 'Stump'){
            score.tie++;
            return `It's a Tie!`;
        }
        else if (computerMove === 'Ball'){
            score.loose++;
            return `You Lost!`;
        }
    }
}

function showResult(userMove,computerMove,result) {
    localStorage.setItem('Score',JSON.stringify(score))
    console.log(score);
    alert(`You have Choosen ${userMove}. Computer choice is ${computerMove} 
         ${result}

         ${score.displayScore()}`);
}