// //DOM SELECTORS
// let imgOne = document.getElementById('one')
// let imgTwo = document.getElementById('two')
// let imgThree = document.getElementById('three')
// let imgFour = document.getElementById('four')
// let imgFive = document.getElementById('five')
// let imgSix = document.getElementById('six')
// let imgSev = document.getElementById('sev')
let hintText = document.createElement('h3')
let plyAgn = document.querySelector('.play-again')
let hint = document.querySelector('.hint')
let winner = document.createElement('h2')
winner.classList.add('winner')
let win = document.querySelector('.win-lose')

//VARIABLES
let possibleWords = [
    {movie: 'FORREST GUMP', hint: 'Life is like a box of chocolates...'},
    {movie: 'SLUMDOG MILLIONAIRE', hint: 'A 20 million dollar question.'},
    {movie: 'FIGHT CLUB', hint: 'The first rule is..?'},
    {movie: 'THE WOLF OF WALL STREET', hint: 'Stocks, and... wolves?'},
    {movie: 'THE TITANIC', hint: 'This blockbuster flick features Leonardo Di Caprio and sinking ships'},
    {movie: 'GLADIATOR', hint:'Swords. Shields. Russell Crowe. Need I say More?'},
    {movie: 'THE SHINING', hint:'Red Rum?'},
    {movie: 'OCEANS ELEVEN', hint:'Casinos? Las Vegas? George Clooney?'},
    {movie: 'THE SHAWSHANK REDEMPTION', hint:'Morgan Freeman and lots of jail time.'},
    {movie: 'TAXI DRIVER', hint:'Robert De Niro stars in this Scorsese classic.'},
    {movie: 'THE MATRIX', hint:'Red Pill, Blue pill.'}
    ]

let secretWord = ''
let secretHint = ''
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
abcBtn.style.display = 'none';
let pastGuess = document.querySelector('.past-guesses')
pastGuess.innerHTML = `Wrong Guesses:`
let img = document.getElementById('.img')
let movieWord = document.getElementById("secret-word")

//AUDIO
const rightSfx = new Audio();
rightSfx.src = './IMG/CORRECT.wav'

const wrongSfx = new Audio();
wrongSfx.src = './IMG/WRONG.wav'

const startSfx = new Audio();
startSfx.src = './IMG/START.wav'


// START
resetBtn.addEventListener('click', function (e){
    start();
})

plyAgn.addEventListener('click', function (e){
    playAgain();
    plyAgn.style.display = 'none';
 
})

abcBtn.addEventListener('click', function(e) {
    if(e.target.tagName === 'BUTTON' ){
        abcBtn.value = e.target.innerText;
       e.target.setAttribute('disabled', 'disabled')
        gamePlay(e.target.innerText.toLowerCase());   
    }
}) 

function start(){ 
    startSfx.play();
    abcBtn.style.display = 'block';
    resetBtn.style.display = 'none';   
    let randomizer = possibleWords[Math.floor(Math.random() * possibleWords.length)];
    secretWord = randomizer.movie.toLowerCase();
    secretHint = randomizer.hint
    lettersLeft = secretWord.length;

    for(let n = 0; n < secretWord.length; n++){
        if(secretWord[n] !== ' '){
            hiddenWord[n] = '_'
        }else{
            hiddenWord[n] = '-'
        }
    }
    hiddenWord.forEach(function(char){
        if(char === '-'){
 
            lettersLeft--
        }else{
            return;
        }
    })
    movieWord.innerHTML = `${hiddenWord.join(' ')}`;   
    }

function gamePlay(ltr){
    //IF INCORRECT GUESS
    if(secretWord.indexOf(ltr) === -1){
        pastGuesses.push(ltr)
        if(guessTracker.guess <= 0)return;
        guessTracker.guess--;
        renderImage();
        wrongSfx.play();
        pastGuess.innerHTML = `Wrong Guesses: ${pastGuesses.join(' ').toUpperCase()}`
        guesses.innerHTML = `Guesses Remaining: ${guessTracker.guess}`;

        render();   
    }   //IF CORRECT GUESS     
        for(let j = 0; j < secretWord.length; j++){
            if(secretWord[j] === ltr){
            hiddenWord[j] = ltr
            rightSfx.play();
            movieWord.innerHTML = `${hiddenWord.join(' ').toUpperCase()}` 
            lettersLeft--;
            render();
        }   
    }   
}

function render(){
    //  LOSS CONDITION
    if(guessTracker.guess === 0){
        abcBtn.style.display = "none";
        winner.innerHTML = `YOU LOOSE! <br> The Correct Movie was: ${secretWord.toUpperCase()}`
        win.appendChild(winner);
        plyAgn.style.display = 'block';
        hint.style.display = "none";
        guesses.style.display = 'none'
        pastGuess.style.display = "none";

        // WIN CONDITION
    }if(lettersLeft === 0){
        abcBtn.style.display = "none";
        winner.innerHTML = `YOU WON! <br> The Movie Was: ${secretWord.toUpperCase()}`
        win.appendChild(winner);
        plyAgn.style.display = 'block';
        hint.style.display = "none";
        guesses.style.display = 'none'
        pastGuess.style.display = "none";
    }
}

function renderImage(){
    // if(guessTracker.guess === 5){
    //     imgSev.style.display = 'none';
    //     imgSix.style.display = 'block';
    // }if(guessTracker.guess === 4){
    //     imgSix.style.display = 'none';
    //     imgFive.style.display = 'block';
    // }if(guessTracker.guess === 3){
    //     imgFive.style.display = 'none';
    //     imgFour.style.display = 'block';
    if(guessTracker.guess === 2){
        renderHint();
    //     imgFour.style.display = 'none';
    //     imgThree.style.display = 'block';
    // }if(guessTracker.guess === 1){
    //     imgThree.style.display = 'none';
    //     imgTwo.style.display = 'block';
    // }if(guessTracker.guess === 0){
    //     imgTwo.style.display = 'none';
    //     imgOne.style.display = 'block';
    // }
    }
}

function renderHint(){
    hint.style.display = "block";
    hint.addEventListener('click',function(e){
    target = e.target;
    target.textContent = secretHint;
    hintText.className = 'hint-text'
    hintText.textContent = secretHint;
    document.body.appendChild(hintText)
    hint.style.display = 'none';
    })
}

function playAgain(){
    //RESET VARIABLES
    secretWord = ''
    secretHint = ''
    hiddenWord = []
    pastGuesses = []
    lettersLeft = 0    
    guessTracker = {
    guess: 6
    }
    guesses.innerHTML = `Guesses Remaining: ${guessTracker.guess}`;
    pastGuess.innerHTML = `Past Guesses:`
    winner.innerHTML = ''
    guesses.style.display = 'block'
    pastGuess.style.display = "block";
    // imgOne.style.display = 'none';
    // imgSev.style.display = 'block';
    hintText.innerHTML = ''
    hint.innerHTML = 'Need A Hint?'
    abcBtn.style.display = "block";
    pastGuess.innerHTML = `Wrong Guesses:`
//RESET IMAGES
    // imgOne.style.display = 'none';
    // imgTwo.style.display = 'none';
    // imgThree.style.display = 'none';
    // imgFour.style.display = 'none';
    // imgFive.style.display = 'none';
    // imgSix.style.display = 'none'; 
//RESET BUTTONS
    for(let btn of abcBtn.children){
        btn.removeAttribute('disabled');
    }   
 // RUN START FUNCTION   
    start();
}