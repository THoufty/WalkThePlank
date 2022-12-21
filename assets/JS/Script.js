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


// Get the modal
var modal = document.getElementById("playAgainModal");

// Get the button that opens the modal
var btn = document.getElementById("Button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  infoModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  infoModal.style.display = "none";
}
