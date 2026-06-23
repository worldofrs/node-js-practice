import readline from 'node:readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const choices = ["rock", "paper", 'scissors'];

function playGame() {
    rl.question('Choose rock, paper, or scissors. Type "quit" to quit: ', (answer) => {
        console.log(`You chose: ${answer}`);

        const input = answer.trim().toLowerCase();

        if (input == "quit") {
            console.log("Game exited.")
            rl.close();
            return;
        }

        if (!choices.includes(input)) {
            console.log("Sorry, not a valid choice. Please choose again.");
            playGame();
            return;
        }

        const computerChoice = retrieveComputerChoice();
        determineWinner(input, computerChoice);
        playAgain();

        // rl.close(); // Clears the stream interface
    });
}

function retrieveComputerChoice() {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(`Computer chose: ${computerChoice}`);
    return computerChoice;
}

function determineWinner(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("It's a tie!");
    } else if ((humanChoice == "rock" && computerChoice == "scissors") ||
                (humanChoice == "scissors" && computerChoice == "paper") ||
                (humanChoice == "paper" && computerChoice == "rock")) {
        console.log("You win!");
    } else {
        console.log("You lose :(");
    }
    console.log("\n");
}

function playAgain() {
    rl.question("Do you want to play another round? Hit y/n ", (userInput) => {
        const input = userInput.trim().toLowerCase();
        if (input == "y") {
            playGame();
        } else if (input == "n") {
            rl.close();
            return;
        }
    });
}

console.log('--- Welcome to Rock, Paper, Scissors! ---');
playGame();


