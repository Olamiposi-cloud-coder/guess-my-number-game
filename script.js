'use strict';

const guessInput = document.querySelector('.guess');
const btn = document.querySelector('.check');
btn.addEventListener('click', () => {
  console.log(guessInput.value);
});
