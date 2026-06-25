# CLI-based Rock, Paper, Scissors

```
    ____             __           ____                       
   / __ \____  _____/ /__        / __ \____ _____  ___  _____
  / /_/ / __ \/ ___/ //_/       / /_/ / __ `/ __ \/ _ \/ ___/
 / _, _/ /_/ / /__/ ,< _       / ____/ /_/ / /_/ /  __/ /    
/_/ |_|\____/\___/_/|_( )     /_/    \__,_/ .___/\___/_( )   
   _____      _       |/                 /_/           |/    
  / ___/_____(_)_____________  __________/ /                 
  \__ \/ ___/ / ___/ ___/ __ \/ ___/ ___/ /                  
 ___/ / /__/ (__  |__  ) /_/ / /  (__  )_/                   
/____/\___/_/____/____/\____/_/  /____(_)    
```

An interactive, terminal-based Rock, Paper, Scissors game built with Node.js. Features stylized ASCII art for player choices and stylized text banners using the `figlet` library.

## Features

* **Interactive CLI:** Built using Node.js `readline/promises` for smooth asynchronous user input.
* **ASCII Art:** Displays visual hand gestures for Rock, Paper, and Scissors in the console.
* **Text Banners:** Generates a retro retro arcade-style welcome banner via `figlet`.
* **Input Validation:** Error handling protects against typos and invalid entries.
* **Replay Loop:** Prompts the player at the end of each round to easily play again or quit.

## Prerequisites

Before running this project, ensure you have the following installed:
* [Node.js](https://nodejs.org) (v16.6.0 or higher recommended for native ESM and `readline/promises`)

## Installation

1. Clone or download this repository to your local machine.
2. Initialize the project and install the required dependencies:

```bash
npm init -y
npm install figlet
```

3. Ensure your `package.json` includes `"type": "module"` to support the ES import syntax used in the script:

```json
{
  "name": "rock-paper-scissors",
  "version": "1.0.0",
  "type": "module",
  "dependencies": {
    "figlet": "^1.6.0"
  }
}
```

## How to Play

1. Run the game using Node.js:
   ```bash
   npm start
   ```
2. Type `rock`, `paper`, or `scissors` when prompted and hit **Enter**.
3. The computer will randomly generate its choice.
4. The winner will be declared alongside ASCII illustrations of the choices.
5. Type `y` to play another round, `n` to stop, or type `quit` at the main prompt to exit.

## Project Structure

* `index.js` - The main game script containing the game loops, gameplay logic, and ASCII rendering.
* `package.json` - Project metadata and dependency tracking.