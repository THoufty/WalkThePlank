// JS file
// git push -u origin feature/apis

//timer
var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("main");

var secondsLeft = 15;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left until loss of turn.";
})
}
setTime();

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
var PASpan = document.getElementsByClassName("PAClose")[0];

// When triggered, open the modal 
PABtn.onclick = function() {
  PAModal.style.display = "block";
}

// When the user clicks on <span>, close the modal
PASpan.onclick = function() {
  PAModal.style.display = "none";
}
