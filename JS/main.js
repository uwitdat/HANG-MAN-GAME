const resetBtn = document.querySelector('.reset')
const abcBtn = document.querySelector('.buttons')
let guesses = document.querySelector('.remain-guess')
const pastGuess = document.querySelector('.part-guesses')

//VARIABLES
let secretWord = ''
let maxGuesses = 6
let pastGuesses = []
let currentWord = ''
let possibleWords = ['cat', 'dog', 'lion', 'zebra', 'tiger', 'bear', 'rhino']

//STATE

let playerGuess = {
    guess: 6
}

//LISTENERS:
resetBtn.addEventListener('click', function (e){
    start();
    console.log(secretWord)
    console.log(currentWord)
})

function randomWord(){
    let randomElement = possibleWords[Math.floor(Math.random() * possibleWords.length)];
    secretWord = randomElement
    let underscored = secretWord.split('').map(function(char) {
        return char = '_ ';
    }).join('');
    document.getElementById("secret-word").innerHTML = `Guess the animal: ${underscored}`;
}

function buttons(){
abcBtn.addEventListener('click', function(e) {
    if(e.target.tagName === 'BUTTON' ){
    abcBtn.value = e.target.innerText;
    console.log(abcBtn.value)
    }
  }) 
}


function start(){
    randomWord()
    buttons()
}

















//create buttons function
// function createButtons(){
//     for(let i = 0; i<alphabetArray.length; i++){
//         const btn = document.createElement('button')
//         btn.className = 'abc'
//         btn.setAttribute('data-ltr', alphabetArray[i]);
//         btn.innerHTML = alphabetArray[i]
//         btn.value = btn.innerHTML;
//         div.appendChild(btn);

//         //add event listener to button
//         btn.addEventListener('click', function(e){
//         e.preventDefault();
//         let target = e.target;

//         //show result on screen
//         let buttonText = document.createElement('p')
//         buttonText.innerHTML = target.value.toString();
//         document.body.appendChild(buttonText)
//         console.log(buttonText.innerText)
//         })    
//     }
// }
// createButtons()



