'use strict';

const setNumber = () => {
    return Math.trunc(Math.random()*20) + 1;
}

const setLost = () => {
    displayMessage('💣 You lost the game!');
    scoreValue = 0;
    document.querySelector('.score').textContent = scoreValue;
    isLost = true;
}

const setScore = () => {
    scoreValue--;
    document.querySelector('.score').textContent = scoreValue;
}

const setCSS = (color, width) => {
    document.querySelector('body').style.backgroundColor = color;
    document.querySelector('.number').style.width = width;
}

const setHighScore = (val) => {
    document.querySelector('.highscore').textContent = val;
}

const displayMessage = (message) => {
    document.querySelector('.message').textContent = message;
}

let secretNumber = setNumber();
let scoreValue = 20;
let highScore = 0;
let isLost = false;
const guessField = document.querySelector('.guess');

document.querySelector('.check').addEventListener('click',()=>{
    if(!isLost){
        const guessNumber = Number(guessField.value);
        if(!guessNumber){
            displayMessage('⛔ No Number');
        } else if (guessNumber === secretNumber){
            displayMessage('🎉 Correct Number!');
            document.querySelector('.number').textContent = secretNumber;
            setCSS('#60b347','30rem');
            scoreValue > highScore? setHighScore(scoreValue) : '' ;
        } else if (guessNumber !== secretNumber) {
            if(scoreValue > 1){
                displayMessage(guessNumber > secretNumber ? '⬆️ Too High!' : '⬇️ Too Low!');
                setScore();
            } else setLost();
        }
    } else {
        window.alert('You lost the game! Click Again to play again');
    }
});

document.querySelector('.again').addEventListener('click',()=>{
    isLost = false;
    secretNumber = setNumber();
    scoreValue = 20;
    document.querySelector('.score').textContent = scoreValue;
    displayMessage('Start Guessing...');
    guessField.value = '';
    setCSS('#222', '15rem');
    document.querySelector('.number').textContent = '?';
});