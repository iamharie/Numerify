'use strict';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number';
// // console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

//Application reacting:

// document.querySelector('.check').textContent = 'Check!';

//Outside DOM
let secretNumber = Math.trunc(Math.random() * 20 + 1); //Secret Number
let score = 20;
let highScore = 0;
let diaplayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// DOM
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //When there is no input
  if (!guess) {
    //document.querySelector('.message').textContent = 'No Nummber ❌';
    diaplayMessage('No Nummber ❌');
    //Player Wins
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    // document.querySelector('.message').textContent = 'Correct Number ✅';
    diaplayMessage('Correct Number ✅');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too High ❗️' : 'Too Low ❗️';
      diaplayMessage(guess > secretNumber ? 'Too High ❗️' : 'Too Low ❗️');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You Lost The Game';
      diaplayMessage('💥 You Lost The Game');
      document.querySelector('.score').textContent = 0;
    }
  }
});
//Guess is too High
//   else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too High ❗️';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '💥 You Lost The Game';
//       document.querySelector('.score').textContent = 0;
//     }
//     //Guess is too Low
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too Low ❗️';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '💥 You Lost The Game';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });
//Again Button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.score').textContent = score;
  // document.querySelector('.message').textContent = 'Start Guessing...';
  diaplayMessage('Start Guessing...');
  document.querySelector('.guess').value = '';

  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
