'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

function displayMessage(newMessage) {
  return (document.querySelector('.message').textContent = newMessage);
}

const check = document.querySelector('.check');
check.addEventListener('click', function () {
  let guess = document.querySelector('.guess');
  guess = Number(guess.value);

  if (!guess) {
    displayMessage('NO NUMBER !');
  } else if (guess !== secretNumber) {
    guess > secretNumber
      ? displayMessage('Too high !')
      : displayMessage('Too low !');
    if (score > 1) {
      score -= 1;
      let result = document.querySelector('.score');
      result.textContent = score;
    } else {
      displayMessage('GAME OVER') && (result.textContent = '0');
    }
  }

  // else if (guess > secretNumber) {
  //   displayMessage('Too high !');
  //   if (score > 1) {
  //     score -= 1;
  //     let result = document.querySelector('.score');
  //     result.textContent = score;
  //   } else {
  //     displayMessage('GAME OVER') && (result.textContent = '0');
  //   }
  // } else if (guess < secretNumber) {
  //   displayMessage('Too low !');
  //   if (score > 1) {
  //     score -= 1;
  //     let result = document.querySelector('.score');
  //     result.textContent = score;
  //   } else {
  //     displayMessage('GAME OVER') && (result.textContent = '0');
  //   }}
  else if (guess === secretNumber && score > 1) {
    document.body.style.backgroundColor = '#6ccc50';
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('Correct Number');
    if (highScore < score) {
      highScore = score;
      document.querySelector('.highScore').textContent = highScore;
    }
  }
});

const again = document.querySelector('.again');
again.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.body.style.backgroundColor = '#222222';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
