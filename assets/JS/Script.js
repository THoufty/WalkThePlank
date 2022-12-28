var requestUrl = 'http://api.fungenerators.com/pirate/generate/name?variation=male&limit=1&api_key=xVnLMxZTVVNHCfilqpljlAeF'

var fetched = ''
var timeEl = document.getElementById("time")


fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
  fetched = data.contents.names
  console.log(data.contents.names)

  // whatever is going to be using this needs to be called from in here
  // use "fetched"

  });

  var startGame = document.getElementById("fetch-button");

  startGame.addEventListener('click', function() {
      // Sets interval in variable
      var secondsLeft = 15
      var timerInterval = setInterval(function() {
      
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left until loss of turn.";
    
        if(secondsLeft === 0) {
          // Stops execution of action at set interval
          clearInterval(timerInterval);}
      
      }, 1000);
    })
    

////
//// Game Information Modal
////

// Get the modal
var infoModal = document.getElementById("infoModal");

// Get the button that opens the modal
var infoBtn = document.getElementById("infoButton");

// Get the <span> element that closes the modal
var infoSpan = document.getElementsByClassName("infoClose")[0];

// When the user clicks the button, open the modal 
infoBtn.onclick = function() {
  infoModal.style.display = "block";
}

// When the user clicks on <span>, close the modal
infoSpan.onclick = function() {
  infoModal.style.display = "none";
}

///////
/////// Play Again Modal
///////

// Get the modal
var PAModal = document.getElementById("PAModal");

// Get the button that opens the modal
var PABtn = document.getElementById("PAButton");

// Get the <span> element that closes the modal
var PASpan = document.getElementsByClassName("PAClose2")[0];

// When triggered, open the modal 
PABtn.onclick = function() {
  PAModal.style.display = "block";
}

// When the user clicks on <span>, close the modal
PASpan.onclick = function() {
  PAModal.style.display = "none";
}

////////
//////// Sweeping the Sprite
////////
// var sprites = document.getElementsByClassName("sprite")
// var spritesarr = Array.from(sprites)
//  spritesarr.forEach(sweepSprite)

// function sweepSprite() {
//   var turnsLeft = 1
    
//     if ( turnsLeft == 1 ) {
//       Element.classList.add("visible")
//       Element.classList.remove("hidden")
//     }
//     else {
//       Element.classList.add("hidden")
//       Element.classList.remove("visible")
//     }
//   }


  var usefulBtn = document.getElementById("usefulButton")
  var turnsLeft = 1

// When triggered, change turnsLeft to 1
usefulBtn.onclick = function() {
  if (turnsLeft == 1) {
    turnsLeft = 0
  }
  else if (turnsLeft == 0) {
    turnsLeft = 1
  }
}

function sweepSprite() {


  $(".sprite").each(function () {
  

    if (turnsLeft == 1) {
      $(this).removeClass("hidden")
      $(this).addClass("visible")
     }
    else if (turnsLeft != 1) {
      $(this).addClass("hidden")
      $(this).removeClass("visible")
    }
    }
  )
}

function generateButtons() {
  let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
    `
      <button
        class="btn btn-lg btn-primary m-2"
        id='` + letter + `'
        onClick="handleGuess('` + letter + `')"
      >
        ` + letter + `
      </button>
    `).join('');
  document.getElementById('keyboard').innerHTML = buttonsHTML;
}

generateButtons();