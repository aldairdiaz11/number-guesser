let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 10);

const compareGuesses = (human, computer, secretTarget) => {
    const humanDifference = Math.abs(human - secretTarget);
    const computerDifference = Math.abs(computer - secretTarget)
    if (humanDifference === computerDifference)
        return true;
    else return humanDifference < computerDifference;
}

const updateScore = (winner) => {
    if (winner === 'human')
        humanScore += 1;
    else
        computerScore += 1;
}

const advanceRound = () => {
    currentRoundNumber += 1;
}
