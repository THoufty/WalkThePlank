var requestUrl = 'http://api.fungenerators.com/pirate/generate/name?variation=male&limit=1&api_key=xVnLMxZTVVNHCfilqpljlAeF'
var startGame = document.getElementById("fetch-button")
var usefulBtn = document.getElementById("UsefulButton")
var turnsLeft;
var fetched = ''
var timeEl = document.getElementById("time")
// Get the info modal
var infoModal = document.getElementById("infoModal")
// Get the button that opens the info modal
var infoBtn = document.getElementById("infoButton")
// Get the <span> element that closes the info modal
var infoSpan = document.getElementsByClassName("infoClose")
// Get the play again modal
var PAModal = document.getElementById("PAModal")
// Get the button that opens the play again modal
var PABtn = document.getElementById("PAButton")
// Get the <span> element that closes the play again modal
var PASpan2 = document.getElementsByClassName("PAClose2")
// Get the <span> element that closes the play again modal and restarts the game
var PASpan = document.getElementsByClassName("PAClose")



function gameStart() {
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

//Opens the PLay Again Modal if turnsLeft turns to 0
function loseGame() {
if (turnsLeft == 0) {
  PAModal.style.display = "block"
}}

//sweeps the sprite html and changes sprite location based on turnsLeft value and countdowns turnsLeft value
function sweepSprite() {
  if (turnsLeft > 0) {
    turnsLeft--;
    console.log(turnsLeft)
  }
  
  $(".sprite").each(function () {
    
    if (turnsLeft == 7) {
      $("#pirate1").removeClass("hidden")
      $("#pirate1").addClass("visible")
    }
    else if (turnsLeft == 6) {
      $("#pirate1").addClass("hidden")
      $("#pirate1").removeClass("visible")
      $("#pirate2").removeClass("hidden")
      $("#pirate2").addClass("visible")
    }
    else if (turnsLeft == 5) {
      $("#pirate2").addClass("hidden")
      $("#pirate2").removeClass("visible")
      $("#pirate3").removeClass("hidden")
      $("#pirate3").addClass("visible")
    }
    else if (turnsLeft == 4) {
      $("#pirate3").addClass("hidden")
      $("#pirate3").removeClass("visible")
      $("#pirate4").removeClass("hidden")
      $("#pirate4").addClass("visible")
    }
    else if (turnsLeft == 3) {
      $("#pirate4").addClass("hidden")
      $("#pirate4").removeClass("visible")
      $("#pirate5").removeClass("hidden")
      $("#pirate5").addClass("visible")
    }
    else if (turnsLeft == 2) {
      $("#pirate5").addClass("hidden")
      $("#pirate5").removeClass("visible")
      $("#pirate6").removeClass("hidden")
      $("#pirate6").addClass("visible")
    }
    else if (turnsLeft == 1) {
      $("#pirate6").addClass("hidden")
      $("#pirate6").removeClass("visible")
      $("#pirate7").removeClass("hidden")
      $("#pirate7").addClass("visible")
    }
    else if (turnsLeft == 0) {
      $("#pirate7").addClass("hidden")
      $("#pirate7").removeClass("visible")
      $("#pirateLoss").removeClass("hidden")
      $("#pirateLoss").addClass("visible")
    }
    
    var turnsLeftCounter = "Turns Left " + turnsLeft
    document.getElementById('turnsLeftCounter').innerHTML = turnsLeftCounter

    loseGame()
    
    ///////
    /////// Play Again Modal
    ///////
    
    // When the user clicks on <span>, close the modal
    // PASpan.onclick = function () {
      //   PAModal.style.display = "none"
      // }
      // When the user clicks on <span>, close the modal and 'start game' is initiated
      //     PASpan2.onclick = function () {
        //       PAModal.style.display = "none"
        // // call the timer
        //     }
        
      })
    }
    
    

////
//// Game Information Modal
////

// When the user clicks the button, open the modal 
infoBtn.onclick = function () {
  infoModal.style.display = "block"
}

// When the user clicks on <span>, close the modal
infoSpan.onclick = function () {
  infoModal.style.display = "none"
}

    
    // function generateButtons() {
      //   let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
      //     `
      //       <button
      //         class="btn btn-lg btn-primary m-2"
      //         id='` + letter + `'
      //         onClick="handleGuess('` + letter + `')"
      //         >
      //         ` + letter + `
      //         </button>
      //     `).join('')
      //   document.getElementById('keyboard').innerHTML = buttonsHTML
      // }
      
      //Click button to start a new game
      startGame.addEventListener('click', gameStart)


      // Useful button to simulate a keydown event
      usefulBtn.addEventListener('click', sweepSprite)
      
      
      
      fetch(requestUrl)
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        fetched = data.contents.names
        console.log(data.contents.names)
        
        // whatever is going to be using this needs to be called from in here
        // use "fetched"
        
      });