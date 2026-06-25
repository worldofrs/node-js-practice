import readline from "node:readline/promises";
import figlet from "figlet";

// initialize the readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// choices and ASCII art for rock, paper, scissors
const choices = ["rock", "paper", "scissors"];
const art = {
    rock: `
    _______
---'   ____)
      (_____)
      (_____)
      (____)
---.__(___)`,
    paper: `
    _______
---'    ____)____
           ______)
          _______)
         _______)
---.__________)`,
    scissors: `
    _______
---'   ____)____
          ______)
       __________)
      (____)
---.__(___)`,
};

// main game function
async function playGame() {
    try { // display welcome message using figlet
        const welcomeMessage = await figlet.text('Rock, Paper, Scissors!', {
            font: 'Ghost',
            horizontalLayout: 'default',
            verticalLayout: 'default',
            width: 80,
            whitespaceBreak: true,
        });
        console.log(welcomeMessage);
    } catch (err) {
        console.log('Welcome to Rock, Paper, Scissors!');
    }

    // main game loop
    let continueGame = true;
    while (continueGame) {
        try { // prompt user for input
            const userInput = await rl.question('Choose rock, paper, or scissors. Type "quit" to quit: ');
            const playerChoice = userInput.trim().toLowerCase();

            // exit the game if user types "quit"
            if (playerChoice == "quit") {
                console.log("Game exited.");
                continueGame = false;
                break;
            }

            // create error for invalid input
            if (!choices.includes(playerChoice)) {
                throw new Error('INVALID_CHOICE');
            }

            // display choices and ASCII art
            console.log(art[playerChoice] + "\n");
            console.log(`You chose: ${playerChoice}`);

            const computerChoice = retrieveComputerChoice();
            console.log(art[computerChoice] + "\n");
            
            // determine and display the winner
            determineWinner(playerChoice, computerChoice);
            continueGame = await playAgain();

        } catch (error) { // handle invalid input error
            if (error.message === 'INVALID_CHOICE') {
                console.log('Invalid choice. Please try again.\n');
                continue;
            }
        }
    }
    rl.close(); // clears the stream interface
}

// computes computer choice 
function retrieveComputerChoice() {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(`Computer chose: ${computerChoice}`);
    return computerChoice;
}

// determines the winner of the game
function determineWinner(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "scissors" && computerChoice == "paper") ||
        (humanChoice == "paper" && computerChoice == "rock")
    ) {
        console.log("You win!");
    } else {
        console.log("You lose :(");
    }
    console.log("\n");
}

// prompts user to play again
async function playAgain() {
    const playAgainInput = await rl.question("Do you want to play another round? Hit y/n ");
    const playAgainInputTrimmed = playAgainInput.trim().toLowerCase();
    if (playAgainInputTrimmed == "y") {
        return true;
    } else if (playAgainInputTrimmed == "n") {
        return false;
    }
}

playGame();
