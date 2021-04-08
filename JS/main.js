
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
console.log(secretWord)

//convert secretword to underscored version
let underscored = secretWord.split('').map(function(char) {
    return char = '_ ';
  }).join('');


//print converted secretWord to screen
document.getElementById("secret-word").innerHTML = `secret word: ${underscored}`;


let div = document.querySelector('.buttons')
let title = document.querySelector('h1')
title.style.textAlign = 'center';
let wordText = document.getElementById('secret-word')

//create buttons function
function createButtons(){
    for(let i = 0; i<alphabetArray.length; i++){
        const btn = document.createElement('button')
        btn.className = 'abc'
        btn.innerHTML = alphabetArray[i]
        btn.value = btn.innerHTML;
        div.appendChild(btn);

        //add event listener to button
        btn.addEventListener('click', function(e){
        e.preventDefault();
        let target = e.target;

        //show result on screen
        let buttonText = document.createElement('p')
        buttonText.innerHTML = target.value.toString();
        document.body.appendChild(buttonText)
        console.log(buttonText.innerText)
        })    
    }
}
createButtons()



