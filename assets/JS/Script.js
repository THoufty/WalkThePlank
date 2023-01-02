var requestUrl = 'http://api.fungenerators.com/pirate/generate/name?variation=male&limit=1&api_key=xVnLMxZTVVNHCfilqpljlAeF'
var startGame = document.getElementById("fetch-button")
var usefulBtn = document.getElementById("UsefulButton")
var turnsLeft
var fetched = ''
var blanks = []
var lettersForBlanks = []
var amtBlanks = 0
var wordBlank = document.querySelector(".word-blanks")
var pirateOne = document.querySelector('#pirate1')
var pirateTwo = document.querySelector('#pirate2')
var pirateThree = document.querySelector('#pirate3')
var pirateFour = document.querySelector('#pirate4')
var pirateFive = document.querySelector('#pirate5')
var pirateSix = document.querySelector('#pirate6')
var pirateSeven = document.querySelector('#pirate7')
var pirateLoss = document.querySelector('#pirateLoss')
var pirateWin = document.querySelector('#pirateWin')
var lose = document.querySelector(".lose")
var win = document.querySelector(".win")
var winTracker = 0
var loseTracker = 0
var timeEl = document.getElementById("time")
var datas = ''
var timerInterval
// Get the info modal
var infoModal = document.getElementById("infoModal")
// Get the button that opens the info modal
var infoBtn = document.getElementById("infoButton")
// Get the <span> element that closes the info modal
var infoSpan = document.querySelector(".infoClose")
// Get the play again modal
var PAModal = document.getElementById("PAModal")
// Get the <span> element that closes the play again modal
var PASpanPlayAgain = document.getElementById("PAClose2")
// Get the <span> element that closes the play again modal and restarts the game
var PASpanGoBack = document.getElementById("PAClose")
// Get the win modal
var winModal = document.getElementById("winModal")
// Get the <span> element that closes the win modal
var winSpanPlayAgain = document.getElementById("winClose2")
// Get the <span> element that closes the win modal and restarts the game
var winSpanGoBack = document.getElementById("winClose")

function init() {
  getWins()
  getlosses()
  start()
}

function gameStart() {
  turnsLeft = 7
  pirateOne.classList.remove('hidden')
  pirateOne.classList.add('visible')
  pirateLoss.classList.add('hidden')
  pirateLoss.classList.remove('visible')
  timer()
  start()
}

function timer() {
  //fetch wins/losses
  startGame.disabled = true

  // Sets interval in variable
  var secondsLeft = 15  // Change back to 15 before presentation
  timerInterval = setInterval(function () {
    secondsLeft--
    timeEl.textContent = secondsLeft + " seconds left until loss of turn."

    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval)
      sweepSprite()
      if (turnsLeft > 0) {
        timer()
      }
      else {
        return
      }
    }

  }, 1000)
}

// Checks the board and, if all blanks are filled, fires the winGame function.
function checkWin() {
  if (fetched === blanks.join("")) {
    winGame()
  }
}

//Opens the win modal if the checkWin succeeds, ups the wins counter, and enables the start game button.
function winGame() {
  winModal.style.display = "block"
  winTracker++
  startGame.disabled = false
  setWins()
}

//Opens the Play Again Modal if turnsLeft turns to 0, ups the losses counter, and enables the start game button
function loseGame() {
  PAModal.style.display = "block"
  loseTracker++
  startGame.disabled = false
  setLosses()
}

//////
////// setting wins/losses to local storage
//////

// Updates win count on screen and sets win count to local storage
function setWins() {
  win.textContent = winTracker
  localStorage.setItem("winTrack", winTracker)
}

// Updates lose count on screen and sets lose count to local storage
function setLosses() {
  lose.textContent = loseTracker
  localStorage.setItem("loseTrack", loseTracker)
}

//////
//////  Fetching wins/losses from Local Storage
//////

// fetches win count from local storage, if it exists
function getWins() {
  var storedWins = localStorage.getItem("winTrack")
  if (storedWins === null) {
    winTracker = 0
  }
  else {
    winTracker = storedWins
  }
  win.textContent = winTracker
}

//fetches loss count from local storage
function getlosses() {
  var storedLosses = localStorage.getItem("loseTrack")
  if (storedLosses === null) {
    loseCounter = 0
  } else {
    loseTracker = storedLosses
  }
  lose.textContent = loseTracker
}


function checkWin() {
   if (fetched === blanks.join("")) {
    winGame()
}

//////
////// turning the fetched array into useable blanks
//////

function renderBlanks() {
  // turns joined fetch string into an array of letters
  lettersForBlanks = fetched.split("")
  amtBlanks = lettersForBlanks.length
  blanks = []
  // Uses loop to push blanks to lettersForBlanks array
  for (var i = 0; i < amtBlanks; i++) {
    if (lettersForBlanks[i] != " ") {
      blanks.push("_")
    }
    else {
      blanks.push(" ")
    }
  }
  // adds spaces between seperate blanks and letters.
  wordBlank.innerHTML = blanks.join("&nbsp")
}



// Tests if guessed letter is in word and renders it to the screen.
function checkLetters(letter) {
  var letterInWord = false
  for (var i = 0; i < amtBlanks; i++) {
    if (fetched[i] === letter) {
      letterInWord = true
    }
  }
  if (letterInWord) {
    for (var j = 0; j < amtBlanks; j++) {
      if (fetched[j] === letter) {
        blanks[j] = letter
      }
    }
    // replaces blanks with letters
    wordBlank.innerHTML = blanks.join("&nbsp")
    console.log(blanks.join(""))
  }
  if (!letterInWord) {
    sweepSprite()
  }
  timer()
}

//sweeps the sprite html and changes sprite location based on turnsLeft value and countdowns turnsLeft value
function countDown() {
  if (turnsLeft > 0) {
    turnsLeft--
    console.log(turnsLeft)
  }
}

function sweepSprite() {
  countDown()

  if (turnsLeft == 6) {
    pirateOne.classList.add('hidden')
    pirateOne.classList.remove('visible')
    pirateTwo.classList.remove('hidden')
    pirateTwo.classList.add('visible')
  }
  else if (turnsLeft == 5) {
    pirateTwo.classList.add('hidden')
    pirateTwo.classList.remove('visible')
    pirateThree.classList.remove('hidden')
    pirateThree.classList.add('visible')
  }
  else if (turnsLeft == 4) {
    pirateThree.classList.add('hidden')
    pirateThree.classList.remove('visible')
    pirateFour.classList.remove('hidden')
    pirateFour.classList.add('visible')
  }
  else if (turnsLeft == 3) {
    pirateFour.classList.add('hidden')
    pirateFour.classList.remove('visible')
    pirateFive.classList.remove('hidden')
    pirateFive.classList.add('visible')
  }
  else if (turnsLeft == 2) {
    pirateFive.classList.add('hidden')
    pirateFive.classList.remove('visible')
    pirateSix.classList.remove('hidden')
    pirateSix.classList.add('visible')
  }
  else if (turnsLeft == 1) {
    pirateSix.classList.add('hidden')
    pirateSix.classList.remove('visible')
    pirateSeven.classList.remove('hidden')
    pirateSeven.classList.add('visible')
  }
  else if (turnsLeft == 0) {
    pirateSeven.classList.add('hidden')
    pirateSeven.classList.remove('visible')
    pirateLoss.classList.remove('hidden')
    pirateLoss.classList.add('visible')
    loseGame()
  }

  var turnsLeftCounter = "Turns Left " + turnsLeft
  document.getElementById('turnsLeftCounter').innerHTML = turnsLeftCounter
}

///////
/////// Play Again Modal
///////

// When the user clicks on <span>, close the modal
PASpanGoBack.addEventListener('click', function () {
  PAModal.style.display = "none"
})
// When the user clicks on <span>, close the modal and 'start game' is initiated
PASpanPlayAgain.addEventListener('click', function () {
  PAModal.style.display = "none"
  startGame.disabled = false
  gameStart()
})

///////
/////// Win Modal
///////

// When the user clicks on <span>, close the modal
winSpanGoBack.addEventListener('click', function () {
  winModal.style.display = "none"
})
// When the user clicks on <span>, close the modal and 'start game' is initiated
winSpanPlayAgain.addEventListener('click', function () {
  winModal.style.display = "none"
  startGame.disabled = false
  gameStart()
})

////
//// Game Information Modal
////

// When the user clicks the button, open the modal 
infoBtn.addEventListener('click', function () {
  infoModal.style.display = "block"
})

// When the user clicks on <span>, close the modal
infoSpan.addEventListener('click', function () {
  infoModal.style.display = "none"
})

//Click button to start a new game
startGame.addEventListener('click', gameStart)

document.addEventListener("keydown", function (event) {
  var key = event.key.toLowerCase()
  var alphabetNumericCharacters = "abcdefghijklmnopqrstuvwxyz-' ".split("")
  // Test if key pushed is letter
  if (alphabetNumericCharacters.includes(key)) {
    var letterGuessed = event.key
    clearInterval(timerInterval)
    checkLetters(letterGuessed)
    checkWin()
  }
})

// Tests if guessed letter is in word and renders it to the screen.
function checkLetters(letter) {
  var letterInWord = false
  for (var i = 0; i < amtBlanks; i++) {
    if (fetched[i] === letter) {
      letterInWord = true
    }
  }
  if (letterInWord) {
    for (var j = 0; j < amtBlanks; j++) {
      if (fetched[j] === letter) {
        blanks[j] = letter
      }
    }
    // replaces blanks with letters
    wordBlank.innerHTML = blanks.join("&nbsp")
    console.log(blanks.join(""))
  }
  if (!letterInWord) {
    sweepSprite()
  }
  timer()
}

function start() {
fetch(requestUrl)
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    console.log(data)
    datas = data.contents.names.join(' ')
    fetched = datas.toLowerCase()
    console.log(fetched)

    // whatever is going to be using this needs to be called from in here
    // use "fetched"
    renderBlanks()
  })
}

init()