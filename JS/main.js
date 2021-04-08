
//HANGMAN JS

//define variables used
let secretWord = ''
let maxGuesses = 6
let pastGuesses = []
let currentWord = ''
let currentGuess = 0
let alphabet = 'abcdefghijklmnopqrstuvwxyz'
let possibleWords = ['cat', 'dog', 'hat', 'scarf', 'cow', 'wife', 'child']

//convert alphabet variable into array
let alphabetArray = alphabet.split('');

//randomize words in possibleWords array
let randomElement = possibleWords[Math.floor(Math.random() * possibleWords.length)];

//re-assign variables
secretWord = randomElement
currentWord = secretWord


let div = document.querySelector('.buttons')
let title = document.querySelector('h1')
title.style.textAlign = 'center';


//create buttons function
function createButtons(){
    for(let i = 0; i<alphabetArray.length; i++){
        const btn = document.createElement('button')
        btn.className = 'abc'
        btn.innerText = alphabetArray[i]
        div.appendChild(btn);
        
    }
}
createButtons()


