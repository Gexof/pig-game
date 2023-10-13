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

let cureentScore, activePlayer, scores, finishedGame;

function init() {
  activePlayer = 0;
  cureentScore = 0;
  finishedGame = false;
  scores = [0, 0];
  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  dice.classList.add('hidden');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner', 'player--active');
  player0.classList.add('player--active');
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
  if (!finishedGame) {
    const diceRoll = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove('hidden');
    dice.src = `imgs/dice-${diceRoll}.png`;

    if (diceRoll !== 1) {
      cureentScore += diceRoll;
      document.getElementById(`current--${activePlayer}`).textContent =
        cureentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (!finishedGame) {
    scores[activePlayer] += cureentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      dice.classList.toggle('hidden');
      finishedGame = true;
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
