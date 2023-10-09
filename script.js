'use strict';

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

function init() {
  score0.textContent = 0;
  score1.textContent = 0;
  dice.classList.add('hidden');
}

init();

btnRoll.addEventListener('click', function () {
  const diceRoll = Math.trunc(Math.random() * 6) + 1;
  dice.src = `imgs/dice-${diceRoll}.png`;
  dice.classList.remove('hidden');
});
