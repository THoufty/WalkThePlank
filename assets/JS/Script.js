var requestUrl = 'http://api.fungenerators.com/pirate/generate/name?variation=male&limit=1&api_key=xVnLMxZTVVNHCfilqpljlAeF'
var timeEl = document.getElementById("time")

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Fetch Response \n-------------');
    console.log(data);
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
