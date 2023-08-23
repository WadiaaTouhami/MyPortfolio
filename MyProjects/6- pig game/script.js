'use strict';

// Before starting the game
const diceIMG = document.querySelector('.dice');
diceIMG.classList.add('hidden');
document.getElementById('score--0').textContent = 0;
document.getElementById('score--1').textContent = 0;

// Buttons declarations
const roleDice = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const replay = document.querySelector('.btn--new');

let currentScore = 0;
let activePlayer = 0;
let noOneWon = true;
let score = [0, 0];

// Switch the player
const switchPlayer = function () {
  currentScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;

  document.querySelector('.player--0').classList.toggle('player--active');
  document.querySelector('.player--1').classList.toggle('player--active');
};

// Play the dice
const newNumber = function () {
  if (noOneWon) {
    let diceNumber = Math.trunc(Math.random() * 6) + 1;
    diceIMG.src = `dice-${diceNumber}.png`;
    diceIMG.classList.remove('hidden');
    if (diceNumber !== 1) {
      currentScore += diceNumber;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
    return currentScore;
  }
};
roleDice.addEventListener('click', newNumber);

// Hold the score
const holdScore = function () {
  if (noOneWon) {
    score[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      score[activePlayer];
    if (score[activePlayer] >= 100) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      noOneWon = false;
    } else {
      switchPlayer();
    }
  }
};
hold.addEventListener('click', holdScore);

// Replay
const newGame = function () {
  diceIMG.classList.add('hidden');
  document.getElementById('score--0').textContent = 0;
  document.getElementById('score--1').textContent = 0;
  score = [0, 0];
  currentScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent =
    currentScore;
  if (!noOneWon) {
    noOneWon = true;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--winner');
    if (activePlayer === 1) {
      switchPlayer();
    }
  }
};
replay.addEventListener('click', newGame);
