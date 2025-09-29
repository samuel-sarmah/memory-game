 Memory Game 🧠🎴

A simple and accessible emoji memory game built with React.

## Features

- **Random Emoji Cards:** Each game uses a random set of animal & nature emojis.
- **Accessible:** Keyboard and screen reader friendly.
- **Responsive Design:** Works on desktop and mobile.
- **Game Logic:** Flip two cards at a time to find matching pairs. The game ends when all pairs are matched.
- **Play Again:** Restart the game with a new set of emojis.

## How to Play

1. Click **Start Game** to begin.
2. Flip two cards by clicking or using the keyboard.
3. If the cards match, they stay revealed. If not, try again!
4. Match all pairs to win.
5. Click **Play Again** to start a new game.

## Live Demo
1. You can checkout the live game [here!](https://mem-check.netlify.app/)

## Getting Started 

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/memory-game.git
    cd memory-game
    ```

2. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

3. Start the development server:
    ```bash
    npm start
    # or
    yarn start
    ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
  components/
    Card.jsx
    EmojiButton.jsx
    Form.jsx
    GameOver.jsx
    AssistiveTechInfo.jsx
    RegularButton.jsx
  App.jsx
  index.js
  ...
public/
  index.html
```

## Accessibility

- All interactive elements are keyboard accessible.
- ARIA attributes and focus management for screen readers.
- Visual focus indicators.

## API

- Emoji data is fetched from [emojihub.yurace.pro](https://emojihub.yurace.pro/api/all/category/animals-and-nature).

## License

MIT

---

*Made with ❤️ for learning and fun!*