var requestUrl = 'http://api.fungenerators.com/pirate/generate/name?variation=male&limit=1&api_key=xVnLMxZTVVNHCfilqpljlAeF'
var startGame = document.getElementById("fetch-button")
var usefulBtn = document.getElementById("UsefulButton")
var turnsLeft;
var fetched = ''
var blanks = [];
var lettersForBlanks = [];
var amtBlanks = 0
var wholeName = ''
var wordBlank = document.querySelector(".word-blanks");
var pirateOne = document.querySelector('#pirate1')
var pirateTwo = document.querySelector('#pirate2')
var pirateThree = document.querySelector('#pirate3')
var pirateFour = document.querySelector('#pirate4')
var pirateFive = document.querySelector('#pirate5')
var pirateSix = document.querySelector('#pirate6')
var pirateSeven = document.querySelector('#pirate7')
var pirateLoss = document.querySelector('#pirateLoss')
var pirateWin = document.querySelector('#pirateWin')
var lose = document.querySelector(".lose");
var win = document.querySelector(".win");
var winTracker= 0
var loseTracker = 0
var Winner = false

var timeEl = document.getElementById("time")
// Get the info modal
var infoModal = document.getElementById("infoModal")
// Get the button that opens the info modal
var infoBtn = document.getElementById("infoButton")
// Get the <span> element that closes the info modal
var infoSpan = document.querySelector(".infoClose")
// Get the play again modal
var PAModal = document.getElementById("PAModal")
// Get the button that opens the play again modal
var PABtn = document.getElementById("PAButton")
// Get the <span> element that closes the play again modal
var PASpanPlayAgain = document.getElementById("PAClose2")
// Get the <span> element that closes the play again modal and restarts the game
var PASpanGoBack = document.getElementById("PAClose")

function init() {
  getWins();
  getlosses();
}

function gameStart() {
  //fetch wins/losses
  // Sets interval in variable
  turnsLeft = 7
  var secondsLeft = 15
  var timerInterval = setInterval(function () {

    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left until loss of turn."

    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval)
    }

  }, 1000)
}

function winGame() {
  wordBlank.textContent = "YOU WON!!!🏆 ";
  winTracker++
  startButton.disabled = false;
  setWins()
}

// The loseGame function is called when timer reaches 0
function loseGame() {
  wordBlank.textContent = "GAME OVER";
  loseTracker++
  startButton.disabled = false;
  setLosses()
}

// Updates win count on screen and sets win count to client storage
function setWins() {
  win.textContent = winTracker;
  localStorage.setItem("winTrack", winTracker);
}

// Updates lose count on screen and sets lose count to client storage
function setLosses() {
  lose.textContent = loseTracker;
  localStorage.setItem("loseTrack", loseTracker);
}

// These functions are used by init
function getWins() {
  // Get stored value from client storage, if it exists
  var storedWins = localStorage.getItem("winTrack");
  // If stored value doesn't exist, set counter to 0
  if (storedWins === null) {
    winTracker = 0;
  } else {
    // If a value is retrieved from client storage set the winCounter to that value
    winTracker = storedWins;
  }
  //Render win count to page
  win.textContent = winTracker;
}

function getlosses() {
  var storedLosses = localStorage.getItem("loseTrack");
  if (storedLosses === null) {
    loseCounter = 0;
  } else {
    loseTracker = storedLosses;
  }
  lose.textContent = loseTracker;
}

function checkWin() {
  // If the word equals the blankLetters array when converted to string, set isWin to true
  if (fetched === blanksLetters.join("")) {
    // This value is used in the timer function to test if win condition is met
    isWin = true;
  }
}

function renderBlanks() {
  // Randomly picks word from words array
  lettersForBlanks = fetched.split("");
  amtBlanks = lettersForBlanks.length;
  blanks = []
  // Uses loop to push blanks to blankLetters array
  for (var i = 0; i < amtBlanks; i++) {
    if (lettersForBlanks[i] != " ") {
      blanks.push("_")
    }
    else {
      blanks.push(" ")
    }
  }
  // Converts blankLetters array into a string and renders it on the screen
  wordBlank.innerHTML = blanks.join("&nbsp;")
}


//Opens the PLay Again Modal if turnsLeft turns to 0
function loseGame() {
  if (turnsLeft == 0) {
    PAModal.style.display = "block"
  }
}

//sweeps the sprite html and changes sprite location based on turnsLeft value and countdowns turnsLeft value
function countDown() {
  if (turnsLeft > 0) {
    turnsLeft--;
    console.log(turnsLeft)
  }
}

function sweepSprite() {
  countDown()
  
  if (turnsLeft == 7) {
    pirateOne.classList.remove('hidden')
    pirateOne.classList.add('visible')
  }

  else if (turnsLeft == 6) { 

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
  }
  
  var turnsLeftCounter = "Turns Left " + turnsLeft
  document.getElementById('turnsLeftCounter').innerHTML = turnsLeftCounter
  
  loseGame()
  
  
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
  gameStart()
  // call the timer
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

// Useful button to simulate a keydown event
usefulBtn.addEventListener('click', sweepSprite)



function checkWin() {
  // If the word equals the blankLetters array when converted to string, set isWin to true
  if (fetched === blanks.join("")) {
    // This value is used in the timer function to test if win condition is met
    isWin = true;
  }
}


document.addEventListener("keydown", function (event) {
  var key = event.key.toLowerCase();
  var alphabetNumericCharacters = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");
  // Test if key pushed is letter
  if (alphabetNumericCharacters.includes(key)) {
    var letterGuessed = event.key;
    checkLetters(letterGuessed)
    checkWin();
  }
});

// Tests if guessed letter is in word and renders it to the screen.
function checkLetters(letter) {
  var letterInWord = false;
  for (var i = 0; i < amtBlanks; i++) {
    if (fetched[i] === letter) {
      letterInWord = true;
    }
  }
  if (letterInWord) {
    for (var j = 0; j < amtBlanks; j++) {
      if (fetched[j] === letter) {
        blanks[j] = letter;
      }
    }
    wordBlank.textContent = blanks.join(" ");
  }
}

// document.addEventListener('keydown', function () {
//   checkLetters()
//   if 
// }
// )

// function checkLetters(){
  // Tests if guessed letter is in word and renders it to the screen.
  function checkLetters(letter) {
    var letterInWord = false;
    for (var i = 0; i < amtBlanks; i++) {
      if (chosenWord[i] === letter) {
        letterInWord = true;
      }
    }
    if (letterInWord) {
      for (var j = 0; j < amtBlanks; j++) {
        if (chosenWord[j] === letter) {
          blanksLetters[j] = letter;
        }
      }
      wordBlank.textContent = blanksLetters.join(" ");
    }
  }
// if //correct
// //add letter
// else {
//   sweepSprite()
// }}


fetch(requestUrl)
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    fetched = data.contents.names.join(' ')
    console.log(data.contents.names)

    // whatever is going to be using this needs to be called from in here
    // use "fetched"
    renderBlanks()

  });

