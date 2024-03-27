'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;

const number = document.querySelector('.number');
const message = document.querySelector('.message');
const guessInput = document.querySelector('.guess');
const btn = document.querySelector('.check');
const score = document.querySelector('.score');
let scoreOutput = 20;

btn.addEventListener('click', () => {
  const guess = Number(guessInput.value);
  number.textContent = secretNumber;
  console.log(guess, typeof guess);

  if (!guess) {
    message.textContent = '⛔⛔No number provided!!!';
  } else if (guess === secretNumber) {
    message.textContent = '📌📌Correct Number!!!';
    scoreOutput += 1;
    score.textContent = scoreOutput;
  } else if (guess > secretNumber) {
    if (scoreOutput > 1) {
      message.textContent = '😞😞Number Too High ';
      scoreOutput -= 1;
      score.textContent = scoreOutput;
    } else {
      message.textContent = 'You lost the game😞😞';
    }
  } else if (guess < secretNumber) {
    message.textContent = '😞😞Number Too Low ';
    scoreOutput -= 1;
    score.textContent = scoreOutput;
  }
});
