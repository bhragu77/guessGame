'use strict';
// console.log(document.querySelector('.message').textContent);
// // document.querySelector('.message').textContent = 'correct number🥳🎈';
// // console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'hii everyone';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.score').textContent = '30';
// console.log(document.querySelector('.score').textContent);
// document.querySelector('.number').textContent = '';

// document.querySelector('.guess').value = 23;

// console.log(document.querySelector('.guess').value);
// //event listener
const number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (!guess) {
    document.querySelector('.message').textContent = '👀No number';
  } else if (guess == number) {
    document.querySelector('.message').textContent = ' 🥳🏆correct number';
    document.querySelector('.number').textContent = number;

    document.querySelector('body').style.backgroundColor = '#ec1d1d';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  if (guess < number) {
    document.querySelector('.message').textContent = ' too low bro🥹';
    score = score - 1;
    document.querySelector('.score').textContent = score;
  }
  if (guess > number) {
    document.querySelector('.message').textContent = `that's high bro🥹`;
    score = score - 1;
    document.querySelector('.score').textContent = score;
  }
  if (guess > 20 || guess < 1) {
    document.querySelector('.message').textContent = `that's out of range🥹`;
  }
  if (score < 0) {
    document.querySelector('.message').textContent = `you loose baby😁`;
    document.querySelector('.score').textContent = 0;
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  const number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = ' ';
});
