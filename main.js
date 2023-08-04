let playerSelection = null;
let computerSelection = null;

// add a listener to each button to get playerSelection and generate randomized computerSelection
const choiceButton = document.querySelectorAll('button');
choiceButton.forEach((choiceButton) => {
    choiceButton.addEventListener('click', () => {
        // console.log(choiceButton.dataset.selection);
        playerSelection = choiceButton.dataset.selection;
        computerSelection = getComputerChoice();
/*         if (playerSelection !== computerSelection) {
            console.log("NOT EQUAL!");
        } else {
            console.log("EQUAL!");
        }; */
        playRound();
    });
});

// generate randomized computerChoice from an array
function getComputerChoice () {
    const CHOICES = [
        "knight",
        "archer",
        "sorcerer",
        "dragon",
        "golem",
    ];
    let randomizer = Math.floor(Math.random()*CHOICES.length);
    let computerChoice = CHOICES[randomizer];
    // console.log(computerChoice);
    return computerChoice;
};

function playRound () {
    if (playerSelection !== computerSelection) {
        console.log("NOT EQUAL!");
    } else {
        console.log("EQUAL!");
    };
    console.log(playerSelection);
    console.log(computerSelection);
};