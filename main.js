// Your First Interactive Game

let playGame = confirm("Shall we play rock, paper or scissors?");

if (playGame) {
    // Play
    let playerChoice = prompt("Please enter rock, paper or scissors")
    if (playerChoice) {
        // play
        let playerOne = playerChoice.trim().toLowerCase();
        if (playerOne === 'rock' || playerOne === 'paper' || playerOne === 'scissors') {
            // play
            let computerChoice = Math.floor(Math.random() * 3 + 1);
            let computer = 
            computerChoice === 1 
                ? 
            'rock' 
                : 
            computerChoice === 2 
                ? 
            'paper' 
                : 
            'scissors';
            let result = 
            playerOne === computer
                ?
            `PlayerOne: ${playerOne}\nComputer: ${computer}\nIt is a tie!`
                :
            playerOne === 'rock' && computer === 'paper'
                ?
            `PlayerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                :
            playerOne === 'paper' && computer === 'scissors'
                ?
            `PlayerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                :
            playerOne === 'scissors' && computer === 'rock'
                ?
            `PlayerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                :
            `PlayerOne: ${playerOne}\nComputer: ${computer}\nPlayerOne wins!`;
            alert(result);
            let playAgain = confirm("Play again?")
            playAgain ? location.reload() : alert("Ok, thanks for playing!");
        } else {
            alert("You didn't enter rock, paper or scissors!")
        }
    } else if (playerChoice === '') {
        alert("You have not entered rock, paper or scissors!")
    } else {
        alert("I guess you chabged your mind. Maybe next time")
    }
} else {
    alert("Ok, maybe next time.");
};
