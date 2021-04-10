//VARIABLES
let possibleWords = ['cat', 'dog', 'lion', 'zebra', 'tiger', 'bear', 'rhino']
let secretWord = ''
let hiddenWord = []
let pastGuesses = []
let lettersLeft = 0

//STATE
let guessTracker = {
    guess: 6
}
let guesses = document.querySelector('.remain-guess')
guesses.innerHTML = `Guesses Remaining: ${guessTracker.guess}`;

const resetBtn = document.querySelector('.reset')
const abcBtn = document.querySelector('.buttons')
const pastGuess = document.querySelector('.part-guesses')

//LISTENERS:
resetBtn.addEventListener('click', function (e){
    start();
})

function start(){    
    secretWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];
    lettersLeft = secretWord.length;    
    for(let n = 0; n < secretWord.length; n++){
        hiddenWord[n] = '_'
    }
    document.getElementById("secret-word").innerHTML = `Guess the animal: ${hiddenWord.join(' ')}`;    
    buttons()
    
    console.log(secretWord)
    console.log(hiddenWord)    
}

function buttons(){
    abcBtn.addEventListener('click', function(e) {
        if(e.target.tagName === 'BUTTON' ){
            abcBtn.value = e.target.innerText;
            gamePlay(e.target.innerText.toLowerCase());   
        }  
    }) 
}

function gamePlay(ltr){
    if(secretWord.indexOf(ltr) === -1){
        pastGuesses.push(ltr)
        guessTracker.guess--;
        console.log(guessTracker.guess)
        render();

    }if (secretWord.indexOf(ltr) > -1){
        console.log('match')
    }
} 

function render(){
    if(guessTracker.guess === 0){
        console.log('YOU LOSE!')
    }
}