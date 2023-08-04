const CHOICES = [
    "knight",
    "archer",
    "sorcerer",
    "dragon",
    "golem",
]

let playerChoice = null;
let computerChoice = getComputerChoice;

const choiceButton = document.querySelectorAll('button');
choiceButton.forEach((choiceButton) => {
    choiceButton.addEventListener('click', () => {
        console.log(choiceButton.dataset.selection);
        playerChoice = choiceButton.dataset.selection;
    });
});

function getComputerChoice () {
    let randomizer = Math.floor(Math.random()*CHOICES.length);
    let computerChoice = CHOICES[randomizer];
    console.log(computerChoice);
    return computerChoice;
};

getComputerChoice();