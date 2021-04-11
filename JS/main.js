let imgOne = document.getElementById('one')
let imgTwo = document.getElementById('two')
let imgThree = document.getElementById('three')
let imgFour = document.getElementById('four')
let imgFive = document.getElementById('five')
let imgSix = document.getElementById('six')
let imgSev = document.getElementById('sev')
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

let pastGuess = document.querySelector('.past-guesses')
pastGuess.innerHTML = `Past Guesses:`

let img = document.getElementById('.img')


//LISTENERS:
resetBtn.addEventListener('click', function (e){
    start();
})

function start(){ 
    resetBtn.style.display = 'none';   
    secretWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];
    lettersLeft = secretWord.length;    
    for(let n = 0; n < secretWord.length; n++){
        hiddenWord[n] = '_'
    }
    document.getElementById("secret-word").innerHTML = `Guess the movie: ${hiddenWord.join(' ')}`;    
    buttons()
    images();
}

function buttons(){
    abcBtn.addEventListener('click', function(e) {
        if(e.target.tagName === 'BUTTON' ){
            abcBtn.value = e.target.innerText;
            gamePlay(e.target.innerText.toLowerCase());   
            e.target.setAttribute('disabled','disabled');
        }
    }) 
}

function gamePlay(ltr){
    //IF INCORRECT GUESS
    if(secretWord.indexOf(ltr) === -1){
        pastGuesses.push(ltr)
        if(guessTracker.guess <= 0)return;
        guessTracker.guess--;
        pastGuess.innerHTML = `Past Guesses: ${pastGuesses.join(' ')}`
        guesses.innerHTML = `Guesses Remaining: ${guessTracker.guess}`;
        render();

        //IF CORRECT GUESS
    }if (secretWord.indexOf(ltr) >= 0){

        //CONVERT UNDERSCORES BACK TO LETTERS
        lettersLeft--;
        console.log(hiddenWord)
        console.log(`match! letterLeft --> ${lettersLeft}`)
        render();
    }
}
function render(){
    if(guessTracker.guess === 0){
        abcBtn.style.display = "none";
        let winner = document.createElement('h2')
        winner.innerHTML = 'YOU LOOSE!'
        let win = document.querySelector('.win-lose')
        win.appendChild(winner);
        resetBtn.style.display = 'block';
        resetBtn.innerHTML = 'Play Again?'; 

    }if(lettersLeft === 0){
        console.log('YOU WIN!')
        abcBtn.style.display = "none";
        let winner = document.createElement('h2')
        winner.innerHTML = 'YOU WIN!'
        let win = document.querySelector('.win-lose')
        win.appendChild(winner);
        resetBtn.style.display = 'block';
        resetBtn.innerHTML = 'Play Again?'; 

    }
}

//MAKE RESET FUNCTION!
function reset(){

}



function images(){
    if(guessTracker.guess === 5){
        imgOne.style.display = 'none';
        console.log('!')
    }

}