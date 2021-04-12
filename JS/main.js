let imgOne = document.getElementById('one')
let imgTwo = document.getElementById('two')
let imgThree = document.getElementById('three')
let imgFour = document.getElementById('four')
let imgFive = document.getElementById('five')
let imgSix = document.getElementById('six')
let imgSev = document.getElementById('sev')
let hintText = document.createElement('h3')

let plyAgn = document.querySelector('.play-again')
let hint = document.querySelector('.hint')

let winner = document.createElement('h2')
let win = document.querySelector('.win-lose')
//VARIABLES

let possibleWords = [
    {movie: 'C aa t', hint: '.........'},
    {movie: 'D o ggg', hint: '1111111111'},
    {movie: 'L ii on', hint: '2222222223'},
    {movie: 'Z ebb ra', hint: '3333333333'},
    {movie: 'T igg er', hint: '44444444444'},
    {movie: 'B eaa r', hint: '5555555555'},
    {movie: 'R hii no', hint:'666666666'}
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

let pastGuess = document.querySelector('.past-guesses')
pastGuess.innerHTML = `Wrong Guesses:`

let img = document.getElementById('.img')

let movieWord = document.getElementById("secret-word")

//LISTENERS:

// START
resetBtn.addEventListener('click', function (e){
    start();
})

plyAgn.addEventListener('click', function (e){
    playAgain();
 
})



// //FUNCTION TWO
// function start() {
//     resetBtn.style.display = "none";
//     let randomizer = possibleWords[Math.floor(Math.random() * possibleWords.length)];
//     secretWord = randomizer.movie.toLowerCase();
//     secretHint = randomizer.hint;
//     lettersLeft = secretWord.length;
//     for (let n = 0; n < secretWord.length; n++) {
//       let ltrHolder = document.createElement("div");
//       ltrHolder.classList.add("letter-holder");
//       ltrHolder.setAttribute("data-letter", secretWord[n]);
//       ltrHolder.style.textAlign = "center";
//       movieWord.appendChild(ltrHolder);
//       if (secretWord[n] !== " ") {
//         ltrHolder.style.borderBottom = "solid 1px black";
//       } else {
//         lettersLeft--;
//       }
//       buttons();
//     }
// }


function start(){ 
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

    movieWord.innerHTML = `Guess the movie: ${hiddenWord.join(' ')}`;   
    buttons() 
 
    }

function buttons(){
    abcBtn.addEventListener('click', function(e) {
        if(e.target.tagName === 'BUTTON' ){
            abcBtn.value = e.target.innerText;
           e.target.setAttribute('disabled', 'disabled')
            gamePlay(e.target.innerText.toLowerCase());   
        }
    }) 
}



// //FUNCTION TWO GAMEPLAY
// function gamePlay(ltr) {
//     //IF INCORRECT GUESS
//     if (secretWord.indexOf(ltr) === -1) {
//       pastGuesses.push(ltr);
//       if (guessTracker.guess <= 0) return;
//       guessTracker.guess--;
//       renderImage();
//       pastGuess.innerHTML = `Past Guesses: ${pastGuesses
//         .join(" ")
//         .toUpperCase()}`;
//       guesses.innerHTML = `Guesses Remaining: ${guessTracker.guess}`;
//       render();
//     } //IF CORRECT GUESS
//     // for (let j = 0; j < secretWord.length; j++) {
//     //   if (secretWord[j] === ltr) {
//         // hiddenWord[j] = ltr;
//         //get the right div and fill the letter
//         let correctLetterEl = movieWord.find(function (letterEl) {
//           return letterEl.getAttribute("data-letter") === ltr;
//         });
//         //   movieWord.innerHTML = `Guess the movie: ${hiddenWord
//         //     .join(" ")
//         //     .toUpperCase()}`;
//         correctLetterEl.textContent = ltr;
//         lettersLeft--;
//         render();
//         }
// //     }
// // }


function gamePlay(ltr){
    //IF INCORRECT GUESS
    if(secretWord.indexOf(ltr) === -1){
        pastGuesses.push(ltr)
        if(guessTracker.guess <= 0)return;
        guessTracker.guess--;
        renderImage();
        pastGuess.innerHTML = `Wrong Guesses: ${pastGuesses.join(' ').toUpperCase()}`
        guesses.innerHTML = `Guesses Remaining: ${guessTracker.guess}`;
        render();   
    }   //IF CORRECT GUESS     
        for(let j = 0; j < secretWord.length; j++){
            if(secretWord[j] === ltr){
            hiddenWord[j] = ltr
            movieWord.innerHTML = `Guess the movie: ${hiddenWord.join(' ').toUpperCase()}` 
            lettersLeft--;
            render();
        }   
    }   
}




function render(){
    //  LOSS CONDITION
    if(guessTracker.guess === 0){
        abcBtn.style.display = "none";
        winner.innerHTML = `YOU LOOSE! The Correct Movie was: ${secretWord}`
        win.appendChild(winner);
        plyAgn.style.display = 'block';
        hint.style.display = "none";

        // WIN CONDITION
    }if(lettersLeft === 0){
        abcBtn.style.display = "none";
        winner.innerHTML = `YOU WON! The Movie Was: ${secretWord}`
        win.appendChild(winner);
        plyAgn.style.display = 'block';
        hint.style.display = "none";

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
        renderHint();
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

console.log(abcBtn.children);

// // MAKE RESET FUNCTION!
function playAgain(){
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
    imgOne.style.display = 'none';
    imgSev.style.display = 'block';
    hintText.innerHTML = ''
    abcBtn.style.display = "block";
    
    for(let btn of abcBtn.children){
        btn.removeAttribute('disabled');
    }

    
    start();

}