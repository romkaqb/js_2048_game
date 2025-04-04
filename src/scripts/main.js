'use strict';

// Uncomment the next lines to use your game instance in the browser
const Game = require('../modules/Game.class');
const game = new Game();

const startButton = document.getElementById('button_start');

startButton.onclick = () => game.start();

document.addEventListener('keyup', (e) => {
  if (e.code === 'ArrowLeft') {
    game.moveLeft();
    game.setTwo();
  }

  if (e.code === 'ArrowRight') {
    game.moveRight();
    game.setTwo();
  }

  if (e.code === 'ArrowUp') {
    game.moveUp();
    game.setTwo();
  }

  if (e.code === 'ArrowDown') {
    game.moveDown();
    game.setTwo();
  }

  document.querySelector('.game-score').innerText = game.score;
});
