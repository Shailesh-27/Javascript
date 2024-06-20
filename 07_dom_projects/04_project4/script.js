
let randomNumber =  parseInt(Math.random() * 100 + 1)

// const form = document.querySelector('.form')
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const paragraph = document.createElement('p')

let prevGuess = []
let numGuess = 1
let playGame = true

if(playGame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}


function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }
    else if(guess < 1){
        alert('Please enter a number greater than 1')
    }
    else if(guess > 100){
        alert('Please enter a number less than 100')
    }
    else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMsg(`Game Over. Random number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMsg(`You guessed it right`)
        endGame()
    }
    else if(guess < randomNumber){
        displayMsg(`Number is TOO Low`)
    }
    else if(guess > randomNumber){
        displayMsg(`Number is TOO High`)
    }
    
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++
    remaining.innerHTML = `${11 - numGuess} `
}

function displayMsg(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGame.addEventListener('click',(e) => {
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess} `
        userInput.removeAttribute('disabled')
        startOver.removeChild(paragraph)
        
        playGame = true
    })
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled','')
    paragraph.classList.add('button')
    paragraph.innerHTML = `<h2 id = 'newGame'>Start new Game </h2>`
    startOver.appendChild(paragraph)
    playGame= false
    newGame()
}





