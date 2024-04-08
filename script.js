'use strict';

const number = document.querySelector('.number');
const message = document.querySelector('.message');
const guessInput = document.querySelector('.guess');
const btn = document.querySelector('.check');
const score = document.querySelector('.score');
const body = document.querySelector('body');
const reload = document.querySelector('.again');
const highScore = document.querySelector('.highscore');

let scoreOutput = 20;
let highScoreOutput = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

const displayMessage = function (text) {
  message.textContent = text;
};

btn.addEventListener('click', () => {
  const guess = Number(guessInput.value);
  if (!guess) {
    displayMessage('⛔⛔No number provided!!!');
  } else if (guess === secretNumber) {
    displayMessage('📌📌Correct Number!!!');
    scoreOutput++;
    score.textContent = scoreOutput;
    number.textContent = secretNumber;
    body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';

    if (scoreOutput > highScoreOutput) {
      highScoreOutput = scoreOutput;
      highScore.textContent = highScoreOutput;
    }
  } else if (guess !== secretNumber) {
    if (scoreOutput > 1) {
      displayMessage(
        guess > secretNumber ? '😞😞Number Too High ' : '😞😞Number Too Low'
      );
      scoreOutput--;
      score.textContent = scoreOutput;
    } else {
      displayMessage('You lost the game😞😞');
      score.textContent = 0;
    }
  }
});

reload.addEventListener('click', function () {
  scoreOutput = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  number.textContent = '?';
  displayMessage('Start guessing...');
  score.textContent = scoreOutput;
  guessInput.value = '';
  body.style.backgroundColor = '#222';
  number.style.width = '15rem';
});
