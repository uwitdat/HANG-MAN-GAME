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
        renderImage();
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
        winner.innerHTML = `YOU LOOSE! The Correct Movie was: ${secretWord}`
        let win = document.querySelector('.win-lose')
        win.appendChild(winner);
        resetBtn.style.display = 'block';
        resetBtn.innerHTML = 'Play Again?'; 
        

    }if(lettersLeft === 0){
        abcBtn.style.display = "none";
        let winner = document.createElement('h2')
        winner.innerHTML = 'CONGRATULATIONS YOU WON!'
        let win = document.querySelector('.win-lose')
        win.appendChild(winner);
        resetBtn.style.display = 'block';
        resetBtn.innerHTML = 'Play Again?'; 

    }
}



function renderImage(){
    if(guessTracker.guess === 5){
        imgSev.style.display = 'none';
        imgSix.style.display = 'block';
    }if(guessTracker.guess === 4){
        imgSix.style.display = 'none';
        imgFive.style.display = 'block';
    }if(guessTracker.guess === 3){
        imgFive.style.display = 'none';
        imgFour.style.display = 'block';
    }if(guessTracker.guess === 2){
        // renderHint();//MAKE HINT FUNCTION
        imgFour.style.display = 'none';
        imgThree.style.display = 'block';
    }if(guessTracker.guess === 1){
        imgThree.style.display = 'none';
        imgTwo.style.display = 'block';
    }if(guessTracker.guess === 0){
        imgTwo.style.display = 'none';
        imgOne.style.display = 'block';
    }
}

//MAKE RESET FUNCTION!
function reset(){

}


