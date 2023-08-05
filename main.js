// selection storage
let playerSelection = null;
let computerSelection = null;

// score storage
let playerValue = '';
let computerValue = '';


// add a listener to each button to get playerSelection and generate randomized computerSelection
const choiceButton = document.querySelectorAll('button');
choiceButton.forEach((choiceButton) => {
    choiceButton.addEventListener('click', () => {
        playerSelection = choiceButton.dataset.selection;
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
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
    return computerChoice;
};


function playRound (playerSelection, computerSelection) {
    if (playerSelection === "knight" && computerSelection === "archer" ||
    playerSelection === "knight" && computerSelection === "sorcerer") {
        playerWins(playerSelection, computerSelection);
    } else if (playerSelection === "archer" && computerSelection === "sorcerer" ||
    playerSelection === "archer" && computerSelection === "dragon") {
        playerWins(playerSelection, computerSelection);
    } else if (playerSelection === "sorcerer" && computerSelection === "dragon" ||
    playerSelection === "sorcerer" && computerSelection === "golem") {
        playerWins(playerSelection, computerSelection);
    } else if ( playerSelection === "dragon" && computerSelection === "golem" ||
    playerSelection === "dragon" && computerSelection === "knight") {
        playerWins(playerSelection, computerSelection);
    } else if (playerSelection === "golem" && computerSelection === "knight" ||
    playerSelection === "golem" && computerSelection === "archer") {
        playerWins(playerSelection, computerSelection);
    } else if (playerSelection === computerSelection) {
        tie(playerSelection, computerSelection);
    } else {
        computerWins(playerSelection, computerSelection);
    }
};


//  behaviour if the player wins a round
function playerWins (playerSelection, computerSelection) {
    const rMessage = document.querySelector('.resultMessage');
    rMessage.textContent = '';
    
    const text1 = document.createTextNode('Your ');
    const text2 = document.createTextNode(`${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} defeated the enemies `);
    const text3 = document.createTextNode(`${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}! Congratulations, you won!`);
    
    // get images to represent player & computer selection
    const playerImage = document.createElement('img');
    playerImage.src = `images/${playerSelection}.jpg`;
    const computerImage = document.createElement('img');
    computerImage.src = `images/${computerSelection}.jpg`;

    // append the textnodes and images to rMessage in the correct order
    rMessage.appendChild(text1);
    rMessage.appendChild(playerImage);
    rMessage.appendChild(text2);
    rMessage.appendChild(computerImage);
    rMessage.appendChild(text3);

    // raise playerValue and display it
    const playerScore = document.querySelector('.playerValue');
    playerValue++;
    playerScore.textContent = playerValue;
};


// behaviour if the computer wins a round
function computerWins (playerSelection, computerSelection) {
    const rMessage = document.querySelector('.resultMessage');
    rMessage.textContent = '';
    
    const text1 = document.createTextNode('The enemies ');
    const text2 = document.createTextNode(`${computerSelection} erased your `);
    const text3 = document.createTextNode(`${playerSelection}...! You lost!`);

    const computerImage = document.createElement('img');
    computerImage.src = `images/${computerSelection}.jpg`;
    const playerImage = document.createElement('img');
    playerImage.src = `images/${playerSelection}.jpg`; 

    rMessage.appendChild(text1);
    rMessage.appendChild(computerImage);
    rMessage.appendChild(text2);
    rMessage.appendChild(playerImage);
    rMessage.appendChild(text3);

    const computerScore = document.querySelector('.computerValue');
    computerValue++;
    computerScore.textContent = computerValue;
};


// behaviour if player and computer selected the same options
function tie () {
    const rMessage = document.querySelector('.resultMessage');
    const messageTxt = document.createElement('p');
    messageTxt.classList.add('resultMessage');
    messageTxt.textContent = `Two of the same kind never fight each other, its a tie!`;
    rMessage.parentNode.replaceChild(messageTxt, rMessage);
};


