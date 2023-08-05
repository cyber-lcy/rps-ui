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
    if (playerSelection === "knight" && computerSelection === "archer" ||
    playerSelection === "knight" && computerSelection === "sorcerer") {
        console.log(`Your ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} has slayn the enemies ${computerSelection}`);
    } else if (playerSelection === "archer" && computerSelection === "sorcerer" ||
    playerSelection === "archer" && computerSelection === "dragon") {
        console.log(`${playerSelection} shoots down ${computerSelection}`);
    } else if (playerSelection === "sorcerer" && computerSelection === "dragon" ||
    playerSelection === "sorcerer" && computerSelection === "golem") {
        console.log(`Your ${playerSelection} pulverized the enemies ${computerSelection}!`);
    } else if ( playerSelection === "dragon" && computerSelection === "golem" ||
    playerSelection === "dragon" && computerSelection === "knight") {
        console.log(`Your mighty ${playerSelection} burned the enemies ${computerSelection} to ashes!`);
    } else if (playerSelection === "golem" && computerSelection === "knight" ||
    playerSelection === "golem" && computerSelection === "archer") {
        console.log(`Your ${playerSelection} has crushed your enemies ${computerSelection} to dust!`);
    } else if (playerSelection === computerSelection) {
        console.log(`Two of the same kind never fight each other, its a tie!`);
    } else {
        console.log(`Enemies ${computerSelection} erased your ${playerSelection}...`);
    }
    console.log(playerSelection);
    console.log(computerSelection);
};