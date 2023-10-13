'use strict';

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let cureentScore = 0;
let activePlayer = 0;
let scores = [0, 0];

function init() {
  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  dice.classList.add('hidden');
  activePlayer = 0;
  cureentScore = 0;
}

function switchPlayer() {
  cureentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    cureentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
}

init();

btnRoll.addEventListener('click', function () {
  const diceRoll = Math.trunc(Math.random() * 6) + 1;
  dice.src = `imgs/dice-${diceRoll}.png`;
  dice.classList.remove('hidden');

  if (diceRoll !== 1) {
    cureentScore += diceRoll;
    document.getElementById(`current--${activePlayer}`).textContent =
      cureentScore;
  } else {
    switchPlayer();
  }
});

btnHold.addEventListener('click', function () {
  scores[activePlayer] += cureentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  console.log(scores);
  switchPlayer();
});
